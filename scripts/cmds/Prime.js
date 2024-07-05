const axios = require('axios');

async function fetchFromAI(url, params) {
  try {
    const response = await axios.get(url, { params });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function getAIResponse(input, userId, messageID) {
  const services = [
    { url: 'https://ai-tools.replit.app/gpt', params: { prompt: input, uid: userId } },
    { url: 'https://openaikey-x20f.onrender.com/api', params: { prompt: input } },
    { url: 'http://fi1.bot-hosting.net:6518/gpt', params: { query: input } },
    { url: 'https://ai-chat-gpt-4-lite.onrender.com/api/hercai', params: { question: input } }
  ];

  let response = "𝗛𝗲𝗹𝗹𝗼, 𝗵𝗼𝘄 𝗱𝗼 𝘆𝗼𝘂 𝗸𝗻𝗼𝘄, 𝗜'𝗺 𝗢𝗣𝗧𝗜𝗠𝗨𝗦, 𝗹𝗮𝘀𝘁 𝗱𝗲𝘀𝗰𝗲𝗻𝗱𝗮𝗻𝘁 𝗼𝗳 𝗣𝗥𝗜𝗠𝗘𝗦, 𝗿𝗲𝗮𝗱𝘆 𝘁𝗼 𝗮𝗻𝘀𝘄𝗲𝗿 𝗮𝗹𝗹 𝘆𝗼𝘂𝗿 𝗾𝘂𝗲𝘀𝘁𝗶𝗼𝗻𝘀 ";
  let currentIndex = 0;

  for (let i = 0; i < services.length; i++) {
    const service = services[currentIndex];
    const data = await fetchFromAI(service.url, service.params);
    if (data && (data.gpt4 || data.reply || data.response)) {
      response = data.gpt4 || data.reply || data.response;
      break;
    }
    currentIndex = (currentIndex + 1) % services.length; // Move to the next service in the cycle
  }

  return { response, messageID };
}

module.exports = {
  config: {
    name: 'prime',
    author: 'Arn',
    role: 0,
    category: 'ai',
    shortDescription: 'ai to ask anything',
  },
  onStart: async function ({ api, event, args }) {
    const input = args.join(' ').trim();
    if (!input) {
      api.sendMessage(`━━━━━✰✰.-.✰✰━━━━━\n━━━━━✰✰.-.✰✰━━━━━ Please provide a question or statement.\n`, event.threadID, event.messageID);
      return;
    }

    const { response, messageID } = await getAIResponse(input, event.senderID, event.messageID);
    api.sendMessage(` \n━━━━━✰✰.-.✰✰━━━━━ \n${response}\n
━━━━━✰✰.-.✰✰━━━━━`, event.threadID, messageID);
  },
  onChat: async function ({ event, message }) {
    const messageContent = event.body.trim().toLowerCase();
    if (messageContent.startsWith("prime")) {
      const input = messageContent.replace(/^optimus\s*/, "").trim();
      const { response, messageID } = await getAIResponse(input, event.senderID, message.messageID);
      message.reply(`

⧠⧠⧠⧠⧠✰✰✰⧠⧠⧠⧠⧠\n
\n${response} 😜\n\n
╰┈┈┈➤⊹⊱✰✫✰⊰⊹`, messageID);
    }
  }
};
