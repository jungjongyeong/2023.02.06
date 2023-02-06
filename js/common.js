var ww = $(window).width()
if (ww>1024) {
    $('html').addClass('pc')
} else {
    $('html').addClass('mobile')
}

// pc화면용 네비게이션 액션
$('#header #nav .depth1 > li').on('mouseover mouseout', function(){
    if ( $('html').hasClass('pc') ) {
        $(this).find('.depth2').stop().slideToggle()
    }
})

// 위의 코드 결과와 같음
// $('#header #nav .depth1 > li').hover(
//     function(){
//         if ( $('html').hasClass('pc')) {
//             $(this).find('.depth2').stop().slideDown()
//         }
//     },
//     function(){
//         if ( $('html').hasClass('pc')) {
//             $(this).find('.depth2').stop().slideUp()
//         }
//     }
// )





$('#header .open').on('click', function () {
    $(this).toggleClass('active')
    $('#header .cd').toggleClass('active')
    $('#section').toggleClass('active')
    $('.homeLogo.logo1').toggleClass('active')
    $('.navUl').toggleClass('active')
})

$('#header #nav').on('mouseover', function () {
    $(this).find('.depth2').stop().slideDown();

})
$('#header #nav').on('mouseout', function () {
    $(this).find('.depth2').stop().slideUp();

})
$('#header .open').on('click', function () {
    $(this).toggleClass('on')
})


$(window).scroll(function(){
    let sct = $(this).scrollTop()
    if (sct>100) {
        $('#gotop').fadeIn(300)
    } else {
        $('#gotop').fadeOut(300)
    }
})

$('#gotop a').click(function(){
    $('html').animate({
        scrollTop:'0'
    }, 500)
    return false
})

$('.fam').on('click', function(){
    $(this).find('ul').slideToggle()
})