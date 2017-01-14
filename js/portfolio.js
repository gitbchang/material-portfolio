$(document).ready(function() {
  var pfDetailArr = [{
    Title: "Hangman",
    Heading: "Guess the colors of the rainbow in this hangman game",
    Body: "This was one of the first games created after learning jQuery. Personally, I like to use the jQuery syntax of selecting DOM elements rather than plain javascript. It also allows me to add custom animations easily.",
    Tech: "Technology Used: HTML/CSS, Javascript, jQuery"
  },
  {
    Title: "Test2",
    Heading: "Test Heading 2",
    Body: "Test Body 2",
    Tech: "Tech Tech Used 2"
  },
  {
    Title: "Test3",
    Heading: "Test Heading 3",
    Body: "Test Body 3",
    Tech: "Tech Tech Used 3"
  }];
    var icon = $(".pf-icon");
    var cards = $(".pf-detail > .card");
    // console.log(icon);
    // Add Data Identifiers to the small icons
    icon.each(function(e) {
        console.log($(this));
        $(this).attr("data-number", e);
        // Found Custom CSS that works better than the hoverable class
        // $(this).addClass("hoverable");
    });
    // console.log(icon);
    // Add Data Identifiers to the detail cards
    cards.each(function(e) {
        // $(this).addClass("hide");
        $(this).attr("data-card", e);
    });
    console.log(cards);

    function toggleOpen(e) {
        $(this).toggleClass("open-active");
        // console.log(e);
    }
    // Create Detail cards on the fly using pfDetailArr
    function createPFCard(number){
      var finalCard = $("<div>");
      finalCard.addClass("card card1 medium hoverable");

      var newDiv1 = $("<div>");
      newDiv1.addClass("card-image waves-effect waves-block waves-light");
      var titleImg = $("<img>");
      titleImg.attr("src", "images/rainbow.jpg");
      titleImg.addClass("activator");
      newDiv1.append(titleImg);

      var newDiv2 = $("<div>");
      newDiv2.addClass("card-content");
      var newSpan2 = $("<span>");
      newSpan2.addClass("ct card-title activator grey-text text-darken-4");
      newSpan2.css("color", "black");
      newSpan2.text(pfDetailArr[number].Title);
      newDiv2.append(newSpan2);

      finalCard.append(newDiv1);
      finalCard.append(newDiv2);

      $(".pf-detail").html(finalCard);

    }

    function toggleCard(e) {

        // console.log($(this).data("number"));
        var newThis = $(this);
        var cname = newThis[0].className;
        var iconID = $(this).data("number");
        // var test = $('*[data-card="'+ i + '"]');
        // console.log(test);
        if (cname.indexOf("open-active") > 0) {
            console.log("i'm open");
            // $('*[data-card="'+ iconID + '"]').toggleClass("hide");
            // $(".card1").css("transform", "translateX(0%)");


            // createPFCard(iconID);

            $('*[data-card="' + iconID + '"]').css({
                "transform": "translateX(0%)",
                "transition": "1s"
            });


        } else {
            $('*[data-card="' + iconID + '"]').css({
                "transform": "translateX(150%)",
                "transition": "1s"
            });
        }
        // if(cname.indexOf("animated bounce" >= 0)){
        // 	setTimeout($('*[data-card="'+ iconID + '"]').toggleClass("animated bounce"), 2000);
        // }

        e.preventDefault();
    }

    icon.on("click", toggleOpen);
    icon.on("click", toggleCard);


});
