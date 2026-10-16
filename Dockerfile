# JATEL-GAMES
# Multi-stage build for optimized production image

FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy only necessary files
COPY index.html /usr/share/nginx/html/
COPY *.html /usr/share/nginx/html/
COPY css/ /usr/share/nginx/html/css/
COPY js/ /usr/share/nginx/html/js/
COPY fonts/ /usr/share/nginx/html/fonts/
COPY images/ /usr/share/nginx/html/images/
COPY img/ /usr/share/nginx/html/img/
COPY src/ /usr/share/nginx/html/src/
COPY assets/ /usr/share/nginx/html/assets/
COPY game/ /usr/share/nginx/html/game/
COPY jogo_perfil/ /usr/share/nginx/html/jogo_perfil/
COPY jovens/ /usr/share/nginx/html/jovens/
COPY quem_disse/ /usr/share/nginx/html/quem_disse/
COPY scripts/ /usr/share/nginx/html/scripts/
COPY stop_biblico/ /usr/share/nginx/html/stop_biblico/
COPY styles/ /usr/share/nginx/html/styles/

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
