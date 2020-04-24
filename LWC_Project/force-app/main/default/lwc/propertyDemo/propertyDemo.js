import { LightningElement, track, api } from 'lwc';

export default class PropertyDemo extends LightningElement {
    @track message = 'Reactive Property';
    @api message1 = 'Reactive Propery using @api';
    @track getMe = '';

    handleChange(event){
        this.message1 = event.target.value;
        this.getMe = event.target.value;
    }
    get name(){
        return 'James George' + ' '+this.getMe;
    }
    get changedmessage(){
        return this.message1 + " changed it !!!";
    }
}