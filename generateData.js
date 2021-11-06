var faker = require('faker');

var database = { stocks: [] };

for (var i=1; i<=100; i++) {
  database.stocks.push({
    id: i,
    stockName: faker.random.words(),
    quantity: parseInt(Math.random()*100)
  });
}

console.log(JSON.stringify(database));