import { Point } from "./Point";

export class Mouse {

    //作为点击事件开始时的鼠标位置
    originPoint: Point = new Point(0, 0);
    //实时位置
    point: Point = new Point(0, 0);

    //需要标记一个在图形范围内点击后的产生的信号量，此信号量直至鼠标右键松开
    private _isInGraphDown: boolean = false;



    public get IsInGraphDown(): boolean {
        return this._isInGraphDown;
    }


    public set IsInGraphDown(v: boolean) {
        this._isInGraphDown = v;
    }



    getString(): string {
        return "origin-x:" + this.originPoint.X + ";originPoint-y:" + this.originPoint.Y + ";point-x:" + this.point.X + ";point-y:" + this.point.Y;
    }
}