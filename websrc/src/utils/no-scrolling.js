/* eslint-disable */
export const noscrolling = (touchMid, touchBtm) => {
    var startX = 0,
        startY = 0,
        _top = 0;

    document.addEventListener(
        "touchstart",
        evt => {
            [startX, startY] = touchSatrtFunc(evt);
        }, {
            passive: false
        }
    );

    //touchstart事件
    function touchSatrtFunc(evt) {
        try {
            var touch = evt.touches[0]; //获取第一个触点
            var x = Number(touch.pageX); //页面触点X坐标
            var y = Number(touch.pageY); //页面触点Y坐标
            //记录触点初始位置
            return [x, y];
        } catch (err) {
            alert("touchSatrtFunc：" + err.message);
        }
    }

    var scrollDom = document.querySelector("div[scroll]");
    var sonScrollDom = document.querySelector("div[son-scroll]");

    if (scrollDom) {
        scrollDom.addEventListener(
            "touchmove",
            ev => {
                var _point = ev.touches[0];
                _top = scrollDom.scrollTop;
                // 什么时候到底部
                var _bottomFaVal = scrollDom.scrollHeight - scrollDom.offsetHeight;
                // 到达顶端
                if (_top === 0) {
                    // 阻止向下滑动
                    if (_point.clientY > startY) {
                        console.log("到顶了");
                        ev.preventDefault();
                    } else {
                        // 阻止冒泡
                        // 正常执行
                        ev.stopPropagation();
                    }
                } else if (_top === _bottomFaVal) {
                    // 到达底部
                    // 阻止向上滑动
                    if (_point.clientY < startY) {
                        console.log("到底了");
                        if (touchBtm instanceof Function) {
                            touchBtm();
                        }
                        ev.preventDefault();
                    } else {
                        ev.stopPropagation();
                    }
                } else if (_top > 0 && _top < _bottomFaVal) {
                    ev.stopPropagation();
                    if (touchMid instanceof Function) {
                        touchMid();
                    }
                } else {
                    ev.preventDefault();
                }
            }, {
                passive: false
            }
        );
    } else {
        document.body.children[1].children[0].addEventListener(
            "touchmove",
            ev => {
                ev.preventDefault();
            }, {
                passive: false
            }
        );
    }

    if (sonScrollDom) {
        sonScrollDom.addEventListener(
            "touchmove",
            ev => {
                let _point = ev.touches[0];
                if (_top == 0 && sonScrollDom.scrollTop == 0 && _point.clientY > startY) {
                    // 阻止向下滑动
                    ev.preventDefault();
                } else {
                    ev.stopPropagation();
                }
            }, {
                passive: false
            }
        );
    }
};
