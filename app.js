console.log("It works");

$(document).ready(function () {
  $(".submit").click(function (event) {
    event.preventDefault();
    console.log("clicked");

    var name = $(".name").val();
    var email = $(".email").val();
    var subject = $(".subject").val();
    var message = $(".message").val();
    var statusElm = $(".status");
    statusElm.empty();

    if (email.length > 5 && email.includes("@") && email.includes(".")) {
      statusElm.append("<div>email valid</div>");
    } else {
      event.preventDefault();
      statusElm.append("<div>email not vaild</div>");
    }

    if (subject.length >= 2) {
      statusElm.append("<div>Subject is valid</div>");
    } else {
      event.preventDefault();
      statusElm.append("<div>Subject not vaild</div>");
    }
  });
});
