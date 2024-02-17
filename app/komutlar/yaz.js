const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let kanal = args[0];
   let link = args[1];
    let mesaj = args.slice(2).join(" ");
  
 const qq = client.channels.cache.find(x => x.id == `${kanal}`)
  



     if(!mesaj) return message.channel.send(new Discord.MessageEmbed().setDescription('Mesaj Eksik'))
     if(!link) return message.channel.send(new Discord.MessageEmbed().setDescription('Görsel Eksik'))
     if(!kanal) return message.channel.send(new Discord.MessageEmbed().setDescription('Kanal Eksik'))
  
  
 

  message.delete();
  qq.send(mesaj);
  qq.send(link);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['say', 'söyle'],
  permLevel: 3
};

exports.help = {
  name: 'yaz',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};
