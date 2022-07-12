import { Vec3, Vec3Like } from '../math/Vec3.js';
import { Quat } from '../math/Quat.js';
import { Mat4 } from '../math/Mat4.js';
import { Euler } from '../math/euler.js';

//FINISHED

export class Transform {
  parent: Transform;
  children: Transform[];
  visible: boolean;
  matrix: Mat4;
  worldMatrix: Mat4;
  matrixAutoUpdate: boolean;
  position: Vec3;
  quaternion: Quat;
  scale: Vec3;
  rotation: any;
  up: Vec3;
  worldMatrixNeedsUpdate: boolean;

  constructor() {
    this.parent = null;
    this.children = [];
    this.visible = true;

    this.matrix = new Mat4();
    this.worldMatrix = new Mat4();
    this.matrixAutoUpdate = true;

    this.position = new Vec3();
    this.quaternion = new Quat();
    this.scale = new Vec3(1);
    this.rotation = new Euler();
    this.up = new Vec3(0, 1, 0);

    this.rotation.onChange = () => this.quaternion.fromEuler(this.rotation);
    this.quaternion.onChange = () => this.rotation.fromQuaternion(this.quaternion);
  }

  setParent(parent: Transform, notifyParent = true) {
    if (this.parent && parent !== this.parent) this.parent.removeChild(this, false);
    this.parent = parent;
    if (notifyParent && parent) parent.addChild(this, false);
  }

  addChild(child: Transform, notifyChild = true) {
    if (!~this.children.indexOf(child)) this.children.push(child);
    if (notifyChild) child.setParent(this, false);
  }

  removeChild(child: Transform, notifyChild = true) {
    if (!!~this.children.indexOf(child)) this.children.splice(this.children.indexOf(child), 1);
    if (notifyChild) child.setParent(null, false);
  }

  updateMatrixWorld(force?: boolean) {
    if (this.matrixAutoUpdate) this.updateMatrix();
    if (this.worldMatrixNeedsUpdate || force) {
      if (this.parent === null) this.worldMatrix.copy(this.matrix);
      else this.worldMatrix.multiply(this.parent.worldMatrix, this.matrix);
      this.worldMatrixNeedsUpdate = false;
      force = true;
    }

    for (let i = 0, l = this.children.length; i < l; i++) {
      this.children[i].updateMatrixWorld(force);
    }
  }

  updateMatrix() {
    this.matrix.compose(this.quaternion, this.position, this.scale);
    this.worldMatrixNeedsUpdate = true;
  }

  traverse(callback: (arg0: this) => any) {
    // Return true in callback to stop traversing children
    if (callback(this)) return;
    for (let i = 0, l = this.children.length; i < l; i++) {
      this.children[i].traverse(callback);
    }
  }

  decompose() {
    this.matrix.getTranslation(this.position);
    this.matrix.getRotation(this.quaternion);
    this.matrix.getScaling(this.scale);
    this.rotation.fromQuaternion(this.quaternion);
  }

  lookAt(target: Vec3Like, invert = false) {
    if (invert) this.matrix.lookAt(this.position, target, this.up);
    else this.matrix.lookAt(target, this.position, this.up);
    this.matrix.getRotation(this.quaternion);
    this.rotation.fromQuaternion(this.quaternion);
  }
}