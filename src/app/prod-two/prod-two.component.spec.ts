import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdTwoComponent } from './prod-two.component';

describe('ProdTwoComponent', () => {
  let component: ProdTwoComponent;
  let fixture: ComponentFixture<ProdTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
