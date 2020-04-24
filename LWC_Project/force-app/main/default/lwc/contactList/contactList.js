import { LightningElement , api} from 'lwc';

export default class ContactList extends LightningElement {
   
    contacts = [
        {
            Id:1,
            Name: 'James1',
            Email: 'jgm@gmail1.com'
        },
        {
            Id:2,
            Name: 'george',
            Email: 'jgm@gmail2.com'
        }
    ]
}