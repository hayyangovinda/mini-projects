import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../Services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  reactiveForm!: FormGroup;
  @ViewChild('email') email!: ElementRef;
  @ViewChild('password') password!: ElementRef;
  authService: AuthServiceService = inject(AuthServiceService);
  router: Router = inject(Router);

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    const email = this.email.nativeElement.value;
    const password = this.password.nativeElement.value;

    const user = this.authService.login(email, password);

    if (user === undefined) {
      alert('The login details you have entered is not correct.');
    } else {
      alert('Welcome!. You are logged in');
      this.router.navigate(['/Home']);
    }
  }
}
