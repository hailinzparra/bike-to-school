interface SceneGame1Props { }

const scene_game1 = new CoreScene<SceneGame1Props>('Game 1')

scene_game1.start = () => {
    obj.instantiate('player', new Player(new CoreVec2(stage.size.x / 2, stage.size.y / 2)))
}
