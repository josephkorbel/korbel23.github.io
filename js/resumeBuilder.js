/*
This is empty on purpose! Your code to build the resume will go here.
 */

/*============ Object Literal Notation Practice ================= */

  var bio = {
      "name" : "Joseph Korbel",
      "role" : "FULL-STACK WEB DEVELOPER",
      "bioPic" : "images/fry.jpg",
      "welcomemessage" : "Skills Include",
      "skills" : ["CSS3", " HTML5 ", " JavaScript", " jQuery", " Agile Project Management", " Team Leadership", " WordPress", " Amazon Web Services"],
      "contactinfo" : {
        "mobile" : "7157900781",
        "email" : "korbelwebdesign@gmail.com",
        "twitter" : "@korbelwebdesign",
        "github" : "korbel23",
        "location" : "Baltimore, MD",
        "website" : "https://www.korbelwebdesign.com"
      },
  };
/*=================  Education Object  ================= */
  var education = {
      "schools" : [
      {
        "name" : "Marquette University",
        "location" : "Milwaukee, WI",
        "dates" : "August 2009-May 2013",
        "url" : "http://www.marquette.edu",
        "majors" : ["Computer Engineering"],
        "degree" : "Bachelors of Science",
        "online-courses" : {
          "first-course" : {
            "title" : "Javascript Basics" ,
            "school" : "Udacity",
            "dates" : "August 2016-September 2016",
            "url" : "https://www.udacity.com/course/javascript-basics--ud804"
          }
          }
      }
    ]
  };

/*=================  Projects Object  ================= */
  var project = {
    "projects" : [
      {
        "title" : "Portfolio",
        "dates" : "July 2016-September 2016",
        "description" : "Created a custom portfolio using WordPress by leveraging my background in HTML, CSS, and JavaScript, and explored new technologies and plug-ins that WordPress had to offer."
      },
      {
        "title" : "Interactive Resume",
        "dates" : "August 2016-September 2016",
        "description" : "Created an interactive resume using HTML, CSS, JavaScript, and JQuery."
      }
    ]
  };
/*=================  Work Object  ================= */
  var work = {
    "jobs" : [
      {
        "employer" : "United States Navy",
        "title" : "Cyber Warfare Engineer",
        "location" : "Ft. Meade, MD",
        "dates" : "May 2013-Present",
        "description" : "Using the Agile Methodology, worked numerous projects in both low and high level languages ranging from Assembly to Python in order to create tools for the Navy's Cyber Realm."
    },
    {
      "employer" : "Korbel Web Design",
      "title" : "Owner, Designer, Developer",
      "location" : "Baltimore, MD",
      "dates" : "July 2016-Present",
      "description" : "Created customized, secure WordPress Websites for individuals and small to medium sized businesses."
    }
  ]
  };

bio.display = function(){
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomemessage);
  var formattedSkills = HTMLskills.replace("%data%", bio.skills);
  var formattedImage = HTMLbioPic.replace("%data%", bio.bioPic);
  var formMobile = HTMLmobile.replace("%data%", bio.contactinfo.mobile);
  var formEmail = HTMLemail.replace("%data%", bio.contactinfo.email);
  var formTwitter = HTMLtwitter.replace("%data%", bio.contactinfo.twitter);
  var formGithub = HTMLgithub.replace("%data%", bio.contactinfo.github);
  var formWebsite = HTMLwebsite.replace('%data%', bio.contactinfo.website);

  $('#header').append(formattedName);
  $('#header').append(formattedRole);
  $('#header').append(formattedImage);
  //$('#header').append(formattedWelcome);
  $("#header").append(formattedSkills);
  $("#header").append(formMobile);
  $("#header").append(formEmail);
  $("#header").append(formTwitter);
  $("#header").append(formGithub);
  $("#header").append(formWebsite);

};

education.display = function(){
    for( school = 0; school < education.schools.length; school += 1 ){

    var formattedName = HTMLschoolName.replace('%data%', education.schools[school].name);
    var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
    var formattedDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
    //var formattedUrl = HTMLschoolName.replace('%data%', education.schools[school].url);
    var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
    //var formattedMajors = HTMLschoolName.replace('%data%', education.schools[school].majors);



    $('#education').append(HTMLschoolStart);
    $('.education-entry:last').append(formattedName);
    $('.education-entry:last').append(formattedDegree);
    $('.education-entry:last').append(formattedDates);
    $('.education-entry:last').append(formattedLocation);
}
};



/*============== For-In Adding to Work Experience ================ */
work.display = function(){
  for( job = 0; job < work.jobs.length; job += 1 ){

    var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
    var formWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedTitle = formattedEmployer + formWorkTitle;
    var formWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

    $('#workExperience').append(HTMLworkStart);
    $('.work-entry:last').append(formattedTitle);
    $('.work-entry:last').append(formWorkDates);
    $('.work-entry:last').append(formWorkDescription);
    $('.work-entry:last').append(formattedLocation);

  }
};

/*============ Encapsulating Project Display function =============*/

projects.display = function(){
  for( proj = 0; proj < project.projects.length; proj += 1){

      var formProjTitle = HTMLprojectTitle.replace("%data%", project.projects[proj].title);
      var formProjDates = HTMLprojectDates.replace("%data%", project.projects[proj].dates);
      var formattedDescription = HTMLprojectDescription.replace("%data%", project.projects[proj].description);

      $('#projects').append(HTMLprojectStart);
      $('.project-entry:last').append(formProjTitle);
      $('.project-entry:last').append(formProjDates);
      $('.project-entry:last').append(formattedDescription);
  }
};

work.display();
bio.display();
projects.display();
education.display();
$('#mapDiv').append(googleMap);
