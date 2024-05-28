import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styles: [],
})
export class AddUserComponent {
  // step 0: Have the html form  -- already in comp.html
  // step 1: Have the equivalent ts logic for the form tag
  addUserForm!: FormGroup;

  constructor() {
    // Step 1 continues...
    this.addUserForm = new FormGroup({
      // step 2: Have the form element equivalents in ts
      name: new FormControl('', Validators.required), // Step 5: Working on validations
      phone: new FormControl('', Validators.required), // Refer comp.html for step 6
      email: new FormControl('', [Validators.required, Validators.email]),
    });
    // For step 3 -- Refer comp.html
  }

  handleAddUser() {
    console.log(this.addUserForm.value);
  }
}
