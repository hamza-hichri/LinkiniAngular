import { Component, Input,EventEmitter, OnInit, Output } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Invitation } from '../Entities/invitation';
import { AuthServiceService } from '../Services/auth-service.service';
import { InvitationServiceService } from '../Services/invitation-service.service';

@Component({
  selector: 'app-invitationfils',
  templateUrl: './invitationfils.component.html',
  styleUrls: ['./invitationfils.component.css']
})
export class InvitationfilsComponent implements OnInit {
@Input() 
invitation : Invitation;
content: any;
idinvitation : any ;
form : boolean ;
CloseResult !: String ;
constructor(public authService: AuthServiceService ,private invitatIonservice : InvitationServiceService , private modalService : NgbModal) { }

  ngOnInit(): void {
    
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
  @Output() notification3=new EventEmitter<Invitation>();
  invaddInvitation(invitation){
    this.notification3.emit(invitation)
  }
  @Output() notification4=new EventEmitter<Invitation>();
  inveditInvitation(invitation){
    this.notification4.emit(invitation)
  }
  @Output() notification5=new EventEmitter();
  invdeleteInvitation(idinvitation){
    this.notification5.emit(idinvitation )
  }
  
  

}
