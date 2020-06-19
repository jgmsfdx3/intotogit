import { LightningElement , wire} from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';
export default class Mytest extends LightningElement {
    @wire(getContactList) contacts;
    name = 'Electra X4';
    description = 'A sweet bike built for comfort.';
    category = 'Mountain';
    material = 'Steel';
    price = '$2,700';
    pictureUrl = 'https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/electrax4.jpg';

    desc ={"name":"James George","age":"25"};
}