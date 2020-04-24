import { LightningElement , track} from 'lwc';
import getAllCases from '@salesforce/apex/twire.getAllCases'
export default class ApexImperativeMethod extends LightningElement {
    @track subject;
    @track records;
    @track error;
    handleChange(event){
        const sVal = event.target.value;
        getAllCases({
            subject:sVal
        })
        .then(result =>{
            console.log('Case records', result);
            this.records = result;
        })
        .catch(error =>{
            console.log('Error', error);
            this.error = error;
        })
    }
}