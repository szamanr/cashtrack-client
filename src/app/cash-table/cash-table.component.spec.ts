import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashTableComponent } from './cash-table.component';
import {ItemService} from '../item.service';

describe('CashTableComponent', () => {
  let component: CashTableComponent;
  let fixture: ComponentFixture<CashTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashTableComponent ],
      providers: [ ItemService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a table', () => {});

  it('the table should fill the screen on desktop', () => {});

  it('the table should scroll on mobile', () => {});

  it('the table items should be editable in-place', () => {});

  it('should fetch items', () => {});

  it('should use the ItemService', () => {});

  it('should display fetched items in the table', () => {});

  it('each item should be displayed in a single row', () => {});
});
