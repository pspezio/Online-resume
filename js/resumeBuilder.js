var bio = {
    "name": "Patrick Spezio",
    "role": "Web Designer",
    "contact": {
        "email": "pspezio@hotmail.com",
        "location": "Tampa, Florda",
        "phone": "504-957-8878"
    },
    "welcomeMessage": "Love All.",
    "skills": ["HTML", "Css", "Javascript"],
    "image": "images/spezio.jpg"
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedemail = HTMLemail.replace("%data%", bio.contact.email);
var formattedlocation = HTMLlocation.replace("%data%", bio.contact.location);
var formattedphone = HTMLmobile.replace("%data%", bio.contact.phone);
var formattedmessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage); 
var formattedimage = HTMLbioPic.replace("%data%", bio.image);

if(bio.skills.length > 0) {

    $("#header").append(HTMLskillsStart);


var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
$("#skills").append(formattedSkill);


}

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#topContacts").append(formattedemail);
$("#topContacts").append(formattedphone);
$("#topContacts").prepend(formattedlocation);
$("#header").append(formattedmessage);
$("#header").append(formattedimage);

var education = {
    "schools" : [
    {
        "name" : "O. Perry Walker High School",
        "location" : "New Orleans, La.",
        "degree" :"High School Diploma",
        "major" : "Business Education"
    }
    ],

    "onlineClasses" : [
{
    "title" : "FrontEnd Web Developer",
    "school" : "Udacity",
    "dates" : 2016
}
]
}

function displayEducation() {

for (school in education.schools) {

    $("#education").append(HTMLschoolStart);

   
    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name); 
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree); 
    var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
    var formattedschoolsLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    var formattedschoolsMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);

    $(".education-entry:last").append(formattedSchoolNameDegree);
    $(".education-entry:last").append(formattedschoolsLocation);
    $(".education-entry:last").append(formattedschoolsMajor)

function displayOnlineClasses() {

for (onLineClass in education.onlineSClasses) {

    $("#onlineClasses").append(HTMLschoolStart);
    
    var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[onLineClass].title);
    var formattedonlinSchool = HTML.replace("%data%", education.onlineSClasses[onLineClass].school);
    var formattedonlineDates = HTMLonLineDates.replace("%data%", onLineClasses[onLineClass].dates);
    
   
}
}
}
    displayEducation();
    displayOnLineClasses();



var work = {
    "jobs": [
    {
        "employer": "HardRock Casino",
        "title": "Dealer/Supervisor",
        "dates": "November 2008 to Present",
        "description": "Overseen all policies and procedures, customer service and money management."
    }, {
        "employer": "L'Auberge Casino",
        "title": "Pit Manager",
        "dates": "November 2003 to November 2008",
        "description": "Overseen all policies and procedures, customer service and money management."
    }
    ]
};



function displayWork() {
    // body...

for(job in work.jobs) {


    // create new div for work experince
    $("#workExperience").append(HTMLworkStart);
    // concat employer and title
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
}
}
    displayWork();


    var projects = {
    "projects": [
{
            "title": "Mockup to Article",
            "dates": "January 2016.",
            "description": "Mock up of Udacity project number 2.",
            "images": ""
        }, {


        "title": "Build a Portfolio Site ",
        "dates": "Febuary 2016",
        "description": "Udacity project build a portfolio site using responsive design.",
        "images": ""
}
]
    }


    //var displayProjects = function() {
     projects.display = function() {   
        for (project in projects.projects) {
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            $(".project-entry:last").append(formattedTitle);

            var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
            $(".project-entry:last").append(formattedDates);

            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
             $(".project-entry:last").append(formattedDescription);

             if (projects.projects[project].images.length > 0) {
                for (image in projects.projects[project].images) {
                    var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
                    $(".project-entry:last").append(formattedImage);

                }
             }

        }
    }

    projects.display();


    

    
//$(document).click(function(loc) {

  //var x = loc.pageX;
  //var y = loc.pageY;

  //logClicks(x,y);
//});

$("#mapDiv").append(googleMap);
