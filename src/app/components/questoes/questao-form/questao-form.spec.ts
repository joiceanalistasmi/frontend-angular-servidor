import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestaoForm } from './questao-form';

describe('QuestaoForm', () => {
  let component: QuestaoForm;
  let fixture: ComponentFixture<QuestaoForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestaoForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestaoForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
