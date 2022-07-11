import * as Mat4Func from "./functions/mat4func.js";
import type { QuatLike } from "./quat.js";
import { Vec3Like } from "./vec3.js";

export type Mat4Like = Array<number>;

export interface Mat4_perspective_args {
  fov: number;
  aspect: number;
  near: number;
  far: number;
}
export interface Mat4_orthogonal_args {
  left: number;
  right: number;
  bottom: number;
  top: number;
  near: number;
  far: number;
}

export class Mat4 extends Array<number> {
  constructor(
    m00 = 1,
    m01 = 0,
    m02 = 0,
    m03 = 0,
    m10 = 0,
    m11 = 1,
    m12 = 0,
    m13 = 0,
    m20 = 0,
    m21 = 0,
    m22 = 1,
    m23 = 0,
    m30 = 0,
    m31 = 0,
    m32 = 0,
    m33 = 1
  ) {
    super(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
    return this;
  }

  get x() {
    return this[12];
  }

  get y() {
    return this[13];
  }

  get z() {
    return this[14];
  }

  get w() {
    return this[15];
  }

  set x(v) {
    this[12] = v;
  }

  set y(v) {
    this[13] = v;
  }

  set z(v) {
    this[14] = v;
  }

  set w(v) {
    this[15] = v;
  }

  set(
    m00: number|Mat4Like,
    m01: number,
    m02: number,
    m03: number,
    m10: number,
    m11: number,
    m12: number,
    m13: number,
    m20: number,
    m21: number,
    m22: number,
    m23: number,
    m30: number,
    m31: number,
    m32: number,
    m33: number
  ) {
    if ((m00 as Mat4Like).length) return this.copy(m00 as Mat4Like);
    Mat4Func.set(this, m00 as number, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
    return this;
  }

  translate(v: Vec3Like, m: Mat4Like = this): this {
    Mat4Func.translate(this, m, v);
    return this;
  }

  rotate(v: number, axis: Vec3Like, m: Mat4Like = this): this {
    Mat4Func.rotate(this, m, v, axis);
    return this;
  }

  scale(v: number|Vec3Like, m: Mat4Like = this): this {
    Mat4Func.scale(this, m, typeof v === 'number' ? [v, v, v] : v);
    return this;
  }

  multiply(ma: Mat4Like, mb: Mat4Like): this {
    if (mb) {
      Mat4Func.multiply(this, ma, mb);
    } else {
      Mat4Func.multiply(this, this, ma);
    }
    return this;
  }

  identity(): this {
    Mat4Func.identity(this);
    return this;
  }

  copy(m: Mat4Like): this {
    Mat4Func.copy(this, m);
    return this;
  }

  fromPerspective(args: Mat4_perspective_args): this {
    Mat4Func.perspective(this, args.fov, args.fov, args.fov, args.fov);
    return this;
  }

  fromOrthogonal(args: Mat4_orthogonal_args): this {
    Mat4Func.ortho(this, args.left, args.right, args.bottom, args.top, args.near, args.far);
    return this;
  }

  fromQuaternion(q: QuatLike): this {
    Mat4Func.fromQuat(this, q);
    return this;
  }

  setPosition(v: Vec3Like): this {
    this.x = v[0];
    this.y = v[1];
    this.z = v[2];
    return this;
  }

  inverse(m: Mat4Like = this): this {
    Mat4Func.invert(this, m);
    return this;
  }

  compose(q: QuatLike, pos: Vec3Like, scale: Vec3Like): this {
    Mat4Func.fromRotationTranslationScale(this, q, pos, scale);
    return this;
  }

  getRotation(q: QuatLike): this {
    Mat4Func.getRotation(q, this);
    return this;
  }

  getTranslation(pos: Vec3Like): this {
    Mat4Func.getTranslation(pos, this);
    return this;
  }

  getScaling(scale: Vec3Like): this {
    Mat4Func.getScaling(scale, this);
    return this;
  }

  getMaxScaleOnAxis(): number {
    return Mat4Func.getMaxScaleOnAxis(this);
  }

  lookAt(eye: Vec3Like, target: Vec3Like, up: Vec3Like): this {
    Mat4Func.targetTo(this, eye, target, up);
    return this;
  }

  determinant(): number {
    return Mat4Func.determinant(this);
  }

  fromArray(a: Mat4Like, o: number = 0): this {
    this[0] = a[o];
    this[1] = a[o + 1];
    this[2] = a[o + 2];
    this[3] = a[o + 3];
    this[4] = a[o + 4];
    this[5] = a[o + 5];
    this[6] = a[o + 6];
    this[7] = a[o + 7];
    this[8] = a[o + 8];
    this[9] = a[o + 9];
    this[10] = a[o + 10];
    this[11] = a[o + 11];
    this[12] = a[o + 12];
    this[13] = a[o + 13];
    this[14] = a[o + 14];
    this[15] = a[o + 15];
    return this;
  }

  toArray(a: Mat4Like = [], o: number = 0): Mat4Like {
    a[o] = this[0];
    a[o + 1] = this[1];
    a[o + 2] = this[2];
    a[o + 3] = this[3];
    a[o + 4] = this[4];
    a[o + 5] = this[5];
    a[o + 6] = this[6];
    a[o + 7] = this[7];
    a[o + 8] = this[8];
    a[o + 9] = this[9];
    a[o + 10] = this[10];
    a[o + 11] = this[11];
    a[o + 12] = this[12];
    a[o + 13] = this[13];
    a[o + 14] = this[14];
    a[o + 15] = this[15];
    return a;
  }
}