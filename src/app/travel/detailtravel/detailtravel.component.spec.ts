import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailtravelComponent } from './detailtravel.component';

describe('DetailtravelComponent', () => {
  let component: DetailtravelComponent;
  let fixture: ComponentFixture<DetailtravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailtravelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailtravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
