const Discord = require("discord.js");
const db = require("quick.db");
  const talkedRecently = new Set();
exports.run = async (client, message, args) => {
var renk = '0x36393E'
  let guild = message.channel.guild
  let rol = db.fetch(`banrol_${message.guild.id}`);
  if (
    !message.member.roles.cache.has(rol) &&
    !message.member.hasPermission("BAN_MEMBERS")
  )
    return message.channel.send("BAN Yetkisine sahip değilsin.");
  let banlog = db.fetch(`banlog_${message.guild.id}`);
  if (message.content === '?ban') {
    message.react("🔨"); // buraya istediğiniz emojinin ID'sini girin
}
  if (!banlog)
    return message.channel.send(
      "Ban log sistemi ayarlanmamış.**Ayarlamak İçin** `?ban-log #kanal`"
    );
  let user = message.mentions.users.first();
  let sebep = args.slice(1).join(" ") || "Belirtilmemiş.";
  if (!user) return message.channel.send(" ``Bir kişi etiketlemelisin.``");
  if (user.id === message.author.id)
    return message.channel.send(" ``Kendini banlayamazsın.``");
  if (user.id === client.user.id)
    return message.channel.send(" ``Botu banlayamazsın.``");
  if (user.id === message.guild.ownerID)
    return message.channel.send(" ``Sunucu sahibini banlayamazsın.``");
  if (!message.guild.member(user).bannable)
    return message.reply(
      "``Bu kişinin rolü senden üstte veya `Üyeleri yasakla` yetkisine sahip.``"
    );

  message.channel
    .send(
      "<@" +
        user.id +
        "> Kişisini **" +
        sebep +
        "** Sebebiyle banlamak istediğine eminmisin ? "
    )
    .then(async m => {
      m.react("✅").then(r => {
        const tamam = (reaction, user) =>
          reaction.emoji.name == "✅" && user.id == message.author.id;
        const tamam2 = m.createReactionCollector(tamam);
        tamam2.on("collect", async r => {
          message.guild.members.cache.get(user.id).ban({
            reason: `${sebep}`
          });
        let embeds = new Discord.MessageEmbed()
        .setColor(renk)
        .setTitle(`${guild.name} **Sunucusundan Banlandınız !!**`)
        .setTimestamp()
        .setDescription(`\`\`\`\n${sebep}\n\`\`\`\n`);
         user.send(embeds);
          
          let embed = new Discord.MessageEmbed()
            .setColor(renk)
            .setTitle(" Kişi Banlandı ")
            .addField("Yetkili", `🛡️__${message.author.tag}__🛡️`)
            .addField("Banlanan kişi", user)
            .addField("Sebep", sebep)
            .setImage(
              "https://media1.giphy.com/media/fe4dDMD2cAU5RfEaCU/giphy.gif"
            )
            .setThumbnail(
              "https://media.giphy.com/media/Rp0U1kTu2gzrEowbJL/giphy.gif"
            );
          client.channels.cache.get(banlog).send(embed);
          
        });
      });
      await m.react("❌").then(r => {
        const tamam = (reaction, user) =>
          reaction.emoji.name == "❌" && user.id == message.author.id;
        const tamam2 = m.createReactionCollector(tamam);

        tamam2.on("collect", async r => {
          m.delete();
          message.channel.send("Banlama işlemi iptal edildi.");
        });
      });
    });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permlevel: 2
};

exports.help = {
  name: "ban"
};