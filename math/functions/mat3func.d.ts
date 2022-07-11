import type { Vec2Like } from "../vec2.js";
import type { Mat3Like } from "../mat3.js";
import type { Mat4Like } from "../mat4.js";
import { QuatLike } from "../quat.js";
/**
 * Copies the upper-left 3x3 values into the given mat3
 */
export declare function fromMat4(out: Mat3Like, a: Mat4Like): Mat3Like;
/**
 * Calculates a 3x3 matrix from the given quaternion
 */
export declare function fromQuat(out: Mat3Like, q: QuatLike): Mat3Like;
/**
 * Copy the values from one mat3 to another
 */
export declare function copy(out: Mat3Like, a: Mat3Like): Mat3Like;
/**
 * Set the components of a mat3 to the given values
 */
export declare function set(out: Mat3Like, m00: number, m01: number, m02: number, m10: number, m11: number, m12: number, m20: number, m21: number, m22: number): Mat3Like;
/**
 * Set a mat3 to the identity matrix
 */
export declare function identity(out: Mat3Like): Mat3Like;
/**
 * Transpose the values of a mat3
 */
export declare function transpose(out: Mat3Like, a: Mat3Like): Mat3Like;
/**
 * Inverts a mat3
 */
export declare function invert(out: Mat3Like, a: Mat3Like): Mat3Like;
/**
 * Calculates the determinant of a mat3
 */
export declare function determinant(a: Mat3Like): number;
/**
 * Multiplies two mat3's
 */
export declare function multiply(out: Mat3Like, a: Mat3Like, b: Mat3Like): Mat3Like;
/**
 * Translate a mat3 by the given vector
 */
export declare function translate(out: Mat3Like, a: Mat3Like, v: Vec2Like): Mat3Like;
/**
 * Rotates a mat3 by the given angle
 */
export declare function rotate(out: Mat3Like, a: Mat3Like, rad: number): Mat3Like;
/**
 * Scales the mat3 by the dimensions in the given vec2
 **/
export declare function scale(out: Mat3Like, a: Mat3Like, v: Vec2Like): Mat3Like;
/**
 * Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
 */
export declare function normalFromMat4(out: Mat3Like, a: Mat4Like): Mat3Like;
/**
 * Generates a 2D projection matrix with the given bounds
 */
export declare function projection(out: Mat3Like, width: number, height: number): Mat3Like;
/**
 * Adds two mat3's
 */
export declare function add(out: Mat3Like, a: Mat3Like, b: Mat3Like): Mat3Like;
/**
 * Subtracts matrix b from matrix a
 */
export declare function subtract(out: Mat3Like, a: Mat3Like, b: Mat3Like): Mat3Like;
/**
 * Multiply each element of the matrix by a scalar.
 */
export declare function multiplyScalar(out: Mat3Like, a: Mat3Like, b: number): Mat3Like;
