# new react project

- npm create vite@latest
- yarn create vite

# Master project and docs

- https://drive.google.com/file/d/1fc9SN56tPAfpq53Kq97sstw6aWw3r_Q7/view?usp=share_link

# Tools and IDE

- ottotree: https://chrome.google.com/webstore/detail/octotree-github-code-tree/bkhaagjahfmjljalopjnoealnfndnagc
- nodejs lts: https://nodejs.org/en/
- vscode: https://code.visualstudio.com/
- docker: https://www.docker.com/

# vscode extension

```
code --install-extension dsznajder.es7-react-js-snippets
code --install-extension vscode-icons-team.vscode-icons
code --install-extension naumovs.color-highlight
code --install-extension esbenp.prettier-vscode
code --install-extension humao.rest-client
code --install-extension riazxrazor.html-to-jsx
code --install-extension christian-kohler.path-intellisense
code --install-extension zignd.html-css-class-completion
code --install-extension code --install-extension
code --install-extension ms-azuretools.vscode-docker
code --install-extension bradlc.vscode-tailwindcss
code --install-extension mongodb.mongodb-vscode
```

# Test Docker and mongo

- docker run --rm --name cmdev-mongo-rm -p 27018:27017 -d mongo
- mongodb://localhost:27019

# install

- yarn add @emotion/react @emotion/styled @mui/icons-material @mui/material @mui/x-data-grid chart.js react-chartjs-2 @react-hook/debounce react-router-dom @types/react-router-dom axios url-join react-number-format react-redux redux @reduxjs/toolkit react-hook-form @hookform/resolvers yup faker@5.5.3 @types/faker@5.5.3 copy-to-clipboard dayjs

- yarn add --dev @types/node

# new project

npx create-react-app <name> --template typescript

# react snippet

tsrc : generate typescript fc

# install

yarn add @emotion/react @emotion/styled @mui/icons-material @mui/material @mui/x-data-grid chart.js react-chartjs-2 @react-hook/debounce react-router-dom @types/react-router-dom axios url-join react-number-format react-redux redux @reduxjs/toolkit react-hook-form @hookform/resolvers yup faker@5.5.3 @types/faker@5.5.3 copy-to-clipboard

# create folders

src/components

- fragments
- layouts
- pages

# Page Components

// In Pages
npm i -g create-react-component-folder
yarn add global create-react-component-folder

// src/components/pages
npx crcf -f --notest --typescript LoginPage RegisterPage ReportPage StockPage StockCreatePage StockEditPage TransactionPage ShopPage

// src/components/layouts
npx crcf -f --notest --typescript Header Menu AuthorizedPage

// src/components/fragments
npx crcf -f --notest --typescript StockCard Payment

npx crcf -f --stylesext --notest --typescript Test

tsconfig.json:
{
"compilerOptions": {
"lib": ["es6", "dom"],
"noImplicitAny": true,
"noImplicitThis": true,
"strictNullChecks": true
}
}

# example drawers

https://mui.com/components/drawers/

node server.js
npx nodemon server.js
npm init

# private and public keys for jwt

- https://travistidwell.com/jsencrypt/demo/
- let's set encode to 2048, otherwise it will error when sign during login
