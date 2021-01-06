$(document).ready(function () {
    $( ".display-pam" ).click(function() {
        $("#pamphlet" ).toggle();
        $('#page1, #heading1').show();
    });

    $( "#pamphlet button[data-bs-dismiss='modal']" ).click(function() {
        $( "#pamphlet" ).toggle();
    });

    $( ".page1" ).click(function() {
        $('#page1, #heading1').show();
        $('#page2, #heading2').hide();
        $('#page3, #heading3').hide();
    });

    $( ".page2" ).click(function() {
        $('#page2, #heading2').show();
        $('#page1, #heading1').hide();
        $('#page3, #heading3').hide();
    });
    
    $( ".page3" ).click(function() {
        $('#page3, #heading3').show();
        $('#page1, #heading1').hide();
        $('#page2, #heading2').hide();
    });
})
