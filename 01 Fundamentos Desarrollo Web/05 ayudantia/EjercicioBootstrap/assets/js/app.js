$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

$('#titulo').dblclick(function(){
    $(this).addClass('text-danger')
})

$('#parrafo').click(function(){
    $('.btn').toggle('d-none')
})