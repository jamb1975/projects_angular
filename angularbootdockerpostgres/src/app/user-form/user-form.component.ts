import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user-service.service';
import { Users } from '../users';
import { AlertService } from '../_alert/alert.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  users: Users;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private userService: UserService,
    public alertService: AlertService) {
    this.users = new Users();
  }

  onSubmit() {
	
    this.userService.save(this.users).subscribe(users => {
    this.alertService.success('Success on the left!!', { id: 'alert-1' })
      return this.gotoUserList();
    });
  }

  gotoUserList() {
	
    this.router.navigate(['/users']);
  }
}