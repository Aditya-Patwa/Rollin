let jumpBtn = document.getElementById('jumpBtn');
let stopBtn = document.getElementById('stopBtn');
let leftBtn = document.getElementById('leftBtn');
let rightBtn = document.getElementById('rightBtn');
let btnRestart = document.getElementById("btnRestart");

addEventListener("click", function() {
  let el = document.body,
    rfs = el.requestFullscreen ||
    el.webkitRequestFullScreen ||
    el.mozRequestFullScreen ||
    el.msRequestFullscreen;

  rfs.call(el);
});

let gameOver = false;

const canvas = document.getElementById("renderCanvas");
const engine = new BABYLON.Engine(canvas, true);

let score = 0;
let scoreDiv = document.getElementById('totalScore');
let coins = [];
let coinsLen;
let lose = false;

const scoreSystem = () => {
    let goldCoin = new BABYLON.MeshBuilder.CreatePlane("goldCoin", {height: 5, width: 5, sideOrientation: BABYLON.Mesh.DOUBLESIDE});
    goldCoin.rotation.y = Math.PI;
    let goldCoinMat = new BABYLON.StandardMaterial("goldCoinMat");
    goldCoinMat.diffuseTexture = new BABYLON.Texture("./media/goldCoin.jpg");
    goldCoin.material = goldCoinMat;
    goldCoin.position = new BABYLON.Vector3(30, -10, 0);
    coins.push(goldCoin);

    let coin2 = goldCoin.clone();
    coin2.position = new BABYLON.Vector3(40, -20, 0);
    coins.push(coin2);
    
    coin2 = goldCoin.clone();
    coin2.position = new BABYLON.Vector3(0, 5, 0);
    coins.push(coin2);
    
    coin2 = goldCoin.clone();
    coin2.position = new BABYLON.Vector3(-35, 25, 0);
    coins.push(coin2);
};

const detectTouch = () => {
  return ('ontouchstart' in window);
}


const createScene = () => {
    let scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color4(43/255, 132/255, 246/255, 1);
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 10, 10), scene);
    const light2 = new BABYLON.HemisphericLight("light2", new BABYLON.Vector3(0, 10, -10), scene);
    const light3 = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, -10, 10), scene);
    const light4 = new BABYLON.HemisphericLight("light2", new BABYLON.Vector3(0, -10, -10), scene);
    const camera = new BABYLON.ArcRotateCamera("camera", Math.PI / 2, Math.PI / 2, 100, new BABYLON.Vector3(0, 0, 0), scene);
    // camera.attachControl(canvas, true);

    const charCamera = new BABYLON.FollowCamera("FollowCamera", new BABYLON.Vector3(0, 0, 150), scene);
    scene.activeCamera = charCamera;
    charCamera.rotation.y = Math.PI;
    // charCamera.attachControl(canvas, true);

    light.intensity = 1;
    scene.enablePhysics(new BABYLON.Vector3(0, -98.1, 0), new BABYLON.CannonJSPlugin());
    
    scoreSystem();

    let char = new BABYLON.MeshBuilder.CreateSphere("char", {diameter: 7});
    let charMat = new BABYLON.StandardMaterial("charMat");
    charMat.diffuseTexture = new BABYLON.Texture("./media/ball.png");
    char.material = charMat;

    charCamera.lockedTarget = char;
    // charCamera.heightOffset = 100;
    charCamera.radius = 100;
    char.position.x = 10;
    char.physicsImpostor = new BABYLON.PhysicsImpostor(char, BABYLON.PhysicsImpostor.SphereImpostor, {mass: 1, restituion: 1});

    let environment = createEnvironment();
    environment.physicsImpostor = new BABYLON.PhysicsImpostor(environment, BABYLON.PhysicsImpostor.BoxImpostor, {mass: 0, restituion: 1});
    
    coinsLen = coins.length;
   
    // Setting Up Controls for Computers and Laptops with keyboard...
    document.onkeydown = (e) => {
        if(e.keyCode == 37) {
            char.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(25, 0, 0));
        } else if (e.keyCode == 38) {
            let xVelocity = char.physicsImpostor.getLinearVelocity().x;
            char.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(xVelocity, 60, 0));
        } else if(e.keyCode == 39) {
            char.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(-25, 0, 0));
        } else if(e.keyCode == 40) {
            char.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(0, 0, 0));
        }
    };

    
    createSky();
    createWater();
    
    if (detectTouch()) {
      createControls(char);
    }
    
    
    stage();
    
    createEnemy(scene);
    
    // Adding Functions Like collecting the coins and replay....
    scene.onBeforeRenderObservable.add(() => {
        for (let index = 0; index < coins.length; index++) {
            if(char.intersectsMesh(coins[index])) {
                coins[index].dispose();
                coins.splice(index, 1);
            }
        }
        for (let index = 0; index < enemies.length; index++) {
          if (char.intersectsMesh(enemies[index])) {
            // char.dispose();
            setTimeout(() => {
              document.getElementById("gameOver").style.display = "grid";
            }, 250);
          }
        }
        if(char.position.y <= -35) {
          gameOver = true;
          document.getElementById("gameOver").style.display = "grid";
        }
        score = coinsLen - coins.length;
        scoreDiv.innerHTML = score;
    });

    btnRestart.addEventListener("click", () => {
      window.location.reload();
    });

    return scene;
};

const scene = createScene();

engine.runRenderLoop(function() {
  scene.render();
});

window.addEventListener("resize", function () {
    engine.resize();
});