KISSY.add("gallery/kcharts/1.1/scatterchart/index",function(f,j,u,r,q,d,t,v,c,i,n,h){var e=f.all,p=f.Event,o="ks-chart-",m=o+"default",a=o+"evtlayout",s=a+"-areas",g=a+"-rects",k="{COLOR}",l;var b=function(w){var x=this;x._cfg=w;x._cfg.zoomType="xy";x.init()};f.extend(b,r,{init:function(){var w=this;r.prototype.init.call(w,w._cfg);w.chartType="scatterchart";if(!w._$ctnNode[0]){return}var y={themeCls:m,autoRender:true,title:{content:"",css:{"text-align":"center","font-size":"16px"},isShow:true},colors:[],subTitle:{content:"",css:{"text-align":"center","font-size":"12px"},isShow:true},points:{attr:{stroke:"#fff",r:4,"stroke-width":1.5,fill:k,opacity:0.6},hoverAttr:{stroke:"#fff",r:5,fill:k,"stroke-width":0,opacity:1}},legend:{isShow:false},xLabels:{isShow:true,css:{color:"#666","font-size":"12px","white-space":"nowrap",position:"absolute"}},yLabels:{isShow:true,css:{color:"#666","font-size":"12px","white-space":"nowrap",position:"absolute"}},xAxis:{isShow:true,css:{zIndex:10}},yAxis:{isShow:true,css:{zIndex:10},num:5},xGrids:{isShow:true,css:{}},yGrids:{isShow:true,css:{}},tip:{isShow:true,clsName:"",template:"",css:{},offset:{x:0,y:0},boundryDetect:true}};w._finished=[];m=w._cfg.themeCls||y.themeCls;w._cfg=f.mix(f.mix(y,c[m],h,h,true),w._cfg,h,h,true);w.color=l=new d({themeCls:m});if(w._cfg.colors.length>0){l.removeAllColors()}for(var x in w._cfg.colors){l.setColor(w._cfg.colors[x])}w._cfg.autoRender&&w.render(true)},drawTitle:function(){var z=this,B=z.htmlPaper,x=m+"-title",y=z._cfg,w=z._innerContainer,A=w.y*0.6;if(y.title.isShow&&y.title.content!=""){z._title=B.rect(0,0,z._$ctnNode.width(),A).addClass(x).css(f.mix({"line-height":A+"px"},y.title.css)).html(y.title.content)}},drawSubTitle:function(){var z=this,B=z.htmlPaper,x=m+"-subtitle",y=z._cfg,w=z._innerContainer,A=w.y*0.4;if(y.subTitle.isShow&&y.subTitle.content!=""){z._subTitle=B.rect(0,w.y*0.6,z._$ctnNode.width(),A).addClass(x).css(f.mix({"line-height":A+"px"},y.subTitle.css)).html(y.subTitle.content)}},processAttr:function(x,w){var z=f.clone(x);for(var y in z){if(z[y]&&typeof z[y]=="string"){z[y]=z[y].replace(k,w)}}return z},diffStocksSize:function(){var E=this,w=E._cfg.points.attr["r"],C=E._datas.total,x=[],y,D;for(var B in C){x=x.concat(r.prototype.getArrayByKey.call(null,C[B]["data"],2))}if(!x.length){f.log("haha");for(var B in E._points){for(var z in E._points[B]){E._points[B][z]["r"]=w}}return}for(var B in E._points){var A=r.prototype.getArrayByKey.call(null,C[B]["data"],2);for(var z in E._points[B]){if(A.length>0){E._points[B][z]["r"]=A[z]*w}}}},drawAllStocks:function(){var w=this;w._stocks={_stocks:[]};for(var x in w._points){w._stocks[x]={stocks:w.drawStocks(x)}}},drawStocks:function(y){var x=this,B=[],A=x.color.getColor(y).DEFAULT;for(var z in x._points[y]){var w=x._points[y][z];B[z]=x.drawStock(w.x,w.y,w.r,{stroke:A,fill:A,r:w.r})}return B},drawStock:function(z,E,B,w){var A=this,D=A.paper,C=A._cfg.points.attr;return D.circle(z,E,B,w).attr(C).attr(w)},drawGridsX:function(){var x=this,A=x._centerPoints;for(var z=0,w=A.length;z<w;z++){var y=x.drawGridX(A[z]);x._gridsX.push(y)}return x._gridsX},drawGridX:function(w,A){var z=this,D=z._innerContainer.tl.y,B=z._innerContainer.height,A=A||z._cfg.xGrids.css,C=z.htmlPaper,x=z._cfg.themeCls+"-gridsx";return C.lineY(w.x,D,B).addClass(x).css(z._cfg.xGrids.css)},drawGridY:function(x,B){var A=this,z=A._innerContainer.width,B=B||A._cfg.yGrids.css,C=A.htmlPaper,y=A._cfg.themeCls+"-gridsy";return C.lineX(x.x,x.y,z).addClass(y).css(B)},drawGridsY:function(){var z=this,y=z._innerContainer.tl.x,B=z._pointsY;for(var A=0,w=B.length;A<w;A++){z._gridsY[A]={0:z.drawGridY({x:y,y:B[A].y}),num:z.coordNum[A]}}},drawAxisX:function(){var A=this,z=A._innerContainer,C=z.bl,y=z.width,B=A.htmlPaper,x=A._cfg.themeCls+"-axisx";A._axisX=B.lineX(C.x,C.y,y).addClass(x).css(A._cfg.xAxis.css||{});return A._axisX},drawAxisY:function(){var z=this,x=z._innerContainer,y=x.tl,A=x.height,B=z.htmlPaper,w=z._cfg.themeCls+"-axisy";z._axisY=B.lineY(y.x,y.y,A).addClass(w).css(z._cfg.yAxis.css||{});return z._axisY},drawLabelsX:function(){var w=this;for(var x in w._pointsX){w._labelX[x]=w.drawLabelX(x,w._pointsX[x]["number"])}},drawLabelsY:function(){var w=this;for(var x in w._pointsY){w._labelY[x]={0:w.drawLabelY(x,w._pointsY[x].number),num:w._pointsY[x].number}}return w._labelY},drawLabelX:function(z,D){var E=this,w=E.htmlPaper,x=E._pointsX,A=x.length||0,C,F=E._cfg.themeCls+"-xlabels",y="{{data}}",B="";if(z<A){y=E._cfg.xLabels.template||y;if(f.isFunction(y)){B=y(z,D)}else{B=u(y).render({data:D})}C=x[z];C[0]=w.text(C.x,C.y,"<span class="+F+">"+B+"</span>","center").children().css(E._cfg.xLabels.css);return C[0]}},drawLabelY:function(y,A){var x=this,z=x.htmlPaper,w=x._cfg.themeCls+"-ylabels";tpl="{{data}}",content="";tpl=x._cfg.yLabels.template||tpl;if(f.isFunction(tpl)){content=tpl(y,A)}else{content=u(tpl).render({data:A})}return content&&z.text(x._pointsY[y].x,x._pointsY[y].y,"<span class="+w+">"+content+"</span>","right","middle").children().css(x._cfg.yLabels.css)},renderTip:function(){var z=this,y=z._cfg,w=z._innerContainer,A=y.tip.boundryDetect?{x:w.tl.x,y:w.tl.y,width:w.width,height:w.height}:{},x=f.mix(y.tip,{rootNode:z._$ctnNode,clsName:y.themeCls,boundry:A});z.tip=new n(x);return z.tip},renderEvtLayout:function(){var J=this,F=J._cfg,G,B=J._innerContainer,E=B.tl.y,D=B.height,I=J._evtEls._rects=[],z;if(!J._evtEls.paper){z=J._evtEls.paper=new t(J._$ctnNode,{clsName:a,prependTo:false,width:B.width,height:D,left:B.tl.x,top:B.tl.y,css:{"z-index":20,background:"#fff",filter:"alpha(opacity =1)","-moz-opacity":0.01,"-khtml-opacity":0.01,opacity:0.01}})}else{z=J._evtEls.paper}for(var C in J._points){var I=[];for(var A in J._points[C]){var H=(J._points[C][A]["r"]||F.points.attr.r)*2;I[A]=z.rect(J._points[C][A].x-H/2,J._points[C][A].y-H/2,H,H).attr({line_index:C,index:A}).addClass(g)}J._evtEls._rects[C]=I}},clearEvtLayout:function(){var w=this;if(w._evtEls._rects){for(var y in w._evtEls._rects){for(var x in w._evtEls._rects[y]){w._evtEls._rects[y][x].remove()}}}},renderLegend:function(){var x=this,y=x._cfg.legend,w=(y.container&&e(y.container)[0])?e(y.container):x._$ctnNode;x.legend=new v({container:w,chart:x,evtBind:true,css:y.css||{}});return x.legend},showPoints:function(x){var w=this;r.prototype.recoveryData.call(w,x);w._clonePoints[x]=w._points[x];w.animateGridsAndLabels();w.animateSiblingsPoints(x);w.diffStocksSize();w._stocks[x]={stocks:w.drawStocks(x)};w.clearEvtLayout();w.renderEvtLayout();w.bindEvt();f.log(w)},hidePoints:function(x){var w=this;r.prototype.removeData.call(w,x);delete w._clonePoints[x];w.animateGridsAndLabels();for(var y in w._stocks[x]["stocks"]){w._stocks[x]["stocks"][y].remove()}w.animateSiblingsPoints(x);w.clearEvtLayout();w.renderEvtLayout();w.bindEvt()},animateSiblingsPoints:function(y){var w=this;for(var z in w._stocks){if(y!=z){for(var x in w._stocks[z]["stocks"]){w._points[z]&&w._stocks[z]["stocks"][x].animate({cx:w._points[z][x]["x"],cy:w._points[z][x]["y"]},400)}}}},animateGridsAndLabels:function(){var x=this,w=x._cfg.zoomType;if(w=="y"){for(var y in x._labelX){x._labelX[y]&&x._labelX[y][0]&&e(x._labelX[y][0]).remove();x._gridsX[y]&&x._gridsX[y][0]&&e(x._gridsX[y][0]).remove()}x.drawGridsX();x.drawLabelsX()}else{if(w=="x"){for(var y in x._labelY){x._labelY[y]&&x._labelY[y][0]&&x._labelY[y][0].remove();x._gridsY[y]&&x._gridsY[y][0]&&x._gridsY[y][0].remove()}x.drawGridsY();x.drawLabelsY()}else{if(w=="xy"){for(var y in x._labelY){x._labelY[y]&&x._labelY[y][0]&&x._labelY[y][0].remove();x._gridsY[y]&&x._gridsY[y][0]&&x._gridsY[y][0].remove()}x.drawGridsY();x.drawLabelsY();for(var y in x._labelX){x._labelX[y]&&x._labelX[y][0]&&e(x._labelX[y][0]).remove();x._gridsX[y]&&x._gridsX[y][0]&&e(x._gridsX[y][0]).remove()}x.drawGridsX();x.drawLabelsX()}}}},render:function(w){var y=this,x=y._cfg,z=x.themeCls;w&&y._$ctnNode.html("");y.paper=q(y._$ctnNode[0],x.width,x.height,{position:"absolute"});y.htmlPaper=new t(y._$ctnNode,{clsName:z});y._clonePoints=y._points;y.drawTitle();y.drawSubTitle();x.tip.isShow&&y.renderTip();x.xGrids.isShow&&y.drawGridsX();x.yGrids.isShow&&y.drawGridsY();x.xAxis.isShow&&y.drawAxisX();x.yAxis.isShow&&y.drawAxisY();x.xLabels.isShow&&y.drawLabelsX();x.yLabels.isShow&&y.drawLabelsY();y.diffStocksSize();y.drawAllStocks();x.legend.isShow&&y.renderLegend();y.renderEvtLayout();y.afterRender();y.bindEvt();f.log(y)},bindEvt:function(){var w=this,x=w._evtEls,y=f.clone(w._cfg.points.hoverAttr);p.detach(e("."+g,e("."+a,w._$ctnNode)),"mouseenter");p.on(e("."+g,e("."+a,w._$ctnNode)),"mouseenter",function(B){var z=e(B.currentTarget),A=z.attr("index"),C=z.attr("line_index");if(w._points[C][A].dataInfo){w.stockChange(C,A);w._cfg.tip.isShow&&w.tipHandler(C,A)}});p.detach(x.paper.$paper,"mouseleave");p.on(x.paper.$paper,"mouseleave",function(z){w.tip&&w.tip.hide();w.paperLeave()})},stockChange:function(A,x){var w=this,y=w._stocks[A],z={target:y.stocks[x],currentTarget:y.stocks[x],lineIndex:Math.round(A),stockIndex:Math.round(x)};w.fire("stockChange",z)},tipHandler:function(A,B){var F=this,y=F.color.getColor(A)["DEFAULT"],E=F.tip,D=F._cfg,C=D.tip.template,z=E.getInstance(),w,x;if(!C){return}w=F._points[A][B].dataInfo;if(f.isFunction(C)){E.setContent(C(w))}else{E.renderTemplate(C,w)}x=F._points[A][B];if(E.isVisable()){E.animateTo(x.x,x.y)}else{E.moveTo(x.x,x.y)}z.css(F.processAttr(D.tip.css,y))},paperLeave:function(){var w=this;w.fire("paperLeave",w)},afterRender:function(){var w=this;w.fire("afterRender",w)},getPaper:function(){return this.htmlPaper},clear:function(){this.paper.clear()}});return b},{requires:["base","gallery/template/1.0/index","../basechart/index","../raphael/index","../tools/color/index","../tools/htmlpaper/index","../legend/index","./theme","../tools/touch/index","../tip/index"]});KISSY.add("gallery/kcharts/1.1/scatterchart/theme",function(b){var c="{COLOR}";var a={"ks-chart-default":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:true},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:true},points:{attr:{stroke:"#fff",r:4,"stroke-width":1.5,fill:c},hoverAttr:{stroke:"#fff",r:5,fill:c,"stroke-width":0}},xGrids:{css:{color:"#eee"}},yGrids:{css:{color:"#eee"}},yAxis:{css:{color:"#ccc"}},xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px"}},pointLines:{css:{color:"#ccc"}},tip:{css:{border:"2px solid {COLOR}"}}},"ks-chart-analytiks":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:true},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:true},points:{attr:{stroke:"#fff",r:4,"stroke-width":1.5,fill:c},hoverAttr:{stroke:"#fff",r:5,fill:c,"stroke-width":0}},xGrids:{css:{color:"#eee"}},yGrids:{css:{color:"#eee"}},yAxis:{css:{color:"#ccc"}},xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px"}},pointLines:{css:{color:"#ccc"}},tip:{css:{background:"{COLOR}"}}},"ks-chart-rainbow":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:true},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:true},points:{attr:{stroke:"#fff",r:4,"stroke-width":1.5,fill:c},hoverAttr:{stroke:"#fff",r:5,fill:c,"stroke-width":0}},xGrids:{css:{color:"#eee"}},yGrids:{css:{color:"#eee"}},yAxis:{css:{color:"#ccc"}},xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px"}},pointLines:{css:{color:"#ccc"}},tip:{css:{background:"{COLOR}"}}}};return a});
