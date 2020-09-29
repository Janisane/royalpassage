//DCS EKİBİ

const Discord = require('discord.js')
const moment = require('moment')
const client = new Discord.Client();

const botadi = "Bot Adını Giriniz"

exports.run = async (bot, msg, args) => {
        let simdikitarih = moment.utc(msg.createdAt).format('DD MM YYYY');
  
        let user = msg.mentions.users.first() || msg.author;
  
        let userinfo = {};
		
        userinfo.avatar= user.displayAvatarURL;
		
        userinfo.id = user.id;
		
        userinfo.od1 = msg.guild.members.get(user.id).user.presence.game || "Oynadığı bir oyun yok"
		
        userinfo.status = user.presence.status.toString()
        .replace("dnd", `Rahatsız Etmeyin <:rahatsizetmeyin:718405485862322247>`)
        .replace("online", `Çevrimiçi <:cevrimici:718215227199586335>`)
        .replace("idle", `Boşta <:bosta:718405574643154956> `)
        .replace("offline", `Çevrimdışı <:cerimdisi:718405555374260235>`)
		
        userinfo.bot = user.bot.toString()
        .replace("false", `Hayır`)
        .replace("true", `Evet`)
  
        userinfo.dctarih = moment.utc(msg.guild.members.get(user.id).user.createdAt).format('DD MMMM YYYY HH:mm')
        .replace("Monday", `Pazartesi`)
        .replace("Tuesday", `Salı`)
        .replace("Wednesday", `Çarşamba`)
        .replace("Thursday", `Perşembe`)
        .replace("Friday", `Cuma`)
        .replace("Saturday", `Cumartesi`)
        .replace("Sunday", `Pazar`)
        .replace("January", `Ocak`)
        .replace("February", `Şubat`)
        .replace("March", `Mart`)
        .replace("April", `Nisan`)
        .replace("May", `Mayıs`)
        .replace("June", `Haziran`)
        .replace("July", `Temmuz`)
        .replace("August", `Ağustos`)
        .replace("September", `Eylül`)
        .replace("October", `Ekim`)
        .replace("November", `Kasım`)
        .replace("December", `Aralık`)
        userinfo.dctarihkatilma = moment.utc(msg.guild.members.get(user.id).joinedAt).format('DD MMMM YYYY HH:mm')
        .replace("Monday", `Pazartesi`)
        .replace("Tuesday", `Salı`)
        .replace("Wednesday", `Çarşamba`)
        .replace("Thursday", `Perşembe`)
        .replace("Friday", `Cuma`)
        .replace("Saturday", `Cumartesi`)
        .replace("Sunday", `Pazar`)
        .replace("January", `Ocak`)
        .replace("February", `Şubat`)
        .replace("March", `Mart`)
        .replace("April", `Nisan`)
        .replace("May", `Mayıs`)
        .replace("June", `Haziran`)
        .replace("July", `Temmuz`)
        .replace("August", `Ağustos`)
        .replace("September", `Eylül`)
        .replace("October", `Ekim`)
        .replace("November", `Kasım`)
        .replace("December", `Aralık`)
        const uembed = new Discord.RichEmbed() 
        .setThumbnail(userinfo.avatar)
        .setColor('#000000')
		.setAuthor(user.username, user.avatarURL)
		.setDescription(`
		**Kullanıcı Bilgisi**
		ID: ${userinfo.id}
		Profil: <@!${userinfo.id}>
		Durum: ${userinfo.status}
		Oynuyor: ${userinfo.od1}
		Oluşturulma: ${userinfo.dctarih}
		Bot mu: ${userinfo.bot}
		
		**Üyelik Bilgisi**
		Sunucuya katılma: ${userinfo.dctarihkatilma}
		Rolleri: ${msg.guild.members.get(user.id).roles.filter(r => r.name !== "@everyone").map(r => r).join(' **|** ') || "Yok"}
		`)
		.setFooter(`${msg.author.tag} tarafından istendi.`, msg.author.avatarURL)
        msg.channel.send(uembed)
    }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kullanıcı", "kullanıcıbilgi", "kullanıcı-bilgi", "userinfo", "user-info", 'kb'],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı-bilgi',
  description: 'İstediğiniz kullanıcını bilgilerini gösterir.',
  usage: 'kullanıcı-bilgi'
};
   