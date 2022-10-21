import { Component, OnInit } from '@angular/core';
import { finalize, map, Observable } from 'rxjs';
import { ReqResService, User, UserResponse } from 'src/app/req-res.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public user$!: Observable<User>;
  public isConcatMapBtnLoading = false;


  constructor(private reqResService: ReqResService) { }

  ngOnInit(): void {
  }

  displayUser(){
    this.isConcatMapBtnLoading = true;
    const id = Math.floor(Math.random() * 6) + 6;
    console.log(id);

    this.user$ = this.reqResService.getUser(id).pipe(map((user: UserResponse) => user.data), finalize(() => this.isConcatMapBtnLoading = false));

    // this.user$ = this.reqResService.getUserList().pipe(
    //   map((response: ReqResResponse) => response.data), // map the server response to extract the info I want
    //   mergeMap((value: User[]) => value), // flatten the array (and IDK what else does)
    //   filter((value: User) => value.id === id), // no explanation needed
    //   concatMap((user: User) => this.reqResService.getUser(user.id)), // the only line that matters, search a user
    //   map((user: UserResponse) => user.data), // map the response from the server again to extract the user data
    //   finalize(()=>this.isConcatMapBtnLoading = false )); // triggers no matter what
  }

}
