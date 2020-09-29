const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

module.exports = client => {
  client.owners = [`358262932791885824`, `482484704004669440`]
  var durum = [
    //` ${client.guilds.size} Sunucu | ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Kullanıcı`, 
   // ` GörkemStyle#0001`,
    `🔥 .yardım | .help`,
    `✨ Moderasyon ・Kurulum ・ Eğlence ・Koruma ・Gif `,
  //`Bakımda.`,
  ];
  setInterval(function() {
    var random = Math.floor(Math.random()*(durum.length));
    client.user.setActivity(`${durum[random]}`, { type: "PLAYING"}); 
    //LISTENING = DİNLİYOR
    //WATCHING = İZLİYOR
    //PLAYING = OYNUYOR 
  }, 5000);
  //client.guilds.forEach(m=> { console.log(`${m.id} | ${m.name}`) })
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Bot aktifleşti ve komutlar yüklendi.`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${client.user.username} ismi ile giriş yapıldı.`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Hizmete başladım!`);
};

