var cowsay = require("cowsay");



var oneLinerJoke = require('one-liner-joke');

  var getRandomJoke = oneLinerJoke.getRandomJoke({
    'exclude_tags': ['dirty', 'racist', 'marriage']
  });
console.log(getRandomJoke.body)

console.log(
  cowsay.say({
    text: getRandomJoke.body,
    e: "❤️❤️ ",
    T: "U ",
  })
);

// or cowsay.think()

