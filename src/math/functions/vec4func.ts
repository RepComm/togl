
import { Vec4Like } from "../vec4.js";

/**
 * Copy the values from one vec4 to another
 *
 * @param {Vec4Like} out the receiving vector
 * @param {Vec4Like} a the source vector
 * @returns {Vec4Like} out
 */
export function copy(out: Vec4Like, a: Vec4Like): Vec4Like {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
}

/**
 * Set the components of a vec4 to the given values
 *
 * @param {Vec4Like} out the receiving vector
 * @param {number} x X component
 * @param {number} y Y component
 * @param {number} z Z component
 * @param {number} w W component
 * @returns {Vec4Like} out
 */
export function set(out: Vec4Like, x: number, y: number, z: number, w: number): Vec4Like {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = w;
    return out;
}

/**
 * Adds two vec4's
 *
 * @param {Vec4Like} out the receiving vector
 * @param {Vec4Like} a the first operand
 * @param {Vec4Like} b the second operand
 * @returns {Vec4Like} out
 */
export function add(out: Vec4Like, a: Vec4Like, b: Vec4Like): Vec4Like {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    return out;
}

/**
 * Scales a vec4 by a scalar number
 *
 * @param {Vec4Like} out the receiving vector
 * @param {Vec4Like} a the vector to scale
 * @param {number} b amount to scale the vector by
 * @returns {Vec4Like} out
 */
export function scale(out: Vec4Like, a: Vec4Like, b: number): Vec4Like {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    return out;
}

/**
 * Calculates the length of a vec4
 *
 * @param {Vec4Like} a vector to calculate length of
 * @returns {number} length of a
 */
export function length(a: Vec4Like): number {
    let x = a[0];
    let y = a[1];
    let z = a[2];
    let w = a[3];
    return Math.sqrt(x * x + y * y + z * z + w * w);
}

/**
 * Normalize a vec4
 *
 * @param {Vec4Like} out the receiving vector
 * @param {Vec4Like} a vector to normalize
 * @returns {Vec4Like} out
 */
export function normalize(out: Vec4Like, a: Vec4Like): Vec4Like {
    let x = a[0];
    let y = a[1];
    let z = a[2];
    let w = a[3];
    let len = x * x + y * y + z * z + w * w;
    if (len > 0) {
        len = 1 / Math.sqrt(len);
    }
    out[0] = x * len;
    out[1] = y * len;
    out[2] = z * len;
    out[3] = w * len;
    return out;
}

/**
 * Calculates the dot product of two vec4's
 *
 * @param {Vec4Like} a the first operand
 * @param {Vec4Like} b the second operand
 * @returns {number} dot product of a and b
 */
export function dot(a: Vec4Like, b: Vec4Like): number {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}

/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {Vec4Like} out the receiving vector
 * @param {Vec4Like} a the first operand
 * @param {Vec4Like} b the second operand
 * @param {number} t interpolation amount between the two inputs
 * @returns {Vec4Like} out
 */
export function lerp(out: Vec4Like, a: Vec4Like, b: Vec4Like, t: number): Vec4Like {
    let ax = a[0];
    let ay = a[1];
    let az = a[2];
    let aw = a[3];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    out[2] = az + t * (b[2] - az);
    out[3] = aw + t * (b[3] - aw);
    return out;
}