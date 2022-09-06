import { Circle } from './Circle';
import { Graph } from './Graph';
import { Mouse } from './Mouse';


//获取画布
let canvas = document.querySelector("canvas");
let context: CanvasRenderingContext2D | null;
//创建鼠标和图形对象
let myCircle = new Circle(95, 50, 40);
let myNewCircle = new Circle(200, 50, 30);

//将图形加入图形集合用以集中处理
let myGraphs: Graph[] = [];
myGraphs.push(myCircle);
myGraphs.push(myNewCircle);

// console.log(myGraphs);

let myMouse = new Mouse();
//获取html元素用以显示坐标
let mouse = document.getElementById("mouse");
let mouse_x = document.getElementById("mouse_x");
let mouse_y = document.getElementById("mouse_y");
let graph = document.getElementById("graph");
let graph_x = document.getElementById("graph_x");
let graph_y = document.getElementById("graph_y");
let graph_selected = document.getElementById("graph_selected");


if (canvas != null) {
    //获取上下文
    context = canvas.getContext("2d");
    if (context != null) {
        //先进行一次绘制以显示图形
        draw();
    }
}

//画图方法
function draw() {
    if (context != null) {
        //先进行一次绘制以显示图形
        for (let myGraph of myGraphs) {
            myGraph.draw(context);
        }
    }
}

//清空画布
function clearCanvas() {
    if (canvas != null) {
        canvas.height = canvas.height;
    }
}

//设置鼠标显示图
function setCursorStyle(style: string): void {
    let myCanvas = document.getElementById("myCanvas");
    if (myCanvas != null) {
        if (myCanvas.style) {
            myCanvas.style.cursor = style;
        }
    }
}


//设置鼠标点击时的事件
document.onmousedown = function (event) {
    for (let graph of myGraphs) {
        //判断是否存在图形的范围内
        if (graph.scopeJudgment(myMouse.Point)) {
            //如果在图形范围内，那么触发拖拽事件；所谓拖拽事件即 在鼠标mouseup之前持续画图渲染
            //改变图形的选中状态
            graph.IsSelected = true;
            // myMouse.IsInGraphDown = true;
            //首先初始化鼠标和图形的初始坐标
            graph.OriginPoints[0].X = graph.Points[0].X;
            graph.OriginPoints[0].Y = graph.Points[0].Y;
            myMouse.OriginPoint.X = myMouse.Point.X;
            myMouse.OriginPoint.Y = myMouse.Point.Y;
            //初始化鼠标当前位置
            myMouse.Point.X = event.pageX;
            myMouse.Point.Y = event.pageY;
        } else {
            //如果不在图形范围内，那么不触发事件
        }
    }
}

//鼠标点击事件结束
document.onmouseup = function (event) {
    for (let graph of myGraphs) {
        if (graph.IsSelected) {
            //结束图形的选中状态
            graph.IsSelected = false;
            // myMouse.IsInGraphDown = false;
            // console.log(graph.getString())
            graph.OriginPoints[0].X = graph.Points[0].X;
            graph.OriginPoints[0].Y = graph.Points[0].Y;
            myMouse.OriginPoint.X = myMouse.Point.X;
            myMouse.OriginPoint.Y = myMouse.Point.Y;
            break;
        }
    }
}

//设置鼠标移动时的事件
document.onmousemove = function (event) {

    //todo 需要判断画布边界问题

    myMouse.Point.X = event.pageX;
    myMouse.Point.Y = event.pageY;

    if (mouse != null && mouse_x != null && mouse_y != null && graph != null && graph_selected != null) {
        mouse.innerText = myMouse.getString();
        mouse_x.innerText = String(event.pageX);
        mouse_y.innerText = String(event.pageY);

        graph.innerText = myCircle.getString();
        //myCircle.Point.X为什么无法获取而报错？!
        // graph_x.innerText = String(myCircle.getPoint(0).X);
        // graph_y.innerText = String(myCircle.getPoint(0).Y);
        graph_selected.innerText = String(myCircle.IsSelected);
    }

    let inScope = false;

    for (let graph of myGraphs) {
        //判断鼠标是否在图形范围内
        if (graph.scopeJudgment(myMouse.Point)) {
            inScope = true;
            myMouse.IsInGraphDown = true;
        } else {
            myMouse.IsInGraphDown = false;
        }
        // if (myMouse.IsInGraphDown) {
        //     graph.draw(context);
        // }
        //继续判断是否发生点击事件/或者是否有图形被选中，以及鼠标是否处于点击状态
        if (graph.IsSelected) {
            //然后通过判定获取鼠标坐标，计算出移动后的图形的坐标（需要持续运算和赋值）
            graph.calculateGraphEndPoint(myMouse);
            //持续渲染
            clearCanvas();
            draw();
        }
    }
    if (inScope) {
        //如果在图形范围内，那么改变鼠标状态
        setCursorStyle("pointer");
    } else {
        //如果不在图形范围内，那么鼠标图案设置为初始
        setCursorStyle("default");
    }
}
