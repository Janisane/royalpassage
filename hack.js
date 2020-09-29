const Discord = require ("discord.js")

exports.run = function(client, message, args)  {

let discord = client.emojis.get("715175675316797500")
let loading = client.emojis.get("706127117359775825")
let patlama = client.emojis.get("706146955998396537")
  
var gorkem = message.mentions.users.first(); 

if (!gorkem) return message.channel.send("Lütfen Hacklenmek İçin Birini Etiketleyiniz ")

message.channel.send(` <a:loading:706127117359775825> **${gorkem.tag}** *hackleniyor...* `).then(async msg => { // <@${message.mentions.members.first(.user.id}>}
    setTimeout(() => {
        msg.edit(`${discord} **Discorduna giriş yapılıyor..** `);
    }, 3000);
    setTimeout(() => {
        msg.edit(`${loading} **IP Adresi Bulunuyor..** `);
    }, 5000);
    setTimeout(() => {
        msg.edit(` ${loading} *DM kutusu kontrol ediliyor..* `);
    }, 7000);
    setTimeout(() => {
        msg.edit(` ${loading} Hesabına ve etiketine virüs bulaştırılıyor.. **${gorkem.tag}** `);
    }, 9000);
  setTimeout(() => {
        msg.edit(`${patlama} ${gorkem.tag} **Kullanıcısı başarıyla hacklendi!**`);
    }, 11000);
  setTimeout(function() {
//message.author.send(etiketlenenkisi + "Hacklendi e-posta ve şifre:" + etiketlenenkisi + "@gmail.com:1234Aa**")
}, 13000);
});
};

exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: ['hack', 'hekle'], 
  permLevel: 0 
};

exports.help = {
  name: 'hackle', 
  description: 'Etiketlediğiniz Kişiyi Hackler', 
  usage: 'hackle <@kişi>'
  }