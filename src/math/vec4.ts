
import * as Vec4Func from "./functions/vec4func.js";

export type Vec4Like = Array<number>;

export class Vec4 extends Array<number> {
  constructor(x = 0, y = x, z = x, w = x) {
    super(x, y, z, w);
    return this;
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

  get w() {
    return this[3];
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

  set w(v) {
    this[3] = v;
  }

  set(x: Vec4Like|number, y: number, z: number, w: number) {
    if ((x as Vec4Like).length) return this.copy(x as Vec4Like);
    Vec4Func.set(this, x as number, y, z, w);
    return this;
  }

  copy(v: Vec4Like) {
    Vec4Func.copy(this, v);
    return this;
  }

  normalize() {
    Vec4Func.normalize(this, this);
    return this;
  }

  multiply(v: number) {
    Vec4Func.scale(this, this, v);
    return this;
  }

  dot(v: Vec4Like) {
    return Vec4Func.dot(this, v);
  }

  fromArray(a: number[], o = 0) {
    this[0] = a[o];
    this[1] = a[o + 1];
    this[2] = a[o + 2];
    this[3] = a[o + 3];
    return this;
  }

  toArray(a = [], o = 0) {
    a[o] = this[0];
    a[o + 1] = this[1];
    a[o + 2] = this[2];
    a[o + 3] = this[3];
    return a;
  }
}