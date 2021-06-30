# Steps to produce

+ Create a project
    sails new name_of_the_project
+ Do we need npm i ?
    Answer: NO
+ Inspect package.json
    create any adittional scripts such as:
        "dev": "nodemon sails lift --port XXXX"
+ config/routes.js
    This file contains ALL of the valid URL paths of the project, valid = all the custom URLS we create that end up on a view / action
    Use this file only if we need to appoint a url to a view or a controller
+ add a controller under api/controllers
    The name of the controller must be in lower case separated with a dash if multiple words exist
    Place under a separate folder (if needed) for a new set of controllers, e.g. api/controllers/products, 
        new.js <--- new.ejs --->
        edit.js <--- edit.ejs --->
        update.js <--- list.ejs --->
        list.js <--- list.ejs --->
        delete.js <--- list.ejs --->
+ add a view under views/pages
    Place under a separate folder (if needed) for a new set of view, e.g. views/pages/products,
        new.ejs,
        edit.ejs,
        list.ejs