import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styles: [
  ]
})
export class ListUsersComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) {
    console.log('inside ListUsersComponent constructor');
  }

  ngOnInit(): void {
    console.log('inside ListUsersComponent ngOnInit');
    // this is life cycle hook. called immediately after constructor.
    // whenever this component is coming into view -- this method is called
    // this is the ideal place for you to make REST API call
    
    // 1. connect to the service (refer constructor)
    // 2. send the request to the service
    this.userService.getUsers()
      .subscribe((res: any) => {
        // 3. get the response from service
        console.log(res);
        this.users = res;
      })
  }


}
