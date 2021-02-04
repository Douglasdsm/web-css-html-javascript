function fireEvent(obj,evt){
    var fireOnThis = obj;
    if(document.createEvent){
        var evObj = document.createEvent('MouseEvents');
        evObj.initEvent(evt,true,false);
        fireOnThis.dispatchEvent(evObj);
    }else if(document.createEventObject){
            var evObj = document.createEventObject();
            fireOnThis.fireEvent('on'+ evt, evObj);
        }
    }
var listaBotoes = document.getElementsByClassName
('sqdOP  L3NKy   y3zKF     ');
for(var k in listaBotoes){
    fireEvent(listaBotoes[k],'click');
}
// for(var k in listaBotoes){
// setTimeout(function(){
//     fireEvent(listaBotoes[k],'click');
// },2000)
// }

var a;
function myFunction() {
     
    a = setInterval(alertFunc(), 4000);
   
}
function alertFunc() {
    window.location.reload(true);
    function fireEvent(obj,evt){
        var fireOnThis = obj;
        if(document.createEvent){
            var evObj = document.createEvent('MouseEvents');
            evObj.initEvent(evt,true,false);
            fireOnThis.dispatchEvent(evObj);
        }else if(document.createEventObject){
                var evObj = document.createEventObject();
                fireOnThis.fireEvent('on'+ evt, evObj);
            }
        }
    var listaBotoes = document.getElementsByClassName('sqdOP  L3NKy   y3zKF     ');
    
    for(var k in listaBotoes){
        fireEvent(listaBotoes[k],'click');
    }
    
    
    
    
}



/// curtir
function fireEvent(obj,evt){
    var fireOnThis = obj;
    if(document.createEvent){
        var evObj = document.createEvent('MouseEvents');
        evObj.initEvent(evt,true,false);
        fireOnThis.dispatchEvent(evObj);
    }else if(document.createEventObject){
            var evObj = document.createEventObject();
            fireOnThis.fireEvent('on'+ evt, evObj);
        }
    }
var listaBotoes = document.getElementsByClassName
('_8-yf5');
for(var k in listaBotoes){
    fireEvent(listaBotoes[k],'click');
}