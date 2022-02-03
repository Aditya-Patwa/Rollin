const createControls = (char) => {
  let adt = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

  let leftBtn = makeThumbArea("leftBtn", 5, "blue", "blue");
  leftBtn.height = "50px";
  leftBtn.width = "50px";
  leftBtn.left = "20px";
  leftBtn.top = "-40px";
  leftBtn.isPointerBlocker = true;
  leftBtn.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
  leftBtn.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
  
  leftBtn.onPointerDownObservable.add(function() {
    char.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(25, 0, 0));
  });
  
  let rightBtn = makeThumbArea("rightBtn", 5, "blue", "blue");
  rightBtn.height = "50px";
  rightBtn.width = "50px";
  rightBtn.left = "80px";
  rightBtn.top = "-40px";
  rightBtn.isPointerBlocker = true;
  rightBtn.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
  rightBtn.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
  
  rightBtn.onPointerDownObservable.add(function() {
    char.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(-25, 0, 0));
  });
  
  let jumpBtn = makeThumbArea("jumpBtn", 5, "blue", "blue");
  jumpBtn.height = "50px";
  jumpBtn.width = "50px";
  jumpBtn.left = "-20px";
  jumpBtn.top = "-100px";
  jumpBtn.isPointerBlocker = true;
  jumpBtn.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
  jumpBtn.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
  
  jumpBtn.onPointerDownObservable.add(function() {
    let xVelocity = char.physicsImpostor.getLinearVelocity().x;
    char.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(xVelocity, 60, 0));
  });
  
  let stopBtn = makeThumbArea("stopBtn", 5, "red", "red");
  stopBtn.height = "50px";
  stopBtn.width = "50px";
  stopBtn.left = "-20px";
  stopBtn.top = "-40px";
  stopBtn.isPointerBlocker = true;
  stopBtn.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
  stopBtn.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
  
  stopBtn.onPointerDownObservable.add(function() {
    // console.log('stop');
    char.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(0, -15, 0));
  });
  
  stopBtn.onPointerMoveObservable.add(function() {
    // console.log('stop');
    char.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(0, -15, 0));
  });
  
  adt.addControl(leftBtn);
  adt.addControl(rightBtn);
  adt.addControl(jumpBtn);
  adt.addControl(stopBtn);
};

function makeThumbArea(name, thickness, color, background, curves) {
  let rect = new BABYLON.GUI.Ellipse();
  rect.name = name;
  rect.thickness = thickness;
  rect.color = color;
  rect.background = background;
  rect.paddingLeft = "0px";
  rect.paddingRight = "0px";
  rect.paddingTop = "0px";
  rect.paddingBottom = "0px";

  return rect;
}