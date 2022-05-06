import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../entities/user';
import { Voyage } from '../entities/voyage';
import { VoyageService } from '../services/voyage.service';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
  user!:User;
  test:any;
  ListTravel:any;
  detail:any;
  form:boolean=false;
  FormType="Add Travel";
  travel!:Voyage;
  closeResult:string;
  constructor(private travelSevice:VoyageService,private modalService:NgbModal,private router:Router) { }

  ngOnInit(): void {
    this.getstats()
   
    this.getAllTravel();
    this.user={
      id_user: null,
      name: null,
      email: null,
      username: null,
      password: null,
      role: null,
      profession: null,
      domain: null,
      likebudge: null,
      feedbackbudge: null,
      activitebudge: null,
      reclamationbudge: null,
      PhoneNumber: null,
    }
    this.travel={
      id_voyage:null,
      destination:null,
      start_date:null,
      finish_date:null,
      schudle:null,
      user:[this.user]


    }
  }
  getAllTravel(){
    this.travelSevice.getAllTravel().subscribe(res=>this.ListTravel=res)
  }
  AddTravel(t:any){
    // let iduser = this.userService.getCurrentUser().getId();
    // let idUser=1;
    this.travelSevice.AddTravel(t).subscribe(()=>{
      this.getAllTravel();
      this.form=false;
      this.modalService.dismissAll();

    });
  }
  updateTravel(travel:any){
    this.travelSevice.EditTravel(travel).subscribe();

  }
   detailTravel(id_voyage:any):void{
    this.travelSevice.DetailTravel(id_voyage).subscribe(res=>this.detail=res);
  }

  deleteTravel(idTravel:any){
    this.travelSevice.DeleteTravel(idTravel).subscribe(()=>this.getAllTravel());

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
    getstats(){
      this.travelSevice.GetStats().subscribe((res)=>this.test=res);
      console.log(this.test);
    }
}
