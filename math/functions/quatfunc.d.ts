import { Mat3Like } from "../mat3.js";
import type { QuatLike } from "../quat.js";
import type { Vec3Like } from "../vec3.js";
export declare type Vec3Order = 'XYZ' | 'YXZ' | 'ZXY' | 'ZYX' | 'YZX' | 'XZY';
/**
 * Set a quat to the identity quaternion
 */
export declare function identity(out: QuatLike): QuatLike;
/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it
 **/
export declare function setAxisAngle(out: QuatLike, axis: Vec3Like, rad: number): QuatLike;
/**
 * Multiplies two quats
 */
export declare function multiply(out: QuatLike, a: QuatLike, b: QuatLike): QuatLike;
/**
 * Rotates a quaternion by the given angle about the X axis
 */
export declare function rotateX(out: QuatLike, a: QuatLike, rad: number): QuatLike;
/**
 * Rotates a quaternion by the given angle about the Y axis
 */
export declare function rotateY(out: QuatLike, a: QuatLike, rad: number): QuatLike;
/**
 * Rotates a quaternion by the given angle about the Z axis
 */
export declare function rotateZ(out: QuatLike, a: QuatLike, rad: number): QuatLike;
/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param out the receiving quaternion
 * @param a the first operand
 * @param b the second operand
 * @param t interpolation amount between the two inputs
 * @returns out
 */
export declare function slerp(out: QuatLike, a: QuatLike, b: QuatLike, t: number): QuatLike;
/**
 * Calculates the inverse of a quat
 */
export declare function invert(out: QuatLike, a: QuatLike): QuatLike;
/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 */
export declare function conjugate(out: QuatLike, a: QuatLike): QuatLike;
/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary
 */
export declare function fromMat3(out: QuatLike, m: Mat3Like): QuatLike;
/**
 * Creates a quaternion from the given euler angle x, y, z
 */
export declare function fromEuler(out: QuatLike, euler: Vec3Like, order?: Vec3Order): QuatLike;
/**
 * Copy the values from one quat to another
 */
export declare function copy(out: QuatLike, a: QuatLike): QuatLike;
/**
 * Set the components of a quat to the given values
 */
export declare function set(out: QuatLike, x: number, y: number, z: number, w: number): QuatLike;
/**
 * Adds two quat's
 */
export declare function add(out: QuatLike, a: QuatLike, b: QuatLike): QuatLike;
/**
 * Scales a quat by a scalar number
 */
export declare function scale(out: QuatLike, a: QuatLike, b: number): QuatLike;
/**
 * Calculates the dot product of two quat's
 */
export declare function dot(a: QuatLike, b: QuatLike): number;
/**
 * Performs a linear interpolation between two quat's
 */
export declare function lerp(out: QuatLike, a: QuatLike, b: QuatLike, t: number): QuatLike;
/**
 * Calculates the length of a quat
 */
export declare function length(a: QuatLike): number;
/**
 * Normalize a quat
 */
export declare function normalize(out: QuatLike, a: QuatLike): QuatLike;
