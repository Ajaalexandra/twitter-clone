$(document).ready(function(){
    var characterCount = 140;


    $(".tweet-compose").on("click", function(){
        $(this).css("height", "5em");
        $(".hide-element").removeClass();
    })

    $(".tweet-compose").keyup(function(){
        var length = $(this).val().length;
       
        var characterCount = 140 - length;
        $("#char-count").text(characterCount);

        if(characterCount <= 10){
            $("#char-count").css("color", "red");
        }
        else if(characterCount > 10){
            $("#char-count").css("color", "black");
        }

        if(characterCount <= 0){
            $(".button").attr('disabled','disabled');
        }

        if(characterCount > 0){
            $(".button").removeAttr('disabled','disabled'); 
        }
    })

$(".button").on('click', function(){
    var tweet = $(".tweet-compose").val();
    var $tweet = $('.tweet').first().clone()

   $tweet.find('.tweet-text').text(tweet)
    $tweet.find('.fullname').text('Aja Cederberg')
    $tweet.find('.username').text('@aja')
    $tweet.find('.avatar').first().attr('src', 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/18557087_10211238482951392_1655590419169456161_n.jpg?oh=432dddbf3a9d0293674140e52e81ff22&oe=5A1E5466');



    $tweet.mouseenter(function() {
        $(this).find('.tweet-actions').fadeIn(250)
      });
      $tweet.mouseleave(function() {
        $(this).find('.tweet-actions').fadeOut(250);
      });
      $tweet.on('click', function() {
        $(this).find('.stats').fadeIn(250)
      });
      $tweet.off('click', function() {
        $(this).find('.stats').fadeOut(250);
      });



$('#stream').prepend($tweet);

})

$('.tweet-action').hide();
$(".tweet-text").mouseenter(function() {
  $(this).parent().find('.tweet-actions').fadeIn(250)
});

$('.tweet-text').mouseleave(function() {
  $(this).parent().find('.tweet-actions').fadeOut(250)
});

$('.stats').hide();
$('.tweet-text').on('click', function() {
  $(this).parent().find('.stats').fadeIn(250)
});
$('.tweet-text').off('click', function() {
  $(this).parent().find('.stats').fadeOut(250)
});








































});