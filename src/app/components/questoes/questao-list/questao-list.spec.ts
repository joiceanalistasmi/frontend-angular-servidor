import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestaoList } from './questao-list';

describe('QuestaoList', () => {
  let component: QuestaoList;
  let fixture: ComponentFixture<QuestaoList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestaoList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestaoList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
