var ENGLISH_WORDS = [
    "conan the barbarian",
    "the terminator",
    "harry potter and the order of the pheonix"
  ];
  
  function randomWord() {
    return ENGLISH_WORDS[Math.floor(Math.random() * ENGLISH_WORDS.length)];
  }
  
  export { randomWord };
  