
# Newsletter project 

## Try online:
[Click Here](https://newsletter-node.onrender.com/) to view it online.  
Deployed using [Render](https://render.com) - free tier.

## Try offline:
1. Fork it.
2. Run command ```npm i``` within directory. It will install all npm packages used in the project. Used packages can be checked in **package.json** file.
3. Open brower and open visit port 3000 or Alternatively [Click here](http://localhost:3000/).
---  

## Folder Structure:  
*Created using Name:* [file-tree-generator](https://marketplace.visualstudio.com/items?itemName=Shinotatwu-DS.file-tree-generator) *-VS code Extension*
<table border=1>
<tr>
<th>Structure in v1</th>
<th>Structure in v2</th>
</tr>
<tr>
<td valign=top>
<pre>
📦NewsLetterProject  
 ┣ 📂public
 ┃ ┣ css
 ┃ ┃ ┗ style.css
 ┃ ┗📂images
 ┃ ┃ ┗bmcLogo.png
 ┣ .gitignore
 ┣ app-id.js
 ┣ app.js
 ┣ failure.html
 ┣ package-lock.json
 ┣ package.json
 ┣ readme.md
 ┣ signup.html
 ┗ success.html
</pre>
</td>
<td valign=top>
<pre>
📦NewsLetterProject  
 ┣ 📂public
 ┃ ┣ css
 ┃ ┃ ┗ style.css
 ┃ ┗ 📂images
 ┃ ┃ ┗ profile.png
 ┣ 📂views
 ┃ ┣ 📂partials
 ┃ ┃ ┣ footer.ejs
 ┃ ┃ ┗ header.ejs
 ┃ ┣ failure.ejs
 ┃ ┣ signup.ejs
 ┃ ┗ success.ejs
 ┣ .gitignore
 ┣ api-id.js
 ┣ app.js
 ┣ package-lock.json
 ┣ package.json
 ┗ readme.md
</pre></td></tr></table>

## Updates:
### Version 2
- Hide the Mailchimp api-key, audience id and server id using external local module.
- ejs is used for templating purpose.
- Errors while trying to subscribe with subscribed email is handled and updated page is shown.

### Version 1
- Full functional web app is deployed using render. 
- Subscribed email is reflected in audience list of my Mailchimp account.

## Node Packages used:
- Node 
- Express Js
- BodyParser: Node Package
- ejs
- md5
- bodyParser


## My understanding building this project
> Templating with ejs.
> - Update and Sucess page are same page.

---
> I have created this project with the help of udemy course by Dr. Agela Yu - **[The Complete 2023 Web Development Bootcamp](https://www.udemy.com/share/1013gG/)**
---


