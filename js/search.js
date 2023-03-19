var searchName = document.getElementById('search-name');
var searchLetter = document.getElementById('search-letter');
var myHttp = new XMLHttpRequest;
search = []
searchArr = []




function getIngredients() {
    let letter = searchName.value;
    myHttp.open('GET', `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
    myHttp.send();
    myHttp.addEventListener('readystatechange', function() {
        if (myHttp.readyState == 4) {
            search = JSON.parse(myHttp.response).meals;

            displaySearch()

        }
    })
}

function searchLetters() {
    let letterVal = searchLetter.value;
    myHttp.open('GET', `https://www.themealdb.com/api/json/v1/1/search.php?s=${letterVal}`);
    myHttp.send();
    myHttp.addEventListener('readystatechange', function() {
        if (myHttp.readyState == 4) {
            searchArr = JSON.parse(myHttp.response).meals;

            displaySear()

        }
    })
}

function displaySear() {
    var cartona = ``;

    for (let i = 0; i < searchArr.length; i++) {

        cartona += `  <div class="col-lg-3 ">
        <div class="item position-relative ">
            <img src="${searchArr[i].strMealThumb} " class="w-100 " alt=" ">
            <div class=" position-absolute item-caption d-flex align-items-center ">
                <h2 class="ms-3 m">${searchArr[i].strMeal}</h2>
            </div>
        </div>
    </div>`

    }

    document.querySelector('.searchcontant ').innerHTML = cartona;
    let meal = document.querySelectorAll('.m');
    let item = document.querySelectorAll('.item');
    for (let s = 0; s < meal.length; s++) {
        meal[s].addEventListener('click', function(e) {
            var categorys = $(e.target).text()
            localStorage.setItem('mealsval', JSON.stringify(`${categorys}`))
            location.href = "details.html"
        })
    }
}

searchLetter.addEventListener('input', searchLetters);


function displaySearch() {
    var cartona = ``;

    for (let i = 0; i < search.length; i++) {

        cartona += `  <div class="col-lg-3 ">
        <div class="item position-relative ">
            <img src="${search[i].strMealThumb} " class="w-100 " alt=" ">
            <div class=" position-absolute item-caption d-flex align-items-center ">
                <h2 class="ms-3 m">${search[i].strMeal}</h2>
            </div>
        </div>
    </div>`

    }

    document.querySelector('.searchcontant ').innerHTML = cartona;
    let meal = document.querySelectorAll('.m');
    let item = document.querySelectorAll('.item');
    for (let s = 0; s < meal.length; s++) {
        meal[s].addEventListener('click', function(e) {
            var categorys = $(e.target).text()
            localStorage.setItem('mealsval', JSON.stringify(`${categorys}`))
            location.href = "details.html"
        })
    }
}

/*--------------------------------------------------------------------Sider Bar---------------------------------------------------------------------*/
$('.center').click(function() {
        let navWidth = $(".side-bar").outerWidth();
        console.log(-navWidth + "px");
        if ($('aside').css('left') === '0px') {

            $('aside').animate({ left: `${-navWidth+'px'}` }, 1000)

            $('.fa-xmark').addClass('d-none')

            $('.manu').removeClass('d-none')


        } else {
            $('aside').animate({ left: '0' }, 1000, function() {
                $(' aside ul li ').animate({
                    marginTop: '10px'
                }, 1000)
            })

            $('.fa-xmark').removeClass('d-none')

            $('.manu').addClass('d-none')


        }
    })
