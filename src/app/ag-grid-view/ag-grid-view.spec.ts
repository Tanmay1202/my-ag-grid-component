import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridView } from './ag-grid-view';

describe('AgGridView', () => {
  let component: AgGridView;
  let fixture: ComponentFixture<AgGridView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgGridView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgGridView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
