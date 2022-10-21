import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ReqResResponse, ReqResService, User } from 'src/app/req-res.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public usersList!: Observable<User[]>;

  constructor(private reqResService: ReqResService) { }

  ngOnInit(): void {
    console.warn("On Init");
    
  }

  displayUserList(){
    this.usersList = this.reqResService.getUserList().pipe(
      map((value: ReqResResponse) => value.data)
    )
  }

}
