$( document ).ready( function() {
  $("th, td").each(function(i,el) {
    var scope = $(el).attr("scope");
    var headers = $(el).attr("headers");
    var indexmatch = i;
    var jcell = $(el);
    if (scope == "col") {
      $(el).parents("table").find("tbody tr").each(function(i,el){
        $(this).find("td, th").each(function(i,el) {
          if (indexmatch == i) {
		    console.log("MATCH>>>>>>>>>>>>>>>");
			console.log(jcell);
			console.log($(el));
            $(el).mouseover(function(){$(this).addClass("highlight");});
            $(el).mouseout(function(){$(this).removeClass("highlight");});
            $(el).mouseover(function(){jcell.addClass("highlight");});
            $(el).mouseout(function(){jcell.removeClass("highlight");});
          }
        });
      });
    }
    if (scope == "row") {
      $(el).parents("tr").each(function(i,el){
        $(this).find("td").each(function(i,el) {
            $(el).mouseover(function(){$(this).addClass("highlight");});
            $(el).mouseout(function(){$(this).removeClass("highlight");});
            $(el).mouseover(function(){jcell.addClass("highlight");});
            $(el).mouseout(function(){jcell.removeClass("highlight");});
       });
      });
    }

    if (headers) {
        var headersstr = String(headers);
        var headersar = headersstr.split(' ');
        jcell.mouseover(function(){$(this).addClass("highlight");});
        jcell.mouseout(function(){$(this).removeClass("highlight");});
        for (var i = 0; i < headersar.length; i++) {
            var idref = headersar[i];
            if(idref) {
            console.log(headersar[i]);
            $('#'+idref).each(function(index,el) {
            jcell.mouseover(function(){$(el).addClass("highlight");});
            jcell.mouseout(function(){$(el).removeClass("highlight");});
            });
            }
        }
    };
  });

});

