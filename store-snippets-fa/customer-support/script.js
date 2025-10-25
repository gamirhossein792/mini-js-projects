$(() => {
  $("main > button").click(() => {
    $("main > div").toggleClass("show-support");
    let icon = $("main>button>i");
    console.log(icon);

    if (icon.hasClass("fa-times")) {
      icon
        .removeClass("fa fa-times wp-openchat-icon")
        .addClass("fa-solid fa-headphones");
    } else {
      icon
        .removeClass("fa-solid fa-headphones")
        .addClass("fa fa-times wp-openchat-icon");
    }
  });
});
