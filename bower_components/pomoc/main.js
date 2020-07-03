$(function () {

    //pętla tworząca kostkę z checkboxów j-warstwy, i-ledy na warstwie
    for(var j = 0; j < 4; j += 1) { 
        for(var i = 0; i < 16; i += 1) {
            var input= document.createElement("input");
            input.id = j + "_" + i;
            input.name = j + "_" + i;
            input.type="checkbox";
            input.style.width="20px";            
            input.style.height="20px";
            input.style.marginLeft="10px";

                        
            var label = document.createElement('label')
            label.htmlFor = j + "_" + i;
            label.appendChild(document.createTextNode(i+1));

            if(i% 4 === 0) {
                var br = document.createElement("br");
                document.body.appendChild(br);
            }
            document.body.appendChild(input);
            document.body.appendChild(label);
        }
        var br = document.createElement("br");
        document.body.appendChild(br);
    }

    var slider = document.getElementById("slider"); 
    var output = document.getElementById("slider_val"); 
    output.innerHTML = slider.value; 
      
    slider.oninput = function() { 
      output.innerHTML = this.value; 
    }

    var tab_time = '';
    var click=0;
    var text_animations="";

    $('#clear').on('click', function () {
        var text_monitor = $('#text_area');

        text_monitor.val(text_monitor.val().value = "");
        click=0;
        tab_number = '';
        tab_time = '';
        text_animations="";
    });

    $('#add_button').on('click', function () {
        var text_monitor = $('#text_area');
        var checked = 5;
        var arr=[];

        click = click+1;

        for(var j = 0; j < 4; j += 1) {
            for(var i = 0; i < 16; i += 1) {
                if($('#' + j + "_" + i).prop("checked")) {
                    checked=1;
                } else {
                    checked =0;
                }

                if(i===0) {
                    arr.push(checked);
                }else{
                    arr.push(' ' + checked);
                }      
            }

            var arr_string = arr.toString();
           
            if(j===0) {
                var arr_string_monitor = ""; //nie może być puste dalej
            }

            if(j===3) {
                arr_string_monitor = arr_string_monitor + arr_string;
            } else {
                arr_string_monitor = arr_string_monitor + arr_string + ',';
            }
          arr_string_monitor+= '\r\n'

            arr=[];

        }



        text_animations=', [';
        var text_animations1='function getData() { var data = {"animation" : [[';

        

        var slider_value = 0;
  
        slider_value = slider.value;
        slider_value = parseInt(slider_value, 10);

   
        if (click === 1) {
            tab_time += (slider_value);
            arr_string_monitorb = '], "time": [' + tab_time + ']}; return data;}';
            arr_string_monitor = text_animations1 + arr_string_monitor + ']';
        } else {
            tab_time += ', ' + slider_value;
            arr_string_monitorb = '], "time": [' + tab_time + ']}; return data;}';
            arr_string_monitor = text_animations + arr_string_monitor + ']';
        }
    
        text_monitor.val((text_monitor.val().replace(/\n.*$/, '')));
        text_monitor.val(text_monitor.val() + arr_string_monitor + '\r\n'+ arr_string_monitorb); 

        $('input[type="checkbox"]').prop("checked", false).change();  
    });


});

function buildData(){
    var txtData =$("#text_area").val();
    return txtData;
}

$(function(){
    $("#submitLink").click(function(event){
        var txtData = buildData();
        $(this).attr('download','animate.js')
            .attr('href',"data:application/octet-stream;base64,"+Base64.encode(txtData));
    });
});
