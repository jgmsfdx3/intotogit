import { LightningElement , track, api} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class TimeLineAccordianAc extends LightningElement {
    //@track record_account;
    @api recData;
    @api recName;
    @api recId;
    @api recordId;

    @api changed;

    recordId = this.recId;

    handleSubmit(event) {
        console.log('onsubmit event recordEditForm'+ event.detail.fields);
    }
    handleSuccess(event) {
        console.log('onsuccess event recordEditForm', event.detail.id);
        this.showSuccessToast();
        this.changed=true;
    }
    showSuccessToast() {
        const evt = new ShowToastEvent({
            title: 'Record Update',
            message: 'Application is loaded ',
            variant: 'success',
            mode: 'dismissable'
        });
        this.dispatchEvent(evt);
    }

}