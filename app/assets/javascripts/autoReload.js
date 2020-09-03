$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="Chat-main__message-list__box-ru" data-message-id=${message.id}>
          <div class="Chat-main__message-list__box-ru__flex">
            <div class="Chat-main__message-list__box-ru__messages">
              ${message.user_name}
            </div>
            <div class="Chat-main__message-list__box-ru__messages__days">
              ${message.created_at}
            </div>
          </div>
          <div class="Chat-main__message-list__box-ru__messages__days__content">
              ${message.content}
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="Chat-main__message-list__box-ru" data-message-id=${message.id}>
        <div class="Chat-main__message-list__box-ru__flex">
          <div class="Chat-main__message-list__box-ru__messages">
            ${message.user_name}
          </div>
          <div class="Chat-main__message-list__box-ru__messages__days">
            ${message.created_at}
          </div>
        </div>
        <div class="Chat-main__message-list__box-ru__messages__days__content">
          ${message.content}
        </div>
      </div>`
      return html;
    };
  }

  let reloadMessages = function() {

    let last_message_id = $('.Chat-main__message-list__box-ru:last').data("message-id") || 0;
    $.ajax({

      url: "api/messages",

      type: 'get',
      dataType: 'json',

      data: {id: last_message_id}
    })
    .done(function(messages) {
      console.log(messages)
      if (messages.length !== 0) {

        let insertHTML = '';

        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });

        $('.Chat-main__message-list').append(insertHTML);
        $('.Chat-main__message-list').animate({ scrollTop: $('.Chat-main__message-list')[0].scrollHeight});
      }
    })
    .fail(function() {
      alert('error');
    });
  };
  setInterval(reloadMessages, 7000);
});