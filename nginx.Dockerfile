from nginx
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 8080
cmd ["nginx","-g","daemon off;"]