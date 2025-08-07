document.addEventListener('DOMContentLoaded', function() {
    // For #givennumber input
    const givenNumberInput = document.getElementById('givennumber');
    if (givenNumberInput) {
        givenNumberInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                nashta() ;
                focusTbcBoxes() ;
                // Deselect the input after execution
                givenNumberInput.blur();
            }
        });
    }

    // For #uibox10 input
    const uibox10Input = document.getElementById('uibox10');
    if (uibox10Input) {
        uibox10Input.addEventListener('input', function() {
            if (uibox10Input.value !== "") {
                ppiv1() ; cb1() ; cb2() ; cb3() ; cb4() ; cb5() ; cb6() ; cb7() ; cb8() ; cb9() ; cb10() ; addall() ;pothn() ; ua1Box1() ; ua1Box2() ; ua1Box3() ; ua1Box4() ; ua1Box5() ; ua1Box6() ; ua1Box7() ; ua1Box8() ; ua1Box9() ; ua1Box10(); ua2Box1() ; ua2Box2() ; ua2Box3() ; ua2Box4() ; ua2Box5() ; ua2Box6() ; ua2Box7() ; ua2Box8() ; ua2Box9() ; ua2Box10(); ua3Box1() ; ua3Box2() ; ua3Box3() ; ua3Box4() ; ua3Box5() ; ua3Box6() ; ua3Box7() ; ua3Box8() ; ua3Box9() ; ua3Box10(); us1Box1() ; us1Box2() ; us1Box3() ; us1Box4() ; us1Box5() ; us1Box6() ; us1Box7() ; us1Box8() ; us1Box9() ; us1Box10(); us2Box1() ; us2Box2() ; us2Box3() ; us2Box4() ; us2Box5() ; us2Box6() ; us2Box7() ; us2Box8() ; us2Box9() ; us2Box10(); us3Box1() ; us3Box2() ; us3Box3() ; us3Box4() ; us3Box5() ; us3Box6() ; us3Box7() ; us3Box8() ; us3Box9() ; us3Box10() ; kva1b() ; kva2b() ; kva3b() ; kvs1b() ; kvs2b() ; kvs3b()  ; pvu() ;focusTbcBoxes();
                // Deselect the input after execution
                uibox10Input.blur();
            }
        });
    }

    // For uibox1 to uibox9: auto move to next, and deselect after input
    for (let i = 1; i <= 9; i++) {
        const currentBox = document.getElementById('uibox' + i);
        const nextBox = document.getElementById('uibox' + (i + 1));
        if (currentBox && nextBox) {
            currentBox.addEventListener('input', function() {
                if (currentBox.value.length === currentBox.maxLength) {
                    nextBox.focus();
                    // Deselect current box
                    currentBox.blur();
                }
            });
        }
    }

    // Keyboard shortcut: Ctrl+1 to clear all blocks and select givennumber
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === '1') {
            e.preventDefault(); // Prevent default browser behavior
            
            // Clear all input boxes
            const inputBoxes = [
                'givennumber', 'uibox1', 'uibox2', 'uibox3', 'uibox4', 'uibox5',
                'uibox6', 'uibox7', 'uibox8', 'uibox9', 'uibox10'
            ];
            
            inputBoxes.forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    element.classList.remove('text-flash-effect');
                    void element.offsetWidth; // reflow
                    element.classList.add('text-flash-effect');
                    setTimeout(() => { element.value = ''; }, 200); // clear after effect starts
                }
            });
            
            // Clear all button boxes including v-3, v-2, v-1, v1, v2, v3 and their corresponding boxes
            const buttonBoxes = [
                // v-3 boxes
                'v-3', '-3box1', '-3box2', '-3box3', '-3box4', '-3box5', '-3box6', '-3box7', '-3box8', '-3box9', '-3box10',
+                // v-2 boxes
+                'v-2', '-2box1', '-2box2', '-2box3', '-2box4', '-2box5', '-2box6', '-2box7', '-2box8', '-2box9', '-2box10',
+                // v-1 boxes
+                'v-1', '-1box1', '-1box2', '-1box3', '-1box4', '-1box5', '-1box6', '-1box7', '-1box8', '-1box9', '-1box10',
+                // v1 boxes
+                'v1', 'box1', 'box2', 'box3', 'box4', 'box5', 'box6', 'box7', 'box8', 'box9', 'box10',
+                // v+1 boxes
+                'v+1', '+1box1', '+1box2', '+1box3', '+1box4', '+1box5', '+1box6', '+1box7', '+1box8', '+1box9', '+1box10',
+                // v+2 boxes
+                'v+2', '+2box1', '+2box2', '+2box3', '+2box4', '+2box5', '+2box6', '+2box7', '+2box8', '+2box9', '+2box10',
+                // v+3 boxes
+                'v+3', '+3box1', '+3box2', '+3box3', '+3box4', '+3box5', '+3box6', '+3box7', '+3box8', '+3box9', '+3box10'
            ];
            
            buttonBoxes.forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    element.classList.remove('text-flash-effect');
                    void element.offsetWidth;
                    element.classList.add('text-flash-effect');
                    setTimeout(() => { element.value = ''; }, 200);
                }
            });
            const numBoxes = [
                'v-3' , 'v-2' , 'v-1' , 'v1' , 'v+1' , 'v+2' , 'v+3',
                
            ];
            
            numBoxes.forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    element.classList.remove('text-flash-effect');
                    void element.offsetWidth;
                    element.classList.add('text-flash-effect');
                    setTimeout(() => { element.value = ''; }, 200);
                }
            });
            // Focus and select the givennumber box
            const givenNumberInput = document.getElementById('givennumber');
            if (givenNumberInput) {
                givenNumberInput.focus();
                givenNumberInput.select();
            }
        }
    });
});
