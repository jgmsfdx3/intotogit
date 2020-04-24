import { LightningElement, api, track } from 'lwc';

export default class ChildComp extends LightningElement {
    @api message = 'xxyxxxxx';
    @api vasco = 'Goa';
    @track mtrack = 'y'
    @api jsonData = [
        {
            "id":"1",
            "name":"james"
        },
        {
            "id":"2",
            "name":"george"
        }
    ];
    handleEvent(){
        //const eventS = new CustomEvent('simplan',{detail:{message:this.message}});
        //const eventS = new CustomEvent('simplan',{detail:{message:this.jsonData}});
        /*
        ,
            detail:{place:this.vasco}
        */
        const eventS = new CustomEvent('simplan',
        {
            detail:{
                message:this.jsonData,
                place:this.vasco
            }
        }
        );
       
        this.dispatchEvent(eventS);
    }
}
