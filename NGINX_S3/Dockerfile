      ## Setup to use static S3 bucket as website content is being developed.  Using for quick demo of external static content.
      
      FROM artifacts.developer.gov.bc.ca/docker-remote/alpine:latest as build-stage

      # Set AWS credentials

      ARG AWS_ACCESS_KEY_ID
      ARG AWS_SECRET_ACCESS_KEY
      ARG AWS_ENDPOINT_URL
      ENV AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID
      ENV AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY
      ENV AWS_ENDPOINT_URL=$AWS_ENDPOINT_URL

      # Set S3 bucket name and object prefix using environment variables

      ARG S3_BUCKET_NAME
      ARG S3_OBJECT_PREFIX

      # Download website content from S3 bucket

      WORKDIR /app

      RUN apk add --no-cache aws-cli unzip && \
          aws --endpoint-url=$AWS_ENDPOINT_URL s3 sync s3://$S3_BUCKET_NAME/$S3_OBJECT_PREFIX /app && \
          unzip *.zip -d /app && \
          rm /app/*.zip && \
          apk del aws-cli unzip

      FROM artifacts.developer.gov.bc.ca/docker-remote/nginx:stable as production-stage

      RUN printf 'worker_processes auto; \n \
        error_log  /var/log/nginx/error.log; \n \
        \n \
        pid /tmp/nginx.pid;\n \
        \n \
        events { \n \
        worker_connections 4096; \n \
        } \n \
        \n \
        http { \n \
        include       /etc/nginx/mime.types; \n \
        client_body_temp_path /tmp/client_temp; \n \
        proxy_temp_path       /tmp/proxy_temp_path; \n \
        fastcgi_temp_path     /tmp/fastcgi_temp; \n \
        uwsgi_temp_path       /tmp/uwsgi_temp; \n \
        scgi_temp_path        /tmp/scgi_temp; \n \
        default_type  application/octet-stream; \n \
        server_tokens off; \n \
        underscores_in_headers on; \n \
        \n \
        server { \n \
        \n \
          add_header Strict-Transport-Security "max-age=31536000;"; \n \
          add_header X-XSS-Protection "1; mode=block"; \n \
          add_header Referrer-Policy @same-origin@; \n \
          add_header X-Content-Type-Options "nosniff"; \n \
          add_header X-Frame-Options "DENY"; \n \
          add_header Permissions-Policy "geolocation=(),midi=(),sync-xhr=(),microphone=(),camera=(),magnetometer=(),gyroscope=(),fullscreen=(self),payment=()"; \n \
          add_header Cache-Control "no-cache,no-store,must-revalidate"; \n \
          add_header Pragma "no-cache"; \n \
          add_header Content-Security-Policy "default-src @self@; script-src @self@; style-src @self@ @unsafe-inline@; img-src @self@ data:; font-src @self@; frame-ancestors @none@;"; \n \
        \n \
          listen 8080; \n \
          server_name _; \n \
        \n \
          index index.html; \n \
          error_log /dev/stdout info; \n \
          access_log /dev/stdout; \n \
        \n \
          location / { \n \
            root /app; \n \
            index  index.html; \n \
            try_files $uri $uri/ /index.html; \n \
          } \n \
        \n \
            location /nginx_status { \n \
              stub_status on; \n \
        \n \
              allow all; \n \
        \n \
              access_log off; \n \
          } \n \
        } \n \
        } \n' \
        > /etc/nginx/nginx.conf && \
        sed -i "s/@/'/g" /etc/nginx/nginx.conf
      RUN mkdir /app
      COPY --from=build-stage /app /app
      EXPOSE 8080:8080

      CMD ["nginx", "-g", "daemon off;"]