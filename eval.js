const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args, color, prefix) => {
  if (message.author.bot || message.channel.type === "dm") return;
  if(message.author.id !=`${ayarlar.gorkem}` && message.author.id !=`${ayarlar.uur}` && message.author.id !=`${ayarlar.maes}`) return; 
    if (args[0] === "process.env.TOKEN") return;
  
    try {
        let codein = args.join(" ");
        let code = eval(codein);

      if (codein.length < 1) return message.reply(`Deneyebilmek için bir kod girmelisin!`)
      
        if (typeof code !== 'string')
            code = require('util').inspect(code, { depth: 0 });
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('Kod', `\`\`\`js\n${codein}\`\`\``)
        .addField('Sonuç', `\`\`\`js\n${code}\n\`\`\``)
        message.channel.send(embed)
    } catch(e) {
      let embed2 = new Discord.RichEmbed()
      .setColor('RANDOM')
      .addField('Hata', "\`\`\`js\n"+e+"\n\`\`\`")
        message.channel.send(embed2);
    }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['eval'],
    permLevel: `Bot sahibi olmak gerekir.`
  };
  
  exports.help = {
    name: 'eval',
    description: 'Kod denemeyi sağlar.',
    usage: 'eval'
  };