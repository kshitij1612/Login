//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDdVx6Hy4eomc2RdUTTl-xqRtRTiJ6AFBM",
    authDomain: "basic-login-in-page.firebaseapp.com",
    databaseURL: "https://basic-login-in-page-default-rtdb.firebaseio.com",
    projectId: "basic-login-in-page",
    storageBucket: "basic-login-in-page.appspot.com",
    messagingSenderId: "1098253491019",
    appId: "1:1098253491019:web:d27651a425fd8cb164e6ce"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});




function singUp() {

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var saveEP = email.concat("S", password);
    console.log(saveEP);


    firebase.database().ref("/").child(saveEP).update({
        purpose: "savingEP"
    });
    localStorage.setItem("EP", saveEP);

    //spilt id and passoword
    var poseQ = saveEP.search("S");
    console.log(poseQ);
    var username = saveEP.substring(0, poseQ);
    console.log(username);
    var password = saveEP.substring(poseQ + 1, saveEP.length);
    console.log(password);
    document.getElementById("login_status").innerHTML = "your id has been created";



}

var emailSignIn = "";
var passwordSignIn = "";

function signIn() {

    emailSignIn = document.getElementById("email").value;
    passwordSignIn = document.getElementById("password").value;






    getData();

}

numberOfProfile = 0;


function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            IDnPass = childKey;
            //Start code
            console.log("IDPASSORD RECIEVED FROM DB - " + IDnPass);
            numberOfProfile++;
            console.log("Profile Count in DB - " + numberOfProfile);

            //spilt id and passoword
            var poseQ = IDnPass.search("S");
            console.log("position of seperator" + poseQ);

            var username = IDnPass.substring(0, poseQ);
            console.log("First Part Before seperator i.e - " + username);
            var password = IDnPass.substring(poseQ + 1, IDnPass.length);
            console.log("Second part after seperator i.e - " + password);
            console.log("Current login - " + emailSignIn + " Current password - " + passwordSignIn);


            if ((username.length == emailSignIn.length) && (password.length == passwordSignIn.length)) {
                for (var i = 0; i < username.length; i++) {
                    console.log("Char match" + username.length + i + username[i] + emailSignIn[i]);
                    if ((username[i] != emailSignIn[i]) || (password[i] != passwordSignIn[i])) {
                        console.log("login fail");
                        document.getElementById("login_status").innerHTML = "Try again";
                        break;
                    }
                    if (username.length - 1 == i) {
                        console.log("login success");
                        window.location = "done.html";
                    }
                }

            }
            else {
                console.log("login fail");
                document.getElementById("login_status").innerHTML = "Try again";
            }
            //End code
        });
    });
}

function forgot_pass() {
    window.location = "forgot_pass.html";

}

function check() {
    forgot_user_id = document.getElementById("forgot_user_id").value;
    console.log("forgot user id - " + forgot_user_id);

    firebase.database().ref("/").on('value', function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            IDnPass = childKey;
            //Start code
            console.log("IDPASSORD RECIEVED FROM DB - " + IDnPass);
            numberOfProfile++;
            console.log("Profile Count in DB - " + numberOfProfile);

            //spilt id and passoword
            var poseQ = IDnPass.search("S");
            console.log("position of seperator" + poseQ);

            var username = IDnPass.substring(0, poseQ);
            console.log("First Part Before seperator i.e - " + username);
            var password = IDnPass.substring(poseQ + 1, IDnPass.length);
            console.log("Second part after seperator i.e - " + password);
            console.log("Current login - " + emailSignIn + " Current password - " + passwordSignIn);


            if (username.length == emailSignIn.length) {
                for (var i = 0; i < username.length; i++) {
                    console.log("Char match" + username.length + i + username[i] + emailSignIn[i]);
                    if (username[i] != emailSignIn[i]) {
                        console.log("login fail");
                        document.getElementById("login_status").innerHTML = "Try again";
                        break;
                    }
                    if (username.length - 1 == i) {
                        console.log("login success");
                        window.location = "done.html";
                    }
                }

            }
            else {
                console.log("login fail");
                document.getElementById("login_status").innerHTML = "Try again";
            }
        }









