import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GauthComponent } from './gauth.component';

describe('GauthComponent', () => {
  let component: GauthComponent;
  let fixture: ComponentFixture<GauthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GauthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
