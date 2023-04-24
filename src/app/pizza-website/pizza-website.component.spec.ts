import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaWebsiteComponent } from './pizza-website.component';

describe('PizzaWebsiteComponent', () => {
  let component: PizzaWebsiteComponent;
  let fixture: ComponentFixture<PizzaWebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaWebsiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
