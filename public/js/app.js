$(document).ready(function(){
  // $('li.collection-item .item-text').click(function(){
  //   var context =   $(this).closest('.collection-item');
  //   $('li.collection-item').find('.invisble-content').not(context.find('.invisible-content')).hide();

  //   context.find('.invisible-content').toggle("slow");
  // })

  $('a.btn-flat').click(function(){
    $('li.collection-item .invisible-content').hide("slow");
  })

  $( "ul.collection" ).draggable();
  $( ".card" ).draggable();
});