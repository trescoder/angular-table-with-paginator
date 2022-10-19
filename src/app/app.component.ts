import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { concatMap, filter, finalize, flatMap, map, mergeMap, Observable, tap } from 'rxjs';
import { ReqResResponse, ReqResService, User } from './req-res.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'common-rxjs-operators';
  public usersList!: Observable<User[]>;
  public user!: User;

  public isConcatMapBtn = false;

  constructor(private reqResService: ReqResService){}

  displayUserList(){
    this.usersList = this.reqResService.getUserList().pipe(
      map((value: ReqResResponse) => value.data)
    )
  }

  displayUser(){
    this.isConcatMapBtn = true;
    const id = Math.floor(Math.random() * 6) + 6;
    console.log(id);
    
    this.reqResService.getUserList().pipe(
      map((response: ReqResResponse) => response.data),
      // tap((value) => console.log(value)),
      mergeMap((value) => value),
      // tap((value) => console.log(value)),
      filter((user: User, index: number) => user.id === id),
      // tap((value) => console.log(value)),
      finalize(()=>{
        this.isConcatMapBtn = false;
      }))
      // concatMap((userList: User[]) => this.reqResService.getUser(userList[0].id)),
      .subscribe({
        next: (user: User) => {
          this.user = user;
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
    })
  }
}
