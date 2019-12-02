import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantFormComponent } from './grant-form.component';

describe('GrantFormComponent', () => {
  let component: GrantFormComponent;
  let fixture: ComponentFixture<GrantFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
