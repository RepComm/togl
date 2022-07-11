/**
 * Original code from https://github.com/oframe/ogl
 * Refactored by Jon: https://github.com/RepComm/togl
 */
export declare type RendererPowerReference = "default";
export interface RendererConfig {
    canvas: HTMLCanvasElement;
    width: number;
    height: number;
    dpr: number;
    autoClear: boolean;
    webgl: number;
    color: boolean;
    id: number;
    isWebgl2: boolean;
    attributes: RendererConfigAttributes;
}
export interface RendererConfigAttributes {
    alpha: boolean;
    depth: boolean;
    stencil: boolean;
    antialias: boolean;
    premultipliedAlpha: boolean;
    preserveDrawingBuffer: boolean;
    powerPreference: RendererPowerReference;
}
export declare const RendererConfigDefaults: RendererConfig;
export interface RendererState {
    blendFunc: {
        src: number;
        dst: number;
        srcAlpha?: number;
        dstAlpha?: number;
    };
    blendEquation: {
        modeRGB: number;
        modeAlpha?: number;
    };
    cullFace: null;
    frontFace: number;
    depthMask: boolean;
    depthFunc: number;
    premultiplyAlpha: boolean;
    flipY: boolean;
    unpackAlignment: number;
    framebuffer: null;
    viewport: {
        x: number;
        y: number;
        width: number | null;
        height: number | null;
    };
    textureUnits: Array<unknown>;
    activeTextureUnit: number;
    boundBuffer: null;
    uniformLocations: Map<unknown, unknown>;
    currentProgram: null;
}
export declare type WebGLExtensionName = string;
export declare type WebGLExtensionFunctionName = string;
export interface WebGLExtensionFunction {
    bind(extension: WebGLExtension): WebGLExtensionFunction;
}
export interface WebGLExtension {
    [key: string]: WebGLExtensionFunction | ParameterId;
}
export declare type GetExtensionResult = null | WebGLExtension | WebGLExtensionFunction;
export declare type ParameterId = number;
export interface RendererParameter {
}
export interface RendererParameters {
    [key: string]: RendererParameter;
}
export declare class Renderer {
    config: RendererConfig;
    gl: WebGLRenderingContext | WebGL2RenderingContext;
    state: RendererState;
    extensions: {
        [key: WebGLExtensionName]: WebGLExtension;
    };
    vertexAttribDivisor: GetExtensionResult;
    drawArraysInstanced: GetExtensionResult;
    drawElementsInstanced: GetExtensionResult;
    createVertexArray: GetExtensionResult;
    bindVertexArray: GetExtensionResult;
    deleteVertexArray: GetExtensionResult;
    drawBuffers: GetExtensionResult;
    parameters: RendererParameters;
    constructor(config?: Partial<RendererConfig>);
    setSize(width: number, height: number): void;
    setViewport(width: number, height: number, x?: number, y?: number): void;
    setScissor(width: number, height: number, x?: number, y?: number): void;
    enable(id: number): void;
    disable(id: number): void;
    setBlendFunc(src: number, dst: number, srcAlpha: any, dstAlpha: any): void;
    setBlendEquation(modeRGB: number, modeAlpha: number): void;
    setCullFace(value: any): void;
    setFrontFace(value: any): void;
    setDepthMask(value: any): void;
    setDepthFunc(value: any): void;
    activeTexture(value: any): void;
    bindFramebuffer({ target, buffer }?: {
        target?: number;
        buffer?: any;
    }): void;
    getExtension(extensionName: WebGLExtensionName, webgl2Func?: WebGLExtensionFunctionName, extFunctionName?: any): GetExtensionResult;
    sortOpaque(a: any, b: any): number;
    sortTransparent(a: any, b: any): number;
    sortUI(a: any, b: any): number;
    getRenderList({ scene, camera, frustumCull, sort }: {
        scene: any;
        camera: any;
        frustumCull: any;
        sort: any;
    }): any[];
    render({ scene, camera, target, update, sort, frustumCull, clear }: {
        scene: any;
        camera: any;
        target?: any;
        update?: boolean;
        sort?: boolean;
        frustumCull?: boolean;
        clear: any;
    }): void;
}
