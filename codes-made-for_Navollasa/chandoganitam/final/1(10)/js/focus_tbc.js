function focusTbcBoxes() {
    // Remove previous focus effect if any
    document.querySelectorAll('.tbc-main, .tbc-box').forEach(el => {
        el.classList.remove('tbc-focused');
    });

    // Add focus effect to all at once, with a slight delay for smoothness
    setTimeout(() => {
        document.querySelectorAll('.tbc-main, .tbc-box').forEach(el => {
            el.classList.add('tbc-focused');
        });

        // Remove the focus effect smoothly after 1.8 seconds
        setTimeout(() => {
            document.querySelectorAll('.tbc-main, .tbc-box').forEach(el => {
                el.classList.remove('tbc-focused');
            });
        }, 1400); // 800 ms for visible focus effect
    },0); // 100 ms delay for smooth transition
}