trigger CaseTrigger on Case (after delete, after insert, after undelete, after update, 
								   before delete, before insert, before update) {
    CaseTriggerHandler handler = new CaseTriggerHandlerx(trigger.isExecuting, trigger.size);
    //
    // Before Insert - new record(s) being created 
    // 
    if(trigger.isInsert && trigger.isBefore) {
        handler.OnBeforeInsert(trigger.new);
    //
    // After Insert - new record(s) being created 
    } else if(trigger.isInsert && trigger.isAfter) {
        handler.OnAfterInsert(trigger.newMap);
    // 
    // Before Update - existing record(s) being saved
    //
    } else if(trigger.isUpdate && trigger.isBefore) {
        handler.OnBeforeUpdate(trigger.oldMap, trigger.newMap);
    //
    // After Update - existing record(s) being saved
    //
    } 
}