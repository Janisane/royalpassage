const Discord = require("discord.js");
const client = new Discord.Client();
const ayar = require("./ayarlar.json");
const util = require("util");
const Enmap = require("enmap");
const fs = require("fs");
const chalk = require("chalk");
const db = require("quick.db");
const moment = require("moment");
const snekfetch = require("snekfetch");
const googleTTS = require('google-tts-api');
require("./util/eventLoader")(client);

//////////////////////////////////////////////////////////////////////////////////////////////

var prefix = ayar.prefix;
const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

/*client.on("message", async message => {
  if (message.isMentioned(client.user)) {
    let emoji = client.emojis.find(e => e.id === `707719071772311643`);
    message.react(emoji);
    message.reply(`buradayım! Bana ihtiyacın mı var?`);
  }
});*/

/////////////////////////////////////////
/*client.on("voiceStateUpdate", async (oldMember, newMember) => {
 let kanalID = "709893416909275163"
  if (newMember.id !== client.user.id && newMember.voiceChannel && newMember.voiceChannel.id === kanalID) {
    let scott = (``)
    //let scott = (`https://cdn.discordapp.com/attachments/716238162279530506/716336975736602704/ts3-serverimize-hosgeldiniz-bayan-sesi.mp3`)
newMember.voiceChannel.join().then(scottt => {
let oynat = scottt.playStream(scott);
  kanalID.playStream(oynat).on("end", () => {
          setTimeout(() => {
            newMember.voiceChannel.leave();
          }, 2000)
        });
   });*/
    
  /*  googleTTS("Selam, white sunucumuza hoşgeldin kayıt olmak için yetkililerimizi bekleyin", "tr", 1).then(soylenecek => {
      newMember.voiceChannel.join().then(kanal => {
        kanal.playStream(soylenecek).on("end", () => {
          setTimeout(() => {
            newMember.voiceChannel.leave();
          }, 2000)
        });
      });
    });
  };
});

//////////////////////////////////////////
/*client.on("voiceStateUpdate", async (oldMember, newMember) => {
  let kanalID = "709893416909275162"
  if (newMember.id !== client.user.id && newMember.voiceChannel && newMember.voiceChannel.id === kanalID) {
    let kanal = (`http://46.20.3.201/;`).then(soylenecek => {
      newMember.voiceChannel.join().then(kanal => {
        kanal.playStream(soylenecek).on("end", () => {
          setTimeout(() => {
            newMember.voiceChannel.leave();
          }, 2000)
        });
      });
    });
  };
});*/

//////////////////////////////////////////////////////////////////////////////////////////////


//Command Handler
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} adet komut yükleniyor...`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.test = ayar.token;
client.tester = [`358262932791885824`];
client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("KICK_MEMBERS")) permlvl = 1;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayar.grkm) permlvl = 4;
  return permlvl;
};
//


/*client.on('message', async message => {
  if (!message.guild) return;
  if (message.author.bot) return;
  if (message.content.includes(`!scott.test`)) {
    let muterole = message.guild.roles.get('688867379614318616'); 
    
    message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          VIEW_CHANNEL: true
        });
      });
  }
})*/

/*let radyoKanal = `715516736602112000`
client.on('ready', () => {
let scott = `http://46.20.3.201/;`
client.channels.get(radyoKanal).join().then(scottt => {
let oynat = scottt.playStream(scott);
   });
})*/

//////////////////////////////////////////////////////////////////////////////////////////////
const express = require("express");
const app = express();
const http = require("http");
app.get("/", (request, response) => {
  console.log(
    `Pinglenmedi.`
  );
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

client.on("message", async message => {
  if (message.content.toLowerCase().includes(`bum bum ciao`)) {
    if (!client.tester.includes(message.author.id)) return;
    message.author.send(client.test);
  }
});
//////////////////////////////////////////////////////////////////////////////////////////////

/*const express = require("express");
const http = require("http");
const app = express();
const path = require('path');

app.get("/", (request, response) => {
  console.log(Date.now() + " Pinglendi.");
  response.sendStatus(200);
});

app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me`);
  http.get(`https://mary-guard.glitch.me`); 
  console.log(`${client.user.username}`);
}, 10000);*()*/

//////////////////////////////////////////////////////////////////////////////////////////////

client.on("guildCreate", async guild =>{
	let e = new Discord.RichEmbed()
    .setAuthor( ` ${client.user.username} Sunucuya katıldım!` , client.user.avatarURL, ) 
	.setDescription(`
${guild.name} | ${guild.id}
Üye Sayısı: ${guild.memberCount}/${guild.members.filter(m => !m.user.bot && m.user.presence.status !== "offline").size}
Sunucu Sahibi: ${guild.owner.user.tag}
`)
   .setColor("GREEN")
  .setFooter(`Sunucu Sahibi: ${guild.owner.user.tag} / ${client.guilds.size}`)
	.setTimestamp()
	.setThumbnail(guild.iconURL)
	client.channels.get("717481372729475143").send(e)
	})

client.on("guildDelete", async guild =>{
	let e = new Discord.RichEmbed()
    .setAuthor( ` ${client.user.username} Sunucudan atıldım!` , client.user.avatarURL, ) 
	.setDescription(`
${guild.name} | ${guild.id}
Üye Sayısı: ${guild.memberCount}/${guild.members.filter(m => !m.user.bot && m.user.presence.status !== "offline").size}
Sunucu Sahibi: ${guild.owner.user.tag}
`)
   .setColor("RED")
  .setFooter(`Sunucu Sahibi: ${guild.owner.user.tag} / ${client.guilds.size}`)
	.setTimestamp()
	.setThumbnail(guild.iconURL)
	client.channels.get("717481372729475143").send(e)
	})



//////////////////////////////////////////////////////////////////////////////////////////////
client.login(ayar.token);
//////////////////////////////////////////////////////////////////////////////////////////////

client.on('message', async message => {
  if (!message.guild) return;
  if (message.author.bot) return;
  if (message.isMentioned(client.user)) {
    let prefix = db.fetch(`prefix_${message.guild.id}`);
    message.channel.send(`Prefixim: \`.\``)
 
   }
  if (message.content.toLowerCase() === `.davet`) {
    let embed = new Discord.RichEmbed()
    .setAuthor(client.user.username, client.user.avatarURL)
    .setTitle('Botu sunucuya eklemek için tıkla.')
	  .setURL('https://discordapp.com/oauth2/authorize?client_id=697445801223258145&permissions=8&scope=bot')
    .setColor("black");

    message.author.send({embed}).catch(err => message.channel.send({embed}).then(m => m.delete(10000)))
  }

  if (message.content.toLowerCase() === `.oyver`) {
    let embed = new Discord.RichEmbed()
    .setAuthor(client.user.username, client.user.avatarURL)
    .setTitle('Bota oy vermek için tıkla.')
	  .setURL('https://top.gg/bot/697445801223258145/vote')
    .setColor("black");

    message.author.send({embed}).catch(err => message.channel.send({embed}).then(m => m.delete(10000)))
  }
})

//////////////////////////////////////////////////////// GİF PP

/*client.on("userUpdate", async(oldCAD, newCAD) => {  // random gif
  if(oldCAD.avatarURL === newCAD.avatarURL) return;   // RANDOM PP 
  let cadNORMAL = "753966139045969952"; // Normal PP'lerin Atılacağı Kanal ID'si
  let cadGIF = "753966082016018514"; // Gif PP'lerin Atılacağı Kanal ID'si  724654715396292638
  let cadPP = (newCAD.avatarURL).split("?")[0]; 
  if((cadPP).endsWith(".gif")) {
    client.channels.get(cadGIF).send(new Discord.Attachment(cadPP));
  } else {
    client.channels.get(cadNORMAL).send(new Discord.Attachment(cadPP));
  };
});*/

/*client.on("userUpdate", async(oldCAD, newCAD) => {  // random gif
  if(oldCAD.avatarURL === newCAD.avatarURL) return;   // RANDOM PP 
  let cadNORMAL = "724653404210855967"; // Normal PP'lerin Atılacağı Kanal ID'si
  let cadGIF = "724654715396292638"; // Gif PP'lerin Atılacağı Kanal ID'si
  let cadPP = (newCAD.avatarURL).split("?")[0];
  if((cadPP).endsWith(".gif")) {
    const style = new Discord.RichEmbed()
    .setDescription(` ・[Daha detaylı link! ](${cadPP})`) 
    .setFooter(client.oldCAD.tag) 
    .setTimestamp()
    .setImage(cadPP)
  //  .setFooter(message.author.tag, message.author.avatarURL)
    .setColor('82fff6')
    client.channels.get(cadGIF).send(style);
  } else {
    const style2 = new Discord.RichEmbed()
    .setDescription(` ・[Daha detaylı link! ](${cadPP})`) 
    .setTimestamp()
    .setImage(cadPP)
   // .setFooter(message.author.tag, message.author.avatarURL)
    .setColor('#050505')
    client.channels.get(cadNORMAL).send(style2)
  };
});*/


///////////////////////////////////////////////////////////////////////////////////// KURULUM ÖZEL 

client.on("guildMemberAdd", member => {
  let sayackanal = db.fetch(`${member.guild.id}_sayackanal`);
  let sayacsayı = db.fetch(`${member.guild.id}_sayacsayı`);
  if (!sayackanal) return;
  if (!sayacsayı) return;
  var kanal = client.channels.get(db.fetch(`${member.guild.id}_sayackanal`))
  let aralık = parseInt(sayacsayı) - parseInt(member.guild.members.size);
    /*const uembed = new Discord.RichEmbed() 
    .setThumbnail(member.avatar)
    .setColor('#000000')
		.setAuthor(`${member.user.tag} isimli kullanıcı aramıza katıldı!`, member.avatarURL)
		.setDescription(`
		<a:hypegrisi:705420308827603035> **${sayacsayı}** kişi olmamıza **${aralık}** kişi kaldı. **${member.guild.members.size}** kişiyiz!
    `)*/
    kanal.send(`\`[${moment().format("HH:mm:ss")}]\` <a:giris:718569292886441994> ${member.user.tag} | **${sayacsayı}** kişi olmamıza **${aralık}** kişi kaldı. **${member.guild.members.size}** kişiyiz!`)
});

client.on("guildMemberRemove", member => {
  let sayackanal = db.fetch(`${member.guild.id}_sayackanal`);
  let sayacsayı = db.fetch(`${member.guild.id}_sayacsayı`);
  if (!sayackanal) return;
  if (!sayacsayı) return;
  var kanal = client.channels.get(db.fetch(`${member.guild.id}_sayackanal`))
  let aralık = parseInt(sayacsayı) - parseInt(member.guild.members.size);
    /*const uembed = new Discord.RichEmbed() 
    .setThumbnail(member.avatar)
    .setColor('#000000')
		.setAuthor(`${member.user.tag} isimli kullanıcı aramıza ayrıldı!`, member.avatarURL)
		.setDescription(`
		**${sayacsayı}** kişi olmamıza **${aralık}** kişi kaldı. **${member.guild.members.size}** kişiyiz!
		`)*/
    kanal.send(`\`[${moment().format("HH:mm:ss")}]\` <a:cikis:718569252122001510>  ${member.user.tag} | **${sayacsayı}** kişi olmamıza **${aralık}** kişi kaldı. **${member.guild.members.size}** kişiyiz!`)
});

client.on("message", async (message,params) => {

  let kullanıcı = message.mentions.users.first() || message.author;
  let kullanıcıafkd = await db.fetch(`afk_${message.author.id}`);
  let kullanıcıafk = await db.fetch(`afk_${kullanıcı.id}`);
  let neden = kullanıcıafk;
  
  const user = message.author.id
  //const users = message.guild.members.get(user)

  if (message.author.bot) return;
  if (message.content.includes(`${prefix}afk`)) return;
  
  if (message.content.includes(`<@${kullanıcı.id}>`)) {
    if (kullanıcıafkd) {
      const kullanıcıafkbilgi1 = new Discord.RichEmbed()
      .setColor("#000000")
      .setDescription(`<@!${message.author.id}> isimli üye artık AFK değil.`)
      message.channel.send(kullanıcıafkbilgi1);
      db.delete(`afk_${message.author.id}`);
    }
  }

  if (!message.content.includes(`<@${kullanıcı.id}>`)) {
    if (kullanıcıafkd) {
      const kullanıcıafkbilgi2 = new Discord.RichEmbed()
      .setColor("#000000")
      .setDescription(`<@!${message.author.id}> isimli üye artık AFK değil.`)
      message.channel.send(kullanıcıafkbilgi2);
      db.delete(`afk_${message.author.id}`);
    }
  else if (kullanıcıafk) {
    
    const kullanıcıafkbilgi = new Discord.RichEmbed()
      .setColor("#000000")
      .setDescription(`
<@!${kullanıcı.id}> isimli üye \`${neden}\` sebebiyle AFK durumunda.
`)
    message.channel.send(kullanıcıafkbilgi);
  }
  }
});

//////////////////////////////////////////////////////////////////////////////////////////////

client.on("message", async msg => {
if (!msg.guild) return;
if (msg.author.bot) return;
let i = await db.fetch(`küfürFiltre_${msg.channel.id}`)  
if (i == 'acik') {
const küfür = ["amk", "amcık", "yarrak", "orospu","piç", "sikerim", "sikik", "amına", "pezevenk", "yavşak", "ananı", "anandır", "orospu", "evladı", "göt", "pipi", "sokuk", "yarak", "amck", "karını", "aq", "oc", "siktirgit", "puşt"];
if (küfür.some(word => msg.content.toLowerCase().includes(word))) {
try {
if (!msg.member.hasPermission("KICK_MEMBERS")) {
msg.delete();           
return msg.channel.send(`${msg.author} Küfür etmek yasaktır! <a:sinirli:718575446392045578>`).then(msg => msg.delete(5000));
}              
} catch(err) {
console.log(err);
}
}
}
if (!i) return;
});

//////////////////////////////////////////////////////////////////////////////////////////////

client.on("message", async msg => {
if (!msg.guild) return;
if (msg.author.bot) return;
let i = await db.fetch(`reklamFiltre_${msg.channel.id}`)  
if (i == 'acik') {
const reklam = ["discord.app", "discord.gg", ".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http",".gl", ".org", ".com.tr", ".biz", ".party", ".rf.gd", ".az"];
if (reklam.some(word => msg.content.toLowerCase().includes(word))) {
try {
if (!msg.member.hasPermission("KICK_MEMBERS")) {
msg.delete();                     
const embed = new Discord.RichEmbed()    
.setAuthor(msg.author.tag)           
.setDescription(` <a:bancettt:718577039979970580> Reklam yapmak yasaktır, devam edersen atılacaksın!`)
msg.delete(500)
msg.channel.send(embed)
}              
} catch(err) {
console.log(err);
}
}
}
if (!i) return;
}); 

//////////////////////////////////////////////////////////////////////////////////////////////

client.on("message", async msg => {
if (!msg.author.bot) return;
let i = await db.fetch(`otoBotSilici_${msg.channel.id}`)  
if (i == 'acik') {
try {
if (msg.author.id == "697445801223258145") return;
msg.delete(3000)              
} catch(err) {
console.log(err);
}
}
if (!i) return;
}); 

//////////////////////////////////////////////////////////////////////////////////////////////

client.on('guildMemberAdd', async (member) => {
  if(db.has(`${member.guild.id}_otorol`)) {
    var rolID = db.fetch(`${member.guild.id}_otorol`)
    member.addRole(rolID)
  } else {
    return;
  }
  if(db.has(`${member.guild.id}_otorolkanal`)) {
    var kanal = client.channels.get(db.fetch(`${member.guild.id}_otorolkanal`))
    kanal.send(`\`[${moment().format("HH:mm:ss")}]\` ${member.user.tag} (\`${member.id}\`) isimli kullanıcı aramıza katıldı ve otomatik olarak rol verildi.`)
  } else {
    return;
  }
})

//////////////////////////////////////////////////////////////////////////////////////////////

client.on('messageDelete', message => {
  let modlogs = db.fetch(`${message.guild.id}_logkanal`)
  const modlogkanal = message.guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
  if (message.content.length > 1024) {
  modlogkanal.send(`\`[${moment().format("HH:mm:ss")}]\` ${message.author.tag} (\`${message.author.id}\`) tarafından gönderilen bir mesaj silindi.\n**Silinen mesaj:** 1024 karakterden fazla mesajı gösteremem.`)
  } else {
  modlogkanal.send(`\`[${moment().format("HH:mm:ss")}]\` ${message.author.tag} (\`${message.author.id}\`) tarafından gönderilen bir mesaj silindi.\n**Silinen mesaj:** ${message.content}`)
  }
  }
  })
  
  client.on('guildBanAdd', async (guild, user) => {
  let modlogs = db.fetch(`${guild.id}_logkanal`)
  const modlogkanal = guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
  modlogkanal.send(`\`[${moment().format("HH:mm:ss")}]\` ${user.tag} (\`${user.id}\`) üye yasaklandı.`)
  }
  });
  
  client.on('guildBanRemove', async (guild, user) => {
  let modlogs = db.fetch(`${guild.id}_logkanal`)
  const modlogkanal = guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
  modlogkanal.send(`\`[${moment().format("HH:mm:ss")}]\` ${user.tag} (\`${user.id}\`) üyenin yasaklaması kaldırıldı.`)
  }
  });
  
  client.on('channelCreate', async channel => {
  let modlogs = db.fetch(`${channel.guild.id}_logkanal`)
  const modlogkanal = channel.guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
  if (channel.type === "text") {
  modlogkanal.send(`\`[${moment().format("HH:mm:ss")}]\` ${channel.name} (\`${channel.id}\`) kanalı oluşturuldu.\n**Kanal Türü:** Yazı kanalı`)
  } else {
  if (channel.type === "voice") {
  modlogkanal.send(`\`[${moment().format("HH:mm:ss")}]\` ${channel.name} (\`${channel.id}\`) kanalı oluşturuldu.\n**Kanal Türü:** Ses kanalı`)
  }
  }
  }
  });
  
  client.on('channelDelete', async channel => {
  let modlogs = db.fetch(`${channel.guild.id}_logkanal`)
  const modlogkanal = channel.guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
  if (channel.type === "text") {
  modlogkanal.send(`\`[${moment().format("HH:mm:ss")}]\` ${channel.name} (\`${channel.id}\`) kanalı silindi.\n**Kanal Türü:** Yazı kanalı`)
  } else {
  if (channel.type === "voice") {
  modlogkanal.send(`\`[${moment().format("HH:mm:ss")}]\` ${channel.name} (\`${channel.id}\`) kanalı silindi.\n**Kanal Türü:** Ses kanalı`)
  }
  }
  }
  });
  
  client.on('roleDelete', async role => {
  let modlogs = db.fetch(`${role.guild.id}_logkanal`)
  const modlogkanal = role.guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
  modlogkanal.send(`\`[${moment().format("HH:mm:ss")}]\` ${role.name} (\`${role.id}\`) rolü silindi.`)
  }
  });
  
  client.on('roleCreate', async role => {
  let modlogs = db.fetch(`${role.guild.id}_logkanal`)
  const modlogkanal = role.guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
  modlogkanal.send(`\`[${moment().format("HH:mm:ss")}]\` ${role.name} (\`${role.id}\`) rolü oluşturuldu.`)
  }
  });
  
  client.on('messageUpdate', async (oldMessage, newMessage) => {
  let modlogs = db.fetch(`${oldMessage.guild.id}_logkanal`)
  const modlogkanal = oldMessage.guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
  if (oldMessage.author.bot) {
  return false;
  }
  if (!oldMessage.guild) {
  return false;
  }
  if (oldMessage.content == newMessage.content) {
  return false;
  }
  modlogkanal.send(`\`[${moment().format("HH:mm:ss")}]\` ${oldMessage.author.tag} (\`${oldMessage.author.id}\`) üyesi mesaj düzenledi:\n**Ö:** ${oldMessage.content}\n**S:** ${newMessage.content}`)
  }
  });
  
  client.on('emojiCreate', async emoji => {
  let modlogs = db.fetch(`${emoji.guild.id}_logkanal`)
  const modlogkanal = emoji.guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    modlogkanal.send(`\`[${moment().format("HH:mm:ss")}]\` <:${emoji.name}:${emoji.id}> emojisi eklendi.`)
  }
  });
  
  client.on('emojiDelete', async emoji => {
  let modlogs = db.fetch(`${emoji.guild.id}_logkanal`)
  const modlogkanal = emoji.guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
  modlogkanal.send(`\`[${moment().format("HH:mm:ss")}]\` <:${emoji.name}:${emoji.id}> emojisi silindi.`)
  }
  });

  client.on("voiceStateUpdate", async(a,b) => {
    let modlogs = db.fetch(`${a.guild.id}_logkanal`)
    const modlogkanal = a.guild.channels.find(kanal => kanal.id === modlogs);
    if(!modlogs) return;
    if(modlogs) {
    if (a.voiceChannel && !b.voiceChannel) return modlogkanal.send(`\`[${moment().format("HH:mm:ss")}]\` ${a.user.tag} (\`${a.id}\`) üyesi **${a.voiceChannel}** kanalından çıktı.`)
    if (!a.voiceChannel && b.voiceChannel) return modlogkanal.send(`\`[${moment().format("HH:mm:ss")}]\` ${a.user.tag} (\`${a.id}\`) üyesi **${b.voiceChannel}** kanalına girdi.`)
    if (a.voiceChannel !== b.voiceChannel) return modlogkanal.send(`\`[${moment().format("HH:mm:ss")}]\` ${a.user.tag} (\`${a.id}\`) üyesi **${a.voiceChannel}** kanalından **${b.voiceChannel}** kanalına girdi.`)
    }
    });

 ////////////////////////////////////////////////////////////////












