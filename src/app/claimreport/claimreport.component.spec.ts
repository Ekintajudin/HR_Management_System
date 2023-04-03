import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClaimreportComponent } from './claimreport.component';

describe('ClaimreportComponent', () => {
  let component: ClaimreportComponent;
  let fixture: ComponentFixture<ClaimreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
