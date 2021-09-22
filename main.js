$(".menu-icon").click(() => {
  if ($("#menus").css("max-height") == "0px") {
    $("#menus").css("max-height", "500px");
  } else {
    $("#menus").css("max-height", "0px");
  }
});
