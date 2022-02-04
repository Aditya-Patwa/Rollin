const createSky = () => {
  let tree1manager = new BABYLON.SpriteManager("tree1", "./media/tree1.jpg", 1000, { width: 200, height: 400 });
  let tree1 = new BABYLON.Sprite("tree1", tree1manager);
  tree1.width = 10;
  tree1.height = 30;
  tree1.position = new BABYLON.Vector3(15, -12, -7);

  let tree2manager = new BABYLON.SpriteManager("tree2", "./media/tree2.jpg", 1000, { width: 200, height: 400 });
  let tree2 = new BABYLON.Sprite("tree2", tree2manager);
  tree2.width = 15;
  tree2.height = 40;
  tree2.position = new BABYLON.Vector3(45, -12, -7);
};

const createWater = () => {
  let watermanager = new BABYLON.SpriteManager("watermanager", "./media/sideWater2.png", 500, { width: 200, height: 250 });
  let water = new BABYLON.Sprite("water", watermanager);
  water.width = 10;
  water.height = 12;
  water.position = new BABYLON.Vector3(-5, -30, 0);
  let water2 = new BABYLON.Sprite("water", watermanager);
  water2.width = 10;
  water2.height = 12;
  water2.position = new BABYLON.Vector3(-15, -30, 0);
};

const createEnvironment = () => {
  let meshes = [];

  let ground = createGroundBlock();
  ground.position.y = -10;
  ground.position.x = -10;
  meshes.push(ground);

  let g1 = ground.clone();
  g1.position.y = -10;
  g1.position.x = 30;
  // g1.physicsImpostor = new BABYLON.PhysicsImpostor(g1, BABYLON.PhysicsImpostor.BoxImpostor, {mass: 0, restituion: 1});

  let xGroundPosition = 0;
  for (let index = 0; index < 5; index++) {
    let xGroundBlock = ground.clone();
    xGroundBlock.position.x = xGroundPosition;
    meshes.push(xGroundBlock);
    xGroundPosition += 10;
  }

  let groundBlock = BABYLON.Mesh.MergeMeshes(meshes, true, false, null, false, true);
  return groundBlock;
};