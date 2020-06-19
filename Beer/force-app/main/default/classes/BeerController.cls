public with sharing class BeerController {
    public BeerController() {

    }
    @AuraEnabled(cacheable=true)
    public static List<SObject>searchBeer(String searchParam){
        String likeParam = '%' + searchParam + '%';
        String query = '';
        if(searchParam !=null ){
            query = 'Select Id, Name,Alcohol__c,brewery_id__c,Id__c,Price__c,Image__c,Remaining_Quantity__c,Tags__c, Total_Quantity__c from Beer__c Where Name LIKE  :likeParam LIMIT 50';
        }else {
            query = 'Select Id, Name,Alcohol__c,brewery_id__c,Id__c,Price__c,Image__c,Remaining_Quantity__c,Tags__c, Total_Quantity__c from Beer__c LIMIT 50';
        }
        List<SObject> SObjectList = Database.query(query);
        return SObjectList;
    }
}