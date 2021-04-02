import { Component, OnInit, Input, OnChanges } from '@angular/core';
import * as moment_ from 'moment';

const moment = moment_


@Component({
  selector: 'lib-eventschedules',
  templateUrl:'eventschedules.component.html',
  styleUrls: ['eventschedules.component.css']
})
export class EventschedulesComponent implements OnChanges{

  /* width of event table eg:-  500px;*/
  @Input() divWidth: string;
  
  /* height of event table eg:-  200px;*/
  @Input() divHeight: string; 

  /* event table start date*/
  @Input() calendarStartDate: moment.Moment; 

  /* event table end date */
  @Input() calendarEndDate: moment.Moment;   

  /* first column list eg:- user names etc. */
  @Input() users: string[];
  
  /* user event object for drawing events 
  as per fromDate and toDate on table
   with cell color and tootip as eventName property */
  @Input() userAppts: {                 
    user: string;
    fromDate: moment.Moment;
    toDate: moment.Moment;
    eventName: string;
    cellColor: string;
  }[];

  // calendarStartDate = moment('1/19/2017', 'MM-DD-YYYY');
  // calendarEndDate = moment('1/29/2017', 'MM-DD-YYYY');
  // users: string[] = ['A', 'B', 'C', 'D', 'E', 'F'];
   

  // following variables for generating scheduler
  dateArray: {
    user: string;
    dates: { date: moment.Moment; bgcolor: string; eventName: string }[];
  }[] = [];

  totalDatesArray: {
    date: moment.Moment;
    matched: number;
    matchedPercent: string;
  }[] = [];

  userAppt: { user: string; date: moment.Moment; eventName: string, cellColor: string }[] = [];

  constructor() {  }

  ngOnChanges()
  {
    if(!this.divWidth)
    {
      this.divWidth = '500px';
    }

    if(!this.divHeight)
    {
      this.divHeight = '200px';
    }
    
    if(this.userAppts)
    {
      this.userAppts.forEach((x, xIdx) => 
      {
        for (
          let i = moment(x.fromDate);
          i.isSameOrBefore(x.toDate);
          i.add(1, 'days')
        ) {
          this.userAppt.push({
            user: x.user,
            date: moment(i),
            eventName: x.eventName,
            cellColor: x.cellColor
          });
        }
      });
    }
    

    // generating calendar dates Array from supplied start to end dates
    if(this.calendarStartDate && this.calendarEndDate)
    {
      for (
        let i = this.calendarStartDate;
        i.isBefore(this.calendarEndDate);
        i.add(1, 'days')
      ) 
      {
        this.totalDatesArray.push({
          date: moment(i),
          matched: 0,
          matchedPercent: null
        });
      }
    }
    

    // iterating each user and finding their appt dates to fill cell color
    if(this.users && this.totalDatesArray)
    {
      this.users.forEach((usr, usrIdx) => {
        // generating userwise dates array with appts for iterating in html;
        this.dateArray.push({ user: usr, dates: [] });
  
        // iterating total calendar dates from start to end
        this.totalDatesArray.forEach((eachDate, dateIdx) => {
          let m = eachDate.date;
  
          //  filtering matched dates
          const isMatchedDate = this.userAppt.filter(
            x => x.user === usr && x.date.isSame(m)
          )[0];
  
          // pushing matched dates for color style and match count
          if (isMatchedDate) {
            const totalMatches = this.totalDatesArray.filter(x =>
              x.date.isSame(m)
            )[0];
            totalMatches.matched++;
  
            this.dateArray[usrIdx].dates.push({
              date: m,
              bgcolor: isMatchedDate.cellColor,
              eventName: isMatchedDate.eventName
            });
          } // for no matching dates with out any cell color
          else {
            this.dateArray[usrIdx].dates.push({
              date: m,
              bgcolor: 'white',
              eventName: ''
            });
          }
        });
      });
    }
    
  }
}
