class parent{
    
    constructor (house, home){
        this.house = house;
        this.home = home;
    }

    buyRowHouse(){
        console.log(`parent buyied RowHouse named as ${this.house} and ${this.home}`) 
    }
    
}

class child extends parent{

    constructor (laptop, house, home){
        super(house, home);         // If constructor is also present in child class --> must use super() --> accessing
                                    //  this in other classs
        this.laptop = laptop;  
    }

    buyLaptop(){
        console.log( `child buyied laptop named as ${this.laptop}`)
    }
}

const cld = new child();   // 
const cld1 = new child("Dell","Ashiyana", "Homiew");
cld1.buyLaptop()                       // child buyied laptop named as Dell

cld1.buyRowHouse()                     // parent buyied RowHouse named as Ashiyana and Homiew

// cld1.house()                         --> type Error (not a function)
// cld1.laptop("Dell")                  --> type Error (not a function)

console.log ("----------------------------------")

class parent1 {
    constructor(farm, area){
        this.farm = farm;
        this.area = area;
    }

    parProperty(){
        console.log(`parent has farmname ${this.farm} and its area ${this.area} `)
    }
}

class child1 extends parent1{

    chldProprty(laptop){
        console.log(`child has lappy ${laptop} `)
    }

    parProperty(){
        console.log(`child updated parent has farmname ${this.farm} and its area ${this.area} `)
    }
}

let ch1 = new child1('40 Biga', 2500)
ch1.chldProprty('Dell');            // child has lappy Dell 
// ch1.parProperty();               // parent has farmname 40 Biga and its area 2500
child.parProperty()                 // child updated parent has farmname 40 Biga and its area 2500 