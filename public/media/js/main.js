// Collapse / un-collapse workspace blocks
$( ".toggle-btn" ).bind('click',function() {
  var toggle = $(this);
  var ref = toggle.data('ref');

  if (toggle.hasClass('fa-chevron-down')){
    toggle.removeClass('fa-chevron-down')
     .addClass('fa-chevron-left');
    $(".toggle-"+ref).slideUp();
  }
  else{
    toggle.removeClass('fa-chevron-left')
     .addClass('fa-chevron-down');
    $(".toggle-"+ref).slideDown();
  }
});


// Tabs for block icons
$(function () {
  $("#sidebar-left").tabs();
});













/*
$("ol.simple_with_drop").sortable({
  group: 'no-drop',
  handle: 'i.icon-move',
  onDragStart: function (item, container, _super) {
    // Duplicate items of the no drop area
    if(!container.options.drop) {
      item.clone().insertAfter(item);
    }
    _super(item);
  }
});
$("ol.nested_with_switch-no-drop").sortable({
  group: 'no-drop',
  drop: false
});
$("ol.simple_with_no_drag").sortable({
  group: 'no-drop',
  drag: false
});

*/



var oldContainer;
$("ul.workspace").sortable({
  group: 'nested',
  afterMove: function (placeholder, container) {
    if(oldContainer !== container){
      if(oldContainer) {
        oldContainer.el.removeClass("active");
      }
      container.el.addClass("active");
      
      oldContainer = container;
    }
  },
  onDrop: function (item, container, _super) {
    container.el.removeClass("active");
    _super(item);
  }
});



