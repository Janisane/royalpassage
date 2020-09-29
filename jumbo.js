const discord = require("discord.js");
const ayarlar = require('../ayarlar.json');
const snek = require("snekfetch");
const twemoji = require("twemoji");
const fs = require("fs");

exports.run = async (client, message, args) => {
  if (message.author.bot || message.channel.type === "dm") return;
  if (!args[0]) return message.channel.send(`Jumbo komutunu kullanmak için emoji gerekiyor.\n(\`${ayarlar.prefix}jumbo <emoji>\`)`).then(m => {m.delete(5000)})
  try {
    const emote = discord.Util.parseEmoji(args[0]);

    if (emote.animated === true) {
      const URL = `https://cdn.discordapp.com/emojis/${emote.id}.gif?v=1`;
      const { body: buffer } = await snek.get(`${URL}`);
      const toSend = fs.writeFileSync("emote.gif", buffer);
      message.channel.send({ file: "emote.gif" });
    } else if (emote.id === null) {
      const twemote = twemoji.parse(args[0]);
      const regex = /src="(.+)"/g;
      const regTwemote = regex.exec(twemote)[1];
      const { body: buffer } = await snek.get(`${regTwemote}`);
      const toSend = fs.writeFileSync("emote.png", buffer);
      await message.channel.send({ file: "emote.png" });
    } else {
      const URL = `https://cdn.discordapp.com/emojis/${emote.id}.png`;
      const { body: buffer } = await snek.get(`${URL}`);
      const toSend = fs.writeFileSync("emote.png", buffer);
      message.channel.send({ file: "emote.png" });
    }
  } catch (error) {
    if (error.message === "Hata") {
     message.channel.send(`Bu emojiyi bulamıyorum, lütfen tekrar dene.`).then(m => {m.delete(5000)})
    }
  }
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: "jumbo",
  description: "İstediginiz emojinin büyük halini gösterir.",
  usage: ".jumbo <emoji>"
};
   