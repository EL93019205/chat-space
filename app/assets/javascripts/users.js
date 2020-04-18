$(function(){
  function appendUser(user){
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${user.name}</p>
                  <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
                </div>`
    $("#user-search-result").append(html)
  }

  function appendErrMsgToHTML(msg){
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${msg}</p>
                </div>`
    $("#user-search-result").append(html)
  }

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
        users.forEach(function(user){
          appendUser(user);
        });

      }
      else if(input.length == 0){
        return false;
      }
      else{
        appendErrMsgToHTML("ユーザーが見つかりません");
      }
    })
    .fail(function(){
      alert("通信エラーです。ユーザーが表示できません。");
    });
  });

  $(document).on('click', ".chat-group-user__btn--add", function(){
  });
});
