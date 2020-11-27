# ----------------------------Coding Challenge React APP------------------------- #

# Basic Configuration

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# Setup

npx -create-react-app project-name --template --typescript

Terminal will create a template of an APP with typesrcipt in it and the necessary modules needed for the project.

cd project name

Go to the folder of the project.

npm start / yarn start

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# API Used

[https://countries-274616.ew.r.appspot.com]

# Dependencies needed 

npm install react-router-dom / yarn add react-react-dom

npm @types/react-router-dom  / yarn add @types/react-router-dom (for typescript)

npm install @apollo/client graphql / yarn add @apollo/client graphql

# Scripts to insert to json file for generated query folder

"codegen:schema": "npx apollo client:download-schema --endpoint=https://countries-274616.ew.r.appspot.com","codegen:generate": "npx apollo client:codegen --localSchemaFile=schema.json --includes=src/**/*.ts --globalTypesFile=./src/lib/graphql/globalTypes.ts --target=typescript"

# Commands to run and generate queries in a file

npm run codegen:schema
npm run codegen:generate

# Errors 

1 error - VS CODE environment (--jsx) quick-fix ("jsx": "react-jsx")

# Reference Documentaion and Resources Used

 Apollographql(React) [https://www.apollographql.com/docs/react/]
 React-router-dom [https://reactrouter.com/web/guides/quick-start]
 Github [https://github.com/]
 API [https://countries-274616.ew.r.appspot.com/]
 React-app Typescript [https://create-react-app.dev/docs/adding-typescript/]


# Unfinished

If you have time, please implement infinite scroll, and the filters
for both in ascending and descending alphabetical orders, otherwise fetch 8 first countries
returned by the API.

Flags Container Alignment
Button A TO Z & Z TO A

# Notes to improved

Better UI design
Country description on click
Search Bar 
Login - registration
Documentation

