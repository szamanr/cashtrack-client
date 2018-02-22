import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CashTableComponent} from './cash-table.component';
import {ItemService} from '../../api/item.service';
import {FormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import {CurrencyService} from '../../api/currency.service';
import {AccountService} from '../../api/account.service';

describe('CashTableComponent', () => {
  let component: CashTableComponent;
  let fixture: ComponentFixture<CashTableComponent>;
  let compiled;
  let table: Element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CashTableComponent],
      providers: [ItemService, CurrencyService, AccountService],
      imports: [TableModule,
        FormsModule]
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

  it('should be created', () => {
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

  it('should fetch items', () => {
    expect(component.items).toBeDefined();
    expect(component.items.length).toEqual(0);

    fixture.whenStable().then(() => {
      expect(component.items.length).toBeGreaterThan(0);
    });
  });

  it('should display fetched items in a table', () => {
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(table.querySelector('tbody tr')).toBeTruthy();
    });
  });

  it('each item should be displayed in a single row', () => {
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(table.querySelector('tbody').querySelectorAll('tr').length).toEqual(component.items.length);
    });
  });

  /*it('the table items should be editable in-place', () => {
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(table.querySelector('td[contenteditable]')).toBeTruthy();
    });
  });*/

  it('should fetch payment accounts', () => {
    expect(component.accounts).toBeDefined();
    expect(component.accounts.length).toEqual(0);

    fixture.whenStable().then(() => {
      expect(component.accounts.length).toBeGreaterThan(0);
    });
  });

  it('should fetch available currencies', () => {
    expect(component.currencies).toBeDefined();
    expect(component.currencies.length).toEqual(0);

    fixture.whenStable().then(() => {
      expect(component.currencies.length).toBeGreaterThan(0);
    });
  });
});
