$(document).ready(function() {

    $("#recipe-container").hide();

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBdOg_6PwFcGG2vxlaiXYaHhrnfQZsfwn0",
        authDomain: "lost-and-found-15248.firebaseapp.com",
        databaseURL: "https://lost-and-found-15248.firebaseio.com",
        projectId: "lost-and-found-15248",
        storageBucket: "lost-and-found-15248.appspot.com",
        messagingSenderId: "427231633221"
    };

    firebase.initializeApp(config);

    var database = firebase.database();

    initApp(database);

    // //Add items to firebase
    // $(".item").on('click', function(event) {
    //     // Keeps page from reloading //
    //     event.preventDefault();

    //     item = this.innerText.toLowerCase();

    //     $('#fridge-items').append("<li>" + item + "</li>");

    //     fridgeItems.push(item)
    //     console.log(fridgeItems)

    // });



//------------OAuth---------------//
//Function called for login/out button listener
function toggleSignIn() {
    if (!firebase.auth().currentUser) {
        var provider = new firebase.auth.GoogleAuthProvider();

        provider.addScope('profile');
        firebase.auth().signInWithPopup(provider).then(function(result) {
            //Gives Google access token
            var token = result.credential.accessToken;

            var user = result.user;

        }).catch(function(error) {
            //REcords errors for clarity
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            if (errorCode === 'auth/account-exists-with-different-credential') {
                alert('You have already signed up with a different auth provider for that email.');

            } else {
                console.error(error);
            }

        });

    } else {

        // firebase.auth().signOut();
        firebase.auth().signOut().then(function() {
            console.log('Signed Out');
        }, function(error) {
            console.error('Sign Out Error', error);
        });

    }

    document.getElementById('login').disabled = true;

}

//Called on page/window load to add listener to UI
function initApp(database) {
    //Listens for state changes
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {

            window.user = user;

            document.getElementById('login').textContent = 'Sign out';

            getData(database);


        } else {

            window.user = null

            document.getElementById('login').textContent = 'Sign in with Google';

        }

        document.getElementById('login').disabled = false;

    });

    document.getElementById('login').addEventListener('click', toggleSignIn, false);
}



