import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenInterceptorComponent } from './authen-interceptor.component';

describe('AuthenInterceptorComponent', () => {
  let component: AuthenInterceptorComponent;
  let fixture: ComponentFixture<AuthenInterceptorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthenInterceptorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenInterceptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});