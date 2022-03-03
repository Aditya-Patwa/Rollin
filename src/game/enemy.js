let enemies = [];
let enemyPositions = [
  {
    initialPosition: [-180, -21.5, 0],
    finalPosition: -260
  }
];


const createEnemy = (scene) => {
  let enemy = new BABYLON.MeshBuilder.CreatePlane('enemy', { height: 7, width: 7, sideOrientation: BABYLON.Mesh.DOUBLESIDE });
  let enemyMat = new BABYLON.StandardMaterial('enemyMat');
  enemyMat.diffuseTexture = new BABYLON.Texture('./media/enemy.png');
  enemy.material = enemyMat;

  enemy.position = new BABYLON.Vector3(-25, -21.5, 0);

  enemies.push(enemy);

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

  enemyPositions.forEach(en => {
    enemy = enemy.clone();
    enemy.position = new BABYLON.Vector3(en.initialPosition[0], en.initialPosition[1], en.initialPosition[2]);
    enemies.push(enemy);
    let enemyAnimation = new BABYLON.Animation('enemyAnimation', 'position.x', 40, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);

    let animationKeys = [];

    animationKeys.push({
      frame: 0,
      value: en.initialPosition[0]
    });

    animationKeys.push({
      frame: 250 / 2,
      value: en.finalPosition
    });

    animationKeys.push({
      frame: 250,
      value: en.initialPosition[0]
    });

    enemyAnimation.setKeys(animationKeys);

    enemy.animations = [];
    enemy.animations.push(enemyAnimation);
  });

  enemies.forEach(element => {
    scene.beginAnimation(element, 0, 250, true);
  });
};
