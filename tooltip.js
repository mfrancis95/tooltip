Element.prototype.tooltipify = function() {
    const text = this.dataset.text ?? this.ariaLabel;
    const showTooltip = () => {
        this.classList.add('tooltipper-hover');
        if (!this.querySelector('.tooltip')) {
            const tooltip = document.createElement('span');
            tooltip.classList.add('tooltip', 'tooltip-show');
            tooltip.role = 'tooltip';
            tooltip.textContent = text;
            this.appendChild(tooltip);
        }
    };
    const hideTooltip = () => {
        this.classList.remove('tooltipper-hover');
        const tooltip = this.querySelector('.tooltip');
        if (tooltip) {
            tooltip.classList.remove('tooltip-show');
            tooltip.classList.add('tooltip-hide');
            tooltip.addEventListener('animationend', () => {
                tooltip.remove();
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