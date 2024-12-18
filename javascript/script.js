$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() + header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop+ section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#Home', {
        origin: 'left',
        duration: 2000,
        distance:'2%'
    })
   

    ScrollReveal().reveal('#Services', {
        duration: 2000,
        distance:'2%'
    })


    ScrollReveal().reveal('.services', {
        origin: 'left',
        duration: 3000,
        distance:'3%'
    })

    ScrollReveal().reveal('#Menu', {
        duration: 2000,
        distance:'2%'
    })


    ScrollReveal().reveal('.dishes', {
        origin: 'left',
        duration: 3000,
        distance:'2%'
    })

    ScrollReveal().reveal('.Chef', {
        duration: 2000,
        distance:'2%'
    })


    ScrollReveal().reveal('.testimonials_content', {
        origin: 'right',
        duration: 3000,
        distance:'3%'
    })

    ScrollReveal().reveal('.app_content', {
        origin: 'left',
        duration: 2000,
        distance:'3%'
    })


    ScrollReveal().reveal('.banner_app', {
        origin: 'right',
        duration: 2000,
        distance:'2%'
    })

    ScrollReveal().reveal('#footer_content', {
        origin: 'left',
        duration: 2000,
        distance:'6%'
    })

    ScrollReveal().reveal('#footer_rights', {
        duration: 3000,
        distance:'30%'
    })

});

