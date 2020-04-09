(this["webpackJsonpgit-app"]=this["webpackJsonpgit-app"]||[]).push([[0],{10:function(e,t,a){e.exports={container:"Cards_container__3bjn6",card:"Cards_card__eGUfZ",infected:"Cards_infected__-adYp",recovered:"Cards_recovered__1aizD",deaths:"Cards_deaths__Qdjzq"}},201:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(66),o=a.n(c),s=a(5),l=a.n(s),u=a(13),i=a(67),d=a(68),m=a(77),f=a(79),p=a(215),v=a(217),h=a(216),E=a(218),b=a(28),y=a.n(b),x=a(29),g=a.n(x),_=a(10),j=a.n(_),w=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:j.a.container},r.a.createElement(p.a,{container:!0,spaceing:3,justify:"center"},r.a.createElement(p.a,{item:!0,component:v.a,xs:12,md:3,className:g()(j.a.card,j.a.infected)},r.a.createElement(h.a,null,r.a.createElement(E.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(E.a,{variant:"h5"},r.a.createElement(y.a,{start:0,end:a.value,duration:1.5,separator:","})),r.a.createElement(E.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(E.a,{variant:"body2"},"Number of active cases of COVID-19"," "))),r.a.createElement(p.a,{item:!0,component:v.a,xs:12,md:3,className:g()(j.a.card,j.a.recovered)},r.a.createElement(h.a,null,r.a.createElement(E.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(E.a,{variant:"h5"},r.a.createElement(y.a,{start:0,end:n.value,duration:1.5,separator:","})),r.a.createElement(E.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(E.a,{variant:"body2"},"Number of recoveries from COVID-19"," "))),r.a.createElement(p.a,{item:!0,component:v.a,xs:12,md:3,className:g()(j.a.card,j.a.deaths)},r.a.createElement(h.a,null,r.a.createElement(E.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(E.a,{variant:"h5"},r.a.createElement(y.a,{start:0,end:c.value,duration:1.5,separator:","})),r.a.createElement(E.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(E.a,{variant:"body2"},"Number of deaths cases by COVID-19"," "))))):"Loading..."},O=a(78),k=a(40),C=a.n(k),D="https://covid19.mathdro.id/api",S=function(){var e=Object(u.a)(l.a.mark((function e(){var t,a,n,r,c,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.get(D);case 3:return t=e.sent,a=t.data,n=a.confirmed,r=a.recovered,c=a.deaths,o=a.lastUpdate,e.abrupt("return",{confirmed:n,recovered:r,deaths:c,lastUpdate:o});case 12:e.prev=12,e.t0=e.catch(0);case 14:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.get("".concat(D,"/daily"));case 3:t=e.sent,a=t.data,console.log(a),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),I=a(73),B=a(75),U=a.n(B),V=function(){var e=Object(n.useState)([]),t=Object(O.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){var e=function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,N();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();console.log(a),e()}),[a]);var o=a.length?r.a.createElement(I.a,{data:{labels:a((function(e){return e.date})),datasets:[{data:a((function(e){return e.confirmed})),labekl:"Infected",borderColor:"#3333ff"},{data:a((function(e){return e.deaths})),labekl:"Deaths",borderColor:"red",backgroundColor:"rgba(255,0,0,0.5)",fill:!0}]}}):null;return r.a.createElement("div",{className:U.a.container},o)},z=function(){return r.a.createElement("h1",null,"CountryPicker")},A=a(76),J=a.n(A),M=function(e){Object(f.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{}},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.data;return r.a.createElement("div",{className:J.a.container},r.a.createElement(w,{data:e}),r.a.createElement(V,null),r.a.createElement(z,null))}}]),a}(r.a.Component);o.a.render(r.a.createElement(M,null),document.getElementById("root"))},75:function(e,t,a){},76:function(e,t,a){e.exports={container:"App_container__1MQN3"}},81:function(e,t,a){e.exports=a(201)}},[[81,1,2]]]);
//# sourceMappingURL=main.123d410b.chunk.js.map