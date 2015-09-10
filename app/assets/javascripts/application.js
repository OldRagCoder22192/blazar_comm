// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require turbolinks
//= require_tree .

 // tabbed content
    // http://www.entheosweb.com/tutorials/css/tabs.asp
    $(".code-tab_content").hide();
    $(".code-tab_content:first").show();

  /* if in tab mode */
    $("ul.code-tabs li").click(function() {
		
      $(".code-tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();		
		
      $("ul.code-tabs li").removeClass("active");
      $(this).addClass("active");

	  $(".code-tab_drawer_heading").removeClass("d_active");
	  $(".code-tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
	  
    });
	/* if in drawer mode */
	$(".code-tab_drawer_heading").click(function() {
      
      $(".code-tab_content").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
	  
	  $(".code-tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");
	  
	  $("ul.code-tabs li").removeClass("active");
	  $("ul.code-tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });
	
	
	/* Extra class "tab_last" 
	   to add border to right side
	   of last tab */
	$('ul.code-tabs li').last().addClass("code-tab_last");
	