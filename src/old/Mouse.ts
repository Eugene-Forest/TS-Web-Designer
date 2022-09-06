import { Point } from "./Point";

export class Mouse {

    /**
     * 作为点击事件开始时的鼠标位置
     */
    private _originPoint: Point = new Point(0, 0);
    /**
     * 实时位置
     */
    private _point: Point = new Point(0, 0);

    /**
     * 需要标记一个在图形范围内点击后的产生的信号量，此信号量直至鼠标右键松开
     */
    private _isInGraphDown: boolean = false;


    public get Point(): Point {
        return this._point;
    }


    public set Point(v: Point) {
        this._point = v;
    }



    public get OriginPoint(): Point {
        return this._originPoint;
    }


    public set OriginPoint(v: Point) {
        this._originPoint = v;
    }




    public get IsInGraphDown(): boolean {
        return this._isInGraphDown;
    }


    public set IsInGraphDown(v: boolean) {
        this._isInGraphDown = v;
    }



    public getString(): string {
        return "origin-x:" + this._originPoint.X + ";originPoint-y:" + this._originPoint.Y + ";point-x:" + this._point.X + ";point-y:" + this._point.Y;
    }
}