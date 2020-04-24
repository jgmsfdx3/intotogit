public class CaseTriggerHandler {
	//
	// custom trigger handler setup to handler all triggers received on Case object
	//
    private boolean myIsExecuting = false;
    private integer BatchSize = 0;
	//
	// constructor
	//
    public CaseTriggerHandler(boolean isExecuting, integer size) {
        myIsExecuting = isExecuting;
        BatchSize = size;
    }
	//
	// On Before Insert 
	//   
    public void OnBeforeInsert(list<Case> lstNew) { 
    } 
	//
	// On After Insert 
	// 
    public void OnAfterInsert(map<id, Case> mapNew) {
    }
	//
	// On Before Update 
	//    
    public void OnBeforeUpdate(map<id, Case> mapOld, map<id, Case> mapNew) { 
    }
}