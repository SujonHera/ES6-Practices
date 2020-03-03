class Parent{
    constructor(fatherName, motherName){
        this.fatherName = fatherName;
        this.motherName = motherName;
    }
}
class Baby extends Parent{
    constructor(name,fatherName, motherName){
        super();
        this.fatherName = fatherName;
        this.motherName = motherName;
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

const baby = new Baby("anything", "Mother", "kabul");
 baby.printInformation(); 
    

