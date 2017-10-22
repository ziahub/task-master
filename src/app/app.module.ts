import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryTaskDataService }  from './in-memory-tasks-data.service';

import { AppComponent } from './app.component';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { TaskComponent } from './task/task.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';

import { TaskManagerService } from './task-manager/task-manager.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TaskComponent,
    TaskManagerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryTaskDataService, {passThruUnknownUrl: true}),
  ],
  providers: [
    TaskManagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
