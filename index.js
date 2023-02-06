// TODO: Include packages needed for this application
const fs = require('fs');

const inquirer = require('inquirer');

const jsdom = require("jsdom");

const employee = require('./Employee'); //maybe not required
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern')

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
            message: 'What is your engineer email?',
            name: 'engineerEmail'
        },

        {
            type: 'input',
            message: 'What is your engineer GitHub username?',
            name: 'engineerGithub'
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
        const newEngineer = new Engineer(result.engineerName, result.engineerId, result.engineerEmail, result.engineerGitHub);
        
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
            //printEngineers();
            
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

function printEngineers(){
    for(var i=0; i < engineers.length; i++){
        console.log(engineers[i].name);
        console.log(engineers[i].id);
        console.log(engineers[i].email);
        console.log(engineers[i].github);
    }
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
            </head>
            
            <body>
            
              <div class="flex-row align-start align-stretch-md align-content-start align-content-stretch-md min-100-vh bg-primary">
                <div class="col-12 col-md-3 bg-light p-3">
                  <h1 class="text-primary">Library of Congress Search Engine</h1>
                  <form id="search-form" class="mb-2">
                    <input id="search-input" class="form-input w-100" type="text" placeholder="Search!">
                    <select id="format-input" class="form-input w-100">
                      <option value="" disabled selected>Select a format...</option>
                      <option value="maps">Maps</option>
                      <option value="audio">Audio</option>
                      <option value="photos">Photos</option>
                      <option value="manuscripts">Manuscripts</option>
                      <option value="newspapers">Newspapers</option>
                      <option value="film-and-videos">Film and Videos</option>
                      <option value="notated-music">Notated Music</option>
                      <option value="websites">Websites</option>
                    </select>
                    <button class="btn btn-info btn-block">Search</button>
                  </form>
            
                  <a href="./index.html" class="btn btn-block btn-danger">&larr; Go back.</a>
                </div>
            
                <div class="col-12 col-md-9 p-3 text-light">
                  <h2>Showing results for <span id="result-text"></span></h2>
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
        
                //body container for forecast content 
                var resultBody = document.createElement("div");
        
                resultCard.append(resultBody);
        
                var titleEl = document.createElement('h3'); // creates the elemnets fior the body
                titleEl.textContent = "Manager";
        
                var bodyContentEl = document.createElement('p')
        
                bodyContentEl.innerHTML = '<strong>Name:</strong>' + managerName + '<br/>';
                bodyContentEl.innerHTML += '<strong>Id:</strong>' + managerId + '</br>';
                bodyContentEl.innerHTML += '<strong>Email:</strong>' + managerEmail + '</br>';
                bodyContentEl.innerHTML += '<strong>Office Number:</strong>' + managerNum + '</br>';
        
                resultBody.append(titleEl, bodyContentEl);
        
                teamContent.append(resultCard);


            }

            for(var i=0; i < engineers.length; i++){
                var name = engineers[i].name;
                var id = engineers[i].id;
                var email = engineers[i].email;
                var github = engineers[i].github;
        
                var resultCard = document.createElement('div'); 
        
                //body container for forecast content 
                var resultBody = document.createElement("div");
        
                resultCard.append(resultBody);
        
                var titleEl = document.createElement('h3'); // creates the elemnets fior the body
                titleEl.textContent = "Engineer";
        
                var bodyContentEl = document.createElement('p')
        
                bodyContentEl.innerHTML = '<strong>Name:</strong>' + name + '<br/>';
                bodyContentEl.innerHTML += '<strong>Id:</strong>' + id + '</br>';
                bodyContentEl.innerHTML += '<strong>Email:</strong>' + email + '</br>';
                bodyContentEl.innerHTML += '<strong>GitHub:</strong>' + github + '</br>';
        
                resultBody.append(titleEl, bodyContentEl);
        
                teamContent.append(resultCard);

                //console.log(teamContent.textContent)
                

            }

            for(var i=0; i < interns.length; i++){
                var internName = interns[i].name;
                var internId = interns[i].id;
                var internEmail = interns[i].email;
                var internSchool = interns[i].school;
        
                var resultCard = document.createElement('div'); 
        
                //body container for forecast content 
                var resultBody = document.createElement("div");
        
                resultCard.append(resultBody);
        
                var titleEl = document.createElement('h3'); // creates the elemnets fior the body
                titleEl.textContent = "Intern";
        
                var bodyContentEl = document.createElement('p')
        
                bodyContentEl.innerHTML = '<strong>Name:</strong>' + internName + '<br/>';
                bodyContentEl.innerHTML += '<strong>Id:</strong>' + internId + '</br>';
                bodyContentEl.innerHTML += '<strong>Email:</strong>' + internEmail + '</br>';
                bodyContentEl.innerHTML += '<strong>School:</strong>' + internSchool + '</br>';
        
                resultBody.append(titleEl, bodyContentEl);
        
                teamContent.append(resultCard);

                //console.log(teamContent.textContent)
                

            }




            const modifiedHtml = dom.serialize();

            //fs.writeFile('index.html',htmlContent,(err)=> err ? console.error(err) : console.log('Html Success!'));
            fs.writeFileSync("index.html", modifiedHtml);

}



