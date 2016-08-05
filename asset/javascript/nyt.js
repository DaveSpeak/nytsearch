

var searchURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=8aaababbcb3b4a1090ba37660f62ff69"; 

// PARAMETERS FOR SEARCH
var searchTerm = "";
var numRecords = 0;
var startYear = 0;
var endYear = 0;


function SEARCH(){


	$.ajax({url: queryURL, method: "GET"})
		.done(function(INFORMATION) {