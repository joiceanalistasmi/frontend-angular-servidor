import { TestBed } from '@angular/core/testing';

import { QuestaoServices } from './questao-services';

describe('QuestaoServices', () => {
  let service: QuestaoServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestaoServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
