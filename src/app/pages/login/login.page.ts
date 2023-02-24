import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form = new FormGroup({
    email: new FormControl('', { validators: [Validators.required] }),
    password: new FormControl('', { validators: [Validators.required] }),
  });

  constructor(private authService: AuthService) {}

  ngOnInit() {}
  login() {
    if (this.form.invalid) return;

    const { email, password } = this.form.getRawValue();
    if (email && password) {
      this.authService.login(email, password);
    }
  }
}
