
import type { Vec2Like } from "../vec2.js";
import type { Mat3Like } from "../mat3.js";
import type { Mat4Like } from "../mat4.js";

//TODO - guessing here.. there is no mat2 or mat2d, need to read docs or create issue on oframe/ogl
type mat2 = Mat3Like;
type mat2d = Mat3Like;
//END TODO

/**
 * Copy the values from one vec2 to another
 *
 * @param {Vec2Like} out the receiving vector
 * @param {Vec2Like} a the source vector
 * @returns {Vec2Like} out
 */
 export function copy(out: Vec2Like, a: Vec2Like): Vec2Like {
  out[0] = a[0];
  out[1] = a[1];
  return out;
}

/**
* Set the components of a vec2 to the given values
*
* @param {Vec2Like} out the receiving vector
* @param {number} x X component
* @param {number} y Y component
* @returns {Vec2Like} out
*/
export function set(out: Vec2Like, x: number, y: number): Vec2Like {
  out[0] = x;
  out[1] = y;
  return out;
}

/**
* Adds two vec2's
*
* @param {Vec2Like} out the receiving vector
* @param {Vec2Like} a the first operand
* @param {Vec2Like} b the second operand
* @returns {Vec2Like} out
*/
export function add(out: Vec2Like, a: Vec2Like, b: Vec2Like): Vec2Like {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  return out;
}

/**
* Subtracts vector b from vector a
*
* @param {Vec2Like} out the receiving vector
* @param {Vec2Like} a the first operand
* @param {Vec2Like} b the second operand
* @returns {Vec2Like} out
*/
export function subtract(out: Vec2Like, a: Vec2Like, b: Vec2Like): Vec2Like {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  return out;
}

/**
* Multiplies two vec2's
*
* @param {Vec2Like} out the receiving vector
* @param {Vec2Like} a the first operand
* @param {Vec2Like} b the second operand
* @returns {Vec2Like} out
*/
export function multiply(out: Vec2Like, a: Vec2Like, b: Vec2Like): Vec2Like {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  return out;
}

/**
* Divides two vec2's
*
* @param {Vec2Like} out the receiving vector
* @param {Vec2Like} a the first operand
* @param {Vec2Like} b the second operand
* @returns {Vec2Like} out
*/
export function divide(out: Vec2Like, a: Vec2Like, b: Vec2Like): Vec2Like {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  return out;
}

/**
* Scales a vec2 by a scalar number
*
* @param {Vec2Like} out the receiving vector
* @param {Vec2Like} a the vector to scale
* @param {number} b amount to scale the vector by
* @returns {Vec2Like} out
*/
export function scale(out: Vec2Like, a: Vec2Like, b: number): Vec2Like {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  return out;
}

/**
* Calculates the euclidian distance between two vec2's
*
* @param {Vec2Like} a the first operand
* @param {Vec2Like} b the second operand
* @returns {number} distance between a and b
*/
export function distance(a: Vec2Like, b: Vec2Like): number {
  var x = b[0] - a[0],
      y = b[1] - a[1];
  return Math.sqrt(x * x + y * y);
}

/**
* Calculates the squared euclidian distance between two vec2's
*
* @param {Vec2Like} a the first operand
* @param {Vec2Like} b the second operand
* @returns {number} squared distance between a and b
*/
export function squaredDistance(a: Vec2Like, b: Vec2Like): number {
  var x = b[0] - a[0],
      y = b[1] - a[1];
  return x * x + y * y;
}

/**
* Calculates the length of a vec2
*
* @param {Vec2Like} a vector to calculate length of
* @returns {number} length of a
*/
export function length(a: Vec2Like): number {
  var x = a[0],
      y = a[1];
  return Math.sqrt(x * x + y * y);
}

/**
* Calculates the squared length of a vec2
*
* @param {Vec2Like} a vector to calculate squared length of
* @returns {number} squared length of a
*/
export function squaredLength(a: Vec2Like): number {
  var x = a[0],
      y = a[1];
  return x * x + y * y;
}

/**
* Negates the components of a vec2
*
* @param {Vec2Like} out the receiving vector
* @param {Vec2Like} a vector to negate
* @returns {Vec2Like} out
*/
export function negate(out: Vec2Like, a: Vec2Like): Vec2Like {
  out[0] = -a[0];
  out[1] = -a[1];
  return out;
}

/**
* Returns the inverse of the components of a vec2
*
* @param {Vec2Like} out the receiving vector
* @param {Vec2Like} a vector to invert
* @returns {Vec2Like} out
*/
export function inverse(out: Vec2Like, a: Vec2Like): Vec2Like {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  return out;
}

/**
* Normalize a vec2
*
* @param {Vec2Like} out the receiving vector
* @param {Vec2Like} a vector to normalize
* @returns {Vec2Like} out
*/
export function normalize(out: Vec2Like, a: Vec2Like): Vec2Like {
  var x = a[0],
      y = a[1];
  var len = x * x + y * y;
  if (len > 0) {
      //TODO: evaluate use of glm_invsqrt here?
      len = 1 / Math.sqrt(len);
  }
  out[0] = a[0] * len;
  out[1] = a[1] * len;
  return out;
}

/**
* Calculates the dot product of two vec2's
*
* @param {Vec2Like} a the first operand
* @param {Vec2Like} b the second operand
* @returns {number} dot product of a and b
*/
export function dot(a: Vec2Like, b: Vec2Like): number {
  return a[0] * b[0] + a[1] * b[1];
}

/**
* Computes the cross product of two vec2's
* Note that the cross product returns a scalar
*
* @param {Vec2Like} a the first operand
* @param {Vec2Like} b the second operand
* @returns {number} cross product of a and b
*/
export function cross(a: Vec2Like, b: Vec2Like): number {
  return a[0] * b[1] - a[1] * b[0];
}

/**
* Performs a linear interpolation between two vec2's
*
* @param {Vec2Like} out the receiving vector
* @param {Vec2Like} a the first operand
* @param {Vec2Like} b the second operand
* @param {number} t interpolation amount between the two inputs
* @returns {Vec2Like} out
*/
export function lerp(out: Vec2Like, a: Vec2Like, b: Vec2Like, t: number): Vec2Like {
  var ax = a[0],
      ay = a[1];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  return out;
}

/**
* Transforms the vec2 with a mat2
*
* @param {Vec2Like} out the receiving vector
* @param {Vec2Like} a the vector to transform
* @param {mat2} m matrix to transform with
* @returns {Vec2Like} out
*/
export function transformMat2(out: Vec2Like, a: Vec2Like, m: mat2): Vec2Like {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[2] * y;
  out[1] = m[1] * x + m[3] * y;
  return out;
}

/**
* Transforms the vec2 with a mat2d
*
* @param {Vec2Like} out the receiving vector
* @param {Vec2Like} a the vector to transform
* @param {mat2d} m matrix to transform with
* @returns {Vec2Like} out
*/
export function transformMat2d(out: Vec2Like, a: Vec2Like, m: mat2d): Vec2Like {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[2] * y + m[4];
  out[1] = m[1] * x + m[3] * y + m[5];
  return out;
}

/**
* Transforms the vec2 with a mat3
* 3rd vector component is implicitly '1'
*
* @param {Vec2Like} out the receiving vector
* @param {Vec2Like} a the vector to transform
* @param {Mat3Like} m matrix to transform with
* @returns {Vec2Like} out
*/
export function transformMat3(out: Vec2Like, a: Vec2Like, m: Mat3Like): Vec2Like {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[3] * y + m[6];
  out[1] = m[1] * x + m[4] * y + m[7];
  return out;
}

/**
* Transforms the vec2 with a mat4
* 3rd vector component is implicitly '0'
* 4th vector component is implicitly '1'
*
* @param {Vec2Like} out the receiving vector
* @param {Vec2Like} a the vector to transform
* @param {Mat4Like} m matrix to transform with
* @returns {Vec2Like} out
*/
export function transformMat4(out: Vec2Like, a: Vec2Like, m: Mat4Like): Vec2Like {
  let x = a[0];
  let y = a[1];
  out[0] = m[0] * x + m[4] * y + m[12];
  out[1] = m[1] * x + m[5] * y + m[13];
  return out;
}

/**
* Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
*
* @param {Vec2Like} a The first vector.
* @param {Vec2Like} b The second vector.
* @returns {boolean} True if the vectors are equal, false otherwise.
*/
export function exactEquals(a: Vec2Like, b: Vec2Like): boolean {
  return a[0] === b[0] && a[1] === b[1];
}
