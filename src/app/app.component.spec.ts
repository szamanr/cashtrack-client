import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import {AppComponent} from './app.component';
import {RouterTestingModule} from '@angular/router/testing';
import {ItemService} from '../api/item.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  // let service: ItemService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        ItemService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  /*beforeEach(inject([ItemService], (itemService) => {
    service = itemService;
  }));*/

  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'cashtrack'`, async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('cashtrack');
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
