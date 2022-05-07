import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../../apps/blog/blog-type';
import { ServiceblogService } from '../../apps/blog/blog-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import swal from "sweetalert";
import { User } from 'src/core/models/User';
import { UserService } from 'src/core/services/user.service';



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User= new User()

  constructor(private userService: UserService,private router: Router,private activated:ActivatedRoute) 
    { 

  }

  ngOnInit(): void {
    this.user=this.userService.currentUser;
    this.activated.paramMap.subscribe(
      (params)=> {
        let id = params.get('id');
        console.log(id)
        this.userService.getById(id).subscribe(
          (data) => this.user = data
        )
      }
    )


  }

  save(){
    if (this.userService.verifyUser(this.user.email)){
      this.userService.updateUserService(this.user).subscribe(
        ()=>this.router.navigate(['/retrieve-all-users'])
      )
    }
    else{
      swal({
        title: "This email already exists!",
        text: "Try with another email",
        icon: "warning",
        buttons: ["Okay"],
        dangerMode: true,
      })
    }
    }
   


    
}
