let enemies = [];

const createEnemyBase = () => {
  let enemy = new BABYLON.MeshBuilder.CreatePlane('platForm', {height: 10, width: 10, sideOrientation: BABYLON.Mesh.DOUBLESIDE});
  let enemyMat = new BABYLON.StandardMaterial("enemyMat");
  enemyMat.diffuseTexture = new BABYLON.Texture("./media/enemy.png");
  enemy.material = enemyMat;

  return enemy;
};

const createEnemy = (scene) => {
  let enemy = createEnemyBase();
  enemy.position = new BABYLON.Vector3(-25, -21, 0);

  let enemyAnimation = new BABYLON.Animation('enemyAnimation', 'position.x', 40, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);

  let animationKeys = [];

  animationKeys.push({
    frame: 0,
    value: -25
  });

  animationKeys.push({
    frame: 250 / 2,
    value: -70
  });

  animationKeys.push({
    frame: 250,
    value: -25
  });

  enemyAnimation.setKeys(animationKeys);

  enemy.animations = [];
  enemy.animations.push(enemyAnimation);
  scene.beginAnimation(enemy, 0, 250, true);

  enemies.push(enemy);

  let enemy1 = enemy.clone();
  enemy1.position = new BABYLON.Vector3(-180, -21, 0);

  enemyAnimation = new BABYLON.Animation('enemyAnimation', 'position.x', 40, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);

  animationKeys = [];

  animationKeys.push({
    frame: 0,
    value: -180
  });

  animationKeys.push({
    frame: 250 / 2,
    value: -250
  });

  animationKeys.push({
    frame: 250,
    value: -180
  });

  enemyAnimation.setKeys(animationKeys);

  enemy1.animations = [];
  enemy1.animations.push(enemyAnimation);
  scene.beginAnimation(enemy1, 0, 250, true);

  enemies.push(enemy1);
};