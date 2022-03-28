$(document).ready(function () {
    "use strict";
    const submenu_animation_speed = 200;

    const delay = (function () {
        var timer = 0;
        return function (callback, ms) {
            clearTimeout(timer);
            timer = setTimeout(callback, ms);
        };
    })();

    const sidebar = function () {
        if (!$('.page-sidebar').length) { return }
        var select_sub_menus = $('.accordion-menu li:not(.open) ul'),
            active_page_sub_menu_link = $('.accordion-menu li.active-page > a');
        // Hide all sub-menus
        select_sub_menus.hide();
        const container = document.querySelector('.page-sidebar .accordion-menu');
        const ps = new PerfectScrollbar(container);
        if ($('body').hasClass('page-sidebar-collapsed') && $(window).width() > 1350) {
            ps.destroy();
        }
        $(window).resize(function () {
            if ($(window).width() <= 1350) {
                const container = document.querySelector('.page-sidebar');
                const ps = new PerfectScrollbar(container);
            }
        });

        // Accordion
        $('.accordion-menu li a').on('click', function (e) {
            var sub_menu = $(this).next('ul'),
                parent_list_el = $(this).parent('li'),
                active_list_element = $('.accordion-menu > li.open'),
                show_sub_menu = function () {
                    sub_menu.slideDown(submenu_animation_speed);
                    parent_list_el.addClass('open');
                    ps.update();
                },
                hide_sub_menu = function () {
                    sub_menu.slideUp(submenu_animation_speed);
                    parent_list_el.removeClass('open');
                    ps.update();
                },
                hide_active_menu = function () {
                    $('.accordion-menu > li.open > ul').slideUp(submenu_animation_speed);
                    active_list_element.removeClass('open');
                    ps.update();
                };
            if (sub_menu.length) {
                if ($('body').hasClass('page-sidebar-collapsed') && $(window).width() > 1350) {
                    e.preventDefault()
                    return;
                }
                if (!parent_list_el.hasClass('open')) {
                    if (active_list_element.length) {
                        hide_active_menu();
                    };
                    show_sub_menu();
                } else {
                    hide_sub_menu();
                };
                return false;
            };
        });
        if ($('.active-page > ul').length) {
            active_page_sub_menu_link.click();
        };
    };

    function toggleSidebar() {
        $('body').toggleClass("sidebar-hidden");
    };

    function toggleCollapsedSidebar() {
        $('body').toggleClass("page-sidebar-collapsed");

        const container = document.querySelector('.page-sidebar .accordion-menu');
        const ps = new PerfectScrollbar(container);

        if ($('body').hasClass('page-sidebar-collapsed')) {
            ps.destroy();
        }
    };

    $('#sidebar-toggle').on('click', function () {
        toggleSidebar();
    });

    $('#sidebar-collapsed-toggle').on('click', function () {
        toggleCollapsedSidebar();
    });

    (function () {
        feather.replace()
    })();
    sidebar();
});

$(window).on("load", function () {
    setTimeout(function () {
        $('body').addClass('no-loader')
    }, 1000)
});