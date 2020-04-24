@isTest
private class TemperatureConverterTest {
    @isTest static void testWarmTemp() {
        Decimal celsius = TemperatureConverter.FahrenheitToCelsius(70);
        System.assertEquals(21.11,celsius);
    }

    @isTest static void testFreezingPoint() {
        Decimal celsius = TemperatureConverter.FahrenheitToCelsius(32);
        System.assertEquals(0,celsius);
    }
    @isTest static void testBoilingPoint() {
        Decimal celsius = TemperatureConverter.FahrenheitToCelsius(212);
        System.assertEquals(100,celsius,'Boiling point temperature is not expected.');
    }
    @isTest static void testNegativeTemp() {
        Decimal celsius = TemperatureConverter.FahrenheitToCelsius(-10);
        System.assertEquals(-23.33,celsius);
    }
    @isTest static void testhello() {
        /*
        Schema.DescribeFieldResult  F = Account.Type.getDescribe();
        List<Schema.PicklistEntry> P = F.getPicklistValues();
        for (schema.PicklistEntry pickVal : P) {
            System.debug(pickVal.getLabel());
        }
        String  celsius = TemperatureConverter.hello();
        Integer a = 10;
        Integer b = 20;
        Integer z = (a+b);
        */
        Map<ID,String> sampleMap;
        List<Account> acc;
        Integer z = 5;
        do {
            z = z+1;
        } while (z<=15);
        System.debug('zzzzzzzzzz='+z);
        System.assertEquals('success','success');
    }
}