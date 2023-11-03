import { Injectable } from '@angular/core';
import { Planta } from './planta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlantaService {
  private apiUrl:string = 'https://gist.githubusercontent.com/josejbocanegra/7b71922ee9e2ab407d3210f1e5cb8400/raw/cf1077fa69112bc67ff520dd6517a93afd3dae29/202212_MISW4104_Grupo2.json';
  
  constructor() { }

  getPlantas(): Array<Planta>{
    const plantas: Array<Planta> = [];
    plantas.push(new Planta(1, "p1", "p_c_1", "t_1", 10, "c1", "ss_1"));
    plantas.push(new Planta(2, "p2", "p_c_2", "t_2", 10, "c1", "ss_2"));
    plantas.push(new Planta(3, "p3", "p_c_3", "t_1", 10, "c1", "ss_1"));
    plantas.push(new Planta(4, "p4", "p_c_4", "t_2", 10, "c2", "ss_3"));
    plantas.push(new Planta(5, "p5", "p_c_5", "t_2", 10, "c2", "ss_2"));
    plantas.push(new Planta(6, "p6", "p_c_6", "t_1", 10, "c2", "ss_1"));
    return plantas;
  }

}
