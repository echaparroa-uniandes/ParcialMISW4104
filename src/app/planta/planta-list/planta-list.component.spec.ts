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
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
