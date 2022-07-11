import type { Mat4Like } from "../mat4.js";
import type { QuatLike } from "../quat.js";
import type { Vec3Like } from "../vec3.js";
/**
 * Copy the values from one mat4 to another
 */
export declare function copy(out: Mat4Like, a: Mat4Like): Mat4Like;
/**
* Set the components of a mat4 to the given values
*/
export declare function set(out: Mat4Like, m00: number, m01: number, m02: number, m03: number, m10: number, m11: number, m12: number, m13: number, m20: number, m21: number, m22: number, m23: number, m30: number, m31: number, m32: number, m33: number): Mat4Like;
/**
* Set a mat4 to the identity matrix
*/
export declare function identity(out: Mat4Like): Mat4Like;
/**
* Transpose the values of a mat4
*/
export declare function transpose(out: Mat4Like, a: Mat4Like): Mat4Like;
/**
* Inverts a mat4
*/
export declare function invert(out: Mat4Like, a: Mat4Like): Mat4Like;
/**
* Calculates the determinant of a mat4
*/
export declare function determinant(a: Mat4Like): number;
/**
* Multiplies two mat4s
*/
export declare function multiply(out: Mat4Like, a: Mat4Like, b: Mat4Like): Mat4Like;
/**
* Translate a mat4 by the given vector
*/
export declare function translate(out: Mat4Like, a: Mat4Like, v: Vec3Like): Mat4Like;
/**
* Scales the mat4 by the dimensions in the given vec3 not using vectorization
*/
export declare function scale(out: Mat4Like, a: Mat4Like, v: Vec3Like): Mat4Like;
/**
* Rotates a mat4 by the given angle around the given axis
*/
export declare function rotate(out: Mat4Like, a: Mat4Like, rad: number, axis: Vec3Like): Mat4Like;
/**
* Returns the translation vector component of a transformation
*  matrix. If a matrix is built with fromRotationTranslation,
*  the returned vector will be the same as the translation vector
*  originally supplied
*/
export declare function getTranslation(out: Vec3Like, mat: Mat4Like): Vec3Like;
/**
* Returns the scaling factor component of a transformation
*  matrix. If a matrix is built with fromRotationTranslationScale
*  with a normalized Quaternion paramter, the returned vector will be
*  the same as the scaling vector
*  originally supplied
*/
export declare function getScaling(out: Vec3Like, mat: Mat4Like): Vec3Like;
export declare function getMaxScaleOnAxis(mat: Mat4Like): number;
/**
* Returns a quaternion representing the rotational component
*  of a transformation matrix. If a matrix is built with
*  fromRotationTranslation, the returned quaternion will be the
*  same as the quaternion originally supplied
*/
export declare function getRotation(out: QuatLike, mat: Mat4Like): QuatLike;
/**TRS
* Creates a matrix from a quaternion rotation, vector translation and vector scale
* This is equivalent to (but much faster than):
*
*     mat4.identity(dest);
*     mat4.translate(dest, vec);
*     let quatMat = mat4.create();
*     quat4.toMat4(quat, quatMat);
*     mat4.multiply(dest, quatMat);
*     mat4.scale(dest, scale)
*/
export declare function fromRotationTranslationScale(out: Mat4Like, r: QuatLike, t: Vec3Like, s: Vec3Like): Mat4Like;
/**
* Calculates a 4x4 matrix from the given quaternion
*/
export declare function fromQuat(out: Mat4Like, q: QuatLike): Mat4Like;
/**
* Generates a perspective projection matrix with the given bounds
*/
export declare function perspective(out: Mat4Like, fovy: number, aspect: number, near: number, far: number): Mat4Like;
/**
* Generates a orthogonal projection matrix with the given bounds
*/
export declare function ortho(out: Mat4Like, left: number, right: number, bottom: number, top: number, near: number, far: number): Mat4Like;
/**
* Generates a matrix that makes something look at something else.
*/
export declare function targetTo(out: Mat4Like, eye: Vec3Like, target: Vec3Like, up: Vec3Like): Mat4Like;
/**
* Adds two mat4
*/
export declare function add(out: Mat4Like, a: Mat4Like, b: Mat4Like): Mat4Like;
/**
* Subtracts matrix b from matrix a
*/
export declare function subtract(out: Mat4Like, a: Mat4Like, b: Mat4Like): Mat4Like;
/**
* Multiply each element of the matrix by a scalar.
*/
export declare function multiplyScalar(out: Mat4Like, a: Mat4Like, b: number): Mat4Like;
