import { LightningElement } from 'lwc';

export default class HtmlEventBasic extends LightningElement {
    msg = 'Welcome James';
    handleChange(){
        document.getElementById('input-4').innerText= 'a value is being set';
    }
}