import { TestBed } from '@angular/core/testing';

import { HeroService } from './hero.service';

describe('HeroService', () => {
  let service: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should display heros', () => {
    expect(service.getHeros().length).toBeGreaterThan(0);
  });

  it('should display 10 heros', () => {
    expect(service.getHeros().length).toBe(10);
  });

});
