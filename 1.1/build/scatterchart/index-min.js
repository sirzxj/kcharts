KISSY.add("gallery/kcharts/1.1/scatterchart/index",function(g,p,r,k,t,u,s,v,w,y,x,m){var h=g.all,n=g.Event,l="ks-chart-default",q;p=function(b){this._cfg=b;this._cfg.zoomType="xy";this.init()};g.extend(p,k,{init:function(){k.prototype.init.call(this,this._cfg);this.chartType="scatterchart";if(this._$ctnNode[0]){var b={themeCls:l,autoRender:!0,title:{content:"",css:{"text-align":"center","font-size":"16px"},isShow:!0},colors:[],subTitle:{content:"",css:{"text-align":"center","font-size":"12px"},isShow:!0},
points:{attr:{stroke:"#fff",r:4,"stroke-width":1.5,fill:"{COLOR}",opacity:0.6},hoverAttr:{stroke:"#fff",r:5,fill:"{COLOR}","stroke-width":0,opacity:1}},legend:{isShow:!1},xLabels:{isShow:!0,css:{color:"#666","font-size":"12px","white-space":"nowrap",position:"absolute"}},yLabels:{isShow:!0,css:{color:"#666","font-size":"12px","white-space":"nowrap",position:"absolute"}},xAxis:{isShow:!0,css:{zIndex:10}},yAxis:{isShow:!0,css:{zIndex:10},num:5},xGrids:{isShow:!0,css:{}},yGrids:{isShow:!0,css:{}},tip:{isShow:!0,
clsName:"",template:"",css:{},offset:{x:0,y:0},boundryDetect:!0}};this._finished=[];l=this._cfg.themeCls||b.themeCls;this._cfg=g.mix(g.mix(b,w[l],m,m,!0),this._cfg,m,m,!0);this.color=q=new u({themeCls:l});0<this._cfg.colors.length&&q.removeAllColors();for(var a in this._cfg.colors)q.setColor(this._cfg.colors[a]);this._cfg.autoRender&&this.render(!0)}},drawTitle:function(){var b=this.htmlPaper,a=l+"-title",c=this._cfg,d=0.6*this._innerContainer.y;c.title.isShow&&""!=c.title.content&&(this._title=b.rect(0,
0,this._$ctnNode.width(),d).addClass(a).css(g.mix({"line-height":d+"px"},c.title.css)).html(c.title.content))},drawSubTitle:function(){var b=this.htmlPaper,a=l+"-subtitle",c=this._cfg,d=this._innerContainer,e=0.4*d.y;c.subTitle.isShow&&""!=c.subTitle.content&&(this._subTitle=b.rect(0,0.6*d.y,this._$ctnNode.width(),e).addClass(a).css(g.mix({"line-height":e+"px"},c.subTitle.css)).html(c.subTitle.content))},processAttr:function(b,a){var c=g.clone(b),d;for(d in c)c[d]&&"string"==typeof c[d]&&(c[d]=c[d].replace("{COLOR}",
a));return c},diffStocksSize:function(){var b=this._cfg.points.attr.r,a=this._datas.total,c=[],d;for(d in a)c=c.concat(k.prototype.getArrayByKey.call(null,a[d].data,2));if(c.length)for(d in this._points)for(e in c=k.prototype.getArrayByKey.call(null,a[d].data,2),g.log(c),this._points[d])0<c.length&&(this._points[d][e].r=c[e]*b);else for(d in g.log("haha"),this._points)for(var e in this._points[d])this._points[d][e].r=b},drawAllStocks:function(){this._stocks={_stocks:[]};for(var b in this._points)this._stocks[b]=
{stocks:this.drawStocks(b)}},drawStocks:function(b){var a=[],c=this.color.getColor(b).DEFAULT,d;for(d in this._points[b]){var e=this._points[b][d];a[d]=this.drawStock(e.x,e.y,e.r,{stroke:c,fill:c,r:e.r})}return a},drawStock:function(b,a,c,d){var e=this._cfg.points.attr;return this.paper.circle(b,a,c,d).attr(e).attr(d)},drawGridsX:function(){for(var b=this._centerPoints,a=0,c=b.length;a<c;a++){var d=this.drawGridX(b[a]);this._gridsX.push(d)}return this._gridsX},drawGridX:function(b,a){var c=this._cfg.themeCls+
"-gridsx";return this.htmlPaper.lineY(b.x,this._innerContainer.tl.y,this._innerContainer.height).addClass(c).css(this._cfg.xGrids.css)},drawGridY:function(b,a){var c=this._innerContainer.width;a=a||this._cfg.yGrids.css;var d=this._cfg.themeCls+"-gridsy";return this.htmlPaper.lineX(b.x,b.y,c).addClass(d).css(a)},drawGridsY:function(){for(var b=this._innerContainer.tl.x,a=this._pointsY,c=0,d=a.length;c<d;c++)this._gridsY[c]={0:this.drawGridY({x:b,y:a[c].y}),num:this.coordNum[c]}},drawAxisX:function(){var b=
this._innerContainer,a=b.bl,c=this._cfg.themeCls+"-axisx";return this._axisX=this.htmlPaper.lineX(a.x,a.y,b.width).addClass(c).css(this._cfg.xAxis.css||{})},drawAxisY:function(){var b=this._innerContainer,a=b.tl,c=this._cfg.themeCls+"-axisy";return this._axisY=this.htmlPaper.lineY(a.x,a.y,b.height).addClass(c).css(this._cfg.yAxis.css||{})},drawLabelsX:function(){for(var b in this._pointsX)this._labelX[b]=this.drawLabelX(b,this._pointsX[b].number)},drawLabelsY:function(){for(var b in this._pointsY)this._labelY[b]=
{0:this.drawLabelY(b,this._pointsY[b].number),num:this._pointsY[b].number};return this._labelY},drawLabelX:function(b,a){var c=this.htmlPaper,d=this._pointsX,e=this._cfg.themeCls+"-xlabels",f;f="";if(b<(d.length||0))return f=this._cfg.xLabels.template||"{{data}}",f=g.isFunction(f)?f(b,a):r(f).render({data:a}),d=d[b],d[0]=c.text(d.x,d.y,"<span class="+e+">"+f+"</span>","center").children().css(this._cfg.xLabels.css),d[0]},drawLabelY:function(b,a){var c=this.htmlPaper,d=this._cfg.themeCls+"-ylabels";
tpl="{{data}}";content="";tpl=this._cfg.yLabels.template||tpl;return(content=g.isFunction(tpl)?tpl(b,a):r(tpl).render({data:a}))&&c.text(this._pointsY[b].x,this._pointsY[b].y,"<span class="+d+">"+content+"</span>","right","middle").children().css(this._cfg.yLabels.css)},renderTip:function(){var b=this._cfg,a=this._innerContainer,b=g.mix(b.tip,{rootNode:this._$ctnNode,clsName:b.themeCls,boundry:b.tip.boundryDetect?{x:a.tl.x,y:a.tl.y,width:a.width,height:a.height}:{}});return this.tip=new x(b)},renderEvtLayout:function(){var b=
this._cfg,a=this._innerContainer,c=a.height,d=this._evtEls._rects=[],a=this._evtEls.paper?this._evtEls.paper:this._evtEls.paper=new s(this._$ctnNode,{clsName:"ks-chart-evtlayout",prependTo:!1,width:a.width,height:c,left:a.tl.x,top:a.tl.y,css:{"z-index":20,background:"#fff",filter:"alpha(opacity =1)","-moz-opacity":0.01,"-khtml-opacity":0.01,opacity:0.01}}),e;for(e in this._points){var d=[],f;for(f in this._points[e])c=2*(this._points[e][f].r||b.points.attr.r),d[f]=a.rect(this._points[e][f].x-c/2,
this._points[e][f].y-c/2,c,c).attr({line_index:e,index:f}).addClass("ks-chart-evtlayout-rects");this._evtEls._rects[e]=d}},clearEvtLayout:function(){if(this._evtEls._rects)for(var b in this._evtEls._rects)for(var a in this._evtEls._rects[b])this._evtEls._rects[b][a].remove()},renderLegend:function(){var b=this._cfg.legend,a=b.container&&h(b.container)[0]?h(b.container):this._$ctnNode;return this.legend=new v(g.mix(b,{container:a,chart:this,evtBind:!0,css:b.css||{}}))},showPoints:function(b){k.prototype.recoveryData.call(this,
b);this._clonePoints[b]=this._points[b];this.animateGridsAndLabels();this.animateSiblingsPoints(b);this.diffStocksSize();this._stocks[b]={stocks:this.drawStocks(b)};this.clearEvtLayout();this.renderEvtLayout();this.bindEvt();g.log(this)},hidePoints:function(b){k.prototype.removeData.call(this,b);delete this._clonePoints[b];this.animateGridsAndLabels();for(var a in this._stocks[b].stocks)this._stocks[b].stocks[a].remove();this.animateSiblingsPoints(b);this.clearEvtLayout();this.renderEvtLayout();this.bindEvt()},
animateSiblingsPoints:function(b){for(var a in this._stocks)if(b!=a)for(var c in this._stocks[a].stocks)this._points[a]&&this._stocks[a].stocks[c].animate({cx:this._points[a][c].x,cy:this._points[a][c].y},400)},animateGridsAndLabels:function(){var b=this._cfg.zoomType;if("y"==b){for(var a in this._labelX)this._labelX[a]&&this._labelX[a][0]&&h(this._labelX[a][0]).remove(),this._gridsX[a]&&this._gridsX[a][0]&&h(this._gridsX[a][0]).remove();this.drawGridsX();this.drawLabelsX()}else if("x"==b){for(a in this._labelY)this._labelY[a]&&
this._labelY[a][0]&&this._labelY[a][0].remove(),this._gridsY[a]&&this._gridsY[a][0]&&this._gridsY[a][0].remove();this.drawGridsY();this.drawLabelsY()}else if("xy"==b){for(a in this._labelY)this._labelY[a]&&this._labelY[a][0]&&this._labelY[a][0].remove(),this._gridsY[a]&&this._gridsY[a][0]&&this._gridsY[a][0].remove();this.drawGridsY();this.drawLabelsY();for(a in this._labelX)this._labelX[a]&&this._labelX[a][0]&&h(this._labelX[a][0]).remove(),this._gridsX[a]&&this._gridsX[a][0]&&h(this._gridsX[a][0]).remove();
this.drawGridsX();this.drawLabelsX()}},render:function(b){var a=this._cfg,c=a.themeCls;b&&this._$ctnNode.html("");this.paper=t(this._$ctnNode[0],a.width,a.height,{position:"absolute"});this.htmlPaper=new s(this._$ctnNode,{clsName:c});this._clonePoints=this._points;this.drawTitle();this.drawSubTitle();a.tip.isShow&&this.renderTip();a.xGrids.isShow&&this.drawGridsX();a.yGrids.isShow&&this.drawGridsY();a.xAxis.isShow&&this.drawAxisX();a.yAxis.isShow&&this.drawAxisY();a.xLabels.isShow&&this.drawLabelsX();
a.yLabels.isShow&&this.drawLabelsY();this.diffStocksSize();this.drawAllStocks();a.legend.isShow&&this.renderLegend();this.renderEvtLayout();this.afterRender();this.bindEvt();g.log(this)},bindEvt:function(){var b=this,a=b._evtEls;g.clone(b._cfg.points.hoverAttr);n.detach(h(".ks-chart-evtlayout-rects",h(".ks-chart-evtlayout",b._$ctnNode)),"mouseenter");n.on(h(".ks-chart-evtlayout-rects",h(".ks-chart-evtlayout",b._$ctnNode)),"mouseenter",function(a){var d=h(a.currentTarget);a=d.attr("index");d=d.attr("line_index");
b._points[d][a].dataInfo&&(b.stockChange(d,a),b._cfg.tip.isShow&&b.tipHandler(d,a))});n.detach(a.paper.$paper,"mouseleave");n.on(a.paper.$paper,"mouseleave",function(a){b.tip&&b.tip.hide();b.paperLeave()})},stockChange:function(b,a){var c=this._stocks[b],c={target:c.stocks[a],currentTarget:c.stocks[a],lineIndex:Math.round(b),stockIndex:Math.round(a)};this.fire("stockChange",c)},tipHandler:function(b,a){var c=this.color.getColor(b).DEFAULT,d=this.tip,e=this._cfg,f=e.tip.template,h=d.getInstance(),
k;f&&(k=this._points[b][a].dataInfo,g.isFunction(f)?d.setContent(f(k)):d.renderTemplate(f,k),f=this._points[b][a],d.isVisable()?d.animateTo(f.x,f.y):d.moveTo(f.x,f.y),h.css(this.processAttr(e.tip.css,c)))},paperLeave:function(){this.fire("paperLeave",this)},afterRender:function(){this.fire("afterRender",this)},getPaper:function(){return this.htmlPaper},clear:function(){this.paper.clear()}});return p},{requires:"base gallery/template/1.0/index ../basechart/index ../raphael/index ../tools/color/index ../tools/htmlpaper/index ../legend/index ./theme ../tools/touch/index ../tip/index".split(" ")});
KISSY.add("gallery/kcharts/1.1/scatterchart/theme",function(g){return{"ks-chart-default":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:!0},points:{attr:{stroke:"#fff",r:4,"stroke-width":1.5,fill:"{COLOR}"},hoverAttr:{stroke:"#fff",r:5,fill:"{COLOR}","stroke-width":0}},xGrids:{css:{color:"#eee"}},yGrids:{css:{color:"#eee"}},yAxis:{css:{color:"#ccc"}},
xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px"}},pointLines:{css:{color:"#ccc"}},tip:{css:{border:"1px solid {COLOR}"}}},"ks-chart-analytiks":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:!0},points:{attr:{stroke:"#fff",r:4,"stroke-width":1.5,fill:"{COLOR}"},hoverAttr:{stroke:"#fff",
r:5,fill:"{COLOR}","stroke-width":0}},xGrids:{css:{color:"#eee"}},yGrids:{css:{color:"#eee"}},yAxis:{css:{color:"#ccc"}},xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px"}},pointLines:{css:{color:"#ccc"}},tip:{css:{border:"1px solid {COLOR}"}}},"ks-chart-rainbow":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",
color:"#666"},isShow:!0},points:{attr:{stroke:"#fff",r:4,"stroke-width":1.5,fill:"{COLOR}"},hoverAttr:{stroke:"#fff",r:5,fill:"{COLOR}","stroke-width":0}},xGrids:{css:{color:"#eee"}},yGrids:{css:{color:"#eee"}},yAxis:{css:{color:"#ccc"}},xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px"}},pointLines:{css:{color:"#ccc"}},tip:{css:{border:"1px solid {COLOR}"}}}}});
