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
        $('#page2, #heading2, .page1, .page3, #through-it-all img, #through-it-all h4, #through-it-all p, #oceans-where-feet-may-fail img, #oceans-where-feet-may-fail h4, #oceans-where-feet-may-fail p, #when-the-roll-is-called-up-yonder img, #when-the-roll-is-called-up-yonder h4, #when-the-roll-is-called-up-yonder p').show();
        $('#page1, #heading1, .page2, #page3, #heading3').hide();
        $('.hymes div').removeClass('col-11').addClass('col-md-4 col-10 mx-auto')
    });
    
    $( ".page3" ).click(function() {
        $('#page3, #heading3, .page1, .page2').show();
        $('.page3, #page1, #heading1, #page2, #heading2').hide();
    });

    $( "#hyme1, #through-it-all h3").click(function() {
        $('#page2, #heading2, .page1, .page3, #through-it-all, #through-it-all img, #through-it-all h4, #through-it-all p').show();
        $('#page1, .page2, #page3, #heading1, #heading3, #oceans-where-feet-may-fail img, #oceans-where-feet-may-fail h4, #oceans-where-feet-may-fail p, #when-the-roll-is-called-up-yonder img, #when-the-roll-is-called-up-yonder h4, #when-the-roll-is-called-up-yonder p').hide();
        $('.hymes div').addClass('col-11').removeClass('col-md-4 col-10');
        $('#through-it-all h3').css('font-size', '1.6em');
        $('#oceans-where-feet-may-fail h3, #when-the-roll-is-called-up-yonder h3').css('font-size', '1.2em');
    });
    
    $( "#hyme2, #oceans-where-feet-may-fail h3").click(function() {
        $('#page2, #heading2, .page1, .page3, #oceans-where-feet-may-fail, #oceans-where-feet-may-fail img, #oceans-where-feet-may-fail h4, #oceans-where-feet-may-fail p').show();
        $('#page1, .page2, #page3, #heading1, #heading3, #through-it-all img, #through-it-all h4, #through-it-all p, #when-the-roll-is-called-up-yonder img, #when-the-roll-is-called-up-yonder h4, #when-the-roll-is-called-up-yonder p').hide();
        $('.hymes div').addClass('col-11').removeClass('col-md-4 col-10');
        $('#oceans-where-feet-may-fail h3').css('font-size', '1.6em');
        $('#through-it-all h3, #when-the-roll-is-called-up-yonder h3').css('font-size', '1.2em');
    });
    
    $( "#hyme3, #when-the-roll-is-called-up-yonder h3").click(function() {
        $('#page2, #heading2, .page1, .page3, #when-the-roll-is-called-up-yonder, #when-the-roll-is-called-up-yonder img, #when-the-roll-is-called-up-yonder h4, #when-the-roll-is-called-up-yonder p').show();
        $('#page1, .page2, #page3, #heading1, #heading3, #through-it-all img, #through-it-all h4, #through-it-all p, #when-the-roll-is-called-up-yonder img, #oceans-where-feet-may-fail img, #oceans-where-feet-may-fail h4, #oceans-where-feet-may-fail p').hide();
        $('.hymes div').addClass('col-11').removeClass('col-md-4 col-10');
        $('#when-the-roll-is-called-up-yonder h3').css('font-size', '1.6em');
        $('#through-it-all h3, #oceans-where-feet-may-fail h3').css('font-size', '1.2em');
    });
})
