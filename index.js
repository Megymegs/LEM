$(document).ready(function () {
    $( ".display-pam" ).click(function() {
        $("#pamphlet" ).toggle();
        $('#page1').show();
    });

    $( "#pamphlet button[data-bs-dismiss='modal']" ).click(function() {
        $( "#pamphlet" ).toggle();
    });
})
