(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{19:function(e,t,a){"use strict";var n=a(0),r=a.n(n);var l,s="INITED",i=function(){function e(e){var t=this;void 0===e&&(e=function(e){}),this.state=s,this.onChange=function(){return e({state:t.state})},this.state=s}return e.prototype.getState=function(){return this.state},e.prototype.setInited=function(){return this.state!==s&&(this.state=s,this.onChange(),!0)},e.prototype.isInited=function(){return this.state===s},e.prototype.setPlaying=function(){return"PLAYING"!==this.state&&(this.state="PLAYING",this.onChange(),!0)},e.prototype.isPlaying=function(){return"PLAYING"===this.state},e.prototype.setPaused=function(){return"PLAYING"===this.state&&(this.state="PAUSED",this.onChange(),!0)},e.prototype.isPaused=function(){return"PAUSED"===this.state},e.prototype.setStopped=function(){return this.state!==s&&(this.state="STOPPED",this.onChange(),!0)},e.prototype.isStopped=function(){return"STOPPED"===this.state},e}(),o=function(){function e(e){var t=e.initialTime,a=e.direction,n=e.timeToUpdate,r=e.lastUnit,l=e.checkpoints,s=e.onChange;this.initialTime=t,this.time=t,this.direction=a,this.timeToUpdate=n,this.lastUnit=r,this.checkpoints=l,this.innerState=new i(s),this.onChange=s,this.timerId=null}return Object.defineProperty(e.prototype,"state",{get:function(){return this.innerState.getState()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"timeParts",{get:function(){return this.getTimeParts(this.computeTime())},enumerable:!0,configurable:!0}),e.prototype.getTimeParts=function(e){return function(e,t){var a=["ms","s","m","h","d"],n=a.findIndex(function(e){return e===t}),r=[1e3,60,60,24,1],l=[1,1e3,6e4,36e5,864e5];return a.reduce(function(t,a,s){return t[a]=s>n?0:s===n?Math.floor(e/l[s]):Math.floor(e/l[s])%r[s],t},{ms:0,s:0,m:0,h:0,d:0})}(e,this.lastUnit)},e.prototype.setTime=function(e){this.time=e},e.prototype.getTime=function(){return this.time},e.prototype.setDirection=function(e){this.direction=e},e.prototype.setCheckpoints=function(e){this.checkpoints=e},e.prototype.start=function(){this.innerState.setPlaying()&&this.setTimerInterval(!0)},e.prototype.resume=function(){!this.innerState.isStopped()&&this.innerState.setPlaying()&&this.setTimerInterval()},e.prototype.pause=function(){this.innerState.setPaused()&&clearInterval(this.timerId)},e.prototype.stop=function(){this.innerState.setStopped()&&clearInterval(this.timerId)},e.prototype.reset=function(){this.time=this.initialTime,this.onChange(this.getTimeParts(this.time))},e.prototype.setTimerInterval=function(e){var t=this;void 0===e&&(e=!1);e&&this.onChange(this.getTimeParts(this.time)),this.timerId=window.setInterval(function(){var e=t.time,a=t.computeTime();t.onChange(t.getTimeParts(a)),t.checkpoints.map(function(n){var r=n.time,l=n.callback,s=r>e&&r<=a,i=r<e&&r>=a;("backward"===t.direction?i:s)&&l()})},this.timeToUpdate)},e.prototype.computeTime=function(){if(this.innerState.isPlaying())switch(this.direction){case"forward":return this.time=this.time+this.timeToUpdate,this.time;case"backward":return this.time=this.time-this.timeToUpdate,this.time<0?(this.stop(),0):this.time;default:return this.time}return this.time},e}(),c=(l=function(e,t){return(l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)},function(e,t){function a(){this.constructor=e}l(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}),m=function(){return(m=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},u=r.a.createContext({ms:0,s:0,m:0,h:0,d:0,formatValue:function(e){return String(e)}}),d=function(e){var t=e.unit,a=e.formatValue;return r.a.createElement(y.Consumer,null,function(e){return(a||e.formatValue)(e[t])||null})},p=function(e){return r.a.createElement(d,m({unit:"ms"},e))},f=function(e){return r.a.createElement(d,m({unit:"s"},e))},b=function(e){return r.a.createElement(d,m({unit:"m"},e))},h=function(e){return r.a.createElement(d,m({unit:"h"},e))},E=function(e){return r.a.createElement(d,m({unit:"d"},e))},y=function(e){function t(t){var a=e.call(this,t)||this,n=a.props,r=n.initialTime,l=n.direction,s=n.timeToUpdate,i=n.lastUnit,c=n.checkpoints;return a.timer=new o({initialTime:r,direction:l,timeToUpdate:s,lastUnit:i,checkpoints:c,onChange:a.setState.bind(a)}),a.state=m({},a.timer.timeParts,{timerState:"INITED"}),a.start=a.start.bind(a),a.pause=a.pause.bind(a),a.resume=a.resume.bind(a),a.stop=a.stop.bind(a),a.reset=a.reset.bind(a),a.setTime=a.setTime.bind(a),a.getTime=a.getTime.bind(a),a.getTimerState=a.getTimerState.bind(a),a.setDirection=a.setDirection.bind(a),a.setCheckpoints=a.setCheckpoints.bind(a),a}return c(t,e),t.getUI=function(e,t){if(null===e)return null;if(Array.isArray(e)||r.a.isValidElement(e))return e;if(e.prototype&&e.prototype.isReactComponent)return r.a.createElement(e,t);if("function"==typeof e)return e(t);throw new Error("Please use one of the supported APIs for children")},t.prototype.componentDidMount=function(){this.props.startImmediately&&this.timer.start()},t.prototype.componentWillUnmount=function(){this.timer.stop()},t.prototype.render=function(){var e=this,a=e.start,n=e.pause,l=e.resume,s=e.stop,i=e.reset,o=e.getTime,c=e.getTimerState,m=e.setTime,d=e.setDirection,p=e.setCheckpoints,f=this.state,b=f.ms,h=f.s,E=f.m,y=f.h,g=f.d,v=f.timerState,w=this.props,N=w.formatValue,k=w.children;return r.a.createElement(u.Provider,{value:{ms:b,s:h,m:E,h:y,d:g,formatValue:N}},t.getUI(k,{start:a,resume:l,pause:n,stop:s,reset:i,getTime:o,getTimerState:c,setTime:m,setDirection:d,setCheckpoints:p,timerState:v}))},t.prototype.setTime=function(e){this.timer.setTime(e)},t.prototype.getTime=function(){return this.timer.getTime()},t.prototype.getTimerState=function(){return this.timer.state},t.prototype.setDirection=function(e){this.timer.setDirection(e)},t.prototype.setCheckpoints=function(e){this.timer.setCheckpoints(e)},t.prototype.start=function(){this.timer.start(),this.props.onStart()},t.prototype.stop=function(){this.timer.stop(),this.props.onStop()},t.prototype.pause=function(){this.timer.pause(),this.props.onPause()},t.prototype.reset=function(){this.timer.reset(),this.props.onReset()},t.prototype.resume=function(){this.timer.resume(),this.props.onResume()},t.Consumer=u.Consumer,t.Milliseconds=p,t.Seconds=f,t.Minutes=b,t.Hours=h,t.Days=E,t.defaultProps={timeToUpdate:1e3,direction:"forward",initialTime:0,startImmediately:!0,lastUnit:"d",checkpoints:[],children:null,formatValue:function(e){return String(e)},onStart:function(){},onResume:function(){},onPause:function(){},onStop:function(){},onReset:function(){}},t}(r.a.PureComponent),g=y;t.a=g},27:function(e,t,a){"use strict";a.d(t,"e",function(){return m}),a.d(t,"a",function(){return u}),a.d(t,"b",function(){return d}),a.d(t,"d",function(){return p}),a.d(t,"c",function(){return f});var n=a(0),r=a.n(n),l=a(7),s=a(38),i=a.n(s);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],n=!0,r=!1,l=void 0;try{for(var s,i=e[Symbol.iterator]();!(n=(s=i.next()).done)&&(a.push(s.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw l}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var m=function(e){var t=e.pertanyaan,a=e.jawaban,n=(e.setJawaban,e.soalId),l=e.kunci,s=void 0===l?{a:[]}:l,i=a||[],o=function(e){};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,t.q.split("\n").map(function(e,t){return r.a.createElement("span",{key:t},e,r.a.createElement("br",null))})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("ul",{className:"list-group"},t.alist.map(function(e,a){return r.a.createElement(r.a.Fragment,{key:a},r.a.createElement("li",{style:{listStyle:"none"}},r.a.createElement("div",{className:"form-inline float-left mb-1"+(-1!==s.a.indexOf(a+1)&&" bg-success"),style:{width:"100%"}},r.a.createElement("label",{style:{width:"1.3em"}},r.a.createElement("b",null,String.fromCharCode(65+a),". ")),1==t.type?r.a.createElement("input",{name:"rd".concat(n),type:"radio",value:a,checked:-1!==i.indexOf(a+1),onChange:o,className:"custom-rd mr-2"}):r.a.createElement("input",{name:"cb".concat(n),type:"checkbox",value:a,checked:-1!==i.indexOf(a+1),onChange:o,className:"custom-cb mr-2"}),r.a.createElement("span",{className:"mr-2"},e))))})))))},u=function(e){var t=e.pertanyaan,a=e.jawaban,n=e.setJawaban,s=e.soalId,i=e.kunci,o=void 0===i?null:i;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,t.q.split("\n").map(function(e,t){return r.a.createElement("span",{key:t},e,r.a.createElement("br",null))})),r.a.createElement(l.a,{labelW:"0",name:"kunci".concat(s),handleChange:function(e){return n(c({},s,e.target.value),!0)},value:a,options:[[1,"BENAR",o?"bg-success":""],[0,"SALAH",o?"":"bg-success"]]}))},d=function(e){var t=e.pertanyaan,a=e.jawaban,n=(e.setJawaban,e.soalId,e.kunci);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,t.q.split("\n").map(function(e,t){return r.a.createElement("span",{key:t},e,r.a.createElement("br",null))})),r.a.createElement("table",{className:"table table-sm"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{width:"10%"},"Jawab: "),r.a.createElement("td",null,null!==a&&a.split("\n").map(function(e,t){return r.a.createElement("span",{key:t},e,r.a.createElement("br",null))}))))),r.a.createElement("table",{className:"bg-success text-white"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Kunci: "),r.a.createElement("td",null,null!==n&&n.split("\n").map(function(e,t){return r.a.createElement("span",{key:t},e,r.a.createElement("br",null))}))))))},p=function(e){var t=e.pertanyaan,a=e.jawaban,l=void 0===a?[]:a,s=(e.setJawaban,e.soalId,e.idkWhy,e.kunci),c=o(Object(n.useState)(l),2),m=(c[0],c[1],o(Object(n.useState)(s),2));m[0],m[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,t.q.split("\n").map(function(e,t){return r.a.createElement("span",{key:t},e,r.a.createElement("br",null))})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-5"},r.a.createElement("ul",{className:"list-group"},t.qlist.map(function(e,t){return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement("li",{className:"list-group-item"},r.a.createElement("div",{className:"form"},r.a.createElement("label",{className:"m-0"},r.a.createElement("b",null,String.fromCharCode(65+t),"."))," ",r.a.createElement("span",{draggable:"true",onDragStart:function(e){},className:"float-right fas fa-question-circle listq-".concat(t)}),r.a.createElement("span",{className:""},e))))}))),r.a.createElement("div",{className:"col-2 m-0"},l.map(function(e,t){return r.a.createElement(i.a,{key:t,zIndex:9999,borderColor:"red",from:"listq-".concat(e.q),to:"lista-".concat(e.a)})}),s.map(function(e,t){return r.a.createElement(i.a,{key:t,from:"listq-".concat(e.q),to:"lista-".concat(e.a)})})),r.a.createElement("div",{className:"col-5"},r.a.createElement("ul",{className:"list-group"},t.alist.map(function(e,t){return r.a.createElement(r.a.Fragment,{key:"a"+t},r.a.createElement("li",{className:"list-group-item"},r.a.createElement("div",{className:"form",draggable:"true",onDragOver:function(e){e.preventDefault()},onDrop:function(e){e.preventDefault()}},r.a.createElement("span",{className:"fas fa-check-circle lista-".concat(t)})," "," ",r.a.createElement("label",{className:"m-0"},r.a.createElement("b",null,String.fromCharCode(65+t),". "))," ",r.a.createElement("span",null,e))))}))),r.a.createElement("div",{className:"col-12"},"Kunci : ",JSON.stringify(s)," ",r.a.createElement("br",null),"Jawaban : ",JSON.stringify(l))))},f=function(e){var t=e.pertanyaan,a=e.jawaban,n=e.setJawaban,l=e.soalId,s=e.kunci,i={border:"none",borderBottom:"1px solid black",padding:0},o=0;return console.log(s),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},t.q.split("\n").map(function(e,t){return r.a.createElement("span",{key:t},e.split("[[]]").map(function(t,s){return r.a.createElement(r.a.Fragment,{key:s},t,s+1!=e.split("[[]]").length&&r.a.createElement("input",{name:o,style:i,size:"5",type:"text",value:a[o++],onChange:function(e){return n(c({},l,function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){c(e,t,a[t])})}return e}({},a,c({},e.target.name.toString(),e.target.value))))}}))})," ",r.a.createElement("br",null))}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("hr",null),r.a.createElement("strong",null,"Kunci Jawaban")," ",r.a.createElement("br",null),s.map(function(e,t){return r.a.createElement("span",{key:t},e,s.length!==t+1&&", ")}))))}},438:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(4),s=a.n(l),i=a(1),o=a(39),c=a(19),m=a(38),u=a.n(m),d=a(5),p=a(7),f=a(93);function b(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){N(e,t,a[t])})}return e}function y(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function N(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var k=function(e){function t(e){var a,n,l;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,l=g(t).call(this,e),a=!l||"object"!==h(l)&&"function"!=typeof l?v(n):l,N(v(a),"setJawaban",function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];for(var n in a.setState({jawabans:E({},a.state.jawabans,e)}),e)a.updateJawaban(n,e[n],t)}),N(v(a),"renderBab",function(e){return r.a.createElement(r.a.Fragment,null)}),N(v(a),"showJawaban",function(){a.setState({hasilModal:!0},function(){console.log(a.state.id),i.a.getToken()?s.a.get("/api/detail-hasil-siswa/"+a.state.id,{headers:{Authorization:"Bearer "+i.a.getToken()}}).then(function(e){a.setState({hasil:e.data.data})}).catch(function(){a.setState({hasil:null})}):alert("mohon login ulang")})}),N(v(a),"pindahBab",function(){!(arguments.length>0&&void 0!==arguments[0])||arguments[0]?a.state.babIndex+1!==a.state.soals.length?a.setState({babIndex:a.state.babIndex+1,soalIndex:0}):a.setState({babIndex:0,soalIndex:0}):a.state.babIndex-1!=-1?a.setState({babIndex:a.state.babIndex-1,soalIndex:0}):a.setState({babIndex:a.state.soals.length-1,soalIndex:0})}),N(v(a),"pindahSoal",function(){!(arguments.length>0&&void 0!==arguments[0])||arguments[0]?a.state.soalIndex+1!==a.state.soals[a.state.babIndex].child.length?a.setState({soalIndex:a.state.soalIndex+1}):a.setState({soalIndex:0}):a.state.soalIndex-1!=-1?a.setState({soalIndex:a.state.soalIndex-1}):a.setState({soalIndex:a.state.soals[a.state.babIndex].child.length-1})}),a.state={id:e.match.params.kuisId,hasilId:"",sisa:0,kuis:{},mapel:{},settings:{},soals:[],jawabans:{},loading:!1,hasil:null,hasilModal:!1,babIndex:0,soalIndex:0,mode:1},a}var a,n,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,r.a.Component),a=t,(n=[{key:"componentDidMount",value:function(){this.mulaiKuis()}},{key:"mulaiKuis",value:function(){var e=this,t=i.a.getToken();t?(this.setState({loading:!0}),s.a.post("api/mulai-kuis/",{mkId:this.state.id},{headers:{Authorization:"Bearer "+t}}).then(function(t){var a=t.data.data,n=Object(o.a)(a.soals).map(function(e){return JSON.parse(e.settings).acakSoal&&Object(o.b)(e.child),e});e.setState({hasilId:a.hasil.id,hasil:a.hasil,sisa:a.sisa,settings:JSON.parse(a.mapel_kuis.settings),kuis:a.mapel_kuis.kuis,mapel:a.mapel_kuis.mapel,soals:n,jawabans:JSON.parse(a.jawabans),loading:!1})}).catch(function(e){console.log(e)})):this.props.logOut("mapel",!0)}},{key:"updateJawaban",value:function(e,t,a){var n=this;console.log(t);var r=i.a.getToken();r?(this.setState({loading:!0}),s.a.put("api/update-jawaban/",{hId:this.state.hasilId,sId:e,value:t,bs:a},{headers:{Authorization:"Bearer "+r}}).then(function(e){n.setState({loading:!1})}).catch(function(e){})):this.props.logOut("mapel",!0)}},{key:"render",value:function(){var e,t,a=this,n=1;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row",style:{position:"fixed",zIndex:999,background:"white",width:"95%"}},r.a.createElement("div",{className:"col-12"},r.a.createElement(d.e,{title:this.state.kuis.judul,navs:[{show:1==this.state.settings.type,clickHandle:this.showJawaban,icon:"fa-question",text:"Jawaban"},{show:!0,clickHandle:function(){a.setState({mode:1==a.state.mode?2:1})},icon:"fa-refresh",text:"Ubah Tampilan ("+this.state.mode+")"},{show:!0,clickHandle:function(){a.props.history.goBack()},icon:"fa-arrow-left"}]}),r.a.createElement("p",null,this.state.mapel.nama),this.state.sisa&&r.a.createElement(c.a,{initialTime:this.state.sisa-1e4,direction:"backward",checkpoints:[{time:0,callback:function(){alert("waktu habis!"),a.props.history.goBack()}}]},function(){return r.a.createElement("span",{style:{display:2==a.state.settings.type?"block":"none"}},r.a.createElement(c.a.Hours,null),"jam"," ",r.a.createElement(c.a.Minutes,null),"menit"," ",r.a.createElement("strong",{style:{fontSize:20}},r.a.createElement(c.a.Seconds,null)))}))),r.a.createElement("div",{className:"row",style:{marginTop:"100px"}},1==this.state.mode&&r.a.createElement("div",{className:"col-12"},r.a.createElement("hr",null),this.state.soals.length>0&&r.a.createElement("div",null,r.a.createElement("h5",{className:"text-center mt-4"},r.a.createElement("strong",null,this.state.soals[this.state.babIndex].nama)),r.a.createElement("div",{className:"text-center"},r.a.createElement("button",{onClick:function(){return a.pindahBab(!1)},className:"btn btn-sm btn-primary mr-1"},"«"),r.a.createElement("button",{onClick:function(){return a.pindahBab(!0)},className:"btn btn-sm btn-primary mr-1"},"»"),this.state.babIndex+1," / ",this.state.soals.length),r.a.createElement("p",{className:"m-1 mb-0"},JSON.parse(this.state.soals[this.state.babIndex].settings).keterangan),r.a.createElement("hr",{className:"m-2"}),r.a.createElement("div",{className:"mb-2"},r.a.createElement("button",{onClick:function(){return a.pindahSoal(!1)},className:"btn btn-sm btn-outline-primary mr-1"},"« kembali"),r.a.createElement("button",{onClick:function(){return a.pindahSoal(!0)},className:"btn btn-sm btn-outline-primary mr-1"},"selanjutnya »"),this.state.soalIndex+1," / ",this.state.soals[this.state.babIndex].child.length),r.a.createElement("div",{className:"card mb-2"},r.a.createElement("div",{className:"card-body"},r.a.createElement("span",{className:"float-left"},r.a.createElement("strong",null,this.state.soalIndex+1,". ")),r.a.createElement("span",{className:""},(e=a.state.soals[a.state.babIndex].child[a.state.soalIndex].soal,t=JSON.parse(e.pertanyaan),r.a.createElement("span",{className:""},1==e.type&&r.a.createElement(S,{soalId:e.id,pertanyaan:t,jawaban:a.state.jawabans[e.id],setJawaban:a.setJawaban}),2==e.type&&r.a.createElement(x,{soalId:e.id,pertanyaan:t,jawaban:a.state.jawabans[e.id],setJawaban:a.setJawaban}),3==e.type&&r.a.createElement(I,{soalId:e.id,pertanyaan:t,jawaban:a.state.jawabans[e.id]?a.state.jawabans[e.id]:[],setJawaban:a.setJawaban}),4==e.type&&r.a.createElement(O,{soalId:e.id,pertanyaan:t,jawaban:a.state.jawabans[e.id]?a.state.jawabans[e.id]:[],setJawaban:a.setJawaban}),5==e.type&&r.a.createElement(j,{soalId:e.id,pertanyaan:t,jawaban:a.state.jawabans[e.id],setJawaban:a.setJawaban})))))),r.a.createElement("hr",null),r.a.createElement("div",{className:"p-2"},r.a.createElement("p",{className:"text-center"},"Daftar BAB/Soal:"),this.state.soals.map(function(e,t){return r.a.createElement("div",{key:e.id},r.a.createElement("span",{className:"mr-2"},t==a.state.babIndex?r.a.createElement("strong",null,r.a.createElement("u",null,e.nama)):e.nama),e.child.map(function(e,n){var l=e.soal,s=JSON.parse(l.pertanyaan);return r.a.createElement("button",{onClick:function(){a.setState({babIndex:t,soalIndex:n})},className:"mr-1 mb-1 btn btn-sm "+function(){if(3==l.type){if(!Array.isArray(a.state.jawabans[l.id])||a.state.jawabans[l.id].length<s.qlist.length)return" btn-outline-warning text-dark"}else if(4==l.type){if(null==a.state.jawabans[l.id])return" btn-outline-warning text-dark";var e=s.q.match(/\[\[.*?\]\]/g).length,t=0;if("[object Object]"===Object.prototype.toString.call(a.state.jawabans[l.id]))for(var n in a.state.jawabans[l.id])""!=a.state.jawabans[l.id][n]&&null!=a.state.jawabans[l.id][n]&&t++;else Array.isArray(a.state.jawabans[l.id])&&a.state.jawabans[l.id].forEach(function(e){""!=e&&null!=e&&t++});if(e>t)return" btn-outline-warning text-dark"}else{if(Array.isArray(a.state.jawabans[l.id])&&0===a.state.jawabans[l.id].length)return" btn-outline-warning text-dark";if(null===a.state.jawabans[l.id]||""===a.state.jawabans[l.id])return" btn-outline-warning text-dark"}return" btn-outline-dark"}(),key:e.id},t==a.state.babIndex&&n==a.state.soalIndex?r.a.createElement("strong",null,r.a.createElement("u",null,n+1)):n+1)}))}),"keterangan : ",r.a.createElement("br",null),r.a.createElement("span",{className:"bg-warning p-1 pl-5 mr-1"})," Belum dikerjakan / belum selesai"))),2==this.state.mode&&r.a.createElement("div",{className:"col-12"},this.state.soals.map(function(e){return r.a.createElement(r.a.Fragment,{key:e.id},r.a.createElement("h5",{className:"text-center mt-4"},r.a.createElement("strong",null,e.nama.toUpperCase())),r.a.createElement("p",null,JSON.parse(e.settings).keterangan),e.child.map(function(e){var t=e.soal,l=JSON.parse(t.pertanyaan);return r.a.createElement("div",{className:"card mb-2",key:e.id},r.a.createElement("div",{className:"card-body"},r.a.createElement("span",{className:"float-left"},r.a.createElement("b",null,n++," .")),r.a.createElement("span",{className:""},1==t.type&&r.a.createElement(S,{soalId:t.id,pertanyaan:l,jawaban:a.state.jawabans[t.id],setJawaban:a.setJawaban}),2==t.type&&r.a.createElement(x,{soalId:t.id,pertanyaan:l,jawaban:a.state.jawabans[t.id],setJawaban:a.setJawaban}),3==t.type&&r.a.createElement(I,{soalId:t.id,pertanyaan:l,jawaban:a.state.jawabans[t.id]?a.state.jawabans[t.id]:[],setJawaban:a.setJawaban}),4==t.type&&r.a.createElement(O,{soalId:t.id,pertanyaan:l,jawaban:a.state.jawabans[t.id]?a.state.jawabans[t.id]:[],setJawaban:a.setJawaban}),5==t.type&&r.a.createElement(j,{soalId:t.id,pertanyaan:l,jawaban:a.state.jawabans[t.id],setJawaban:a.setJawaban}))))}))}))),r.a.createElement(f.a,{show:this.state.hasilModal,nilai:!1,hasil:this.state.hasil,toggle:function(){a.setState({hasilModal:!1})}}))}}])&&y(a.prototype,n),l&&y(a,l),t}(),S=function(e){var t=e.pertanyaan,a=e.jawaban,n=e.setJawaban,l=e.soalId,s=a||[],i=function(e){if(1==t.type)n(N({},l,[parseInt(e.target.value)+1]));else if(2==t.type)if(e.target.checked)n(N({},l,[].concat(b(s),[parseInt(e.target.value)+1])));else{var a=s.filter(function(t){return t!==parseInt(e.target.value)+1});n(N({},l,a))}};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,t.q.split("\n").map(function(e,t){return r.a.createElement("span",{key:t},e,r.a.createElement("br",null))})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("ul",{className:"list-group"},t.alist.map(function(e,a){return r.a.createElement(r.a.Fragment,{key:a},r.a.createElement("li",{style:{listStyle:"none"}},r.a.createElement("div",{className:"form-inline float-left mb-1",style:{width:"100%"}},r.a.createElement("label",{style:{width:"1.3em"}},r.a.createElement("b",null,String.fromCharCode(65+a),". ")),1==t.type?r.a.createElement("input",{name:"rd".concat(l),type:"radio",value:a,checked:-1!==s.indexOf(a+1),onChange:i,className:"custom-rd mr-2"}):r.a.createElement("input",{name:"cb".concat(l),type:"checkbox",value:a,checked:-1!==s.indexOf(a+1),onChange:i,className:"custom-cb mr-2"}),r.a.createElement("span",{className:"mr-2"},e))))})))))},x=function(e){var t=e.pertanyaan,a=e.jawaban,n=e.setJawaban,l=e.soalId;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,t.q.split("\n").map(function(e,t){return r.a.createElement("span",{key:t},e,r.a.createElement("br",null))})),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"kunci".concat(l),onChange:function(e){return n(N({},l,e.target.value),!0)},value:1,checked:1==a||1==a})," BENAR",r.a.createElement("br",null),r.a.createElement("input",{type:"radio",name:"kunci".concat(l),onChange:function(e){return n(N({},l,e.target.value),!0)},value:0,checked:0==a||0==a})," SALAH"))},j=function(e){var t=e.pertanyaan,a=e.jawaban,n=e.setJawaban,l=e.soalId;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,t.q.split("\n").map(function(e,t){return r.a.createElement("span",{key:t},e,r.a.createElement("br",null))})),r.a.createElement(p.c,{labelW:"0",formW:"5",name:"kunci".concat(l),value:a,placeholder:"Isikan jawaban anda",handleChange:function(e){return n(N({},l,e.target.value))}}))},I=function(e){var t=e.pertanyaan,a=e.jawaban,n=void 0===a?[]:a,l=e.setJawaban,s=e.soalId;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,t.q.split("\n").map(function(e,t){return r.a.createElement("span",{key:t},e,r.a.createElement("br",null))})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-5"},r.a.createElement("ul",{className:"list-group"},t.qlist.map(function(e,t){return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement("li",{className:"list-group-item"},r.a.createElement("div",{className:"form"},r.a.createElement("label",{className:"m-0"},r.a.createElement("b",null,String.fromCharCode(65+t),"."))," ",r.a.createElement("span",{draggable:"true",onDragStart:(a={id:t},function(e){var t=n.filter(function(e){return e.q!==a.id});l(N({},s,t)),e.dataTransfer.setData("dragContent",a.id)}),className:"float-right fas fa-question-circle listq-".concat(t)}),r.a.createElement("span",{className:""},e))));var a}))),r.a.createElement("div",{className:"col-2 m-0"},n.map(function(e,t){return r.a.createElement(u.a,{key:t,from:"listq-".concat(e.q),to:"lista-".concat(e.a)})})),r.a.createElement("div",{className:"col-5"},r.a.createElement("ul",{className:"list-group"},t.alist.map(function(e,t){return r.a.createElement(r.a.Fragment,{key:"a"+t},r.a.createElement("li",{className:"list-group-item"},r.a.createElement("div",{className:"form",draggable:"true",onDragOver:function(e){e.preventDefault()},onDrop:(a={id:t},function(e){if(e.preventDefault(),!(n.filter(function(e){return e.a===a.id}).length>0)){var t=JSON.parse(e.dataTransfer.getData("dragContent")),r=a.id;return l(N({},s,[].concat(b(n),[{q:t,a:r}]))),!1}})},r.a.createElement("span",{className:"fas fa-check-circle lista-".concat(t)})," "," ",r.a.createElement("label",{className:"m-0"},r.a.createElement("b",null,String.fromCharCode(65+t),". "))," ",r.a.createElement("span",null,e))));var a}))),r.a.createElement("div",{className:"col-12"},JSON.stringify(n))))},O=function(e){var t=e.pertanyaan,a=e.jawaban,n=e.setJawaban,l=e.soalId,s={border:"none",borderBottom:"1px solid black",padding:0},i=0;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},t.q.split("\n").map(function(e,t){return r.a.createElement("span",{key:t},e.split("[[]]").map(function(t,o){return r.a.createElement(r.a.Fragment,{key:o},t,o+1!=e.split("[[]]").length&&r.a.createElement("input",{name:i,style:s,size:"5",type:"text",value:a[i++]||"",onChange:function(e){return n(N({},l,E({},a,N({},e.target.name.toString(),e.target.value))))}}))})," ",r.a.createElement("br",null))}))))};t.default=k},5:function(e,t,a){"use strict";a.d(t,"e",function(){return l}),a.d(t,"a",function(){return s}),a.d(t,"c",function(){return i}),a.d(t,"b",function(){return o}),a.d(t,"d",function(){return c});var n=a(0),r=a.n(n);function l(e){var t=e.title,a=void 0===t?"Judul Halaman":t,n=e.navs,l=void 0===n?[]:n;return r.a.createElement("div",{className:"row mt-2 mb-0"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",{className:"float-left"},r.a.createElement("b",null,a)),l.map(function(e,t){if(e.show)return r.a.createElement("button",{key:t,value:e.action,onClick:e.clickHandle,className:"btn ".concat(e.className?e.className:"btn-primary"," float-right ml-1")},r.a.createElement("span",{className:"fas ".concat(e.icon?e.icon:"fa-plus")})," ",r.a.createElement("span",null,e.text||""))})))}function s(e){var t=e.message,a=e.type,n=e.clickHandle,l=e.html,s=void 0!==l&&l;return r.a.createElement("div",{className:"alert alert-".concat(a||"info"),style:{overflow:"hidden"},role:"alert"},r.a.createElement("span",{className:"float-left"},s?r.a.createElement("span",{dangerouslySetInnerHTML:{__html:t}}):t),r.a.createElement("button",{className:"btn btn-xs float-right",onClick:function(){return n()}},r.a.createElement("i",{className:"fas fa-times"})))}function i(e){return e.loading?r.a.createElement("span",{className:"col-12 text-center"},r.a.createElement("i",{className:"fas fa-spinner fa-spin"})," ",e.text?e.text:"Loading..."):""}function o(e){var t=e.text,a=void 0===t?"":t,n=e.w,l=e.h,s=Math.floor(255*Math.random()),i=Math.floor(255*Math.random()),o=Math.floor(255*Math.random());return r.a.createElement("div",{style:{width:n||"100%",height:l||150,backgroundColor:"rgb(".concat(s,", ").concat(i,", ").concat(o,")"),color:"white",textShadow:"-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",textAlign:"middle",fontSize:60,paddingTop:30,textTransform:"uppercase"}},r.a.createElement("b",null,a.substring(0,1)," ",a.substring(a.length-1,a.length)))}function c(e){var t=e.text,a=e.success,n=void 0===a||a;return r.a.createElement("span",null,r.a.createElement("i",{className:"fas ".concat(n?"fa-check text-success":"fa-exclamation text-danger")})," ",t)}},7:function(e,t,a){"use strict";a.d(t,"d",function(){return l}),a.d(t,"b",function(){return s}),a.d(t,"a",function(){return i}),a.d(t,"c",function(){return o});var n=a(0),r=a.n(n);function l(e){var t=e.type,a=e.name,n=e.placeholder,l=e.handleChange,s=e.value,i=e.required,o=e.label,c=e.labelW,m=e.formW,u=e.formtext,d=e.form;return r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-md-"+(c||2)+" col-form-label"},o),r.a.createElement("div",{className:"col-md-"+(m||6)},r.a.createElement("input",{form:d,type:t||"text",className:"form-control",name:a,placeholder:n,onChange:l,value:s||"",required:i}),r.a.createElement("small",{className:"form-text text-muted"},u)))}function s(e){var t=e.name,a=e.placeholder,n=e.options,l=e.handleChange,s=e.value,i=e.required,o=e.label,c=e.labelW,m=e.formW;return r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-md-"+(c||2)+" col-form-label"},o),r.a.createElement("div",{className:"col-md-"+(m||4)},r.a.createElement("select",{className:"custom-select",name:t,onChange:l,value:s||"",required:i},a&&r.a.createElement("option",{value:""},a),n.map(function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.nama)}))))}function i(e){var t=e.name,a=e.options,n=e.handleChange,l=e.value,s=e.required,i=e.label,o=e.labelW,c=e.formW,m=e.form,u=e.labelClass,d=void 0===u?"":u;return r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-md-"+(o||2)+" col-form-label"},i),r.a.createElement("div",{className:"col-md-"+(c||4),style:{marginTop:"0.4rem"}},a.map(function(e){var a=e[2]?e[2]:d;return r.a.createElement("div",{className:"form-check form-check-inline",key:e[0]},r.a.createElement("label",{className:"form-check-label ".concat(a)},r.a.createElement("input",{form:m,className:"form-check-input",type:"radio",name:t,onChange:n,value:e[0],checked:l==e[0],required:s})," ",e[1]))})))}function o(e){var t=e.name,a=e.handleChange,n=e.value,l=e.placeholder,s=e.required,i=e.label,o=e.labelW,c=e.formW;return r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-md-"+(o||2)+" col-form-label"},i),r.a.createElement("div",{className:"col-md-"+(c||4)},r.a.createElement("textarea",{style:{width:"100%"},className:"form-control",name:t,onChange:a,value:n||"",placeholder:l,required:s})))}},93:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(27);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],n=!0,r=!1,l=void 0;try{for(var s,i=e[Symbol.iterator]();!(n=(s=i.next()).done)&&(a.push(s.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw l}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.a=function(e){var t=e.show,a=e.toggle,i=e.hasil,o=e.nilai,c=void 0===o||o,m=s(Object(n.useState)(1),2),u=m[0],d=m[1],p=1;return r.a.createElement("div",{className:"modal",id:"modal",style:{display:t?"block":"none",overflow:"auto"}},r.a.createElement("div",{className:"modal-dialog modal-xl",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("strong",null,c?"Hasil":"Jawaban"),r.a.createElement("button",{type:"button",className:"close",onClick:a},r.a.createElement("span",null,"×")))),r.a.createElement("div",{className:"modal-body"},null===i?"Anda belum/tidak mengikuti ujian ini!":i?r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},c&&"Nilai : ".concat(i.hasil&&parseFloat(i.hasil.points)/parseFloat(i.hasil.max_points)*100),c&&r.a.createElement("hr",null),i.hasil&&i.hasil.details.map(function(e){var t=e.soal,a=JSON.parse(t.pertanyaan),n=JSON.parse(t.jawaban);return r.a.createElement("div",{className:"card mb-2",key:e.id},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("span",{className:"float-left"},r.a.createElement("b",null,p++," .")),r.a.createElement("span",{className:"float-left"},1==t.type&&r.a.createElement(l.e,{soalId:t.id,pertanyaan:a,jawaban:JSON.parse(e.jawaban),kunci:n,setJawaban:function(){return!1}}),2==t.type&&r.a.createElement(l.a,{soalId:t.id,pertanyaan:a,jawaban:JSON.parse(e.jawaban),kunci:n,setJawaban:function(){return!1}}),3==t.type&&r.a.createElement(l.d,{soalId:t.id,pertanyaan:a,jawaban:e.jawaban?JSON.parse(e.jawaban):[],kunci:n,setJawaban:function(){return!1},idkWhy:function(){console.log(u),d(!u)}}),4==t.type&&r.a.createElement(l.c,{soalId:t.id,pertanyaan:a,jawaban:e.jawaban?JSON.parse(e.jawaban):[],kunci:n,setJawaban:function(){return!1}}),5==t.type&&r.a.createElement(l.b,{soalId:t.id,pertanyaan:a,jawaban:JSON.parse(e.jawaban),kunci:n,setJawaban:function(){return!1}})),r.a.createElement("span",{className:"float-right"},e.point==e.max_point?r.a.createElement("i",{className:"fas fa-check text-success fa-2x"}):0==e.point?r.a.createElement("i",{className:"fas fa-times text-danger fa-2x"}):null==e.point?r.a.createElement("i",{className:"fas fa-question text-warning fa-2x"}):r.a.createElement("i",{className:"fas fa-exclamation text-info fa-2x"})))),r.a.createElement("div",{className:"row",style:{display:c?"block":"none"}},r.a.createElement("div",{className:"col-12"},r.a.createElement("hr",null),r.a.createElement("small",{className:"text-primary"},"Kunci :  ",r.a.createElement("br",null),"max point: ",e.max_point),r.a.createElement("div",{className:"form-inline float-right"},"POINT : ",e.point)))))}))):"Hasil ujian belum diterbitkan"),r.a.createElement("div",{className:"modal-footer"}))))}}}]);