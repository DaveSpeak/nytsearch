

var searchURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=8aaababbcb3b4a1090ba37660f62ff69&q="; 

// PARAMETERS FOR SEARCH
var searchTerm = "";
var numRecords = 0;
var startYear = 0;
var endYear = 0;


$('#search').on('click', function SEARCH(){

	searchTerm=$('#searchTerm').val();
	searchURL+=searchTerm;
	numRecords=$('#numRecords').val();
	startYear=$('#startYear').val().trim();
	console.log(startYear);
	searchURL+="&begin_date="+startYear+"0101";
	endYear=$('#endYear').val().trim();
	console.log(endYear);
	searchURL+="&end_date="+endYear+"0101";
	$.ajax({url: searchURL, method: "GET"})
		.done(function(INFORMATION){
			for (i=0;i<numRecords;i++){
			$('#queryResults').append('<h1>'+(i+1)+' '+INFORMATION.response.docs[i].headline.main);
			$('#queryResults').append('<h2>'+INFORMATION.response.docs[i].byline.original);
			$('#queryResults').append('<h4>'+INFORMATION.response.docs[i].section_name);
			$('#queryResults').append('<h4>'+INFORMATION.response.docs[i].pub_date);
			$('#queryResults').append($('<a>').attr('href',INFORMATION.response.docs[i].web_url).html(INFORMATION.response.docs[i].web_url));
			// console.log(INFORMATION.response.docs[i].headline.main);
			// console.log(INFORMATION.response.docs[i].byline.original);
			// console.log(INFORMATION.response.docs[i].section_name);
			// console.log(INFORMATION.response.docs[i].pub_date);
			// console.log(INFORMATION.response.docs[i].web_url);
			// console.log(INFORMATION);
			};
	});
});