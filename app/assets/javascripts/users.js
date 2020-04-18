$(function(){
  $("#user-search-field").on('keyup', function(){
    let input = $("#user-search-field").val();
    $.ajax({
      type: "GET",
      url: "/users",
      data: { keyword: input},
      dataType: "json"
    })
    .done(function(users){
      $("#user-search-result").empty();

      if(users.length !== 0){
      }
      else if(input.length == 0){
      }
      else{
      }
    })
    .fail(function(){
    });
  })
});
