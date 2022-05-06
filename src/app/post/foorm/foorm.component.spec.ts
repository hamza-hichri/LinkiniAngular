import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoormComponent } from './foorm.component';

describe('FoormComponent', () => {
  let component: FoormComponent;
  let fixture: ComponentFixture<FoormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
