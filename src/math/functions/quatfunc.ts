
import { Mat3Like } from "../mat3.js";
import type { QuatLike } from "../quat.js";
import type { Vec3Like } from "../vec3.js";
import * as vec4 from "./vec4func.js";

export type Vec3Order = 'XYZ'|'YXZ'|'ZXY'|'ZYX'|'YZX'|'XZY';

/**
 * Set a quat to the identity quaternion
 */
export function identity(out: QuatLike): QuatLike {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}

/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it
 **/
export function setAxisAngle(out: QuatLike, axis: Vec3Like, rad: number): QuatLike {
  rad = rad * 0.5;
  let s = Math.sin(rad);
  out[0] = s * axis[0];
  out[1] = s * axis[1];
  out[2] = s * axis[2];
  out[3] = Math.cos(rad);
  return out;
}

/**
 * Multiplies two quats
 */
export function multiply(out: QuatLike, a: QuatLike, b: QuatLike): QuatLike {
  let ax = a[0],
    ay = a[1],
    az = a[2],
    aw = a[3];
  let bx = b[0],
    by = b[1],
    bz = b[2],
    bw = b[3];

  out[0] = ax * bw + aw * bx + ay * bz - az * by;
  out[1] = ay * bw + aw * by + az * bx - ax * bz;
  out[2] = az * bw + aw * bz + ax * by - ay * bx;
  out[3] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}

/**
 * Rotates a quaternion by the given angle about the X axis
 */
export function rotateX(out: QuatLike, a: QuatLike, rad: number): QuatLike {
  rad *= 0.5;

  let ax = a[0],
    ay = a[1],
    az = a[2],
    aw = a[3];
  let bx = Math.sin(rad),
    bw = Math.cos(rad);

  out[0] = ax * bw + aw * bx;
  out[1] = ay * bw + az * bx;
  out[2] = az * bw - ay * bx;
  out[3] = aw * bw - ax * bx;
  return out;
}

/**
 * Rotates a quaternion by the given angle about the Y axis
 */
export function rotateY(out: QuatLike, a: QuatLike, rad: number): QuatLike {
  rad *= 0.5;

  let ax = a[0],
    ay = a[1],
    az = a[2],
    aw = a[3];
  let by = Math.sin(rad),
    bw = Math.cos(rad);

  out[0] = ax * bw - az * by;
  out[1] = ay * bw + aw * by;
  out[2] = az * bw + ax * by;
  out[3] = aw * bw - ay * by;
  return out;
}

/**
 * Rotates a quaternion by the given angle about the Z axis
 */
export function rotateZ(out: QuatLike, a: QuatLike, rad: number): QuatLike {
  rad *= 0.5;

  let ax = a[0],
    ay = a[1],
    az = a[2],
    aw = a[3];
  let bz = Math.sin(rad),
    bw = Math.cos(rad);

  out[0] = ax * bw + ay * bz;
  out[1] = ay * bw - ax * bz;
  out[2] = az * bw + aw * bz;
  out[3] = aw * bw - az * bz;
  return out;
}

/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param out the receiving quaternion
 * @param a the first operand
 * @param b the second operand
 * @param t interpolation amount between the two inputs
 * @returns out
 */
export function slerp(out: QuatLike, a: QuatLike, b: QuatLike, t: number): QuatLike {
  // benchmarks:
  //    http://jsperf.com/quaternion-slerp-implementations
  let ax = a[0],
    ay = a[1],
    az = a[2],
    aw = a[3];
  let bx = b[0],
    by = b[1],
    bz = b[2],
    bw = b[3];

  let omega, cosom, sinom, scale0, scale1;

  // calc cosine
  cosom = ax * bx + ay * by + az * bz + aw * bw;
  // adjust signs (if necessary)
  if (cosom < 0.0) {
    cosom = -cosom;
    bx = -bx;
    by = -by;
    bz = -bz;
    bw = -bw;
  }
  // calculate coefficients
  if (1.0 - cosom > 0.000001) {
    // standard case (slerp)
    omega = Math.acos(cosom);
    sinom = Math.sin(omega);
    scale0 = Math.sin((1.0 - t) * omega) / sinom;
    scale1 = Math.sin(t * omega) / sinom;
  } else {
    // "from" and "to" quaternions are very close
    //  ... so we can do a linear interpolation
    scale0 = 1.0 - t;
    scale1 = t;
  }
  // calculate final values
  out[0] = scale0 * ax + scale1 * bx;
  out[1] = scale0 * ay + scale1 * by;
  out[2] = scale0 * az + scale1 * bz;
  out[3] = scale0 * aw + scale1 * bw;

  return out;
}

/**
 * Calculates the inverse of a quat
 */
export function invert(out: QuatLike, a: QuatLike): QuatLike {
  let a0 = a[0],
    a1 = a[1],
    a2 = a[2],
    a3 = a[3];
  let dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
  let invDot = dot ? 1.0 / dot : 0;

  // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

  out[0] = -a0 * invDot;
  out[1] = -a1 * invDot;
  out[2] = -a2 * invDot;
  out[3] = a3 * invDot;
  return out;
}

/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 */
export function conjugate(out: QuatLike, a: QuatLike): QuatLike {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  return out;
}

/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary
 */
export function fromMat3(out: QuatLike, m: Mat3Like): QuatLike {
  // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
  // article "Quaternion Calculus and Fast Animation".
  let fTrace = m[0] + m[4] + m[8];
  let fRoot;

  if (fTrace > 0.0) {
    // |w| > 1/2, may as well choose w > 1/2
    fRoot = Math.sqrt(fTrace + 1.0); // 2w
    out[3] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot; // 1/(4w)
    out[0] = (m[5] - m[7]) * fRoot;
    out[1] = (m[6] - m[2]) * fRoot;
    out[2] = (m[1] - m[3]) * fRoot;
  } else {
    // |w| <= 1/2
    let i = 0;
    if (m[4] > m[0]) i = 1;
    if (m[8] > m[i * 3 + i]) i = 2;
    let j = (i + 1) % 3;
    let k = (i + 2) % 3;

    fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
    out[i] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
    out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
    out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
  }

  return out;
}

/**
 * Creates a quaternion from the given euler angle x, y, z
 */
export function fromEuler(out: QuatLike, euler: Vec3Like, order: Vec3Order = 'YXZ'): QuatLike {
  let sx = Math.sin(euler[0] * 0.5);
  let cx = Math.cos(euler[0] * 0.5);
  let sy = Math.sin(euler[1] * 0.5);
  let cy = Math.cos(euler[1] * 0.5);
  let sz = Math.sin(euler[2] * 0.5);
  let cz = Math.cos(euler[2] * 0.5);

  if (order === 'XYZ') {
    out[0] = sx * cy * cz + cx * sy * sz;
    out[1] = cx * sy * cz - sx * cy * sz;
    out[2] = cx * cy * sz + sx * sy * cz;
    out[3] = cx * cy * cz - sx * sy * sz;
  } else if (order === 'YXZ') {
    out[0] = sx * cy * cz + cx * sy * sz;
    out[1] = cx * sy * cz - sx * cy * sz;
    out[2] = cx * cy * sz - sx * sy * cz;
    out[3] = cx * cy * cz + sx * sy * sz;
  } else if (order === 'ZXY') {
    out[0] = sx * cy * cz - cx * sy * sz;
    out[1] = cx * sy * cz + sx * cy * sz;
    out[2] = cx * cy * sz + sx * sy * cz;
    out[3] = cx * cy * cz - sx * sy * sz;
  } else if (order === 'ZYX') {
    out[0] = sx * cy * cz - cx * sy * sz;
    out[1] = cx * sy * cz + sx * cy * sz;
    out[2] = cx * cy * sz - sx * sy * cz;
    out[3] = cx * cy * cz + sx * sy * sz;
  } else if (order === 'YZX') {
    out[0] = sx * cy * cz + cx * sy * sz;
    out[1] = cx * sy * cz + sx * cy * sz;
    out[2] = cx * cy * sz - sx * sy * cz;
    out[3] = cx * cy * cz - sx * sy * sz;
  } else if (order === 'XZY') {
    out[0] = sx * cy * cz - cx * sy * sz;
    out[1] = cx * sy * cz - sx * cy * sz;
    out[2] = cx * cy * sz + sx * sy * cz;
    out[3] = cx * cy * cz + sx * sy * sz;
  }

  return out;
}

/**
 * Copy the values from one quat to another
 */
export function copy (out: QuatLike, a: QuatLike): QuatLike {
  return vec4.copy(out, a);
}

/**
 * Set the components of a quat to the given values
 */
export function set (out: QuatLike, x: number, y: number, z: number, w: number): QuatLike {
  return vec4.set(out, x, y, z, w);
}

/**
 * Adds two quat's
 */
export function add (out: QuatLike, a: QuatLike, b: QuatLike): QuatLike {
  return vec4.add(out, a, b);
}

/**
 * Scales a quat by a scalar number
 */
export function scale (out: QuatLike, a: QuatLike, b: number): QuatLike {
  return vec4.scale(out, a, b);
}

/**
 * Calculates the dot product of two quat's
 */
export function dot (a: QuatLike, b: QuatLike): number {
  return vec4.dot(a, b);
}

/**
 * Performs a linear interpolation between two quat's
 */
export function lerp (out: QuatLike, a: QuatLike, b: QuatLike, t: number): QuatLike {
  return vec4.lerp(out, a, b, t);
}

/**
 * Calculates the length of a quat
 */
export function length (a: QuatLike): number {
  return vec4.length(a);
}

/**
 * Normalize a quat
 */
export function normalize (out: QuatLike, a: QuatLike): QuatLike {
  return vec4.normalize(out, a);
}
