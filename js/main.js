$(document).ready(function () {


    let circleText = document.getElementsByClassName('benefit-up-text');
    let circleTextRevers = document.getElementsByClassName('benefit-bottom-text');
    for (let i = 0; i < circleText.length; i++) {
        new CircleType(circleText[i])
            .radius(92);
    }
    for (let i = 0; i < circleTextRevers.length; i++) {
        new CircleType(circleTextRevers[i])
            .dir(-1)
            .radius(90);
    }

    $('.all-products-menu-item').click((e) => {
        $('.products').hide();
        let currentElement = $(e.target);
        let id = currentElement.data('id');
        $('#' + id).show();

        $('.all-products-menu-item').removeClass('active');
        currentElement.addClass('active')

        $('#' + id).slick('setPosition');
    })

    $('#exclusive-tea').slick({
        dots: true,
        slidesToShow: 1,
        speed: 700,
        infinite: false,
        initialSlide: 1,
        touchThreshold: 15,
        centerMode: true,
        variableWidth: true
    });

    $('#white-tea').slick({
        dots: true,
        slidesToShow: 1,
        speed: 700,
        infinite: false,
        initialSlide: 1,
        touchThreshold: 15,
        centerMode: true,
        variableWidth: true
    });

    $('#black-tea').slick({
        dots: true,
        slidesToShow: 1,
        speed: 700,
        infinite: false,
        initialSlide: 1,
        touchThreshold: 15,
        centerMode: true,
        variableWidth: true
    });

    $('#green-tea').slick({
        dots: true,
        slidesToShow: 1,
        speed: 700,
        infinite: false,
        initialSlide: 1,
        touchThreshold: 15,
        centerMode: true,
        variableWidth: true
    });

    $('#ylun-tea').slick({
        dots: true,
        slidesToShow: 1,
        speed: 700,
        infinite: false,
        initialSlide: 1,
        touchThreshold: 15,
        centerMode: true,
        variableWidth: true,
        waitForAnimate: true
    });

    $('#close, #order-popup, #close-img').click((e) => {
        if (e.target.id === 'order-popup' || e.target.id === 'close' || e.target.id === 'close-img') {
            $('#order-popup').hide();
        }
    });

    $('.buy').click(() => {
        $('#order-popup').css('display', 'flex');
    });

    $('#select-tea').click(() => {
        $('#select-tea').css('border-bottom-left-radius', 'none')
    })



    let email = $('#email-discount');

    $('#discount-btn').click(()=>{
        $(email).css('border-color','#8fbc62');
        if (!email.val()){
            $(email).css('border-color','red');
            return;
        }
        $.ajax({
            type: 'post',
            url: 'mail.php',
            data: 'email=' + email.val(),
            success: () => {
                $('#discount-area').css('display','none');
                $('#discount-btn').css('display','none');
                $('#success-discount').css('display','block');
            },
            error: () => {
                alert('error')
                $('#loader').css('display', 'none')
            }
        })
    })



});



