var bio = {
    "name": "Patrick Spezio",
    "role": "Web Developer",
    "contacts": {
        "email": "pspezio@hotmail.com",
        "github": "https://github.com/pspezio",
        "location": "Tampa, Florda",
        "mobile": "504-957-8878"
    },
    "welcomeMessage": "Love All.",
    "skills": ["HTML", "Css", "Javascript"],
    "biopic": "images/spezio2.jpg"
};


bio.display = function() {


    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedmessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedbiopic = HTMLbioPic.replace("%data%", bio.biopic);

    if (bio.skills.length > 0) {

        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i ++ ) {   
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
      }
    }


        /*var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);*/

        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);

        $("#topContacts").append(formattedmobile);
        $("#topContacts").append(formattedemail);
        $("#topContacts").append(formattedgithub);
        $("#topContacts").prepend(formattedlocation);
        
        
        $("#header").append(formattedmessage);
        $("#header").append(formattedbiopic);
        $("#footerContacts").append(formattedmobile);
        $("#footerContacts").append(formattedemail);
        $("#footerContacts").append(formattedgithub);
        $("#footerContacts").append(formattedlocation);


        }

bio.display();


var education = {
    "schools": [{
        "name": "O. Perry Walker High School",
        "location": "New Orleans, La. 70114",
        "dates": "From 1979 - 1982",
        "degree": "High School Diploma",
        "majors": ["Business Education"],
        "url":"http://www.landry-walker.org/",
    }],

    "onlineCourses": [{
        "school": "Udacity",
        "title": "FrontEnd Web Developer",
        "date": "From 1/28/2016 - Present",
        "url":"www.udacity.com/nanodegree",
    }]
};



education.display = function() {
    $("#education").append(HTMLschoolStart);
    for (school in education.schools) { //start loop

        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedNameDegree = formattedschoolName + formattedschoolDegree;
        var formattedschoolMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        var formattedschoolUrl = HTMLschoolURL.replace("%data%", education.schools[school].url);
    
        $(".education-entry:last").append(formattedNameDegree);
        $(".education-entry:last").append(formattedLocation);
        $(".education-entry:last").append(formattedschoolDates);
        $(".education-entry:last").append(formattedschoolMajors);
        $(".education-entry:last").append(formattedschoolUrl);

    } //end loop

$("#education").append(HTMLonlineClasses);
for (onlineCourse in education.onlineCourses) { //start loop

    $("#education").append(HTMLschoolStart);

    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
    var formattedOnlineTitleOnlineSchool = formattedOnlineTitle + formattedOnlineSchool;
    var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].date);
    var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
    $(".education-entry:last").append(formattedOnlineTitleOnlineSchool);
    $(".education-entry:last").append(formattedOnlineDate);
    $(".education-entry:last").append(formattedOnlineUrl);


} //end loop
}; //end function
education.display();




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



work.display = function() {

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
};
work.display();



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