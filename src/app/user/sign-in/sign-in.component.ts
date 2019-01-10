import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  imageadd = 'http://hyperxchange.com/Inventory/User_login.png';
  serverErrorMessages: String
  constructor(private userService:UserService, private router: Router) { } 
  model = {
    email: '',
    passowrd: ''
  }
  
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  ngOnInit() { }
 onSubmit(form: NgForm) {
this.userService.login(form.value).subscribe( 
  res=> {
    this.userService.setToken(res['token'])
    this.router.navigateByUrl('/userprofile');
  },
  err => {
    this.serverErrorMessages = err.error.message
  }
  )
 }
}
