import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailSystemComponent } from './mail-system.component';

describe('MailSystemComponent', () => {
  let component: MailSystemComponent;
  let fixture: ComponentFixture<MailSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailSystemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
