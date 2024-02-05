//Profile.js
"use strict";

function submitName() {
    let nameText = document.getElementById("name").value;
    let J = {
        name: nameText,
    };
    fetch( "/profile/alice",
        {   method: "POST",
            body: JSON.stringify(J)
        }
    ).then( (resp) => {
        //can also use text(), blob(), or arrayBuffer()
        resp.json().then( (J) => {
            console.log("Server said:",J);
        });
    }).catch( (err) => {
        console.log("Uh oh",err);
    })
}

function submitDOB() {
    let file = document.getElementById("profile_pic").files[0];
    if(!file){
        console.log("No file!");
        return;
    }
    let R = new FileReader();
    R.addEventListener("load", () => {
        let profilepic = btoa(R.result);    //do base64 encoding
        let fname = document.getElementById("fname").value;
        let lname = document.getElementById("lname").value;
        let dob = document.getElementById("birthdate").value;
        let J = {
            firstName: fname,
            lastName: lname,
            birthDate: dob,
            pic: profilepic
        };
        fetch( "/profile",
            {   method: "POST",
                body: JSON.stringify(J)
            }
        ).then( (resp) => {
            //can also use text(), blob(), or arrayBuffer()
            resp.json().then( (J) => {
                console.log("Server said:",J);
            });
        }).catch( (err) => {
            console.log("Uh oh",err);
        })
    });
    R.readAsBinaryString(file);
}

function submitPicture() {
    let file = document.getElementById("profile_pic").files[0];
    if(!file){
        console.log("No file!");
        return;
    }
    let R = new FileReader();
    R.addEventListener("load", () => {
        let profilepic = btoa(R.result);    //do base64 encoding
        let fname = document.getElementById("fname").value;
        let lname = document.getElementById("lname").value;
        let dob = document.getElementById("birthdate").value;
        let J = {
            firstName: fname,
            lastName: lname,
            birthDate: dob,
            pic: profilepic
        };
        fetch( "/profile",
            {   method: "POST",
                body: JSON.stringify(J)
            }
        ).then( (resp) => {
            //can also use text(), blob(), or arrayBuffer()
            resp.json().then( (J) => {
                console.log("Server said:",J);
            });
        }).catch( (err) => {
            console.log("Uh oh",err);
        })
    });
    R.readAsBinaryString(file);
}