Element.prototype.tooltipify = function() {
    var self = this;
    var dataset = self.dataset;
    var active = false;
    var showTooltip = function() {
        self.classList.add("tooltipper-hover");
        if (!active) {
            active = true;
            setTimeout(function () {
                if (self.classList.contains("tooltipper-hover")) {
                    var tooltip = document.createElement("span");
                    tooltip.classList.add("tooltip", "tooltip-show");
                    tooltip.innerHTML = dataset.text;
                    self.appendChild(tooltip);
                }
                else {
                    active = false;
                }
            }, dataset.delay || 1000);
        }
        
    };
    var hideTooltip = function() {
        self.classList.remove("tooltipper-hover");
        var tooltip = self.getElementsByClassName("tooltip")[0];
        if (tooltip) {
            tooltip.classList.remove("tooltip-show");
            tooltip.classList.add("tooltip-hide");
            tooltip.addEventListener("animationend", function() {
                active = false;
                tooltip.remove();
                if (self.classList.contains("tooltipper-hover")) {
                    showTooltip();
                }
            });
        }
    };
    document.addEventListener("click", function(event) {
        (event.target === self ? showTooltip : hideTooltip)();
    });
    self.addEventListener("mouseenter", showTooltip);
    self.addEventListener("mouseleave", hideTooltip);
};
