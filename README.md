
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---
  
# MVC-Tech-Blog
<details>
  
<summary>Table of Contents</summary>

  
<ol>
  
<li>
  
<a href="#about-the-project">About The Project</a></li>

  
<ul>
  
<li><a href="#built-with">Built With</a></li>

<li><a href="#usage">Usage</a></>
</ul>

</li>

<li>

<a href="#getting-started">Getting Started</a>

<ul>

<li><a href="#installation">Installation</a>

</ul>

</li>
<li><a href="#license">License</a></>
  
<li><a href="#contact">Contact</a></>
  
</ol>
  
</details>

 ## About The Project


 ![ProductScreen Shot](./public/assets/product2.png)

This is a CMS-style tech blog site where developers can publish their blog posts and comment on other developer's posts as well. When the user visit the site for the first time, they will be presented with the homepage which includes existing blog posts. Also, the user can see the navigation links for the homepage and the dashboard and the option to sign up or log in. The first time user can sign up with their user name and email and password. Once the user sign up or log in, they can see their dashboard where they can create the new blogs and their existing blog. They can also click the links for their existing blog to edit or click the delete button to delete the blog. When the user click the home button on the navigation bar, they can see all the blogs and also they can click each blog link to see the comments or comments. To comment a blog, the user need to log in.   

<p align = "right">(<a href="#top">back to top</a>)</>

 ## Built With
* [Node.js](https://nodejs.org/) 
* [MySQL2](https://www.npmjs.com/package/mysql2) 
* [Sequelize](https://www.npmjs.com/package/sequelize) 
* [dotenv](https://www.npmjs.com/package/dotenv) 
* [handlebars](https://www.npmjs.com/package/express-handlebars)



<p align = "right"> (<a href="#top">back to top</a>)</>

## Usage

Click the following link to see the deployed application.

If you log in as Minnie Mouse,  
email: mimo@gmail.com | password: password23456
You can see the edit and delete buttons for existing blogs and comments.

Heroku: [https://ayacomputer-mvc-tech-blog.herokuapp.com/](https://ayacomputer-mvc-tech-blog.herokuapp.com/)


Login Preview:
![login](./public/assets/login2.png)

Dashboard (create new blog, edit or delete old blog)
![dashboard](./public/assets/dashboard2.png)

Edit Blog:
![editBlog](./public/assets/editBlog2.png)


Comment:
![comment](./public/assets/comment2.png)

Edit & Delete Comment:
![editcomment](./public/assets/editcomment2.png)

<p align ="right">(<a href="#top">back to top</a>)</>

## Getting Started

To get a local copy up and running follow these simple example steps.

## Installation

 1: The application will be invoked by using the following command:

 ```
  git clone git@github.com:ayacomputer/14-MVC-Tech-Blog.git
 ```

 2: Make sure that .env file has your DB password

 Please do not forget to write your secret at DB_SECRET 
 [How to set the env file.](https://drive.google.com/file/d/12BokJA0Ah2Hz0zT_xI3t1wDmCcbFK3n4/view)

 3: Install npm packages
 ```
 npm i
 ``` 

 4: Run mysql and source db.schema.sql by using the following commands:
  ```
  mysql -u root -p
  ```
   (enter your mysql password)
  ```
  source db/schema.sql;
  ```

 5: Run seed files

 ```
 npm run seed
 ```

 6: Run to start the application
 ```
 npm start 
 ```

<p align="right">(<a href="#top">back to top</a>)</>

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Distributed under MIT License.

See LICENSE.txt for more information.

<p align ="right">(<a href="#top">back to top</a>)</>

 ## Contact Me

Ayako Woollan - ayako.woollan@gmail.com

Project Link: [https://github.com/ayacomputer/14-MVC-Tech-Blog](https://github.com/ayacomputer/14-MVC-Tech-Blog)


<p align="right">(<a href="#top">back to top</a>)</>
