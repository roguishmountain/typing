// scales

// <Range, Output>
export interface Scale {
    scaleBand(): ScaleBand;
    scaleCategory10(): any;
    scaleCategory20(): any;
    scaleCategory20b(): any;
    scaleCategory20c(): any;
    scaleCool(): any;
    scaleCubehelix(): any;
    scaleIdentity(): any;
    scaleImplicit(): any;
    scaleInferno(): any;
    scaleLinear(): ScaleContinuous;
    scaleLog(): any;
    scaleMagma(): any;
    scaleOrdinal(): ScaleOrdinal;
    scalePlasma(): any;
    scalePoint(): any;
    scalePow(): any;
    scaleQuantile(): any;
    scaleQuantize(): any;
    scaleRainbow(): any;
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