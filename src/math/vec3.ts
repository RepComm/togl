
import * as Vec3Func from "./functions/vec3func.js";
import type { Mat3 } from "./mat3.js";
import type { Mat4 } from "./mat4.js";
import type { Quat } from "./quat.js";

export type Vec3Like = Array<number>;

export class Vec3 extends Array<number> {
  
  constructor(x: number = 0, y: number = x, z: number = x) {
    super(x, y, z);
  }

  get x() {
    return this[0];
  }

  get y() {
    return this[1];
  }

  get z() {
    return this[2];
  }

  set x(v) {
    this[0] = v;
  }

  set y(v) {
    this[1] = v;
  }

  set z(v) {
    this[2] = v;
  }

  set(x: number|Vec3, y = x, z = x): this {
    if ( (x as Vec3).length) return this.copy( x as Vec3 );
    Vec3Func.set(this, x as number, y as number, z as number);
    return this;
  }

  copy(v: Vec3): this {
    Vec3Func.copy(this, v);
    return this;
  }

  add(va: Vec3, vb?: Vec3): this {
    if (vb) Vec3Func.add(this, va, vb);
    else Vec3Func.add(this, this, va);
    return this;
  }

  sub(va: Vec3, vb?: Vec3): this {
    if (vb) Vec3Func.subtract(this, va, vb);
    else Vec3Func.subtract(this, this, va);
    return this;
  }

  multiply(v: Vec3|number): this {
    if ( (v as Vec3).length) Vec3Func.multiply(this, this, v as Vec3);
    else Vec3Func.scale(this, this, v as number);
    return this;
  }

  divide(v: Vec3|number): this {
    if ( (v as Vec3).length) Vec3Func.divide(this, this, v as Vec3);
    else Vec3Func.scale(this, this, 1 / (v as number) );
    return this;
  }

  inverse(v: Vec3 = this): this {
    Vec3Func.inverse(this, v);
    return this;
  }

  // Can't use 'length' as Array.prototype uses it
  len(): number {
    return Vec3Func.length(this);
  }

  distance(v?: Vec3): number {
    if (v) return Vec3Func.distance(this, v);
    else return Vec3Func.length(this);
  }

  squaredLen(): number {
    return Vec3Func.squaredLength(this);
  }

  squaredDistance(v?: Vec3): number {
    if (v) return Vec3Func.squaredDistance(this, v);
    else return Vec3Func.squaredLength(this);
  }

  negate(v: Vec3 = this): this {
    Vec3Func.negate(this, v);
    return this;
  }

  cross(va: Vec3, vb?: Vec3): this {
    if (vb) Vec3Func.cross(this, va, vb);
    else Vec3Func.cross(this, this, va);
    return this;
  }

  scale(v: number): this {
    Vec3Func.scale(this, this, v);
    return this;
  }

  normalize(): this {
    Vec3Func.normalize(this, this);
    return this;
  }

  dot(v: Vec3): number {
    return Vec3Func.dot(this, v);
  }

  equals(v: Vec3): boolean {
    return Vec3Func.exactEquals(this, v);
  }

  applyMatrix3(mat3: Mat3): this {
    Vec3Func.transformMat3(this, this, mat3);
    return this;
  }

  applyMatrix4(mat4: Mat4): this {
    Vec3Func.transformMat4(this, this, mat4);
    return this;
  }

  scaleRotateMatrix4(mat4: Mat4): this {
    Vec3Func.scaleRotateMat4(this, this, mat4);
    return this;
  }

  applyQuaternion(q: Quat): this {
    Vec3Func.transformQuat(this, this, q);
    return this;
  }

  angle(v: Vec3): number {
    return Vec3Func.angle(this, v);
  }

  lerp(v: Vec3, t: number): this {
    Vec3Func.lerp(this, this, v, t);
    return this;
  }

  clone(): Vec3 {
    return new Vec3(this[0], this[1], this[2]);
  }

  fromArray(a: Array<number>, o: number = 0): this {
    this[0] = a[o];
    this[1] = a[o + 1];
    this[2] = a[o + 2];
    return this;
  }

  toArray(destination: Array<number> = [], offset: number = 0): Array<number> {
    destination[offset] = this[0];
    destination[offset + 1] = this[1];
    destination[offset + 2] = this[2];
    return destination;
  }

  transformDirection(mat4: Mat4): this {
    const x = this[0];
    const y = this[1];
    const z = this[2];

    this[0] = mat4[0] * x + mat4[4] * y + mat4[8] * z;
    this[1] = mat4[1] * x + mat4[5] * y + mat4[9] * z;
    this[2] = mat4[2] * x + mat4[6] * y + mat4[10] * z;

    return this.normalize();
  }
}