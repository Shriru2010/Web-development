        function nashta(){
            var a = (document.getElementById("givennumber").value);
            var d = document.getElementById("v1").value=a;
            for(var i=1; i<=10; i++){
                var b = document.getElementById("rab"+i).value;
                b = a%2;
                if(b==0){
                    var c = document.getElementById("box"+i);
                    c.value = "I";
                    a= (a/2);
                }
                else {
                    var c = document.getElementById("box"+i);
                    c.value = "S";
                    a = (parseInt(a)+parseInt(1))/2;
                }
        }
    } 