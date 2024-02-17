const Discord = require("discord.js");
const data = require("quick.db");

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  };
  message.channel
    .send(
      new Discord.MessageEmbed()
        .setColor("#36393f")
        .setDescription(`${message.author} **Ping Hesaplanıyor...**`)
    )
    .then(m => {
      setTimeout(() => {
        m.edit(
          new Discord.MessageEmbed()
           .setColor("#36393f")
    .addField(
      "**__Gecikme Sürem__**",
      `📶 **${client.ws.ping}** ms Olarak Hesaplandı.`,true)
        );
      }, 4500);
    });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Belirlediğiniz miktarda mesaj siler',
  category:'yetkili',
  usage: 'sil 100'
};