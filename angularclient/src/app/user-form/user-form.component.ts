import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user-service.service';
import { Users } from '../users';

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
        private userService: UserService) {
    this.users = new Users();
  }

  onSubmit() {
	
    this.userService.save(this.users).subscribe(users => {
	alert(users.email+users.id+users.name);
        return this.gotoUserList();
    });
  }

  gotoUserList() {
	
    this.router.navigate(['/users']);
  }
}