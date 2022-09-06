import { Mouse } from './Mouse';
import { Point } from "./Point";

export abstract class Graph {

    /**
     * 用以计数共有类属性
     */
    static amount: number = 0;

    /**
     * 用以表示当前图形的唯一指向的名字
     */
    readonly _name: string;

    /**
     * 是否被鼠标选中
     */
    private _isSelected: boolean = false;


    /**
     * 鼠标是否在图形范围内
     */
    private _isInScope: boolean = false;

    /**
     * 初始点集合 | 上一次操作的图形的点集合
     */
    private _origin_points: Point[] = [];

    /**
     * 图形当前的点集合
     * */
    private _points: Point[] = [];

    constructor() {
        this._isSelected = false;
        this._name = "G" + String(Graph.amount);
        Graph.amount++;
    }

    public get IsSelected(): boolean {
        return this._isSelected;
    }


    public set IsSelected(v: boolean) {
        this._isSelected = v;
    }


    public get IsInScope(): boolean {
        return this._isInScope;
    }


    public set IsInScope(v: boolean) {
        this._isInScope = v;
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

    /**
     * 图形的在画布上绘制
     * @param context 
     */
    public abstract draw(context: CanvasRenderingContext2D): void;

    /**
     * 通过鼠标轨迹向量计算图形的偏移
     * @param myMouse 鼠标对象
     */
    public abstract calculateGraphEndPoint(myMouse: Mouse): void;

    /**
     * 判断一个点是否存在于图形内
     * @param mousePoint 鼠标当前的点坐标
     */
    public abstract scopeJudgment(mousePoint: Point): boolean;

    /**
     * 获取当前图形对象的字符串表示
     */
    public abstract getString(): string;

}