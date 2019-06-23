import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdOneComponent } from './prod-one.component';

describe('ProdOneComponent', () => {
  let component: ProdOneComponent;
  let fixture: ComponentFixture<ProdOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
