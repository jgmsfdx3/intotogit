import { LightningElement,track,wire} from 'lwc';
import {fireEvent} from 'c/pubsub';
import {CurrentPageReference} from 'lightning/navigation';


export default class PalettePublisher extends LightningElement {
    @track color;
    @track testcolor;
    @wire(CurrentPageReference) pageRef;
    colorCodeOptions=[
        {label:"Green",value:"green"},
        {label:"Red",value:"red"},
        {label:"Yellow",value:"yellow"},
        {label:"Blue",value:"blue"}
    ];
    changeColor(event)
    {

       var testObject =[
            {"name":"James",
            "age":"22"
            },
            {"name":"Jeena",
            "age":"21"
            }
        ];



       this.color= event.target.value;
       this.color= 'james george' + JSON.stringify(testObject);
       //this.color= testObject;
       fireEvent(this.pageRef,"changedColor",this.color);
    }
}