const dictionary = [
  "internationalization",
  "localization",
  "accessibility",
  "automatically"
];
//function to loop through the dictionary array and abbreviate each string
const abbreviateDictionary = function (arr) {
  var output = [];
  for (var i = 0; i < dictionary.length; i++) {
    output.push(
      dictionary[i][0] + (dictionary[i].length - 2) + dictionary[i].slice(-1)
    );
  }
  console.log(output);
  // I could only manage to return one boolean statement, so I created a new array to push each true/false answer to
  var unique = [];
  for (var j = 0; j < output.length; j++) {
    for (var k = 3; k < output.length; k++) {
      if (output[j] === output[k]) {
        unique.push("false");
      } else unique.push("true");
    }
  }
  console.log(unique);
};
console.log(abbreviateDictionary());

