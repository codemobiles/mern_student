# youtube

- https://www.youtube.com/watch?v=himWG72nZhs

# setup typescript compilier and dev tools

npm i -g typescript dotenv ts-node ts-node-dev
tsc --init (to create tsconfig.json)

# new project typescript with typeorm

- npx typeorm init --name backend --database mongodb --express

# to run and populate collection

- yarn add express bcryptjs cors formidable fs-extra jsonwebtoken onesignal-node typescript
- yarn add @types/bcryptjs @types/jsonwebtoken @types/fs-extra @types/cors -D

edit package.json
yarn start

- sudo npm i -g pm2

# advance ecosystem

- pm2 init simple
- pm2 start ecosystem.config.js

# ecosystem.config.js

```
module.exports = {
    apps: [
    {
        name: "app1",
        script: "./index.js",
        node_args: "-r dotenv/config",
    },
],
};

"scripts": {
"build": "tsc && cp \*.key .env ecosystem.config.js ./build",
}
```

# generate rsa key pair (jwt)

- https://travistidwell.com/jsencrypt/demo/

# set env variable

- .env
- .env.production

### mac

- export ROOT_PATH=$(pwd)

### window

- set ROOT_PATH=%cd%
