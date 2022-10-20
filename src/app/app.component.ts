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
  public usersList!: Observable<User[]>;
  public user$!: Observable<User>;

  public isConcatMapBtnLoading = false;

  constructor(private reqResService: ReqResService){}

  displayUserList(){
    this.usersList = this.reqResService.getUserList().pipe(
      map((value: ReqResResponse) => value.data)
    )
  }

  displayUser(){
    this.isConcatMapBtnLoading = true;
    const id = Math.floor(Math.random() * 6) + 6;
    console.log(id);

    // this.user$ = this.reqResService.getUser(id).pipe(map((user: UserResponse) => user.data));

    this.user$ = this.reqResService.getUserList().pipe(
      map((response: ReqResResponse) => response.data), // map the server response to extract the info I want
      mergeMap((value: User[]) => value), // flatten the array (and IDK what else does)
      filter((value: User) => value.id === id), // no explanation needed
      concatMap((user: User) => this.reqResService.getUser(user.id)), // the only line that matters, search a user
      map((user: UserResponse) => user.data), // map the response from the server again to extract the user data
      finalize(()=>this.isConcatMapBtnLoading = false )); // triggers no matter what
  }
}
