import { Graph } from "./Graph";
import { Mouse } from "./Mouse";
import { Point } from "./Point";

export class Circle extends Graph {

    //半径
    private _radius: number;

    constructor(x: number, y: number, r: number) {
        super();
        //初始化一个O点
        let o_point = new Point(x, y);
        let origin_point = new Point(x, y);
        //将当前点和初始点数组初始化
        this.Points.push(o_point);
        this.OriginPoints.push(origin_point);
        this._radius = r;
    }

    public get Radius(): number {
        return this._radius;
    }


    public set Radius(v: number) {
        this._radius = v;
    }



    public getString(): string {
        return "r:" + this.Radius + ";origin-x:" + this.getOriginPoint(0).X + ";originPoint-y:" + this.getOriginPoint(0).Y + ";point-x:" + this.getPoint(0).X + ";point-y:" + this.getPoint(0).Y + ";isSelected:" + this.isSelected;
    }

    //判断一个点时候存在于图形内
    public scopeJudgment(mousePoint: Point): boolean {
        //临时方法：计算当前鼠标与图形的实时位置的距离，如果小于等于半径，那么就在圆内
        let r = Math.sqrt(Math.pow(mousePoint.X - this.Points[0].X, 2) + Math.pow(mousePoint.Y - this.Points[0].Y, 2));
        if (r <= this._radius) {
            return true;
        }
        return false;
    }

    public draw(args: CanvasRenderingContext2D): void {
        let startAngle = 0; // 开始点
        let endAngle = Math.PI * 2; // 结束点

        // beginPath 起始一条路径，或重置当前路径
        args.beginPath();
        args.arc(this.Points[0].X, this.Points[0].Y, this.Radius, startAngle, endAngle, true);
        // stroke 绘制已定义的路径
        args.stroke();
    }

    public calculateGraphEndPoint(myMouse: Mouse): void {
        //计算的出鼠标的偏移轨迹向量
        let trackVQ_X = myMouse.point.X - myMouse.originPoint.X;
        let trackVQ_Y = myMouse.point.Y - myMouse.originPoint.Y;
        let trackVQ: Point = new Point(trackVQ_X, trackVQ_Y);
        //计算图形的点的偏移
        this.Points[0].X = this.OriginPoints[0].X + trackVQ.X;
        this.Points[0].Y = this.OriginPoints[0].Y + trackVQ.Y;
    }
}
