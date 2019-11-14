import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendblogdetailComponent } from './friendblogdetail.component';

describe('FriendblogdetailComponent', () => {
  let component: FriendblogdetailComponent;
  let fixture: ComponentFixture<FriendblogdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendblogdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendblogdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
