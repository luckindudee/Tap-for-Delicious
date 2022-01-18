function sendEmail() {

    console.log("email button clicked");
    var favouritesList = JSON.parse(localStorage.getItem('favouriteList'));

    Email.send({
        Host: "smtp.gmail.com",
        Username : "eatsup2019@gmail.com",
        Password : "Eats_Up2019",
        To : "navinda.2015257@iit.ac.lk",
        From : "eatsup2019@gmail.com",
        Subject : "Favourite Restaurant List",
        Body : "<h1>Favourite Restaurant List</h1><br>"
                + "<h3>Restaurant Name - " + favouritesList[0].restaurantName + "</h3>"
                + "<h3>Restaurant Address - " + favouritesList[0].restaurantAddress + "</h3>"
                + "<h3>Restaurant Time - " + favouritesList[0].restaurantTime + "</h3>"
                + "<h3>Restaurant Ratings - " + favouritesList[0].restaurantRatings + "</h3><br><br>"

                + "<h3>Restaurant Name - " + favouritesList[1].restaurantName + "</h3>"
                + "<h3>Restaurant Address - " + favouritesList[1].restaurantAddress + "</h3>"
                + "<h3>Restaurant Time - " + favouritesList[1].restaurantTime + "</h3>"
                + "<h3>Restaurant Ratings - " + favouritesList[1].restaurantRatings + "</h3>",
    }).then(
        message => alert("mail sent successfully")
    );
}