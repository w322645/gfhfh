const Discord = require('discord.js');
exports.run = (client, message, args) => {

      
  if (!message.guild) {
  const ozelmesajuyari = new Discord.MessageEmbed()
  .setColor(`#0xFF0000`)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL())
  .addField('⚠️ Uyarı ⚠️', 'Bu  komutu özel mesajlarda kullanamazsın.');
  return message.author.send(ozelmesajuyari); }
  let guild = message.guild;
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (reason.length < 1) return message.reply('Ne göndericem onuda yazı ver.');

  message.delete();
  message.reply('Mesajını Gönderdim.')

  return user.send(reason);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pm','öm'],
  permlevel: 4
};

exports.help = {
  name: 'mesajat',
  description: 'Bir kullanÄ±cÄ±ya Ã¶zel mesaj yollar.',
  usage: 'mesajat'
};