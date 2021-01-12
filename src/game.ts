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

// Check to see if user has this nft in their wallet: 
// https://opensea.io/assets/0xe39a238d74bdd95a895026fc25ec97fb8a4b1959/37

// If user has the following nft in their wallet console.log (Approved)
// Or else console.log (not approved)

// Please include comments for each section of code so it will be easier for me to understand whats going on

// It would be nice if the coin could rotate if the user had the NFT...but not required