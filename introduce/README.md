##入門

### 基本的操作


下面的接口熟悉JQuery的一定不會陌生

- **select和selectAll** 選擇器
- **style** 修改css
- **data** 提供數據綁定

```js
//選擇頁面上的P元素，并將字體顏色改為 red
d3.selectAll("p").style("color", "red");

//支持function
d3.selectAll("p").style("color", function(d, i) {
  return i % 2 ? "#fff" : "#eee";
});

d3.selectAll("p")
    .data([4, 8, 15, 16, 23, 42])
    .style("font-size", function(d) { return d + "px"; });
```

### Enter 和 Exit
Using D3’s enter and exit selections, you can create new nodes for incoming data and remove outgoing nodes that are no longer needed.

* enter：新添加進來的節點
* exit: 即將刪除的節點

```js
d3.select("body").selectAll("p")
    .data([1, 2, 3, 4, 5])
  .enter().append("p")
    .text(function(d) { return "I’m number " + d + "!"; });
```

更新數據, 并刪除exit()返回的節點

```
// Update…
var p = d3.select("body").selectAll("p")
    //更新前3個p的數據
    .data([6, 7, 8])
    //改變前3個p的文字
    .text(updatedNum);

//Exit 移除後面兩個P, 對應上面例子 [4, 5] 對應的P
p.exit().remove();
```

更新數據, 添加新的數據

```
// Update…
var p = d3.select("body").selectAll("p")
    //更新前3個p的數據
    .data([10, 11, 12, 13, 14])
    //改變前3個p的文字
    .text(updatedNum);

p.enter().append('p').text('I am new');
```
