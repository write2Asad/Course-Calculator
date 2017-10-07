$('.common').change(function () {
    $('#id3').val(parseFloat("0"+$('#id1').val()) + parseFloat("0"+$('#id2').val()));
});