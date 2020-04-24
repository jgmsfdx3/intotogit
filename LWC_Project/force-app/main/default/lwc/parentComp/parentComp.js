import { LightningElement } from 'lwc';

export default class ParentComp extends LightningElement {
    handleSimplanEvent(event){
        var myJSON = JSON.stringify(event.detail.message);
        console.log(myJSON);
        console.log(event.detail.message);
        console.log(event.detail.place);
    }
}