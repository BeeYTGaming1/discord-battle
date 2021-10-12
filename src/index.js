//BATTLES
const {createBattle} = require("./battle")
module.exports.readyBattle = async function (member, message) { return createBattle(member, message) }
