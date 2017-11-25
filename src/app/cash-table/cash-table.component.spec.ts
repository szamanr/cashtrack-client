import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CashTableComponent} from './cash-table.component';
import {ItemService} from '../item.service';

describe('CashTableComponent', () => {
  let component: CashTableComponent;
  let fixture: ComponentFixture<CashTableComponent>;
  let compiled;
  let table: Element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CashTableComponent],
      providers: [ItemService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
    table = compiled.querySelector('table');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create an empty table', () => {
    fixture.detectChanges();
    expect(table).toBeTruthy();
    expect(table.querySelector('thead tr')).toBeTruthy();
    expect(table.querySelector('tbody tr')).toBeFalsy();
  });

  // TODO: UI testing
  // it('the table should fill the screen on desktop', () => {});

  // TODO: UI testing
  // it('the table should scroll on mobile', () => {});

  // TODO: add test after having fetched items
  /*it('the table items should be editable in-place', () => {
    expect(table.querySelector('td[contenteditable]')).toBeTruthy();
  });*/

  it('should fetch items', () => {
    expect(component.items).toBeDefined();
    expect(component.items.length).toEqual(0);

    // TODO
  });

  // TODO
  /*it('should use the ItemService', () => {
  });*/

  // TODO
  /*it('should display fetched items in the table', () => {
  });*/

  // TODO
  /*it('each item should be displayed in a single row', () => {
  });*/
});
