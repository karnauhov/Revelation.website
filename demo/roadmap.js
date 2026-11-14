(() => {
    const chart = document.querySelector('.roadmap-chart');
    const image = chart.querySelector('img');
    const list = chart.querySelector('.roadmap-nodes');
    const tooltip = chart.querySelector('.roadmap-tooltip');
    const documentUrl = chart.querySelector('.roadmap-art').href;
    const compact = window.matchMedia('(max-width: 700px)');
    const locale = document.documentElement.lang;
    const nodes = new Map();
    let current = null;
    let hovered = null;

    function hide() {
        if (current) current.removeAttribute('aria-describedby');
        current = null;
        tooltip.hidden = true;
    }

    function show(anchor) {
        hide();
        current = anchor;
        tooltip.textContent = anchor.dataset.hint;
        tooltip.hidden = false;
        anchor.setAttribute('aria-describedby', tooltip.id);
        const padding = 8;
        const center = anchor.offsetLeft;
        const max = Math.max(padding, chart.clientWidth - tooltip.offsetWidth - padding);
        tooltip.style.left = Math.min(max, Math.max(padding, center - tooltip.offsetWidth / 2)) + 'px';
        tooltip.style.top = Math.max(0, anchor.offsetTop - tooltip.offsetHeight - 16) + 'px';
    }

    function position() {
        hide();
        const view = compact.matches ? 'narrow' : 'wide';
        for (const [anchor, marker] of nodes) {
            const [x, y] = marker[view];
            anchor.style.left = x + '%';
            anchor.style.top = y + '%';
        }
    }

    function showCurrent() {
        const active = document.activeElement;
        if (hovered || nodes.has(active)) show(hovered || active);
        else hide();
    }

    chart.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            hovered = null;
            hide();
        }
    });
    compact.addEventListener('change', position);
    image.addEventListener('load', position);

    const data = globalThis.revelationRoadmapMilestones;
    if (data) {
        const items = document.createDocumentFragment();
        for (const [code, marker] of Object.entries(data)) {
            const detail = marker.text[locale];
            if (!detail) continue;
            const anchor = document.createElement('a');
            anchor.className = 'roadmap-node';
            anchor.href = documentUrl + '#' + code.toLowerCase();
            anchor.dataset.hint = code + ' · ' + detail;
            anchor.setAttribute('aria-label', anchor.dataset.hint);
            anchor.addEventListener('pointerenter', (event) => {
                if (event.pointerType !== 'touch') {
                    hovered = anchor;
                    showCurrent();
                }
            });
            anchor.addEventListener('pointerleave', () => {
                hovered = null;
                showCurrent();
            });
            anchor.addEventListener('focus', () => show(anchor));
            anchor.addEventListener('blur', () => {
                if (hovered) show(hovered);
                else hide();
            });
            nodes.set(anchor, marker);
            items.append(anchor);
        }
        position();
        list.append(items);
    }
})();
