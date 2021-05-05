# User App Frontend

**IMPORTANT**: PLEASE RUN USER-APP-BACKEND BEFORE RUNNING THIS FRONTEND, OTHERWISE IT WILL NOT WORK.

When the app starts, it checks if the user is authenticated or not. For that purpouse it fetches information from one of the endpoints, and then switches the "checking" state to false. If the backend is not up this process will fail and you will be stuck on the loading screen (blue screen).

## About

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and implements Redux.

React Developer Tools and Redux DevTools extensions for Chrome Web Browser were used for development monitorization.

In the project directory you need to install all necessary dependencies using the command:

```
npm install
```

Then you can run the app in development mode with:

```
npm start
```

## Users

User credentials to log in:

```
email: it@drixit.com
password: some-password
````
or

```
email: info@drixit.com
password: other-password
```

## Redux

Three reducers were implemented in this project:

- uiReducer
- authReducer
- userReducer

They are used to manage the user interface, authentication and user states respectively.

## Extra documentation

More documentation (written using JSDoc) can be found in the source code.
