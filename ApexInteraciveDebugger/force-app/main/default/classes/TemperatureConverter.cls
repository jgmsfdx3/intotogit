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
}