import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import {AppComponent} from './app.component';
import {RouterTestingModule} from '@angular/router/testing';
import {UserMenuComponent} from './user-menu/user-menu.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppService} from './app.service';
import {UserService} from '../api/user.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let app: AppService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        UserMenuComponent
      ],
      imports: [
        RouterTestingModule,
        NgbModule.forRoot(),
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        AppService,
        UserService,
      ]
    }).compileComponents();
  }));

  beforeEach(inject([AppService], (service) => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    app = service;
  }));

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it(`should have as title 'cashtrack'`, async(() => {
    expect(app.config.title).toEqual('cashtrack');
  }));

  it('should have an addItem method', () => {
    const method = component.addItem;
    expect(method).toBeDefined();
  });

  // TODO
  /*
  it('the addItem method should invoke the item service', () => {

  });*/
});
