// Use .apex files to store anonymous Apex.
// You can execute anonymous Apex in VS Code by selecting the
//     apex text and running the command:
//     SFDX: Execute Anonymous Apex with Currently Selected Text
// You can also execute the entire file by running the command:
//     SFDX: Execute Anonymous Apex with Editor Contents

/*Getting all the objects name*/
for( Schema.SObjectType o: Schema.getGlobalDescribe().values()){
    System.debug(o.getDescribe().getName());
}

Map<String, Schema.SObjectType> schemaMap = Schema.getGlobalDescribe();
System.debug(schemaMap.keySet());
//get the account
System.debug('val=====>'+schemaMap.get('account'));
SObjectType acc = schemaMap.get('account');

List<String> lstSobjects = new List<String>();
lstSobjects.add('Account');
List <Schema.DescribeSObjectResult> lstResult = Schema.describeSObjects(lstSobjects);
List<String> fields = new List<String>();
fields.addAll(lstResult[0].fields.getMap().keySet());
for (String field : fields) {
    System.debug(field);
}
