const stage = () => {
  let spf = skyPlatform();
  
  spf = spf.clone()
  spf.position = new BABYLON.Vector3(-15, 10, 0);
  
  spf = spf.clone()
  spf.position = new BABYLON.Vector3(-35, 20, 0);

  let ground = createGroundBlock();
  ground.position = new BABYLON.Vector3(-25, -20, 0);
  
  let xPos = -35;
  
  for (var i = 0;  i < 5; i++) {
    ground = ground.clone();
    ground.position.x = xPos;
    xPos -= 10;
  }
};