const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");
const { prefix, developerID, support, bot } = require("../../config.json")
const {b, bnn, c, d, i, inv, m, p, pr, r, s, v, vo, lofi, su, dot, dev, lang} = require("../../emojis.json")

module.exports = {
  name: "premium",
  aliases: ["paid"],
  description: "Information",
  premium: false,

  run: async (client, message, args) => {
     
    const db =require("quick.db");
let color = db.get(`color_${message.author.id}`);
  if(color === null) color = "#EFB9BE";

let guild = await db.get(`premium_${message.guild.id}`);

if(guild) {
 if(args[0] == "chilledkrava2022")
  {
      db.set(`premium_${message.guild.id}`, true)

  let helpEmbeds = new MessageEmbed()
      .setDescription(`**${pr} Server is already premium** \n${b}${dot} **Promo Code was by:** [ＣｈｉｌｌｅｄＣｏｗ#3958]()`)
      .setColor(color)


      return message.channel.send(helpEmbeds);
  } else {
    let helpEmbed = new MessageEmbed()
      .setDescription(`**${pr} Premium Commands** \n${b}${dot} 24/7`)
      .setColor(color)


      return message.channel.send(helpEmbed);
  }

}

if(!guild) {
  if(args[0] == "chilledkrava2022")
  {
      db.set(`premium_${message.guild.id}`, true)

  let helpEmbeds = new MessageEmbed()
      .setDescription(`**${pr} Server is now premium** \n${b}${dot} Thanks for using lofi.cofe`)
      .setColor(color)


      return message.channel.send(helpEmbeds);
  } else {
    let helpEmbed = new MessageEmbed()
      .setDescription(`**${pr} Premium Commands** \n${b}${dot} 24/7`)
      .setColor(color)


      return message.channel.send(helpEmbed);
  }
}
  }
};