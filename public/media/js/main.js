// Collapse / un-collapse workspace blocks
function wsNesting () {
  $( ".toggle-btn" ).unbind('click');
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
}


// Tabs for block icons
$(function () {
  $("#sidebar-left").tabs();
});


// Drag and drop
$("ul.tab-widgets").sortable({
  group: 'no-drop',
  drop: false,
  onDragStart: function (item, container, _super) {
    if(!container.options.drop) {
      item.clone().insertAfter(item);
      item.children(".casp-heading").show();
      item.children(".widget-title").hide();
      item.addClass("casp-block");
      item.removeClass("btn");
      item.children("ul.casp-block").show();
    }
    _super(item);
  }
});
$("ol.simple_with_no_drag").sortable({
  group: 'no-drop',
  drag: false
});


// Drag and drop - Nesting workspace
var oldContainer;
$("ul.workspace-blocks").sortable({
  group: 'no-drop',

  onDragStart: function (item, container, _super) {
    // Duplicate items of the no drop area
    if(!container.options.drop) {
      item.clone().insertAfter(item);
    }
    _super(item);
  },
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

    //container.$(".casp-heading").addClass("yo");
    _super(item);
  },
  onCancel: function (item) {
    item.sortable('cancel');
  }
});


// Load test object into workspace
function update() {
  var source = $("#hb-workspace").html();
  var template = Handlebars.compile(source);
  $("#workspace-block-1").html('').append(template(theData));
}
$(function() {
  update();
  wsNesting();
});