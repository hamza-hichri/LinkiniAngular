import { Component, OnInit } from '@angular/core';
import { PublicationService } from '../services/publication.service';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {

  productSales: any[]
  productSalesMulti: any[]
  Stats:any
  view: any[] = [700, 370];

  // options
  showLegend: boolean = true;
  showLabels: boolean = true;

  gradient: boolean = false;
  isDoughnut: boolean = true;

  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#704FC4', '#4B852C', '#B67A3D', '#5B6FC8', '#25706F']
  };
  constructor(private publicationSevice:PublicationService) { }

  ngOnInit(): void {
    this.publicationSevice.Stat().subscribe(res=>{
      this.Stats=res;
    
      console.log("ddd"+this.Stats.map(i=>i));
  })
  }
  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }
}
