import { LightningElement } from 'lwc';

export default class DebugTest extends LightningElement {
    handleMaths(){
        var x = 10;
        var y = 20;
        var z = x + y;
        console.log("z==="+z);
    }
}