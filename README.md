# SE-Project-Group-15

# Translator - Chrome Extension

An extension that converts your selected text into the language you are comfortable with. Makes life easier:dancer:

[![Build Status](https://app.travis-ci.com/BosamiyaSimran/SE-Project-Group-15.svg?branch=main)](https://app.travis-ci.com/BosamiyaSimran/SE-Project-Group-15)![Licence](https://img.shields.io/github/license/BosamiyaSimran/SE-Project-group-15)
![node-current](https://img.shields.io/node/v/@google-cloud/translate?logo=nodedotjs)
[![codecov](https://codecov.io/gh/BosamiyaSimran/SE-Project-Group-15/branch/main/graph/badge.svg?token=YGOQY4DH9F)](https://codecov.io/gh/BosamiyaSimran/SE-Project-Group-15)
[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.5533076.svg)](https://doi.org/10.5281/zenodo.5533076)

**Click on the image below to view the video**



## Use Cases

- 

## Installation

- Clone the repository using ```git clone githttps://github.com/BosamiyaSimran/SE-Project-Group-15```
- In the chrome browser open ```chrome://extensions/```
- Enable developer settings if it is not enabled
- Choose Load Unpacked
- Select the repository folder that was cloned in the first step
<p align="center">
  <img width="900" height="500" src="https://github.com/BosamiyaSimran/SE-Project-Group-15/blob/main/images/installation.png">
</p>

- The extension will now be added to the Chrome
<p align="center">
  <img width="900" height="500" src="https://github.com/BosamiyaSimran/SE-Project-Group-15/blob/main/images/extensionLoaded.png">
</p>

- Screenshot of working of the extension
![image]()

## Languages

- JavaScript
- HTML
- CSS

## Software Requirements

- Node.js
- NPM

## Style Checker and Analyzer

### Standard Js

Installation</b>
`npm install standard --global` in comand line interface to install globally
`npm install standard --save-dev` in command line interface to install locally

Running Standard Js</b>
go to root of project and type `standard` if StandardJs is installed globally
go to root of project and type `npx standard` if StandardJs is installed locally
Instead of installing it using npm, you can also use the extension available on VS Code

## IDE and Code Fomatter

- IDE and Style Checker: [VSCode](https://code.visualstudio.com/)

- Code Style Formatter: [Beautify](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify)

- Code Syntax Checker : [Eslint](https://https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) for Vscode plugin.

VS Code uses js-beautify internally, but it lacks the ability to modify the style you wish to use. This extension enables running js-beautify in VS Code, AND honouring any .jsbeautifyrc file in the open file's path tree to load your code styling. Run with F1 Beautify (to beautify a selection) or F1 Beautify file.


### Unit Test
  
  - [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/).
    
  - Setup
  
    From the repository root, run: ```npm install --save-dev mocha chai```
    
    Then run: ```npm test [filename]```
    
    npm will then attempt to run all test files that end with ```*.test.js ```, if you do not specify filename.

### Code Coverage
  
  - [Istanbul](https://istanbul.js.org/) and [Coveralls](https://coveralls.io/)

#### "Why" and "Why not" Docs

Think about the case when you are reading something online. You come across few words you are not familiar with in that language. You will google search the those words in another language. But now, we have language translator, helping you to covert the words by a single select with the mouse.
