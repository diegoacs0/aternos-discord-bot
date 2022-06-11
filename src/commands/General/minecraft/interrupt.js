const commandParams = {
    
    name: 'interrupt',
    aliases: [],
    args: [],
    desc: {
        en: 'Server on/off interruptor',
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

		
        msg.reply(`Resposta: ${"```"} ${await pyModule.interrupt()}${"```"}`)

    }


}