import { LightningElement , api} from 'lwc';

export default class OppertunityDetails extends LightningElement {
 @api recordId;
 @api objectApiName;

 constructor(){
     super();
     console.log(this.recordId);
     console.log(this.objectApiName);
 }
}