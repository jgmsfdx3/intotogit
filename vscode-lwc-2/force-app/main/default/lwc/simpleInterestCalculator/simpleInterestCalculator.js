import { LightningElement,track } from 'lwc';

export default class SimpleInterestCalculator extends LightningElement {
@track currentOutPut;
principal;
time;
rate;
principalCH(event){
this.principal = parseInt(event.target.value);

}
timeCH(event){
    this.time = parseInt(event.target.value);
    
    }
rateCH(event){
        this.rate = parseInt(event.target.value);
       
        }
        calculateSI(){
        //this.currentOutPut = 'Simple Inereset is ' + (this.principal)*(this.time)*(this.rate)/100;
        this.currentOutPut = 'Simple Inereset is ' + (principal)*(time)*(rate)/100;
        }
}
//currentOutPut
