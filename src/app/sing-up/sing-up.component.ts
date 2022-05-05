import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Role } from '../Entities/role';
import { User } from '../Entities/user';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {
form : boolean;
listuser : any ;
role !: Role;
user ! : User;
CloseResult ! : String;
user_roles: any ;
user_roles1 : any ;
  constructor
  (
    private userservice : UserService,
    private modelservice : NgbModal,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router) { }
    selectedRoles: string[] = [];
  ngOnInit(): void {
    this.user_roles =[
      {Id_Role:'1', role:'ROLE_Employee',selected: false},
    ];
    this.user_roles1 =[
       {Id_Role:'2', role:'ROLE_Company',selected: false},
    ];
    this.user={
      id_user : null,
      name : null,
      email : null,
      username : null,
      password : null,
      roles :this.user_roles1 ,
      //roles:this.user_roles1, 
      profession : null,
      domain : null,
      likebudge : null,
      feedbackbudge : null,
      activitebudge : null,
      reclamationbudge : null,
      PhoneNumber : null, 
    }
    // this.form = this.formBuilder.group({
    //   name: '',
    //   email: '',
    //   roles :'',
    //   password: ''
    // });
  }
  // submit(): void {
  //   this.http.post('http://localhost:8081/api/auth/signup', this.form.getRawValue())
  //     .subscribe(() => this.router.navigate(['/singin']));
  // }
adduser(u : any):void {
  this.userservice.adduser(u).subscribe()
}
cancel(){
  this.form = false;
}
private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return  `with: ${reason}`;
  }
}

onChangeCategory(event: any, roles: any) {
  this.selectedRoles.push(roles.role);
}
}
