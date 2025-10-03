import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Servidordetails } from './servidordetails';

describe('Servidordetails', () => {
  let component: Servidordetails;
  let fixture: ComponentFixture<Servidordetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Servidordetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Servidordetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
