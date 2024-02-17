const Discord = require('discord.js');


exports.run = function(client, message, args) {
  const m = args.join(' ');
  if(!m) return message.channel.send('**⚙️ Bir miktar girmelisiniz!**');
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('**:xx: Bu işlem için gerekli izne sahip değilsiniz!**');
  if(m < 2) return message.channel.send('⚙️ **En az 2 mesaj silebilirim!**')
 if(m>100) return message.channel.send('**⚙️ En fazla 100 mesaj silebilirim!**')
  message.channel.bulkDelete(m);


  message.channel.send(
  new Discord.MessageEmbed()
    .setTitle('⚙️ **Başarılı!**')
    .setDescription('**Başarı ile __'+m+'__ mesaj sildim! ⚙️**')
  .setColor('0x36393E')
  ).then(i=>{
    i.react('⚙️')
  }
  )
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['temizle','delete','sil'],
  permLevel: 2
};

exports.help = {
  name: 'temizle',
  description: 'Belirlediğiniz miktarda mesaj siler',
  category:'yetkili',
  usage: 'sil 100'
};