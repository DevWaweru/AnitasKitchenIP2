$(document).ready(function () {
    $(".fa-bars").click(function () {
        document.getElementById("big-menu").style.width = "100%";
        $("#navigation").hide();
    });
    $(".closebtn").click(function () {
        document.getElementById("big-menu").style.width = "0%";
        $("#navigation").show();
    });

    (function ($) {
        window.fnames = new Array();
        window.ftypes = new Array();
        fnames[0] = 'EMAIL';
        ftypes[0] = 'email';
    }(jQuery));
    var $mcj = jQuery.noConflict(true);
});