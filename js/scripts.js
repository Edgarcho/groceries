$(document).ready(function () {
    $("form#checkList").submit(function (event) {
        var toAdd = $("input[name=items]").val();
        $(".listResult").append("<li class='item'>" + toAdd + "</li>");
        event.preventDefault();
    });
});







//$(document).ready(function() {
//  $("#checkList").submit(function() {
//    var toAdd = $("input[name=checkListItem]").val();
//    $(".list").append("<li class="item">" + toAdd + "</li>");
//  });
// });
