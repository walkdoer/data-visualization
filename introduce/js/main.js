var d3 = window.d3;

    
function getNum(d) { 
    return "I’m number " + d + "!"; 
}    
function updatedNum(d) { 
    return "I’m number " + d + " updated!"; 
}    
d3.select("body").selectAll("p")
    .data([1, 2, 3, 4, 5])
    .text(getNum)
    .enter().append('p').text(getNum);
    
var str = 'd3js';

// Update…
var p = d3.select("body").selectAll("p")
    //更新前3個p的數據
    .data([6, 7, 8])
    //改變前3個p的文字
    .text(updatedNum);

//Exit 移除 後面兩個P
p.exit().remove();


// Update…
var p = d3.select("body").selectAll("p")
    //更新前3個p的數據
    .data([10, 11, 12, 13, 14])
    //改變前3個p的文字
    .text(updatedNum);

p.enter().append('p').text('I am new');

// fade the background of the page to black:
//d3.select("body").transition()
//    .style("background-color", "black");
var scale = 1.4;    
d3.selectAll("circle").data([20, 30 ,40]).transition()
    .duration(750)
    .delay(function(d, i) {
        return i * 10; 
    })
    .attr("r", function(d) { 
        return Math.sqrt(d * scale); 
    });