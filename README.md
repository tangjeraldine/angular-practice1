What is Angular?

it is a framework of a front-end, single-page application

Built as MVC but works as MVVM architecture

No need to have additional libraries

We choose React for smaller bundle size, have smaller requirements.
React is faster than Angular, but good for smaller functionalities.
React uses one-way data binding.

> One way vs Multi way Data binding

Angular uses two-way data binding.

Features of Angular

- Single Page Application
- Coded with TypeScript
- Excellent Performance
- Dependency Injection
- End-to-End tooling
- Quicker run. Loads faster, work

**Angular 1x -- a.k.a. Angular js**
All features were written separately at the start.
It wasn't mobile friendly.

**Angular 2**
A complete rewrite of Angular 1x.
Structure was completely re-written. Made entirely in TypeScript.
It was made mobile-supported.

**Angular 3 - skipped entirely.**

**Angular 4**
More features were added and code size reduced by 60%.
Bugs were also fixed and it compiled better, faster than in Angular 2.
Started supporting animations.
Email validation available.

**Angular 5**
Build-optimizer introduced to fix some of the time-consuming build problems.
In the past, the server would encounter loading problems when loading large applications. The build-optimizer improved performance and loaded applications faster.
Started supporting DOM. Updating of the parent will end up having effects down to the last child.
Compiler improvements introduced. Able to compile more effectively.
HTTP --> angular http. All content is loaded client side. No need for server to load.

**Angular 6**
Forms features were updated.
ng update, ng add
CDK - Component Dev Kit (basically all the files in the app folder)

**Angular 7**
Virtual Scrolling
Drag and drop features

**Angular 8**
Differential loading. Angular will adjust and be run according to the browser it is running on. Depending on the browser, the output will be slightly different.
This makes Angular compatible with most browsers.
ng deploy was introduced.

**Angular 9**
IVY compiler
Faster testing and debugging
Improved style sheets
Component harness

**Angular 10 - The last major update**
New Angular material was introduced - styles.
https://material.angular.io/guide/getting-started
Have to import from external using a command.
ng add @angular/material
Date range picker
Warning about js import problems introduced.

From Angular 11 to 14, not much updates.

> Link to setup for a new project
> https://angular.io/guide/setup-local
> npm install -g @angular/cli
> then this:
> ng new <--your project name here-->

Then say yes to autocomplete and angular routing, select CSS
Wait forever for the packages to download

cd into your project folder
then ng serve --> "y"
then it will take some time to compile

We will only be using app.component.css, html and ts.
We will not be touching spec.ts.

**Folder Structure**

**_(1) Configuration file --> tsconfig.json_**
We will find the ts settings, targets, modules.
output directory

**_(2) Source code --> src folder_**
Contains app components like .html, .css, .spec.ts, .ts, .module.ts
Assets folder --> stores Images, mock data, APIs
fav.icon --> icon added to your tabular data

Multiple output from multiple files via index.html.
--> crux lies within the selector in app.component.ts

**_(3) Assets _**
Where we store mock data, images, etc.

**_(4) favicon.ico_**

**_(5) index.html --> Single paged application_**
Single page of our application where we will load all the files for output

**_(6) Main.ts _**
bootstrapModule --> means to kickstart something
In main.ts, app execution starts, and we set the starting point for our application
bootstrap --> .bootstrapModule(AppModule) means execution start with AppModule.
AppModule refers to the whole collection of programs you wrote in src app. It's all linked.
"ng serve" was the command used to execute the application.
If you create a lot of other modules, you can have a customised component to start with too.

**_(7) styles.css_**
It is a global stylesheet.
Provides stylings for index and all the components available.
Else, you can use app.component.css as a local stylesheet that only styles the app.component.html.
It overrides styles.css.

**_(8) Angular.json_**
Contains scripts to run.
Details on the project to run
Stylesheet, version, prefix
settings, schematics and also the commands

**_(9) Package.json_**
ng build, ng serve, ng lint, ng test, etc
ng lint checks the alignment of your code and whether your files are placed in the right folders. You need extra packages for this.
Other build-functionality which are needed.
Can also have a customised script

**_(10) Package-lock.json_**
In this it contains internally required modules
Dependencies -- all the modules need to run the code when we need to inject a dependency package. It should be kept to a minimum.

**Angular CLI**
ng generate component --> command to generate new component
Abbrev: ng g g <"component name">
ng generate module --> generates a new module

---

There is only one index.html file that takes in the components through app-root. That's why Angular is a single page application.

Moving on...

**COMPONENTS**
--> Creating a custom component

Components are the most important and basic building block of the app.
We can have multiple components and load it at a time.
4 files are created per component --> css, ts, html, spec.ts

Sometimes if your component doesnt appear, then you need to go to app.module.ts to check your imports and declarations. If your component is not imported automatically, then you may have to add it manually.
@NgModule --> the "@" is a decorator. It must be there to refer to the NgModules
All necessary modules will be there to supplement all functionalities.
Defaults --> browser and appmodules
Declarations --> all components including newly generated components
Imports --> all modules
Exports --> to export the components outside module
Providers --> Services will be injected here

_Difference between template and templateUrl in the xxx.component.ts_

- templateURL means read the directory address.
- template means read whatever is in the quotation marks/ read the value

* styleURLs in xxx.component.ts\*

- in an array of strings
- because it can contain multiple css files/ stylesheets
- you include multiple css files for different users e.g. premium users, regular users, light/dark modes

**Angular Material**
An angular library introduced in Angular 10.
ng add @angular/material

**Directive**
The elements which will lend extra features for the angular elements.
You can only use this with Angular.
Used to modify the behaviour of elements.
(1) Component directive - every Angular app has the app component as the component directive by default
(2) Structural directive - used to design and add features for html layouts, responsible for shaping/ reshaping/ adding/ removing/ manipulating elements. Represented by "\*" symbol.
Let's check it out:

> a--> \*ngIf

- solves the conditions (true or false)
- can also implement logic conditions
- it will include or remove elements based on the condition
- "else" produce an error message. Error msg is used along with ngIf and executes when the "if" condition turns out to be false
- template reference variable --> ng template is used for error msgs i.e. "<ng-template> tag"

- Update element: if condition is true, then it will update the message or element "then updated"
<h2 *ngIf="val && val1; then updated; else val2">
  This is a structural directive
</h2>
- Update element also uses <ng-template> tag

> b--> \*ngFor

- to loop through something, data needs to be in array form
- ngFor is used to modify the template structure and it loops the elements to display the data present in the array
- index, even, odd, first, last

> c--> ngSwitch--> contains inner element " \*ngswitchCase" and " _ngDefault" which already contain " _"

- should be written in [ngSwitch] without asterisk
- cases should be given with single quote marks when value is a string

> d --> ngStyle

- lets you put styling for the element dynamically
- syntax in [ngStyle]
- can be used in conjunction with ternary operators

> e --> ngClass

- multiple classes can be assigned to a variable
- Can use ternary operator in conjunction
- can assign an object to declare the classes
- can also use a function that returns a class value

_DATA BINDING_
--> Means sending data from controller to view, or from view to controller. This has been one-way data binding so far.
--> Data binding defines how data flows in an Angular application
--> We have been using the flower braces to wrap around a variable name e.g. {{name}}
Important notes:

1. One way data binding (.ts to .html)
   a. String interpolation
   b.Property binding
   c. Style binding
   d. Attribute binding
   e. Event binding
2. T

(3) Attribute directive
