
/**
 * 在平面直角坐标系中，一个点坐标类定义
 */
export class Point {

    private _x: number = 0;
    private _y: number = 0;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    public get X(): number {
        return this._x;
    }


    public set X(v: number) {
        this._x = v;
    }



    public get Y(): number {
        return this._y;
    }


    public set Y(v: number) {
        this._y = v;
    }

}