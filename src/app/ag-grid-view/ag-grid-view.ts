import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';

import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'; 

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-ag-grid-view',
  standalone: true,
  imports: [CommonModule, AgGridModule],
  templateUrl: './ag-grid-view.html',
  styleUrls: ['./ag-grid-view.css']
})
export class AgGridViewComponent {
  rowData = [
    { requestNo: '2198400597', requestType: 'Single', materialNo: '', status: 'Draft', creationDate: '21 11 2024 07:43 PM', createdBy: 'Admin' },
    { requestNo: '1934702663', requestType: 'Single', materialNo: '', status: 'Approved', creationDate: '18 11 2024 06:28 PM', createdBy: 'Admin' },
    { requestNo: '1925095887', requestType: 'Single', materialNo: '', status: 'Draft', creationDate: '18 11 2024 03:48 PM', createdBy: 'Admin' },
    { requestNo: '1587269331', requestType: 'Single', materialNo: '', status: 'Draft', creationDate: '14 11 2024 05:57 PM', createdBy: 'Admin' },
    { requestNo: '1567824187', requestType: 'Single', materialNo: '0000000010008915', status: 'Declined', creationDate: '14 11 2024 12:33 PM', createdBy: 'Admin' },
    { requestNo: '1556836588', requestType: 'Mass', materialNo: '', status: 'Completed', creationDate: '14 11 2024 09:30 AM', createdBy: 'Admin' },
    { requestNo: '1556750031', requestType: 'Single', materialNo: '0000000010008911', status: 'Approved', creationDate: '14 11 2024 09:29 AM', createdBy: 'Admin' },
    { requestNo: '1508406368', requestType: 'Single', materialNo: '', status: 'Draft', creationDate: '13 11 2024 08:03 PM', createdBy: 'Admin' },
    { requestNo: '1505727486', requestType: 'Single', materialNo: '', status: 'Draft', creationDate: '13 11 2024 07:18 PM', createdBy: 'Admin' },
  ];

  columnDefs: ColDef[] = [
    { field: 'requestNo', headerName: 'Request No' },
    { field: 'requestType', headerName: 'Request Type', cellRenderer: this.requestTypeBadge },
    { field: 'materialNo', headerName: 'Material No' },
    { field: 'status', headerName: 'Status', cellRenderer: this.statusBadge },
    { field: 'creationDate', headerName: 'Creation Date' },
    { field: 'createdBy', headerName: 'Created By' },
    {
      headerName: 'View',
      cellRenderer: () => `<i class='fa fa-eye action-icon'></i>`,
      width: 80
    },
    {
      headerName: 'Logs',
      cellRenderer: () => `<i class='fa fa-file-alt action-icon'></i>`,
      width: 80
    },
    {
      headerName: 'Action',
      cellRenderer: () => `<i class='fa fa-cog action-icon'></i>`,
      width: 80
    }
  ];

  requestTypeBadge(params: any) {
    console.error('requestTypeBadge params:', params);
    const type = params.value;
    const badgeClass = type === 'Mass' ? 'badge-mass' : 'badge-single';
    const html = `<span class=\'badge ${badgeClass}\'>${type}</span>`;
    console.error('requestTypeBadge HTML:', html);
    return html;
  }

  statusBadge(params: any) {
    console.error('statusBadge params:', params);
    const status = params.value;
    let badgeClass = '';
    switch (status) {
      case 'Draft': badgeClass = 'badge-draft'; break;
      case 'Approved': badgeClass = 'badge-approved'; break;
      case 'Declined': badgeClass = 'badge-declined'; break;
      case 'Completed': badgeClass = 'badge-completed'; break;
      default: badgeClass = 'badge-default';
    }
    const html = `<span class=\'badge ${badgeClass}\'>${status}</span>`;
    console.error('statusBadge HTML:', html);
    return html;
  }
}
