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


#### Selections.data(values, key)

**简单用法**
```
d3.selectAll('p').data([1,2,3,4]).enter().append('p');
```

**处理复合结构**

```
d3.selectAll('p').data(data, function(d) { return d.name; });
```

**处理二维数据**

```
var matrix = [
  [11975,  5871, 8916, 2868],
  [ 1951, 10048, 2060, 6171],
  [ 8010, 16145, 8090, 8045],
  [ 1013,   990,  940, 6907]
];

var tr = d3.select("body").append("table").selectAll("tr")
    .data(matrix)
  .enter().append("tr");

var td = tr.selectAll("td")
    //官方这样描述：The values function in this case is the identity function: it is invoked for each group of child elements, being passed the data bound to the parent element, and returns this array of data.
    .data(function(d) {
        //注意： 这里的d是一个数组
        //例如: [11975,  5871, 8916, 2868]
        return d;
    })
    .enter().append("td")
    .text(function(d) { return d; });
```

**selection.data(value, key)的返回结果**

data(value, key)函数的返回结果是update的节点，代表了成功绑定数据的Dom节点，其中还包括了exit和enter的reference

例如经常会那么用:

```
d3.selectAll('div').data(dataArr)
    .enter()
    .append('g');
```
有关update,exit和enter参考[http://bost.ocks.org/mike/join/]

**如果参数为空 `.data()` 返回的是第一组的数据**
> If values is not specified, then this method returns the array of data for the first group in the selection

**和datum的区别**
> Unlike the selection.data method, this method does not compute a join (and thus does not compute enter and exit selections).
[更多datum](https://github.com/mbostock/d3/wiki/Selections#datum)

####selection.call()

```
function foo(selection) {
  selection
      .attr("name1", "value1")
      .attr("name2", "value2");
}

foo(d3.selectAll('div'));
```
或者

```
d3.selectAll('div').call(foo);
```

如果是使用对象的方法:
```
function Foo(text) {
    this.text = text;
}

Foo.prototype.setText = function(selection) {
    selection.text(this.text);
}

var bar = new Foo("Bar");

d3.selectAll("span").call(bar.setText.bind(bar));
// Or
d3.selectAll("span").call(Foo.prototype.setText.bind(bar));
```

#### 更新selection

一般的更新方式：
```
var p = d3.select(".example").selectAll("p")
    .data([6, 7, 8, 9, 10])
    .enter()
    .append('p')
    .text(getText);

//更新selection
p = d3.select(".example").selectAll("p")
    .data([6, 7, 8])
    .text(getText);

p.exit().remove();
```

对二维数组进行更新
```
row = d3.select('.com-selectTest table')
    .selectAll('tr')
    .data([
        [2, 2, 2, 4],
        [1, 2, 4]
    ]);

var col = row.selectAll('td')
    .data(function(d) {return d;})
    .text(function (d) {
        return d;
    });
row.exit().remove();
col.exit().remove();

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


