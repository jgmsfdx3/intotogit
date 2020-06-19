public class ShowCasesController {
    public ShowCasesController() {
    }
    @AuraEnabled(cacheable=true)
        public static List<Case> getCases(){
            List<Case>caseList = new List<Case>();
            caseList = [SELECT Id,
            CaseNumber,
            Status,
            Subject,
            CreatedDate,
            AccountId,
            Account.Name,
            Account.BillingStreet,
            Account.BillingCity,
            Account.BillingState
            FROM Case
            //FROM CASE WHERE Account.Type = 'Mechanical'
            ];
            if(caseList<>null && !caseList.isEmpty()){
                return caseList;
            }
            return caseList;
        }
}