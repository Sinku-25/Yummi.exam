    //-----------------------------------------------------------Contact Us------------------------------------------------------------------
    let inputName = document.querySelector('.input-name');
    let alertName = document.querySelector('.alert-name');

    function validationOne() {
       var regux = /^[a-zA-Z]{3,}( [a-zA-Z]{3,}){0,}$/;

        if (regux.test(inputName.value) == false) {
            alertName.classList.remove('d-none');
            $('.form-control').eq(0).addClass('false');
            $('.form-control').eq(0).removeClass('true');
            $('.red').eq(0).removeClass('d-none')
            $('.green').eq(0).addClass('d-none')
            return false;


        } else {
            alertName.classList.add('d-none');
            $('.form-control').eq(0).removeClass('false');
            $('.form-control').eq(0).addClass('true');
            $('.red').eq(0).addClass('d-none')
            $('.green').eq(0).removeClass('d-none')
            alertName.classList.add('d-none');
            return true;



        }
    }

    inputName.addEventListener('keyup', validationOne)

    let inputEmail = document.querySelector('.input-email');
    let alertEmail = document.querySelector('.alert-email');

    function validationTwo() {
               var regux = /^.{3,}@(yahoo|gmail)\.com$/;

        if (regux.test(inputEmail.value) == false) {
            alertEmail.classList.remove('d-none');
            $('.form-control').eq(1).addClass('false');
            $('.form-control').eq(1).removeClass('true');
            $('.red').eq(1).removeClass('d-none')
            $('.green').eq(1).addClass('d-none')
            return false;



        } else {
            alertEmail.classList.add('d-none');
            $('.form-control').eq(1).removeClass('false');
            $('.form-control').eq(1).addClass('true');
            $('.red').eq(1).addClass('d-none')
            $('.green').eq(1).removeClass('d-none')
            alertEmail.classList.add('d-none');
            return true;



        }
    }

    inputEmail.addEventListener('keyup', validationTwo)

    let inputPhone = document.querySelector('.input-phone');
    let alertPhone = document.querySelector('.alert-phone');

    function validationThree() {
        var regux = /^01[0152][0-9]{8}$/;

        if (regux.test(inputPhone.value) == false) {
            alertPhone.classList.remove('d-none');
            $('.form-control').eq(2).addClass('false');
            $('.form-control').eq(2).removeClass('true');
            $('.red').eq(2).removeClass('d-none')
            $('.green').eq(2).addClass('d-none')
            return false;



        } else {
            alertEmail.classList.add('d-none');
            $('.form-control').eq(2).removeClass('false');
            $('.form-control').eq(2).addClass('true');
            $('.red').eq(2).addClass('d-none')
            $('.green').eq(2).removeClass('d-none')
            alertPhone.classList.add('d-none');
            return true;



        }
    }

    inputPhone.addEventListener('input', validationThree)


    let inputAge = document.querySelector('.input-age');
    let alertAge = document.querySelector('.alert-age');

    function validationFour() {
        var regux = /^([1-7][0-9]|80)$/;

        if (regux.test(inputAge.value) == false) {
            alertAge.classList.remove('d-none');
            $('.form-control').eq(3).addClass('false');
            $('.form-control').eq(3).removeClass('true');
            $('.red').eq(3).removeClass('d-none')
            $('.green').eq(3).addClass('d-none')
            return false;



        } else {
            alertEmail.classList.add('d-none');
            $('.form-control').eq(3).removeClass('false');
            $('.form-control').eq(3).addClass('true');
            $('.red').eq(3).addClass('d-none')
            $('.green').eq(3).removeClass('d-none')
            alertAge.classList.add('d-none');
            return true;



        }
    }

    inputAge.addEventListener('input', validationFour)
        // End four
    let inputPassword = document.querySelector('.input-password');
    let alertPassword = document.querySelector('.alert-password');

    function validationFive() {
        var regux = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        if (regux.test(inputPassword.value) == false) {
            alertPassword.classList.remove('d-none');
            $('.form-control').eq(4).addClass('false');
            $('.form-control').eq(4).removeClass('true');
            $('.red').eq(4).removeClass('d-none')
            $('.green').eq(4).addClass('d-none')
            return false;



        } else {
            alertPassword.classList.add('d-none');
            $('.form-control').eq(4).removeClass('false');
            $('.form-control').eq(4).addClass('true');
            $('.red').eq(4).addClass('d-none')
            $('.green').eq(4).removeClass('d-none')
            alertPassword.classList.add('d-none');
            return true;



        }
    }

    inputPassword.addEventListener('input', validationFive)
    let inputRepassword = document.querySelector('.input-repassword');
    let alertRepassword = document.querySelector('.alert-repassword');

    function validationsix() {


        if (inputPassword.value !== inputRepassword.value) {
            alertRepassword.classList.remove('d-none');
            $('.form-control').eq(5).addClass('false');
            $('.form-control').eq(5).removeClass('true');
            $('.red').eq(5).removeClass('d-none')
            $('.green').eq(5).addClass('d-none')
            return false;



        } else {
            alertRepassword.classList.add('d-none');
            $('.form-control').eq(5).removeClass('false');
            $('.form-control').eq(5).addClass('true');
            $('.red').eq(5).addClass('d-none')
            $('.green').eq(5).removeClass('d-none')
            alertRepassword.classList.add('d-none');
            return true;



        }
    }

    inputRepassword.addEventListener('input', validationsix)

    let allInputs = document.querySelectorAll('input')



    document.addEventListener('click', function() {
            for (let i = 0; i < allInputs.length; i++) {
                if (allInputs[i].value == "") {

                    $('.btn').attr("disabled", true)
                } else if (validationOne() == true && validationTwo() == true && validationThree() == true && validationFour() == true && validationFive() == true && validationsix() == true) {
                    $('.btn').removeAttr("disabled")
                    $('.reqValidation').removeClass('d-none')
                }
            }
        })
/*--------------------------------------------------------------------Sider Bar---------------------------------------------------------------------------*/    $('.center').click(function() {
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
  
