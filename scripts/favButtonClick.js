console.log("start saving");
var favouriteItems = [];
var checkButtonClick1 = false;
var checkButtonClick2 = false;
var checkButtonClick3 = false;
var checkButtonClick4 = false;
var checkButtonClick5 = false;
$('#fav1').hide();
$('#fav3').hide();
$('#fav5').hide();
$('#fav7').hide();
$('#fav9').hide();

$("#restaurant01").on('click', function (event) {
    event.preventDefault();
    if (checkButtonClick1 == false) {
        $('#fav1').show();
        $('#fav').hide();
        checkButtonClick1 = true;
        favouriteItems.push(restaurant1)
        localStorage.setItem('favouriteList', JSON.stringify(favouriteItems));
    } else {
        $('#fav1').hide();
        $('#fav').show();
        checkButtonClick1 = false;
        for (i = 0; i < favouriteItems.length; i++) {
            if (favouriteItems[i].restaurantId == 1) {
                var updatedFavList = favouriteItems.filter(item => item.restaurantId != 1);
                favouriteItems = updatedFavList;
                localStorage.setItem('favouriteList', JSON.stringify(favouriteItems));
            }
        }
    }
});

$("#restaurant02").on('click', function (event) {
    event.preventDefault();
    if (checkButtonClick2 == false) {
        $('#fav3').show();
        $('#fav2').hide();
        checkButtonClick2 = true;
        favouriteItems.push(restaurant2)
        localStorage.setItem('favouriteList', JSON.stringify(favouriteItems));
    } else {
        $('#fav3').hide();
        $('#fav2').show();
        checkButtonClick2 = false;
        for (i = 0; i < favouriteItems.length; i++) {
            if (favouriteItems[i].restaurantId == 2) {
                var updatedFavList = favouriteItems.filter(item => item.restaurantId != 2);
                favouriteItems = updatedFavList;
                localStorage.setItem('favouriteList', JSON.stringify(favouriteItems));
            }
        }
    }
});

$("#restaurant03").on('click', function (event) {
    event.preventDefault();
    if (checkButtonClick3 == false) {
        $('#fav5').show();
        $('#fav4').hide();
        checkButtonClick3 = true;
        favouriteItems.push(restaurant3)
        localStorage.setItem('favouriteList', JSON.stringify(favouriteItems));
    } else {
        $('#fav5').hide();
        $('#fav4').show();
        checkButtonClick3 = false;
        for (i = 0; i < favouriteItems.length; i++) {
            if (favouriteItems[i].restaurantId == 3) {
                var updatedFavList = favouriteItems.filter(item => item.restaurantId != 3);
                favouriteItems = updatedFavList;
                localStorage.setItem('favouriteList', JSON.stringify(favouriteItems));
            }
        }
    }
});

$("#restaurant04").on('click', function (event) {
    event.preventDefault();
    if (checkButtonClick4 == false) {
        $('#fav7').show();
        $('#fav6').hide();
        checkButtonClick4 = true;
        favouriteItems.push(restaurant4)
        localStorage.setItem('favouriteList', JSON.stringify(favouriteItems));
    } else {
        $('#fav7').hide();
        $('#fav6').show();
        checkButtonClick4 = false;
        for (i = 0; i < favouriteItems.length; i++) {
            if (favouriteItems[i].restaurantId == 4) {
                var updatedFavList = favouriteItems.filter(item => item.restaurantId != 4);
                favouriteItems = updatedFavList;
                localStorage.setItem('favouriteList', JSON.stringify(favouriteItems));
            }
        }
    }
});

$("#restaurant05").on('click', function (event) {
    event.preventDefault();
    if (checkButtonClick5 == false) {
        $('#fav9').show();
        $('#fav8').hide();
        checkButtonClick5 = true;
        favouriteItems.push(restaurant5)
        localStorage.setItem('favouriteList', JSON.stringify(favouriteItems));
    } else {
        $('#fav9').hide();
        $('#fav8').show();
        checkButtonClick5 = false;
        for (i = 0; i < favouriteItems.length; i++) {
            if (favouriteItems[i].restaurantId == 5) {
                var updatedFavList = favouriteItems.filter(item => item.restaurantId != 5);
                favouriteItems = updatedFavList;
                localStorage.setItem('favouriteList', JSON.stringify(favouriteItems));
            }
        }
    }
});