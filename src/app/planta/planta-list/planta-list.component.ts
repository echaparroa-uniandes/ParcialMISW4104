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
  totalPlantasInterior: number = 0;
  totalPlantasExterior: number = 0;

  constructor(private plantaService: PlantaService) { }

  ngOnInit() {
    this.getPlantas();
  }

  getPlantas():void{
    this.plantaService.getPlantas().subscribe(data => {
      this.plantas = data;

      this.totalPlantasInterior = data.reduce((acc, cur)=>{
        return acc + (cur.tipo === "Interior"? 1:0)
      }, 0)

      this.totalPlantasExterior = data.reduce((acc, cur)=>{
        return acc + (cur.tipo === "Exterior"? 1:0)
      }, 0)
    });
  }
}
