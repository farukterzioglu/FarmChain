import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmCoinComponent } from './farm-coin.component';

describe('FarmCoinComponent', () => {
  let component: FarmCoinComponent;
  let fixture: ComponentFixture<FarmCoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmCoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
