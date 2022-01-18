FROM node:17 as development
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install 
# Set env variable
ARG REACT_APP_NAME
ENV REACT_APP_NAME=$REACT_APP_NAME
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]

