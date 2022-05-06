import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Publication } from '../entities/publication';
import { PublicationService } from '../services/publication.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  myForm :FormGroup;
  listpublications:any;
  form:boolean=false;
  FormType="Add Publication";
  post!:Publication;
  closeResult:string;
  constructor(private publicationSevice:PublicationService,private modalService:NgbModal,private router:Router) { }

  

  ngOnInit(): void {
    this.getAllPublications();
    this.myForm=new FormGroup({
      idp:new FormControl(),
      description: new FormControl(),
      title: new FormControl(),
      typepublication: new FormControl(),

    }) 
  }
  getAllPublications(){
    this.publicationSevice.getAllPublications().subscribe(res=>this.listpublications=res)
  }
  add(){
    this.publicationSevice.Publicationaddc(this.myForm.value).subscribe(()=> {
      this.getAllPublications();
      this.form = false;
      window.location.reload();
    }
    );

  }
  PublicationupdatePost(publication:any){
    this.publicationSevice.PublicationupdatePost(publication).subscribe();

  }

  deletePost(idp:any){
    this.publicationSevice.deletePost(idp).subscribe(() => this.getAllPublications())
  }
  open(content: any) {
    this.modalService.open(content, {ariaDescribedBy: 'modal-basic-title'}).result.then((result) => {
     this.closeResult = 'Closed with: ${result}';
     

    },(reason) => {
      this.closeResult = 'Dismissed ${this.getDismissReason(reason)}';
    });
  }
  private getDismissReason(reason: any): string {
    if(reason === ModalDismissReasons.ESC){
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK){
      return 'by clicking on a backdrop';
    } else{
      return 'with: ${reason}';
    }
  }
  closeForm(){

  }
 cancel(){
   this.form = false;
 }

}
