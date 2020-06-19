import { LightningElement, track} from 'lwc';

export default class HelloWorld extends LightningElement {
@track empname
@track age
@track salary;
@track greeting ='World';

show = false;

something = false;
handleChange(event){
//this.greeting = event.target.value;
if(this.show == true){
    this.show = false;
}else{
    this.show = true;
}

}

handleEmployee(event){
   this.empname = event.target.value;
}
handleAge(event){
    this.age = event.target.value;
 }
 handleSalary(event){
    this.salary = event.target.value;
 }
 contacts = [
     {
         Id:1,
         Name: 'Amy Taylor',
         Title:'VP of engineering'
     },
     {
        Id:2,
        Name: 'Amy Taylor2',
        Title:'VP of engineering2'
    }
 ]
}