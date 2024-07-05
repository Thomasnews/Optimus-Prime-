module.exports = {
    config: {
        name: "salut",
        version: "1.0",
        author: "🍁..𝗘𝗜𝗡𝗦𝗧𝗘𝗜𝗡..🍁",
        countDown: 5,
        role: 0,
        shortDescription: "sarcasm",
        longDescription: "sarcasm",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "salut") return message.reply("𝐥𝐚 𝐟𝐞𝐫𝐦𝐞🤫 𝐭𝐞𝐬 𝐬𝐚𝐥𝐮𝐭𝐬 𝐭𝐮 𝐩𝐞𝐮𝐱 𝐭𝐞 𝐥𝐞𝐬 𝐦𝐞𝐭𝐭𝐫𝐞 𝐚𝐮 𝐜𝐮𝐥 𝐬𝐢 𝐬𝐚 𝐭'𝐚𝐫𝐫𝐚𝐧𝐠𝐞 🤏🧠🫰✨");
}
};
