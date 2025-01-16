import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchIdiomaComponent } from './switch-idioma.component';

describe('SwitchIdiomaComponent', () => {
  let component: SwitchIdiomaComponent;
  let fixture: ComponentFixture<SwitchIdiomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchIdiomaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchIdiomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
