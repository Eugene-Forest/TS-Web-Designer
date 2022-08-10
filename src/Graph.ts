import { Mouse } from './Mouse';
import { Point } from "./Point";

export abstract class Graph {

    private _isSelected: boolean = false;

    private _origin_points: Point[] = [];

    private _points: Point[] = [];

    constructor() {
        this._isSelected = false;
    }

    public get isSelected(): boolean {
        return this._isSelected;
    }


    public set isSelected(v: boolean) {
        this._isSelected = v;
    }


    public get Points(): Point[] {
        return this._points;
    }


    public get OriginPoints(): Point[] {
        return this._origin_points;
    }


    public set Points(v: Point[]) {
        this._points = v;
    }

    public set OriginPoints(v: Point[]) {
        this._origin_points = v;
    }

    public getOriginPoint(index: number): Point | null {
        if (index >= 0 && index < this._origin_points.length) {
            return this._origin_points[index];
        } else {
            return null;
        }

    }

    public getPoint(index: number): Point | null {
        if (index >= 0 && index < this._points.length) {
            return this._points[index];
        } else {
            return null;
        }

    }

    public addOriginPoint(newPoint: Point) {
        this._origin_points.push(newPoint);
    }

    public addPoints(newPoint: Point) {
        this._points.push(newPoint);
    }

    //图形的在画布上绘制
    public abstract draw(args: any): void;

    //通过鼠标轨迹向量计算图形的偏移
    public abstract calculateGraphEndPoint(myMouse: Mouse): void;

    //判断一个点是否存在于图形内
    public abstract scopeJudgment(mousePoint: Point): boolean;


    public abstract getString(): string;

}