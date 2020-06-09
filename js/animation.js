/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
    var images = [
    "close-up-photography-of-eyeglasses-at-golden-hour-690887.jpg",
    "both-hands-stained-with-paints-1161542.jpg",
    "abstract-art-blaze-bonfire-266526.jpg",
      "aaron-burden-6jYoil2GhVk-unsplash.jpg",
      "matt-ragland-02z1I7gv4ao-unsplash.jpg",
      "photo-1509569785882-4c160654309e.jpg",
      "honey-yanibel-minaya-cruz-laORtJZaieU-unsplash.jpg",
      "3618264.jpg",
      "neven-krcmarek-V4EOZj7g1gw-unsplash.jpg",
    ];
    $(function () {
        var i = 0;
        $("#body-header").css("background-image", "url(Assests/" + images[i] + ")");
        setInterval(function () {
            i++;
            if (i == images.length) {
                i = 0;
            }
            $("#body-header").fadeOut("slow", function () {
                $(this).css("background-image", "url(Assests/" + images[i] + ")");
                $(this).fadeIn("slow");
            });
        }, 3000);
    });
