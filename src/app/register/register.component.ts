import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { AuthService } from '../services/auth.service'
import { Register } from './register'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registrationForm!: FormGroup;
  registration!: Register;
  pageTitle!: String;

  get r() {
    return this.registrationForm.controls;
  }

  constructor(
    private fb: FormBuilder,
    private AuthService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  // onRegisterSubmit() {
  //   const reg: Register =
  //   {
  //     id: 1,
  //     name: "name",
  //     username: "dfdf",
  //     email: "email",
  //     password: "dfdf"
  //   };
  //   console.log(reg);
  //   this.AuthService.registerUser(reg).subscribe((res) => {
  //     this.registrationForm.reset()
  //     this.router.navigate(['/login']);
  //   })
  // }


  // https://www.positronx.io/angular-jwt-user-authentication-tutorial/
  onRegisterSubmit() {

     console.log(this.registrationForm.value);
    this.AuthService.registerUser(this.registrationForm.value)
    .subscribe(
      response => console.log('Success', response),
      error => console.log('Error!', error)
    );

  }

  // onRegisterSubmit() {
  //   this.AuthService.registerUser(reg: Register).subscribe((res) => {
  //     if (res.result) {
  //       this.registrationForm.reset()
  //       this.router.navigate(['/login']);
  //     }
  //   })
  // }

  //   onRegisterSubmit() {
  //     console.log(this.registrationForm.value);
  //   this.AuthService.registerUser(this.registrationForm.value).subscribe(res => {
  //       this.router.navigate(['/login'])
  //     },
  //     err => console.log(err)
  //   )      

  // }

}
