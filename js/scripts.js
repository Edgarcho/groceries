function test(word){
  var char = word.charAt(0).toUpperCase();
  var subWord =  word.substring(1);
  return char.concat(subWord);
}
$(document).ready(function () {
  var myInputIds = ['apple', 'egg','milk'];
  var productsName = [];
  var productsUpperCase = [];
  var productsUpperCaseSort = [];
    $("form#checkListForm").submit(function (event) {
        event.preventDefault();
        myInputIds.forEach(function(InputId){
        productsName.push($('#'+InputId).val());
      });
     productsUpperCase = productsName.map(function(word){
       return test(word);
     });
     var productsUpperCaseSort = productsUpperCase.sort();
      alert(productsUpperCaseSort);
   });
   productsUpperCaseSort.forEach(function(item){
     $("#listResult").append("<li class='item'>" + item + "</li>");
   });

});


// var list = [];
// list.push(toAdd);
// event.preventDefault();
// });
// $("button").click(function(){
// $(".listResult").append("<li class='item'>" + toAdd + "</li>");
// $(".listResult").show();
// });
// });
