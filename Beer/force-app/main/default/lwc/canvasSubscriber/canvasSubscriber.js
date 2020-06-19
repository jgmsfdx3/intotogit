import { LightningElement,track,wire } from 'lwc';
import {registerListener,unregisterAllListeners} from 'c/pubsub';
import {CurrentPageReference} from 'lightning/navigation';

export default class CanvasSubscriber extends LightningElement {
   @wire(CurrentPageReference) pageRef;

   connectedCallback()
   {
       console.log('This====>'+JSON.stringify(this));
       registerListener("changedColor",this.handleChangedColor,this);
   }
   disconnectedCallback()
   {
       unregisterAllListeners(this);
   }


   handleChangedColor(colorCode)
   {
       alert("Color -->>"+colorCode);
       console.log("Color -->>"+colorCode);
       this.color=colorCode;
   }
    get colorStyle(){
        return `background-color:${this.color}`;
    }
}