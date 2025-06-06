import { bootstrapApplication } from '@angular/platform-browser';
import { AgGridViewComponent } from './app/ag-grid-view/ag-grid-view';
import 'zone.js';

bootstrapApplication(AgGridViewComponent)
  .catch(err => console.error(err));
