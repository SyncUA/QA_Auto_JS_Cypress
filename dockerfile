FROM cypress/included:15.7.0
WORKDIR /app

COPY package.json /app
COPY package-lock.json /app

RUN npm install

COPY . .

CMD ["npx", "cypress", "run"]
