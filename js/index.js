$(function () {
    // 제이쿼리를 여기에다 쓰기
    $('header ul li').click(function () {
        // 내가 클릭한 li 해당하는 section 이동
        let idx = $(this).index()
        // 개발자 도구의 console에서 확인
        console.log(idx)
        let st = $('main section').eq(idx).offset().top - 140
        $('html,body').animate({
            scrollTop: st
        })
    })

    $('.projects').click(function (event) {
        event.preventDefault()
        $('html,body').animate({
            scrollTop: 1400
        }, 940)
    })

    $('.contact').click(function (event) {
        event.preventDefault()
        $('html,body').animate({
            scrollTop: 2240
        }, 940)
    })

    $(window).scroll(function () {
        $('main section').each(function () {
            if ($(this).offset().top <= $(window).scrollTop() + 140) {
                let idx = $(this).index()
                $('header ul li').removeClass('on')
                $('header ul li').eq(idx).addClass('on')
            }
        })
    })

    Carousel(
        document.getElementById("myCarousel"),
        {
          // Your custom options
        },
        {
          Lazyload,
          Arrows,
          Thumbs,
        }
      ).init();

      Fancybox.bind("[data-fancybox]", {
        // Your custom options
      })

    // 햄버거를 클릭했을 때 할 일
    $('.hamburger').click(function () {
        // 모바일메뉴가 나와
        $('.mobilemenu').slideToggle(700)
    })
    $('.logo').click(function (event) {
        event.preventDefault()
        $('html,body').animate({
            scrollTop: 0
        }, 940)
    })

})