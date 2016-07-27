// Note: See http://blog.garstasio.com/you-dont-need-jquery/ and http://youmightnotneedjquery.com/ for JS commands that don't require jQuery
$(document).ready(function(){
    $('#sections').fullContent({ 
      stages: 'div', 
      mapPosition: [{v: 1, h: 1}, {v: 1, h: 2}, {v: 1, h: 3}], 
      stageStart: 1, 
      speedTransition: 800, 
      idComplement: 'page_', 
      ease: 'easeOutQuad' });
});
