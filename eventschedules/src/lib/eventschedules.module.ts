import { NgModule } from '@angular/core';
import { EventschedulesComponent } from './eventschedules.component';
import { MomentPipe } from './momentPipe';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [EventschedulesComponent, MomentPipe],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [EventschedulesComponent]
})
export class EventschedulesModule { }
