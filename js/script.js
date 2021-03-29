$(function () {


    // custom  tabs==============
    $('.custom-tabs .tab').click(function () {
        $('.custom-tabs .tab').removeClass('active');
        $(this).addClass('active');
        var get_id = $(this).attr('data-tabtarget');
        $('.custom-tab-content .tab-pane').removeClass('active')
        $(get_id).addClass('active');
        $('.layout-wrapper .left-sidebar').removeClass('active');
    });

    // header menu ======

    $('.header-account-info-wrapper .btn-dropdown').click(function () {
        $(this).next('.account-info-menu').slideToggle(200);
    })


    // mobile-menu toggle =========
    $('.btn-menu-open').click(function () {
        $('.layout-wrapper .left-sidebar').addClass('active');
    });
    $('.btn-menu-close,.layout-wrapper .left-sidebar').click(function () {
        $('.layout-wrapper .left-sidebar').removeClass('active');
    });
    $('.layout-wrapper .left-sidebar .sidebar-content').click(function (e) {
        e.stopImmediatePropagation();
    })


    // search mobile ====
    $('.btn-search-open').click(function () {
        $('header .header-search').addClass('active');
    });
    $('.btn-search-close').click(function () {
        $('header .header-search').removeClass('active');
    });

    
    // tooltip activation 
    $('[data-toggle="tooltip"]').tooltip();
});