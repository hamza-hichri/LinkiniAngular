import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Publication } from 'src/app/entities/publication';
import { PublicationService } from 'src/app/services/publication.service';

@Component({
  selector: 'app-foorm',
  templateUrl: './foorm.component.html',
  styleUrls: ['./foorm.component.css']
})
export class FoormComponent implements OnInit {
  t:Publication;
  @Input()Publicationaddc:string;
  @Output() notificationaddpost=new EventEmitter<Publication>();
  closeResult:string;
  form:boolean=false;
 
  constructor(private publicationSevice:PublicationService,private modalService:NgbModal) { }

  ngOnInit(): void {
    this.t=new Publication;
  }
  addpublicationnotif(){
    this.notificationaddpost.emit(this.t)
    
  }



}
