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

    $(window).scroll(function () {
        $('main section').each(function () {
            if ($(this).offset().top <= $(window).scrollTop() + 140) {
                let idx = $(this).index()
                $('header ul li').removeClass('on')
                $('header ul li').eq(idx).addClass('on')
            }
        })
    })

    // $('.gallery').each(function (index, el) {
    //     // $(el).mouseenter(function () {
    //     //     $(this).find('video')[0].play()
    //     // })
    //     // $(el).mouseleave(function () {
    //     //     $(this).find('video')[0].pause()
    //     //     $(this).find('video')[0].currentTime = 0
    //     // })
    //     $(el).click(function () {
    //         // const title = $(this).find('h3').text()
    //         // const text = $(this).find('p').text()
    //         // const videolink = $(this).find('video').attr('src')

    //         // $('.popup').find('h2').text(title)
    //         // $('.popup').find('p').text(text)
    //         // $('.popup').find('video').attr('src', videolink)

    //         $('.popup').addClass('on')
    //         // $('.popup').find('video')[0].play()
    //     })
    // })

    // $('.popup span').click(function () {
    //     $('.popup').removeClass('on')
    // })

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
        $('.mobilemenu').slideToggle(500)
    })
    $('.logo').click(function (event) {
        event.preventDefault()
        $('html,body').animate({
            scrollTop: 0
        }, 940)
    })

})