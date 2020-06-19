import { LightningElement, track } from 'lwc';

export default class BeerSearch extends LightningElement {
    handleChange(event){
        const value = event.target.value;
        const searchEvent = new CustomEvent(
            //this search value is used in the beerlist onsearch event
            'search',
            {
                detail : event.target.value
            }
        );
        this.dispatchEvent(searchEvent);
    }
}