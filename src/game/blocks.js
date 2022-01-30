const createGroundBlock = () => {
    let groundPlane = new BABYLON.MeshBuilder.CreatePlane("groundPlane", {height: 10, width: 10, sideOrientation: BABYLON.Mesh.DOUBLESIDE});
    let groundMat = new BABYLON.StandardMaterial("groundMat");
    groundMat.diffuseTexture = new BABYLON.Texture("./media/grass.jpg");
    groundPlane.material = groundMat;
    groundPlane.rotation.x = Math.PI / 2;

    let groundSidePlane = new BABYLON.MeshBuilder.CreatePlane("groundSidePlane", {height: 10, width: 10, sideOrientation: BABYLON.Mesh.DOUBLESIDE});
    let groundSideMat = new BABYLON.StandardMaterial("groundSideMat");
    groundSideMat.diffuseTexture = new BABYLON.Texture("./media/sideGrass.jpg");
    groundSidePlane.material = groundSideMat;
    groundSidePlane.position.z = 5;
    groundSidePlane.position.y = -5;

    let sidePlane2 = groundSidePlane.clone();
    sidePlane2.position.z = -5;

    let sidePlane3 = groundSidePlane.clone();
    sidePlane3.rotation.y = Math.PI / 2;
    sidePlane3.position.x = 5;
    sidePlane3.position.z = 0;

    let sidePlane4 = sidePlane3.clone();
    sidePlane4.position.x = -sidePlane3.position.x;

    let baseGround = groundPlane.clone();
    let baseGroundMat = new BABYLON.StandardMaterial("baseGroundMat");
    baseGroundMat.diffuseTexture = new BABYLON.Texture("./media/groundBase.jpg");
    baseGround.material = baseGroundMat;
    baseGround.position.y = -10;
    
    let groundBlock = BABYLON.Mesh.MergeMeshes([groundPlane, groundSidePlane, sidePlane2, sidePlane3, sidePlane4, baseGround], true, false, null, false, true);
    return groundBlock;
};

const waterPlane = () => {
    let waterPlane = new BABYLON.MeshBuilder.CreatePlane("waterPlane", {height: 10, width: 10, sideOrientation: BABYLON.Mesh.DOUBLESIDE});
    let waterMat = new BABYLON.StandardMaterial("waterMat");
    waterMat.diffuseTexture = new BABYLON.Texture("./media/sideWater2.png");
    waterPlane.material = waterMat;

    return waterPlane;
}
