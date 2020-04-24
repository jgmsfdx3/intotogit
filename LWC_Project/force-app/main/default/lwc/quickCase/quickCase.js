import { LightningElement } from 'lwc';

export default class QuickCase extends LightningElement {
    subject;
    description;
    statusValue;
    priorityValue;
    originValue;

    handleChange(event){
        
    }
    get status(){
        return [
            {value: 'new', label: 'New'},
            {value: 'in-progress', label: 'In Progress'},
            {value: 'finished', label: 'Finished'}
        ];
    }
    get origin(){
        return [
            {value: 'Web', label: 'Web'},
            {value: 'Phone', label: 'Phone'},
            {value: 'Walkin', label: 'Walkin'}
        ];
    }
    get priority(){
        return [
            {value: 'Medium', label: 'Medium'},
            {value: 'High', label: 'High'},
            {value: 'Normal', label: 'Normal'}
        ];
    }
    handleCreate(){

    }
}