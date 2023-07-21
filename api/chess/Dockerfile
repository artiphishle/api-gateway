#
# Chess API P.O.C.
#
FROM node:alpine
WORKDIR /usr/src/api/chess

COPY package*.json ./
RUN npm i
COPY . ./.

VOLUME /usr/src/api/chess

EXPOSE 3001
CMD ["npm","start"]