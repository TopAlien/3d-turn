var OLiList = document.getElementsByTagName('li');
/*变数组*/
var oLi = Array.prototype.slice.call(OLiList);
oLi.forEach(function (ele, index) {
    ele.spec = getSpec(ele);
    ele.addEventListener('mouseenter', function (e) {
        addClass(e, ele, 'in');
    });
    ele.addEventListener('mouseleave', function (e) {
        addClass(e, ele, 'out');
    })
});

/*
*挪中心点
*象限
*弧度变角度
*角平分线
* 变化角度都加180deg
* top: 45--135               1+3%4 = 0
* right: 135--225            2+3%4 = 1
* bottom: 225--315           3+3%4 = 2
* left: 0--45 和 315--360    0---4+3%4 = 3
*
* 区间除以90 四舍五入 再加三取余4
* */
function getSpec(ele) {
    return{
        w: ele.offsetWidth,
        h: ele.offsetHeight
    }
}
function direction(e, ele) {
    var x = e.offsetX - ele.spec.w/2;
    var y = e.offsetY - ele.spec.w/2;
    var dir = ((Math.round((Math.atan2(y, x) * (180/Math.PI) + 180)/90)) + 3) % 4;
    return dir;
}
function addClass(e, ele, state) {
   var dir = direction(e, ele);
   var d;
   switch (dir){
       case 0 :
           d = '-top';
           break;
       case 1 :
           d = '-right';
           break;
       case 2 :
           d = '-bottom';
           break;
       case 3 :
           d = '-left';
           break;
   }
   ele.className = state + d;
}