FROM nginx:1.15.2-alpine
COPY ./docs/.vuepress/dist /var/www
COPY docker/nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 8080
ENTRYPOINT ["nginx","-g","daemon off;"]