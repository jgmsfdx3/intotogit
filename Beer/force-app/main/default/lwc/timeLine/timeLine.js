import { LightningElement,track,wire, api } from 'lwc';
import {registerListener,unregisterAllListeners} from 'c/pubsub';
import {CurrentPageReference} from 'lightning/navigation';
import displayAccounts from '@salesforce/apex/AccountClass.displayAccounts'

export default class TimeLine extends LightningElement {
    @track accountId;
    @wire(CurrentPageReference) pageRef;

    @track record_account;

    ac = true;
    hr = true;
    ex = true;
    vp = true;

    connectedCallback()
    {
        registerListener("pushrecordid",this.handleData,this);
    }
    disconnectedCallback()
    {
        unregisterAllListeners(this);
    }

    @api recordid;
    @api records;
    @api error;
    @track recData;

    @track recName;
    @track recId;
    handleData(publishedData){
        console.log('Passed data====>'+publishedData);
        var temp = publishedData.replace(/"/g,'');
        displayAccounts({recordid:temp})
        .then(result=>{
            console.log('Result--->'+JSON.stringify(result));
            this.records=result;
            this.record_account= JSON.stringify(result);
            this.error=undefined;
            //Updating the timeline-accordian child
            this.recData = this.records;
            this.recId = this.records[0].Id;
            this.recName = this.records[0].Name;

        })
        .catch(error=>{
            console.log('Error--->'+JSON.stringify(error));
            this.error=error;
            this.records=undefined;
        });
    }
}