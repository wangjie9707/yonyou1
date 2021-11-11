$(function(){
    $('.label1').click(function() {
        var radioId = $(this).attr('name');
        $('.label1').removeClass('checked') && $(this).addClass('checked');
        $('input[name="edu"]').removeAttr('checked') && $('#' + radioId).attr('checked', 'checked');
    });
    $('.label2').click(function() {
        var radioId = $(this).attr('name');
        $('.label2').removeClass('checked') && $(this).addClass('checked');
        $('input[name="age"]').removeAttr('checked') && $('#' + radioId).attr('checked', 'checked');
    });
    $('.label3').click(function() {
        var radioId = $(this).attr('name');
        $('.label3').removeClass('checked') && $(this).addClass('checked');
        $('input[name="lesson"]').removeAttr('checked') && $('#' + radioId).attr('checked', 'checked');
    });
    var id0=0;
    var all=$('.course-con>div');
    timer=setInterval(function(){
        for(var i=0;i<all.length;i++){
            all.eq(i).removeClass('on');
            all.eq(i).find('.course-img').attr('src','images/course-icon'+(i+1)+'.png');
        }
        var id = parseInt(Math.random()*4);
        if(id==id0){
            id = parseInt(Math.random()*4);
        }
        else{
            id0=id;
        }
        all.eq(id).addClass('on');
        all.eq(id).find('.course-img').attr('src','images/course-icon'+(id+1)+'a.png');
    },3000);
    //
    var Stamp;
    Stamp = new Date();
    var num = 0;//
    if(Stamp.getDay()==0){
        num=0;
    }else{
        num = 7-Stamp.getDay();
    }
    Stamp.setDate(Stamp.getDate() + num);
    var year = Stamp.getFullYear(); //获取完整的年份(4位,1970-????)
    var month = Stamp.getMonth() +1; //获取当前月份(0-11,0代表1月)
    var mvar ='';
    //if(month<10){
       // mvar = '0' + month;
    //}else{
        mvar = month+'';
   // }
    var day = Stamp.getDate();
    var dvar ='';
    //if(day<10){
        //dvar = '0' + day;
   // }else{
        dvar = day+'';
    //}
    $('#month').text(mvar);
    $('#day').text(dvar);
});
document.oncopy = function(){
    return false;
};
document.onmousedown = function(e){
    if ( e.which == 2 ){
        return false;
    }
    if( e.which==3 ){
        return false;
    }
};
document.onkeydown = function(){
    if( event.ctrlKey ){
        return false;
    }
    if ( event.altKey ){
        return false;
    }
    if ( event.shiftKey ){
        return false;
    }
    if(event.keyCode == 123) {
        return false;
    } else if((event.ctrlKey) && (event.shiftKey) && (event.keyCode == 73)) {
        return false;
    } else if((event.shiftKey) && (event.keyCode == 121)){
        return false;
    }
};
document.onselectstart = function(){
    return false;
};
