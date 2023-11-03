/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PlantaListComponent } from './planta-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PlantaService } from '../planta.service';
import { Planta } from '../planta';
import { faker } from '@faker-js/faker';

describe('PlantaListComponent', () => {
  let component: PlantaListComponent;
  let fixture: ComponentFixture<PlantaListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      declarations: [ PlantaListComponent ],
      providers:[PlantaService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantaListComponent);
    component = fixture.componentInstance;
    
    const tipos:string[] = ["Interior", "Interior", "Exterior"];
    for(let i = 0; i < 3; i++) {
      const planta = new Planta(
          faker.number.int()
        , faker.string.alpha(20)
        , faker.string.alpha(20)
        , tipos[i]
        , faker.number.int()
        , faker.string.alpha(20)
        , faker.string.alpha(10)
      );
      component.plantas.push(planta);
      component.totalPlantasInterior = 2;
      component.totalPlantasExterior = 1;
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a thead tag on the table', () => {
    expect(debug.queryAll(By.css('thead.table-dark'))).toHaveSize(1)
  });

  it('should have 3 <td> tags', () => {
    expect(debug.queryAll(By.css('tbody tr'))).toHaveSize(3)
  });

  it('should have 2 interior plant', () => {
    const element = debug.query(By.css('#total_interior')).nativeElement;
    expect(element.textContent).toContain('Total plantas de interior: 2');
  });

  it('should have 1 exterior plant', () => {
    const element = debug.query(By.css('#total_exterior')).nativeElement;
    expect(element.textContent).toContain('Total plantas de exterior: 1');
  });

});
