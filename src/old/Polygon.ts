import { Graph } from "./Graph"
import { Mouse } from "./Mouse";
import { Point } from "./Point";

export class Polygon extends Graph {

    public draw(context: CanvasRenderingContext2D): void {

    }

    public getString(): string {

        return "";
    }

    public scopeJudgment(mousePoint: Point): boolean {

        return false;
    }

    public calculateGraphEndPoint(myMouse: Mouse): void {

    }
}