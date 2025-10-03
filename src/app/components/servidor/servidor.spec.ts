import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServidorComponent } from './servidor';

describe('Servidor', () => {
  let component: ServidorComponent;
  let fixture: ComponentFixture<ServidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServidorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
