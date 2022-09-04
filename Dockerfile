FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["*", "./"]
RUN npm install -g pnpm && pnpm install 
COPY . .
EXPOSE 3000
EXPOSE 5432
EXPOSE 27017
RUN chown -R node /usr/src/app
USER node
CMD ["pnpm", "run", "dev"]