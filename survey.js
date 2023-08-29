const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? Or nickname if you prefer? ', (name) => {
  rl.question('What an activity you like doing? ', (activity) => {
    rl.question('What do you listen to while you do that? ', (music) => {
      rl.question('Which meal is your favorite? ex: breakfast, brunch, dinner: ', (meal) => {
        rl.question('What is your favorite thing to eat during that meal? ', (food) => {
          rl.question('What sport is your #1 favorite? ', (sport) => {
            rl.question('What are you amazing at? ', (superpower) => {
              console.log(`${name} loves listening to ${music} while ${activity}, munching on ${food} for ${meal}, prefers ${sport} over any other sport, and is super great at ${superpower}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});