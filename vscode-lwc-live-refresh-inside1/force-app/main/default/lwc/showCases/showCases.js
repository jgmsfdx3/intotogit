import { LightningElement,wire } from 'lwc';
//import fetchDataHelper from './fetchDataHelper';


import getCases from '@salesforce/apex/ShowCasesController.getCases';
const actions = [
    { label: 'Show Account details', name: 'show_account_details' }
];

const columns = [
    { label: 'Case Number', fieldName: 'CaseNumber' },
    { label: 'Status', fieldName: 'Status' },
    { label: 'Subject', fieldName: 'Subject', },
    { label: 'Created@', fieldName: 'createdDate', type: 'date' },
    {
        type: 'action',
        typeAttributes: { rowActions: actions },
    },
];

export default class ShowCases extends LightningElement {
    data = [];
    columns = columns;
    record = {};
    @wire(getCases)
    cases;

    handleRowAction(event) {
        const actionName = event.detail.action.name;
        const row = event.detail.row;
        switch (actionName) {
            case 'delete':
                this.deleteRow(row);
                break;
            case 'show_details':
                this.showRowDetails(row);
                break;
            default:
        }
    }


    showRowDetails(row) {
        this.record = row;
    }
}
