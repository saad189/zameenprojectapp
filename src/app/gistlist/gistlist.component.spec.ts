import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GistlistComponent } from './gistlist.component';

describe('GistlistComponent', () => {
  let component: GistlistComponent;
  let fixture: ComponentFixture<GistlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GistlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GistlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
