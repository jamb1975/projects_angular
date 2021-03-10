import { TestBed } from '@angular/core/testing';

import { NotificacionesbusService } from './notificacionesbus.service';

describe('NotificacionesbusService', () => {
  let service: NotificacionesbusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificacionesbusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
