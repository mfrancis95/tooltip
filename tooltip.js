HTMLElement.prototype.tooltipify = function() {
    const { classList } = this;
    const tooltip = document.createElement('span');
    tooltip.classList.add('tooltip');
    tooltip.innerHTML = this.dataset.text;
    const showTooltip = () => {
        classList.add('tooltipper-show');
    };
    const hideTooltip = () => {
        classList.remove('tooltipper-show');
    };
    document.addEventListener('click', event => {
        (event.target === this || event.target === tooltip ? showTooltip : hideTooltip)();
    });
    this.addEventListener('mouseenter', showTooltip);
    this.addEventListener('mouseleave', hideTooltip);
    this.appendChild(tooltip);
};

for (const element of document.getElementsByClassName("tooltipper")) {
    element.tooltipify();
}
