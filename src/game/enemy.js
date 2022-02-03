let enemies = [];

const enemy1 = () => {
  let enemy = new BABYLON.MeshBuilder.CreatePlane('enemy', {height: 10, width: 10, sideOrientation: BABYLON.Mesh.DOUBLESIDE});
  let enemyMat = new BABYLON.StandardMaterial('enemyMat');
  enemyMat.diffuseTexture = new BABYLON.Texture('./media/enemy1.jpg');
  
  enemy.material = enemyMat;
  return enemy;
};

const enemy2 = () => {
  let enemy = new BABYLON.MeshBuilder.CreatePlane('enemy', { height: 10, width: 10, sideOrientation: BABYLON.Mesh.DOUBLESIDE });
  let enemyMat = new BABYLON.StandardMaterial('enemyMat');
  enemyMat.diffuseTexture = new BABYLON.Texture('./media/enemy2.jpg');

  enemy.material = enemyMat;
  return enemy;
};

const enemy3 = () => {
  let enemy = new BABYLON.MeshBuilder.CreatePlane('enemy', { height: 10, width: 10, sideOrientation: BABYLON.Mesh.DOUBLESIDE });
  let enemyMat = new BABYLON.StandardMaterial('enemyMat');
  enemyMat.diffuseTexture = new BABYLON.Texture('./media/enemy3.png');

  enemy.material = enemyMat;
  return enemy;
};

const createEnemy = (scene) => {
  let Enemy1 = enemy1();
  // let Enemy2 = enemy2();
  // let Enemy3 = enemy3();
  
  Enemy1.position = new BABYLON.Vector3(-35, -20, 0);
  // Enemy2.position = new BABYLON.Vector3(-45, -20, 0);
  // Enemy3.position = new BABYLON.Vector3(-25, -20, 0);
  
  enemies.push(Enemy1);
  
  let enemyAnimation = new BABYLON.Animation('enemyAnimation', 'position.x', 40, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
  
  let animationKeys = [];
  
  animationKeys.push({
    frame: 0,
    value: -25
  });
  
  animationKeys.push({
    frame: 250/2,
    value: -70
  });
  
  animationKeys.push({
    frame: 250,
    value: -25
  });
  
  enemyAnimation.setKeys(animationKeys);
  
  Enemy1.animations = [];
  Enemy1.animations.push(enemyAnimation);
  
  scene.beginAnimation(Enemy1, 0, 250, true);
  
  // scene.beginAnimation(Enemy1, 0, 250, true);
};