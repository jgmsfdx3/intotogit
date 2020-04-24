import { LightningElement, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavigationLWC extends NavigationMixin(LightningElement) {
    navigateToObjectHome() {
        // Navigate to the Account home page
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'home',
            },
        });
    }
    //navigateToListView
    navigateToListView() {
        // Navigate to the Account home page
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'list',
            },
        });
    }
}