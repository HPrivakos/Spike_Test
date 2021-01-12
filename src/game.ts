import { hasToken } from "./erc1151/index";
import { getUserAccount } from "@decentraland/EthereumController";

const _scene = new Entity("_scene");
engine.addEntity(_scene);
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});

// Demo scene with a coin

const coin = new Entity("pirateCoinFinallV");

coin.addComponent(
  new Transform({
    position: new Vector3(7, 0.4057798385620117, 8.555636405944824),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(0.5, 0.5, 0.5),
  })
);

coin.addComponent(new GLTFShape("models/pirate coin finall v2.gltf"));

executeTask(async () => {
  const fromAddress = await getUserAccount();
  hasToken(
    "0xe39a238d74bdd95a895026fc25ec97fb8a4b1959", // Contract address
    fromAddress, // User address
    "37" // Token ID
  ).then((result) => {
    if (result == true) {
      coin.setParent(_scene);
    }
  });
});
//
