public with sharing class ContactController {
    @AuraEnabled
    public static List<Contact>getContacts(){
        List<Contact> contacts = [SELECT Id, Name, MailingStreet, Phone, Email, LeadSource FROM Contact];
        //Add isAccessible() check
	return contacts;	
    }
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList() {
        List<Contact> contacts = [SELECT Id, Name, Title, Phone, Email FROM Contact];
        System.debug('contacts.size :'+contacts.size());
        return [
            SELECT Id, Name, Title, Phone, Email
            FROM Contact
            LIMIT 10
        ];
    }
}