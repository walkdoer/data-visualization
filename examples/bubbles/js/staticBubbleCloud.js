(function (window, d3) {

    'use strict';

    //define const variable here
    var MAX_RADIUS = 65,
        MIN_RADIUS = 10,
        MIN_COLLISION_RADIUS = 12,
        COLLISION_PADDING = 4;

    /**
     * BubbleCloud
     *
     * @param width   the height of the cloud
     * @param height  the width of the cloud
     * @return
     */
    var BubbleCloud = function (width, height) {
        this.width = width;
        this.height = height;
        this.force = d3.layout.force()
                       .gravity(0)
                       .charge(0)
                       .size([width, height])
                       .on('tick', tick);
    };

    BubbleCloud.prototype.tick = function () {
        
    }

    BubbleCloud.prototype.data = function () {
    };

    BubbleCloud.prototype.plot = function () {

        d3.select(selector)
            .append('svg')
            .append('g').attr("id", "bubble-nodes");
    };



    //read the data from json file and render the data
    var fileName = 'data2.json';
    d3.json("./js/" + fileName, function(error, root) {
        var data = preprocessData(root.data);
        var bubbleCloud = new BubbleCloud(980, 500);
        bubbleCloud.data(data).plot('#vis-static');
    });

    //preprocess the data,
    //make sure that the data is consumable by the BubbleCloud
    function preprocessData(data) {
        data.forEach(function (item) {
            item.name = item.word;
        });
        return data;
    }

    function getTranslate(x, y) {
        return 'translate(' + x + ',' + y + ')';
    }

})(window, window.d3);
