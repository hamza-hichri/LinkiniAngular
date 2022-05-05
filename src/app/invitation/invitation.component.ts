import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Invitation } from '../Entities/invitation';
import { User } from '../Entities/user';
import { AuthServiceService } from '../Services/auth-service.service';
import { InvitationServiceService } from '../Services/invitation-service.service';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.css']
})
export class InvitationComponent implements OnInit {
ListInvitation : any ;

form : boolean ;
CloseResult !: String ;
invitationuser : any;
invitation ! : Invitation ;
user_roles : any;
  constructor(public authService: AuthServiceService ,private invitatIonservice : InvitationServiceService , private modalService : NgbModal) { }
i !: Invitation ;
aa!:User;
  ngOnInit(): void {
    this.invitationuser=[{username:'',password:'',selected: false}]
    this.user_roles =[
      {Id_Role:'1', role:'ROLE_Employee',selected: false},
    ];
    this.aa={
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
    this.getAllInvitation();
    
    this.i={
      id_invitation :null ,
      content :null ,
      email : null ,
      invitaiondestination : null ,
      state : false,
      user:[this.aa],
    }
    console.log(this.i.user)
  }
  getAllInvitation(){
    this.invitatIonservice.getAllInvitation().subscribe(res =>this.ListInvitation = res)
  }
  addInvitation(p : any){
    console.log(this.i.user)
    this.invitatIonservice.addInvitation(p).subscribe(()=>{
      this.getAllInvitation();
      this.form = false ;

    });

  }
  editInvitation(invitation :Invitation){
  this.invitatIonservice.editInvitation(invitation).subscribe();
}
deleteInvitation(id_invitation : any){
  this.invitatIonservice.deleteInvitation(id_invitation).subscribe(()=> this.getAllInvitation());
}
open(content: any) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.CloseResult = `Closed with: ${result}`;
  }, (reason) => {
    this.CloseResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
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
closeForm(){

}
cancel(){
this.form = false;
}

}
