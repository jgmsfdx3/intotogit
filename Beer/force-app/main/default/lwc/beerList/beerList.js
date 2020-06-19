import { LightningElement, track, wire } from 'lwc';
import searchBeer from '@salesforce/apex/BeerController.searchBeer';
export default class BeerList extends LightningElement {

    @track beerRecords;
    @track errros;

    @wire(searchBeer)
        wiredRecords({error, data}){
            console.log(' Data ', data);
            this.beerRecords = data;
            this.errors = error;
        }
    handleEvent(event){
        console.log('handleEvent called...');
        const eventVal = event.detail;
        console.log(' Search Param ', eventVal);
        searchBeer({
            searchParam : eventVal
        })
        .then(result => {
            console.log(' Beer Records ', result);
            this.beerRecords = result;
            this.errros = undefined;
        })
        .catch(error => {
            console.log(' Errors ', error);
            this.errors = error;
            this.beerRecords = undefined;
        })
    }
}