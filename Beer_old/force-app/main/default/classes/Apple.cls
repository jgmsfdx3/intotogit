public with sharing class Apple {
    public Apple() {

    }
    public void test(){

        for( Schema.SObjectType o: Schema.getGlobalDescribe().values()){
            System.debug(o.getDescribe().getName());
        }

    }
    
    
}
