// autoreact.js

// List of emojis to use for reactions
const emojis = [
    '😀', '😂', '😍', '😎', '😢', '👍', '👎', '💪', '❤️', '🌝', '🌞', '🔥', '💯', '👏', '🎉', '💥', '😡', '😱', '🥳'
];

// Function to handle auto-reactions
module.exports = async (conn, mek) => {
    try {
        // Check if there's a new message
        if (!mek.hasNewMessage) return;
        mek = mek.messages.all()[0];

        // Check if auto-reaction is enabled in the configuration
        const autoReactEnabled = conn.config.AUTO_REACT === "true";  // Add AUTO_REACT to config.js
        if (!autoReactEnabled) return;

        // Choose a random emoji from the list
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

        // React to the message with the random emoji
        await conn.sendMessage(mek.key.remoteJid, { react: { text: randomEmoji, key: mek.key } });
    } catch (err) {
        console.error('Error in auto-reaction:', err);
    }
};
