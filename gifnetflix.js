const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');
var prefix2 = ayarlar.prefix2;

exports.run = (client, message, args, tools) => {
  if (message.author.bot || message.channel.type === "dm") return;

let gorkem = client.emojis.get("706137105688035398")
let netflix = client.emojis.get("714940172180914318")

  var gifler = [
"https://cdn.discordapp.com/avatars/604048704038764569/a_a35ecb5d134dfba1b381646ba7f5b1d4.gif",
"https://data.whicdn.com/images/307298615/original.gif",
"https://www.besosyal.com/wp-content/uploads/2019/09/the-umbrella-academy-en-iyi-netflix-dizileri.gif",
"https://img-s2.onedio.com/id-5d7a2f181d5712642e253c4d/rev-0/w-635/listing/f-jpg-gif-webp-webm-mp4/s-7496ba3945caf230d561d14565f917f31307baf8.gif",
"https://www.neoldu.com/d/other/the-rain-dizisi-hakkinda-.gif",
"https://data.whicdn.com/images/321120956/original.gif",
"https://cdn.discordapp.com/avatars/674549259537743883/a_7a88d383f99fd4a85eb5e20fe93b1f25.gif",
"https://cdn.discordapp.com/attachments/700292105615966262/714169635217473576/stranger_things_gifs_39.gif",
"https://www.wannart.com/wp-content/uploads/2018/01/original-1.gif",
"https://ideesdefilm.files.wordpress.com/2018/01/dark-4.gif",
"https://cdn.discordapp.com/attachments/700292105615966262/714426247689666620/riverdale_8.gif",
"https://cdn.discordapp.com/attachments/700292105615966262/714175978607345734/carlaahh_10.gif",
"https://cdn.discordapp.com/attachments/700292105615966262/714656922254573618/giphy_1.gif",
"https://www.serieously.com/wp-content/uploads/2019/03/9094db8e4718be3cee91013f0e90d308.gif",
"https://i.pinimg.com/originals/07/a5/c3/07a5c337da6b9517e025ade4e8bd979d.gif",
"https://cdn.discordapp.com/attachments/700292105615966262/714175892565262417/carlaahh_3.gif",
"https://66.media.tumblr.com/77eb25c3c5578b894a5a699358d41e69/6458f3e4aa391426-ef/s540x810/f46c326f059b035edf806b18f61e2af8ccd9c561.gifv",
"https://66.media.tumblr.com/b9dda300839ccbe38ca6dc164ba108ca/26e1d67626c47313-22/s540x810/4ad941f364c9f129c0a2d29dbd1eeb2f504549eb.gifv",
"https://cdn.discordapp.com/attachments/700292105615966262/714169563738275910/stranger_things_gifs_3.gif",
"https://data.whicdn.com/images/309897686/original.gif",
"https://cdn.discordapp.com/attachments/700292105615966262/714426330518781962/riverdale_6.gif",
"https://data.whicdn.com/images/336586257/original.gif",
"https://www.serieously.com/wp-content/uploads/2019/06/tumblr_pnsnbq5lhn1y3t4xzo1_400.gif",
"https://data.whicdn.com/images/337302131/original.gif",
"https://cdn.discordapp.com/attachments/700292105615966262/714540780391497759/lucifer2.gif",
"https://66.media.tumblr.com/33d9107429d305f30a9a7e0315c46224/tumblr_pbik3rzWkV1qgeenzo3_500.gifv",
"https://66.media.tumblr.com/412278b7ccda863c9181a05fb85d5ee9/b04649acbdfad8f3-aa/s640x960/1ecac634052717ca7b9b51e1bcd0aef1a99cc603.gif",
"https://66.media.tumblr.com/48583234d61080203cf8f14033370cc7/tumblr_p4hfrabRhL1s26gy6o3_500.gifv",
"https://thumbs.gfycat.com/HeartyClearAnnashummingbird-size_restricted.gif",
"https://i.pinimg.com/originals/1c/aa/d5/1caad57de9e69f5fb651d9aad6339e21.gif",
"https://i.pinimg.com/originals/bb/8f/dc/bb8fdced09c66df23615859b9d3a9cf9.gif",
"https://66.media.tumblr.com/7e32bd0b64d0a1a92c9c87d08d30a000/8f076fa73d0c7cb8-32/s500x750/83c3739eaf78fc69a73be0df4a42594499345784.gifv",
"https://i.gifer.com/Ge5E.gif",
"https://media.giphy.com/media/UoY4BD6KC7KfzcA0nY/giphy.gif",
"https://cdn.discordapp.com/attachments/700292105615966262/714169357797949602/stranger_things_gifs_17.gif",
"https://cdn.discordapp.com/attachments/700292105615966262/714169305029148793/stranger_things_gifs_13.gif",
"https://cdn.discordapp.com/attachments/700292105615966262/714426272532529202/riverdale_3.gif",
"https://66.media.tumblr.com/397a66cb9e193bab1612ee080232ba87/c4f572f671738912-ee/s540x810/57fa21512fe15893fcec08de672d8a23aac6dfe5.gifv",
"https://66.media.tumblr.com/10fa56b1f306e62af7b7bab6f81d47c1/5e71dd8f762189a3-93/s500x750/9f9da98275394604140b570b15927d0afce4d7e7.gifv",
"https://66.media.tumblr.com/023a8128fffaa210e8c5fcb14df2af69/710aeb8fa3f05059-02/s250x400/503174ab461912809ce35a47b31a2fb696d8a974.gifv",
"https://cdn.discordapp.com/attachments/700292105615966262/714175814731694090/carlaahh_16.gif",
"https://66.media.tumblr.com/59b98d495fcff467989a6187826226da/tumblr_p4zo3iW8jW1vekp86o1_400.gifv",
"https://cdn.discordapp.com/attachments/700292105615966262/714169684764786688/stranger_things_gifs_11.gif",
"https://cdn.discordapp.com/attachments/700292105615966262/714169363078447124/stranger_things_gifs_41.gif",
"https://cdn.discordapp.com/avatars/646353134934818828/a_b9dabddb4155dda4e07165152a584324.gif",
"https://cdn.discordapp.com/attachments/700292105615966262/714885133655736320/tumblr_30e1691012246d6e90577b712e846d46_31cab1fd_640.gif",
"https://cdn.discordapp.com/attachments/700292105615966262/714169543466942504/stranger_things_gifs_25.gif",
"https://blog.cambly.com/tr/wp-content/uploads/sites/5/2019/08/insatiable.gif"
  ];
  
  let resimler = gifler[Math.floor(Math.random() * gifler.length)];
  var kullanıcı = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );
  if (!kullanıcı) {
    const gorkemEmb = new Discord.RichEmbed()
    //.setDescription(`<@${message.author.id}> Tarafından İstendi`)
    .setDescription(` ${netflix}・**Netflix Gif**  `)
      .setColor("RANDOM")
      .setImage(resimler)
    .setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL);
    message.channel.send({ embed: gorkemEmb });
message.delete(3500) 
    return;

  }
};

exports.conf = {
  enabled: true,
  aliases: ['netflix', 'randomnetflixav', 'randomnetflixavatar', 'randomnetflixpp', 'randomn', 'gif!netflix', 'gifnetflix', 'gifnetflix', 'netflixgif'],
  permLevel: 0,
};

exports.help = {
  name: "randomenetflix",
  description: "Resim Attırma.",
  usage: "avt",
};

