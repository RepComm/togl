export declare type Vec2Like = Array<number>;
export declare class Vec2 extends Array<number> {
    constructor(x?: number, y?: number);
    get x(): number;
    get y(): number;
    set x(v: number);
    set y(v: number);
    set(x: any, y?: any): this;
    copy(v: any): this;
    add(va: any, vb: any): this;
    sub(va: any, vb: any): this;
    multiply(v: any): this;
    divide(v: any): this;
    inverse(v?: this): this;
    len(): number;
    distance(v: any): number;
    squaredLen(): number;
    squaredDistance(v?: Vec2Like): number;
    negate(v?: this): this;
    cross(va: any, vb: any): number;
    scale(v: any): this;
    normalize(): this;
    dot(v: any): number;
    equals(v: any): boolean;
    applyMatrix3(mat3: any): this;
    applyMatrix4(mat4: any): this;
    lerp(v: any, a: any): this;
    clone(): Vec2;
    fromArray(a: any, o?: number): this;
    toArray(a?: any[], o?: number): any[];
}