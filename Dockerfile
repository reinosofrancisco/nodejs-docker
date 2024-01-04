FROM node

# Create app directory
WORKDIR /app

# NodeJs Package
COPY package*.json ./

# install dependencies for NodeJs
RUN npm install

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD ["npm", "start"]