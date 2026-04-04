Element.prototype.tooltipify = () => {
    const { delay = 1000, text } = this.dataset;
    let active = false;
    const createTooltip = () => {
        if (this.classList.contains('tooltipper-hover')) {
            const tooltip = document.createElement('span');
            tooltip.classList.add('tooltip', 'tooltip-show');
            tooltip.textContent = text;
            this.appendChild(tooltip);
        }
        else {
            active = false;
        }
    };
    const showTooltip = () => {
        this.classList.add('tooltipper-hover');
        if (!active) {
            active = true;
            setTimeout(createTooltip, delay);
        }
        
    };
    const hideTooltip = () => {
        this.classList.remove('tooltipper-hover');
        const tooltips = this.getElementsByClassName('tooltip');
        const tooltip = tooltips[0];
        if (tooltip) {
            for (let i = 1; i < tooltips.length; i++) {
                tooltips[i].remove();
            }
            tooltip.classList.remove('tooltip-show');
            tooltip.classList.add('tooltip-hide');
            tooltip.addEventListener('animationend', () => {
                active = false;
                tooltip.remove();
                if (this.classList.contains('tooltipper-hover')) {
                    showTooltip();
                }
            });
        }
    };
    document.addEventListener('click', event => {
        (event.target === this ? showTooltip : hideTooltip)();
    });
    this.addEventListener('mouseenter', showTooltip);
    this.addEventListener('mouseleave', hideTooltip);
};

for (const element of document.getElementsByClassName('tooltipper')) {
    element.tooltipify();
}