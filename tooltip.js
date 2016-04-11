var elements = document.getElementsByClassName("tooltipper");
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var dataset = element.dataset;
    element.addEventListener("mouseenter", function() {
        element.classList.add("tooltipper-hover");
        setTimeout(function() {
            if (element.classList.contains("tooltipper-hover")) {
                var tooltip = document.createElement("span");
                tooltip.classList.add("tooltip", "tooltip-show");
                tooltip.innerHTML = dataset.text;
                element.appendChild(tooltip);
            }
        }, dataset.delay || 1000);

    });
    element.addEventListener("mouseleave", function() {
        element.classList.remove("tooltipper-hover");
        var tooltips = element.getElementsByClassName("tooltip");
        for (var i = 0; i < tooltips.length; i++) {
            var tooltip = tooltips[i];
            tooltip.classList.remove("tooltip-show");
            tooltip.classList.add("tooltip-hide");
            tooltip.addEventListener("animationend", tooltip.remove);
        }
    });
}