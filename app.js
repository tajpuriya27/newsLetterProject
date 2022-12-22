const express = require('express');
const bodyParser = require('body-parser');

const md5 = require("md5");
const mailchimp = require("@mailchimp/mailchimp_marketing");
mailchimp.setConfig({
    apiKey: "a1d3ff12b0d79077125a37bfd21f00fa-us14",
    server: "us14",
});
const listId = "8ceb56e6f1";

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

const port = pprocess.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", function( req, res){
    res.sendFile(__dirname+"/signup.html");
});

app.post("/", function(req, res){
    console.log(req.body.firstName);
    console.log(req.body.email);
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    
    async function addToList() {
        const response = await mailchimp.lists.addListMember(listId, {
        email_address: email,
          status: "subscribed",
          merge_fields: {
            FNAME: firstName,
            LNAME: lastName
          }
        });
      
        console.log(
          `Successfully added contact as an audience member. The contact's id is ${response.id}.`
        );
        console.log(response.status);

        if(`${response.id}` != null){
            res.sendFile(__dirname+"/success.html");

        }
        else{
            res.sendFile(__dirname+"/failure.html");
        }
    }      
    addToList();

    
    // setTimeout(function(){
    //     const subscriberHash = md5(email.toLowerCase());
    //     async function run() {
    //     try {
    //         const resList = await mailchimp.lists.getListMember(
    //             listId,
    //             subscriberHash
    //         );
    //         console.log(`This user's subscription status is ${resList.status}.`);
    //         res.send("<h1>Subscribed</h1>");
    //     }
    //     catch (e) {
    //         if (e.status === 404) {
    //             console.error(`This email is not subscribed to this list`, e);
    //             res.send("<h1>Not-Subscribed</h1>");
    //         }
    //     }
    // }
    // run();    

    // },5000);
});


app.post("/failure", function (req,res){
    res.redirect("/");
});


app.post("/success", function (req,res){
    res.redirect("/");
});



app.listen(port, () => console.log(`Server started at port ${port}.`));

//mailchimp api
//a1d3ff12b0d79077125a37bfd21f00fa-us14
//list or audience id
//8ceb56e6f1