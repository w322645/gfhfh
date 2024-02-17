const Discord = require("discord.js");

// const client = new Discord.Client({
//   intents: 131071,
//   ws: { properties: { $browser: "Discord Android" } },
// });
const client = new Discord.Client();
const { Client } = require('discord.js');
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const fs = require("fs");
const moment = require("moment");
const Jimp = require("jimp");
const db = require("quick.db");
const disbut = require('discord-buttons')(client);
const os = require('os');
var prefix = ayarlar.prefix;
const Database = require("plasma-db");
const dbq = new Database("./kis.json");
const http = require("http");
const express = require("express");
const app = express();
// const slash = require('discord-slash-commands-v12');
// slash(client);

const Canvas = require('canvas')
    , Font = Canvas.Font
    , path = require('path');
const request = require('node-superfetch');
  


  const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

  
app.get("/", (request, response) => {
  
//    var ensest = db.fetch(`ekleen_${message.guild.id}`) || 'yok'
  
  response.send(dbq)
  



  
})  

app.listen(process.env.PORT);
// PAYLAŞILANLAR SLASH KOMUTU
client.on("ready", () => {
  client.api.applications(client.user.id).commands.post({data: {
      name: 'paylaşılan',
      description: 'Paylaşılanlar!'
  }})
});

client.ws.on('INTERACTION_CREATE', async   interaction => {

const resim = new Database("./kis.json");

    let ensest = db.fetch(`ekleen_${interaction.guild_id}`) || 'yok'
   let lise = db.fetch(`eklelise_${interaction.guild_id}`) || 'yok'
     let tr = db.fetch(`ekletr_${interaction.guild_id}`) || 'yok'



      var acıklama = db.fetch(`acıklama_${interaction.guild.id}`) || 'yok'
       var resss = resim.fetch(`görsel_${interaction.guild.id}`)
   var kanal = db.fetch(`kanalw_${interaction.guild.id}`) || 'yok'

const { createCanvas, loadImage } = require('canvas');
            const canvas = Canvas.createCanvas(600, 600);
            const ctx = canvas.getContext("2d");
var background = await loadImage("https://cdn.glitch.global/931f2d6c-b91b-49e7-985f-0d7178f1832b/Untitled-1.png?v=1708190675341");
            ctx.drawImage(background , 0 ,0 , canvas.width , canvas.height);
const avatar = await Canvas.loadImage(resss);
    ctx.drawImage(avatar , 170 , 330 , 250 , 250);

            // ctx.font = '30px sans-serif';
            // ctx.fillStyle = "#000000";
            // ctx.fillText(`Türk İfşa` , canvas.width / 8.10, 150 )
    ctx.font = '30px sans-serif';
            ctx.fillStyle = "#000000";
            ctx.fillText(`${tr}` , canvas.width / 5.17, 200 )
  // ctx.font = '40px sans-serif';
  //           ctx.fillStyle = "#000000";
  //           ctx.fillText(`PAYLAŞILAN İFŞALAR` , canvas.width / 5.40, 40 )
    // ctx.font = '30px sans-serif';
    //         ctx.fillStyle = "#000000";
    //         ctx.fillText(`En Son Paylaşılan` , canvas.width / 3.80, 300 )
   // ctx.font = '30px sans-serif';
   //          ctx.fillStyle = "#000000";
   //          ctx.fillText(`Lise` , canvas.width / 2.10, 150 )
      ctx.font = '30px sans-serif';
            ctx.fillStyle = "#000000";
            ctx.fillText(`${lise}` , canvas.width / 2.15, 200 )
        ctx.font = '25px sans-serif';
            ctx.fillStyle = "#000000";
            ctx.fillText(`${kanal}` , canvas.width / 2.15, 277 )

//     ctx.font = '30px sans-serif';
//             ctx.fillStyle = "#000000";
//             ctx.fillText(`Ensest` , canvas.width / 1.43, 150 )
      ctx.font = '30px sans-serif';
            ctx.fillStyle = "#000000";
            ctx.fillText(`${ensest}` , canvas.width / 1.29, 200 )
            
    
            
            const attachment = new Discord.MessageAttachment(
              canvas.toBuffer(),
              "qqq.png"
              
            );
  
         const qq = client.channels.cache.find(x => x.id == '1207124272762462268')
         
  const reply = await qq.send({ files: [attachment] });
    const attachmentURL = reply.attachments.first().url;
  
  const command = interaction.data.name.toLowerCase();

       

const pay = new Discord.MessageEmbed().setImage(attachmentURL).setColor('PURPLE').setDescription('İFSALAND')

  if ( command == 'paylaşılan'){
    client.api.interactions(interaction.id, interaction.token).callback.post({
      data: {
        type: 4,
        data: {
          embeds:  [ pay ]
        }
      }
    }).catch(console.error);
  }
});

// YARDIM ↓
client.on("ready", () => {
  client.api.applications(client.user.id).commands.post({data: {
      name: 'yardım',
      description: 'yardım seçenekleri!'
  }})
});

client.ws.on('INTERACTION_CREATE', async  interaction => {
  const command = interaction.data.name.toLowerCase();
 const embed = new Discord.MessageEmbed()


.addField('.str',`Türk İfş@ Kanalına İfşa Atar .str (görüntü-link) (trlink) (açıklama)`,true)
.addField('.stl',`Türk Lise İfş@ Kanalına İfşa Atar .str (görüntü-link) (trlink) (açıklama)`,true)
.addField('.slg',`Türk Lise İfş@ Kanalına İfşa Atar .str direk dosya (trlink) (açıklama)`,true)
.addField('.sten',`Türk Ensest İfş@ Kanalına İfşa Atar .str (görüntü-link) (trlink) (açıklama)`,true)
.addField('.paylaşılan',`Paylaşılan İfş@lar`,true)
.addField('.gizle',`Yazılan Kanalı Üyelere Gizler`,true)
.addField('.aç',`Yazılan Kanalı Üyelere Açar`,true)
.addField('.yaz',`Bota Yazdırısınız`,true)
 // .setImage('https://media.discordapp.net/attachments/1197114859565895730/1197848711611551764/logo-no-background.png?ex=65bcc28b&is=65aa4d8b&hm=52d7a7737d46ae4803b417939e324f654d86e0c54b98a8b08d5ea68091f0b762&=&format=webp&quality=lossless&width=1440&height=480')
// .setThumbnail('https://media.discordapp.net/attachments/1197114859565895730/1197848711611551764/logo-no-background.png?ex=65bcc28b&is=65aa4d8b&hm=52d7a7737d46ae4803b417939e324f654d86e0c54b98a8b08d5ea68091f0b762&=&format=webp&quality=lossless&width=1440&height=480')
.setThumbnail('https://telegramgrupbul.com/gorsel/gruplar/22941photo_2020-03-25_13-18-32.jpg')


  if (command == 'yardım'){
     client.api.interactions(interaction.id, interaction.token).callback.post({
      data: {
        type: 4,
        data: {
          embeds: [ embed ]
        }
      }
    }).catch(console.error);
  }
});







// client.SlashCommandManager = new SlashCommandManager(client);

// client.once('ready', async () => {
//     const commandExists = await client.SlashCommandManager.globalCommandExists('yardım');
//     if (!commandExists) client.SlashCommandManager.createGlobalCommand({
//         name: 'yardım',
//         description: 'yardım seçeneklerini gösterir'
//     }).catch(console.error);
// });

// client.ws.on('INTERACTION_CREATE', async interaction => {
//     switch (interaction.data.name) {
//         case "ping":
//             client.SlashCommandManager.respond(interaction, {
//                 type: 3,
//                 data: {
//                     content: 'Pong!',
//                     flags: 1 << 6
//                 }
//             });
//             break;

//         default:
//             client.SlashCommandManager.respond(interaction, {
//                 type: 3,
//                 data: {
//                     content: `No handler found for \`/${interaction.data.name}\``,
//                     flags: 1 << 6
//                 }
//             });
//             break;
//     };
// });


client.on("message", async (message,member) => {
  // DEKONT SİSTEMİ
 

    if (message.channel.type === "dm") {
        if (message.author.bot) return;
      
    
      
       let attachments = [];
   
    if (message.attachments) message.attachments.forEach(attachment => {
      attachments.push(`[${attachment.name}](${attachment.url})`);
    })
      
  
      
      var mesajh = message.content || 'Mesaj Göndermedi'
         var dosya = attachments || 'Dosya Göndermedi'
         
message.channel.send(new Discord.MessageEmbed().setColor('YELLOW').setImage('https://images-ext-1.discordapp.net/external/5v-vlLUyLwrvGsRIQMDNqFvwgDCl5IEF1grGeXpRNpk/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/1203451887685468231/d500eb68fbeb430d171d52ccf07e1d46.webp?format=webp&width=1246&height=1246').setDescription('Attığın Dekont İşleme Alındı Onaylanınca Sana Otomatik rol Verilicektir \n\n\n Dosya Göndermediğiniz Halde İşlem Onaylanmaz'))
        const thtdm = new Discord.MessageEmbed()
          
         .setTitle(`**Ödeme Seçenekleriyle Alakalı Bir Yeni Mesajınız Var!**`)
         .setColor('"#D50000"')
         .addField(`**Mesajı ileten kişi;**`,`<@!${message.author.id}>`,true)
         .addField(`**Dekont mesajın içeriği;**`,`→${mesajh}` ,true)
         .addField(`**Dekont mesajın içeriği;**`, `→${dosya}` ,true)
        .addField(`** XAGXANİAT Ödemeyi Onaylıyorsan Tike Tıkla;**`, ':white_check_mark: ↓' ,true)
        .addField(`** W32 Ödemeyi Onaylıyorsan Tike Tıkla;**`, '<:2365win11checkicon:1202718368977788999> ↓' ,true)
        
        
      
      
    
      
    
    client.channels.cache.get("1203693787952582706").send(thtdm).then(sunucu => {         
      
         
        
    sunucu.react("✅").then(() => sunucu.react("<:2365win11checkicon:1202718368977788999>"));
      

        let cso = (reaction,user) =>
         reaction.emoji.name === "✅" && user.id == `1204135917678370956` 
        
  let csp = (reaction,user) =>
         reaction.emoji.name === "2365win11checkicon" && user.id == `852641223947845743` 

        let csv = sunucu.createReactionCollector(cso, { time: 0 });
       let csq = sunucu.createReactionCollector(csp, { time: 0 });
   
       
      
     csv.on("collect", async r => {


        
          message
            .reply(new Discord.MessageEmbed()
                   .setColor('GREEN')
                   .setImage('https://images-ext-1.discordapp.net/external/5v-vlLUyLwrvGsRIQMDNqFvwgDCl5IEF1grGeXpRNpk/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/1203451887685468231/d500eb68fbeb430d171d52ccf07e1d46.webp?format=webp&width=1246&height=1246')
                   .setDescription(
              "**Attığın Dekont Kontrol Edilip Yetkililerimizce Onaylandı \n\n\n:white_check_mark: Server Booster Paralı Key Verildi!** "+`${message.author}`//discord.gg/türkiye
            ))
            .then
      
        
         const guild = client.guilds.cache.get('1199061804492521575')
    
        const member =  guild.members.cache.get(message.author.id)
                const roleq = '1199786579338735627'
                
                
    member.roles.add(roleq).then(
        client.channels.cache.get("1203693787952582706").send(`TOKEN: ${message.author} Kişisine Paralı Key Rolü Verildi `)
    )
        
    
        
        });
      
           csq.on("collect", async r => {


        
          message
            .reply(new Discord.MessageEmbed()
                   .setColor('GREEN')
                   .setImage('https://images-ext-1.discordapp.net/external/5v-vlLUyLwrvGsRIQMDNqFvwgDCl5IEF1grGeXpRNpk/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/1203451887685468231/d500eb68fbeb430d171d52ccf07e1d46.webp?format=webp&width=1246&height=1246')
                   .setDescription(
              "**Attığın Dekont Kontrol Edilip Yetkililerimizce Onaylandı \n\n\n:white_check_mark: Server Booster Paralı Key Verildi!** "+`${message.author}`//discord.gg/türkiye
            ))
            .then
      
        
         const guild = client.guilds.cache.get('1199061804492521575')
    
        const member =  guild.members.cache.get(message.author.id)
                const roleq = '1199786579338735627'
                
                
    member.roles.add(roleq).then(
        client.channels.cache.get("1203693787952582706").send(`TOKEN: ${message.author} Kişisine Paralı Key Rolü Verildi `)
    )
        
    
        
        });
      
      
      
    })
       client.channels.cache.get("1203693787952582706").send('<@&1199425977932058664> <@&1202714562550566942>').catch(err => console.log(err));
      
      
      
    
      
    }

});
// client.on("ready", () => {
//     setInterval(function() {
//  var çalmayın = ['Güncellemeler Hergün Saat 20:00 ile 00:00 Arasında Yapılmaktadır','İfş@ lara linklerden Ulaşamıyorsanız <#1200931640285855895> Kanalından Öğrenebilirsiniz']
//   var Covid = çalmayın[Math.floor(Math.random() * çalmayın.length)];
//     const embed = new Discord.MessageEmbed()
//   .setTitle(`İFŞALAND`)
//   .setColor("RED")
//   .setDescription(Covid)
//   .setTimestamp()
//   client.channels.cache.get("1199126983397883904").send(embed) // embed mesaj istemiyorsanız .send(Covid) olarak değiştirin.
//   }, 1000 * 60 * 60 * 1); // şu anda her 3 saatte bir mesaj atar 1 gün için 1000 * 60 * 60 *24 1 saat için 1000 * 60 * 60 * 1 yazabilirsiniz.
// });

///////////// KOMUTLAR BAŞ
client.on('message', async (msg) => {
      if (msg.channel.id !== "1200181240431640646") return;//KANALID Diye Belirttiğim Kısma Kanal ID Yaz
await msg. react('👍🏻')
await msg. react('👎🏻')
await msg. react('😂')
await msg. react('😔')
await msg. react('🤔')
await msg. react('🤬')


});
client.on('message', async (msg) => {
      if (msg.channel.id !== "1200524391612678144") return;//KANALID Diye Belirttiğim Kısma Kanal ID Yaz
await msg. react('👍🏻')
await msg. react('👎🏻')
await msg. react('😂')
await msg. react('😔')
await msg. react('🤔')
await msg. react('🤬')


});
client.on('message', async (msg) => {
      if (msg.channel.id !== "1200873926323089480") return;//KANALID Diye Belirttiğim Kısma Kanal ID Yaz
await msg. react('👍🏻')
await msg. react('👎🏻')
await msg. react('😂')
await msg. react('😔')
await msg. react('🤔')
await msg. react('🤬')


});
// client.on("ready", () => {
//     setInterval(function() {
//  var çalmayın = ['Güncellemeler Hergün Saat 20:00 ile 00:00 Arasında Yapılmaktadır','İfş@ lara linklerden Ulaşamıyorsanız <#1200931640285855895> Kanalından Öğrenebilirsiniz']
//   var Covid = çalmayın[Math.floor(Math.random() * çalmayın.length)];
//     const embed = new Discord.MessageEmbed()
//   .setTitle(`İFŞALAND`)
//   .setColor("RED")
//   .setDescription(Covid)
//   .setTimestamp()
//   client.channels.cache.get("1199126983397883904").send(embed) // embed mesaj istemiyorsanız .send(Covid) olarak değiştirin.
//   }, 1000 * 60 * 60 * 1); // şu anda her 3 saatte bir mesaj atar 1 gün için 1000 * 60 * 60 *24 1 saat için 1000 * 60 * 60 * 1 yazabilirsiniz.
// });

//Katılma
// client.on('guildMemberAdd', async member => {
// //cheN#2178

// const log2 = client.channels.cache.find(x => x.id == '1200916543110909982')
// const log = client.channels.cache.find(x => x.id == '1200916550916509877')
// let user = client.users.cache.get(member.id);

// await log2.setName(member.guild.memberCount + " Kişiyiz")
  
// log.setName("Katılan: " + user.tag + "")


// })


//DURUM LOGU



//    client.on("ready", () => {
//     setInterval(function() {
//     const uptime = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
//   const embed = new Discord.MessageEmbed()
//   .setTitle(`Covid-19`)
//   .setImage('https://media.discordapp.net/attachments/869084344973672449/957821648592052244/207-2077577_server-png-web-hosting-banner-png.png?width=300&height=131')
//   .setColor('RED')
//   .setDescription(`
//   **Developer:** W32
  
  
//   test 
// `)
//   .setTimestamp()
//   client.channels.cache.get("957818015351730247").messages.fetch("957819249357914193")
//           .then(msg => { msg.edit(embed)
//           });
//   }, 400 * 30);
// }); 

client.on("guildMemberAdd", async member => {
   
    const uptime = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  
// member.send(new Discord.MessageEmbed()
// .setColor("#ff2400")
// .setThumbnail('https://cdn.discordapp.com/attachments/1202764002258845746/1202767937602322483/Baslksz-2.png?ex=65cea7ee&is=65bc32ee&hm=7fdf61233a4a6a296cd548be60ac202dcdc4ea9b9fcadfb809663212e4327fc9&')
// .setTitle('İFŞ@LAND SUNAR')
// .setDescription('<@!'+ client.users.cache.get(member.id) + '> Hey Dostum Sunucumuza Hoşgeldin Haberin olsun Diye Sölüyorum Piyasanın En Dolu Ve En Gelişmiş Sunucusuna Geldin Hadi Asıl Bakim Kollarına Kuvvet Diler ; İyi Vakitler Geçirmeni Hedefleriz !!')
// .setImage('https://cdn.discordapp.com/attachments/1202764002258845746/1202767937258262548/Baslksz-1.png?ex=65cea7ee&is=65bc32ee&hm=a2b4b83f9be5f9b134b6c2e17028f5e06bf025b5a8dae6380a0feecfc4e4f0df&'))
  
  const embed = new Discord.MessageEmbed()
  .setTitle(`ifş@land`)
  .setColor("GREEN")
  .setThumbnail(client.users.cache.get(member.id).displayAvatarURL())
  .setDescription(`
  **Developer:** ${client.users.cache.get("810945264410951700").tag}

  **Kanal Sayısı:** ${client.channels.cache.size}
 
  **Kullanıcı Sayısı:** ${member.guild.memberCount}
 
 
  **En son Katılan Kişi:** ${client.users.cache.get(member.id)}

  `)
  .setTimestamp()
  client.channels.cache.get("1201610216899366982").messages.fetch("1201615677719580692")
          .then(msg => { msg.edit(embed)
          });

}); 

//Ayrılma
// client.on('guildMemberRemove', async member => {

// const log2 = client.channels.cache.find(x => x.id == '1200916543110909982')
// const log = client.channels.cache.find(x => x.id == '1200918850573701350')
// let user = client.users.cache.get(member.id);

// log2.setName(member.guild.memberCount + " Kişiyiz")
  
// log.setName("Ayrılan: " + user.tag + "")





// })


client.on("guildMemberRemove", async member => {

    const uptime = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  const embed = new Discord.MessageEmbed()
  .setTitle(`ifş@land`)
  .setColor("RED")
    .setThumbnail(client.users.cache.get(member.id).displayAvatarURL())
  .setDescription(`

 
  **En son Ayrılan Kişi:** ${client.users.cache.get(member.id)}

  `)
  .setTimestamp()
  client.channels.cache.get("1201610216899366982").messages.fetch("1201615729649254420")
          .then(msg => { msg.edit(embed)
          });
 ;
}); 


// client.on("message", (message) => {


//   const reklam = [
//     "dm me",
//     "text me",

//   ];
//   if (reklam.some((word) => message.content.includes(word))) {
//     try {
//       if (!message.member.hasPermission("BAN_MEMBERS")) {
//         message.delete();
//         return message.reply(
//           "**Bu Sunucuda** `Reklam Engelle`** Aktif Reklam Yapmana İzin Vermem İzin Vermem ? !**"
//         ).then;
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   }
// });

client.on('message', message => {
const reklam = [
    "dm me",
    "text me",
  "dmme",
  "textme",
  "discord.gg/",

  ];
  if (reklam.some((word) => message.content.includes(word))) {
    
if (!message.member.hasPermission("BAN_MEMBERS")) {
  
      message.delete() // Deletes the message
      message.channel.send('<@!'+ message.author.id + '> Kullandığınız Kelime Bu Sunucuda Karantinada ').then(msg=>msg.delete({timeout:"5000"})
   )}};
 
  
});






// client.on('message', message => {
//    if (message.content.toLowerCase("text me")) {

  
//       message.delete() // Deletes the message
//       message.channel.send('<@!'+ message.author.id + '> Kullandığınız Kelime Bu Sunucuda Karantinada ').then(msg=>msg.delete({timeout:"5000"})
//    )}
// });




// client.on('message', message => {
//    if (message.content.startsWith("dm me")) {

  
//       message.delete() // Deletes the message
//       message.channel.send('<@!'+ message.author.id + '> Kullandığınız Kelime Bu Sunucuda Karantinada ').then(msg=>msg.delete({timeout:"5000"})
//    )}
// });


////////////// KOMUTLAR SON

require("./util/eventLoader")(client);

client.login(process.env.token);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} Adet Komut Yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen Komut: ${props.help.name}`);
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
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (ayarlar.sahip.includes(message.author.id)) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});








client.login(process.env.token);
