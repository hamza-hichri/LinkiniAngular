import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../Entities/user';
import { InvitationServiceService } from '../Services/invitation-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  posts :any;
  page :number =1;
  count:number =0;
  tablesize : number = 3;
  tablesizes : any =[5,10,15,20];

  Listuser:any;
  form : boolean ;
  CloseResult !: String ;
  user!:User;
  user_roles:any;
  constructor(private invitatIonservice : InvitationServiceService , private modalService : NgbModal) { }

  ngOnInit(): void {

    
    this.user_roles =[
      {Id_Role:'1', role:'ROLE_Employee',selected: false}],
    this.getallusers();
    this.user={
      id_user :  null ,
      name :  null ,
     email : null ,
     username : null ,
     password : null ,
     roles : this.user_roles ,
     profession : null ,
     domain : null ,
     likebudge :  null ,
     feedbackbudge :  null ,
     activitebudge :  null ,
     reclamationbudge :  null ,
     PhoneNumber :  null ,
    }
  }
  ontablesizechange(event:any):void{

    this.tablesize = event.target.value;
    this.page=1;
    this.getallusers();
    }
  
  getallusers(){

    this.invitatIonservice.getallusers().subscribe(res =>this.Listuser = res)
  }
  
}
