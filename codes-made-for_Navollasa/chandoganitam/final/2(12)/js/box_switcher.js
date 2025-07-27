document.addEventListener('DOMContentLoaded', function() {
    // Automatically focus next input for uibox1 to uibox9
    for (let i = 1; i <= 11; i++) {
        const currentBox = document.getElementById('uibox' + i);
        const nextBox = document.getElementById('uibox' + (i + 1));
        const prevBox = document.getElementById('uibox' + (i - 1));
        if (currentBox) {
            currentBox.addEventListener('input', function(e) {
                // Move to next box if filled
                if (currentBox.value.length === currentBox.maxLength && nextBox) {
                    nextBox.focus();
                    currentBox.blur();
                }
                // Move to previous box if cleared (only if not the first box)
                if (currentBox.value.length === 0 && prevBox) {
                    prevBox.focus();
                }
            });
            // Move to previous box on Backspace if box is empty
            currentBox.addEventListener('keydown', function(e) {
                if (
                    e.key === 'Backspace' &&
                    currentBox.value.length === 0 &&
                    prevBox
                ) {
                    prevBox.focus();
                }
            });
        }
    }
});