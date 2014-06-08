'use strict';
 
app.factory('Post', function ($resource) {
  return $resource('https://boiling-fire-2316.firebaseio.com/posts/:id.json');
});