///// d3-shape

export interface Shape {
        arc(): Arc;
        area(): Area;
        line(): Line;
        pie(): Pie;
        radialArea(): RadialArea;
        radialLine(): RadialLine;


        ///// curves
        curveBasis(): any;
        curveBasisClosed(): any;
        curveBasisOpen(): any;
        curveBundle(): any;
        curveCardinal(): any;
        curveCardinalClosed(): any;
        curveCardinalOpen(): any;
        curveCatmullRom(): any;
        curveCatmullRomClosed(): any;
        curveCatmullRomOpen(): any;
        curveLinear(): any;
        curveLinearClosed(): any;
        curveMonotoneX(): any;
        curveMonotoneY(): any;
        curveNatural(): any;
        curveStep(): any;
        curveStepAfter(): any;
        curveStepBefore(): any;

        curveBasis(context: any): any;
        curveBasisClosed(context: any): any;
        curveBasisOpen(context: any): any;
        curveBundle(context: any, beta?: number): any;
        curveCardinal(context: any, tension?: number): any;
        curveCardinalClosed(context: any, tension?: number): any;
        curveCardinalOpen(context: any, tension?: number): any;
        curveCatmullRom(context: any, alpha?: number): any;
        curveCatmullRomClosed(context: any, alpha?: number): any;
        curveCatmullRomOpen(context: any, alpha?: number): any;
        curveLinear(context: any): any;
        curveLinearClosed(context: any): any;
        curveMonotoneX(context: any): any;
        curveMonotoneY(context: any): any;
        curveNatural(context: any): any;
        curveStep(context: any): any;
        curveStepAfter(context: any): any;
        curveStepBefore(context: any): any;

        stack(): Stack;
        stackOffsetExpand(): Stack;
        stackOffsetNone(): Stack;
        stackOffsetSilhouette(): Stack;
        stackOffsetWiggle(): Stack;
        stackOrderAscending(): Stack;
        stackOrderDescending(): Stack;
        stackOrderInsideOut(): Stack;
        stackOrderNone(): Stack;
        stackOrderReverse(): Stack;
        symbol(): Symbol;
        symbolCircle: Symbol;
        symbolCross: Symbol;
        symbolDiamond: Symbol;
        symbolSquare: Symbol;
        symbolStar: Symbol;
        symbolTriangle: Symbol;
        symbolWye: Symbol;
        symbols: Symbol;
}

export interface Arc {
    ///// arcs

    (args: any): string | Function | void;
    (): string | Function | void;
    centroid(args: any): number[];
    innerRadius(radius: Function | number): Arc;
    innerRadius(): Function;
    outerRadius(radius: Function | number): Arc;
    outerRadius(): Function;
    cornerRadius(radius: Function | number): Arc;
    cornerRadius(): Function;
    startAngle(radius: Function | number): Arc;
    startAngle(): Function;
    endAngle(radius: Function | number): Arc;
    endAngle(): Function;
    padAngle(radius: Function | number): Arc;
    padRadius(): Function;
    context(context?: any): any;

}

export interface Pie {
    ///// pies

    (data: any[], args?: any): Object[];
    value(value: Function | number): Pie;
    value(): Function;
    sort(compare: Function): Pie;
    sort(): Function;
    sortValues(compare: Function): Pie;
    sortValues(): Function;
    startAngle(angle: Function): Pie;
    startAngle(): Function;
    endAngle(angle: Function | number): Pie;
    endAngle(): Function;
    padAngle(angle: Function | number): Pie;
    padAngle(): Function;

}

export interface Line {
    ///// lines

    (data?: any[]): string | Function;
    x(x: Function | number): Line;
    x(): Function;
    y(y: Function | number): Line;
    y(): Function;
    defined(define?: boolean | Function): Function;
    /////////////
    curve(): any;
    curve(curve: Function | Curve,
        parameters?: any): any;
    context(context?: any): any;
}

export interface RadialLine {
    ///// radial lines

    (data?: any[]): string | Function;
    angle(a?: Function): Function
    radius(r?: Function): Function
    defined(define?: boolean | Function): Function;
    curve(): Function;
    curve(curve: Curve | Curve,
        parameters?: any): Function;
    context(context?: any): any;
}

export interface Area {
    ///// area

    /// needs to be fixed
    (data?: any[]): string;
    area(): Area;
    ///
    x(x: Function): Area;
    x(): Function;
    x0(x: Function | number): Area;
    x0(): Function;
    x1(x: Function | number): Area;
    x1(): Function;
    y(x: Function): Area;
    y(): Function;
    y0(x: Function | number): Area;
    y0(): Function;
    y1(x: Function | number): Area;
    y1(): Function;
    angle(a?: Function): Function;
    startAngle(a?: Function): Function;
    endAngle(a?: Function): Function;
    radius(r?: Function): Function;
    innerRadius(r?: Function): Function;
    outerRadius(r?: Function): Function;
    defined(define: Function | boolean): Function;
    curve(): Function;
    curve(curve: Curve | Curve,
        parameters?: any): Function;

    // https://github.com/d3/d3-shape/#area_context
    context(context?: any): any;
}

export interface RadialArea {
    ///// radial area

    (data?: any[]): string | Function;
    angle(a: Function | number): RadialArea;
    angle(): Function;
    startAngle(a: Function | number): RadialArea;
    startAngle(): Function;
    endAngle(a: Function | number): RadialArea;
    endAngle(): Function;
    radius(r: Function | number): RadialArea;
    radius(): Function;
    innerRadius(r: Function | number): RadialArea;
    innerRadius(): Function;
    outerRadius(r: Function | number): RadialArea;
    outerRadius(): Function;
    defined(define: Function | boolean): Function;
    curve(): Function;
    curve(curve: Function | Curve,
        parameters?: any): Function;

    // https://github.com/d3/d3-shape/#area_context
    context(context?: any): any;
}

export interface Curve {
    ///// curves
    areaStart(): Function;
    areaEnd(): Function;
    lineStart(): Function;
    lineEnd(): Function;
    // check this
    point(x: number, y: number): Function;
}

export interface Symbol {
    ///// symbols

    (args: any): string | Function | void;
    type(type?: any): Object;
    size(size?: number): number;
    context(context?: any): any;
    symbol(): Symbol;
    symbols: Object[];
    symbolCircle: Object;
    symbolCross: Object;
    symbolDiamond: Object;
    symbolSquare: Object;
    symbolStar: Object;
    symbolTriangle: Object;
    symbolWye: Object;

    // https://github.com/d3/d3-shape/#symbolType_draw
}

export interface Stack {
    ///// stacks

    (data: any[], args?: any): Stack;
    keys(keys: any): Stack;
    keys(): any[];

    // https://github.com/d3/d3-shape/#stack_value

    order(order: Function | any[]): Stack;
    order(): any;

    offset(offset: Function | any[]): Stack;
    offset(): any;

    // stack orders
    // stack offset
}