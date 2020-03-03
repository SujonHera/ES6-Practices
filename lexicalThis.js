// object in javascript version 5

let man = {
    name: "Sujon Hossain",
    print: function(){
        setTimeout(()=>{
            console.log(this.name);// in this line show window object;
        }, 1000)
    }
}
man.print()
// object in Javascript version 6
let love = {
    loveName : "Sharlina Hossain",
    print: function () {
       console.log(this.loveName);
    }
}
love.print();