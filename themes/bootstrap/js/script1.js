(function($) {
  $(document).ready(function() {
    $('.toggle').toggles({
      text: {
        on: '', // text for the ON position
        off: '' // and off
      }
    });




    var linkRewriter = function(a, b) {
        $('a[href*="' + a + '"]').each(function() {
            $(this).attr('href', $(this).attr('href').replace(a, b));
        });
    };

    linkRewriter('mag.uchicago.edu', 'magdev1.uchicago.edu');




    $('#edit-search-api-fulltext').attr('placeholder', 'Search');
    $('#edit-name option:contains("- Any -")').text('- Topic -');
    $('#edit-created option:contains("- Any -")').text('- Year -');
    $("#block-views-block-mag-top-stories-block-1 .attachment").hide();
    $('.toggle').on('toggle', function(e, active) {
      if (active) {
        console.log('Most read');
        $(".view-mag-top-stories .mostread").hide();
        $("#block-views-block-mag-top-stories-block-1 .attachment").fadeIn();
      } else {
        console.log('Most shared');
        $(".view-mag-top-stories .mostread").fadeIn();
        $("#block-views-block-mag-top-stories-block-1 .attachment").hide();
      }
    });
    $(".form-item-search-api-fulltext").append('<i id="searchclose" class="fa fa-window-close" aria-hidden="true"></i>');
    //form-item-search-api-fulltext
    $("#block-exposedformmag-search-2page-1").hide();
    //mnavcon
    $("#showsearch").click(function() {
      $(".mnavcon").hide();
      $(".navlogo").hide();
      $("#block-exposedformmag-search-2page-1").fadeIn();
      $("#edit-search-api-fulltext").focus();
    });
    $("#searchclose").click(function() {
      $("#block-exposedformmag-search-2page-1").hide();
      $(".mnavcon").fadeIn();
      $(".navlogo").fadeIn();
    });
    $(document).keyup(function(e) {
      if (e.keyCode == 27) { // escape key maps to keycode `27`
        $("#block-exposedformmag-search-2page-1").hide();
        $(".mnavcon").fadeIn();
        $(".navlogo").fadeIn();
      }
    });
    $(function() {


      if (matchMedia) {
        const mq = window.matchMedia("(min-width: 700px)");
        mq.addListener(WidthChange);
        WidthChange(mq);
      }



      function WidthChange(mq) {
        if (mq.matches) {
          // window width is at least 700px
          //$('.view-mag-back-issues .col-sm-3').matchHeight();
          $('.view-mag-back-issues .int-wrap').matchHeight();
          $('.view-taxonomy-term .int-wrap').matchHeight();
          $('.view-mag-homepage-stories-2 .int-wrap').matchHeight();
          //view-mag-homepage-stories-2
            $('#block-fromthearchiveshomeplaceholder-2').matchHeight();
          //block-fromthearchiveshomeplaceholder-2
          console.log('matchHeight');

        } else {
          // window width is less than 700px
        }

      }



    });



  });

})(jQuery);
