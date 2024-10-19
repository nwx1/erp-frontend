import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  forms: FormGroup;
  msg = "";
  constructor(private fb: FormBuilder, private router: Router) {
    this.forms = this.fb.group({
      user: [''],
      pass: ['']
    });
  }

  ngOnInit() {
    console.log(this.forms.getRawValue());
  }

  verify() {
    if (this.forms.get('user')?.value == "123" && this.forms.get('pass')?.value == "123!@#") {
      //Display message that login is successful
      this.msg = "Login is Successful";

      // setTimeout(() => {
        this.router.navigate(['/main']);
      // }, 3000);
    }
    else {
      this.msg = "Invalid Credentials";
    }
  }
}
