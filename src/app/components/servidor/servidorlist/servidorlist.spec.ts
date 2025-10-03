import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Servidorlist } from './servidorlist';

describe('Servidorlist', () => {
  let component: Servidorlist;
  let fixture: ComponentFixture<Servidorlist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Servidorlist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Servidorlist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
