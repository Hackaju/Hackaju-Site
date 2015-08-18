function wait(callback, time) {
    if (typeof setTimeout !== 'undefined') {
        var t = setTimeout(function () {
            clearTimeout(t);
            return callback();
        }, time);
    }
}

function anim(selector, style, unit, from, to, time) {
    var self = document.querySelector(selector);
    if (!self) return;
    var start = new Date().getTime(),
        timer = setInterval(function () {
            var step = Math.min(1, (new Date().getTime() - start) / time);
            self.style[style] = (from + step * (to - from)) + unit;
            if (step == 1) clearInterval(timer);
        }, 25);
    self.style[style] = from + unit;
}