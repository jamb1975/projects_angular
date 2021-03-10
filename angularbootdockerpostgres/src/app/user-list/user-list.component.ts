import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { UserService } from '../user-service.service';
import {AlertService} from '../_alert/alert.service'
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: Users[];

  constructor(private userService: UserService,
              public  alertService: AlertService) {
    this.users = [];
    
  }

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
      this.alertService.success('Success on the left!!', { id: 'alert-1', autoClose: true })
    });
  }
}