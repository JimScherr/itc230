(function () {
    'use strict';
}());

var add = function (x, y, callback) {
    'use strict';
    var sum = x + y;
    console.log(sum);
    
    if (callback) {
        callback();
    }
};

var done = function () {
    'use strict';
    console.log('done');
};

add(2, 3, done);
add(4, 5);
