import { Transform } from "./transform.js";
import { Mat4 } from "../math/mat4.js";
import { Vec3, Vec3Like } from "../math/vec3.js";
import { Vec2 } from "../math/vec2.js";
import type { Mesh } from "./mesh.js";

//FINISHED

const tempMat4 = new Mat4();
const tempVec3a = new Vec3();
const tempVec3b = new Vec3();

export interface CameraConfig {
  near: number;
  far: number;
  fov: number;
  aspect: number;
  left: number;
  right: number;
  bottom: number;
  top: number;
  zoom: number;
}
export const DefaultCameraConfig: CameraConfig = {
  near: 0.1,
  far: 100,
  fov: 45,
  aspect: 1,
  left: undefined,
  right: undefined,
  bottom: undefined,
  top: undefined,
  zoom: 1
}

export function ObjectAssignIfUndefined (target: any, props: any) {
  let keys = Object.keys(props);
  for (let key of keys) {
    if (target[key] === undefined) target[key] = props[key];
  }
}

export type CameraType = "perspective"|"orthographic";

export class Camera extends Transform {
  projectionMatrix: Mat4;
  viewMatrix: Mat4;
  projectionViewMatrix: Mat4;
  worldPosition: Vec3;
  type: CameraType;
  near: number;
  far: number;
  fov: number;
  aspect: number;
  left: number;
  right: number;
  bottom: number;
  top: number;
  zoom: number;
  frustum: any;

  constructor(
    gl: WebGLRenderingContext | WebGL2RenderingContext,
    config: CameraConfig = DefaultCameraConfig
  ) {
    super();

    Object.assign(this, config);

    this.projectionMatrix = new Mat4();
    this.viewMatrix = new Mat4();
    this.projectionViewMatrix = new Mat4();
    this.worldPosition = new Vec3();

    // Use orthographic if left/right set, else default to perspective camera
    this.type = this.left || this.right ? 'orthographic' : 'perspective';

    if (this.type === 'orthographic') this.orthographic();
    else this.perspective();
  }

  perspective(config?: Partial<CameraConfig>) {
    if (config) ObjectAssignIfUndefined(this, config);

    this.projectionMatrix.fromPerspective({
      fov: this.fov * (Math.PI / 180),
      aspect: this.aspect,
      near: this.near,
      far: this.far
    });
    this.type = 'perspective';
    return this;
  }

  orthographic(config?: Partial<CameraConfig>) {
    if (config) ObjectAssignIfUndefined(this, config);

    this.left /= this.zoom;
    this.right /= this.zoom;
    this.bottom /= this.zoom;
    this.top /= this.zoom;
    this.projectionMatrix.fromOrthogonal(this);
    this.type = 'orthographic';
    return this;
  }

  updateMatrixWorld() {
    super.updateMatrixWorld();
    this.viewMatrix.inverse(this.worldMatrix);
    this.worldMatrix.getTranslation(this.worldPosition);

    // used for sorting
    this.projectionViewMatrix.multiply(this.projectionMatrix, this.viewMatrix);
    return this;
  }
  //TODO: conflicts with super 'transform' worldMatrix property
  // worldMatrix(worldMatrix: any) {
  //   throw new Error("Method not implemented.");
  // }

  lookAt(target: Vec3Like) {
    super.lookAt(target, true);
    return this;
  }

  // Project 3D coordinate to 2D point
  project(v: Vec2|Vec3) {
    v.applyMatrix4(this.viewMatrix);
    v.applyMatrix4(this.projectionMatrix);
    return this;
  }

  // Unproject 2D point to 3D coordinate
  unproject(v: Vec2|Vec3) {
    v.applyMatrix4(tempMat4.inverse(this.projectionMatrix));
    v.applyMatrix4(this.worldMatrix);
    return this;
  }

  updateFrustum() {
    if (!this.frustum) {
      this.frustum = [new Vec3(), new Vec3(), new Vec3(), new Vec3(), new Vec3(), new Vec3()];
    }

    const m = this.projectionViewMatrix;
    this.frustum[0].set(m[3] - m[0], m[7] - m[4], m[11] - m[8]).constant = m[15] - m[12]; // -x
    this.frustum[1].set(m[3] + m[0], m[7] + m[4], m[11] + m[8]).constant = m[15] + m[12]; // +x
    this.frustum[2].set(m[3] + m[1], m[7] + m[5], m[11] + m[9]).constant = m[15] + m[13]; // +y
    this.frustum[3].set(m[3] - m[1], m[7] - m[5], m[11] - m[9]).constant = m[15] - m[13]; // -y
    this.frustum[4].set(m[3] - m[2], m[7] - m[6], m[11] - m[10]).constant = m[15] - m[14]; // +z (far)
    this.frustum[5].set(m[3] + m[2], m[7] + m[6], m[11] + m[10]).constant = m[15] + m[14]; // -z (near)

    for (let i = 0; i < 6; i++) {
      const invLen = 1.0 / this.frustum[i].distance();
      this.frustum[i].multiply(invLen);
      this.frustum[i].constant *= invLen;
    }
  }

  frustumIntersectsMesh(node: Mesh) {
    // If no position attribute, treat as frustumCulled false
    if (!node.geometry.attributes.position) return true;

    if (!node.geometry.bounds || node.geometry.bounds.radius === Infinity) node.geometry.computeBoundingSphere();

    if (!node.geometry.bounds) return true;

    const center = tempVec3a;
    center.copy(node.geometry.bounds.center);
    center.applyMatrix4(node.worldMatrix);

    const radius = node.geometry.bounds.radius * node.worldMatrix.getMaxScaleOnAxis();

    return this.frustumIntersectsSphere(center, radius);
  }

  frustumIntersectsSphere(center: Vec3, radius: number) {
    const normal = tempVec3b;

    for (let i = 0; i < 6; i++) {
      const plane = this.frustum[i];
      const distance = normal.copy(plane).dot(center) + plane.constant;
      if (distance < -radius) return false;
    }
    return true;
  }
}