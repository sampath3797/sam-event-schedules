# Workspace

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


 
Dependency:
This library is dependent on moment library version 2.29.1

before using this library, install moment from npmjs

**********************************************************
Usage :   Include in AppModule as follows
**********************************************************
import {EventschedulesModule} from 'eventschedules';


@NgModule({

imports: [
        EventschedulesModule
	.......
		]

});


**********************************************************
Usage in your project templates as follows
**********************************************************
<lib-eventschedules
  [calendarStartDate]="calendarStartDate"
  [calendarEndDate]="calendarEndDate"
  [users]="users"
  [userAppts]="userAppts"
  >  
  </lib-eventschedules>

**********************************************************
pass the input parameters as per the following pattern
**********************************************************

calendarStartDate = moment('1/19/2017', 'MM-DD-YYYY');

calendarEndDate = moment('1/29/2017', 'MM-DD-YYYY');

users: string[] = ['A', 'B', 'C', 'D', 'E', 'F'];
    userAppts: {
    user: string;
    fromDate: moment.Moment;
    toDate: moment.Moment;
    eventName: string;
  }[] = [
    {
      user: 'A',
      fromDate: moment('1/19/2017', 'MM-DD-YYYY'),
      toDate: moment('1/23/2017', 'MM-DD-YYYY'),
      eventName: 'leave scheduled from 20 Jan 2017 to 23 Jan 2017'
    },
    {
      user: 'B',
      fromDate: moment('1/22/2017', 'MM-DD-YYYY'),
      toDate: moment('1/23/2017', 'MM-DD-YYYY'),
      eventName: 'planned leave from'
    }
]
