public with sharing class SecondJobQueable {
    public SecondJobQueable() {

    }
    public void execute(QueueableContext qc){
        System.debug('Second Job que is executing');
        DELETE [SELECT id from Contact where createddate=LAST_YEAR];
    }
}
