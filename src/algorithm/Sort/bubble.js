//冒泡排序
module.exports = function Bubble (arr){
    for(let i=0; i<arr.length; i++){
        for(let j=0;j<arr.length-i;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr 
}

// 增加标识位
function bubbleSort2(arr) {
    var i = arr.length-1  //初始时,最后位置保持不变
    while ( i > 0) {
        var flag= 0 //每趟开始时,无记录交换
        for (var j= 0; j< i; j++)
            if (arr[j]> arr[j+1]) {
                flag= j; //记录交换的位置,flag之后的均已交换成功
                var tmp = arr[j];
　　　　　　　　　 arr[j]=arr[j+1];
　　　　　　　　　 arr[j+1]=tmp;
            }
        i= flag; //为下一趟排序作准备，只要扫描到flag位置即可
     }return arr;
}