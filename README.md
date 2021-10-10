[![Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mohdjeeshan)

# Automation Project
This project automates  Amazon and google happy flow for automation using  WebDriver.io
## Table of Contents

- [Author](#author)
- [Pre-requisites](#pre-requisites)
- [Framework](#framework)
- [Clone Project](#clone-project)
- [Testing Approach](#testing-approach)
- [Running Tests](#running-tests)
- [Dockerized Tests](#dockerized-tests)
- [Issues Faced](#issues-faced)

## Author
* [Mohd Jeeshan](https://github.com/jeeshan12)

## Pre-requisites
Please install below tools to use this project

* [NodeJS](https://nodejs.org/uk/blog/release/v13.14.0/) : **I would recommend to use node version node>=13 for this project.**
* [Docker](https://www.docker.com/) : **If you need to run tests on Dockerised container , you will be needing Docker needs to be installed on the system you are executing the tests**.
* [VisualStudio](https://code.visualstudio.com/download) **(optional)** : **This tool is completely optional. You can use terminal as well to run the automated tests**.
* [Chrome]() : **Lastest version of chrome browser installed on the machine you are going to execute the tests. If chrome is already installed , please make sure that you have updated version of chrome. You can check this by going to Help -> About Google Chrome in the browser.**
* [Parallel Execution]() - I would prefer to do the parallel execution in case if you are executing more than one spec. Otherwise certain time if you executing different tests on same browser, some data might cache and you will end up having some issues with test. Parallel tests will assign tests to separate thread id and does the execution for us.

## Framework
Below libraries are used to automate the web browsers
* [WebDriverIO](https://webdriver.io/) - WebDriverIO is Next-gen browser and mobile automation test framework for Node.js
* [Mocha](https://mochajs.org/) - Mocha is a behavior-driven development framework for testing JavaScript code. It does not depend on any other JavaScript frameworks. It does not require a DOM. And it has a clean, obvious syntax so that you can easily write tests..
* [Docker](https://www.docker.com/) - Docker is a tool designed to make it easier to create, deploy, and run applications by using containers. Docker is used to containerize the automated tests in our case.


## Clone Project
Clone the project by running below command in terminal
```
git clone https://github.com/jeeshan12/WebDriverIOAutomation.git
```
### Install dependencies
Open the terminal in the root project and run the below task
```
npm install
```
## Testing Appraoch
WebDriverIO is used to write e2e automated tests for web and mobile. It provides a variety of Test frameworks to provide a BDD way of writing tests and assertions. To get more understanding on how to set up the WebDriverIO from scratch please follow the link **`https://webdriver.io/docs/gettingstarted`**

**WebDriverIO Architecture for running tests**
![](https://github.com/jeeshan12/WebDriverIOAutomation/blob/main/screenshots/WebDriverio.png)

### Framework Folder Structure
**Page Object Model** is used to introduce reusability of the functionalities across the application. Sometimes Page classes can become very large and difficult to maintain. This drawback is improved by introducing Page components in the framework which can later be added to the appropriate pages to introduce single responsibility among the classes. If a particular component is being used across the classes then composition is also used to make that resuable component available to different class.
**Waits** are handled using Expected Conditions.
**Specs** are written using Mocha under **tests** folders.
![](https://github.com/jeeshan12/WebDriverIOAutomation/blob/main/screenshots/FolderArchitecture.png)

### Automated Scenarios
Two user journey has been automated which are given below
* **Search and Add a product to Cart**
* **Validate for BDD Course in Udemy**


## Running Tests
We can run our tests sequentially(one by one) or in parallel. Tests can be run on headless and headful chrome.
To run tests sequentially on headful mode.
Note  **specToExecute = ./src/tests/udemy.spec.js or ./src/tests/amazon.spec.js**
```
npm run test -- --spec <<specToExecute>>
```
![](https://github.com/jeeshan12/WebDriverIOAutomation/blob/main/screenshots/UdemySpec.png)
To run tests sequentially on headless mode
```
npm run test:ci -- --spec <<specToExecute>>
```
![](https://github.com/jeeshan12/WebDriverIOAutomation/blob/main/screenshots/Amazospec.png)
To run tests parallel on headful mode
```
npm run test
```
To run tests parallel on headless mode
```
npm run test:ci
```
![](https://github.com/jeeshan12/WebDriverIOAutomation/blob/main/screenshots/ParallelExecution.png)

### Running Through IDE
You can also execute the tests through VS Code. You can use the above commands to run in VS Code integrated terminal. Press **Ctrl+~** to open integrated terminal in IDE.

## Dockerized Tests

To Dockerize Automation framework
* Go to root directory of the framework (make sure `Dockerfile is in root directory`) and build the image by running command
```
docker build -t <<imagename>> .
```
<<imagename>> can be anything . Preferred way is to use `yourdockerid/application_name`
e.g. `jeeshan12/wdio`
You will get something similar to this in console once image is built successfully
![](https://github.com/jeeshan12/WebDriverIOAutomation/blob/main/screenshots/DockerBuild.png)

* Now Run the `WebDriverIO Tests` by running below command
```
docker run --rm jeeshan12/wdio run test:ci

```
 You will get something similar in console while the execution is happening
![](https://github.com/jeeshan12/WebDriverIOAutomation/blob/main/screenshots/DockerExecution.png)
