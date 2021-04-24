import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GistdetailComponent } from './gistdetail.component';

describe('GistdetailComponent', () => {
  let component: GistdetailComponent;
  let fixture: ComponentFixture<GistdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GistdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GistdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
