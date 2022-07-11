import type { Vec3Like } from "./vec3.js";
import type { Vec2Like } from "./vec2.js";
import type { Mat4Like } from "./mat4.js";
import type { QuatLike } from "./quat.js";
export declare type Mat3Like = Array<number>;
export declare class Mat3 extends Array<number> {
    constructor(m00?: number, m01?: number, m02?: number, m10?: number, m11?: number, m12?: number, m20?: number, m21?: number, m22?: number);
    set(m00: number | Array<number>, m01?: number, m02?: number, m10?: number, m11?: number, m12?: number, m20?: number, m21?: number, m22?: number): this;
    translate(v: Vec3Like, m?: Mat3): this;
    rotate(v: number, m?: Mat3): this;
    scale(v: Vec2Like, m?: Mat3): this;
    multiply(ma: Mat3, mb: Mat3): this;
    identity(): this;
    copy(m: Mat3Like): this;
    fromMatrix4(m: Mat4Like): this;
    fromQuaternion(q: QuatLike): this;
    fromBasis(vec3a: Vec3Like, vec3b: Vec3Like, vec3c: Vec3Like): this;
    inverse(m?: Mat3Like): this;
    getNormalMatrix(m: Mat4Like): this;
}
