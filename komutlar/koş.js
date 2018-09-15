const Discord = require('discord.js');
const weather = require('weather-js');

exports.run = (client, message, params) => {
  message.channel.send(':clock1: | Fotoğraf Yükleniyor..')
  koş1 = "https://media.giphy.com/media/3N0fFF5xxcZrO/giphy.gif"; koş2 = "https://media.giphy.com/media/1iTH1WIUjM0VATSw/giphy.gif"; koş3 = "https://media.giphy.com/media/7kn27lnYSAE9O/giphy.gif"; koş4 = "https://media.giphy.com/media/3oriOh6akxc2f5tyTu/source.gif"; koş5 = "https://media.giphy.com/media/3oriO5b7GIOdJu6dPy/source.gif"; koş6 = "https://media.giphy.com/media/kEKcOWl8RMLde/giphy.gif";
    number = 3,2,4,1,5,6
    var random = Math.floor(Math.random() * (number - 1 + 1)) + 1; 
    switch(random) {
        case 1: message.channel.send({ files: [koş1] }); message.channel.bulkDelete(1); break;
        case 2: message.channel.send({ files: [koş2] }); message.channel.bulkDelete(1); break;
        case 3: message.channel.send({ files: [koş3] }); message.channel.bulkDelete(1); break;
        case 4: message.channel.send({ files: [koş4] }); message.channel.bulkDelete(1); break;
        case 5: message.channel.send({ files: [koş5] }); message.channel.bulkDelete(1); break;
        case 6: message.channel.send({ files: [koş6] }); message.channel.bulkDelete(1); break;
};
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['koş'],
  permLevel: 0
};

exports.help = {
  name: 'koş',
  description: 'Koş Komutu İle Arkdaşlarından kaç.',
  usage: 'koş'
};
