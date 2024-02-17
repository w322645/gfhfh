const Discord = require("discord.js");

const fs = require('fs')
const fetch = require('node-fetch');


exports.run = async (client, message, args) => {

    

  

   var qwe = args[0];
  
//   const ss = await (`https://ay.live/api/?api=cb218cee9b5fe87386c67b75a99b2b64c342e122&url=asda&alias
// `).then(response => response.body.json("shortenedUrl"));
// 		console.log(ss);
  
// message.channel.send(ss) // https://ay.live/api/?api=cb218cee9b5fe87386c67b75a99b2b64c342e122&url=${qwe}&alias=&format=text

// const fetch = require("node-fetch");
// const res = await fetch(`https://ay.live/api/?api=cb218cee9b5fe87386c67b75a99b2b64c342e122&url=${qwe}&alias`);
// const data = await JSON.parse(res)

//now you don't have to do data.data.global.deaths, just global.deaths
  
  


// const url = 'https://ay.live/api/?api=cb218cee9b5fe87386c67b75a99b2b64c342e122&url=${qwe}&alias';
// const apikey = 'cb218cee9b5fe87386c67b75a99b2b64c342e122';
// axios({
//     url: 'https://ay.live/api/?api=cb218cee9b5fe87386c67b75a99b2b64c342e122&url=${qwe}&alias',
//     method: 'POST',
//     params: {
//         'url': url,
//         'apikey': apikey,
//         'js_render': 'true',
//         'antibot': 'true',
//         'premium_proxy': 'true',
//     },
// })
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error));
  
  
try {
      const response = await fetch(
        `https://ay.live/api/?api=cb218cee9b5fe87386c67b75a99b2b64c342e122&url=${qwe}&alias`,
      ).then(function (res) {
  return res.text();
        
        console.log(res.text())
})
      
      const data = await response.json

   

      const embed = new Discord.MessageEmbed();
      // you could also get the number of stories from args[0]
    
console.log(response)

        embed.setTitle(data.shortenedUrl);
        embed.setDescription(data.status);
      
    

    

        message.channel.send(embed);
      
    } catch (error) {
      message.channel.send('Oops, there was an error fetching the API');
      console.log(error);
    }
  

//   request(`https://ay.live/api/?api=cb218cee9b5fe87386c67b75a99b2b64c342e122&url=${qwe}&alias`, (err, response, body) => {
//         if (err) throw(err);
//         var data = JSON.parse(body);
//         let vietnam = new Discord.MessageEmbed()
//         .setColor('#32a860')
//         .setTitle('Thống kê tại Việt Nam')
//         .addField('☢️Nhiễm:', data.shortenedUrl)

//         message.channel.send(vietnam)

//         message.channel.send("Nhớ giữ sức khỏe nhé bạn <3")     
//     });
      
      
//         let vietnam = new Discord.MessageEmbed()
//         .setColor('#32a860')
//         .setTitle('Thống kê tại Việt Nam')
//         .addField('☢️Nhiễm:', data.shortenedUrl)

//         message.channel.send(vietnam);
 
//         message.channel.send("Nhớ giữ sức khỏe nhé bạn <3")  
    
      
// const response = await fetch(`https://ay.live/api/?api=cb218cee9b5fe87386c67b75a99b2b64c342e122&url=${qwe}&alias=&format=text`).then(r => r.text())
// console.log(response)
  
//    message.channel.send(`the result is ${response}`)
  

  
 
//   const catResult = await request(`https://ay.live/api/?api=cb218cee9b5fe87386c67b75a99b2b64c342e122&url=${qwe}&alias`);
// const { response } = await catResult.body.json("shortenedUrl");
  
// message.channel.send(`the result is ${response}`)
// //    // let açıklama = args[2];
// //    let açıklama = args.slice(1).join(' ')




};
                





exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 's',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};
