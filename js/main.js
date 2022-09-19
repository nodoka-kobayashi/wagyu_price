// // ボタンをクリックしたらサイトの上まで戻る
// $("#page-top").click(function() {
//   $("html, body").animate({
//       scrollTop: 0}, 500);
//   return false;
// });

$(function() {
  $('#page-top').click(function() {
    var href = $(this).attr('href');
    var target = $(href == '#' || href == '' ? 'html' : href);
    var position = target.offset().top;
    var speed = 500;
    $('html, body').animate({
      scrollTop: position,
    }, speed, 'swing');
    return false;
  });
});