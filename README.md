![CI](https://github.com/nturley/gullbog/workflows/CI/badge.svg)
# Gullbog

An online game similar to the game Boggle.

## Architecture

- [Express](https://expressjs.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Heroku](https://www.heroku.com/)
- [React](https://reactjs.org/)
- [Webpack](https://webpack.js.org/)

The frontend is built with React and Webpack. The backend so far is just a static file server running on Heroku, but we'll be adding a REST and websocket API later.

Webpack allows us to easily combine all of our source files into one file at build time. It also allows us to use nodejs libraries and embed them into our built JS file.

We are hosted on Heroku. Heroku is a Platform-As-A-Service (PaaS). In fact, it's one of the services that first made PaaS popular. Using a PaaS makes it very easy to develop, test, and deploy without having to think about where it is going or how it works. The free tier of Heroku sleeps the app when it doesn't receive any HTTP traffic for an hour or something, which is exactly what we want. We don't want to bother leaving our app state running if there is nobody online playing it.

We are using React to manage our View-model binding. This means we can create a set of React components and define their render function and the data that makes up their "state" and they will automatically rerender every time the state changes. This allows the UI to always reflect the current data that represents the state of the game.

Typescript extends JS with additional features such as type annotations that allows us to more easily declare the structure of our data. This will be especially useful for the interfaces between the frontend and the backend where mismatches in the data types can cause bugs.
