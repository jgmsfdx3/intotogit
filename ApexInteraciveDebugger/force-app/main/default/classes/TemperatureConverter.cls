public class TemperatureConverter {
    // Takes a Fahrenheit temperature and returns the Celsius equivalent.
    public static Decimal FahrenheitToCelsius(Decimal fh) {
        Decimal cs = (fh - 32) * 5/9;
        return cs.setScale(2);
    }
    public static String  hello(){

        // Create two accounts, one of which is missing a required field
        Account[] accts = new List<Account>{
            new Account(Name='Account102'),
            new Account()};
        Database.SaveResult[] srList = Database.insert(accts, false);
        return 'success';
    }
    public static String mySavePoint(){
        Account a = new Account(Name = 'xxx'); 
        insert a;
        System.assertEquals(null, [SELECT AccountNumber FROM Account WHERE Id = :a.Id].AccountNumber);
        // Create a savepoint while AccountNumber is null
        Savepoint sp = Database.setSavepoint();
        // Change the account number
        a.AccountNumber = '123';
        update a;
        System.assertEquals('123', [SELECT AccountNumber FROM Account WHERE Id = :a.Id].AccountNumber);
        // Rollback to the previous null value
        Database.rollback(sp);
        System.debug('The value of A===>'+a.AccountNUmber);
        System.assertEquals(null, [SELECT AccountNumber FROM Account WHERE Id = :a.Id].AccountNumber);
        System.assertEquals('success','success');
        return 'success';
    }
    public static String queryMe(){
        
        String name = 'ex';
        String qs = '%' + name + '%';
        List<Contact> qr = [SELECT id FROM Contact WHERE Name LIKE:qs];
        for (Contact c : qr) {
            System.debug('Name---------->'+c);
        }
        return 'success';
    }
}