import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VoyageService } from 'src/app/services/voyage.service';
@Component({
  selector: 'app-detailtravel',
  templateUrl: './detailtravel.component.html',
  styleUrls: ['./detailtravel.component.css']
})
export class DetailtravelComponent implements OnInit {

  constructor(private travelSevice:VoyageService,private activatedRoute:ActivatedRoute) { }
  id:any;
  detailtravel!:any;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param=>{ 
      this.id=param.get('id');
    });
    this.GetTravelById(this.id);
    console.log(this.detailtravel);
  }
  GetTravelById(id){
this.travelSevice.DetailTravel(id).subscribe((res)=>this.detailtravel=res)

  }

}
