const commandParams = {
    
    name: 'info',
    aliases: ['minecraft stats'],
    args: [],
    desc: {
        en: 'Get server info/status',
        fr: ''
    },
    enabled: true,
    dm: false,
    nsfw: false,
    memberPermission: [],
    botPermission: [],
    owner: false,
    cooldown: null

}

module.exports = class extends CommandPattern {

    constructor () {
        super(commandParams)
    }

    async run (msg, args, rawArgs, cmd) {
		const pyModule = await import('./python_aternos.mjs');
		const serverInfo = await pyModule.srv_info();
		
        msg.reply("Server Info ```IP: "+serverInfo.domain+" \nMotd: "+serverInfo.motd+" \nVersão: "+serverInfo.version+"\nStatus: "+serverInfo.status+"``` \n")

    }


}