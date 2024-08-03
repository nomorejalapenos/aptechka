import { Dot2D } from './ts-shape.js';

export declare function lerp(a: number, b: number, c: number): number;
export declare function damp(a: number, b: number, c: number, dt: number): number;
export declare function step(edge: number, value: number, x?: number, y?: number): number;
export declare function round(number: number, precision?: number): number;
export declare function clamp(number: number, min?: number, max?: number): number;
export declare function mapRange(value: number, rangeA: [number, number], rangeB: [number, number]): number;
export declare function smoothstep(x: number, min: number, max: number): number;
export declare function smootherstep(x: number, min: number, max: number): number;
export declare function calculateDistance(d1: Dot2D, d2: Dot2D): number;
export declare function calculateDistanceWithRadius(x1: number, y1: number, r1: number, x2: number, y2: number, r2: number): number;
