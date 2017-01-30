# UQ Library Test

This is a UQ technical test



## Comments

### on WCAG 2.0 AA compliance considerations

 I tried to comply with the standards by writing a code with the following considerations:

   * Perceivable:

    - Made it easier for users to see and hear content.

    - Provided area label for the elements.

    - Provide text alternatives for non-text content.

   * Operable:

    - Allow users to have functionality available from a keyboard.
    
    - Give users enough time to read and use content.
   
    - Help users navigate and find content.
    
   * Understandable:

    - Make text readable and understandable.
   
    - Make content appear and operate in predictable ways.
    
    - Help users avoid and correct mistakes.(e.g. create library form validations)
   
   * Robust:
  
    - Maximize compatibility with current and future user tools.(Angular material tools)
    
### On SEO considerations

* Using responsive design

* Browser compatibility

* Minimum in-line styling 

* Minification

### On estimation of how long would it take you to implement each mini-app, comment on how long it took you to implement it

* 1 day(8 hours) to scaffold and prepare the layout and views

* 1 hour to prepare controller for retrieving and injecting the list of libraries into the view

* 2 hours to come up with a solution for matching the name of libraries in both objects and write the service

* 1 hour to prepare the dialog page for showing the list of computer availabilities

* 30 minutes to create the create library page

* 30 minutes to write the unit tests
     
 
### Application deployment (provide URL to your deployed application, eg heroku, github io, or provide steps how to run it locally)

* Running the built verison

  - Please go to the 'dist' folder
  
* Running local server

  - You must install node and bower packages:

    - npm install

    - Bower Install

  - Run `gulp serve` for starting the server.

* Testing

  - Running `gulp test` will run the unit tests with karma.

  - The unit tests are in 'src > test > spec '
      
### On how you'd optimise your applications on server

* I would definitely add lid to the Computer Availability DTO!
    It will reduce the processing overhead on the front end drastically.

### On how you'd scale your applications

   * AWS Auto Scaling

### On any issues you have come across

   * Was confused about the CORS issue in the beginning. I was assuming that the API must work without needing for any workaround! turns out it was a part of the test!

   So,when I found out that there is no solid relationship between the library and computer availability objects, I was almost sure that it was by purpose too. I hope it was! Or I missed the key?!

### On which AWS services would you use for deployment of your application or how would you deploy this application on premise

   I would definitely run it on a cloud platform like Azure or AWS, here are the steps:
   
   1- I create three branches on my Github repo: dev, test, master. 
   
   2- I develop in dev branch 
   
   3- When I want to test the new feature(s), I merge it with the test branch. My test branch will use AWS CodeDeploy to deploy to a live test instance.
   
   4- After successful test of the new feature(s), I would merge that with the master branch. My master branch will use AWS CodeDeploy to deploy to the primary instances. The traffic is spread on all instances by a load balancer

### If you have ReactJS experience, in your opinion what's the difference between AngularJS and ReactJS, which one do you prefer?

*  I have no experience with React.js yet, but apparently you can use Flux design pattern instead of MVC. Also, 
React doesn't have two way data-binding which is an advantage for Angular. However, it will introduce some performance
issues as it has to check the changes in data model constantly.
One obvious advantage of Angular is its larger community than React.

 I can't have a clear picture unless I gain some experience in React. But, my preference is to stick with Angular 1
  at the moment and to move to Angular 2 in very soon future.
