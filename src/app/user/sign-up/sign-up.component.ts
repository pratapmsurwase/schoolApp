import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
 showSuccessMessage: boolean;
 serverErrorMessages: string;
   emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  constructor(private userService: UserService) { }
  
  ngOnInit() { }

  onSubmit(form: NgForm) {
  this.userService.postUser(form.value).subscribe(
    res => { 
      
        this.showSuccessMessage = true;
        setTimeout(() => this.showSuccessMessage = false, 6000) 
      this.resetForm(form)
      
     
    } , 
    err => {
    if(err.status === 422) {
      this.serverErrorMessages = 'email or username already used'
       this.serverErrorMessages = err.error.join('<br/>')
    } 
    //  else 
    // this.serverErrorMessages = 'Something went wrong'
    
    }
  )    } 

  resetForm(form: NgForm) {
  this.userService.selectedUser = {
    fullName: '',
      email: '',
      password: '',
      DOB: '',
    Address : '',
  ParentPhone1 : '',
  ParentPhone2 : '',
 
  }
  form.resetForm()
  this.serverErrorMessages = '';
  }


}
