// IIFE having Good Bye object exposed to window
(function(window){
  var speakWord = "Good Bye";

  // Good bye object with speak method
  var byeSpeaker = {};
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  }

  window.byeSpeaker = byeSpeaker;

})(window);
