class Person{
    constructor(fatherName, motherName){
        this.fatherName = fatherName;
        this.motherName = motherName;
    }
    print(){
        console.log(`
           Father Name: ${this.fatherName}
           Mother Name: ${this.motherName}
        `);
    }
}

// const person1 = new Person("abul", "samu")
// person1.print();