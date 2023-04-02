import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalValidator } from 'src/app/core/validators/email';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm: FormGroup = new FormGroup({});
  constructor(
    private authService: AuthService,
    private router: Router,
    private _fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.setFormLogin();
  }

  setFormLogin() {
    this.loginForm = this._fb.group({
      email: ['', Validators.compose([Validators.required, GlobalValidator.emailValidator])],
      password: ['', Validators.required]
    })
  }

  login() {
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(res => {
      this.authService.setToken(res.access_token);
      this.router.navigateByUrl('admin/guest-list')
    })
  }
}
