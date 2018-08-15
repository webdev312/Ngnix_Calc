$(document).ready ( function(){
    $("#input_num").val(0);
});

function onAdd(){
    var input_num = $("#input_num").val();
    $("#output_num").val(input_num*1+1);
}

function onClear(){
    $("#input_num").val(0);
    $("#output_num").val("");
}