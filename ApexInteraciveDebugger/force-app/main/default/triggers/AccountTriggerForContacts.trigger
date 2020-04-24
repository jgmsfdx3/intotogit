trigger AccountTriggerForContacts on Account (after insert) {
    if(Trigger.isAfter && trigger.isInsert){
        System.enqueueJob(new ContactCreationQueable(trigger.New)); //Trigger.New have the list of accounts just inserted
    }
}