import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { map, Observable } from 'rxjs';
import { ReqResResponse, ReqResService, User } from 'src/app/req-res.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent implements OnInit {
  constructor(private reqResService: ReqResService) {}

  public UsersList!: User[];
  columns = [
    {
      columnDef: 'id',
      header: 'ID',
      cell: (element: User) => `${element.id}`,
    },
    {
      columnDef: 'avatar',
      header: 'Profile Picture',
      cell: (element: User) => `${element.avatar}`,
    },
    {
      columnDef: 'first_name',
      header: 'First Name',
      cell: (element: User) => `${element.first_name}`,
    },
    {
      columnDef: 'last_name',
      header: 'Last Name',
      cell: (element: User) => `${element.last_name}`,
    },
    {
      columnDef: 'email',
      header: 'Email',
      cell: (element: User) => `${element.email}`,
    },
  ];
  public displayColumns = this.columns.map((c) => c.columnDef);
  dataSource2!: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.reqResService
      .getUserList()
      .pipe(map((response: ReqResResponse) => response.data))
      .subscribe((users: User[]) => {
        this.UsersList = users;
        this.dataSource2 = new MatTableDataSource<User>(this.UsersList);
        this.fillPaginator();
      });
  }

  fillPaginator() {
    this.dataSource2.paginator = this.paginator;
  }
}
