module.exports = {
  config: {
    name: "botgc",
    version: "1.0",
    author: "Loid Butter",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "Add user to support group",
    },
    longDescription: {
      en: "This command adds the user to the admin support group.",
    },
    category: "𝗦𝗨𝗣𝗣𝗢𝗥𝗧 GC 👾",
    guide: {
      en: "\n\nTo use this command, simply type support.\n\n",
    },
  },

  // onStart is a function that will be executed when the command is executed
  onStart: async function ({ api, args, message, event }) {
    const supportGroupId = "6386827091394195"; // ID of the support group

    const threadID = event.threadID;
    const userID = event.senderID;

    // Check if the user is already in the support group
    const threadInfo = await api.getThreadInfo(supportGroupId);
    const participantIDs = threadInfo.participantIDs;
    if (participantIDs.includes(userID)) {
      // User is already in the support group
      api.sendMessage(
        "\n\n\‼𝐭𝐮 𝐞𝐬 𝐝𝐞́𝐣𝐚̀ 𝐝𝐚𝐧𝐬 𝐥𝐞 𝐠𝐫𝐨𝐮𝐩𝐞 𝐬𝐢 𝐭𝐮 𝐧𝐞 𝐭𝐫𝐨𝐮𝐯𝐞𝐬 𝐩𝐚𝐬 𝐥𝐞 𝐠𝐫𝐨𝐮𝐩𝐞 𝐩𝐚𝐫𝐦𝐢 𝐭𝐞𝐬 𝐦𝐞𝐬𝐬𝐚𝐠𝐞𝐬 𝐚𝐥𝐨𝐫𝐬 𝐯𝐞́𝐫𝐢𝐟𝐢𝐞 𝐝𝐚𝐧𝐬 𝐭𝐚 𝐛𝐨𝐢̂𝐭𝐞 𝐚̀ 𝐬𝐩𝐚𝐦𝐬...😕\n",
        threadID
      );
    } else {
      // Add user to the support group
      api.addUserToGroup(userID, supportGroupId, (err) => {
        if (err) {
          console.error("\n\nFailed to add user to support group:\n\n", err);
          api.sendMessage("\n\nI ❌𝐃𝐞́𝐬𝐨𝐥𝐞́ 𝐦𝐚𝐢𝐬 𝐣𝐞 𝐧𝐞 𝐩𝐞𝐮𝐱 𝐩𝐚𝐬 𝐯𝐨𝐮𝐬 𝐚𝐣𝐨𝐮𝐭𝐞𝐫 𝐜𝐚𝐫 𝐯𝐨𝐭𝐫𝐞 𝐢𝐝𝐞𝐧𝐭𝐢𝐟𝐢𝐚𝐧𝐭 𝐟𝐨𝐮𝐫𝐧𝐢𝐫 𝐧'𝐞𝐬𝐭 𝐩𝐚𝐬 𝐚𝐮𝐭𝐨𝐫𝐢𝐬𝐞́ 𝐚̀ 𝐝𝐞𝐦𝐚𝐧𝐝𝐞𝐫 𝐮𝐧 𝐦𝐞𝐬𝐬𝐚𝐠𝐞 𝐨𝐮 𝐯𝐨𝐭𝐫𝐞 𝐜𝐨𝐦𝐩𝐭𝐞 𝐞𝐬𝐭 𝐩𝐫𝐢𝐯𝐞́....😥\n\n", threadID);
        } else {
          api.sendMessage(
            "\n\n🎉✅𝐭𝐮 𝐚𝐬 𝐞́𝐭𝐞́ 𝐚𝐣𝐨𝐮𝐭𝐞́ 𝐚𝐯𝐞𝐜 𝐬𝐮𝐜𝐜𝐞̀𝐬 𝐝𝐚𝐧𝐬 𝐥'𝐞𝐦𝐩𝐢𝐫𝐞 𝐝𝐞 𝐦𝐨𝐧 𝐛𝐨𝐬𝐬 𝐬𝐢 𝐭𝐮 𝐧𝐞 𝐭𝐫𝐨𝐮𝐯𝐞𝐬 𝐩𝐚𝐬 𝐥𝐞 𝐠𝐫𝐨𝐮𝐩𝐞 𝐩𝐚𝐫𝐦𝐢 𝐭𝐞𝐬 𝐦𝐞𝐬𝐬𝐚𝐠𝐞𝐬 𝐚𝐥𝐨𝐫𝐬 𝐯𝐞́𝐫𝐢𝐟𝐢𝐞 𝐝𝐚𝐧𝐬 𝐭𝐚 𝐛𝐨𝐢̂𝐭𝐞 𝐚̀ 𝐬𝐩𝐚𝐦𝐬.....😉\n\n",
            threadID
          );
        }
      });
    }
  },
};
