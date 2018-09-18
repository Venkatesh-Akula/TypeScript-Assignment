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
var Facebook = /** @class */ (function () {
    //a constructor which is used for initialize a class filed
    function Facebook(user_name, user_gender, user_DOB, user_mobileNumber, user_city, user_collegeName, user_schoolName, user_education, user_company) {
        var _this = this;
        //getter code here
        this.getUserData = function () {
            return _this.mobileNumber;
        };
        this.getNo = function () {
            return (_this.mobileNumber);
        };
        this.setMobile = function (no) {
            _this.mobileNumber = no;
        };
        this.name = user_name;
        this.gender = user_gender;
        this.DOB = user_DOB;
        this.mobileNumber = user_mobileNumber;
        this.city = user_city;
        this.collegeName = user_collegeName;
        this.education = user_education;
        this.company = user_company;
    } // constructor end here
    return Facebook;
}()); // class end here
var getDetails = new Facebook('Ayan', 'male', 1901020, 730922941, 'Tirupathi', 'RGPV', 'cbs', 'engg in computer science', 'Dell Emc');
var getUserName = getDetails.getUserData();
console.log("Ayan mobile no" + " " + getUserName);
// try to print the existing mobile no
//getSaurabhDetails.mobileNumber= 0123456789;
// try to print the changed mobile no
getDetails.setMobile(123456789);
console.log("Ayan change mobile no" + " " + getDetails.getNo());
