document.addEventListener('DOMContentLoaded', function() {
    // For #givennumber input
    const givenNumberInput = document.getElementById('givennumber');
    if (givenNumberInput) {
        givenNumberInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                Box1() ;
                Box2() ;
                Box3() ;
                Box4() ;
                Box5() ;
                Box6() ;
                Box7() ;
                Box8() ;
                Box9() ;
                Box10() ;
                Box11() ;
                Box12() ;
                nvin() ;
                a1Box1() ;
                a1Box2() ;
                a1Box3() ;
                a1Box4() ;
                a1Box5() ;
                a1Box6() ;
                a1Box7() ;
                a1Box8() ;
                a1Box9() ;
                a1Box10() ;
                a1Box11();
                a1Box12();
                a2Box1() ;
                a2Box2() ;
                a2Box3() ;
                a2Box4() ;
                a2Box5() ;
                a2Box6() ;
                a2Box7() ;
                a2Box8() ;
                a2Box9() ;
                a2Box10() ;
                a2Box11();
                a2Box12();
                a3Box1() ;
                a3Box2() ;
                a3Box3() ;
                a3Box4() ;
                a3Box5() ;
                a3Box6() ;
                a3Box7() ;
                a3Box8() ;
                a3Box9() ;
                a3Box10() ;
                a3Box11();
                a3Box12();
                s1Box1() ;
                s1Box2() ;
                s1Box3() ;
                s1Box4() ;
                s1Box5() ;
                s1Box6() ;
                s1Box7() ;
                s1Box8() ;
                s1Box9() ;
                s1Box10() ;
                s1Box11();
                s1Box12();
                s2Box1() ;
                s2Box2() ;
                s2Box3() ;
                s2Box4() ;
                s2Box5() ;
                s2Box6() ;
                s2Box7() ;
                s2Box8() ;
                s2Box9() ;
                s2Box10() ;
                s2Box11() ;
                s2Box12() ;
                s3Box1() ;
                s3Box2() ;
                s3Box3() ;
                s3Box4() ;
                s3Box5() ;
                s3Box6() ;
                s3Box7() ;
                s3Box8() ;
                s3Box9() ;
                s3Box10() ;
                s3Box11();
                s3Box12();
                pvn() ;
                kva1b() ;
                kva2b() ;
                kva3b() ;
                kvs1b() ;
                kvs2b() ;
                kvs3b() ;
                error() ;
                kv() ;
                kv1() ;
                focusTbcBoxes() ;
                // Deselect the input after execution
                givenNumberInput.blur();
            }
        });
    }

    // For #uibox10 input
    const uibox10Input = document.getElementById('uibox12');
    if (uibox10Input) {
        uibox10Input.addEventListener('input', function() {
            if (uibox10Input.value !== "") {
                ppiv1() ; cb1() ; cb2() ; cb3() ; cb4() ; cb5() ; cb6() ; cb7() ; cb8() ; cb9() ; cb10() ; cb11() ; cb12() ; addall() ;pothn() ; ua1Box1() ; ua1Box2() ; ua1Box3() ; ua1Box4() ; ua1Box5() ; ua1Box6() ; ua1Box7() ; ua1Box8() ; ua1Box9() ; ua1Box10() ; ua1Box11() ; ua1Box12() ; ua2Box1() ; ua2Box2() ; ua2Box3() ; ua2Box4() ; ua2Box5() ; ua2Box6() ; ua2Box7() ; ua2Box8() ; ua2Box9() ; ua2Box10() ; ua2Box11() ; ua2Box12() ; ua3Box1() ; ua3Box2() ; ua3Box3() ; ua3Box4() ; ua3Box5() ; ua3Box6() ; ua3Box7() ; ua3Box8() ; ua3Box9() ; ua3Box10() ; ua3Box11() ; ua3Box12() ; us1Box1() ; us1Box2() ; us1Box3() ; us1Box4() ; us1Box5() ; us1Box6() ; us1Box7() ; us1Box8() ; us1Box9() ; us1Box10() ; us1Box11() ; us1Box12() ; us2Box1() ; us2Box2() ; us2Box3() ; us2Box4() ; us2Box5() ; us2Box6() ; us2Box7() ; us2Box8() ; us2Box9() ; us2Box10() ; us2Box11() ; us2Box12() ; us3Box1() ; us3Box2() ; us3Box3() ; us3Box4() ; us3Box5() ; us3Box6() ; us3Box7() ; us3Box8() ; us3Box9() ; us3Box10() ; us3Box11() ; us3Box12() ; kva1b() ; kva2b() ; kva3b() ; kvs1b() ; kvs2b() ; kvs3b()  ; pvu() ;focusTbcBoxes();
                // Deselect the input after execution
                uibox10Input.blur();
            }
        });
    }

    // For uibox1 to uibox9: auto move to next, and deselect after input
    for (let i = 1; i <= 11; i++) {
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
});