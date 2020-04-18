$(function(){
  function buildHTML(message){
    var img_src = ``;
    if( message.image ){
      img_src = `<img src=${message.image}>`;
    }
    var html = `<div class="main-chat__message-list__message">
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
    })
    .fail(function(){
    })
  });
});
