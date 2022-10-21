import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { concatMap, filter, finalize, flatMap, map, mergeMap, Observable, tap } from 'rxjs';
import { ReqResResponse, ReqResService, User, UserResponse } from './req-res.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'common-rxjs-operators';

  tabLoadTimes: Date[] = [];


  constructor(private reqResService: ReqResService){}

 

  


  getTimeLoaded(index: number) {
    if (!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }

    return this.tabLoadTimes[index];
  }
}
