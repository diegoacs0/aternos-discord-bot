const commandParams = {
    
    name: 'motd',
    aliases: [],
    args: [        
        {
        name: {
            en: 'novo motd',
            fr: 'nouveau motd'
        },
        variableName: 'motd',
        type: 'string'
    }],
    desc: {
        en: 'Altera o motd do servidor',
        fr: ''
    },
    enabled: true,
    dm: false,
    nsfw: false,
    memberPermission: [],
    botPermission: [],
    owner: true,
    cooldown: null

}

module.exports = class extends CommandPattern {

    constructor () {
        super(commandParams)
    }

    async run (msg, args, rawArgs, cmd) {
		const pyModule = await import('./python_aternos.mjs');

		var fullArgs = args.motd +" "+ rawArgs.join(" ");
        await pyModule.motd(fullArgs)
        msg.reply(`Resposta: ${"```"} Motd definido para '${fullArgs}' com sucesso.${"```"}`)

    }


}
