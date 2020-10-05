// IIFE having Hello object exposed to window
(function(window){
  var speakWord = "Hello";

  // Hello object with speak method
  var helloSpeaker = {};
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  }

  window.helloSpeaker = helloSpeaker;

})(window);
