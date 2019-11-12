import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodPageComponent } from './good-page.component';

describe('GoodPageComponent', () => {
  let component: GoodPageComponent;
  let fixture: ComponentFixture<GoodPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
