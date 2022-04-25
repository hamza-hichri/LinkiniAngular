import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Voyage } from 'src/app/entities/voyage';
import { VoyageService } from 'src/app/services/voyage.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  t:Voyage;
  @Input()AddTravel:string;
  @Output() notificationaddtravel=new EventEmitter<Voyage>();
  closeResult:string;
  form:boolean=false;
 
  constructor(private travelSevice:VoyageService,private modalService:NgbModal) { }

  ngOnInit(): void {
    this.t=new Voyage;
  }
  addvoyagenotif(){
    this.notificationaddtravel.emit(this.t);
    
  }
  
  
  
  // open(content: any) {
  //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  //   }
  //   private getDismissReason(reason: any): string {
  //     if (reason === ModalDismissReasons.ESC) {
  //       return 'by pressing ESC';
  //     } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //       return 'by clicking on a backdrop';
  //     } else {
  //       return  `with: ${reason}`;
  //     }
  //   }
  //   closeForm(){
  
  //   }
  //   cancel(){
  //     this.form = false;
  //   }
}
