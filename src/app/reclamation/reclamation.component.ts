import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Reclamation } from '../reclamation';
import { ReclamationserviceService } from '../reclamationservice.service';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {
  listReclamation: any; 
  user2_id : any ;
  user1_id : any ;
  form: boolean = false; 
  reclamation!: Reclamation; 
  closeResult!: string; 
  constructor(private ReclamationService: ReclamationserviceService, private modalService: NgbModal) { }

  ngOnInit(): void {
  this.ShowAllReclamation();
  console.log(this.listReclamation);

  this.reclamation = {
    Idreclamation: null,
    Reclamations: null,
    creating_date: null
  }}
  ShowAllReclamation(){
    this.ReclamationService.ShowAllReclamation(Reclamation).subscribe(res => this.listReclamation = res);
    console.log(this.listReclamation);
  }
  addReclamation (reclamation:any, user1_id: any, user2_id: any){
    this.ReclamationService.addReclamation(reclamation, user1_id , user2_id).subscribe(()=>{
      this.ShowAllReclamation(); 
      this.form = false ; 
    });
  }
  updateReclamtion(reclamtion: Reclamation){
    this.ReclamationService.updateReclamation(reclamtion).subscribe();
  }
  deleteReclamtion(idr: any){
    this.ReclamationService.deleteReclamation(idr).subscribe(()=>this.ShowAllReclamation());
  }
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
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

