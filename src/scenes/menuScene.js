import BaseScene from "./baseScene";

class MenuScene extends BaseScene {
    constructor(config) {
        super('MenuScene', config);

        this.menu = [
            { scene: 'PlayScene', text: "Play" },
            { scene: 'ScoreScene', text: "Score" },
            { scene: null, text: "Exit" }]
    }

    create() {
        super.create()
        this.createMenu(this.menu, (menuItem) => this.setupMenuEvents(menuItem))
        this.add.text(...this.screenCenter, 'Press W to jump', { fontSize: '34px', fill: '#ff0000' }).setOrigin(0.5, 5)
    }

    setupMenuEvents(menuItem) {
        const textGameObject = menuItem.textGameObject
        textGameObject.setInteractive();
        textGameObject.on('pointerover', () => {
            textGameObject.setStyle({ fill: '#ff0' })
        })
        textGameObject.on('pointerout', () => {
            textGameObject.setStyle({ fill: '#fff' })
        })
        textGameObject.on('pointerup', () => {
            menuItem.scene && this.scene.start(menuItem.scene)

            if (menuItem.text === "Exit") {
                this.game.destroy(true)
            }
        })
    }
}

export default MenuScene