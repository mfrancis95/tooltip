Element.prototype.tooltipify = function() {
    const { delay = 1000 } = this.dataset;
    const text = this.dataset.text ?? this.ariaLabel;
    let active = false;
    const createTooltip = () => {
        if (this.querySelector('.tooltip')) {
            active = false;
        }
        else {
            const tooltip = document.createElement('span');
            tooltip.classList.add('tooltip', 'tooltip-show');
            tooltip.role = 'tooltip';
            tooltip.textContent = text;
            this.appendChild(tooltip);
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
        const tooltips = this.querySelectorAll('.tooltip');
        const tooltip = tooltips[0];
        if (tooltip) {
            for (let i = 1; i < tooltips.length; i++) {
                tooltips[i].remove();
            }
            tooltip.classList.remove('tooltip-show');
            tooltip.classList.add('tooltip-hide');
            tooltip.addEventListener('animationend', () => {
                tooltip.remove();
                active = false;
                if (this.classList.contains('tooltipper-hover')) {
                    showTooltip();
                }
            });
        }
    };
    document.addEventListener('touchstart', event => {
        (event.target === this ? showTooltip : hideTooltip)();
    });
    this.addEventListener('mouseenter', showTooltip, { passive: true });
    this.addEventListener('mouseleave', hideTooltip, { passive: true });
};

for (const element of document.getElementsByClassName('tooltipper')) {
    element.tooltipify();
}