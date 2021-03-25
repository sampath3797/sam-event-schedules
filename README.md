This library helps to view event schedules in a table datewise.

![alt text](https://raw.githubusercontent.com/sampath3797/sam-event-schedules/main/eventschedule1.png?raw=true)
 
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

cellColor property added for each event object.

eventName property used to show as tooltip of event name value on mouse hover of the cell.

userAppts: {    
    user: string;
    fromDate: moment.Moment;
    toDate: moment.Moment;
    eventName: string;
    cellColor: string;   
  }[] = [    
    {   
      user: 'A',
      fromDate: moment('1/19/2017', 'MM-DD-YYYY'),
      toDate: moment('1/23/2017', 'MM-DD-YYYY'),
      eventName: 'leave scheduled from 20 Jan 2017 to 23 Jan 2017',
      cellColor: 'blue'   
    },    
    {    
      user: 'B',
      fromDate: moment('1/22/2017', 'MM-DD-YYYY'),
      toDate: moment('1/23/2017', 'MM-DD-YYYY'),
      eventName: 'planned leave from',
      cellColor: 'red'
    }   
]
