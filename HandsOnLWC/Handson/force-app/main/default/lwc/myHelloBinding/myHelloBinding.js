import { LightningElement } from 'lwc';

export default class MyHelloBinding extends LightningElement {
    greeting = 'World';

    handleChange(event) {
        this.greeting = event.target.value;
    }
}