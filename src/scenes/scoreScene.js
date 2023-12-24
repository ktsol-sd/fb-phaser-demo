import BaseScene from "./baseScene";

class ScoreScene extends BaseScene {
    constructor(config) {
        super('ScoreScene', { ...config, canGoBack: true });
    }

    create() {
        super.create()

        const bestScoreText = localStorage.getItem("bestScore")
        this.add.text(...this.screenCenter, `Score: ${bestScoreText || 0}`, this.fontOptions).setOrigin(0.5, 1)
    }
}

export default ScoreScene