$(function(){
  function buildHTML(message){
    var img_src = ``;
    if( message.image ){
      img_src = `<img src=${message.image}>`;
    }
    var html = `<div class="main-chat__message-list__message" data-message-id=${message.id}>
                  <div class="main-chat__message-list__message__user-info">
                    <div class="main-chat__message-list__message__user-info__name">
                      ${message.user_name}
                    </div>
                    <div class="main-chat__message-list__message__user-info__time">
                      ${message.created_at}
                    </div>
                  </div>
                  <div class="main-chat__message-list__message__post-text">
                    ${message.content}
                  </div>
                  ${img_src}
                </div>`;
    return html;
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.main-chat__message-list').append(html);
      $('.main-chat__message-list').animate({ scrollTop: $('.main-chat__message-list')[0].scrollHeight});
      $('.main-chat__message-form__window__message').val('');
      $('.main-chat__message-form__window__mask__image--hidden').val('');
      $('.main-chat__message-form__window__submit').prop('disabled',false);
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
      $('.main-chat__message-form__window__submit').prop('disabled',false);
    })
  });

  var reloadMessages = function() {
    var last_message_id = $('.main-chat__message-list__message:last').data("message-id");
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages){
      var insertHTML = '';
      $.each(messages, function(i, message){
        insertHTML += buildHTML(message);
      });
      $('.main-chat__message-list').append(insertHTML);
      if( messages.length !== 0 ){
      }
    })
    .fail(function(){
      alert('error');
    });
  };

  setInterval(reloadMessages, 7000);
});
