import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServidorDetailsComponent } from './servidorForm';

describe('Servidordetails', () => {
  let component: ServidorDetailsComponent;
  let fixture: ComponentFixture<ServidorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServidorDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServidorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
