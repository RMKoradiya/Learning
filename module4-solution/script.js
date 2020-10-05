(function(){

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // Loop over the names array and say either 'Hello' or "Good Bye"
  for (var i = 0; i < names.length; i++) {
    
    // Read first letter and convert to lowercase
    var firstLetter = names[i].charAt(0)
    firstLetter = firstLetter.toLowerCase();

    // Call "Good Bye" or "Hello" method based on first letter of the name
    if (firstLetter == "j") {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }

})();

