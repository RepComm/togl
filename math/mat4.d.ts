import type { QuatLike } from "./quat.js";
import { Vec3Like } from "./vec3.js";
export declare type Mat4Like = Array<number>;
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
export declare class Mat4 extends Array<number> {
    constructor(m00?: number, m01?: number, m02?: number, m03?: number, m10?: number, m11?: number, m12?: number, m13?: number, m20?: number, m21?: number, m22?: number, m23?: number, m30?: number, m31?: number, m32?: number, m33?: number);
    get x(): number;
    get y(): number;
    get z(): number;
    get w(): number;
    set x(v: number);
    set y(v: number);
    set z(v: number);
    set w(v: number);
    set(m00: number | Mat4Like, m01: number, m02: number, m03: number, m10: number, m11: number, m12: number, m13: number, m20: number, m21: number, m22: number, m23: number, m30: number, m31: number, m32: number, m33: number): this;
    translate(v: Vec3Like, m?: Mat4Like): this;
    rotate(v: number, axis: Vec3Like, m?: Mat4Like): this;
    scale(v: number | Vec3Like, m?: Mat4Like): this;
    multiply(ma: Mat4Like, mb: Mat4Like): this;
    identity(): this;
    copy(m: Mat4Like): this;
    fromPerspective(args: Mat4_perspective_args): this;
    fromOrthogonal(args: Mat4_orthogonal_args): this;
    fromQuaternion(q: QuatLike): this;
    setPosition(v: Vec3Like): this;
    inverse(m?: Mat4Like): this;
    compose(q: QuatLike, pos: Vec3Like, scale: Vec3Like): this;
    getRotation(q: QuatLike): this;
    getTranslation(pos: Vec3Like): this;
    getScaling(scale: Vec3Like): this;
    getMaxScaleOnAxis(): number;
    lookAt(eye: Vec3Like, target: Vec3Like, up: Vec3Like): this;
    determinant(): number;
    fromArray(a: Mat4Like, o?: number): this;
    toArray(a?: Mat4Like, o?: number): Mat4Like;
}
