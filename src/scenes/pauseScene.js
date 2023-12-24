import BaseScene from "./baseScene";

class PauseScene extends BaseScene {
    constructor(config) {
        super('PauseScene', config);

        this.menu = [
            { scene: 'PlayScene', text: "Resume" },
            { scene: 'MenuScene', text: "Exit" }]
    }

    create() {
        super.create()
        this.createMenu(this.menu, (menuItem) => this.setupMenuEvents(menuItem))
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
            if (menuItem.scene && menuItem.text === "Resume") {
                this.scene.stop();
                this.scene.resume(menuItem.scene)
            } else {
                this.scene.stop('PlayScene');
                this.scene.start(menuItem.scene)
            }
        })
    }
}

export default PauseScene