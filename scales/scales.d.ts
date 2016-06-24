// scales

// <Range, Output>
export interface Scale {
    interpolateCool(): any;
    interpolateInferno(): any;
    interpolateMagma(): any;
    interpolatePlasma(): any;
    interpolateRainbow(): any;
    interpolateViridis(): any;
    interpolateWarm(): any;

    scaleBand(): ScaleBand;
    scaleCubehelix(): any;
    scaleIdentity(): any;
    scaleImplicit(): any;
    scaleLinear(): ScaleContinuous;
    scaleLog(): any;
    scaleOrdinal(): ScaleOrdinal;
    scalePoint(): any;
    scalePow(): any;
    scaleQuantile(): any;
    scaleQuantize(): any;

    schemeCategory10: string[];
    schemeCategory20: string[];
    schemeCategory20b: string[];
    schemeCategory20c: string[];
}

export interface ScaleOrdinal {
    (args: any): any;
    domain(domain?: any[]): any;
    range(range?: any[]): any;
    unknown(value?: any): any;
    copy(): ScaleOrdinal;
}

export interface ScaleBand {
    (args: any): any;
    domain(domain?: any[]): any;
    range(range?: any[]): any;
    rangeRound(range?: any[]): any;
    round(round?: boolean): any;
    paddingInner(padding?: any): any;
    paddingOut(padding?: any): any;
    padding(padding?: any): any;
    align(align?: number): any;
    bandwidth(): any;
    step(): any;
    copy(): ScaleBand;
}

export interface ScaleContinuous {
    /////// continuous
    (x?: number): number;
    invert(y: number): number;

    // If the elements in the given array are not numbers,
    // they will be coerced to numbers.
    // changed from d3
    domain(): number[];
    // make sure this is valid
    domain(x: (number | string)[]): ScaleContinuous;

    // Range
    range(): any[];
    range(y: any[]): ScaleContinuous;

    rangeRound(): number;
    rangeRound(y: number[]): ScaleContinuous;

    clamp(): boolean;
    clamp(s: boolean): ScaleContinuous;

    // https://github.com/d3/d3-scale#continuous_interpolate
    // TODO: fix this
    interpolate(any): any;

    ticks(count?: number): number[];

    // not sure on this one
    tickFormat(
        count: number,
        specifier?: string
    ): () => string;
    tickFormat(): () => string;

    nice(count?: number): ScaleContinuous;

    scaleLinear(): ScaleContinuous;

    copy(): ScaleContinuous;
}
