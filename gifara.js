const request = require('request-promise-native');
const Discord = require("discord.js")
exports.run = async (client, message, args) => {
  try {
    if (args.length < 1) {

      return message.reply("**Doğru Kullanım**: .gif <aranacak gif>");
    }

    let options = {
      url: 'http://api.giphy.com/v1/gifs/search',
      qs: {
        q: encodeURI(args.join('+')),
        api_key: 'dc6zaTOxFJmzC',
        limit: 10,
        offset: 0
      },
      json: true
    };

    let response = await request(options);

    if (response.data.length) {
      const embed = new Discord.RichEmbed()
      .setColor(client.renk)
      .setTitle(`GIF bulundu: ${args.join(' ')}`.slice(0, 256))
      .setImage(response.data[Math.floor(Math.random() * response.data.length)].images.original.url)
      message.channel.send(embed).catch(e => {
        console.log(e);
        message.channel.send("API hatası")
      });
    }
    else {
      const cvp = new Discord.RichEmbed()
       .setColor(client.renk)
       .setTitle("Aradığınız GIF bulunamadı :(")
       message.channel.send(cvp)
    }
  }
  catch (e) {
    if (e.response) {
      return 
    }
    console.log(e);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['gif'],
  permLevel: 0
};

exports.help = {
  name: 'gifara',
  description: "Belirttiğiniz kelime ile ilgili gifleri Giphy'da aratır.",
  usage: '+gif <aranacak gif>'
};