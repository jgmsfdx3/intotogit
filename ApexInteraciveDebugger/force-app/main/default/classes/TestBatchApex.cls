global class TestBatchApex implements Database.Batchable<SObject> {
    global Database.QueryLocator start(Database.BatchableContext Bc){
        return Database.getQueryLocator('SELECT id, name from Account');
    }

    global void execute(Database.BatchableContext bc, List<Account> subListFromStartMethod){
        for(Account acc:subListFromStartMethod){
            acc.Name = 'Batch Updated '+acc.Name;
            acc.Name = acc.Name.replaceAll('Batch Updated ', '');
            System.debug('Updating ------>'+acc.Name);
        }
        UPDATE subListFromStartMethod;
        
    }
    global void finish(Database.BatchableContext Bc){
        System.debug('@@@@ Batch Job Completed !!!');
    }
}