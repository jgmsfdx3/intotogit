public with sharing class AccountClass {
    @AuraEnabled
     public static List<Account> getAccountList(){
        return [select id, Name , Phone from Account limit 2000];
     }


     @AuraEnabled
     public static List<Account> displayAccounts(String recordid){
        system.debug('----------------->Display account loaded' + recordid);
         List<Account> acclist=[select Id,Name from Account WHERE Id = :recordid];
         return acclist;
     }
}