import * as EulerFunc from "./functions/EulerFunc.js";
import { Mat3Like } from "./mat3.js";
import { Mat4 } from "./mat4.js";
import { QuatLike } from "./quat.js";
import type { Vec3Like, Vec3Order } from "./vec3.js";

const tmpMat4 = new Mat4();

export class Euler extends Array<number> {
  order: Vec3Order;
  onChange: () => void;
  constructor(x = 0, y = x, z = x, order: Vec3Order = 'YXZ') {
    super(x, y, z);
    this.order = order;
    this.onChange = () => { };
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

  set x(v) {
    this[0] = v;
    this.onChange();
  }

  set y(v) {
    this[1] = v;
    this.onChange();
  }

  set z(v) {
    this[2] = v;
    this.onChange();
  }

  set(x: number | number[], y = x, z = x) {
    if ((x as Vec3Like).length) return this.copy(x as Vec3Like);
    this[0] = x as number;
    this[1] = y as number;
    this[2] = z as number;
    this.onChange();
    return this;
  }

  copy(v: number[]) {
    this[0] = v[0];
    this[1] = v[1];
    this[2] = v[2];
    this.onChange();
    return this;
  }

  reorder(order: Vec3Order) {
    this.order = order;
    this.onChange();
    return this;
  }

  fromRotationMatrix(m: Mat3Like, order = this.order) {
    EulerFunc.fromRotationMatrix(this, m, order);
    return this;
  }

  fromQuaternion(q: QuatLike, order = this.order) {
    tmpMat4.fromQuaternion(q);
    return this.fromRotationMatrix(tmpMat4, order);
  }

  toArray(a = [], o = 0) {
    a[o] = this[0];
    a[o + 1] = this[1];
    a[o + 2] = this[2];
    return a;
  }
}