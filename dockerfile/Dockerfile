FROM busybox:1.37
WORKDIR /www
COPY index.html healthz ./
EXPOSE 3000
CMD ["sh", "-c", "httpd -f -p ${PORT:-3000} -h /www"]
