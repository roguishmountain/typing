// scales
namespace d3_scale {
// <Range, Output>
    var interpolateCool: () => any;
    var interpolateInferno: () => any;
    var interpolateMagma: () => any;
    var interpolatePlasma: () => any;
    var interpolateRainbow: () => any;
    var interpolateViridis: () => any;
    var interpolateWarm: () => any;

    var scaleBand: () => ScaleBand;
    var scaleCubehelix: () => any;
    var scaleIdentity: () => any;
    var scaleImplicit: () => any;
    var scaleLinear: () => ScaleContinuous;
    var scaleLog: () => any;
    var scaleOrdinal: () => ScaleOrdinal;
    var scalePoint: () => any;
    var scalePow: () => any;
    var scaleQuantile: () => any;
    var scaleQuantize: () => any;

    var schemeCategory10: string[];
    var schemeCategory20: string[];
    var schemeCategory20b: string[];
    var schemeCategory20c: string[];

    interface ScaleOrdinal {
        (args: any): any;
        domain(domain?: any[]): any;
        range(range?: any[]): any;
        unknown(value?: any): any;
        copy(): ScaleOrdinal;
    }

    interface ScaleBand {
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

    interface ScaleContinuous {
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
}

export = d3_scale;
