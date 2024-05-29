import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: [],
})
export class UserDetailsComponent implements OnInit {
  user: any;
  duplicateUser: any;
  isUpdated = false;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Read the url parameter here
    const userId = this.route.snapshot.paramMap.get('userId');
    console.log(userId);

    // whenever this component is coming into view -- this method is called
    // this is the ideal place for you to make REST API call
    this.userService.getUserById(userId).subscribe((res: any) => {
      console.log(res);
      this.user = res;
      this.duplicateUser = { ...this.user };
    });
  }

  handleUpdateUser() {
    console.log(this.duplicateUser); // form data

    this.userService.updateUser(this.duplicateUser)
      .subscribe((res: any) => {
        console.log(res);
        this.user = res;
        this.isUpdated = true;
      })
  }
}
