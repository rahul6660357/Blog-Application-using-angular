import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrienddetailComponent } from './frienddetail.component';

describe('FrienddetailComponent', () => {
  let component: FrienddetailComponent;
  let fixture: ComponentFixture<FrienddetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrienddetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrienddetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
