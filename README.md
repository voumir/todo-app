# Todo App
Project created with Angular at Frontend and ASP.NET WebApi 2 at Backend.  
Hosted on Microsoft Azure (API) and Firebase (Client).  
  
Frontend Preview: [https://todo-mzx.firebaseapp.com/](https://todo-mzx.firebaseapp.com/)  
Backend Preview: [https://todoappwebapi20180726022310.azurewebsites.net/](https://todoappwebapi20180726022310.azurewebsites.net/)

## Info
API is open for any website, so you can make your own Frontend and link it with this projects backend. Just use the APIs link.  
Backend have documentation at its websites subpage. You can find it [here](https://todoappwebapi20180726022310.azurewebsites.net/Help).

## Running
First, `cd` into TodoApp.Client then run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.  
Use `ng serve -o` for opening the browser automatically.

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Firebase deployment
To deploy the app at firebase hosting you need to:
* `cd` into TodoApp.Client
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
Current SQL structure:  
![database](https://user-images.githubusercontent.com/32012952/43396963-9a0461ba-9403-11e8-9e7c-02798ec3236b.PNG)

Old NoSQL structure: 
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
* [ngx-cookie-service](https://www.npmjs.com/package/ngx-cookie-service)
* [AutoMapper](https://automapper.org/)
* [Ninject](http://www.ninject.org/)
* [FluentAssertions](https://fluentassertions.com/)
* [Moq](https://github.com/moq/moq4)

## Preview
![home](https://user-images.githubusercontent.com/32012952/43396636-6eea238a-9402-11e8-9a27-b72ec8fa04be.PNG)
![login](https://user-images.githubusercontent.com/32012952/43396637-71cf2d34-9402-11e8-8366-8a4d379c43f3.PNG)
![dash](https://user-images.githubusercontent.com/32012952/43396638-72dbfad6-9402-11e8-80d3-407230a92871.PNG)
