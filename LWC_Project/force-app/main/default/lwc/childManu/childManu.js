import { LightningElement } from 'lwc';

export default class ChildManu extends LightningElement {
    constructor(){
        super();
        console.log(" constructor from child");
    }
    connectedCallback() {
        console.log('connectedCallback from child');
    }
    disconnectedCallback(){
    console.log('disconnectedCallback from child')
    }
    renderedCallback(){
        console.log('renderedCallback from child ');
    }
    errorCallback(){
        console.log("errorCallback from child")
    }
}