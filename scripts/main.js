$(document).ready(function () {
  $(".drop_down").css('visibility', 'hidden');

  $("#contact_button").mouseleave(() =>{
    $(".drop_down").css('visibility', 'hidden');
    $(".drop_down").mouseleave(()=>{
      $(".drop_down").css('visibility', 'hidden');

    })
  })


  $("#contact_button").mouseover(() =>{
    $(".drop_down").mouseover(()=>{
      $(".drop_down").css('visibility', 'visible');

    })
    $(".drop_down").css('visibility', 'visible');

  })

});
