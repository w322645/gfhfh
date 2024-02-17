const Discord = require('discord.js');


exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(new Discord.MessageEmbed().setDescription('Bu komutu kullanmak için **Rolleri Yönet** yetkisine sahip olmalısın.').setColor(10038562));
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
   

   let aRole = '1199425977932058664'

  
    await (rMember.roles.add('1199425977932058664'))
    message.channel.send(new Discord.MessageEmbed().setDescription(`${rMember} isimli üyeye \`${aRole.name}\` isimli yetki başarıyla verildi! :white_check_mark:`).setColor('RANDOM'));

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rolver', 'rolekle'],
  permLevel: 4
};

exports.help = {
  name: "rolver",
  description: "Kişilere Rol Yetkisi Verir",
  usage: "rolver <mesaj>"
};