# Todo App with Firebase back-end
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.7.  
You can tryout demo at: [https://todo-mzx.firebaseapp.com/](https://todo-mzx.firebaseapp.com/)

## How to
First, You have to create new project at Firebase [Console](https://console.firebase.google.com/) and get your configuration variables.
Just click `Add Firebase to your web app` button and it should open a window with that data.
Then paste that data into [environment.ts](https://github.com/mazxaxz/todo-with-authentication/blob/master/src/environments/environment.ts) and [envoronment.prod.ts](https://github.com/mazxaxz/todo-with-authentication/blob/master/src/environments/environment.prod.ts) on lines `9 -> 14` and `4 -> 9`.
```javascript
firebase: {
  apiKey: '<API_KEY>',
  authDomain: '<PROJECT_ID>.firebaseapp.com',
  databaseURL: 'https://<DATABASE_NAME>.firebaseio.com',
  projectId: '<PROJECT_ID>',
  storageBucket: '<BUCKET>.appspot.com',
  messagingSenderId: '<SENDER_ID>'
}
```
Then run `npm install` to install required packages.

## Running
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Firebase deployment
To deploy the app at firebase hosting you need to:
* `cd` into project folder
* type `ng build --prod`
* if you don't have firebase-tools installed type `npm install -g firebase-tools`
* Log in into Firebase using `firebase login`
* initialize with `firebase init`, then choose **hosting** using arrows
* finally `firebase deploy` to deploy project into Firebase server

## Building the app
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Database structure
```javascript
{
  "tasks": {
    <USER_ID>: {
      <TASK_ID>: {
        "created": <UNIX_TIME>,
        "isDone": <BOOLEAN>,
        "title": <STRING>
      }
    }
  },
  "users": {
    <USER_ID>: {
      "email": <STRING>,
      "name": <STRING>
    }
  }
}
```
## Packages used
* [ng-bootstrap](https://ng-bootstrap.github.io/#/home)
* [angular-particle](https://www.npmjs.com/package/angular-particle)
* [angularfire2](https://www.npmjs.com/package/angularfire2)
* [firebase](https://www.npmjs.com/package/firebase)

## Preview
![home](https://user-images.githubusercontent.com/32012952/36644840-4f20a9c8-1a60-11e8-9772-dc691859df3b.png)
![tasks](https://user-images.githubusercontent.com/32012952/36644841-5106772c-1a60-11e8-86dc-ca55517c48e7.png)
