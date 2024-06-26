module.exports = {
    config: {
        name: "salut",
        version: "1.0",
        author: "EINSTEIN JUNIOR",
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
    if (event.body && event.body.toLowerCase() == "salut") return message.reply("𝗛𝗲𝗹𝗹𝗼, 𝗵𝗼𝘄 𝗮𝗿𝗲 𝘆𝗼𝘂 ? 𝗜 𝗮𝗺 𝘆𝗼𝘂𝗿 𝘃𝗶𝗿𝘁𝘂𝗮𝗹 𝗮𝘀𝘀𝗶𝘀𝘁𝗮𝗻𝘁 𝗿𝗲𝗮𝗱𝘆 𝘁𝗼 𝗮𝗻𝘀𝘄𝗲𝗿 𝘆𝗼𝘂𝗿 𝗾𝘂𝗲𝘀𝘁𝗶𝗼𝗻𝘀 🤭

                                                                                ");
}
};
