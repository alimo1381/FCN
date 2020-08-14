//first message

var no_mult = document.getElementById('gettingB-height');
// no_mult.addEventListener('click',alert('باید تعداد ستون اولی با تعداد ردیف دومی برابر باشد پس نمیتوان آن را تغییر داد!!!'))
no_mult.addEventListener('click',function(){
    alert('باید تعداد ستون اولی با تعداد ردیف دومی برابر باشد پس نمیتوان مقدارش را تغییر داد!!!');
});
var get_info_btn = document.getElementById('make');
get_info_btn.addEventListener('click',getting_info);

function getting_info() {
    var row_height = document.getElementById('getting-height').value;
    var column_width = document.getElementById('getting-width').value;
    var column_width_second = document.getElementById('gettingB-width').value;


    // var row_height = prompt('چند ردیف ؟  ==>  0 < ردیف < 10');
    row_height = Number(row_height);
    row_height = Math.floor(row_height);

    // var column_width = prompt('چند ستون ؟  ==>  0 < ستون < 10');
    column_width = Number(column_width);
    column_width = Math.floor(column_width);

    // var column_width_second = prompt('چند ستون دوم ؟  ==>  0 < ستون < 10');
    column_width_second = Number(column_width_second);
    column_width_second = Math.floor(column_width_second);
    //first message
    
    //start calcuting

    if (column_width>10 || column_width<=0 || column_width_second>10 || column_width_second<=0 || row_height>10 || row_height<=0) {
        alert('لطفا اعداد را بین 1 تا 10 انتخاب کنید !!!');
        function again() {
            window.location = "multiplication.html";
        }
        setTimeout(again,1000);
    }


    else {//(column_width<=10 && column_width>0 && column_width_second<=10 && column_width_second>0 && row_height<=10 && row_height>0) {
    // if (true){
        
        //top menu works

        // var mult = document.getElementById('first');
        // var sum = document.getElementById('second');

        // mult.addEventListener('click',multification);
        // sum.addEventListener('click',summing);
        
        // function multification() {
        //     window.location = "index.html";
        // }
        // function summing() {
        //     window.location = "index.html";
        // }

        //top menu works
        var get_btn_box = document.getElementById('button-box');
        get_btn_box.innerHTML = "<button id='btn'><svg width='100%' height='100%' viewBox='0 0 16 16' class='bi bi-calculator-fill' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M12 1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z'/><path d='M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z'/></svg></button>";
    
        //matris works
        
        var matrix_first = document.getElementById('matrix-box-first');
        var matrix_second = document.getElementById('matrix-box-second');
        var answer_matris = document.getElementById('answer_matris');

        var screen_width = window.innerWidth;    

        column_width = Number(column_width);
        column_width = Math.floor(column_width);

        column_width_second = Number(column_width_second);
        column_width_second = Math.floor(column_width_second);
        
        row_height = Number(row_height);
        row_height = Math.floor(row_height);
        
        var width = (column_width * (50/1000) * screen_width);
        var width_second = (column_width_second * (50/1000) * screen_width);
        var height = (row_height * (50/1000) * screen_width);
        width = Math.floor(width);
        width_second = Math.floor(width_second);
        height = Math.floor(height);
        width = width+"px";
        width_second = width_second+"px";
        height = height+"px";

        var w_h = ((4/100) * screen_width);
        w_h = Math.floor(w_h)+"px";

        // matrix_first.style.height = height;
        // matrix_first.style.width = width;

        // matrix_second.style.height = width;
        // matrix_second.style.width = width_second;

        matrix_first.innerHTML = "<table id='first_table'></table>";
        var first_table = document.getElementById('first_table');

        for (let index_h = 0; index_h < row_height; index_h++) {
            var tr = first_table.appendChild(document.createElement('tr'));
            for (let index_w = 0; index_w < column_width; index_w++) { 
                var td = tr.appendChild(document.createElement('td'));
                td.innerHTML = "<input class='inpt'>";
                var input = document.querySelectorAll('.inpt');
                input.forEach(function(e){
                    e.style.fontSize = "200%";
                    e.style.textAlign = "center";
                    e.style.width = w_h;
                    e.style.height = w_h;
                    e.setAttribute('title','a_'+Number(index_h+1)+"_"+Number(index_w+1));
                    e.setAttribute('class','get_');
                })           
            
            }     
        }

        matrix_second.innerHTML = "<table id='second_table'></table>";
        var second_table = document.getElementById('second_table');

        for (let index_second_h = 0; index_second_h < column_width; index_second_h++) {
            var second_tr = second_table.appendChild(document.createElement('tr'));
            for (let second_index_w = 0; second_index_w < column_width_second; second_index_w++) { 
                var second_td = second_tr.appendChild(document.createElement('td'));
                second_td.innerHTML = "<input class='inpt2'>";
                var second_input = document.querySelectorAll('.inpt2');
                second_input.forEach(function(e){
                    e.style.fontSize = "200%";
                    e.style.textAlign = "center";
                    e.style.width = w_h;
                    e.style.height = w_h;
                    e.setAttribute('title','b_'+Number(index_second_h+1)+"_"+Number(second_index_w+1));
                    e.setAttribute('class','second_get_');
                })
            }    
        }


        //button works

        var btn = document.getElementById('btn');

        btn.addEventListener('click',start);


        function start() {
            var sum = document.getElementById('sum');
            sum.innerHTML = "";
            function doc1_get(num) {
                return document.getElementsByClassName('get_')[num].value;
            }
            function doc2_get(num2) {
                return document.getElementsByClassName('second_get_')[num2].value;
            }
            function doc_ans(num3) {
                return document.getElementsByClassName('ans_')[num3];
            }

            // var c = 0;
            for (let n0 = 0; n0 < row_height; n0++) {
                for (let n1 = 0; n1 < column_width_second; n1++) {
                    for (let n2 = 0;n2 < column_width; n2++) {
                    // c += doc1_get(column_width*n1+n2)*doc2_get(column_width_second*n2+n1);
                        sum.innerHTML += ("_"+doc1_get(column_width*n0+n2)*doc2_get(column_width_second*n2+n1));
                        // alert(doc1_get(column_width*n0+n2)*doc2_get(column_width_second*n2+n1));            
                    }
                }
            }
            var c_ = sum.innerHTML.split("_");
            function slc(charactor_number) {
                return Number(c_[charactor_number].slice(0));
            }        
            
            answer_matris.style.marginLeft = (((Math.floor((window.innerWidth-((Number(column_width_second)*(4/100)*window.innerWidth)+(Number(column_width_second)*2)+((Number(column_width_second)+1)*3)+(4)))/2))/window.innerWidth)*100)+"%";
            answer_matris.innerHTML = "<table id='answer_table'></table>";
            var answer_table = document.getElementById('answer_table');
        
            for (let index_answer_h = 0; index_answer_h < row_height; index_answer_h++) {
                var answer_tr = answer_table.appendChild(document.createElement('tr'));
                for (let index_answer_w = 0; index_answer_w < column_width_second; index_answer_w++) { 
                    var answer_td = answer_tr.appendChild(document.createElement('td'));
                    answer_td.innerHTML = "<div class='ans'></div>";
                    var answer_box = document.querySelectorAll('.ans');
                    answer_box.forEach(function(e){
                        e.style.fontSize = "200%";
                        e.style.textAlign = "center";
                        e.style.width = w_h;
                        e.style.height = w_h;
                        e.style.border = "black solid 1px";
                        e.style.lineHeight = "150%";
                        e.style.overflow = "visible";
                        e.setAttribute('title','a_'+Number(index_answer_h+1)+"_"+Number(index_answer_w+1));
                        e.setAttribute('class','ans_');
                    })          
                }     
            }
            if (column_width == 1) {
                for (let i = 0; i <= (row_height)*(column_width_second); i++){
                    doc_ans(i).innerHTML = slc(Number(column_width*i)+1);     
                    sum.innerHTML = "";                                             
                }
            }
            if (column_width == 2) {
                for (let i = 0; i <= (row_height)*(column_width_second); i++){
                    doc_ans(i).innerHTML = slc(Number(column_width*i)+1)+slc(Number(column_width*i)+2);
                sum.innerHTML = "";
                }                      
            }
            if (column_width == 3) {
                for (let i = 0; i <= (row_height)*(column_width_second); i++){
                    doc_ans(i).innerHTML = slc(Number(column_width*i)+1)+slc(Number(column_width*i)+2)+slc(Number(column_width*i)+3);    
                    sum.innerHTML = "";
                }                      
            }
            if (column_width == 4) {
                for (let i = 0; i <= (row_height)*(column_width_second); i++){
                    doc_ans(i).innerHTML = slc(Number(column_width*i)+1)+slc(Number(column_width*i)+2)+slc(Number(column_width*i)+3)+slc(Number(column_width*i)+4);                      
                    sum.innerHTML = "";
                }
            }   
            if (column_width == 5) {
                for (let i = 0; i <= (row_height)*(column_width_second); i++){
                    doc_ans(i).innerHTML = slc(Number(column_width*i)+1)+slc(Number(column_width*i)+2)+slc(Number(column_width*i)+3)+slc(Number(column_width*i)+4)+slc(Number(column_width*i)+5);    
                    sum.innerHTML = "";
                }                      
            }
            if (column_width == 6) {
                for (let i = 0; i <= (row_height)*(column_width_second); i++){
                    doc_ans(i).innerHTML = slc(Number(column_width*i)+1)+slc(Number(column_width*i)+2)+slc(Number(column_width*i)+3)+slc(Number(column_width*i)+4)+slc(Number(column_width*i)+5)+slc(Number(column_width*i)+6);  
                    sum.innerHTML = "";
                }                        
            }
            if (column_width == 7) {
                for (let i = 0; i <= (row_height)*(column_width_second); i++){
                    doc_ans(i).innerHTML = slc(Number(column_width*i)+1)+slc(Number(column_width*i)+2)+slc(Number(column_width*i)+3)+slc(Number(column_width*i)+4)+slc(Number(column_width*i)+5)+slc(Number(column_width*i)+6)+slc(Number(column_width*i)+7); 
                    sum.innerHTML = "";
                }                         
            }
            if (column_width == 8) {
                for (let i = 0; i <= (row_height)*(column_width_second); i++){
                    doc_ans(i).innerHTML = slc(Number(column_width*i)+1)+slc(Number(column_width*i)+2)+slc(Number(column_width*i)+3)+slc(Number(column_width*i)+4)+slc(Number(column_width*i)+5)+slc(Number(column_width*i)+6)+slc(Number(column_width*i)+7)+slc(Number(column_width*i)+8);     
                    sum.innerHTML = "";
                }                     
            }
            if (column_width == 9) {
                for (let i = 0; i <= (row_height)*(column_width_second); i++){
                    doc_ans(i).innerHTML = slc(Number(column_width*i)+1)+slc(Number(column_width*i)+2)+slc(Number(column_width*i)+3)+slc(Number(column_width*i)+4)+slc(Number(column_width*i)+5)+slc(Number(column_width*i)+6)+slc(Number(column_width*i)+7)+slc(Number(column_width*i)+8)+slc(Number(column_width*i)+9);  
                    sum.innerHTML = "";
                }                        
            }
            if (column_width == 10) {
                for (let i = 0; i <= (row_height)*(column_width_second); i++){
                    doc_ans(i).innerHTML = slc(Number(column_width*i)+1)+slc(Number(column_width*i)+2)+slc(Number(column_width*i)+3)+slc(Number(column_width*i)+4)+slc(Number(column_width*i)+5)+slc(Number(column_width*i)+6)+slc(Number(column_width*i)+7)+slc(Number(column_width*i)+8)+slc(Number(column_width*i)+9)+slc(Number(column_width*i)+10);    
                    sum.innerHTML = "";
                }                      
            }

        }

        //button works
    }    
}







