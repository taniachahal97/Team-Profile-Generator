// TODO: Include packages needed for this application
const fs = require('fs');

const inquirer = require('inquirer');

const jsdom = require("jsdom");


const employee = require('./lib/Employee'); //maybe not required
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

var engineers = [];
var interns = [];
var managers = [];



// TODO: Create a function to initialize app
function init() {

    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the team manager name?',
            name: 'managerName'
        },
        {
            type: 'input',
            message: 'What is the team manager id?',
            name: 'managerId'
    
        },
    
        {
            type: 'input',
            message: 'What is the team manager email?',
            name: 'managerEmail'
        },
        {
            type: 'input',
            message: 'What is the team manager office number?',
            name: 'managerNum'
        },
        {
            type: 'list',
            name: 'memberType',
            message: 'Which type of team member would you like to add?',
            choices: ["Engineer","Intern", "I do not want to add any more team members"],
    
        },
    ])
    .then(function(result){
        //console.log('Generating README.md.....');
        //console.log(`${result.managerName} , ${result.managerId} , ${result.managerEmail} , ${result.memberType}`)
        const newManager = new Manager(result.managerName, result.managerId, result.managerEmail, result.managerNum);
        //console.log(manager.name);
        //console.log(manager.id);
        //console.log(manager.email);
        //console.log(manager.officeNumber);
        managers.push(newManager);

        if(result.memberType === 'Engineer'){

            engineerQuestions();
        }

        else if(result.memberType === 'Intern'){
            internQuestions();
        }

        else if(result.memberType === 'I do not want to add any more team members'){

            console.log('Building your team profile ...')
            generateHtml();

        }
    
    });
        
}

init();

function engineerQuestions(){
    //console.log('engineerQuestions has been called');

    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the Engineer name?',
            name: 'engineerName'
        },
        {
            type: 'input',
            message: 'What is the Engineer id?',
            name: 'engineerId'
    
        },

        {
            type: 'input',
            message: 'What is your engineer git username?',
            name: 'engineerGit'
        },

        {
            type: 'input',
            message: 'What is your engineer email?',
            name: 'engineerEmail'
        },

        {
            type: 'list',
            name: 'memberType',
            message: 'Which type of team member would you like to add?',
            choices: ["Engineer","Intern", "I do not want to add any more team members"],
    
        },
    ])

    .then(function(result){
        //console.log('Generating README.md.....');
        //console.log(`${result.engineerName} , ${result.engineerId} , ${result.engineerEmail} , ${result.memberType}`)
        const newEngineer = new Engineer(result.engineerName, result.engineerId, result.engineerEmail, result.engineerGit);
        
        engineers.push(newEngineer);

        if(result.memberType === 'Engineer'){

            engineerQuestions();
        }

        else if(result.memberType === 'Intern'){
            internQuestions();
        }

        else if(result.memberType === 'I do not want to add any more team members'){

            console.log('Building your team profile ...')
            generateHtml();
            
            //var htmlContent =

        }
        
    
    });

}

function internQuestions(){
    //console.log('Intern Questions function has been called');

    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the Intern name?',
            name: 'internName'
        },
        {
            type: 'input',
            message: 'What is the Intern id?',
            name: 'internId'
    
        },
    
        {
            type: 'input',
            message: 'What is your Intern email address?',
            name: 'internEmail'
        },

        {
            type: 'input',
            message: 'What is your Intern school?',
            name: 'internSchool'
        },

        {
            type: 'list',
            name: 'memberType',
            message: 'Which type of team member would you like to add?',
            choices: ["Engineer","Intern", "I do not want to add any more team members"],
    
        },
    ])
    .then(function(result){
        //console.log('Generating README.md.....');
        //console.log(`${result.internName} , ${result.internId} , ${result.internEmail} , ${result.internSchool}`)
        const newIntern = new Intern(result.internName, result.internId, result.internEmail, result.internSchool);

        interns.push(newIntern);


        if(result.memberType === 'Engineer'){

            engineerQuestions();
        }

        else if(result.memberType === 'Intern'){
            internQuestions();
        }

        else if(result.memberType === 'I do not want to add any more team members'){

            console.log('Building your team profile ...')
            generateHtml();

        }
        //writeToFile('README.md', result);
    
    });
}


function generateHtml(){

    var htmlContent = `<!DOCTYPE html>
            <html lang="en">
            
            <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>Results | Library of Congress Search</title>
              <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400&family=Merriweather:wght@700&display=swap"
                rel="stylesheet" />
                <link rel="stylesheet" href="./style.css" />
            </head>
            
            <body>
            
              <div class="flex-row align-start align-stretch-md align-content-start align-content-stretch-md min-100-vh bg-primary">
                <div class="col-12 col-md-3 bg-light p-3">
                  <h1 class="text-primary">My Team</h1>
                </div>
            
                <div class="col-12 col-md-9 p-3 text-light">
                  <h2> Team Profile <span id="result-text"></span></h2>
                  <div id="result-content"></div>
                </div>
              </div>
            
              
            </body>
            
            </html>`


            const dom = new jsdom.JSDOM(htmlContent);
            const document = dom.window.document;

            var teamContent = document.querySelector("#result-content")

            for(var i=0; i < managers.length; i++){

                var managerName = managers[i].name;
                var managerId = managers[i].id;
                var managerEmail = managers[i].email;
                var managerNum = managers[i].officeNumber;

                var resultCard = document.createElement('div'); 
                resultCard.classList.add('card','column');
        
                //body container for forecast content 
                var resultBody = document.createElement("div");
                resultBody.classList.add('card-body');
        
                resultCard.append(resultBody);
        
                var titleEl = document.createElement('h3'); // creates the elemnets fior the body
                titleEl.textContent = "Manager";

                // email link for manager

                const text = document.createTextNode('Email: ');

                const emailLink = document.createElement("a");
                emailLink.href = "mailto:" + managerEmail;
                emailLink.textContent = managerEmail;

                // image for manager

                const imageData = fs.readFileSync("./images/manager.png");
                const base64Image = imageData.toString("base64");

                // Create an <img> tag
                var img = document.createElement("img");
                img.src = `data:image/jpeg;base64,${base64Image}`;
                img.alt = "Example Image";
                img.classList.add('icon');
        
                var bodyContentEl = document.createElement('p')
        
                bodyContentEl.innerHTML = '<strong>Name:</strong>' + ' ' + managerName + '<br/>';
                bodyContentEl.innerHTML += '<strong>Id:</strong>' + ' ' + managerId + '</br>';
                //bodyContentEl.innerHTML += '<strong>Email:</strong>' + ' ' + emailLink + '</br>';
                bodyContentEl.innerHTML += '<strong>Office Number:</strong>' + ' ' + managerNum + '</br>';
        
                resultBody.append(titleEl, img, bodyContentEl);
                resultBody.append(text);
                resultBody.append(emailLink);
        
                teamContent.append(resultCard);


            }

            for(var i=0; i < engineers.length; i++){
                var name = engineers[i].name;
                var id = engineers[i].id;
                var email = engineers[i].email;
                var github = engineers[i].github;
        
                var resultCard = document.createElement('div'); 
                resultCard.classList.add('card','column');
        
                //body container for forecast content 
                var resultBody = document.createElement("div");
                resultBody.classList.add('card-body');
        
                resultCard.append(resultBody);
        
                var titleEl = document.createElement('h3'); // creates the elemnets fior the body
                titleEl.textContent = "Engineer";

                // email tag
                // Create an <a> tag
                const text = document.createTextNode('Email: ');
                const emailLink = document.createElement("a");
                emailLink.href = "mailto:" + email;
                emailLink.textContent = email;

                // github link for engineers

                //Create a text node
                const textNode = document.createTextNode("GitHub: ");

                // Create an <a> tag
                var githubLink = document.createElement("a");
                githubLink.href = "https://github.com/" + github;
                githubLink.textContent = github;

                // image for engineers

                const imageData = fs.readFileSync("./images/coffee-cup.png");
                const base64Image = imageData.toString("base64");

                // Create an <img> tag
                var img = document.createElement("img");
                img.src = `data:image/jpeg;base64,${base64Image}`;
                img.alt = "Example Image";
                img.classList.add('icon');

                // creating break element

                const br = document.createElement('br');

        
                var bodyContentEl = document.createElement('p')
        
                bodyContentEl.innerHTML = '<strong>Name:</strong>' + ' ' + name + '<br/>';
                bodyContentEl.innerHTML += '<strong>Id:</strong>' + ' ' + id + '</br>';
                //bodyContentEl.innerHTML += '<strong>Email:</strong>' + ' ' + emailLink + '</br>';
                //bodyContentEl.innerHTML += '<strong>GitHub:</strong>' + ' ' + githubLink + '</br>';
        
                resultBody.append(titleEl,img, bodyContentEl);
                resultBody.append(textNode);
                resultBody.append(githubLink);
                resultBody.append(br);
                resultBody.append(text);
                resultBody.append(emailLink);


        
                teamContent.append(resultCard);

                //console.log(teamContent.textContent)
                

            }

            for(var i=0; i < interns.length; i++){
                var internName = interns[i].name;
                var internId = interns[i].id;
                var internEmail = interns[i].email;
                var internSchool = interns[i].school;
        
                var resultCard = document.createElement('div'); 
                resultCard.classList.add('card','column');
        
                //body container for forecast content 
                var resultBody = document.createElement("div");
                resultBody.classList.add('card-body');
        
                resultCard.append(resultBody);
        
                var titleEl = document.createElement('h3'); // creates the elemnets fior the body
                titleEl.textContent = "Intern";

                // email link for interns
                const text = document.createTextNode('Email: ');

                const emailLink = document.createElement("a");
                emailLink.href = "mailto:" + internEmail;
                emailLink.textContent = internEmail;

                // image for interns

                const imageData = fs.readFileSync("./images/glasses.png");
                const base64Image = imageData.toString("base64");

                // Create an <img> tag
                var img = document.createElement("img");
                img.src = `data:image/jpeg;base64,${base64Image}`;
                img.alt = "Example Image";
                img.classList.add('icon');
        
                var bodyContentEl = document.createElement('p')
        
                bodyContentEl.innerHTML = '<strong>Name:</strong>' + ' ' + internName + '<br/>';
                bodyContentEl.innerHTML += '<strong>Id:</strong>' + ' ' + internId + '</br>';
                //bodyContentEl.innerHTML += '<strong>Email:</strong>' + ' ' + emailLink + '</br>';
                bodyContentEl.innerHTML += '<strong>School:</strong>' + ' ' + internSchool + '</br>';
        
                resultBody.append(titleEl, img, bodyContentEl);
                resultBody.append(text);
                resultBody.append(emailLink);
        
                teamContent.append(resultCard);

                //console.log(teamContent.textContent)
                

            }




            const modifiedHtml = dom.serialize();

            const folder = 'dist';
            const file = 'index.html'

            //fs.writeFile('index.html',htmlContent,(err)=> err ? console.error(err) : console.log('Html Success!'));
            fs.writeFileSync(`${folder}/${file}`, modifiedHtml);

}



