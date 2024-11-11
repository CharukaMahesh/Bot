const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "show bots menu",
    category: "owner",
    filename: __filename
})
