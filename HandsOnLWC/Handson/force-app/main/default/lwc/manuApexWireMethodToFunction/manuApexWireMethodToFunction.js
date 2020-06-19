import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';

export default class ManuApexWireMethodToFunction extends LightningElement {
    contacts;
    error;

    @wire(getContactList)
    wiredContacts({ error, data }) {
        if (data) {
            console.log('data='+data);
            console.log('json data='+ JSON.stringify(data));
            this.contacts = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.contacts = undefined;
        }
    }
}