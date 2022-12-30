What is Angular?

it is a framework of a front-end, single-page application

Built as MVC but works as MVVM architecture

No need to have additional libraries
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
Abbrev: ng g c <"component name">
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

**_Angular Material_**
<br>
An angular library introduced in Angular 10.
ng add @angular/material

**_Directive_**
<br>
The elements which will lend extra features for the angular elements.
You can only use this with Angular.
Used to modify the behaviour of elements.

_(1) Component directive_
<br>
Every Angular app has the app component as the component directive by default
<br>
_(2) Structural directive_
<br>
Used to design and add features for html layouts, responsible for shaping/ reshaping/ adding/ removing/ manipulating elements. Represented by "\*" symbol.
Let's check it out:

> a--> \*ngIf

- solves the conditions (true or false)
- can also implement logic conditions
- it will include or remove elements based on the condition
- "else" produce an error message. Error msg is used along with ngIf and executes when the "if" condition turns out to be false
- template reference variable --> ng template is used for error msgs i.e. "<ng-template> tag"

- Update element: if condition is true, then it will update the message or element "then updated"
  > "<h2 \*ngIf="val && val1; then updated; else val2">" <br>
  > "This is a structural directive" <br>
  > " \</h2> "
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

## _(3) Attribute directive_

**_DATA BINDING_**
--> Means sending data from controller to view, or from view to controller. This has been one-way data binding so far.
--> Data binding defines how data flows in an Angular application
--> We have been using the flower braces to wrap around a variable name e.g. {{name}}
Important notes:

1. One way data binding (.ts to .html)

   - a. String interpolation
     - bind data from component to view
     - one way flow
     - could be integer, strings, objects, arrays, etc
     - syntax is {{xxx}}
       <br>
   - b.Property binding

     - allows us to bind property from component to view
     - properties title, placeholder, innerhtml etc
     - syntax [property_name ]= "variable"

       <br>

   - c. Style binding
     - syntax [style.property ]="variable
       <br>
   - d. Attribute binding
     - Binds attributes
     - Quite similar to property binding, actually
     - Sometimes we use this because some properties in property binding is not supported
     - e.g. colspan. This needs to be put in [attr.colspan ] and not [colspan ]
     - syntax [attr.attribute_name ] = "variable"
       <br>
   - e. Event binding
     - This binds the event from component to view (still in one-way data binding)
     - syntax (event_name) = "function()"
       <br>

2. Two-way Binding

- Allow us to bring the data from component to view and vice versa
- binding is done through ngModel
- syntax [(ngModel)] --> "banana in box"
- data flows both ways, from view to component and from component back to view
- you can change values this way

---

**_ANGULAR PIPES_**

> Pipes are angular elements used for transforming the data from one format to another

- it can take in data as input, and changes the format according to the requirements
- syntax | --> pipe symbol
  <br>
- a. _Built-in pipes_ e.g. --> lowercase, uppercase, date, currency, percent
- b. _Parameterized pipes_: can pass the parameters when required into our pipes
  - Date e.g. --> short, long, medium, dd-MMM-yyyy, Fulltime, Shorttime, mediumtime, etc....
  - Percent e.g. --> (mini before dec).(mini-dec)-(max-dec)
- c. _Chaining pipes_ : We can use multiple pipes on the input

---

<br>
**_ANGULAR ROUTING_**

> Mechanism to manage the paths of the component

--> Navigation inside the angular application
--> We have router modules in order to implement routes
--> types:

- normal route
- parameterized routes
- child routes
  --> while entering address in the url, you should give "/ <name of component>" and should not include "/" at the start of the name
  e.g. { path: 'new1', component: NewComponent1Component } --> correct
  this is wrong --> { path: '/new1', component: NewComponent1Component },

Router outlet:

- we should have at least 1 router-outlet at all times
- we can have multiple router-outlets!
  "\<router-outlet name="routeone"></router-outlet>\" --> you can give your router outlets names
  "\ { path: 'new2', component: New2Component, outlet:'routeone' },\" --> and add it to your outlets

Multiple router outlets

- if we don't have any extra router outlets, it will load through the primary router outlet
- when router outlet is named, it is called a named router outlet

Routing strategies --> There are 2 of them

1. Pathlocation strategy
2. Hashlocation strategy

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

**_Angular Material_**
<br>
An angular library introduced in Angular 10.
ng add @angular/material

**_Directive_**
<br>
The elements which will lend extra features for the angular elements.
You can only use this with Angular.
Used to modify the behaviour of elements.

_(1) Component directive_
<br>
Every Angular app has the app component as the component directive by default
<br>
_(2) Structural directive_
<br>
Used to design and add features for html layouts, responsible for shaping/ reshaping/ adding/ removing/ manipulating elements. Represented by "\*" symbol.
Let's check it out:

> a--> \*ngIf

- solves the conditions (true or false)
- can also implement logic conditions
- it will include or remove elements based on the condition
- "else" produce an error message. Error msg is used along with ngIf and executes when the "if" condition turns out to be false
- template reference variable --> ng template is used for error msgs i.e. "<ng-template> tag"

- Update element: if condition is true, then it will update the message or element "then updated"
  > "<h2 \*ngIf="val && val1; then updated; else val2">" <br>
  > "This is a structural directive" <br>
  > " \</h2> "
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

---

**_DATA BINDING_**
--> Means sending data from controller to view, or from view to controller. This has been one-way data binding so far.
--> Data binding defines how data flows in an Angular application
--> We have been using the flower braces to wrap around a variable name e.g. {{name}}
Important notes:

1. One way data binding (.ts to .html)

   - a. String interpolation
     - bind data from component to view
     - one way flow
     - could be integer, strings, objects, arrays, etc
     - syntax is {{xxx}}
       <br>
   - b.Property binding

     - allows us to bind property from component to view
     - properties title, placeholder, innerhtml etc
     - syntax [property_name ]= "variable"

       <br>

   - c. Style binding
     - syntax [style.property ]="variable
       <br>
   - d. Attribute binding
     - Binds attributes
     - Quite similar to property binding, actually
     - Sometimes we use this because some properties in property binding is not supported
     - e.g. colspan. This needs to be put in [attr.colspan ] and not [colspan ]
     - syntax [attr.attribute_name ] = "variable"
       <br>
   - e. Event binding
     - This binds the event from component to view (still in one-way data binding)
     - syntax (event_name) = "function()"
       <br>

2. T

---

_(3) Attribute directive_
