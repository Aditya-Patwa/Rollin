const stage = () => {
  let spfPositions = [
    [-20, 10, 0],
    [-35, 20, 0],
    [-105, -20, 0],
    [-145, -20, 0]
  ];

  let spf = skyPlatform();

  spfPositions.forEach(ele => {
    spf = spf.clone()
    spf.position = new BABYLON.Vector3(ele[0], ele[1], ele[2]);
  });

  let ground = createGroundBlock();
  ground.position = new BABYLON.Vector3(-25, -20, 0);
  
  let xPos = -35;
  
  for (let i = 0;  i < 5; i++) {
    ground = ground.clone();
    ground.position.x = xPos;
    xPos -= 10;
  }

  xPos = -175;
  
  for (let i = 0;  i < 10; i++) {
    ground = ground.clone();
    ground.position.x = xPos;
    xPos -= 10;
  }

  let yPos = -20;
  for (let i = 0;  i < 3; i++) {
    ground = ground.clone();
    ground.position.x = -280;
    ground.position.y = yPos;

    yPos += 10;
  }
};