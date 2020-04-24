import { LightningElement , api} from 'lwc';

import firsttemplate from './lifeCycleHook.html'
import secondtemplate from './lifeCycleHook1.html'
export default class LifeCycleHook extends LightningElement {
    @api templateNum = 'temp1';
    constructor(){
        super();
        console.log("Inside constructor");
    }
    connectedCallback(){
        console.log("Inside connectedCallback");
    }
    disconnectedCallback(){
        console.log("Inside disconnectedCallback");
    }
    render(){
        console.log("Inside render");
        if(this.templateNum ==='temp1'){
            return firsttemplate;
        }else{
            return secondtemplate;
        }
    }
    changetemplate(){
        if(this.templateNum==='temp1'){
            this.templateNum = 'temp2';
        }else{
            this.templateNum = 'temp1';
        }
    }
}