public class ScheduleApexDemo implements Schedulable {
    public void execute(SchedulableContext sc){
        List<Account>  accs = [SELECT id, name from Account where CREATEDDATE=TODAY];
        for (Account acc : accs) {
            acc.Name = 'Updated by Scheduled '+acc.Name;
        }
        UPDATE(accs);
    }
}
