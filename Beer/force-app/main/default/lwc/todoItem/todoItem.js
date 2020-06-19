import { LightningElement, api } from 'lwc';
export default class TodoItem extends LightningElement {
    @api itemName = 'New Item';

    handleChange(event){
        this.itemName = event.target.value;
    }
}