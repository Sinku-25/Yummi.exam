// categories
var myHttp = new XMLHttpRequest;
categMeals = []
mealsArr = []

function categories() {
    myHttp.open('GET', `https://www.themealdb.com/api/json/v1/1/categories.php`);
    myHttp.send();
    myHttp.addEventListener('readystatechange', function() {
        if (myHttp.readyState == 4) {
            categMeals = JSON.parse(myHttp.response).categories;

            displayCategory()




        }
    })
}

function displayCategory() {
    var cartona = ``;

    for (let i = 0; i < categMeals.length; i++) {

        cartona += `
                <div class="col-lg-3 items ">
                <div class="item position-relative ">
                    <img src="${categMeals[i].strCategoryThumb} " class="w-100 " alt=" ">
                    <div class=" position-absolute item-caption d-flex align-items-center justify-content-center text-center ">

                   <div>
                   <h2 class="ms-3 m ">${categMeals[i].strCategory}</h2>
                   <p>${categMeals[i].strCategoryDescription.split(' ').splice(0,10).join(" ")}</p>
                   </div>

                    </div>
                </div>
            </div>
                `

    }

    document.querySelector('.categores .catMeals').innerHTML = cartona;
    let meal = document.querySelectorAll('.m');
    let item = document.querySelectorAll('.item');
    for (let s = 0; s < meal.length; s++) {
        meal[s].addEventListener('click', function(e) {
            var categorys = $(e.target).text()
            localStorage.setItem('category', JSON.stringify(`${categorys}`))
            location.href = "catmeals.html"


        })
    }




}
categories()
/*--------------------------------------------------------------------Sider Bar-------------------------------------------------------------------*/$('.center').click(function() {
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

