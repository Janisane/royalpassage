const Discord = require('discord.js');
const { stripIndents } = require('common-tags');
exports.run = async (client, message, args) => {
  this.games = new Set();
  if(this.games.has(message.channel.id)) await message.reply('Kanal başına sadece bir düello meydana gelebilir.');
    const islem = Math.floor(Math.random() * (100 - 1)) + 1
    const fixedlisonuç = islem
    let choice;
    let haklar = 10
    await message.react('👌')
    this.games.add(message.channel.id);
   const sayı = new Discord.RichEmbed()
    .setDescription(stripIndents`
					${message.author}, Numarayı tahmin et 0 ve 100 Arası
					\`${haklar}\` Deneme Hakkın Var.
				`);
       await message.channel.send(sayı)
           let uwu = false;
            while (!uwu && haklar !== 0) {
                const response = await message.channel.awaitMessages(neblm => neblm.author.id === message.author.id, { max: 1, time: 15000 });
              if(!response.first()) { 
                this.games.delete(message.channel.id);
                const style = new Discord.RichEmbed()
               .setDescription(`${message.author} Maalesef! Zaman doldu! <:time:720202967017324625>`) 
               message.channel.send(style)
                const style2 = new Discord.RichEmbed()
                .setDescription(`${message.author}, :shrug: Kaybettin! Sayı: \`${fixedlisonuç}\` :shrug: `)
                message.channel.send(style2)
              }              
                const choice = response.first().content
                if(isNaN(choice)) {
                  continue;
                }
                if (choice !== fixedlisonuç)  {
                  haklar -= 1
                  if(fixedlisonuç > choice) {
                 const bekle = new Discord.RichEmbed()
                  .setDescription(stripIndents`
					          ${message.author}, <:up:720200987624865796> Daha büyük numara söylemelisin!
					          \`${haklar}\` Deneme hakkın kaldı.
				          `);
                await message.channel.send(bekle)
                  continue;
                  }
                  if(fixedlisonuç < choice) { 
                    const style3 = new Discord.RichEmbed()
                    .setDescription(stripIndents`
					          ${message.author}, <:down:720200946931466270> Daha küçük numara söylemelisin!
					          \`${haklar}\` Deneme hakkın kar.
				          `);
                   await message.channel.send(style3)
                  continue;
                  }
                }
                if (choice == fixedlisonuç) {
                  uwu = true
                }
                }
                if (haklar == 0) {
                  this.games.delete(message.channel.id);
                   const sanane = new Discord.RichEmbed()
                  .setDescription(`${message.author}, :shrug: Kaybettin! Sayı: \`${fixedlisonuç}\` :shrug:`)
                  await message.channel.send(sanane)
                }
                if (uwu) {
                  this.games.delete(message.channel.id);
                   const gorkembey = new Discord.RichEmbed()
        .setDescription(`${message.author} <a:tebrikler:720201123868180500>  Doğru Tahmin! Sayı: \`${fixedlisonuç}\` <a:tebrikler:720201123868180500>`)
                  await message.channel.send(gorkembey)
                try {
            } catch(e) {
              this.games.delete(message.channel.id);
            message.channel.send('Bir hata oluştu')
        }
    } else {
      this.games.delete(message.channel.id);
      return console.log('Bir hata oluştu')
    }
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sayıtahmini', 'sayıtahmin', 'sayı-tahmini'],
  permLevel: 0
};
exports.help = {
    name: 'sayı-tahmin',
  description: 'Rastgele rakam belirler ve siz o rakamı bulmaya çalışırsınız.',
  usage: 'sayı-tahmin'
};