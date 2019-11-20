import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogRowComponent } from './blog-row.component';

describe('BlogRowComponent', () => {
  let component: BlogRowComponent;
  let fixture: ComponentFixture<BlogRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
