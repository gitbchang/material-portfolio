$(document).ready(function() {
  var pfDetailArr = [{
    Title: "Hangman",
    Heading: "Guess the colors of the rainbow in this hangman game",
    Body: "This was one of the first games created after learning jQuery. Personally, I like to use the jQuery syntax of selecting DOM elements rather than plain javascript. It also allows me to add custom animations easily.",
    Tech: "Technology Used: HTML/CSS, Javascript, jQuery",
    heroku_url: "https://hangman-rework2.herokuapp.com/",
    image_path: "images/rainbow.jpg"
  },
  {
    Title: "Westworld RPG",
    Heading: "Choose Your Hero and Defeat Your Enemies",
    Body: "This project improved my familiarity with javascript objects/array and how to loop through them. I also used the jQuery animations library.",
    Tech: "Technology Used: HTML/CSS, Javascript, jQuery",
    heroku_url: "https://westworld-rpg.herokuapp.com/",
    image_path: "images/dolores-profile.jpg"
  },
  {
    Title: "Crystal Collectors",
    Heading: "A Simple Addition Game!",
    Body: "I was able to learn how to use functions and bootstrap classes. This project was the beginning of the Westworld RPG Game.",
    Tech: "Technology Used: HTML/CSS, Javascript, jQuery",
    heroku_url: "https://crystal-collectors-31241.herokuapp.com/",
    image_path: "images/ruby.png"
  },
  {
    Title: "Train Schedule",
    Heading: "Keep Track of Multiple Train Schedules",
    Body: "My intro project for firebase. We are storing multiple train schedules and automatically calculating time of arrival.",
    Tech: "Technology Used: Firebase, moment.js TIME API, Javascript",
    heroku_url: "https://train-schedule-82408.herokuapp.com/",
    image_path: "images/train-card.jpg"
  },
  {
    Title: "The Office Trivia Game",
    Heading: "Answer Trivia Questions about 'The Office(US)' TV show!",
    Body: "Timing Events were the main focus in this project. I remade this project multiple times before using an object with multiple functions to run the game.",
    Tech: "Technology Used: Javascript-setTimeout/setInterval, jQuery, HTML/CSS",
    heroku_url: "https://office-trivia-31404.herokuapp.com/",
    image_path: "images/jumbotron-office.jpg"
  },
  {
    Title: "Happy Medium",
    Heading: "Find A Convenient Meeting Place!",
    Body: "The purpose of this project was to find a convenient meeting spot for groups of people. It will suggest a restaurant/cafe based around the central location of multiple people.This is my first project to heavily utilize the Google Maps API.",
    Tech: "Technology Used: Google Maps API, Firebase API, HTML/CSS, Javascript",
    heroku_url: "https://desolate-sea-23025.herokuapp.com/",
    image_path: "images/hm-logo.png"
  }];

    var icon = $(".pf-icon");
    var cards = $(".pf-detail > .card");
    // var iconID;
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
  /*
    cards.each(function(e) {
        // $(this).addClass("hide");
        $(this).attr("data-card", e);
    });
  */
    // console.log(cards);

    function toggleOpen(e) {
    // first remove all open active buttons then activate the one selected
      var iconID = $(this).data("number");
        if ($(this).hasClass("open-active")) {
            $(this).removeClass("open-active");
            hideCard(iconID);
        }
        else {
            $(".open-active").removeClass("open-active");
            $(this).addClass("open-active");
            createPFCard(iconID);
            setTimeout(function() {
                showCard(iconID);
            }, 100);
            setTimeout(giveBounce, 1000);



          // showCard(iconID);
        }
    // console.log(e);
    }
    // Create Detail cards on the fly using pfDetailArr
    function createPFCard(number){
      var finalCard = $("<div>");
      finalCard.attr("data-number", number);
      finalCard.addClass("card card1 medium hoverable");

      var newDiv1 = $("<div>");
      newDiv1.addClass("card-image waves-effect waves-block waves-light");
      var titleImg = $("<img>");
      titleImg.attr("src", pfDetailArr[number].image_path);
      titleImg.addClass("activator valign-wrapper");
      newDiv1.append(titleImg);

      var cardContent = $("<div>");
      cardContent.addClass("card-content");
      var newSpan2 = $("<span>");
      newSpan2.addClass("ct card-title activator grey-text text-darken-4");
      newSpan2.css({
        "color": "black",
        "font-weight": "bold"
      });
      newSpan2.text(pfDetailArr[number].Title);
      cardContent.append(newSpan2);


      var cardReveal = $("<div>");
      cardReveal.addClass("card-reveal");
      var newSpan3 = $("<span>");
      newSpan3.addClass("card-title grey-text text-darken-4");
      newSpan3.text(pfDetailArr[number].Title);
      var cardHeading = $("<h5>");
      cardHeading.text(pfDetailArr[number].Heading);
      var closeIcon = $("<i>");
      newSpan3.append(closeIcon);
      closeIcon.addClass("material-icons right");
      closeIcon.text("close");
      var descriptorParagraph = $("<p>");
      descriptorParagraph.addClass("flow-text");
      descriptorParagraph.text(pfDetailArr[number].Body);
      var techUsedParagraph = $("<p>");
      techUsedParagraph.addClass("flow-text");
      techUsedParagraph.text(pfDetailArr[number].Tech);
      // ATTACH PARAGRAPHS TO CARD REVEAL DIV
      cardReveal.append(newSpan3);
      cardReveal.append(cardHeading);
      cardReveal.append(descriptorParagraph);
      cardReveal.append(techUsedParagraph);
      // ADD PROJECT LINK
      var cardAction = $("<div>");

      cardAction.addClass("card-action");
      var herokuATag = $("<a/>", {
        target: "_blank",
        href: pfDetailArr[number].heroku_url,
        text: "Check It Out!"
      });
      // var herokuATag = $("<a>");
      // herokuATag.attr("href", pfDetailArr[number].heroku_url);
      // herokuATag.attr("target", "_blank");
      cardAction.append(herokuATag);

      finalCard.append(newDiv1);
      finalCard.append(cardContent);
      finalCard.append(cardReveal);
      finalCard.append(cardAction);
      finalCard.css({
          "transform": "translateX(150%)",
          "transition": "1s"
      });
      $(".pf-detail").html(finalCard);

    }
    function showCard(e){
      console.log("showing card");
      console.log("icon id " + e);
      $("div").data("card", e).css({
          "transform": "translateX(0%)",
          "transition": "1s"
      });
      /*
      $('*[data-card="' + e + '"]').css({
          "transform": "translateX(0%)",
          "transition": "1s"
      });
      */
      // preventDefault();

    }
    function hideCard(e){
      console.log("hide card");
      console.log("icon id " + e);
      $(".pf-detail > div").data("card", e).css({
          "transform": "translateX(150%)",
          "transition": "1s"
      });
    }
    function giveBounce(){
      $(".pf-detail").addClass("animated bounce");
      //setTimeout($(".pf-detail").removeClass("animated bounce"), 1000);
      setTimeout(function() {
          $(".pf-detail").removeClass("animated bounce");
      }, 1000);

    }

/*
    function toggleCard(e) {

        // console.log($(this).data("number"));
        var newThis = $(this);
        var cname = newThis[0].className;
        $("div").data("card", iconID).css({
            "transform": "translateX(0%)",
            "transition": "1s"
        });

        $('*[data-card="' + iconID + '"]').css({
            "transform": "translateX(0%)",
            "transition": "1s"
        });

        // var iconID = $(this).data("number");
        // var test = $('*[data-card="'+ i + '"]');
        // console.log(test);
      /*
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

        // e.preventDefault();
    }
*/
    icon.on("click", toggleOpen);
    // icon.mouseup(showCard);




});
