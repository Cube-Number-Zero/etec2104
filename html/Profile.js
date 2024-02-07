//Profile.js
"use strict";

function submitName() {
    let nameText = document.getElementById("name").value;
    let user = document.getElementById("username").value;
    let J = {
        name: nameText,
    };
    fetch( "/profile/" + user,
        {   method: "POST",
            body: JSON.stringify(J)
        }
    ).then( (resp) => {
        //can also use text(), blob(), or arrayBuffer()
        resp.json().then( (J) => {
            let nameDisplay = document.getElementById("nameDisplay");
            nameDisplay.removeChild(nameDisplay.firstChild);
            nameDisplay.appendChild(document.createTextNode("Name: " + nameText));
            console.log("Server said:", J);
        });
    }).catch( (err) => {
        console.log("Uh oh",err);
    })
}

function submitDOB() {
    let dobText = document.getElementById("dob").value;
    let user = document.getElementById("username").value;
    let J = {
        dob: dobText,
    };
    fetch( "/profile/" + user,
        {   method: "POST",
            body: JSON.stringify(J)
        }
    ).then( (resp) => {
        //can also use text(), blob(), or arrayBuffer()
        resp.json().then( (J) => {
            let dobDisplay = document.getElementById("dobDisplay");
            dobDisplay.removeChild(dobDisplay.firstChild);
            dobDisplay.appendChild(document.createTextNode("DOB: " + J["new"]));
            console.log("Server said:", J);
        });
    }).catch( (err) => {
        console.log("Uh oh",err);
    })
}

function submitPicture() {
    let file = document.getElementById("profile_pic").files[0];
    let user = document.getElementById("username").value;
    let img = document.getElementById("pfp");
    if (!file) {
        console.log("No file!");
        return;
    }
    if(!file.type.startsWith("image/")) {
        console.log("Not an image!");
        return;
    }
    // Change the picture
    const reader = new FileReader();
    reader.onload = (e) => {
        img.src = e.target.result;
        console.log(e.target.result);
    };
    reader.readAsDataURL(file);

    let R = new FileReader();
    R.addEventListener("load", () => {
        let profilepic = btoa(R.result);    //do base64 encoding
        let J = {
            pic: profilepic
        };
        fetch( "/profile/" + user,
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

function submitOriginal() {
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