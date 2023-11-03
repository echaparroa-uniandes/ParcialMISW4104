import { Component, OnInit } from '@angular/core';
import { Planta } from '../planta';
import { PlantaService } from '../planta.service';

@Component({
  selector: 'app-planta-list',
  templateUrl: './planta-list.component.html',
  styleUrls: ['./planta-list.component.css']
})
export class PlantaListComponent implements OnInit {
  plantas: Array<Planta> = [];

  constructor(private plantaService: PlantaService) { }

  ngOnInit() {
    this.getPlantas();
  }

  getPlantas():void{
    //this.plantas = this.plantaService.getPlantas();    
    this.plantaService.getPlantas().subscribe(data => {
      this.plantas = data;
    });
  }
}
