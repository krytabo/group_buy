(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ac8f065"],{"00b4":function(t,e,n){"use strict";n("ac1f");var i=n("23e7"),o=n("da84"),r=n("c65b"),s=n("e330"),a=n("1626"),c=n("861d"),l=function(){var t=!1,e=/[ac]/;return e.exec=function(){return t=!0,/./.exec.apply(this,arguments)},!0===e.test("abc")&&t}(),u=o.Error,d=s(/./.test);i({target:"RegExp",proto:!0,forced:!l},{test:function(t){var e=this.exec;if(!a(e))return d(this,t);var n=r(e,this,t);if(null!==n&&!c(n))throw new u("RegExp exec method returned something other than an Object or null");return!!n}})},"107c":function(t,e,n){var i=n("d039"),o=n("da84"),r=o.RegExp;t.exports=i((function(){var t=r("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},"242a":function(t,e,n){"use strict";n.r(e);var i=n("7a23"),o={class:"flex min-h-screen flex-col"},r={class:"bg flex h-screen items-center justify-center"},s=Object(i["createElementVNode"])("h3",{class:"mb-4 text-center text-xl text-2xl font-semibold sm:mb-6"},"忘記密碼",-1),a=Object(i["createTextVNode"])("送出"),c=Object(i["createTextVNode"])("或"),l={class:"mt-5 flex w-full items-center justify-center"},u=Object(i["createElementVNode"])("div",null,"想起密碼了嗎？",-1),d={class:"text-left"},h=Object(i["createTextVNode"])("登入"),f=Object(i["createElementVNode"])("h3",{class:"mb-4 text-center text-xl text-2xl font-semibold sm:mb-6"},"申請成功",-1),m=Object(i["createElementVNode"])("p",null,"幾分後您將收到重置密碼的電子郵件",-1),p=Object(i["createTextVNode"])("返回登入");function b(t,e,n,b,g,v){var x=Object(i["resolveComponent"])("n-input"),w=Object(i["resolveComponent"])("n-auto-complete"),y=Object(i["resolveComponent"])("n-form-item"),O=Object(i["resolveComponent"])("n-button"),E=Object(i["resolveComponent"])("n-divider"),j=Object(i["resolveComponent"])("n-form"),M=Object(i["resolveComponent"])("n-result");return Object(i["openBlock"])(),Object(i["createElementBlock"])("div",o,[Object(i["createElementVNode"])("div",r,[Object(i["createElementVNode"])("div",{class:Object(i["normalizeClass"])([{StepHidden:g.step1},"vertical w-screen rounded-none bg-white p-7 shadow-none lg:right-32 lg:w-96 lg:rounded-2xl lg:p-10 lg:shadow-2xl"])},[s,Object(i["createVNode"])(j,{ref:"formRef","label-placement":"top",model:g.form,rules:g.rules},{default:Object(i["withCtx"])((function(){return[Object(i["createVNode"])(y,{label:"電子信箱",path:"mail"},{default:Object(i["withCtx"])((function(){return[Object(i["createVNode"])(w,{value:g.form.mail,"onUpdate:value":e[0]||(e[0]=function(t){return g.form.mail=t}),"input-props":{autocomplete:"disabled"},options:v.options},{default:Object(i["withCtx"])((function(t){var e=t.handleInput,n=t.handleBlur,o=t.handleFocus,r=t.value;return[Object(i["createVNode"])(x,{type:"textarea",autosize:{maxRows:1},value:r,placeholder:"請輸入帳號",onInput:e,onFocus:o,onBlur:n,clearable:""},null,8,["value","onInput","onFocus","onBlur"])]})),_:1},8,["value","options"])]})),_:1}),Object(i["createVNode"])(O,{type:"info",class:"w-full",size:"large",strong:"",onClick:v.forgetPassword},{default:Object(i["withCtx"])((function(){return[a]})),_:1},8,["onClick"]),Object(i["createVNode"])(E,null,{default:Object(i["withCtx"])((function(){return[c]})),_:1}),Object(i["createElementVNode"])("div",l,[u,Object(i["createElementVNode"])("div",d,[Object(i["createVNode"])(O,{quaternary:"",type:"info",onClick:e[1]||(e[1]=function(e){return t.$router.push("/login")})},{default:Object(i["withCtx"])((function(){return[h]})),_:1})])])]})),_:1},8,["model","rules"])],2),Object(i["createElementVNode"])("div",{class:Object(i["normalizeClass"])([{StepHidden:g.step2},"vertical w-screen rounded-none bg-white p-7 shadow-none lg:right-32 lg:w-96 lg:rounded-2xl lg:p-10 lg:shadow-2xl"])},[Object(i["createVNode"])(M,{status:"success",size:"large"},{default:Object(i["withCtx"])((function(){return[f,m]})),footer:Object(i["withCtx"])((function(){return[Object(i["createVNode"])(O,{type:"info",onClick:e[2]||(e[2]=function(e){return t.$router.push("/login")}),class:"w-full",size:"large",strong:""},{default:Object(i["withCtx"])((function(){return[p]})),_:1})]})),_:1})],2)])])}n("d9e2"),n("ac1f"),n("00b4");var g=n("73b7"),v=n("2949"),x=n("ea75"),w={components:{LoginAnimation:x,VueCountdown:g["a"]},name:"",data:function(){return{step1:!1,step2:!0,form:{mail:""},rules:{mail:{required:!0,message:"請輸入電子信箱",trigger:["input"],validator:function(t,e){return/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)}}}}},methods:{forgetPassword:function(){var t=this;v["a"].sendPasswordResetEmail(this.form.mail).then((function(){t.step1=!t.step1,t.step2=!t.step2})).catch((function(t){console.log("錯誤",t)}))}},computed:{options:function(){return this.form.mail?this.form.mail.indexOf("@")>-1?[]:[this.form.mail+"@yahoo.com",this.form.mail+"@yahoo.com.tw",this.form.mail+"@gmail.com",this.form.mail+"@msn.com",this.form.mail+"@hotmail.com"]:[]}},setup:function(){return{LoginAnimation:x}}},y=(n("bf63"),n("6b0d")),O=n.n(y);const E=O()(w,[["render",b]]);e["default"]=E},"73b7":function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var i=n("7a23");
/*! vue-countdown v2.0.0 | (c) 2018-present Chen Fengyuan | MIT */const o=1e3,r=60*o,s=60*r,a=24*s,c="abort",l="end",u="progress",d="start",h="visibilitychange";var f=Object(i["defineComponent"])({name:"VueCountdown",props:{autoStart:{type:Boolean,default:!0},emitEvents:{type:Boolean,default:!0},interval:{type:Number,default:1e3,validator:t=>t>=0},now:{type:Function,default:()=>Date.now()},tag:{type:String,default:"span"},time:{type:Number,default:0,validator:t=>t>=0},transform:{type:Function,default:t=>t}},emits:[c,l,u,d],data(){return{counting:!1,endTime:0,totalMilliseconds:0,requestId:0}},computed:{days(){return Math.floor(this.totalMilliseconds/a)},hours(){return Math.floor(this.totalMilliseconds%a/s)},minutes(){return Math.floor(this.totalMilliseconds%s/r)},seconds(){return Math.floor(this.totalMilliseconds%r/o)},milliseconds(){return Math.floor(this.totalMilliseconds%o)},totalDays(){return this.days},totalHours(){return Math.floor(this.totalMilliseconds/s)},totalMinutes(){return Math.floor(this.totalMilliseconds/r)},totalSeconds(){return Math.floor(this.totalMilliseconds/o)}},watch:{$props:{deep:!0,immediate:!0,handler(){this.totalMilliseconds=this.time,this.endTime=this.now()+this.time,this.autoStart&&this.start()}}},mounted(){document.addEventListener(h,this.handleVisibilityChange)},beforeUnmount(){document.removeEventListener(h,this.handleVisibilityChange),this.pause()},methods:{start(){this.counting||(this.counting=!0,this.emitEvents&&this.$emit(d),"visible"===document.visibilityState&&this.continue())},continue(){if(!this.counting)return;const t=Math.min(this.totalMilliseconds,this.interval);if(t>0){let e,n;const i=o=>{e||(e=o),n||(n=o);const r=o-e;r>=t||r+(o-n)/2>=t?this.progress():this.requestId=requestAnimationFrame(i),n=o};this.requestId=requestAnimationFrame(i)}else this.end()},pause(){cancelAnimationFrame(this.requestId)},progress(){this.counting&&(this.totalMilliseconds-=this.interval,this.emitEvents&&this.totalMilliseconds>0&&this.$emit(u,{days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,milliseconds:this.milliseconds,totalDays:this.totalDays,totalHours:this.totalHours,totalMinutes:this.totalMinutes,totalSeconds:this.totalSeconds,totalMilliseconds:this.totalMilliseconds}),this.continue())},abort(){this.counting&&(this.pause(),this.counting=!1,this.emitEvents&&this.$emit(c))},end(){this.counting&&(this.pause(),this.totalMilliseconds=0,this.counting=!1,this.emitEvents&&this.$emit(l))},update(){this.counting&&(this.totalMilliseconds=Math.max(0,this.endTime-this.now()))},handleVisibilityChange(){switch(document.visibilityState){case"visible":this.update(),this.continue();break;case"hidden":this.pause();break}}},render(){return Object(i["h"])(this.tag,this.$slots.default?[this.$slots.default(this.transform({days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,milliseconds:this.milliseconds,totalDays:this.totalDays,totalHours:this.totalHours,totalMinutes:this.totalMinutes,totalSeconds:this.totalSeconds,totalMilliseconds:this.totalMilliseconds}))]:void 0)}})},9263:function(t,e,n){"use strict";var i=n("c65b"),o=n("e330"),r=n("577e"),s=n("ad6d"),a=n("9f7f"),c=n("5692"),l=n("7c73"),u=n("69f3").get,d=n("fce3"),h=n("107c"),f=c("native-string-replace",String.prototype.replace),m=RegExp.prototype.exec,p=m,b=o("".charAt),g=o("".indexOf),v=o("".replace),x=o("".slice),w=function(){var t=/a/,e=/b*/g;return i(m,t,"a"),i(m,e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),y=a.BROKEN_CARET,O=void 0!==/()??/.exec("")[1],E=w||O||y||d||h;E&&(p=function(t){var e,n,o,a,c,d,h,E=this,j=u(E),M=r(t),C=j.raw;if(C)return C.lastIndex=E.lastIndex,e=i(p,C,M),E.lastIndex=C.lastIndex,e;var N=j.groups,V=y&&E.sticky,I=i(s,E),k=E.source,R=0,S=M;if(V&&(I=v(I,"y",""),-1===g(I,"g")&&(I+="g"),S=x(M,E.lastIndex),E.lastIndex>0&&(!E.multiline||E.multiline&&"\n"!==b(M,E.lastIndex-1))&&(k="(?: "+k+")",S=" "+S,R++),n=new RegExp("^(?:"+k+")",I)),O&&(n=new RegExp("^"+k+"$(?!\\s)",I)),w&&(o=E.lastIndex),a=i(m,V?n:E,S),V?a?(a.input=x(a.input,R),a[0]=x(a[0],R),a.index=E.lastIndex,E.lastIndex+=a[0].length):E.lastIndex=0:w&&a&&(E.lastIndex=E.global?a.index+a[0].length:o),O&&a&&a.length>1&&i(f,a[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(a[c]=void 0)})),a&&N)for(a.groups=d=l(null),c=0;c<N.length;c++)h=N[c],d[h[0]]=a[h[1]];return a}),t.exports=p},"9f7f":function(t,e,n){var i=n("d039"),o=n("da84"),r=o.RegExp,s=i((function(){var t=r("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),a=s||i((function(){return!r("a","y").sticky})),c=s||i((function(){var t=r("^r","gy");return t.lastIndex=2,null!=t.exec("str")}));t.exports={BROKEN_CARET:c,MISSED_STICKY:a,UNSUPPORTED_Y:s}},ab36:function(t,e,n){var i=n("861d"),o=n("9112");t.exports=function(t,e){i(e)&&"cause"in e&&o(t,"cause",e.cause)}},ac1f:function(t,e,n){"use strict";var i=n("23e7"),o=n("9263");i({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},ad6d:function(t,e,n){"use strict";var i=n("825a");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b980:function(t,e,n){var i=n("d039"),o=n("5c6c");t.exports=!i((function(){var t=Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",o(1,7)),7!==t.stack)}))},bf63:function(t,e,n){"use strict";n("fb46")},c770:function(t,e,n){var i=n("e330"),o=i("".replace),r=function(t){return String(Error(t).stack)}("zxcasd"),s=/\n\s*at [^:]*:[^\n]*/,a=s.test(r);t.exports=function(t,e){if(a&&"string"==typeof t)while(e--)t=o(t,s,"");return t}},d9e2:function(t,e,n){var i=n("23e7"),o=n("da84"),r=n("2ba4"),s=n("e5cb"),a="WebAssembly",c=o[a],l=7!==Error("e",{cause:7}).cause,u=function(t,e){var n={};n[t]=s(t,e,l),i({global:!0,forced:l},n)},d=function(t,e){if(c&&c[t]){var n={};n[t]=s(a+"."+t,e,l),i({target:a,stat:!0,forced:l},n)}};u("Error",(function(t){return function(e){return r(t,this,arguments)}})),u("EvalError",(function(t){return function(e){return r(t,this,arguments)}})),u("RangeError",(function(t){return function(e){return r(t,this,arguments)}})),u("ReferenceError",(function(t){return function(e){return r(t,this,arguments)}})),u("SyntaxError",(function(t){return function(e){return r(t,this,arguments)}})),u("TypeError",(function(t){return function(e){return r(t,this,arguments)}})),u("URIError",(function(t){return function(e){return r(t,this,arguments)}})),d("CompileError",(function(t){return function(e){return r(t,this,arguments)}})),d("LinkError",(function(t){return function(e){return r(t,this,arguments)}})),d("RuntimeError",(function(t){return function(e){return r(t,this,arguments)}}))},e391:function(t,e,n){var i=n("577e");t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:i(t)}},e5cb:function(t,e,n){"use strict";var i=n("d066"),o=n("1a2d"),r=n("9112"),s=n("3a9b"),a=n("d2bb"),c=n("e893"),l=n("7156"),u=n("e391"),d=n("ab36"),h=n("c770"),f=n("b980"),m=n("c430");t.exports=function(t,e,n,p){var b=p?2:1,g=t.split("."),v=g[g.length-1],x=i.apply(null,g);if(x){var w=x.prototype;if(!m&&o(w,"cause")&&delete w.cause,!n)return x;var y=i("Error"),O=e((function(t,e){var n=u(p?e:t,void 0),i=p?new x(t):new x;return void 0!==n&&r(i,"message",n),f&&r(i,"stack",h(i.stack,2)),this&&s(w,this)&&l(i,this,O),arguments.length>b&&d(i,arguments[b]),i}));if(O.prototype=w,"Error"!==v&&(a?a(O,y):c(O,y,{name:!0})),c(O,x),!m)try{w.name!==v&&r(w,"name",v),w.constructor=O}catch(E){}return O}}},fb46:function(t,e,n){},fce3:function(t,e,n){var i=n("d039"),o=n("da84"),r=o.RegExp;t.exports=i((function(){var t=r(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))}}]);
//# sourceMappingURL=chunk-6ac8f065.34850ebd.js.map