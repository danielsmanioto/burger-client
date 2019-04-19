FROM nginx
COPY ./site /usr/share/nginx/html/

VOLUME /Arquivos/
EXPOSE 80
WORKDIR /usr/share/nginx/html/
ENTRYPOINT ["/usr/sbin/nginx"]
CMD ["-g", "daemon off;"]
