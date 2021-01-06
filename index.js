$(document).ready(function () {
    $( ".display-pam" ).click(function() {
        $("#pamphlet" ).toggle();
        $('#page1, #heading1').show();
        $('.page1').hide();
    });

    $( "#pamphlet button[data-bs-dismiss='modal']" ).click(function() {
        $( "#pamphlet" ).toggle();
        $('#page1, #heading1').hide();
        $('#page2, #heading2').hide();
        $('#page3, #heading3').hide();
    });

    $( ".page1" ).click(function() {
        $('#page1, #heading1, .page2, .page3').show();
        $('.page1, #page2, #heading2, #page3, #heading3').hide();
    });

    $( ".page2" ).click(function() {
        $('#page2, #heading2, .page1, .page3').show();
        $('#page1, #heading1, .page2, #page3, #heading3').hide();
    });
    
    $( ".page3" ).click(function() {
        $('#page3, #heading3, .page1, .page2').show();
        $('.page3, #page1, #heading1, #page2, #heading2').hide();
    });

    $( "#hyme1" ).click(function() {
        $('#page2, #heading2, .page1, .page3, #through-it-all').show();
        $('#oceans-where-feet-may-fail img, #oceans-where-feet-may-fail h4, #oceans-where-feet-may-fail p, #when-the-roll-is-called-up-yonder img, #when-the-roll-is-called-up-yonder h4, #when-the-roll-is-called-up-yonder p').hide();
    });
    
    $( "#hyme2" ).click(function() {
        $('#page2, #heading2, .page1, .page3, #oceans-where-feet-may-fail').show();
        $('#through-it-all img, #through-it-all h4, #through-it-all p, #when-the-roll-is-called-up-yonder img, #when-the-roll-is-called-up-yonder h4, #when-the-roll-is-called-up-yonder p').hide();
    });
    
    $( "#hyme3" ).click(function() {
        $('#page2, #heading2, .page1, .page3, #when-the-roll-is-called-up-yonder').show();
        $('#through-it-all img, #through-it-all h4, #through-it-all p, #when-the-roll-is-called-up-yonder img, #oceans-where-feet-may-fail img, #oceans-where-feet-may-fail h4, #oceans-where-feet-may-fail p').hide();
    });
})
