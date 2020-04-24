public class ContactCreationQueable implements Queueable {
    private List<Account> accListToBeCreateContacts;
    public ContactCreationQueable(List<Account> expectingAccountsFromTrigger) {
        this.accListToBeCreateContacts = expectingAccountsFromTrigger;
    }
    public void execute(QueueableContext qc){
        List<Contact> conListToInsert = new List<Contact>();
        for (Account acc : accListToBeCreateContacts) {
            Contact con = new Contact();
            con.lastName = acc.Name;
            con.AccountId = acc.Id;
            conListToInsert.add(con); //Add each contact to the list
        }
        if(conListToInsert.size()>0){
            INSERT conListToInsert;
        }
    }
}
