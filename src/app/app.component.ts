import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ReqResResponse, ReqResService, User } from './req-res.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'common-rxjs-operators';
  public usersList!: Observable<User[]>;

  constructor(private reqResService: ReqResService){}

  displayUserList(){
    this.usersList = this.reqResService.getUserList().pipe(
      map((value: ReqResResponse) => value.data)
    )
  }
}
