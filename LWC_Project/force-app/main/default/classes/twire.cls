public with sharing class twire {
    public twire() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Case> getAllCases(){
        List<Case> caseList = [Select Id, Subject, Description, Status, Origin from Case];
        return caseList;
    }

    @AuraEnabled(cacheable=true)
    public static List<Case> getAllCases(String subject){
        String key = '%' + subject + '%';
        List<Case> caseList = [Select Id, Subject, Description, Status, Origin from Case Where Subject Like:key];
        return caseList;
    }
    /*
    @AuraEnabled(cacheable=true)
    public static List<Case> getAllCasesByDefault(){
        List<Case> caseList = [Select Id, Subject, Description, Status, Origin from Case];
        return caseList;
    }*/

}