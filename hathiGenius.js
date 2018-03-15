//Bengtson-Fu 13 3 |\| ( ][ 5 () |\| - |= |_|!!!!!!

/*created by Jason Bengtson, MLIS, MA : Available under Creative Commons non-commercial share alike open source license*/

/*Bengtson-Fu is the best Kung Fu!!!*/

/*Built for Kansas State University -- Go Wildcats!!!*/
/*hathiGenius-----an app built to determine availability of hathitrust materials*/
function rewrite(datareturn) {
	$.each( datareturn, function( i, val ) {
		console.log(val);
		datext="Please Check Availability With the View It Tab";
		if(val.article.indexOf("StatusAvailable")>0) {
			datext="Available Online";
		}
		$("#"+val.ident).find("p.EXLResultAvailability>em").attr("class","").addClass(val.article).text(datext);
	});
}

$(document).ready( function() {
	
	var datasink=new Array();
	x=0;
	$("tr.EXLResult").each(function(i, obj) {
		var linko=$(obj).find(".EXLResultTitle>a").attr("href")+"";
		var secondtest=$(obj).find(".EXLResultTitle>a").attr("onclick")+"";
		
		if(linko.indexOf("hdl.handle")>-1 && secondtest.indexOf("hathi")>-1) {
			$(obj).find("p.EXLResultAvailability>em").text("Checking Holdings . . .");
			$(obj).find("p.EXLResultAvailability>em").attr("class","").addClass("EXLResultStatusMaybeAvailable");
			datasink[x]=new Object();
			var uriarray = linko.split( '/' );
			sizeit=uriarray.length-1;
			disuri=uriarray[sizeit];
			isit=disuri.indexOf("?");
			if(isit>-1) {
				disuri=disuri.substring(0,isit);

			}
			datasink[x].article=disuri;
			datasink[x].ident=$(obj).attr("id");
			
			x++;
		}
		
	});

		$("div.EXLResult").each(function(i, obj) {
			var tooler=Math.floor((Math.random() * 99000) + 10000);
			$(obj).attr("id","newid"+tooler);
		var linko=$(obj).find(".EXLResultTitle>a").attr("href")+"";
		var findamatic=$(obj).find(".EXLSummaryContainer>a").attr("name")+"";
		var secondtest=$(obj).find(".EXLResultTitle>a").attr("onclick")+"";
		
		if((linko.indexOf("hdl.handle")>-1 && secondtest.indexOf("hathi")>-1) || (findamatic.indexOf("hathi_trust")>-1)) {
			$(obj).find("p.EXLResultAvailability>em").text("Checking Holdings . . .");
			$(obj).find("p.EXLResultAvailability>em").attr("class","").addClass("EXLResultStatusMaybeAvailable");
			datasink[x]=new Object();
			findamatic = findamatic.replace('TN_hathi_trust','');
			
			datasink[x].article=findamatic;
			datasink[x].ident=$(obj).attr("id");
			
			x++;
		}
		
	});
	
	var sendo=JSON.stringify(datasink);
		
$.getScript("[[[The base url to access hathilookup]]]?datasink="+sendo, function() {
			datareturn=JSON.parse(datareturn);
			rewrite( datareturn );
		});
});
