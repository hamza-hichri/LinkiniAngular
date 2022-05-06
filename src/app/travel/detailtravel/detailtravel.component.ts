import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/entities/user';
import { VoyageService } from 'src/app/services/voyage.service';
@Component({
  selector: 'app-detailtravel',
  templateUrl: './detailtravel.component.html',
  styleUrls: ['./detailtravel.component.css']
})
export class DetailtravelComponent implements OnInit {

  constructor(private travelSevice: VoyageService, private activatedRoute: ActivatedRoute) { }
  id: any;
  test!: any;
  user1: User;
  users: any;
  detailtravel!: any;
  ngOnInit(): void {
   
    this.user1 = {
      id_user: 1,
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
    this.activatedRoute.paramMap.subscribe(param => {
      this.id = param.get('id');
      this.getallusers();
    });
    this.GetTravelById(this.id);
   
  }
  GetTravelById(id) {
    this.travelSevice.DetailTravel(id).subscribe((res) => this.detailtravel = res)

  }
  getallusers() {
    this.travelSevice.getAllUsers().subscribe((res) => this.users = res);
  }
  affectuser(iduser: number) {
    this.travelSevice.AffectUserTravel(this.id, iduser).subscribe();
    alert("affected successfully")

  }
  

}
