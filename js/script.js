/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */




$(".bar").each(function () {
  $(this)
    .find(".bar-inner")
    .animate(
      {
        width: $(this).attr("data-width"),
      },
      2000
    );
});

