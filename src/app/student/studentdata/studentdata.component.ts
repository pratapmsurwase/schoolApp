import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentdata',
  templateUrl: './studentdata.component.html',
  styleUrls: ['./studentdata.component.css']
})
export class StudentdataComponent implements OnInit {
  studentDetail
  constructor(private user:UserService , private router:Router ) { }

  ngOnInit() { 
    this.user.getUserProfile().subscribe(
      res => {
        this.studentDetail = res['user']
      },
      err => {
        console.log(err)
      }
    )
  }

  onLogout() {
    // this.user.delteToken();
    this.router.navigate(['/userprofile'])
  }

}
