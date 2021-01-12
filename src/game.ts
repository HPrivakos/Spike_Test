import utils from "../node_modules/decentraland-ecs-utils/index"


const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})

// Demo scene with a coin

const coin = new Entity('pirateCoinFinallV')
engine.addEntity(coin)
coin.setParent(_scene)

coin.addComponent(new Transform({
  position: new Vector3(7, 0.4057798385620117, 8.555636405944824),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5, 0.5, 0.5)
}))

coin.addComponent(new GLTFShape("models/pirate coin finall v2.gltf"))

