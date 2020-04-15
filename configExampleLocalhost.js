var Production = {
  url: '',
  port: 3000,
  prodId: function(){return Math.floor(Math.random() * 3) + 1;}
}

var Dev = {
  url: 'http://localhost:',
  port: 3000,
  prodId: function(){return Math.floor(Math.random() * 3) + 1;}
}

export {Dev as Config};