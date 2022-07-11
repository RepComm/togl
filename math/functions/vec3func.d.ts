import type { Mat4 } from "../mat4.js";
import { Vec3, Vec3Like } from "../vec3.js";
/**
 * Calculates the length of a vec3
 */
export declare function length(a: Vec3): number;
/**
 * Copy the values from one vec3 to another
 */
export declare function copy(out: Vec3Like, a: Vec3Like): Vec3Like;
/**
 * Set the components of a vec3 to the given values
 */
export declare function set(out: Vec3, x: number, y: number, z: number): Vec3;
/**
 * Adds two vec3's
 */
export declare function add(out: Vec3, a: Vec3, b: Vec3): Vec3;
/**
 * Subtracts vector b from vector a
 */
export declare function subtract(out: Vec3, a: Vec3, b: Vec3): Vec3;
/**
 * Multiplies two vec3's
 */
export declare function multiply(out: Vec3, a: Vec3, b: Vec3): Vec3;
/**
 * Divides two vec3's
 */
export declare function divide(out: Vec3, a: Vec3, b: Vec3): Vec3;
/**
 * Scales a vec3 by a scalar number
 *
 * @param {Vec3} out the receiving vector
 * @param {Vec3} a the vector to scale
 * @param {number} b amount to scale the vector by
 * @returns {Vec3} out
 */
export declare function scale(out: Vec3, a: Vec3, b: number): Vec3;
/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {Vec3} a the first operand
 * @param {Vec3} b the second operand
 * @returns {number} distance between a and b
 */
export declare function distance(a: Vec3, b: Vec3): number;
/**
 * Calculates the squared euclidian distance between two vec3's
 */
export declare function squaredDistance(a: Vec3, b: Vec3): number;
/**
 * Calculates the squared length of a vec3
 */
export declare function squaredLength(a: Vec3): number;
/**
 * Negates the components of a vec3
 */
export declare function negate(out: Vec3, a: Vec3): Vec3;
/**
 * Returns the inverse of the components of a vec3
 */
export declare function inverse(out: Vec3, a: Vec3): Vec3;
/**
 * Normalize a vec3
 */
export declare function normalize(out: Vec3Like, a: Vec3Like): Vec3Like;
/**
 * Calculates the dot product of two vec3's
 */
export declare function dot(a: Vec3Like, b: Vec3Like): number;
/**
 * Computes the cross product of two vec3's
 */
export declare function cross(out: Vec3, a: Vec3, b: Vec3): Vec3;
/**
 * Performs a linear interpolation between two vec3's
 */
export declare function lerp(out: Vec3, a: Vec3, b: Vec3, t: number): Vec3;
/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 */
export declare function transformMat4(out: Vec3, a: Vec3, m: Mat4): Vec3;
/**
 * Same as above but doesn't apply translation.
 * Useful for rays.
 */
export declare function scaleRotateMat4(out: any, a: any, m: any): any;
/**
 * Transforms the vec3 with a mat3.
 *
 * @param {Vec3} out the receiving vector
 * @param {Vec3} a the vector to transform
 * @param {mat3} m the 3x3 matrix to transform with
 * @returns {Vec3} out
 */
export declare function transformMat3(out: any, a: any, m: any): any;
/**
 * Transforms the vec3 with a quat
 *
 * @param {Vec3} out the receiving vector
 * @param {Vec3} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {Vec3} out
 */
export declare function transformQuat(out: any, a: any, q: any): any;
/**
 * Get the angle between two 3D vectors
 * @param {Vec3} a The first operand
 * @param {Vec3} b The second operand
 * @returns {number} The angle in radians
 */
export declare function angle(a: Vec3Like, b: Vec3Like): number;
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 */
export declare function exactEquals(a: Vec3Like, b: Vec3Like): boolean;
