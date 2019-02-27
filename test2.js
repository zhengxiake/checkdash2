$(function(){
    $('#db').click(function(){
            if($('#table').hasClass('hide')){
                $('#table').addClass('show').removeClass('hide');
                $('#fj').addClass('show').removeClass('hide');
            }else{
                $('#table').addClass('hide').removeClass('show'); 
                $('#fj').addClass('hide').removeClass('show'); 
            }
            $.ajax({
                type:'post',
                url:'../data1.php',
                dataType:'json',
                success:function(data){
                    var Str2="<tr><th></th><th>平台商户编号</th><th>平台商户名称</th><th>收款项目</th><th>收款金额（元）</th><th>备注</th></tr>"
                    for(var k in data){
                    Str2+="<tr >";
                    Str2+=" <td>"+data[k].code+"</td>";
                    Str2+=" <td>"+data[k].name+"</td>";
                    Str2+=" <td>"+data[k].type+"</td>";
                    Str2+=" <td>"+data[k].cash+"</td>";
                    Str2+=" <td> "+" </td></tr>";
                     }
                    $('#table').html(Str2);
                },
                error:function(data){
                    console.dir(data);
                $('#info').html('服务器发生错误，请与管理员联系')
            }
            })
    })
    $('#payprev').click(function(){
        $('#payprev').css("display","none");
        $('#payover').css("display","block");
    })
    jump = function(web){
        window.location.href = web;
    }
  
    })
