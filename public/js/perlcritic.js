
$('.analysis tr').mouseenter(function() {
    line = $(this).attr("data-src-line");
    selector = "[name=line-" + line + "]";
    myOffset = $(this).offset().top - 280;
    $(".ppi-code").scrollTo(selector, myOffset, 200);
    $(selector).addClass("active");
});

$('.analysis tr').mouseleave(function() {
    line = $(this).attr("data-src-line");
    selector = "[name=line-" + line + "]";
    $(selector).removeClass("active");
});


jQuery.fn.scrollTo = function(elem, topOffset, speed) {
    scrollAmount = $(this).scrollTop() - $(this).offset().top + $(elem).offset().top - topOffset;
    $(this).animate({scrollTop:  scrollAmount}, speed);
    return this;
};

//---------------------------------------------------------------------------
// See http://www.abeautifulsite.net/whipping-file-inputs-into-shape-with-bootstrap-3

$(document).on('change', '.btn-file :file', function() {
    var input = $(this);
    var label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
    input.trigger('fileselect', [label]);
});

$(document).ready( function() {
    $('.btn-file :file').on('fileselect', function(event, label) {
        var input = $(this).parents('.input-group').find(':text');
        if( input.length ) input.val(label);
    });
});

//---------------------------------------------------------------------------
// Popovers require activation

$('[data-toggle="popover"]').popover();



