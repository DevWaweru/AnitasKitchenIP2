function openNav(){
    document.getElementById("myNav").style.width = "100%";
    $("#navigation").hide();
}
function closeNav(){
    document.getElementById("myNav").style.width = "0%";
    $("#navigation").show();
}
$(document).ready(function(){
    $(".row").waypoint(function(){
        $(this).fadeIn(750);
    },{
        offset:'bottom-in-view'
    })
})