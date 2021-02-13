/*jslint browser: true*/
/*global $, console, window*/

$(document).ready(function () {
    'use strict';

    var win = $(window),
        navbar = $('.navbar'),
        scrollUp = $(".scroll-up");
    

    /*========== Start Scroll For Navigation Menu ==========*/
    navbar.on('click', 'a', function (e) {
        e.preventDefault();
        const $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 82
        }, 1000);
    });

    /*========== Start Scroll For Link To Go Section  ==========*/
    $('.down').on('click', function (e) {
        e.preventDefault();
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 82
        }, 1000);
    });
    
    
    // Sync Navbar Links With Section
    $('body').scrollspy({
        target: '#navtoggler',
        offset: 82
    });

    //// COLLAPSED MENU CLOSE ON CLICK
    navbar.on('click', '.navbar-collapse', function (e) {
        if ($(e.target).is('a')) {
            $(this).collapse('hide');
        }
    });
    
    /*========== Start Scroll Up    ==========*/
    // Show And Hide Buttom Back To Top
    win.on('scroll', function () {
        if ($(this).scrollTop() >= 600) {
            scrollUp.show(300);
        } else {
            scrollUp.hide(300);
        }
    });
    // Back To 0 Scroll Top body
    scrollUp.on('click', function () {
        $("html, body").animate({ scrollTop: 0}, 1000);
    });
});