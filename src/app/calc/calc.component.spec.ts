import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcComponent } from './calc.component';

describe('CalcComponent', () => {
  let component: CalcComponent;
  let fixture: ComponentFixture<CalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('expects a 5 ', () => {
    let calc = 2+3;
    expect(calc).toBe(5);
  })

  it('clicked button should set #message to ON ', () => {
    const component = new CalcComponent();
    //before click
    expect(component.message).toMatch('OFF');
    component.click();
    //after click
    expect(component.message).toMatch('ON')
  })
});
