KISSY.add("gallery/kcharts/1.1/tools/touch/index",function(d){if(d.UA.ie){return}var f,c=false;function h(k,i){if(k.touches.length>1){return}var l=k.changedTouches,m=l[0],j=document.createEvent("MouseEvent");j.initMouseEvent(i,true,true,window,1,m.screenX,m.screenY,m.clientX,m.clientY,false,false,false,false,0,null);k.target.dispatchEvent(j)}function e(k){var j=this,i=a(k);if(f||i){return}f=true;h(k,"mouseover");h(k,"mousemove");h(k,"mousedown")}function b(i){if(!f){return}h(i,"mousemove");c=true}function g(i){if(!f){return}h(i,"mouseup");if(c){h(i,"mouseout")}c=false;f=false}function a(i){return(i.target.tagName).toUpperCase()=="INPUT"?true:false}document.addEventListener("touchstart",e,true);document.addEventListener("touchmove",b,true);document.addEventListener("touchend",g,true)});
