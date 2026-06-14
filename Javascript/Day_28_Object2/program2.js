class className{

        // Constructor Initialize the Property
    constructor(paramter1, parameter2){
        this.paramter1 = paramter1;
        this.paramter2 = paramter2;
        }

// Method
methodName(){
   
    let Name = "Vaibhav";
     //Code to Execute

    }
}

class student{
    // Constructor
    constructor(name, rollNo, grade){
        this.name       = name;
        this.rollNo     = rollNo;
        this.grade      = grade;
        this.attendance = 0;
    }

    // Method
    markAttaindance(){
        this.attendance++;
        console.log(`${this.name} attaince marked, total : ${this.attendance}`)
    }

    getResult(){
        console.log(`Name : ${this.name}, Roll : ${this.rollNo}, Grade : ${this.grade}`)
    }

    isEligibleforExam(){
        return this.attendance > 75; 
    }

}

//  Create the Object of class
// let/const objectName = new className();

let obj1 = new student("vaibhav", 23, "A")
let obj2 = new student("Anand", 25, "X")

obj1.getResult()        // Name : vaibhav, Roll : 23, Grade : A
obj2.getResult()        // Name : Anand, Roll : 25, Grade : X