let enemies = [];

const createEnemy = (scene) => {
  let enemy = new BABYLON.MeshBuilder.CreatePlane('enemy', { height: 7, width: 7, sideOrientation: BABYLON.Mesh.DOUBLESIDE });
  let enemyMat = new BABYLON.StandardMaterial('enemyMat');
  enemyMat.diffuseTexture = new BABYLON.Texture('./media/enemy.png');
  enemy.material = enemyMat;

  enemy.position = new BABYLON.Vector3(-25, -21.5, 0);

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

  enemy = enemy.clone();

  enemy.position = new BABYLON.Vector3(-185, -21.5, 0);

  let enemy2Animation = new BABYLON.Animation('enemy2Animation', 'position.x', 40, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);

  animationKeys = [];

  animationKeys.push({
    frame: 0,
    value: -175
  });

  animationKeys.push({
    frame: 250 / 2,
    value: -260
  });

  animationKeys.push({
    frame: 250,
    value: -175
  });

  enemy2Animation.setKeys(animationKeys);

  enemy.animations = [];
  enemy.animations.push(enemy2Animation);
  scene.beginAnimation(enemy, 0, 250, true);
  enemies.push(enemy);
};