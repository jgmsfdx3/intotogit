import { LightningElement, api } from 'lwc';

export default class LdsViewRecord extends LightningElement {
    @api recordId;
    @api objectApiName;
    handleSubmit(){
        alert("submit happened");
    }
}