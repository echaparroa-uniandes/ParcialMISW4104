import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { PlantaListComponent } from './planta/planta-list/planta-list.component';

describe('AppComponent', () => {
  beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [HttpClientModule, RouterTestingModule],
        declarations: [AppComponent, PlantaListComponent]
    }).compileComponents()
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Viñero el Otoño'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Viñero el Otoño');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Viñero el Otoño');
  });
});
