public with sharing class BeerController {
    public BeerController() {
    }
    @AuraEnabled(cacheable=true)
    public static List<SObject>searchBeer(String searchParam){
        /**This method returns the list of beer objects based on the name query */
        String likeParam = '%'+ searchParam+ '%';
        String query = '';
        if(searchParam!=null){
            query = 'Select Id, Name, Alcohol__c, brewery_Name__c, Tags__c, Price__c, Remaining_Quantity__c FROM Beer__c WHERE Name like :likeParam LIMIT 50';
        }else {
            query = 'Select Id, Name, Alcohol__c, brewery_Name__c, Tags__c, Price__c, Remaining_Quantity__c FROM Beer__c LIMIT 50';
        }
        List<SObject> beers = Database.query(query);
        return beers;
    }
}