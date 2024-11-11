const config = require('../config');
const wikipedia = require('wikipedia');
const {cmd , commands} = require('../command');

cmd({
    pattern: "wiki",
    desc: "search wikipedia",
    category: "owner",
    filename: __filename
}),
async (conn, mek, m, {
    from , reply ,args 
}) => {
    try {
        if (!args.join(' '){
            return reply('Please Enter Query..');
        }
    }
}
