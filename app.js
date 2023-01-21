const express = require('express');
const bodyParser = require('body-parser');
const {api_key,audience_id,server_no} = require(__dirname+"/api-id.js"); //requring local module
const md5 = require("md5");
const mailchimp = require("@mailchimp/mailchimp_marketing");
const ejs = require('ejs');

mailchimp.setConfig({
    apiKey: api_key,
    server: server_no,
});
const listId = audience_id;

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');

const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", function( req, res){
    res.render("signup");
});

app.post("/", function(req, res){
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const subscriberHash = md5(email.toLowerCase());
    check = true;
    
    async function addToList() {
        try{
            //add to list
            const response = await mailchimp.lists.addListMember(listId, {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            });
            if(`${response.id}`){
                res.render("success",{logic:check});
            }

        }catch(e){
            if(e.status==400){
                //if already present; then update
                const response = await mailchimp.lists.updateListMember(
                    listId,
                    subscriberHash,
                    {merge_fields: {
                        FNAME: firstName,
                        LNAME: lastName
                    }}
                  );
                  res.render("success",{logic:!check});
            }else{
                //failure
                res.render("failure");
            }
        }
    }      
    addToList();
});


app.post("/failure", function (req,res){
    res.redirect("/");
});


app.post("/success", function (req,res){
    res.redirect("/");
});



app.listen(port, () => console.log(`Server started at port ${port}.`));

