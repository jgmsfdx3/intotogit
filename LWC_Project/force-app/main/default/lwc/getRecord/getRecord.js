import { LightningElement , api} from 'lwc';

import {getRecord} from  'lightning/uiRecordApi'
export default class GetRecord extends LightningElement {
    @api recordId;
}