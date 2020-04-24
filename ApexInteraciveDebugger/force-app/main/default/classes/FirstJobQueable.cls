public class FirstJobQueable implements Queueable{
    public FirstJobQueable() {

    }
    public void execute(QueueableContext qc){
        System.debug('First Job que is executing');
        DELETE [SELECT id from Account where createddate=LAST_YEAR];
        //chain any job we want
        System.enqueueJob(new SecondJobQueable());
    }
}
