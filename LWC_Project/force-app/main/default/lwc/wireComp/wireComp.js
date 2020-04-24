import { LightningElement, wire, api, track } from 'lwc';
import getAllCases from '@salesforce/apex/twire.getAllCases';
export default class WireComp extends LightningElement {
/* */
@api records;
@api errors;
@track subject;
//@wire(getAllCases) cases;
constructor(){
    super();
    this.subject = "";
    console.log(" constructor from Parent");
}
connectedCallback() {
    //this.subject = "";
    //this.droney();
    //console.log(" connectedCallback innerHTML="+this.template.innerHTML)
    console.log('connectedCallback from Parent');
}
disconnectedCallback(){
console.log('disconnectedCallback from Parent')
}
renderedCallback(){
    //alert("renderedCallback");
    //alert(this.template.innerHTML   );
    //console.log(" renderedCallback innerHTML="+this.template.innerHTML)
    console.log('renderedCallback from Parent');
}
errorCallback(){
    console.log("errorCallback from Parent")
}
droney(){
   // alert("Hi from droney");
}
handleChange(event){
const sVal = event.target.value;
this.subject = sVal;
}
@wire(getAllCases,{
    subject : "$subject"
})
wiredGetCasesData({data, error})
{
    if(data){
        this.records = data;
       this.errors = undefined;
    }
    if(error){
       this.errors = error;
       this.records = undefined;
    }
}

}