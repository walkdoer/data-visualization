##入門

### Selections

更多参考[How Selectio work](http://bost.ocks.org/mike/selection/)

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

> Whenever this code is run, it recomputes the data join and maintains the desired correspondence between elements and data. If the new dataset is smaller than the old one, the surplus elements end up in the exit selection and get removed. If the new dataset is larger, the surplus data ends up in the enter selection and new nodes are added. If the new dataset is exactly the same size, then all the elements are simply updated with new positions, and no elements are added or removed.

[更多参考 http://bost.ocks.org/mike/join/](http://bost.ocks.org/mike/join/)

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

如果沒有使用enter和exit，會導致新添加的數據沒有添加到頁面，刪除的數據沒有從頁面上移除

### Transformation, not Representation
d3不是一種新的圖形化展示(graphical representation), 通過web標準,SVG,CSS,HTML等等來進行構建。

### 動畫


