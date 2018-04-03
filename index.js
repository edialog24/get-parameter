// getParameter
//
// Use: Returns query string values in JavaScript
//
// var productId = getParameter('id');
//
// Returns: value
// ------------------------------------------------------------

module.exports = function getParameter(name, url){
  'use strict';
  var queryDict = {};
  if(!url) {
    url = location;
  }
  var queries = url.search.substr(1).split('&');
  for (var i=0; i<queries.length; i++) {
    queryDict[queries[i].split('=')[0]] = decodeURIComponent(queries[i].split('=')[1]);
  } 

  // if name specified, return that specific get parameter
  if (name) {
    return queryDict.hasOwnProperty(name) ? decodeURIComponent(queryDict[name].replace(/\+/g, ' ')) : '';
  }

  return queryDict;
};
