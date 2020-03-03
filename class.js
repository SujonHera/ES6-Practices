
class Student{
    constructor(id, name){
        this.id = id;
        this.name = name;
        this.print = function (){
            console.log(`Id : ${this.id} Name: ${this.name}`);
        }
    }
}
const student = new Student(15, "Sharlina Hossain");
const student2 = new Student(160, "Sujon Hossain");
student.print();
student2.print();
// Constructor function