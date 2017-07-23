/************Data Types:****************/

var email = "cameron@udacity.com";

var newEmail =
email.replace("udacity", "gmail");

//.replace() then .append()

//we will be replacing %data% with our data

var name = "Joseph Korbel";
var formattedName = HTMLheaderName.replace(%data%, name);
$("#header").append(formattedName);



/*========== Arrays ============== */
var skills = ["awesomeness", "dope"];

$("#main").append(skills.length);

/*=========== Object Literal Notation */

var skills = ["awesomeness", "programming", "teaching", "JS"];
$("#main".append(skills.length));

var bio = {
    "name" : "James",
    "age" : 32,
    "skills" : skills

};

/*========= Dot Notation ========= */
bio.city = "Mountain View";
bio.email = "korbel23@gmail.com";
$("#main").append(bio.city);
