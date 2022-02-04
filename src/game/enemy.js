let enemies = [];

const createEnemyMesh = () => {
  let enemy = new BABYLON.MeshBuilder.CreatePlane('enemy', {height: 7, width: 7, sideOrientation: BABYLON.Mesh.DOUBLESIDE});
  let enemyMat = new BABYLON.StandardMaterial('enemyMat');
  enemyMat.diffuseTexture = new BABYLON.Texture('./media/enemy.png');
  
  enemy.material = enemyMat;

  return enemy;
};

const createEnemy = (scene) => {
  let Enemy1 = createEnemyMesh();
  
  Enemy1.position = new BABYLON.Vector3(-25, -21.5, 0);

  enemies.push(Enemy1);
  
  let enemyAnimation = new BABYLON.Animation('enemyAnimation', 'position.x', 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
  
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