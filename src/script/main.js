$(document).ready(function(){

$('#btnShow').on('click', function(){
    $('article').show();
});

$('#btnHide').on('click', function() {
    $('article').hide();
});

$('#btnToggle').on('click', function() {
    $('article').toggle();
})




});