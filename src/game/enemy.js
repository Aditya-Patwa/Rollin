let enemies = [];

class Enemy {
  constructor(initialPosition, finalPosition, scene) {
    this.initialPosition = initialPosition;
    this.finalPosition = finalPosition;
    this.scene = scene;
  }
  create() {
    let enemy = new BABYLON.MeshBuilder.CreatePlane('enemy', { height: 7, width: 7, sideOrientation: BABYLON.Mesh.DOUBLESIDE });
    let enemyMat = new BABYLON.StandardMaterial('enemyMat');
    enemyMat.diffuseTexture = new BABYLON.Texture('./media/enemy.png');
    enemy.material = enemyMat;

    enemy.position = new BABYLON.Vector3(0, -50, 0);

    enemy.position = new BABYLON.Vector3(this.initialPosition[0], this.initialPosition[1], this.initialPosition[2]);
    enemies.push(enemy);

    let enemyAnimation = new BABYLON.Animation('enemyAnimation', 'position.x', 40, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);

    let animationKeys = [];

    animationKeys.push({
      frame: 0,
      value: this.initialPosition[0]
    });

    animationKeys.push({
      frame: 250 / 2,
      value: this.finalPosition
    });

    animationKeys.push({
      frame: 250,
      value: this.initialPosition[0]
    });

    enemyAnimation.setKeys(animationKeys);

    enemy.animations = [];
    enemy.animations.push(enemyAnimation);
    this.scene.beginAnimation(enemy, 0, 250, true);
  }
}

const createEnemy = (scene) => {
    let enemy1 = new Enemy([-25, -21.5, 0], -70, scene);
    enemy1.create();

    let enemy2 = new Enemy([-175, -21.5, 0], -265, scene);
    enemy2.create();
};