var bio = {
    "name": "Patrick Spezio",
    "role": "Web Developer",
    "contacts": {
        "email": "pspezio@hotmail.com",
        "github": "https://github.com/pspezio",
        "location": "Tampa, Florda",
        "phone": "504-957-8878"
    },
    "welcomeMessage": "Love All.",
    "skills": ["HTML", "Css", "Javascript"],
    "image": "images/spezio2.jpg"
};

bio.display = function () {

  var formattedName = HTMLheaderName.replace("%data%",bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedBioPic);

var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMsg);

var formattedMobile = HTMLmobile.replace("%data%", bio.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.location);
var allContacts = formattedMobile + formattedEmail + formattedGithub + formattedLocation;

$("#topContacts").append(allContacts);
$("#footerContacts").append(allContacts);

if(bio.Languages.length > 0) {

  $("#header").append(HTMLLanguagesStart);

 var formattedLang = HTMLLanguages.replace("%data%",bio.Languages[0]);
 $("#skills").append(formattedLang);
 var formattedLang = HTMLLanguages.replace("%data%",bio.Languages[1]);
$("#skills").append(formattedLang);
var formattedLang = HTMLLanguages.replace("%data%",bio.Languages[2]);
$("#skills").append(formattedLang);
var formattedLang = HTMLLanguages.replace("%data%",bio.Languages[3]);
$("#skills").append(formattedLang);
};

if(bio.Frameworks/Libraries.length > 0) {

  $("#header").append(HTMLFrameworks/LibrariesStart);

var formattedFramework = HTMLFrameworks/Libraries.replace("%data%",bio.Frameworks/Libraries[0]);
$("#skills").append(formattedFramework);
var formattedFramework = HTMLFrameworks/Libraries.replace("%data%",bio.Frameworks/Libraries[1]);
$("#skills").append(formattedFramework);
var formattedFramework = HTMLFrameworks/Libraries.replace("%data%",bio.Frameworks/Libraries[2]);
$("#skills").append(formattedFramework);
var formattedFramework = HTMLFrameworks/Libraries.replace("%data%",bio.Frameworks/Libraries[3]);
$("#skills").append(formattedFramework);
var formattedFramework = HTMLFrameworks/Libraries.replace("%data%",bio.Frameworks/Libraries[4]);
$("#skills").append(formattedFramework);
var formattedFramework = HTMLFrameworks/Libraries.replace("%data%",bio.Frameworks/Libraries[5]);
$("#skills").append(formattedFramework);
var formattedFramework = HTMLFrameworks/Libraries.replace("%data%",bio.Frameworks/Libraries[6]);
$("#skills").append(formattedFramework);
}

if(bio.Other.length > 0) {

     $("#header").append(HTMLOtherStart);

var formattedOther = HTMLOther.replace("%data%",bio.Other[0]);
$("#skills").append(formattedOther);
var formattedOther = HTMLOther.replace("%data%",bio.Other[1]);
$("#skills").append(formattedOther);
var formattedOther = HTMLOther.replace("%data%",bio.Other[2]);
$("#skills").append(formattedOther);
}

};

bio.display(); 


/*function displayBio() {//start function
   

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedphone = HTMLmobile.replace("%data%", bio.contacts.phone);
var formattedmessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedimage = HTMLbioPic.replace("%data%", bio.image);

if (bio.skills.length > 0) {

    $("#header").append(HTMLskillsStart);


    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

$("#topContacts").append(formattedemail);
$("#topContacts").append(formattedgithub);
$("#topContacts").append(formattedphone);
$("#topContacts").prepend(formattedlocation);
$("#header").append(formattedmessage);
$("#header").append(formattedimage);
$("#footerContacts").append(formattedphone);
$("#footerContacts").append(formattedemail);
$("#footerContacts").append(formattedgithub);



}//end function
}

displayBio();*/


var education = {
    "schools": [{
        "name": "O. Perry Walker High School",
        "location": "New Orleans, La. 70114",
        "dates": "From 1979 - 1982",
        "degree": "High School Diploma",
        "major": "Business Education"
    }],

    "onlineCourses": [{
        "school": "Udacity",
        "title": "FrontEnd Web Developer",
        "dates": "From 1/28/2016 - Present"
    }]
};


function displayEducation() { //start function

    for (school in education.schools) { //start loop
        $("#education").append(HTMLschoolStart);
        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedNameDegree = formattedschoolName + formattedschoolDegree;
        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $(".education-entry:last").append(formattedNameDegree);
        $(".education-entry:last").append(formattedLocation);
        $(".education-entry:last").append(formattedschoolDates);
        $(".education-entry:last").append(formattedschoolMajor);

    } //end loop

    for (onlineCourse in education.onlineCourses) { //start loop
        $("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLschoolStart);

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
        var formattedOnlineTitleOnlineSchool = formattedOnlineTitle + formattedOnlineSchool;
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
        $(".education-entry:last").append(formattedOnlineTitleOnlineSchool);
        $(".education-entry:last").append(formattedOnlineDates);


    } //end loop
} //end function
displayEducation();




var work = {
    "jobs": [{
        "employer": "HardRock Casino",
        "title": "Dealer/Supervisor",
        "location": "Tampa Florida",
        "dates": "November 2008 to Present",
        "description": "Overseen all policies and procedures, customer service and money management."
    }, {
        "employer": "L'Auberge Casino",
        "title": "Pit Manager",
        "location": "Lake Charles Louisiana",
        "dates": "November 2003 to November 2008",
        "description": "Overseen all policies and procedures, customer service and money management."
    }]
};



function displayWork() {
    // body...

    for (job in work.jobs) {


        // create new div for work experince
        $("#workExperience").append(HTMLworkStart);
        // concat employer and title
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedDescription);
    }
}
displayWork();


var projects = {
    "projects": [{
        "title": "Mockup to Article",
        "dates": "January 2016.",
        "description": "Mock up of Udacity project number 2.",
        "images": [
            "images/mug.png"
        ]
    }, {


        "title": "Build a Portfolio Site ",
        "dates": "Febuary 2016",
        "description": "Udacity project build a portfolio site using responsive design.",
        "images": [
            "images/Brees.jpg"
        ]
    }]
};


projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);

            }
        }

    }
};

projects.display();

$("#mapDiv").append(googleMap);