import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
 userDetails;
  constructor(private user:UserService, private router: Router) { }

  ngOnInit() {
    this.user.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user']
      },
      err => {
        console.log(err)
      }
    )
   }

   onLogout() {
     this.user.delteToken();
     this.router.navigate(['/login'])
   }
  
}
