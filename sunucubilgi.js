const Discord = require("discord.js");
const moment = require("moment");
const ayarlar = require("../ayarlar.json");

exports.run = (client, message, params) => {
  if (message.author.bot || message.channel.type === "dm") return;
  const guild = message.guild.id
    var tarih = ''
            if(moment(guild.createdAt).format('MM') === '01') {
                var tarih = `${moment(guild.createdAt).format('DD')} Ocak ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(guild.createdAt).format('MM') === '02') {
                var tarih = `${moment(guild.createdAt).format('DD')} Şubat ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(guild.createdAt).format('MM') === '03') {
                var tarih = `${moment(guild.createdAt).format('DD')} Mart ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(guild.createdAt).format('MM') === '04') {
                var tarih = `${moment(guild.createdAt).format('DD')} Nisan ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(guild.createdAt).format('MM') === '05') {
                var tarih = `${moment(guild.createdAt).format('DD')} Mayıs ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(guild.createdAt).format('MM') === '06') {
                var tarih = `${moment(guild.createdAt).format('DD')} Haziran ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(guild.createdAt).format('MM') === '07') {
                var tarih = `${moment(guild.createdAt).format('DD')} Temmuz ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(guild.createdAt).format('MM') === '08') {
                var tarih = `${moment(guild.createdAt).format('DD')} Ağustos ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(guild.createdAt).format('MM') === '09') {
                var tarih = `${moment(guild.createdAt).format('DD')} Eylül ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(guild.createdAt).format('MM') === '10') {
                var tarih = `${moment(guild.createdAt).format('DD')} Ekim ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(guild.createdAt).format('MM') === '11') {
                var tarih = `${moment(guild.createdAt).format('DD')} Kasım ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(guild.createdAt).format('MM') === '12') {
                var tarih = `${moment(guild.createdAt).format('DD')} Aralık ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
            }
  var cevrimici = message.guild.members.filter(m => m.presence.status == "online").size.toString()
  var bosta = message.guild.members.filter(m => m.presence.status == "idle").size.toString()
  var rahatsizetmeyin = message.guild.members.filter(m => m.presence.status == "dnd").size.toString()
  var cevrimdisi = message.guild.members.filter(m => m.presence.status == "offline").size.toString()
  /*function scottHesap(date) {
        let simdi = new Date();
        let hesaplama = simdi.getTime() - date.getTime();
        let yıl = Math.floor(hesaplama / 31536000000);
        let gün = Math.floor(hesaplama / 86400000);
        let ay = Math.floor(hesaplama / 2628000000);
        //let saat = Math.floor(hesaplama / 3600000);
        //let dakika = Math.floor(hesaplama / 60000);
        return yıl + (yıl == 1 ? " yıl" : " yıl") + " " + ay + (ay == 1 ? " ay" : " ay") + " " + gün + (gün == 1 ? " gün" : " gün");
        //return ay + (ay == 1 ? " ay" : " ay") + " önce";
        //return saat + (saat == 1 ? " saat" : " saat") + " önce";
        //return dakika + (dakika == 1 ? " dakika" : " dakika") + " önce"; // Bölge: ${message.guild.region} AFK Kanalı: ${message.guild.afkChannel}
    };*/
  
    const sunucubilgi = new Discord.RichEmbed()
      .setColor("#000000")
    .setAuthor(message.guild.name, message.guild.iconURL)
      .addField(`
❯ Genel Bilgi`,
` Sunucu: **${message.guild.name}** 
  Oluşturulma Tarihi: 
 ID: ${message.guild.id}
 Sahibi: <:tac:709543210585948251>  ${message.guild.owner} `)

.addField(`❯ Üye Bilgileri`,
` Üyeler: <:member:706121916603432990> ${message.guild.memberCount} , ( ${message.guild.members.filter(m => !m.user.bot && m.user.presence.status !== "offline").size} aktif &  ${message.guild.members.filter(m => !m.user.bot && m.user.presence.status !== "online").size} diğer )
 Durumlar: <:cevrimici:718215227199586335>  ${cevrimici} <:bosta:718405574643154956> ${bosta} <:rahatsizetmeyin:718405485862322247>  ${rahatsizetmeyin} <:cerimdisi:718405555374260235> ${cevrimdisi}


`)

.addField(`❯ Ana Bilgiler`, `

 • Bölge: ${message.guild.region} 
• AFK Kanalı: ${message.guild.afkChannel}
• Boost: <:boostlevel:714242365149413378>  ${message.guild.premiumTier} Seviye / ${message.guild.premiumSubscriptionCount} Boost

`, true)

.addField(`❯ Diğer Bilgiler`, `

• Kanal: ${message.guild.channels.size} - <:channels:709893537986117723> ${message.guild.channels.filter(c => c.type === 'text').size} - <:voice:709893581074071593> ${message.guild.channels.filter(c => c.type === 'voice').size}
• Kategori: <:tag:706121759304450058> ${message.guild.channels.filter(c => c.type === 'category').size}
• Rol: <:mentioon:706127365159518219> ${message.guild.roles.size}
• Emoji: <:emotes:706129437737091172> ${message.guild.emojis.size}

`, true)

      .setThumbnail(message.guild.iconURL)
  .setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL)
    return message.channel.send(sunucubilgi);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sunucu", "sunucubilgi", "sunucu-bilgi", "serverinfo","server-info" , "sb"],
  permLevel: 0
};

exports.help = {
  name: "sunucubilgi",
  description: "Sunucu hakkında bilgi verir.",
  usage: "sunucubilgi"
};