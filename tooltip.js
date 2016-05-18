Element.prototype.tooltipify = function() {
    var self = this;
    var dataset = self.dataset;
    self.addEventListener("mouseenter", function() {
        self.classList.add("tooltipper-hover");
        setTimeout(function() {
            if (self.classList.contains("tooltipper-hover")) {
                var tooltip = document.createElement("span");
                tooltip.classList.add("tooltip", "tooltip-show");
                tooltip.innerHTML = dataset.text;
                self.appendChild(tooltip);
            }
        }, dataset.delay || 1000);
    });
    self.addEventListener("mouseleave", function() {
        self.classList.remove("tooltipper-hover");
        var tooltips = self.getElementsByClassName("tooltip");
        for (var i = 0; i < tooltips.length; i++) {
            var tooltip = tooltips[i];
            tooltip.classList.remove("tooltip-show");
            tooltip.classList.add("tooltip-hide");
            tooltip.addEventListener("animationend", tooltip.remove);
        }
    });
};