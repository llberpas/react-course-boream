Jose Andres
jap.leon@boream.com

- Doc: https://we.tl/t-u5oE7ZYEyf
- Repo: https://github.com/angelisco1/curso-react-zp

Crear un proyecto de manera automatica (incluye una barbaridad de librerias y dependencias que no vamos a necesitar)

  npx create-react-app reactjs-create-react-app-lab

Crear un proyecto limpio que usaremos como plantilla (recomendado):

  mkdir proyecto-plantilla
  cd proyecto-plantilla
  npm init -y
  npm install --save react react-dom
  npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader @babel/plugin-transform-runtime
  npm install --save-dev webpack webpack-cli webpack-dev-server
  npm install --save-dev css-loader style-loader html-webpack-plugin
  npm install --save-dev prop-types
  npm install --save-dev copy-webpack-plugin
  npm install --save-dev react-router-dom
  npm install --save-dev redux
  npm install --save-dev react-redux

Build del proyecto

  npm run build

Levantar sevidor en local

  cd dist
  npx http-server

o, con npm

  npm start

Hooks de usuarios

  https://nikgraf.github.io/react-hooks/