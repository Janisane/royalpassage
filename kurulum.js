const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');
const fs = require('fs')

var prefix = ayarlar.prefix;

module.exports.run = async (bot, message, args) => {
  if (message.author.bot || message.channel.type === "dm") return;
  if (message.author.id !== `${message.guild.owner.id}` && message.author.id !== `${ayarlar.gorkem}` && message.author.id !== `${ayarlar.scott}`)  return message.channel.send(`Bu komutu kullanabilmek için **Sunucu Sahibi** olmalısınız.`).then(m => {m.delete(10000)}) 
  let secim1 = args[0];
  if (!secim1) return message.channel.send(`Kurulum komutunu kullanmak için işlem argümanı gerekiyor.\n(\`${ayarlar.prefix}kurulum <modrol/otorol/logkanal/küfürkoruma/reklamkoruma>\`)`).then(m => {m.delete(10000)})
  //let islemler = ['modrol', 'otorol', 'logkanal', 'küfürkoruma', 'reklamkoruma', 'ultrasohbettemizleyici', 'susturma_rol', 'jail_rol', 'bansorumlusu', 'jailsorumlusu', 'mutesorumlusu']
  //if (!islemler.includes(secim1)) return message.channel.send(`Bu işlemi bilmiyorum, lütfen tekrar dene.`)
  
  if(secim1 == "modrol")
  {
    let secim1 = args[1];
    if (!secim1) return message.channel.send(`Mod Rol komutunu kullanmak için işlem argümanı gerekiyor.\n(\`${ayarlar.prefix}ayarlar modrol <ekle/sıfırla>\`)`).then(m => {m.delete(10000)})
    if (secim1 == "ekle")
    {
      let rol = message.mentions.roles.first() || message.guild.roles.get(args[3]) || message.guild.roles.find(rol => rol.name === args[3]);
      if (!rol) return message.channel.send(`Bir rol belirtlelisiniz.`).then(m => {m.delete(10000)})
      db.set(`${message.guild.id}_modrol`, rol.id)
      message.channel.send(`Moderasyon Rolü ayarlandı!`).then(m => {m.delete(10000)})
    }
    else if (secim1 == "sıfırla")
    {
      db.delete(`${message.guild.id}_modrol`)
      message.channel.send(`Moderasyon Rolü sıfırlandı!`).then(m => {m.delete(10000)})
    }
  }
  
  else if(secim1 == "otorol")
  {
    let secim1 = args[1];
    if (!secim1) return message.channel.send(`Oto Rol komutunu kullanmak için işlem argümanı gerekiyor.\n(\`${ayarlar.prefix}ayarlar otorol <ekle/sıfırla>\`)`).then(m => {m.delete(10000)})
    if (secim1 == "ekle")
    {
      let kanal = message.mentions.channels.first()|| message.guild.channels.get(args[3]) || message.guild.channels.find(channel => channel.name === args[3]);
      let rol = message.mentions.roles.first() || message.guild.roles.get(args[4]) || message.guild.roles.find(rol => rol.name === args[4]);
      if (!kanal) return message.channel.send(`Bir kanal belirtlelisiniz.\n(\`${ayarlar.prefix}ayarlar otorol <ekle> <#kanal/id> <@rol/id>\`)`).then(m => {m.delete(10000)})
      if (!rol) return message.channel.send(`Bir rol belirtlelisiniz.\n(\`${ayarlar.prefix}ayarlar otorol <ekle> <#kanal/id> <@rol/id>\`)`).then(m => {m.delete(10000)})
      db.set(`${message.guild.id}_otorolkanal`, kanal.id)
      db.set(`${message.guild.id}_otorol`, rol.id)
      message.channel.send(`Oto Rol ayarlandı!`).then(m => {m.delete(10000)})
    }
    else if (secim1 == "sıfırla")
    {
      db.delete(`${message.guild.id}_otorolkanal`)
      db.delete(`${message.guild.id}_otorol`)
      message.channel.send(`Oto Rol sıfırlandı!`).then(m => {m.delete(10000)})
    }
  }
  
  else if(secim1 == "logkanal")
  {
    let secim1 = args[1];
    if (!secim1) return message.channel.send(`Log Kanal komutunu kullanmak için işlem argümanı gerekiyor.\n(\`${ayarlar.prefix}ayarlar logkanal <ekle/sıfırla>\`)`).then(m => {m.delete(10000)})
    if (secim1 == "ekle")
    {
      let kanal = message.mentions.channels.first()|| message.guild.channels.get(args[3]) || message.guild.channels.find(channel => channel.name === args[3]);
      if (!kanal) return message.channel.send(`Bir kanal belirtlelisiniz.\n(\`${ayarlar.prefix}ayarlar logkanal <ekle> <#kanal/id>\`)`).then(m => {m.delete(10000)})
      db.set(`${message.guild.id}_logkanal`, kanal.id)
      message.channel.send(`Log Kanalı ayarlandı!`).then(m => {m.delete(10000)})
    }
    else if (secim1 == "sıfırla")
    {
      db.delete(`${message.guild.id}_logkanal`)
      message.channel.send(`Log Kanalı sıfırlandı!`).then(m => {m.delete(10000)})
    }
  }
  
  else if(secim1 == "küfürkoruma")
  {
    let secim1 = args[1];
    if (!secim1) return message.channel.send(`Küfür Koruma komutunu kullanmak için işlem argümanı gerekiyor.\n(\`${ayarlar.prefix}ayarlar küfürkoruma <aç/kapat>\`)`).then(m => {m.delete(10000)})
    if (secim1 == "aç")
    {
      db.set(`küfürFiltre_${message.channel.id}`, 'acik')
      message.channel.send(`Küfür Koruma açıldı!`).then(m => {m.delete(10000)})
    }
    else if (secim1 == "kapat")
    {
      db.delete(`küfürFiltre_${message.channel.id}`)
      message.channel.send(`Küfür Koruma kapatıldı!`).then(m => {m.delete(10000)})
    }
  }
  
  else if(secim1 == "reklamkoruma")
  {
    let secim1 = args[1];
    if (!secim1) return message.channel.send(`Reklam Koruma komutunu kullanmak için işlem argümanı gerekiyor.\n(\`${ayarlar.prefix}ayarlar reklamkoruma <aç/kapat>\`)`).then(m => {m.delete(10000)})
    if (secim1 == "aç")
    {
      db.set(`reklamFiltre_${message.channel.id}`, 'acik')
      message.channel.send(`Reklam Koruma açıldı!`).then(m => {m.delete(10000)})
    }
    else if (secim1 == "kapat")
    {
      db.delete(`reklamFiltre_${message.channel.id}`)
      message.channel.send(`Reklam Koruma kapatıldı!`).then(m => {m.delete(10000)})
    }
  }
  
  else if(secim1 == "susturma_rol")
  {
    let secim1 = args[1];
    if (!secim1) return message.channel.send(`Susturma Rol komutunu kullanmak için işlem argümanı gerekiyor.\n(\`${ayarlar.prefix}ayarlar susturma_rol <ekle/sıfırla>\`)`).then(m => {m.delete(10000)})
    if (secim1 == "ekle")
    {
      let rol = message.mentions.roles.first() || message.guild.roles.get(args[3]) || message.guild.roles.find(rol => rol.name === args[3]);
      if (!rol) return message.channel.send(`Bir rol belirtlelisiniz.`).then(m => {m.delete(10000)})
      db.set(`${message.guild.id}_susturmarol`, rol.id)
      message.channel.send(`Susturma rolü ayarlandı!`).then(m => {m.delete(10000)})
    }
    else if (secim1 == "sıfırla")
    {
      db.delete(`${message.guild.id}_susturmarol`)
      message.channel.send(`Susturma rolü sıfırlandı!`).then(m => {m.delete(10000)})
    }
  }
  
  else if(secim1 == "kayıtsız")
  {
    let secim1 = args[1];
    if (!secim1) return message.channel.send(`Kayıtsız komutunu kullanmak için işlem argümanı gerekiyor.\n(\`${ayarlar.prefix}ayarlar kayıtsız <ekle/sıfırla>\`)`).then(m => {m.delete(10000)})
    if (secim1 == "ekle")
    {
      let rol = message.mentions.roles.first() || message.guild.roles.get(args[3]) || message.guild.roles.find(rol => rol.name === args[3]);
      if (!rol) return message.channel.send(`Bir rol belirtlelisiniz.`).then(m => {m.delete(10000)})
      db.set(`${message.guild.id}_kayıtsız`, rol.id)
      message.channel.send(`Kayıtsız rolü ayarlandı!`).then(m => {m.delete(10000)})
    }
    else if (secim1 == "sıfırla")
    {
      db.delete(`${message.guild.id}_kayıtsız`)
      message.channel.send(`Kayıtsız rolü sıfırlandı!`).then(m => {m.delete(10000)})
    }
  }
  
  else if(secim1 == "jail_rol")
  {
    let secim1 = args[1];
    if (!secim1) return message.channel.send(`Jail Rol komutunu kullanmak için işlem argümanı gerekiyor.\n(\`${ayarlar.prefix}ayarlar jail_rol <ekle/sıfırla>\`)`).then(m => {m.delete(10000)})
    if (secim1 == "ekle")
    {
      let rol = message.mentions.roles.first() || message.guild.roles.get(args[3]) || message.guild.roles.find(rol => rol.name === args[3]);
      if (!rol) return message.channel.send(`Bir rol belirtlelisiniz.`).then(m => {m.delete(10000)})
      db.set(`${message.guild.id}_jailrol`, rol.id)
      message.channel.send(`Jail rolü ayarlandı!`).then(m => {m.delete(10000)})
    }
    else if (secim1 == "sıfırla")
    {
      db.delete(`${message.guild.id}_jailrol`)
      message.channel.send(`Jail rolü sıfırlandı!`).then(m => {m.delete(10000)})
    }
  }
  
  else if(secim1 == "mute_rol")
  {
    let secim1 = args[1];
    if (!secim1) return message.channel.send(`Mute Rol komutunu kullanmak için işlem argümanı gerekiyor.\n(\`${ayarlar.prefix}ayarlar mute_rol <ekle/sıfırla>\`)`).then(m => {m.delete(10000)})
    if (secim1 == "ekle")
    {
      let rol = message.mentions.roles.first() || message.guild.roles.get(args[3]) || message.guild.roles.find(rol => rol.name === args[3]);
      if (!rol) return message.channel.send(`Bir rol belirtlelisiniz.`).then(m => {m.delete(10000)})
      db.set(`${message.guild.id}_muterol`, rol.id)
      message.channel.send(`Mute rolü ayarlandı!`).then(m => {m.delete(10000)})
    }
    else if (secim1 == "sıfırla")
    {
      db.delete(`${message.guild.id}_muterol`)
      message.channel.send(`Mute rolü sıfırlandı!`).then(m => {m.delete(10000)})
    }
  }
  
  else if(secim1 == "ultrasohbettemizleyici")
  {
    let secim1 = args[1];
    if (!secim1) return message.channel.send(`Ultra Sohbet Temizleyici komutunu kullanmak için işlem argümanı gerekiyor.\n(\`${ayarlar.prefix}ayarlar ultrasohbettemizleyici <aç/kapat>\`)`).then(m => {m.delete(10000)})
    if (secim1 == "aç")
    {
      db.set(`otoBotSilici_${message.channel.id}`, 'acik')
      message.channel.send(`Ultra Sohbet Temizleyici açıldı!`).then(m => {m.delete(10000)})
    }
    else if (secim1 == "kapat")
    {
      db.delete(`otoBotSilici_${message.channel.id}`)
      message.channel.send(`Ultra Sohbet Temizleyici kapatıldı!`).then(m => {m.delete(10000)})
    }
  }
  
  else if(secim1 == "bansorumlusu")
  {
    let secim1 = args[1];
    if (!secim1) return message.channel.send(`Ban Sorumlusu komutunu kullanmak için işlem argümanı gerekiyor.\n(\`${ayarlar.prefix}ayarlar bansorumlusu <ekle/sıfırla>\`)`).then(m => {m.delete(10000)})
    if (secim1 == "ekle")
    { 
      let kanal = message.mentions.channels.first()|| message.guild.channels.get(args[3]) || message.guild.channels.find(channel => channel.name === args[3]);
      let rol = message.mentions.roles.first() || message.guild.roles.get(args[4]) || message.guild.roles.find(rol => rol.name === args[4]);
      if (!kanal) return message.channel.send(`Bir kanal belirtlelisiniz.\n(\`${ayarlar.prefix}ayarlar bansorumlusu <ekle> <#kanal/id> <@rol/id>\`)`).then(m => {m.delete(10000)})
      if (!rol) return message.channel.send(`Bir rol belirtlelisiniz.\n(\`${ayarlar.prefix}ayarlar bansorumlusu <ekle> <#kanal/id> <@rol/id>\`)`).then(m => {m.delete(10000)})
      db.set(`${message.guild.id}_bankanal`, kanal.id)
      db.set(`${message.guild.id}_bansorumlusurol`, rol.id)
      message.channel.send(`Ban Sorumlusu ayarlandı!`).then(m => {m.delete(10000)})
    }
    else if (secim1 == "sıfırla")
    {
      db.delete(`${message.guild.id}_bankanal`)
      db.delete(`${message.guild.id}_bansorumlusurol`)
      message.channel.send(`Ban Sorumlusu sıfırlandı!`).then(m => {m.delete(10000)})
    }
  }
  
  else if(secim1 == "jailsorumlusu")
  {
    let secim1 = args[1];
    if (!secim1) return message.channel.send(`Jail Sorumlusu komutunu kullanmak için işlem argümanı gerekiyor.\n(\`${ayarlar.prefix}ayarlar jailsorumlusu <ekle/sıfırla>\`)`).then(m => {m.delete(10000)})
    if (secim1 == "ekle")
    {
      let kanal = message.mentions.channels.first()|| message.guild.channels.get(args[3]) || message.guild.channels.find(channel => channel.name === args[3]);
      let rol = message.mentions.roles.first() || message.guild.roles.get(args[4]) || message.guild.roles.find(rol => rol.name === args[4]);
      if (!kanal) return message.channel.send(`Bir kanal belirtlelisiniz.\n(\`${ayarlar.prefix}ayarlar jailsorumlusu <ekle> <#kanal/id> <@rol/id>\`)`).then(m => {m.delete(10000)})
      if (!rol) return message.channel.send(`Bir rol belirtlelisiniz.\n(\`${ayarlar.prefix}ayarlar jailsorumlusu <ekle> <#kanal/id> <@rol/id>\`)`).then(m => {m.delete(10000)})
      db.set(`${message.guild.id}_jailkanal`, kanal.id)
      db.set(`${message.guild.id}_jailsorumlusurol`, rol.id)
      message.channel.send(`Jail Sorumlusu ayarlandı!`).then(m => {m.delete(10000)})
    }
    else if (secim1 == "sıfırla")
    {
      db.delete(`${message.guild.id}_jailkanal`)
      db.delete(`${message.guild.id}_jailsorumlusurol`)
      message.channel.send(`Jail Sorumlusu rolü sıfırlandı!`).then(m => {m.delete(10000)})
    }
  }
  
  else if(secim1 == "mutesorumlusu")
  {
    let secim1 = args[1];
    if (!secim1) return message.channel.send(`Mute Sorumlusu komutunu kullanmak için işlem argümanı gerekiyor.\n(\`${ayarlar.prefix}ayarlar mutesorumlusu <ekle/sıfırla>\`)`).then(m => {m.delete(10000)})
    if (secim1 == "ekle")
    {
      let kanal = message.mentions.channels.first()|| message.guild.channels.get(args[3]) || message.guild.channels.find(channel => channel.name === args[3]);
      let rol = message.mentions.roles.first() || message.guild.roles.get(args[4]) || message.guild.roles.find(rol => rol.name === args[4]);
      if (!kanal) return message.channel.send(`Bir kanal belirtlelisiniz.\n(\`${ayarlar.prefix}ayarlar mutesorumlusu <ekle> <#kanal/id> <@rol/id>\`)`).then(m => {m.delete(10000)})
      if (!rol) return message.channel.send(`Bir rol belirtlelisiniz.\n(\`${ayarlar.prefix}ayarlar mutesorumlusu <ekle> <#kanal/id> <@rol/id>\`)`).then(m => {m.delete(10000)})
      db.set(`${message.guild.id}_mutekanal`, kanal.id)
      db.set(`${message.guild.id}_mutesorumlusurol`, rol.id)
      message.channel.send(`Mute Sorumlusu ayarlandı!`).then(m => {m.delete(10000)})
    }
    else if (secim1 == "sıfırla")
    {
      db.delete(`${message.guild.id}_mutekanal`)
      db.delete(`${message.guild.id}_mutesorumlusurol`)
      message.channel.send(`Mute Sorumlusu rolü sıfırlandı!`).then(m => {m.delete(10000)})
    }
  }
  
  else if(secim1 == "sayaç")
  {
    let secim1 = args[1];
    if (!secim1) return message.channel.send(`Sayaç komutunu kullanmak için işlem argümanı gerekiyor.\n(\`${ayarlar.prefix}ayarlar sayaç <ekle/sıfırla>\`)`).then(m => {m.delete(10000)})
    if (secim1 == "ekle")
    {
      let kanal = message.mentions.channels.first()|| message.guild.channels.get(args[2]) || message.guild.channels.find(channel => channel.name === args[2]);
      let sayı = args[3];
      if (!kanal) return message.channel.send(`Bir kanal belirtlelisiniz.\n(\`${ayarlar.prefix}ayarlar sayaç <ekle> <#kanal/id> <sayı>\`)`).then(m => {m.delete(10000)})
      if (!sayı) return message.channel.send(`Sayı belirtlelisiniz.\n(\`${ayarlar.prefix}ayarlar sayaç <ekle> <#kanal/id> <sayı>\`)`).then(m => {m.delete(10000)})
      if(sayı < message.guild.members.size) return message.channel.send(`Girdiğiniz sayı üye sayısından fazla olmadılır! Üye sayısı: ${message.guild.members.size}`).then(m => {m.delete(10000)})
      db.set(`${message.guild.id}_sayackanal`, kanal.id)
      db.set(`${message.guild.id}_sayacsayı`, sayı)
      message.channel.send(`Sayaç Kanalı: ${kanal} | Sayaç: ${sayı}`)
    }
    else if (secim1 == "sıfırla")
    {
      let sayacSistemi = db.fetch(`${message.guild.id}_sayacsayı`)
      if(!sayacSistemi) return message.channel.send("Bu sunucuda sayaç sistemi ayarlanmamış!")
      db.delete(`${message.guild.id}_sayackanal`)
      db.delete(`${message.guild.id}_sayacsayı`)
      message.channel.send(`Sayaç sıfırlandı!`).then(m => {m.delete(10000)})
    }
  }
  
  else if(secim1 == "prefix")
  {
    let secim1 = args[1];
    if (!secim1) return message.channel.send(`Prefix komutunu kullanmak için işlem argümanı gerekiyor.\n(\`${ayarlar.prefix}ayarlar prefix <yeniPrefix/sıfırla>\`)`).then(m => {m.delete(10000)})
    if (secim1 == "sıfırla")
    {
      db.set(`prefix_${message.guild.id}`, ".")
      message.channel.send(`Prefix sıfırlandı!`).then(m => {m.delete(10000)})
    }
    else {
      let yeniPrefix = args[1];
      if (!yeniPrefix) return message.channel.send(`Prefix belirtlelisiniz.\n(\`${ayarlar.prefix}ayarlar prefix <yeniPrefix>\`)`).then(m => {m.delete(10000)})
      db.set(`prefix_${message.guild.id}`, yeniPrefix)
      message.channel.send(`Yeni Prefix: \`${yeniPrefix}\``)
    }
  }
  
  else if(secim1 == "kurulumsıfırla")
  {
    db.delete(`${message.guild.id}_sayackanal`)
    db.delete(`${message.guild.id}_sayacsayı`)
    db.delete(`prefix_${message.guild.id}`)
    db.delete(`${message.guild.id}_modrol`)
    db.delete(`${message.guild.id}_otorolkanal`)
    db.delete(`${message.guild.id}_otorol`)
    db.delete(`${message.guild.id}_logkanal`)
    db.delete(`küfürFiltre_${message.channel.id}`)
    db.delete(`reklamFiltre_${message.channel.id}`)
    db.delete(`${message.guild.id}_susturmarol`)
    db.delete(`${message.guild.id}_kayıtsız`)
    db.delete(`${message.guild.id}_jailrol`)
    db.delete(`${message.guild.id}_muterol`)
    db.delete(`otoBotSilici_${message.channel.id}`)
    db.delete(`${message.guild.id}_bankanal`)
    db.delete(`${message.guild.id}_bansorumlusurol`)
    db.delete(`${message.guild.id}_jailkanal`)
    db.delete(`${message.guild.id}_jailsorumlusurol`)
    db.delete(`${message.guild.id}_mutekanal`)
    db.delete(`${message.guild.id}_mutesorumlusurol`)
    message.channel.send(`Bot fabrika ayarlarına sıfırlandı!`).then(m => {m.delete(10000)})
  }
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kurulum'],
  permLevel: 0
};

exports.help = {
  name: 'kurulum',
  description: 'Kurulum yapmanızı sağlar.',
  usage: '.kurulum <modrol/otorol/logkanal/küfürkoruma/reklamkoruma>'
};