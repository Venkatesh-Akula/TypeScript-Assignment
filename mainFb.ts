//facebook ts start from here
/*
name,
gender,
city,
date of birth,
phone no,
college name,
school name,
office,
education,
*/

class Facebook{
    // Declaring the properties 
    name : string;
    gender : string;
    DOB : number;
   private mobileNumber : number;
    city : string;
    collegeName : string;
    schoolName : string;
    education : string;
    company : string;

    //a constructor which is used for initialize a class filed
    constructor(user_name:string,user_gender: string, user_DOB:number, user_mobileNumber:number, user_city:string, user_collegeName:string, user_schoolName:string, user_education : string, user_company ?: string){
        this.name =  user_name;
        this.gender = user_gender;
       this.DOB = user_DOB;
       this.mobileNumber = user_mobileNumber;
        this.city = user_city;
        this.collegeName = user_collegeName;
      this.education  = user_education;
       this.company = user_company;
    }// constructor end here
   //getter code here
    getUserData = ()=>{
        return this.mobileNumber
    }

    getNo = ()=>{
        return(this.mobileNumber)
    }

    setMobile = (no:number)=>{
        this.mobileNumber =no;
    }
    
}// class end here

let getDetails = new Facebook('Ayan','male',1901020,730922941, 'Tirupathi', 'RGPV', 'cbs', 'engg in computer science','Dell Emc');

let getUserName = getDetails.getUserData();
console.log("Ayan mobile no" + " " +getUserName)

 // try to print the existing mobile no
 //getSaurabhDetails.mobileNumber= 0123456789;

 // try to print the changed mobile no
 getDetails.setMobile(123456789)
 console.log("Ayan change mobile no" + " "+ getDetails.getNo());


 