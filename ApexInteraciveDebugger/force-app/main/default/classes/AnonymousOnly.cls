public class AnonymousOnly {
    //TodayTasks tt = new TodayTasks();
    //{tt.hiThere();}
    /*
    Account a = new Account(name='Acme3');
    Database.SaveResult[] lsr = Database.insert(new Acccount[]{a, new Account(Name='Acme4')}, false);
    */
    public void myExecuteAnonymous(){
        // Create two accounts, one of which is missing a required field
        Account[] accts = new List<Account>{
            new Account(Name='Account1'),
            new Account()};
        Database.SaveResult[] srList = Database.insert(accts, false);

        // Iterate through each returned result
        for (Database.SaveResult sr : srList) {
            if (sr.isSuccess()) {
                // Operation was successful, so get the ID of the record that was processed
                System.debug('Successfully inserted account. Account ID: ' + sr.getId());
            }
            else {
                // Operation failed, so get all errors
                for(Database.Error err : sr.getErrors()) {
                    System.debug('The following error has occurred.');
                    System.debug(err.getStatusCode() + ': ' + err.getMessage());
                    System.debug('Account fields that affected this error: ' + err.getFields());
                }
            }
        }
    }
    /*
    public static String  hello(){
        // Create two accounts, one of which is missing a required field
        Account[] accts = new List<Account>{
            new Account(Name='Account100'),
            new Account()};
        Database.SaveResult[] srList = Database.insert(accts, false);
        return 'success';
    }
    */
}