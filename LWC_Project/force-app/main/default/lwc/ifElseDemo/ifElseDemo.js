import { LightningElement } from 'lwc';

export default class IfElseDemo extends LightningElement {
    isJerry = false;
    isTom = true;
    showTom(){
        this.isTom = true;
        this.isJerry = false;
    }
    showJerry(){
        this.isTom = false;
        this.isJerry = true;
    }
}