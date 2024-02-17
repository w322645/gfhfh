const Discord = require('discord.js');
const db = require('quick.db');

const Canvas = require('canvas')
    , Font = Canvas.Font
    , path = require('path');
const request = require('node-superfetch');

exports.run = async (client, message, args) => {
  

  
var kişi = message.mentions.users.first()|| message.author

    var ensest = db.fetch(`ekleen_${message.guild.id}`) || 'yok'
   var lise = db.fetch(`eklelise_${message.guild.id}`) || 'yok'
     var tr = db.fetch(`ekletr_${message.guild.id}`) || 'yok'
      var acıklama = db.fetch(`acıklama_${message.guild.id}`) || 'yok'
       var görsel = db.fetch(`görsel_${message.guild.id}`) || 'https://play-lh.googleusercontent.com/M8_63qgq3RwwF5Qj6-GH9Vli-5AJBdAG9h1-TpOWyacCz_y9Kb87CehsGu94itetfqM'


const { createCanvas, loadImage } = require('canvas');
            const canvas = Canvas.createCanvas(600, 600);
            const ctx = canvas.getContext("2d");
var background = await loadImage("https://cdn.glitch.global/931f2d6c-b91b-49e7-985f-0d7178f1832b/3155-antrasit-gri.jpg?v=1708036000166");
            ctx.drawImage(background , 0 ,0 , canvas.width , canvas.height);
const avatar = await Canvas.loadImage(görsel);
    ctx.drawImage(avatar , 170 , 330 , 250 , 250);

            ctx.font = '30px sans-serif';
            ctx.fillStyle = "#000000";
            ctx.fillText(`Türk İfşa` , canvas.width / 8.10, 150 )
    ctx.font = '30px sans-serif';
            ctx.fillStyle = "#000000";
            ctx.fillText(`${tr}` , canvas.width / 7.10, 200 )
  ctx.font = '40px sans-serif';
            ctx.fillStyle = "#000000";
            ctx.fillText(`PAYLAŞILAN İFŞALAR` , canvas.width / 5.40, 40 )
    ctx.font = '30px sans-serif';
            ctx.fillStyle = "#000000";
            ctx.fillText(`En Son Paylaşılan` , canvas.width / 3.80, 300 )
   ctx.font = '30px sans-serif';
            ctx.fillStyle = "#000000";
            ctx.fillText(`Lise` , canvas.width / 2.10, 150 )
      ctx.font = '30px sans-serif';
            ctx.fillStyle = "#000000";
            ctx.fillText(`${lise}` , canvas.width / 2.10, 200 )

    ctx.font = '30px sans-serif';
            ctx.fillStyle = "#000000";
            ctx.fillText(`Ensest` , canvas.width / 1.43, 150 )
      ctx.font = '30px sans-serif';
            ctx.fillStyle = "#000000";
            ctx.fillText(`${ensest}` , canvas.width / 1.43, 200 )
            
    
            
            const attachment = new Discord.MessageAttachment(
              canvas.toBuffer(),
              "ppp.jpg"
              
            );
  
         const qq = client.channels.cache.find(x => x.id == '1207124272762462268')
         
  const reply = await qq.send({ files: [attachment] });
    const attachmentURL = reply.attachments.first().url;
  
            message.channel.send(new Discord.MessageEmbed().setImage(attachmentURL).setColor('PURPLE').setDescription('İFSALAND'))
 };

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['22'],
  permLevel: 4
};

exports.help = {
  name: '22',
  description: 'Belirlediğiniz miktarda mesaj siler',
  category:'yetkili',
  usage: 'sil 100'
};


