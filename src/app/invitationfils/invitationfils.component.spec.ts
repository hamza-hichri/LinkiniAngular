import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitationfilsComponent } from './invitationfils.component';

describe('InvitationfilsComponent', () => {
  let component: InvitationfilsComponent;
  let fixture: ComponentFixture<InvitationfilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvitationfilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitationfilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
