class Parent{
    constructor(fatherName, motherName){
        this.fatherName = fatherName;
        this.motherName = motherName;
    }
}
class Baby extends Parent{
    constructor(name, fatherName, motherName){
        super(fatherName, motherName);
        this.name = name;
    }
    printInformation() {
        console.log(`
                 Name: ${this.name}
                 Father Name: ${this.fatherName}
                 Mather Name: ${this.motherName}
            `);
            
    }
}

const baby = new Baby("Sathi Hossain","Sujon Hossain", "Sharlina Hossain");
baby.printInformation()
    
// class Person {
//     constructor(fatherName, motherName) {
//         this.fatherName = fatherName;
//         this.motherName = motherName;
//     }
//     print() {
//         console.log(`
//            Father Name: ${this.fatherName}
//            Mother Name: ${this.motherName}
//         `);
//     }
// }

// class Baby{
//     constructor(name, fatherName, motherName){
//         super(fatherName, motherName);

//     }
// }