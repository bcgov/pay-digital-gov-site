# GitHub Actions CI/CD Pipelines

The GitHub Action `cron-tag-cleanup.yaml` is run as a weekly cron job, but it can also be run on demand. It will:
- Remove any OpenShift `imagestreamtag` created by the `main-deploy.yaml` Action where the imagestreamtag is not tagged to any environment (`dev`, `test`, `prod`) and the `imagestreamtag` is not among the most recent three builds

The GitHub Action `main-deploy.yaml` is only run manually. It will:

- Build images using Dockerfile
- Push the built images to `-tools` namespaces
- Use GitHub `environments` to define approvers for tagging images to `-dev`, `-test`, and `-prod` namespaces
- Run `oc tag` to tag the images in the two `-tools` namespaces for `dev`, then `test`, and then `prod` tags
- After deployment to Payments dev, wait for rollout of the new images
- After deployment to Payments dev and OWASP ZAP tests

## Setup

The following setup items are needed to run the Actions.

### Environments

The Actions use GitHub `Environments` to require approval before a build is deployed to an environment. When the approval job is reached, the reviewers for the defined environment will be notified that their approval is needed to allow the deployment.

Set up the following environments in your repository Settings:

1. `Payments Dev`
1. `Payments Test`
1. `Payments Prod`

In each of these environments set up `Environment protection rules` with at least one `Required reviewer`.

### OpenShift Service Accounts

A Service Account is used to:
- push images to OpenShift `-tools` namespaces
- tag images for deployment to different environments
- wait for new images to roll out before tests are run

The Service Account named `github-actions` needs to be set up in all the `-tools`, `-dev`, `-test`, and `-prod` namespaces for Payments. This Service Account will have the bare minimum of permissions that are needed to perform the `oc` calls needed for these Actions.

Using [the OpenShift template](openshift/service_account.yaml) run:

```
$ oc process -f service_account.yaml | oc -n <namespace> apply -f -
```

### GitHub Secrets

There are many GitHub Secrets that are needed to run the Actions:

| Secret Name | Description |
| ----------- | ----------- |
| ARTIFACTORY_PASSWORD | Some of the builds use Dockerfiles that pull images from Artifactory. This value comes from the `artifactory-creds` secret |
| ARTIFACTORY_REGISTRY | Some of the builds use Dockerfiles that pull images from Artifactory. This value comes from the `artifactory-creds` secret |
| ARTIFACTORY_USERNAME | Some of the builds use Dockerfiles that pull images from Artifactory. This value comes from the `artifactory-creds` secret |
| LICENCE_PLATE_PAYMENTS | The six character "licence plate" prefix for Payments namespaces |
| OPENSHIFT_API | The URL of the OpenShift API used to make API calls |
| OPENSHIFT_REGISTRY | The Image Registry used for pushing images to `-tools` namespaces |
| SA_USERNAME | The name of the Service Account: `github-actions` in namespaces |
| SA_PASSWORD_PAYMENTS_DEV | The token for the Service Account `github-actions` in Payments dev namespace |
| SA_PASSWORD_PAYMENTS_TEST | The token for the Service Account `github-actions` in Payments test namespace |
| SA_PASSWORD_PAYMENTS_TOOLS | The token for the Service Account `github-actions` in Payments tools namespace |
| ZAP_PAYMENTS_DEV | The URL of Payments dev used for running the OWASP ZAP tests |
| AWS_ACCESS_KEY_ID | S3 Key ID for where static website content is stored
| AWS_SECRET_ACCESS_KEY | S3 Secret
| AWS_ENDPOINT_URL | Location of Object Storage Server
| S3_BUCKET_NAME | S3 Bucket where payments statics files are stored

(note: in OneNote there is a script to set these up automatically, but it can't be committed)

## Third-Party Actions

The following actions are being used:

- [actions/checkout@v2](https://github.com/actions/checkout): checks the code out of the GitHub repository
- [redhat-actions/buildah-build@v2](https://github.com/redhat-actions/buildah-build): builds using a Dockerfile
- [redhat-actions/oc-login@v1](https://github.com/redhat-actions/oc-login): logs into OpenShift using `oc`
- [redhat-actions/podman-login@v1](https://github.com/redhat-actions/podman-login): logs into Artifactory to be able to pull images for builds
- [redhat-actions/push-to-registry@v1](https://github.com/redhat-actions/push-to-registry): pushes built images into the tools namespaces
- [redhat-actions/s2i-build@v2](https://github.com/redhat-actions/s2i-build): builds using Source to Image (S2I)
- [zaproxy/action-full-scan@v0.3.0](https://github.com/zaproxy/action-full-scan): runs an OWASP ZAP scan against the Staff Frontend and the Appointment Frontend

## Notes
- The Artifacts aren't visible until after the workflow has completed running. It would be ideal if they were available as soon as the tests finish running. On the other hand, on test failure they should be immediately available and perhaps this is good enough? Details here: https://github.com/actions/upload-artifact/issues/53
- There is an artifact called `zap-scan` that is created and should be ignored. Waiting on an enhancement from ZAP so that we can specify the name of the Artifact: https://github.com/zaproxy/action-baseline/issues/45
- Openshift kustomize templates and ArgoCD is used to manage BuildConfigs and Deployment Configs.  They are located in a private repo at this time due to BC Government ArgoCD requirements. #TODO Add copy of kustomize templates, if someone creates a github issue requesting a copy.
