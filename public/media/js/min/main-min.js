$(".toggle-btn").bind("click",function(){var e=$(this),o=e.data("ref");e.hasClass("fa-chevron-down")?(e.removeClass("fa-chevron-down").addClass("fa-chevron-left"),$(".toggle-"+o).slideUp()):(e.removeClass("fa-chevron-left").addClass("fa-chevron-down"),$(".toggle-"+o).slideDown())}),$(function(){$("#sidebar-left").tabs()});var oldContainer;$("ul.workspace").sortable({group:"nested",afterMove:function(e,o){oldContainer!==o&&(oldContainer&&oldContainer.el.removeClass("active"),o.el.addClass("active"),oldContainer=o)},onDrop:function(e,o,a){o.el.removeClass("active"),a(e)}});