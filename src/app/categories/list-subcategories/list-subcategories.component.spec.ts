import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSubcategoriesComponent } from './list-subcategories.component';

describe('ListSubcategoriesComponent', () => {
  let component: ListSubcategoriesComponent;
  let fixture: ComponentFixture<ListSubcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSubcategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSubcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
