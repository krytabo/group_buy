(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-83d079d2"],{"072a":function(e,t,n){"use strict";n("d1d1")},"408a":function(e,t,n){var i=n("e330");e.exports=i(1..valueOf)},"51b0":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return pa})),n.d(t,"b",(function(){return fa})),n.d(t,"c",(function(){return Un})),n.d(t,"d",(function(){return ba})),n.d(t,"e",(function(){return pc})),n.d(t,"f",(function(){return h})),n.d(t,"g",(function(){return po})),n.d(t,"h",(function(){return go})),n.d(t,"i",(function(){return Ca})),n.d(t,"j",(function(){return vc})),n.d(t,"k",(function(){return Tc})),n.d(t,"l",(function(){return Ba})),n.d(t,"m",(function(){return Va})),n.d(t,"n",(function(){return ac})),n.d(t,"o",(function(){return yc})),n.d(t,"p",(function(){return bc})),n.d(t,"q",(function(){return Pa})),n.d(t,"r",(function(){return wc})),n.d(t,"s",(function(){return Cc})),n.d(t,"t",(function(){return Ic})),n.d(t,"u",(function(){return Qa})),n.d(t,"v",(function(){return Ja})),n.d(t,"w",(function(){return La})),n.d(t,"x",(function(){return Aa})),n.d(t,"y",(function(){return Da})),n.d(t,"z",(function(){return Ma})),n.d(t,"A",(function(){return Fa})),n.d(t,"B",(function(){return ja})),n.d(t,"C",(function(){return Za})),n.d(t,"D",(function(){return tc})),n.d(t,"E",(function(){return ic})),n.d(t,"F",(function(){return sc})),n.d(t,"G",(function(){return Ta})),n.d(t,"H",(function(){return cc})),n.d(t,"I",(function(){return va})),n.d(t,"J",(function(){return wa})),n.d(t,"K",(function(){return ka})),n.d(t,"L",(function(){return Pc})),n.d(t,"M",(function(){return Ec})),n.d(t,"N",(function(){return Oa})),n.d(t,"O",(function(){return Ea})),n.d(t,"P",(function(){return Ia})),n.d(t,"Q",(function(){return za})),n.d(t,"R",(function(){return Ha})),n.d(t,"S",(function(){return Sa}));var i=n("589b"),r=n("22e5"),s=n("1fd5"),o=n("e691");const a="@firebase/database",c="0.13.0";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let l="";function h(e){l=e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Object(s["T"])(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:Object(s["M"])(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return Object(s["m"])(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p=function(e){try{if("undefined"!==typeof window&&"undefined"!==typeof window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new u(t)}}catch(t){}return new d},f=p("localStorage"),g=p("sessionStorage"),_=new o["b"]("@firebase/database"),m=function(){let e=1;return function(){return e++}}(),b=function(e){const t=Object(s["S"])(e),n=new s["d"];n.update(t);const i=n.digest();return s["h"].encodeByteArray(i)},y=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"===typeof i&&"number"===typeof i.length?t+=y.apply(null,i):t+="object"===typeof i?Object(s["T"])(i):i,t+=" "}return t};let v=null,w=!0;const C=function(e,t){Object(s["f"])(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(_.logLevel=o["a"].VERBOSE,v=_.log.bind(_),t&&g.set("logging_enabled",!0)):"function"===typeof e?v=e:(v=null,g.remove("logging_enabled"))},T=function(...e){if(!0===w&&(w=!1,null===v&&!0===g.get("logging_enabled")&&C(!0)),v){const t=y.apply(null,e);v(t)}},k=function(e){return function(...t){T(e,...t)}},O=function(...e){const t="FIREBASE INTERNAL ERROR: "+y(...e);_.error(t)},E=function(...e){const t="FIREBASE FATAL ERROR: "+y(...e);throw _.error(t),new Error(t)},I=function(...e){const t="FIREBASE WARNING: "+y(...e);_.warn(t)},S=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&I("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},P=function(e){return"number"===typeof e&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},R=function(e){if(Object(s["G"])()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&n()}),window.attachEvent("onload",n))}},N="[MIN_NAME]",x="[MAX_NAME]",j=function(e,t){if(e===t)return 0;if(e===N||t===x)return-1;if(t===N||e===x)return 1;{const n=$(e),i=$(t);return null!==n?null!==i?n-i===0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},A=function(e,t){return e===t?0:e<t?-1:1},D=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Object(s["T"])(t))},M=function(e){if("object"!==typeof e||null===e)return Object(s["T"])(e);const t=[];for(const i in e)t.push(i);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=Object(s["T"])(t[i]),n+=":",n+=M(e[t[i]]);return n+="}",n},F=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function L(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const U=function(e){Object(s["f"])(!P(e),"Invalid JSON number");const t=11,n=52,i=(1<<t-1)-1;let r,o,a,c,l;0===e?(o=0,a=0,r=1/e===-1/0?1:0):(r=e<0,e=Math.abs(e),e>=Math.pow(2,1-i)?(c=Math.min(Math.floor(Math.log(e)/Math.LN2),i),o=c+i,a=Math.round(e*Math.pow(2,n-c)-Math.pow(2,n))):(o=0,a=Math.round(e/Math.pow(2,1-i-n))));const h=[];for(l=n;l;l-=1)h.push(a%2?1:0),a=Math.floor(a/2);for(l=t;l;l-=1)h.push(o%2?1:0),o=Math.floor(o/2);h.push(r?1:0),h.reverse();const u=h.join("");let d="";for(l=0;l<64;l+=8){let e=parseInt(u.substr(l,8),2).toString(16);1===e.length&&(e="0"+e),d+=e}return d.toLowerCase()},q=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},B=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};function W(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}const V=new RegExp("^-?(0*)\\d{1,10}$"),K=-2147483648,H=2147483647,$=function(e){if(V.test(e)){const t=Number(e);if(t>=K&&t<=H)return t}return null},z=function(e){try{e()}catch(t){setTimeout(()=>{const e=t.stack||"";throw I("Exception was thrown by user callback.",e),t},Math.floor(0))}},G=function(){const e="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Q=function(e,t){const n=setTimeout(e,t);return"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Y{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null===t||void 0===t?void 0:t.getImmediate({optional:!0}),this.appCheck||null===t||void 0===t||t.get().then(e=>this.appCheck=e)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){I(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(e=>this.auth_=e)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(e=>e&&"auth/token-not-initialized"===e.code?(T("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',I(e)}}class X{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}X.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Z="5",ee="v",te="s",ne="r",ie="f",re=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,se="ls",oe="p",ae="ac",ce="websocket",le="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class he{constructor(e,t,n,i,r=!1,s="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=f.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&f.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?"?ns="+this.namespace:"";return`${e}${this.host}/${t}`}}function ue(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function de(e,t,n){let i;if(Object(s["f"])("string"===typeof t,"typeof type must == string"),Object(s["f"])("object"===typeof n,"typeof params must == object"),t===ce)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==le)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}ue(e)&&(n["ns"]=e.namespace);const r=[];return L(n,(e,t)=>{r.push(e+"="+t)}),i+r.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(){this.counters_={}}incrementCounter(e,t=1){Object(s["m"])(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Object(s["p"])(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fe={},ge={};function _e(e){const t=e.toString();return fe[t]||(fe[t]=new pe),fe[t]}function me(e,t){const n=e.toString();return ge[n]||(ge[n]=t()),ge[n]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){this.pendingResponses[e]=t;while(this.pendingResponses[this.currentResponseNum]){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&z(()=>{this.onMessage_(e[t])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye="start",ve="close",we="pLPCommand",Ce="pRTLPCB",Te="id",ke="pw",Oe="ser",Ee="cb",Ie="seg",Se="ts",Pe="d",Re="dframe",Ne=1870,xe=30,je=Ne-xe,Ae=25e3,De=3e4;class Me{constructor(e,t,n,i,r,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=k(e),this.stats_=_e(t),this.urlFn=e=>(this.appCheckToken&&(e[ae]=this.appCheckToken),de(t,le,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new be(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(De)),R(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Fe((...e)=>{const[t,n,i,r,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===ye)this.id=n,this.password=i;else{if(t!==ve)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,()=>{this.onClosed_()})):this.onClosed_()}},(...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)},()=>{this.onClosed_()},this.urlFn);const e={};e[ye]="t",e[Oe]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e[Ee]=this.scriptTagHolder.uniqueCallbackIdentifier),e[ee]=Z,this.transportSessionId&&(e[te]=this.transportSessionId),this.lastSessionId&&(e[se]=this.lastSessionId),this.applicationId&&(e[oe]=this.applicationId),this.appCheckToken&&(e[ae]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&re.test(location.hostname)&&(e[ne]=ie);const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Me.forceAllow_=!0}static forceDisallow(){Me.forceDisallow_=!0}static isAvailable(){return!Object(s["G"])()&&(!!Me.forceAllow_||!Me.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!q()&&!B())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Object(s["T"])(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Object(s["j"])(t),i=F(n,je);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(Object(s["G"])())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[Re]="t",n[Te]=e,n[ke]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Object(s["T"])(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Fe{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,Object(s["G"])())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=m(),window[we+this.uniqueCallbackIdentifier]=e,window[Ce+this.uniqueCallbackIdentifier]=t,this.myIFrame=Fe.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){const e=document.domain;n='<script>document.domain="'+e+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(r){T("frame writing exception"),r.stack&&T(r.stack),T(r)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{const t=e.contentWindow.document;t||T("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){this.myID=e,this.myPW=t,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Te]=this.myID,e[ke]=this.myPW,e[Oe]=this.currentSerial;let t=this.urlFn(e),n="",i=0;while(this.pendingSegs.length>0){const e=this.pendingSegs[0];if(!(e.d.length+xe+n.length<=Ne))break;{const e=this.pendingSegs.shift();n=n+"&"+Ie+i+"="+e.seg+"&"+Se+i+"="+e.ts+"&"+Pe+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(Ae)),r=()=>{clearTimeout(i),n()};this.addTag(e,r)}addTag(e,t){Object(s["G"])()?this.doNodeLongPoll(e,t):setTimeout(()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{T("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}},Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le=16384,Ue=45e3;let qe=null;"undefined"!==typeof MozWebSocket?qe=MozWebSocket:"undefined"!==typeof WebSocket&&(qe=WebSocket);class Be{constructor(e,t,n,i,r,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=k(this.connId),this.stats_=_e(t),this.connURL=Be.connectionURL_(t,s,o,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i,r){const o={};return o[ee]=Z,!Object(s["G"])()&&"undefined"!==typeof location&&location.hostname&&re.test(location.hostname)&&(o[ne]=ie),t&&(o[te]=t),n&&(o[se]=n),i&&(o[ae]=i),r&&(o[oe]=r),de(e,ce,o)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,f.set("previous_websocket_failure",!0);try{let t;if(Object(s["G"])()){const t=this.nodeAdmin?"AdminNode":"Node",n={headers:{"User-Agent":`Firebase/${Z}/${l}/${e.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}};this.authToken&&(n.headers["Authorization"]="Bearer "+this.authToken),this.appCheckToken&&(n.headers["X-Firebase-AppCheck"]=this.appCheckToken);const i=Object({NODE_ENV:"production",BASE_URL:"/group_buy/"}),r=0===this.connURL.indexOf("wss://")?i["HTTPS_PROXY"]||i["https_proxy"]:i["HTTP_PROXY"]||i["http_proxy"];r&&(n["proxy"]={origin:r})}this.mySock=new qe(this.connURL,[],t)}catch(i){this.log_("Error instantiating WebSocket.");const e=i.message||i.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){Be.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==qe&&!Be.forceDisallow_}static previouslyFailed(){return f.isInMemoryStorage||!0===f.get("previous_websocket_failure")}markConnectionHealthy(){f.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=Object(s["M"])(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Object(s["f"])(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e["data"];if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=Object(s["T"])(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=F(t,Le);n.length>1&&this.sendString_(String(n.length));for(let i=0;i<n.length;i++)this.sendString_(n[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Ue))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Be.responsesRequiredToBeHealthy=2,Be.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class We{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Me,Be]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Be&&Be["isAvailable"]();let n=t&&!Be.previouslyFailed();if(e.webSocketOnly&&(t||I("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Be];else{const e=this.transports_=[];for(const t of We.ALL_TRANSPORTS)t&&t["isAvailable"]()&&e.push(t);We.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}We.globalTransportInitialized_=!1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ve=6e4,Ke=5e3,He=10240,$e=102400,ze="t",Ge="d",Qe="s",Ye="r",Je="e",Xe="o",Ze="a",et="n",tt="p",nt="h";class it{constructor(e,t,n,i,r,s,o,a,c,l){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=k("c:"+this.id+":"),this.transportManager_=new We(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},Math.floor(0));const i=e["healthyTimeout"]||0;i>0&&(this.healthyTimeout_=Q(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>$e?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>He?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ze in e){const t=e[ze];t===Ze?this.upgradeIfSecondaryHealthy_():t===Ye?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):t===Xe&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=D("t",e),n=D("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:tt,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ze,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:et,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=D("t",e),n=D("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=D(ze,e);if(Ge in e){const n=e[Ge];if(t===nt)this.onHandshake_(n);else if(t===et){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Qe?this.onConnectionShutdown_(n):t===Ye?this.onReset_(n):t===Je?O("Server Error: "+n):t===Xe?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):O("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Z!==n&&I("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Q(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Ve))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Q(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Ke))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:tt,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(f.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.allowedEvents_=e,this.listeners_={},Object(s["f"])(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!n||n===i[r].context))return void i.splice(r,1)}validateEventType_(e){Object(s["f"])(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends st{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||Object(s["E"])()||(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ot}getInitialEvent(e){return Object(s["f"])("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at=32,ct=768;class lt{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function ht(){return new lt("")}function ut(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function dt(e){return e.pieces_.length-e.pieceNum_}function pt(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new lt(e.pieces_,t)}function ft(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function gt(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function _t(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function mt(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new lt(t,0)}function bt(e,t){const n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof lt)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new lt(n,0)}function yt(e){return e.pieceNum_>=e.pieces_.length}function vt(e,t){const n=ut(e),i=ut(t);if(null===n)return t;if(n===i)return vt(pt(e),pt(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function wt(e,t){const n=_t(e,0),i=_t(t,0);for(let r=0;r<n.length&&r<i.length;r++){const e=j(n[r],i[r]);if(0!==e)return e}return n.length===i.length?0:n.length<i.length?-1:1}function Ct(e,t){if(dt(e)!==dt(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Tt(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(dt(e)>dt(t))return!1;while(n<e.pieces_.length){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class kt{constructor(e,t){this.errorPrefix_=t,this.parts_=_t(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=Object(s["R"])(this.parts_[n]);It(this)}}function Ot(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Object(s["R"])(t),It(e)}function Et(e){const t=e.parts_.pop();e.byteLength_-=Object(s["R"])(t),e.parts_.length>0&&(e.byteLength_-=1)}function It(e){if(e.byteLength_>ct)throw new Error(e.errorPrefix_+"has a key path longer than "+ct+" bytes ("+e.byteLength_+").");if(e.parts_.length>at)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+at+") or object contains a cycle "+St(e))}function St(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends st{constructor(){let e,t;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(t="visibilitychange",e="hidden"):"undefined"!==typeof document["mozHidden"]?(t="mozvisibilitychange",e="mozHidden"):"undefined"!==typeof document["msHidden"]?(t="msvisibilitychange",e="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))},!1)}static getInstance(){return new Pt}getInitialEvent(e){return Object(s["f"])("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt=1e3,Nt=3e5,xt=3e3,jt=3e4,At=1.3,Dt=3e4,Mt="server_kill",Ft=3;class Lt extends rt{constructor(e,t,n,i,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Lt.nextPersistentConnectionId_++,this.log_=k("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Rt,this.maxReconnectDelay_=Nt,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Object(s["G"])())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Pt.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&ot.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(Object(s["T"])(r)),Object(s["f"])(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new s["a"],n={p:e._path.toString(),q:e._queryObject},i={action:"g",request:n,onComplete:e=>{const i=e["d"];"ok"===e["s"]?(this.onDataUpdate_(n["p"],i,!1,null),t.resolve(i)):t.reject(i)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const e=this.outstandingGets_[r];void 0!==e&&i===e&&(delete this.outstandingGets_[r],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+r+" timed out on connection"),t.reject(new Error("Client is offline.")))},xt),this.connected_&&this.sendGet_(r),t.promise}listen(e,t,n,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),Object(s["f"])(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Object(s["f"])(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const r={p:n},s="q";e.tag&&(r["q"]=t._queryObject,r["t"]=e.tag),r["h"]=e.hashFn(),this.sendRequest(s,r,r=>{const s=r["d"],o=r["s"];Lt.warnOnListenWarnings_(s,t);const a=this.listens.get(n)&&this.listens.get(n).get(i);a===e&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,s))})}static warnOnListenWarnings_(e,t){if(e&&"object"===typeof e&&Object(s["m"])(e,"w")){const n=Object(s["Q"])(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();I(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at `+n+" to your security rules for better performance.")}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){const t=e&&40===e.length;(t||Object(s["x"])(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=jt)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Object(s["K"])(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(t,n,t=>{const n=t["s"],i=t["d"]||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e["s"],n=e["d"]||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),Object(s["f"])(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const r=this.removeListen_(n,i);r&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},s="n";i&&(r["q"]=n,r["t"]=i),this.sendRequest(s,r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,e=>{i&&setTimeout(()=>{i(e["s"],e["d"])},Math.floor(0))})}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();const s={p:t,d:n};void 0!==r&&(s["h"]=r),this.outstandingPuts_.push({action:e,request:s,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n["s"],n["d"])})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,e=>{const t=e["s"];if("ok"!==t){const t=e["d"];this.log_("reportStats","Error sending stats: "+t)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Object(s["T"])(e));const t=e["r"],n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e["b"]))}else{if("error"in e)throw"A server-side error has occurred: "+e["error"];"a"in e&&this.onDataPush_(e["a"],e["b"])}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t["p"],t["d"],!1,t["t"]):"m"===e?this.onDataUpdate_(t["p"],t["d"],!0,t["t"]):"c"===e?this.onListenRevoked_(t["p"],t["q"]):"ac"===e?this.onAuthRevoked_(t["s"],t["d"]):"apc"===e?this.onAppCheckRevoked_(t["s"],t["d"]):"sd"===e?this.onSecurityDebugPacket_(t):O("Unrecognized action received from server: "+Object(s["T"])(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Object(s["f"])(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Rt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Rt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const e=(new Date).getTime()-this.lastConnectionEstablishedTime_;e>Dt&&(this.reconnectDelay_=Rt),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*At)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Lt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,n())},l=function(e){Object(s["f"])(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:c,sendRequest:l};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[s,c]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?T("getToken() completed but was canceled"):(T("getToken() completed. Creating connection."),this.authToken_=s&&s.accessToken,this.appCheckToken_=c&&c.token,a=new it(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,e=>{I(e+" ("+this.repoInfo_.toString()+")"),this.interrupt(Mt)},r))}catch(O){this.log_("Failed to get token: "+O),o||(this.repoInfo_.nodeAdmin&&I(O),c())}}}interrupt(e){T("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){T("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Object(s["B"])(this.interruptReasons_)&&(this.reconnectDelay_=Rt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map(e=>M(e)).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new lt(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){T("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ft&&(this.reconnectDelay_=jt,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){T("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ft&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);while(this.onDisconnectRequestQueue_.length){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";Object(s["G"])()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+l.replace(/\./g,"-")]=1,Object(s["E"])()?e["framework.cordova"]=1:Object(s["H"])()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ot.getInstance().currentlyOnline();return Object(s["B"])(this.interruptReasons_)&&e}}Lt.nextPersistentConnectionId_=0,Lt.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ut{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Ut(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Ut(N,e),i=new Ut(N,t);return 0!==this.compare(n,i)}minPost(){return Ut.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bt;class Wt extends qt{static get __EMPTY_NODE(){return Bt}static set __EMPTY_NODE(e){Bt=e}compare(e,t){return j(e.name,t.name)}isDefinedOn(e){throw Object(s["g"])("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Ut.MIN}maxPost(){return new Ut(x,Bt)}makePost(e,t){return Object(s["f"])("string"===typeof e,"KeyIndex indexValue must always be a string."),new Ut(e,Bt)}toString(){return".key"}}const Vt=new Wt;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let s=1;while(!e.isEmpty())if(e=e,s=t?n(e.key,t):1,i&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_){t=t.left;while(!t.isEmpty())this.nodeStack_.push(t),t=t.right}else{t=t.right;while(!t.isEmpty())this.nodeStack_.push(t),t=t.left}return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ht{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:Ht.RED,this.left=null!=i?i:zt.EMPTY_NODE,this.right=null!=r?r:zt.EMPTY_NODE}copy(e,t,n,i,r){return new Ht(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return zt.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return zt.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ht.RED=!0,Ht.BLACK=!1;class $t{copy(e,t,n,i,r){return this}insert(e,t,n){return new Ht(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class zt{constructor(e,t=zt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new zt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Ht.BLACK,null,null))}remove(e){return new zt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ht.BLACK,null,null))}get(e){let t,n=this.root_;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Kt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Kt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Kt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Kt(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gt(e,t){return j(e.name,t.name)}function Qt(e,t){return j(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yt;function Jt(e){Yt=e}zt.EMPTY_NODE=new $t;const Xt=function(e){return"number"===typeof e?"number:"+U(e):"string:"+e},Zt=function(e){if(e.isLeafNode()){const t=e.val();Object(s["f"])("string"===typeof t||"number"===typeof t||"object"===typeof t&&Object(s["m"])(t,".sv"),"Priority must be a string or number.")}else Object(s["f"])(e===Yt||e.isEmpty(),"priority of unexpected type.");Object(s["f"])(e===Yt||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let en,tn,nn;class rn{constructor(e,t=rn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,Object(s["f"])(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Zt(this.priorityNode_)}static set __childrenNodeConstructor(e){en=e}static get __childrenNodeConstructor(){return en}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new rn(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:rn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return yt(e)?this:".priority"===ut(e)?this.priorityNode_:rn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:rn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=ut(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(Object(s["f"])(".priority"!==n||1===dt(e),".priority must be the last token in a path"),this.updateImmediateChild(n,rn.__childrenNodeConstructor.EMPTY_NODE.updateChild(pt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Xt(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?U(this.value_):this.value_,this.lazyHash_=b(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===rn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof rn.__childrenNodeConstructor?-1:(Object(s["f"])(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=rn.VALUE_TYPE_ORDER.indexOf(t),r=rn.VALUE_TYPE_ORDER.indexOf(n);return Object(s["f"])(i>=0,"Unknown leaf type: "+t),Object(s["f"])(r>=0,"Unknown leaf type: "+n),i===r?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}function sn(e){tn=e}function on(e){nn=e}rn.VALUE_TYPE_ORDER=["object","boolean","number","string"];class an extends qt{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?j(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Ut.MIN}maxPost(){return new Ut(x,new rn("[PRIORITY-POST]",nn))}makePost(e,t){const n=tn(e);return new Ut(t,new rn("[PRIORITY-POST]",n))}toString(){return".priority"}}const cn=new an,ln=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){const t=e=>parseInt(Math.log(e)/ln,10),n=e=>parseInt(Array(e+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=n(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const un=function(e,t,n,i){e.sort(t);const r=function(t,i){const s=i-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new Ht(a,o.node,Ht.BLACK,null,null);{const c=parseInt(s/2,10)+t,l=r(t,c),h=r(c+1,i);return o=e[c],a=n?n(o):o,new Ht(a,o.node,Ht.BLACK,l,h)}},s=function(t){let i=null,s=null,o=e.length;const a=function(t,i){const s=o-t,a=o;o-=t;const l=r(s+1,a),h=e[s],u=n?n(h):h;c(new Ht(u,h.node,i,null,l))},c=function(e){i?(i.left=e,i=e):(s=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,Ht.BLACK):(a(i,Ht.BLACK),a(i,Ht.RED))}return s},o=new hn(e.length),a=s(o);return new zt(i||t,a)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dn;const pn={};class fn{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return Object(s["f"])(pn&&cn,"ChildrenNode.ts has not been loaded"),dn=dn||new fn({".priority":pn},{".priority":cn}),dn}get(e){const t=Object(s["Q"])(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof zt?t:null}hasIndex(e){return Object(s["m"])(this.indexSet_,e.toString())}addIndex(e,t){Object(s["f"])(e!==Vt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const r=t.getIterator(Ut.Wrap);let o,a=r.getNext();while(a)i=i||e.isDefinedOn(a.node),n.push(a),a=r.getNext();o=i?un(n,e.getCompare()):pn;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const h=Object.assign({},this.indexes_);return h[c]=o,new fn(h,l)}addToIndexes(e,t){const n=Object(s["N"])(this.indexes_,(n,i)=>{const r=Object(s["Q"])(this.indexSet_,i);if(Object(s["f"])(r,"Missing index implementation for "+i),n===pn){if(r.isDefinedOn(e.node)){const n=[],i=t.getIterator(Ut.Wrap);let s=i.getNext();while(s)s.name!==e.name&&n.push(s),s=i.getNext();return n.push(e),un(n,r.getCompare())}return pn}{const i=t.get(e.name);let r=n;return i&&(r=r.remove(new Ut(e.name,i))),r.insert(e,e.node)}});return new fn(n,this.indexSet_)}removeFromIndexes(e,t){const n=Object(s["N"])(this.indexes_,n=>{if(n===pn)return n;{const i=t.get(e.name);return i?n.remove(new Ut(e.name,i)):n}});return new fn(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gn;class _n{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Zt(this.priorityNode_),this.children_.isEmpty()&&Object(s["f"])(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return gn||(gn=new _n(new zt(Qt),null,fn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||gn}updatePriority(e){return this.children_.isEmpty()?this:new _n(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?gn:t}}getChild(e){const t=ut(e);return null===t?this:this.getImmediateChild(t).getChild(pt(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(Object(s["f"])(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Ut(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(n,this.children_));const s=i.isEmpty()?gn:this.priorityNode_;return new _n(i,s,r)}}updateChild(e,t){const n=ut(e);if(null===n)return t;{Object(s["f"])(".priority"!==ut(e)||1===dt(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(pt(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,r=!0;if(this.forEachChild(cn,(s,o)=>{t[s]=o.val(e),n++,r&&_n.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):r=!1}),!e&&r&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Xt(this.getPriority().val())+":"),this.forEachChild(cn,(t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)}),this.lazyHash_=""===e?"":b(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new Ut(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Ut(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Ut(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal(e=>t(e.name,e.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,e=>e);{const n=this.children_.getIteratorFrom(e.name,Ut.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)<0)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,e=>e);{const n=this.children_.getReverseIteratorFrom(e.name,Ut.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)>0)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===bn?-1:0}withIndex(e){if(e===Vt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new _n(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Vt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(cn),n=t.getIterator(cn);let i=e.getNext(),r=n.getNext();while(i&&r){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=e.getNext(),r=n.getNext()}return null===i&&null===r}return!1}return!1}}resolveIndex_(e){return e===Vt?null:this.indexMap_.get(e.toString())}}_n.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class mn extends _n{constructor(){super(new zt(Qt),_n.EMPTY_NODE,fn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return _n.EMPTY_NODE}isEmpty(){return!1}}const bn=new mn;Object.defineProperties(Ut,{MIN:{value:new Ut(N,_n.EMPTY_NODE)},MAX:{value:new Ut(x,bn)}}),Wt.__EMPTY_NODE=_n.EMPTY_NODE,rn.__childrenNodeConstructor=_n,Jt(bn),on(bn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const yn=!0;function vn(e,t=null){if(null===e)return _n.EMPTY_NODE;if("object"===typeof e&&".priority"in e&&(t=e[".priority"]),Object(s["f"])(null===t||"string"===typeof t||"number"===typeof t||"object"===typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"===typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!==typeof e||".sv"in e){const n=e;return new rn(n,vn(t))}if(e instanceof Array||!yn){let n=_n.EMPTY_NODE;return L(e,(t,i)=>{if(Object(s["m"])(e,t)&&"."!==t.substring(0,1)){const e=vn(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}}),n.updatePriority(vn(t))}{const n=[];let i=!1;const r=e;if(L(r,(e,t)=>{if("."!==e.substring(0,1)){const r=vn(t);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new Ut(e,r)))}}),0===n.length)return _n.EMPTY_NODE;const s=un(n,Gt,e=>e.name,Qt);if(i){const e=un(n,cn.getCompare());return new _n(s,vn(t),new fn({".priority":e},{".priority":cn}))}return new _n(s,vn(t),fn.Default)}}sn(vn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wn extends qt{constructor(e){super(),this.indexPath_=e,Object(s["f"])(!yt(e)&&".priority"!==ut(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?j(e.name,t.name):r}makePost(e,t){const n=vn(e),i=_n.EMPTY_NODE.updateChild(this.indexPath_,n);return new Ut(t,i)}maxPost(){const e=_n.EMPTY_NODE.updateChild(this.indexPath_,bn);return new Ut(x,e)}toString(){return _t(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends qt{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?j(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Ut.MIN}maxPost(){return Ut.MAX}makePost(e,t){const n=vn(e);return new Ut(t,n)}toString(){return".value"}}const Tn=new Cn,kn="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",On="-",En="z",In=786,Sn=function(){let e=0;const t=[];return function(n){const i=n===e;let r;e=n;const o=new Array(8);for(r=7;r>=0;r--)o[r]=kn.charAt(n%64),n=Math.floor(n/64);Object(s["f"])(0===n,"Cannot push at time == 0");let a=o.join("");if(i){for(r=11;r>=0&&63===t[r];r--)t[r]=0;t[r]++}else for(r=0;r<12;r++)t[r]=Math.floor(64*Math.random());for(r=0;r<12;r++)a+=kn.charAt(t[r]);return Object(s["f"])(20===a.length,"nextPushId: Length should be 20."),a}}(),Pn=function(e){if(e===""+H)return On;const t=$(e);if(null!=t)return""+(t+1);const n=new Array(e.length);for(let o=0;o<n.length;o++)n[o]=e.charAt(o);if(n.length<In)return n.push(On),n.join("");let i=n.length-1;while(i>=0&&n[i]===En)i--;if(-1===i)return x;const r=n[i],s=kn.charAt(kn.indexOf(r)+1);return n[i]=s,n.slice(0,i+1).join("")},Rn=function(e){if(e===""+K)return N;const t=$(e);if(null!=t)return""+(t-1);const n=new Array(e.length);for(let i=0;i<n.length;i++)n[i]=e.charAt(i);return n[n.length-1]===On?1===n.length?""+H:(delete n[n.length-1],n.join("")):(n[n.length-1]=kn.charAt(kn.indexOf(n[n.length-1])-1),n.join("")+En.repeat(In-n.length))};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Nn(e){return{type:"value",snapshotNode:e}}function xn(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function jn(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function An(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function Dn(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e){this.index_=e}updateChild(e,t,n,i,r,o){Object(s["f"])(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(n.getChild(i))&&a.isEmpty()===n.isEmpty()?e:(null!=o&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(jn(t,a)):Object(s["f"])(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(xn(t,n)):o.trackChildChange(An(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(cn,(e,i)=>{t.hasChild(e)||n.trackChildChange(jn(e,i))}),t.isLeafNode()||t.forEachChild(cn,(t,i)=>{if(e.hasChild(t)){const r=e.getImmediateChild(t);r.equals(i)||n.trackChildChange(An(t,i,r))}else n.trackChildChange(xn(t,i))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?_n.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this.indexedFilter_=new Mn(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Fn.getStartPost_(e),this.endPost_=Fn.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,i,r,s){return this.matches(new Ut(t,n))||(n=_n.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,r,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=_n.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(_n.EMPTY_NODE);const r=this;return t.forEachChild(cn,(e,t)=>{r.matches(new Ut(e,t))||(i=i.updateImmediateChild(e,_n.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this.rangedFilter_=new Fn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,i,r,s){return this.rangedFilter_.matches(new Ut(t,n))||(n=_n.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,r,s):this.fullLimitUpdateChild_(e,t,n,r,s)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=_n.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=_n.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;while(e.hasNext()&&n<this.limit_){const t=e.getNext();let r;if(r=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0,!r)break;i=i.updateImmediateChild(t.name,t.node),n++}}else{let e,n,r,s;if(i=t.withIndex(this.index_),i=i.updatePriority(_n.EMPTY_NODE),this.reverse_){s=i.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();r=(e,n)=>t(n,e)}else s=i.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),r=this.index_.getCompare();let o=0,a=!1;while(s.hasNext()){const t=s.getNext();!a&&r(e,t)<=0&&(a=!0);const c=a&&o<this.limit_&&r(t,n)<=0;c?o++:i=i.updateImmediateChild(t.name,_n.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,r){let o;if(this.reverse_){const e=this.index_.getCompare();o=(t,n)=>e(n,t)}else o=this.index_.getCompare();const a=e;Object(s["f"])(a.numChildren()===this.limit_,"");const c=new Ut(t,n),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(c);if(a.hasChild(t)){const e=a.getImmediateChild(t);let s=i.getChildAfterChild(this.index_,l,this.reverse_);while(null!=s&&(s.name===t||a.hasChild(s.name)))s=i.getChildAfterChild(this.index_,s,this.reverse_);const u=null==s?1:o(s,c),d=h&&!n.isEmpty()&&u>=0;if(d)return null!=r&&r.trackChildChange(An(t,n,e)),a.updateImmediateChild(t,n);{null!=r&&r.trackChildChange(jn(t,e));const n=a.updateImmediateChild(t,_n.EMPTY_NODE),i=null!=s&&this.rangedFilter_.matches(s);return i?(null!=r&&r.trackChildChange(xn(s.name,s.node)),n.updateImmediateChild(s.name,s.node)):n}}return n.isEmpty()?e:h&&o(l,c)>=0?(null!=r&&(r.trackChildChange(jn(l.name,l.node)),r.trackChildChange(xn(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(l.name,_n.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=cn}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return Object(s["f"])(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Object(s["f"])(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:N}hasEnd(){return this.endSet_}getIndexEndValue(){return Object(s["f"])(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Object(s["f"])(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:x}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return Object(s["f"])(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===cn}copy(){const e=new Un;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function qn(e){return e.loadsAllData()?new Mn(e.getIndex()):e.hasLimit()?new Ln(e):new Fn(e)}function Bn(e,t){const n=e.copy();return n.limitSet_=!0,n.limit_=t,n.viewFrom_="l",n}function Wn(e,t){const n=e.copy();return n.limitSet_=!0,n.limit_=t,n.viewFrom_="r",n}function Vn(e,t,n){const i=e.copy();return i.startSet_=!0,void 0===t&&(t=null),i.indexStartValue_=t,null!=n?(i.startNameSet_=!0,i.indexStartName_=n):(i.startNameSet_=!1,i.indexStartName_=""),i}function Kn(e,t,n){let i;if(e.index_===Vt)"string"===typeof t&&(t=Pn(t)),i=Vn(e,t,n);else{let r;r=null==n?x:Pn(n),i=Vn(e,t,r)}return i.startAfterSet_=!0,i}function Hn(e,t,n){const i=e.copy();return i.endSet_=!0,void 0===t&&(t=null),i.indexEndValue_=t,void 0!==n?(i.endNameSet_=!0,i.indexEndName_=n):(i.endNameSet_=!1,i.indexEndName_=""),i}function $n(e,t,n){let i,r;return e.index_===Vt?("string"===typeof t&&(t=Rn(t)),r=Hn(e,t,n)):(i=null==n?N:Rn(n),r=Hn(e,t,i)),r.endBeforeSet_=!0,r}function zn(e,t){const n=e.copy();return n.index_=t,n}function Gn(e){const t={};if(e.isDefault())return t;let n;return e.index_===cn?n="$priority":e.index_===Tn?n="$value":e.index_===Vt?n="$key":(Object(s["f"])(e.index_ instanceof wn,"Unrecognized index type!"),n=e.index_.toString()),t["orderBy"]=Object(s["T"])(n),e.startSet_&&(t["startAt"]=Object(s["T"])(e.indexStartValue_),e.startNameSet_&&(t["startAt"]+=","+Object(s["T"])(e.indexStartName_))),e.endSet_&&(t["endAt"]=Object(s["T"])(e.indexEndValue_),e.endNameSet_&&(t["endAt"]+=","+Object(s["T"])(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t["limitToFirst"]=e.limit_:t["limitToLast"]=e.limit_),t}function Qn(e){const t={};if(e.startSet_&&(t["sp"]=e.indexStartValue_,e.startNameSet_&&(t["sn"]=e.indexStartName_)),e.endSet_&&(t["ep"]=e.indexEndValue_,e.endNameSet_&&(t["en"]=e.indexEndName_)),e.limitSet_){t["l"]=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t["vf"]=n}return e.index_!==cn&&(t["i"]=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends rt{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=k("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(Object(s["f"])(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Yn.getListenId_(e,n),a={};this.listens_[o]=a;const c=Gn(e._queryParams);this.restRequest_(r+".json",c,(e,t)=>{let c=t;if(404===e&&(c=null,e=null),null===e&&this.onDataUpdate_(r,c,!1,n),Object(s["Q"])(this.listens_,o)===a){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}})}unlisten(e,t){const n=Yn.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Gn(e._queryParams),n=e._path.toString(),i=new s["a"];return this.restRequest_(n+".json",t,(e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(new Error(r))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t["auth"]=i.accessToken),r&&r.token&&(t["ac"]=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Object(s["O"])(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let t=null;if(a.status>=200&&a.status<300){try{t=Object(s["M"])(a.responseText)}catch(e){I("Failed to parse JSON response for "+o+": "+a.responseText)}n(null,t)}else 401!==a.status&&404!==a.status&&I("Got unsuccessful REST response for "+o+" Status: "+a.status),n(a.status);n=null}},a.open("GET",o,!0),a.send()})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(){this.rootNode_=_n.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(){return{value:null,children:new Map}}function Zn(e,t,n){if(yt(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=ut(t);e.children.has(i)||e.children.set(i,Xn());const r=e.children.get(i);t=pt(t),Zn(r,t,n)}}function ei(e,t){if(yt(t))return e.value=null,e.children.clear(),!0;if(null!==e.value){if(e.value.isLeafNode())return!1;{const n=e.value;return e.value=null,n.forEachChild(cn,(t,n)=>{Zn(e,new lt(t),n)}),ei(e,t)}}if(e.children.size>0){const n=ut(t);if(t=pt(t),e.children.has(n)){const i=ei(e.children.get(n),t);i&&e.children.delete(n)}return 0===e.children.size}return!0}function ti(e,t,n){null!==e.value?n(t,e.value):ni(e,(e,i)=>{const r=new lt(t.toString()+"/"+e);ti(i,r,n)})}function ni(e,t){e.children.forEach((e,n)=>{t(n,e)})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&L(this.last_,(e,n)=>{t[e]=t[e]-n}),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=1e4,si=3e4,oi=3e5;class ai{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new ii(e);const n=ri+(si-ri)*Math.random();Q(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;L(e,(e,i)=>{i>0&&Object(s["m"])(this.statsToReport_,e)&&(t[e]=i,n=!0)}),n&&this.server_.reportStats(t),Q(this.reportStats_.bind(this),Math.floor(2*Math.random()*oi))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ci;function li(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function hi(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ui(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["OVERWRITE"]=0]="OVERWRITE",e[e["MERGE"]=1]="MERGE",e[e["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",e[e["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(ci||(ci={}));class di{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=ci.ACK_USER_WRITE,this.source=li()}operationForChild(e){if(yt(this.path)){if(null!=this.affectedTree.value)return Object(s["f"])(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new lt(e));return new di(ht(),t,this.revert)}}return Object(s["f"])(ut(this.path)===e,"operationForChild called for unrelated child."),new di(pt(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,t){this.source=e,this.path=t,this.type=ci.LISTEN_COMPLETE}operationForChild(e){return yt(this.path)?new pi(this.source,ht()):new pi(this.source,pt(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=ci.OVERWRITE}operationForChild(e){return yt(this.path)?new fi(this.source,ht(),this.snap.getImmediateChild(e)):new fi(this.source,pt(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=ci.MERGE}operationForChild(e){if(yt(this.path)){const t=this.children.subtree(new lt(e));return t.isEmpty()?null:t.value?new fi(this.source,ht(),t.value):new gi(this.source,ht(),t)}return Object(s["f"])(ut(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new gi(this.source,pt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(yt(e))return this.isFullyInitialized()&&!this.filtered_;const t=ut(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function bi(e,t,n,i){const r=[],s=[];return t.forEach(t=>{"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push(Dn(t.childName,t.snapshotNode))}),yi(e,r,"child_removed",t,i,n),yi(e,r,"child_added",t,i,n),yi(e,r,"child_moved",s,i,n),yi(e,r,"child_changed",t,i,n),yi(e,r,"value",t,i,n),r}function yi(e,t,n,i,r,s){const o=i.filter(e=>e.type===n);o.sort((t,n)=>wi(e,t,n)),o.forEach(n=>{const i=vi(e,n,s);r.forEach(r=>{r.respondsTo(n.type)&&t.push(r.createEvent(i,e.query_))})})}function vi(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function wi(e,t,n){if(null==t.childName||null==n.childName)throw Object(s["g"])("Should only compare child_ events.");const i=new Ut(t.childName,t.snapshotNode),r=new Ut(n.childName,n.snapshotNode);return e.index_.compare(i,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(e,t){return{eventCache:e,serverCache:t}}function Ti(e,t,n,i){return Ci(new _i(t,n,i),e.serverCache)}function ki(e,t,n,i){return Ci(e.eventCache,new _i(t,n,i))}function Oi(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Ei(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ii;const Si=()=>(Ii||(Ii=new zt(A)),Ii);class Pi{constructor(e,t=Si()){this.value=e,this.children=t}static fromObject(e){let t=new Pi(null);return L(e,(e,n)=>{t=t.set(new lt(e),n)}),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:ht(),value:this.value};if(yt(e))return null;{const n=ut(e),i=this.children.get(n);if(null!==i){const r=i.findRootMostMatchingPathAndValue(pt(e),t);if(null!=r){const e=bt(new lt(n),r.path);return{path:e,value:r.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(yt(e))return this;{const t=ut(e),n=this.children.get(t);return null!==n?n.subtree(pt(e)):new Pi(null)}}set(e,t){if(yt(e))return new Pi(t,this.children);{const n=ut(e),i=this.children.get(n)||new Pi(null),r=i.set(pt(e),t),s=this.children.insert(n,r);return new Pi(this.value,s)}}remove(e){if(yt(e))return this.children.isEmpty()?new Pi(null):new Pi(null,this.children);{const t=ut(e),n=this.children.get(t);if(n){const i=n.remove(pt(e));let r;return r=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&r.isEmpty()?new Pi(null):new Pi(this.value,r)}return this}}get(e){if(yt(e))return this.value;{const t=ut(e),n=this.children.get(t);return n?n.get(pt(e)):null}}setTree(e,t){if(yt(e))return t;{const n=ut(e),i=this.children.get(n)||new Pi(null),r=i.setTree(pt(e),t);let s;return s=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new Pi(this.value,s)}}fold(e){return this.fold_(ht(),e)}fold_(e,t){const n={};return this.children.inorderTraversal((i,r)=>{n[i]=r.fold_(bt(e,i),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,ht(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(yt(e))return null;{const i=ut(e),r=this.children.get(i);return r?r.findOnPath_(pt(e),bt(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ht(),t)}foreachOnPath_(e,t,n){if(yt(e))return this;{this.value&&n(t,this.value);const i=ut(e),r=this.children.get(i);return r?r.foreachOnPath_(pt(e),bt(t,i),n):new Pi(null)}}foreach(e){this.foreach_(ht(),e)}foreach_(e,t){this.children.inorderTraversal((n,i)=>{i.foreach_(bt(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e){this.writeTree_=e}static empty(){return new Ri(new Pi(null))}}function Ni(e,t,n){if(yt(t))return new Ri(new Pi(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const r=i.path;let s=i.value;const o=vt(r,t);return s=s.updateChild(o,n),new Ri(e.writeTree_.set(r,s))}{const i=new Pi(n),r=e.writeTree_.setTree(t,i);return new Ri(r)}}}function xi(e,t,n){let i=e;return L(n,(e,n)=>{i=Ni(i,bt(t,e),n)}),i}function ji(e,t){if(yt(t))return Ri.empty();{const n=e.writeTree_.setTree(t,new Pi(null));return new Ri(n)}}function Ai(e,t){return null!=Di(e,t)}function Di(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(vt(n.path,t)):null}function Mi(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(cn,(e,n)=>{t.push(new Ut(e,n))}):e.writeTree_.children.inorderTraversal((e,n)=>{null!=n.value&&t.push(new Ut(e,n.value))}),t}function Fi(e,t){if(yt(t))return e;{const n=Di(e,t);return new Ri(null!=n?new Pi(n):e.writeTree_.subtree(t))}}function Li(e){return e.writeTree_.isEmpty()}function Ui(e,t){return qi(ht(),e.writeTree_,t)}function qi(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal((t,r)=>{".priority"===t?(Object(s["f"])(null!==r.value,"Priority writes must always be leaf nodes"),i=r.value):n=qi(bt(e,t),r,n)}),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(bt(e,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(e,t){return hr(t,e)}function Wi(e,t,n,i,r){Object(s["f"])(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:r}),r&&(e.visibleWrites=Ni(e.visibleWrites,t,n)),e.lastWriteId=i}function Vi(e,t,n,i){Object(s["f"])(i>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:i,visible:!0}),e.visibleWrites=xi(e.visibleWrites,t,n),e.lastWriteId=i}function Ki(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}function Hi(e,t){const n=e.allWrites.findIndex(e=>e.writeId===t);Object(s["f"])(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,o=!1,a=e.allWrites.length-1;while(r&&a>=0){const t=e.allWrites[a];t.visible&&(a>=n&&$i(t,i.path)?r=!1:Tt(i.path,t.path)&&(o=!0)),a--}if(r){if(o)return zi(e),!0;if(i.snap)e.visibleWrites=ji(e.visibleWrites,i.path);else{const t=i.children;L(t,t=>{e.visibleWrites=ji(e.visibleWrites,bt(i.path,t))})}return!0}return!1}function $i(e,t){if(e.snap)return Tt(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Tt(bt(e.path,n),t))return!0;return!1}function zi(e){e.visibleWrites=Qi(e.allWrites,Gi,ht()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function Gi(e){return e.visible}function Qi(e,t,n){let i=Ri.empty();for(let r=0;r<e.length;++r){const o=e[r];if(t(o)){const e=o.path;let t;if(o.snap)Tt(n,e)?(t=vt(n,e),i=Ni(i,t,o.snap)):Tt(e,n)&&(t=vt(e,n),i=Ni(i,ht(),o.snap.getChild(t)));else{if(!o.children)throw Object(s["g"])("WriteRecord should have .snap or .children");if(Tt(n,e))t=vt(n,e),i=xi(i,t,o.children);else if(Tt(e,n))if(t=vt(e,n),yt(t))i=xi(i,ht(),o.children);else{const e=Object(s["Q"])(o.children,ut(t));if(e){const n=e.getChild(pt(t));i=Ni(i,ht(),n)}}}}}return i}function Yi(e,t,n,i,r){if(i||r){const s=Fi(e.visibleWrites,t);if(!r&&Li(s))return n;if(r||null!=n||Ai(s,ht())){const s=function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(Tt(e.path,t)||Tt(t,e.path))},o=Qi(e.allWrites,s,t),a=n||_n.EMPTY_NODE;return Ui(o,a)}return null}{const i=Di(e.visibleWrites,t);if(null!=i)return i;{const i=Fi(e.visibleWrites,t);if(Li(i))return n;if(null!=n||Ai(i,ht())){const e=n||_n.EMPTY_NODE;return Ui(i,e)}return null}}}function Ji(e,t,n){let i=_n.EMPTY_NODE;const r=Di(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(cn,(e,t)=>{i=i.updateImmediateChild(e,t)}),i;if(n){const r=Fi(e.visibleWrites,t);return n.forEachChild(cn,(e,t)=>{const n=Ui(Fi(r,new lt(e)),t);i=i.updateImmediateChild(e,n)}),Mi(r).forEach(e=>{i=i.updateImmediateChild(e.name,e.node)}),i}{const n=Fi(e.visibleWrites,t);return Mi(n).forEach(e=>{i=i.updateImmediateChild(e.name,e.node)}),i}}function Xi(e,t,n,i,r){Object(s["f"])(i||r,"Either existingEventSnap or existingServerSnap must exist");const o=bt(t,n);if(Ai(e.visibleWrites,o))return null;{const t=Fi(e.visibleWrites,o);return Li(t)?r.getChild(n):Ui(t,r.getChild(n))}}function Zi(e,t,n,i){const r=bt(t,n),s=Di(e.visibleWrites,r);if(null!=s)return s;if(i.isCompleteForChild(n)){const t=Fi(e.visibleWrites,r);return Ui(t,i.getNode().getImmediateChild(n))}return null}function er(e,t){return Di(e.visibleWrites,t)}function tr(e,t,n,i,r,s,o){let a;const c=Fi(e.visibleWrites,t),l=Di(c,ht());if(null!=l)a=l;else{if(null==n)return[];a=Ui(c,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let c=n.getNext();while(c&&e.length<r)0!==t(c,i)&&e.push(c),c=n.getNext();return e}}function nr(){return{visibleWrites:Ri.empty(),allWrites:[],lastWriteId:-1}}function ir(e,t,n,i){return Yi(e.writeTree,e.treePath,t,n,i)}function rr(e,t){return Ji(e.writeTree,e.treePath,t)}function sr(e,t,n,i){return Xi(e.writeTree,e.treePath,t,n,i)}function or(e,t){return er(e.writeTree,bt(e.treePath,t))}function ar(e,t,n,i,r,s){return tr(e.writeTree,e.treePath,t,n,i,r,s)}function cr(e,t,n){return Zi(e.writeTree,e.treePath,t,n)}function lr(e,t){return hr(bt(e.treePath,t),e.writeTree)}function hr(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;Object(s["f"])("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),Object(s["f"])(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,An(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,jn(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,xn(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==r)throw Object(s["g"])("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,An(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const pr=new dr;class fr{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new _i(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return cr(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Ei(this.viewCache_),r=ar(this.writes_,i,t,1,n,e);return 0===r.length?null:r[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(e){return{filter:e}}function _r(e,t){Object(s["f"])(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),Object(s["f"])(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function mr(e,t,n,i,r){const o=new ur;let a,c;if(n.type===ci.OVERWRITE){const l=n;l.source.fromUser?a=wr(e,t,l.path,l.snap,i,r,o):(Object(s["f"])(l.source.fromServer,"Unknown source."),c=l.source.tagged||t.serverCache.isFiltered()&&!yt(l.path),a=vr(e,t,l.path,l.snap,i,r,c,o))}else if(n.type===ci.MERGE){const l=n;l.source.fromUser?a=Tr(e,t,l.path,l.children,i,r,o):(Object(s["f"])(l.source.fromServer,"Unknown source."),c=l.source.tagged||t.serverCache.isFiltered(),a=Or(e,t,l.path,l.children,i,r,c,o))}else if(n.type===ci.ACK_USER_WRITE){const s=n;a=s.revert?Sr(e,t,s.path,i,r,o):Er(e,t,s.path,s.affectedTree,i,r,o)}else{if(n.type!==ci.LISTEN_COMPLETE)throw Object(s["g"])("Unknown operation type: "+n.type);a=Ir(e,t,n.path,i,o)}const l=o.getChanges();return br(t,a,l),{viewCache:a,changes:l}}function br(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=Oi(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(Nn(Oi(t)))}}function yr(e,t,n,i,r,o){const a=t.eventCache;if(null!=or(i,n))return t;{let c,l;if(yt(n))if(Object(s["f"])(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=Ei(t),r=n instanceof _n?n:_n.EMPTY_NODE,s=rr(i,r);c=e.filter.updateFullNode(t.eventCache.getNode(),s,o)}else{const n=ir(i,Ei(t));c=e.filter.updateFullNode(t.eventCache.getNode(),n,o)}else{const h=ut(n);if(".priority"===h){Object(s["f"])(1===dt(n),"Can't have a priority with additional path components");const r=a.getNode();l=t.serverCache.getNode();const o=sr(i,n,r,l);c=null!=o?e.filter.updatePriority(r,o):a.getNode()}else{const s=pt(n);let u;if(a.isCompleteForChild(h)){l=t.serverCache.getNode();const e=sr(i,n,a.getNode(),l);u=null!=e?a.getNode().getImmediateChild(h).updateChild(s,e):a.getNode().getImmediateChild(h)}else u=cr(i,h,t.serverCache);c=null!=u?e.filter.updateChild(a.getNode(),h,u,s,r,o):a.getNode()}}return Ti(t,c,a.isFullyInitialized()||yt(n),e.filter.filtersNodes())}}function vr(e,t,n,i,r,s,o,a){const c=t.serverCache;let l;const h=o?e.filter:e.filter.getIndexedFilter();if(yt(n))l=h.updateFullNode(c.getNode(),i,null);else if(h.filtersNodes()&&!c.isFiltered()){const e=c.getNode().updateChild(n,i);l=h.updateFullNode(c.getNode(),e,null)}else{const e=ut(n);if(!c.isCompleteForPath(n)&&dt(n)>1)return t;const r=pt(n),s=c.getNode().getImmediateChild(e),o=s.updateChild(r,i);l=".priority"===e?h.updatePriority(c.getNode(),o):h.updateChild(c.getNode(),e,o,r,pr,null)}const u=ki(t,l,c.isFullyInitialized()||yt(n),h.filtersNodes()),d=new fr(r,u,s);return yr(e,u,n,r,d,a)}function wr(e,t,n,i,r,s,o){const a=t.eventCache;let c,l;const h=new fr(r,t,s);if(yt(n))l=e.filter.updateFullNode(t.eventCache.getNode(),i,o),c=Ti(t,l,!0,e.filter.filtersNodes());else{const r=ut(n);if(".priority"===r)l=e.filter.updatePriority(t.eventCache.getNode(),i),c=Ti(t,l,a.isFullyInitialized(),a.isFiltered());else{const s=pt(n),l=a.getNode().getImmediateChild(r);let u;if(yt(s))u=i;else{const e=h.getCompleteChild(r);u=null!=e?".priority"===ft(s)&&e.getChild(mt(s)).isEmpty()?e:e.updateChild(s,i):_n.EMPTY_NODE}if(l.equals(u))c=t;else{const n=e.filter.updateChild(a.getNode(),r,u,s,h,o);c=Ti(t,n,a.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function Cr(e,t){return e.eventCache.isCompleteForChild(t)}function Tr(e,t,n,i,r,s,o){let a=t;return i.foreach((i,c)=>{const l=bt(n,i);Cr(t,ut(l))&&(a=wr(e,a,l,c,r,s,o))}),i.foreach((i,c)=>{const l=bt(n,i);Cr(t,ut(l))||(a=wr(e,a,l,c,r,s,o))}),a}function kr(e,t,n){return n.foreach((e,n)=>{t=t.updateChild(e,n)}),t}function Or(e,t,n,i,r,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c,l=t;c=yt(n)?i:new Pi(null).setTree(n,i);const h=t.serverCache.getNode();return c.children.inorderTraversal((n,i)=>{if(h.hasChild(n)){const c=t.serverCache.getNode().getImmediateChild(n),h=kr(e,c,i);l=vr(e,l,new lt(n),h,r,s,o,a)}}),c.children.inorderTraversal((n,i)=>{const c=!t.serverCache.isCompleteForChild(n)&&void 0===i.value;if(!h.hasChild(n)&&!c){const c=t.serverCache.getNode().getImmediateChild(n),h=kr(e,c,i);l=vr(e,l,new lt(n),h,r,s,o,a)}}),l}function Er(e,t,n,i,r,s,o){if(null!=or(r,n))return t;const a=t.serverCache.isFiltered(),c=t.serverCache;if(null!=i.value){if(yt(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return vr(e,t,n,c.getNode().getChild(n),r,s,a,o);if(yt(n)){let i=new Pi(null);return c.getNode().forEachChild(Vt,(e,t)=>{i=i.set(new lt(e),t)}),Or(e,t,n,i,r,s,a,o)}return t}{let l=new Pi(null);return i.foreach((e,t)=>{const i=bt(n,e);c.isCompleteForPath(i)&&(l=l.set(e,c.getNode().getChild(i)))}),Or(e,t,n,l,r,s,a,o)}}function Ir(e,t,n,i,r){const s=t.serverCache,o=ki(t,s.getNode(),s.isFullyInitialized()||yt(n),s.isFiltered());return yr(e,o,n,i,pr,r)}function Sr(e,t,n,i,r,o){let a;if(null!=or(i,n))return t;{const c=new fr(i,t,r),l=t.eventCache.getNode();let h;if(yt(n)||".priority"===ut(n)){let n;if(t.serverCache.isFullyInitialized())n=ir(i,Ei(t));else{const e=t.serverCache.getNode();Object(s["f"])(e instanceof _n,"serverChildren would be complete if leaf node"),n=rr(i,e)}n=n,h=e.filter.updateFullNode(l,n,o)}else{const r=ut(n);let s=cr(i,r,t.serverCache);null==s&&t.serverCache.isCompleteForChild(r)&&(s=l.getImmediateChild(r)),h=null!=s?e.filter.updateChild(l,r,s,pt(n),c,o):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(l,r,_n.EMPTY_NODE,pt(n),c,o):l,h.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=ir(i,Ei(t)),a.isLeafNode()&&(h=e.filter.updateFullNode(h,a,o)))}return a=t.serverCache.isFullyInitialized()||null!=or(i,ht()),Ti(t,h,a,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new Mn(n.getIndex()),r=qn(n);this.processor_=gr(r);const s=t.serverCache,o=t.eventCache,a=i.updateFullNode(_n.EMPTY_NODE,s.getNode(),null),c=r.updateFullNode(_n.EMPTY_NODE,o.getNode(),null),l=new _i(a,s.isFullyInitialized(),i.filtersNodes()),h=new _i(c,o.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ci(h,l),this.eventGenerator_=new mi(this.query_)}get query(){return this.query_}}function Rr(e){return e.viewCache_.serverCache.getNode()}function Nr(e){return Oi(e.viewCache_)}function xr(e,t){const n=Ei(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!yt(t)&&!n.getImmediateChild(ut(t)).isEmpty())?n.getChild(t):null}function jr(e){return 0===e.eventRegistrations_.length}function Ar(e,t){e.eventRegistrations_.push(t)}function Dr(e,t,n){const i=[];if(n){Object(s["f"])(null==t,"A cancel should cancel all event registrations.");const r=e.query._path;e.eventRegistrations_.forEach(e=>{const t=e.createCancelEvent(n,r);t&&i.push(t)})}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){const r=e.eventRegistrations_[i];if(r.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(r)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function Mr(e,t,n,i){t.type===ci.MERGE&&null!==t.source.queryId&&(Object(s["f"])(Ei(e.viewCache_),"We should always have a full cache before handling merges"),Object(s["f"])(Oi(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,o=mr(e.processor_,r,t,n,i);return _r(e.processor_,o.viewCache),Object(s["f"])(o.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,Lr(e,o.changes,o.viewCache.eventCache.getNode(),null)}function Fr(e,t){const n=e.viewCache_.eventCache,i=[];if(!n.getNode().isLeafNode()){const e=n.getNode();e.forEachChild(cn,(e,t)=>{i.push(xn(e,t))})}return n.isFullyInitialized()&&i.push(Nn(n.getNode())),Lr(e,i,n.getNode(),t)}function Lr(e,t,n,i){const r=i?[i]:e.eventRegistrations_;return bi(e.eventGenerator_,t,n,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ur,qr;class Br{constructor(){this.views=new Map}}function Wr(e){Object(s["f"])(!Ur,"__referenceConstructor has already been defined"),Ur=e}function Vr(){return Object(s["f"])(Ur,"Reference.ts has not been loaded"),Ur}function Kr(e){return 0===e.views.size}function Hr(e,t,n,i){const r=t.source.queryId;if(null!==r){const o=e.views.get(r);return Object(s["f"])(null!=o,"SyncTree gave us an op for an invalid query."),Mr(o,t,n,i)}{let r=[];for(const s of e.views.values())r=r.concat(Mr(s,t,n,i));return r}}function $r(e,t,n,i,r){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=ir(n,r?i:null),s=!1;e?s=!0:i instanceof _n?(e=rr(n,i),s=!1):(e=_n.EMPTY_NODE,s=!1);const o=Ci(new _i(e,s,!1),new _i(i,r,!1));return new Pr(t,o)}return o}function zr(e,t,n,i,r,s){const o=$r(e,t,i,r,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),Ar(o,n),Fr(o,n)}function Gr(e,t,n,i){const r=t._queryIdentifier,s=[];let o=[];const a=Zr(e);if("default"===r)for(const[c,l]of e.views.entries())o=o.concat(Dr(l,n,i)),jr(l)&&(e.views.delete(c),l.query._queryParams.loadsAllData()||s.push(l.query));else{const t=e.views.get(r);t&&(o=o.concat(Dr(t,n,i)),jr(t)&&(e.views.delete(r),t.query._queryParams.loadsAllData()||s.push(t.query)))}return a&&!Zr(e)&&s.push(new(Vr())(t._repo,t._path)),{removed:s,events:o}}function Qr(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Yr(e,t){let n=null;for(const i of e.views.values())n=n||xr(i,t);return n}function Jr(e,t){const n=t._queryParams;if(n.loadsAllData())return es(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Xr(e,t){return null!=Jr(e,t)}function Zr(e){return null!=es(e)}function es(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(e){Object(s["f"])(!qr,"__referenceConstructor has already been defined"),qr=e}function ns(){return Object(s["f"])(qr,"Reference.ts has not been loaded"),qr}let is=1;class rs{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Pi(null),this.pendingWriteTree_=nr(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ss(e,t,n,i,r){return Wi(e.pendingWriteTree_,t,n,i,r),r?bs(e,new fi(li(),t,n)):[]}function os(e,t,n,i){Vi(e.pendingWriteTree_,t,n,i);const r=Pi.fromObject(n);return bs(e,new gi(li(),t,r))}function as(e,t,n=!1){const i=Ki(e.pendingWriteTree_,t),r=Hi(e.pendingWriteTree_,t);if(r){let t=new Pi(null);return null!=i.snap?t=t.set(ht(),!0):L(i.children,e=>{t=t.set(new lt(e),!0)}),bs(e,new di(i.path,t,n))}return[]}function cs(e,t,n){return bs(e,new fi(hi(),t,n))}function ls(e,t,n){const i=Pi.fromObject(n);return bs(e,new gi(hi(),t,i))}function hs(e,t){return bs(e,new pi(hi(),t))}function us(e,t,n){const i=ks(e,n);if(i){const n=Os(i),r=n.path,s=n.queryId,o=vt(r,t),a=new pi(ui(s),o);return Es(e,r,a)}return[]}function ds(e,t,n,i){const r=t._path,s=e.syncPointTree_.get(r);let o=[];if(s&&("default"===t._queryIdentifier||Xr(s,t))){const a=Gr(s,t,n,i);Kr(s)&&(e.syncPointTree_=e.syncPointTree_.remove(r));const c=a.removed;o=a.events;const l=-1!==c.findIndex(e=>e._queryParams.loadsAllData()),h=e.syncPointTree_.findOnPath(r,(e,t)=>Zr(t));if(l&&!h){const t=e.syncPointTree_.subtree(r);if(!t.isEmpty()){const n=Is(t);for(let t=0;t<n.length;++t){const i=n[t],r=i.query,s=ws(e,i);e.listenProvider_.startListening(Ss(r),Cs(e,r),s.hashFn,s.onComplete)}}}if(!h&&c.length>0&&!i)if(l){const n=null;e.listenProvider_.stopListening(Ss(t),n)}else c.forEach(t=>{const n=e.queryToTagMap.get(Ts(t));e.listenProvider_.stopListening(Ss(t),n)});Ps(e,c)}return o}function ps(e,t,n,i){const r=ks(e,i);if(null!=r){const i=Os(r),s=i.path,o=i.queryId,a=vt(s,t),c=new fi(ui(o),a,n);return Es(e,s,c)}return[]}function fs(e,t,n,i){const r=ks(e,i);if(r){const i=Os(r),s=i.path,o=i.queryId,a=vt(s,t),c=Pi.fromObject(n),l=new gi(ui(o),a,c);return Es(e,s,l)}return[]}function gs(e,t,n){const i=t._path;let r=null,o=!1;e.syncPointTree_.foreachOnPath(i,(e,t)=>{const n=vt(e,i);r=r||Yr(t,n),o=o||Zr(t)});let a,c=e.syncPointTree_.get(i);if(c?(o=o||Zr(c),r=r||Yr(c,ht())):(c=new Br,e.syncPointTree_=e.syncPointTree_.set(i,c)),null!=r)a=!0;else{a=!1,r=_n.EMPTY_NODE;const t=e.syncPointTree_.subtree(i);t.foreachChild((e,t)=>{const n=Yr(t,ht());n&&(r=r.updateImmediateChild(e,n))})}const l=Xr(c,t);if(!l&&!t._queryParams.loadsAllData()){const n=Ts(t);Object(s["f"])(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const i=Rs();e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}const h=Bi(e.pendingWriteTree_,i);let u=zr(c,t,n,h,r,a);if(!l&&!o){const n=Jr(c,t);u=u.concat(Ns(e,t,n))}return u}function _s(e,t,n){const i=!0,r=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,(e,n)=>{const i=vt(e,t),r=Yr(n,i);if(r)return r});return Yi(r,t,s,n,i)}function ms(e,t){const n=t._path;let i=null;e.syncPointTree_.foreachOnPath(n,(e,t)=>{const r=vt(e,n);i=i||Yr(t,r)});let r=e.syncPointTree_.get(n);r?i=i||Yr(r,ht()):(r=new Br,e.syncPointTree_=e.syncPointTree_.set(n,r));const s=null!=i,o=s?new _i(i,!0,!1):null,a=Bi(e.pendingWriteTree_,t._path),c=$r(r,t,a,s?o.getNode():_n.EMPTY_NODE,s);return Nr(c)}function bs(e,t){return ys(t,e.syncPointTree_,null,Bi(e.pendingWriteTree_,ht()))}function ys(e,t,n,i){if(yt(e.path))return vs(e,t,n,i);{const r=t.get(ht());null==n&&null!=r&&(n=Yr(r,ht()));let s=[];const o=ut(e.path),a=e.operationForChild(o),c=t.children.get(o);if(c&&a){const e=n?n.getImmediateChild(o):null,t=lr(i,o);s=s.concat(ys(a,c,e,t))}return r&&(s=s.concat(Hr(r,e,i,n))),s}}function vs(e,t,n,i){const r=t.get(ht());null==n&&null!=r&&(n=Yr(r,ht()));let s=[];return t.children.inorderTraversal((t,r)=>{const o=n?n.getImmediateChild(t):null,a=lr(i,t),c=e.operationForChild(t);c&&(s=s.concat(vs(c,r,o,a)))}),r&&(s=s.concat(Hr(r,e,i,n))),s}function ws(e,t){const n=t.query,i=Cs(e,n);return{hashFn:()=>{const e=Rr(t)||_n.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return i?us(e,n._path,i):hs(e,n._path);{const i=W(t,n);return ds(e,n,null,i)}}}}function Cs(e,t){const n=Ts(t);return e.queryToTagMap.get(n)}function Ts(e){return e._path.toString()+"$"+e._queryIdentifier}function ks(e,t){return e.tagToQueryMap.get(t)}function Os(e){const t=e.indexOf("$");return Object(s["f"])(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new lt(e.substr(0,t))}}function Es(e,t,n){const i=e.syncPointTree_.get(t);Object(s["f"])(i,"Missing sync point for query tag that we're tracking");const r=Bi(e.pendingWriteTree_,t);return Hr(i,n,r,null)}function Is(e){return e.fold((e,t,n)=>{if(t&&Zr(t)){const e=es(t);return[e]}{let e=[];return t&&(e=Qr(t)),L(n,(t,n)=>{e=e.concat(n)}),e}})}function Ss(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(ns())(e._repo,e._path):e}function Ps(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const t=Ts(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}function Rs(){return is++}function Ns(e,t,n){const i=t._path,r=Cs(e,t),o=ws(e,n),a=e.listenProvider_.startListening(Ss(t),r,o.hashFn,o.onComplete),c=e.syncPointTree_.subtree(i);if(r)Object(s["f"])(!Zr(c.value),"If we're adding a query, it shouldn't be shadowed");else{const t=c.fold((e,t,n)=>{if(!yt(e)&&t&&Zr(t))return[es(t).query];{let e=[];return t&&(e=e.concat(Qr(t).map(e=>e.query))),L(n,(t,n)=>{e=e.concat(n)}),e}});for(let n=0;n<t.length;++n){const i=t[n];e.listenProvider_.stopListening(Ss(i),Cs(e,i))}}return a}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new xs(t)}node(){return this.node_}}class js{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=bt(this.path_,e);return new js(this.syncTree_,t)}node(){return _s(this.syncTree_,this.path_)}}const As=function(e){return e=e||{},e["timestamp"]=e["timestamp"]||(new Date).getTime(),e},Ds=function(e,t,n){return e&&"object"===typeof e?(Object(s["f"])(".sv"in e,"Unexpected leaf node or priority contents"),"string"===typeof e[".sv"]?Ms(e[".sv"],t,n):"object"===typeof e[".sv"]?Fs(e[".sv"],t):void Object(s["f"])(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Ms=function(e,t,n){switch(e){case"timestamp":return n["timestamp"];default:Object(s["f"])(!1,"Unexpected server value: "+e)}},Fs=function(e,t,n){e.hasOwnProperty("increment")||Object(s["f"])(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e["increment"];"number"!==typeof i&&Object(s["f"])(!1,"Unexpected increment value: "+i);const r=t.node();if(Object(s["f"])(null!==r&&"undefined"!==typeof r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r,a=o.getValue();return"number"!==typeof a?i:a+i},Ls=function(e,t,n,i){return qs(t,new js(n,e),i)},Us=function(e,t,n){return qs(e,new xs(t),n)};function qs(e,t,n){const i=e.getPriority().val(),r=Ds(i,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const i=e,s=Ds(i.getValue(),t,n);return s!==i.getValue()||r!==i.getPriority().val()?new rn(s,vn(r)):e}{const i=e;return s=i,r!==i.getPriority().val()&&(s=s.updatePriority(new rn(r))),i.forEachChild(cn,(e,i)=>{const r=qs(i,t.getImmediateChild(e),n);r!==i&&(s=s.updateImmediateChild(e,r))}),s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Ws(e,t){let n=t instanceof lt?t:new lt(t),i=e,r=ut(n);while(null!==r){const e=Object(s["Q"])(i.node.children,r)||{children:{},childCount:0};i=new Bs(r,i,e),n=pt(n),r=ut(n)}return i}function Vs(e){return e.node.value}function Ks(e,t){e.node.value=t,Js(e)}function Hs(e){return e.node.childCount>0}function $s(e){return void 0===Vs(e)&&!Hs(e)}function zs(e,t){L(e.node.children,(n,i)=>{t(new Bs(n,e,i))})}function Gs(e,t,n,i){n&&!i&&t(e),zs(e,e=>{Gs(e,t,!0,i)}),n&&i&&t(e)}function Qs(e,t,n){let i=n?e:e.parent;while(null!==i){if(t(i))return!0;i=i.parent}return!1}function Ys(e){return new lt(null===e.parent?e.name:Ys(e.parent)+"/"+e.name)}function Js(e){null!==e.parent&&Xs(e.parent,e.name,e)}function Xs(e,t,n){const i=$s(n),r=Object(s["m"])(e.node.children,t);i&&r?(delete e.node.children[t],e.node.childCount--,Js(e)):i||r||(e.node.children[t]=n.node,e.node.childCount++,Js(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs=/[\[\].#$\/\u0000-\u001F\u007F]/,eo=/[\[\].#$\u0000-\u001F\u007F]/,to=10485760,no=function(e){return"string"===typeof e&&0!==e.length&&!Zs.test(e)},io=function(e){return"string"===typeof e&&0!==e.length&&!eo.test(e)},ro=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),io(e)},so=function(e){return null===e||"string"===typeof e||"number"===typeof e&&!P(e)||e&&"object"===typeof e&&Object(s["m"])(e,".sv")},oo=function(e,t,n,i){i&&void 0===t||ao(Object(s["s"])(e,"value"),t,n)},ao=function(e,t,n){const i=n instanceof lt?new kt(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+St(i));if("function"===typeof t)throw new Error(e+"contains a function "+St(i)+" with contents = "+t.toString());if(P(t))throw new Error(e+"contains "+t.toString()+" "+St(i));if("string"===typeof t&&t.length>to/3&&Object(s["R"])(t)>to)throw new Error(e+"contains a string greater than "+to+" utf8 bytes "+St(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"===typeof t){let n=!1,r=!1;if(L(t,(t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!no(t)))throw new Error(e+" contains an invalid key ("+t+") "+St(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');Ot(i,t),ao(e,s,i),Et(i)}),n&&r)throw new Error(e+' contains ".value" child '+St(i)+" in addition to actual children.")}},co=function(e,t){let n,i;for(n=0;n<t.length;n++){i=t[n];const r=_t(i);for(let t=0;t<r.length;t++)if(".priority"===r[t]&&t===r.length-1);else if(!no(r[t]))throw new Error(e+"contains an invalid key ("+r[t]+") in path "+i.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(wt);let r=null;for(n=0;n<t.length;n++){if(i=t[n],null!==r&&Tt(r,i))throw new Error(e+"contains a path "+r.toString()+" that is ancestor of another path "+i.toString());r=i}},lo=function(e,t,n,i){if(i&&void 0===t)return;const r=Object(s["s"])(e,"values");if(!t||"object"!==typeof t||Array.isArray(t))throw new Error(r+" must be an object containing the children to replace.");const o=[];L(t,(e,t)=>{const i=new lt(e);if(ao(r,t,bt(n,i)),".priority"===ft(i)&&!so(t))throw new Error(r+"contains an invalid value for '"+i.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");o.push(i)}),co(r,o)},ho=function(e,t,n){if(!n||void 0!==t){if(P(t))throw new Error(Object(s["s"])(e,"priority")+"is "+t.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!so(t))throw new Error(Object(s["s"])(e,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},uo=function(e,t,n,i){if((!i||void 0!==n)&&!no(n))throw new Error(Object(s["s"])(e,t)+'was an invalid key = "'+n+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").')},po=function(e,t,n,i){if((!i||void 0!==n)&&!io(n))throw new Error(Object(s["s"])(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},fo=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),po(e,t,n,i)},go=function(e,t){if(".info"===ut(t))throw new Error(e+" failed = Can't modify data under /.info/")},_o=function(e,t){const n=t.path.toString();if("string"!==typeof t.repoInfo.host||0===t.repoInfo.host.length||!no(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!ro(n))throw new Error(Object(s["s"])(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mo{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function bo(e,t){let n=null;for(let i=0;i<t.length;i++){const r=t[i],s=r.getPath();null===n||Ct(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(r)}n&&e.eventLists_.push(n)}function yo(e,t,n){bo(e,n),wo(e,e=>Ct(e,t))}function vo(e,t,n){bo(e,n),wo(e,e=>Tt(e,t)||Tt(t,e))}function wo(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const r=e.eventLists_[i];if(r){const s=r.path;t(s)?(Co(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Co(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();v&&T("event: "+n.toString()),z(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To="repo_interrupt",ko=25;class Oo{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new mo,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Xn(),this.transactionQueueTree_=new Bs,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Eo(e,t,n){if(e.stats_=_e(e.repoInfo_),e.forceRestClient_||G())e.server_=new Yn(e.repoInfo_,(t,n,i,r)=>{Po(e,t,n,i,r)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>Ro(e,!0),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Object(s["T"])(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new Lt(e.repoInfo_,t,(t,n,i,r)=>{Po(e,t,n,i,r)},t=>{Ro(e,t)},t=>{No(e,t)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(t=>{e.server_.refreshAuthToken(t)}),e.appCheckProvider_.addTokenChangeListener(t=>{e.server_.refreshAppCheckToken(t.token)}),e.statsReporter_=me(e.repoInfo_,()=>new ai(e.stats_,e.server_)),e.infoData_=new Jn,e.infoSyncTree_=new rs({startListening:(t,n,i,r)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=cs(e.infoSyncTree_,t._path,o),setTimeout(()=>{r("ok")},0)),s},stopListening:()=>{}}),xo(e,"connected",!1),e.serverSyncTree_=new rs({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,(n,i)=>{const s=r(n,i);vo(e.eventQueue_,t._path,s)}),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function Io(e){const t=e.infoData_.getNode(new lt(".info/serverTimeOffset")),n=t.val()||0;return(new Date).getTime()+n}function So(e){return As({timestamp:Io(e)})}function Po(e,t,n,i,r){e.dataUpdateCount++;const o=new lt(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let a=[];if(r)if(i){const t=Object(s["N"])(n,e=>vn(e));a=fs(e.serverSyncTree_,o,t,r)}else{const t=vn(n);a=ps(e.serverSyncTree_,o,t,r)}else if(i){const t=Object(s["N"])(n,e=>vn(e));a=ls(e.serverSyncTree_,o,t)}else{const t=vn(n);a=cs(e.serverSyncTree_,o,t)}let c=o;a.length>0&&(c=Xo(e,o)),vo(e.eventQueue_,c,a)}function Ro(e,t){xo(e,"connected",t),!1===t&&Fo(e)}function No(e,t){L(t,(t,n)=>{xo(e,t,n)})}function xo(e,t,n){const i=new lt("/.info/"+t),r=vn(n);e.infoData_.updateSnapshot(i,r);const s=cs(e.infoSyncTree_,i,r);vo(e.eventQueue_,i,s)}function jo(e){return e.nextWriteId_++}function Ao(e,t){const n=ms(e.serverSyncTree_,t);return null!=n?Promise.resolve(n):e.server_.get(t).then(n=>{const i=vn(n).withIndex(t._queryParams.getIndex()),r=cs(e.serverSyncTree_,t._path,i);return yo(e.eventQueue_,t._path,r),Promise.resolve(i)},n=>($o(e,"get for query "+Object(s["T"])(t)+" failed: "+n),Promise.reject(new Error(n))))}function Do(e,t,n,i,r){$o(e,"set",{path:t.toString(),value:n,priority:i});const s=So(e),o=vn(n,i),a=_s(e.serverSyncTree_,t),c=Us(o,a,s),l=jo(e),h=ss(e.serverSyncTree_,t,c,l,!0);bo(e.eventQueue_,h),e.server_.put(t.toString(),o.val(!0),(n,i)=>{const s="ok"===n;s||I("set at "+t+" failed: "+n);const o=as(e.serverSyncTree_,l,!s);vo(e.eventQueue_,t,o),zo(e,r,n,i)});const u=ra(e,t);Xo(e,u),vo(e.eventQueue_,u,[])}function Mo(e,t,n,i){$o(e,"update",{path:t.toString(),value:n});let r=!0;const s=So(e),o={};if(L(n,(n,i)=>{r=!1,o[n]=Ls(bt(t,n),vn(i),e.serverSyncTree_,s)}),r)T("update() called with empty data.  Don't do anything."),zo(e,i,"ok",void 0);else{const r=jo(e),s=os(e.serverSyncTree_,t,o,r);bo(e.eventQueue_,s),e.server_.merge(t.toString(),n,(n,s)=>{const o="ok"===n;o||I("update at "+t+" failed: "+n);const a=as(e.serverSyncTree_,r,!o),c=a.length>0?Xo(e,t):t;vo(e.eventQueue_,c,a),zo(e,i,n,s)}),L(n,n=>{const i=ra(e,bt(t,n));Xo(e,i)}),vo(e.eventQueue_,t,[])}}function Fo(e){$o(e,"onDisconnectEvents");const t=So(e),n=Xn();ti(e.onDisconnect_,ht(),(i,r)=>{const s=Ls(i,r,e.serverSyncTree_,t);Zn(n,i,s)});let i=[];ti(n,ht(),(t,n)=>{i=i.concat(cs(e.serverSyncTree_,t,n));const r=ra(e,t);Xo(e,r)}),e.onDisconnect_=Xn(),vo(e.eventQueue_,ht(),i)}function Lo(e,t,n){e.server_.onDisconnectCancel(t.toString(),(i,r)=>{"ok"===i&&ei(e.onDisconnect_,t),zo(e,n,i,r)})}function Uo(e,t,n,i){const r=vn(n);e.server_.onDisconnectPut(t.toString(),r.val(!0),(n,s)=>{"ok"===n&&Zn(e.onDisconnect_,t,r),zo(e,i,n,s)})}function qo(e,t,n,i,r){const s=vn(n,i);e.server_.onDisconnectPut(t.toString(),s.val(!0),(n,i)=>{"ok"===n&&Zn(e.onDisconnect_,t,s),zo(e,r,n,i)})}function Bo(e,t,n,i){if(Object(s["B"])(n))return T("onDisconnect().update() called with empty data.  Don't do anything."),void zo(e,i,"ok",void 0);e.server_.onDisconnectMerge(t.toString(),n,(r,s)=>{"ok"===r&&L(n,(n,i)=>{const r=vn(i);Zn(e.onDisconnect_,bt(t,n),r)}),zo(e,i,r,s)})}function Wo(e,t,n){let i;i=".info"===ut(t._path)?gs(e.infoSyncTree_,t,n):gs(e.serverSyncTree_,t,n),yo(e.eventQueue_,t._path,i)}function Vo(e,t,n){let i;i=".info"===ut(t._path)?ds(e.infoSyncTree_,t,n):ds(e.serverSyncTree_,t,n),yo(e.eventQueue_,t._path,i)}function Ko(e){e.persistentConnection_&&e.persistentConnection_.interrupt(To)}function Ho(e){e.persistentConnection_&&e.persistentConnection_.resume(To)}function $o(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),T(n,...t)}function zo(e,t,n,i){t&&z(()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let r=e;i&&(r+=": "+i);const s=new Error(r);s.code=e,t(s)}})}function Go(e,t,n,i,r,o){$o(e,"transaction on "+t);const a={path:t,update:n,onComplete:i,status:null,order:m(),applyLocally:o,retryCount:0,unwatcher:r,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},c=Qo(e,t,void 0);a.currentInputSnapshot=c;const l=a.update(c.val());if(void 0===l)a.unwatcher(),a.currentOutputSnapshotRaw=null,a.currentOutputSnapshotResolved=null,a.onComplete&&a.onComplete(null,!1,a.currentInputSnapshot);else{ao("transaction failed: Data returned ",l,a.path),a.status=0;const n=Ws(e.transactionQueueTree_,t),i=Vs(n)||[];let r;if(i.push(a),Ks(n,i),"object"===typeof l&&null!==l&&Object(s["m"])(l,".priority"))r=Object(s["Q"])(l,".priority"),Object(s["f"])(so(r),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.");else{const n=_s(e.serverSyncTree_,t)||_n.EMPTY_NODE;r=n.getPriority().val()}const o=So(e),h=vn(l,r),u=Us(h,c,o);a.currentOutputSnapshotRaw=h,a.currentOutputSnapshotResolved=u,a.currentWriteId=jo(e);const d=ss(e.serverSyncTree_,t,u,a.currentWriteId,a.applyLocally);vo(e.eventQueue_,t,d),Yo(e,e.transactionQueueTree_)}}function Qo(e,t,n){return _s(e.serverSyncTree_,t,n)||_n.EMPTY_NODE}function Yo(e,t=e.transactionQueueTree_){if(t||ia(e,t),Vs(t)){const n=ta(e,t);Object(s["f"])(n.length>0,"Sending zero length transaction queue");const i=n.every(e=>0===e.status);i&&Jo(e,Ys(t),n)}else Hs(t)&&zs(t,t=>{Yo(e,t)})}function Jo(e,t,n){const i=n.map(e=>e.currentWriteId),r=Qo(e,t,i);let o=r;const a=r.hash();for(let h=0;h<n.length;h++){const e=n[h];Object(s["f"])(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const i=vt(t,e.path);o=o.updateChild(i,e.currentOutputSnapshotRaw)}const c=o.val(!0),l=t;e.server_.put(l.toString(),c,i=>{$o(e,"transaction put response",{path:l.toString(),status:i});let r=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,r=r.concat(as(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push(()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved)),n[t].unwatcher();ia(e,Ws(e.transactionQueueTree_,t)),Yo(e,e.transactionQueueTree_),vo(e.eventQueue_,t,r);for(let e=0;e<i.length;e++)z(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{I("transaction at "+l.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}Xo(e,t)}},a)}function Xo(e,t){const n=ea(e,t),i=Ys(n),r=ta(e,n);return Zo(e,r,i),i}function Zo(e,t,n){if(0===t.length)return;const i=[];let r=[];const o=t.filter(e=>0===e.status),a=o.map(e=>e.currentWriteId);for(let c=0;c<t.length;c++){const o=t[c],l=vt(n,o.path);let h,u=!1;if(Object(s["f"])(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===o.status)u=!0,h=o.abortReason,r=r.concat(as(e.serverSyncTree_,o.currentWriteId,!0));else if(0===o.status)if(o.retryCount>=ko)u=!0,h="maxretry",r=r.concat(as(e.serverSyncTree_,o.currentWriteId,!0));else{const n=Qo(e,o.path,a);o.currentInputSnapshot=n;const i=t[c].update(n.val());if(void 0!==i){ao("transaction failed: Data returned ",i,o.path);let t=vn(i);const c="object"===typeof i&&null!=i&&Object(s["m"])(i,".priority");c||(t=t.updatePriority(n.getPriority()));const l=o.currentWriteId,h=So(e),u=Us(t,n,h);o.currentOutputSnapshotRaw=t,o.currentOutputSnapshotResolved=u,o.currentWriteId=jo(e),a.splice(a.indexOf(l),1),r=r.concat(ss(e.serverSyncTree_,o.path,u,o.currentWriteId,o.applyLocally)),r=r.concat(as(e.serverSyncTree_,l,!0))}else u=!0,h="nodata",r=r.concat(as(e.serverSyncTree_,o.currentWriteId,!0))}vo(e.eventQueue_,n,r),r=[],u&&(t[c].status=2,function(e){setTimeout(e,Math.floor(0))}(t[c].unwatcher),t[c].onComplete&&("nodata"===h?i.push(()=>t[c].onComplete(null,!1,t[c].currentInputSnapshot)):i.push(()=>t[c].onComplete(new Error(h),!1,null))))}ia(e,e.transactionQueueTree_);for(let s=0;s<i.length;s++)z(i[s]);Yo(e,e.transactionQueueTree_)}function ea(e,t){let n,i=e.transactionQueueTree_;n=ut(t);while(null!==n&&void 0===Vs(i))i=Ws(i,n),t=pt(t),n=ut(t);return i}function ta(e,t){const n=[];return na(e,t,n),n.sort((e,t)=>e.order-t.order),n}function na(e,t,n){const i=Vs(t);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);zs(t,t=>{na(e,t,n)})}function ia(e,t){const n=Vs(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Ks(t,n.length>0?n:void 0)}zs(t,t=>{ia(e,t)})}function ra(e,t){const n=Ys(ea(e,t)),i=Ws(e.transactionQueueTree_,t);return Qs(i,t=>{sa(e,t)}),sa(e,i),Gs(i,t=>{sa(e,t)}),n}function sa(e,t){const n=Vs(t);if(n){const i=[];let r=[],o=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(Object(s["f"])(o===t-1,"All SENT items should be at beginning of queue."),o=t,n[t].status=3,n[t].abortReason="set"):(Object(s["f"])(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(as(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===o?Ks(t,void 0):n.length=o+1,vo(e.eventQueue_,Ys(t),r);for(let e=0;e<i.length;e++)z(i[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(e){let t="";const n=e.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let e=n[r];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(i){}t+="/"+e}return t}function aa(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):I(`Invalid query segment '${n}' in query '${e}'`)}return t}const ca=function(e,t){const n=la(e),i=n.namespace;"firebase.com"===n.domain&&E(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||E("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||S();const r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new he(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new lt(n.pathString)}},la=function(e){let t="",n="",i="",r="",s="",o=!0,a="https",c=443;if("string"===typeof e){let l=e.indexOf("//");l>=0&&(a=e.substring(0,l-1),e=e.substring(l+2));let h=e.indexOf("/");-1===h&&(h=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(h,u)),h<u&&(r=oa(e.substring(h,u)));const d=aa(e.substring(Math.min(e.length,u)));l=t.indexOf(":"),l>=0?(o="https"===a||"wss"===a,c=parseInt(t.substring(l+1),10)):l=t.length;const p=t.slice(0,l);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=i}"ns"in d&&(s=d["ns"])}return{host:t,port:c,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ha{constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Object(s["T"])(this.snapshot.exportVal())}}class ua{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return Object(s["f"])(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new s["a"];return Lo(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){go("OnDisconnect.remove",this._path);const e=new s["a"];return Uo(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){go("OnDisconnect.set",this._path),oo("OnDisconnect.set",e,this._path,!1);const t=new s["a"];return Uo(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){go("OnDisconnect.setWithPriority",this._path),oo("OnDisconnect.setWithPriority",e,this._path,!1),ho("OnDisconnect.setWithPriority",t,!1);const n=new s["a"];return qo(this._repo,this._path,e,t,n.wrapCallback(()=>{})),n.promise}update(e){go("OnDisconnect.update",this._path),lo("OnDisconnect.update",e,this._path,!1);const t=new s["a"];return Bo(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return yt(this._path)?null:ft(this._path)}get ref(){return new ba(this._repo,this._path)}get _queryIdentifier(){const e=Qn(this._queryParams),t=M(e);return"{}"===t?"default":t}get _queryObject(){return Qn(this._queryParams)}isEqual(e){if(e=Object(s["v"])(e),!(e instanceof fa))return!1;const t=this._repo===e._repo,n=Ct(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+gt(this._path)}}function ga(e,t){if(!0===e._orderByCalled)throw new Error(t+": You can't combine multiple orderBy calls.")}function _a(e){let t=null,n=null;if(e.hasStart()&&(t=e.getIndexStartValue()),e.hasEnd()&&(n=e.getIndexEndValue()),e.getIndex()===Vt){const i="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",r="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(e.hasStart()){const n=e.getIndexStartName();if(n!==N)throw new Error(i);if("string"!==typeof t)throw new Error(r)}if(e.hasEnd()){const t=e.getIndexEndName();if(t!==x)throw new Error(i);if("string"!==typeof n)throw new Error(r)}}else if(e.getIndex()===cn){if(null!=t&&!so(t)||null!=n&&!so(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(Object(s["f"])(e.getIndex()instanceof wn||e.getIndex()===Tn,"unknown index type."),null!=t&&"object"===typeof t||null!=n&&"object"===typeof n)throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function ma(e){if(e.hasStart()&&e.hasEnd()&&e.hasLimit()&&!e.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class ba extends fa{constructor(e,t){super(e,t,new Un,!1)}get parent(){const e=mt(this._path);return null===e?null:new ba(this._repo,e)}get root(){let e=this;while(null!==e.parent)e=e.parent;return e}}class ya{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new lt(e),n=Ca(this.ref,e);return new ya(this._node.getChild(t),n,cn)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;const t=this._node;return!!t.forEachChild(this._index,(t,n)=>e(new ya(n,Ca(this.ref,t),cn)))}hasChild(e){const t=new lt(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function va(e,t){return e=Object(s["v"])(e),e._checkNotDeleted("ref"),void 0!==t?Ca(e._root,t):e._root}function wa(e,t){e=Object(s["v"])(e),e._checkNotDeleted("refFromURL");const n=ca(t,e._repo.repoInfo_.nodeAdmin);_o("refFromURL",n);const i=n.repoInfo;return e._repo.repoInfo_.isCustomHost()||i.host===e._repo.repoInfo_.host||E("refFromURL: Host name does not match the current database: (found "+i.host+" but expected "+e._repo.repoInfo_.host+")"),va(e,n.path.toString())}function Ca(e,t){return e=Object(s["v"])(e),null===ut(e._path)?fo("child","path",t,!1):po("child","path",t,!1),new ba(e._repo,bt(e._path,t))}function Ta(e,t){e=Object(s["v"])(e),go("push",e._path),oo("push",t,e._path,!0);const n=Io(e._repo),i=Sn(n),r=Ca(e,i),o=Ca(e,i);let a;return a=null!=t?Oa(o,t).then(()=>o):Promise.resolve(o),r.then=a.then.bind(a),r.catch=a.then.bind(a,void 0),r}function ka(e){return go("remove",e._path),Oa(e,null)}function Oa(e,t){e=Object(s["v"])(e),go("set",e._path),oo("set",t,e._path,!1);const n=new s["a"];return Do(e._repo,e._path,t,null,n.wrapCallback(()=>{})),n.promise}function Ea(e,t){e=Object(s["v"])(e),go("setPriority",e._path),ho("setPriority",t,!1);const n=new s["a"];return Do(e._repo,bt(e._path,".priority"),t,null,n.wrapCallback(()=>{})),n.promise}function Ia(e,t,n){if(go("setWithPriority",e._path),oo("setWithPriority",t,e._path,!1),ho("setWithPriority",n,!1),".length"===e.key||".keys"===e.key)throw"setWithPriority failed: "+e.key+" is a read-only object.";const i=new s["a"];return Do(e._repo,e._path,t,n,i.wrapCallback(()=>{})),i.promise}function Sa(e,t){lo("update",t,e._path,!1);const n=new s["a"];return Mo(e._repo,e._path,t,n.wrapCallback(()=>{})),n.promise}function Pa(e){return e=Object(s["v"])(e),Ao(e._repo,e).then(t=>new ya(t,new ba(e._repo,e._path),e._queryParams.getIndex()))}class Ra{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new ha("value",this,new ya(e.snapshotNode,new ba(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new ua(this,e,t):null}matches(e){return e instanceof Ra&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class Na{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new ua(this,e,t):null}createEvent(e,t){Object(s["f"])(null!=e.childName,"Child events should have a childName.");const n=Ca(new ba(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new ha(e.type,this,new ya(e.snapshotNode,n,i),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Na&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function xa(e,t,n,i,r){let s;if("object"===typeof i&&(s=void 0,r=i),"function"===typeof i&&(s=i),r&&r.onlyOnce){const t=n,i=(n,i)=>{Vo(e._repo,e,a),t(n,i)};i.userCallback=n.userCallback,i.context=n.context,n=i}const o=new da(n,s||void 0),a="value"===t?new Ra(o):new Na(t,o);return Wo(e._repo,e,a),()=>Vo(e._repo,e,a)}function ja(e,t,n,i){return xa(e,"value",t,n,i)}function Aa(e,t,n,i){return xa(e,"child_added",t,n,i)}function Da(e,t,n,i){return xa(e,"child_changed",t,n,i)}function Ma(e,t,n,i){return xa(e,"child_moved",t,n,i)}function Fa(e,t,n,i){return xa(e,"child_removed",t,n,i)}function La(e,t,n){let i=null;const r=n?new da(n):null;"value"===t?i=new Ra(r):t&&(i=new Na(t,r)),Vo(e._repo,e,i)}class Ua{}class qa extends Ua{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){oo("endAt",this._value,e._path,!0);const t=Hn(e._queryParams,this._value,this._key);if(ma(t),_a(t),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new fa(e._repo,e._path,t,e._orderByCalled)}}function Ba(e,t){return uo("endAt","key",t,!0),new qa(e,t)}class Wa extends Ua{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){oo("endBefore",this._value,e._path,!1);const t=$n(e._queryParams,this._value,this._key);if(ma(t),_a(t),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new fa(e._repo,e._path,t,e._orderByCalled)}}function Va(e,t){return uo("endBefore","key",t,!0),new Wa(e,t)}class Ka extends Ua{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){oo("startAt",this._value,e._path,!0);const t=Vn(e._queryParams,this._value,this._key);if(ma(t),_a(t),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new fa(e._repo,e._path,t,e._orderByCalled)}}function Ha(e=null,t){return uo("startAt","key",t,!0),new Ka(e,t)}class $a extends Ua{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){oo("startAfter",this._value,e._path,!1);const t=Kn(e._queryParams,this._value,this._key);if(ma(t),_a(t),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new fa(e._repo,e._path,t,e._orderByCalled)}}function za(e,t){return uo("startAfter","key",t,!0),new $a(e,t)}class Ga extends Ua{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new fa(e._repo,e._path,Bn(e._queryParams,this._limit),e._orderByCalled)}}function Qa(e){if("number"!==typeof e||Math.floor(e)!==e||e<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new Ga(e)}class Ya extends Ua{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new fa(e._repo,e._path,Wn(e._queryParams,this._limit),e._orderByCalled)}}function Ja(e){if("number"!==typeof e||Math.floor(e)!==e||e<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new Ya(e)}class Xa extends Ua{constructor(e){super(),this._path=e}_apply(e){ga(e,"orderByChild");const t=new lt(this._path);if(yt(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const n=new wn(t),i=zn(e._queryParams,n);return _a(i),new fa(e._repo,e._path,i,!0)}}function Za(e){if("$key"===e)throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if("$priority"===e)throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if("$value"===e)throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return po("orderByChild","path",e,!1),new Xa(e)}class ec extends Ua{_apply(e){ga(e,"orderByKey");const t=zn(e._queryParams,Vt);return _a(t),new fa(e._repo,e._path,t,!0)}}function tc(){return new ec}class nc extends Ua{_apply(e){ga(e,"orderByPriority");const t=zn(e._queryParams,cn);return _a(t),new fa(e._repo,e._path,t,!0)}}function ic(){return new nc}class rc extends Ua{_apply(e){ga(e,"orderByValue");const t=zn(e._queryParams,Tn);return _a(t),new fa(e._repo,e._path,t,!0)}}function sc(){return new rc}class oc extends Ua{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){if(oo("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new qa(this._value,this._key)._apply(new Ka(this._value,this._key)._apply(e))}}function ac(e,t){return uo("equalTo","key",t,!0),new oc(e,t)}function cc(e,...t){let n=Object(s["v"])(e);for(const i of t)n=i._apply(n);return n}Wr(ba),ts(ba);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const lc="FIREBASE_DATABASE_EMULATOR_HOST",hc={};let uc=!1;function dc(e,t,n,i){e.repoInfo_=new he(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams),i&&(e.authTokenProvider_=i)}function pc(t,n,i,r,s){let o=r||t.options.databaseURL;void 0===o&&(t.options.projectId||E("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),T("Using default host for project ",t.options.projectId),o=t.options.projectId+"-default-rtdb.firebaseio.com");let a,c=ca(o,s),l=c.repoInfo,h=void 0;"undefined"!==typeof e&&Object({NODE_ENV:"production",BASE_URL:"/group_buy/"})&&(h=Object({NODE_ENV:"production",BASE_URL:"/group_buy/"})[lc]),h?(a=!0,o=`http://${h}?ns=${l.namespace}`,c=ca(o,s),l=c.repoInfo):a=!c.repoInfo.secure;const u=s&&a?new X(X.OWNER):new J(t.name,t.options,n);_o("Invalid Firebase Database URL",c),yt(c.path)||E("Database URL must point to the root of a Firebase Database (not including a child path).");const d=gc(l,t,u,new Y(t.name,i));return new _c(d,t)}function fc(e,t){const n=hc[t];n&&n[e.key]===e||E(`Database ${t}(${e.repoInfo_}) has already been deleted.`),Ko(e),delete n[e.key]}function gc(e,t,n,i){let r=hc[t.name];r||(r={},hc[t.name]=r);let s=r[e.toURLString()];return s&&E("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Oo(e,uc,n,i),r[e.toURLString()]=s,s}class _c{constructor(e,t){this._repoInternal=e,this.app=t,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Eo(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ba(this._repo,ht())),this._rootInternal}_delete(){return null!==this._rootInternal&&(fc(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&E("Cannot call "+e+" on a deleted database.")}}function mc(){We.IS_TRANSPORT_INITIALIZED&&I("Transport has already been initialized. Please call this function before calling ref or setting up a listener")}function bc(){mc(),Me.forceDisallow()}function yc(){mc(),Be.forceDisallow(),Me.forceAllow()}function vc(e,t,n,i={}){e=Object(s["v"])(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&E("Cannot call useEmulator() after instance has already been initialized.");const r=e._repoInternal;let o=void 0;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&E('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new X(X.OWNER);else if(i.mockUserToken){const t="string"===typeof i.mockUserToken?i.mockUserToken:Object(s["n"])(i.mockUserToken,e.app.options.projectId);o=new X(t)}dc(r,t,n,o)}function wc(e){e=Object(s["v"])(e),e._checkNotDeleted("goOffline"),Ko(e._repo)}function Cc(e){e=Object(s["v"])(e),e._checkNotDeleted("goOnline"),Ho(e._repo)}function Tc(e,t){C(e,t)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(e){h(i["SDK_VERSION"]),Object(i["_registerComponent"])(new r["a"]("database",(e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return pc(n,i,r,t)},"PUBLIC").setMultipleInstances(!0)),Object(i["registerVersion"])(a,c,e),Object(i["registerVersion"])(a,c,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc={".sv":"timestamp"};function Ec(){return Oc}function Ic(e){return{".sv":{increment:e}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function Pc(e,t,n){var i;if(e=Object(s["v"])(e),go("Reference.transaction",e._path),".length"===e.key||".keys"===e.key)throw"Reference.transaction failed: "+e.key+" is a read-only object.";const r=null===(i=null===n||void 0===n?void 0:n.applyLocally)||void 0===i||i,o=new s["a"],a=(t,n,i)=>{let r=null;t?o.reject(t):(r=new ya(i,new ba(e._repo,e._path),cn),o.resolve(new Sc(n,r)))},c=ja(e,()=>{});return Go(e._repo,e._path,t,a,c,r),o.promise}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Lt.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Lt.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};kc()}).call(this,n("4362"))},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var i=n("e330"),r=n("1d80"),s=n("577e"),o=n("5899"),a=i("".replace),c="["+o+"]",l=RegExp("^"+c+c+"*"),h=RegExp(c+c+"*$"),u=function(e){return function(t){var n=s(r(t));return 1&e&&(n=a(n,l,"")),2&e&&(n=a(n,h,"")),n}};e.exports={start:u(1),end:u(2),trim:u(3)}},"8c2c":function(e,t,n){"use strict";var i=n("7a23");function r(e,t,n,r,s,o){return Object(i["openBlock"])(),Object(i["createElementBlock"])("div",{style:Object(i["normalizeStyle"])(s.style),ref:"lavContainer"},null,4)}n("a9e3");var s=n("94f1"),o=n.n(s),a={props:{options:{type:Object,required:!0},height:Number,width:Number},data:function(){return{style:{width:this.width?"".concat(this.width,"px"):"100%",height:this.height?"".concat(this.height,"px"):"100%",overflow:"hidden",margin:"0 auto"}}},mounted:function(){this.anim=o.a.loadAnimation({container:this.$refs.lavContainer,renderer:"svg",loop:!1!==this.options.loop,autoplay:!1!==this.options.autoplay,animationData:this.options.animationData,rendererSettings:this.options.rendererSettings}),this.$emit("animCreated",this.anim)}},c=n("6b0d"),l=n.n(c);const h=l()(a,[["render",r]]);t["a"]=h},a9e3:function(e,t,n){"use strict";var i=n("83ab"),r=n("da84"),s=n("e330"),o=n("94ca"),a=n("6eeb"),c=n("1a2d"),l=n("7156"),h=n("3a9b"),u=n("d9b5"),d=n("c04e"),p=n("d039"),f=n("241c").f,g=n("06cf").f,_=n("9bf2").f,m=n("408a"),b=n("58a8").trim,y="Number",v=r[y],w=v.prototype,C=r.TypeError,T=s("".slice),k=s("".charCodeAt),O=function(e){var t=d(e,"number");return"bigint"==typeof t?t:E(t)},E=function(e){var t,n,i,r,s,o,a,c,l=d(e,"number");if(u(l))throw C("Cannot convert a Symbol value to a number");if("string"==typeof l&&l.length>2)if(l=b(l),t=k(l,0),43===t||45===t){if(n=k(l,2),88===n||120===n)return NaN}else if(48===t){switch(k(l,1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+l}for(s=T(l,2),o=s.length,a=0;a<o;a++)if(c=k(s,a),c<48||c>r)return NaN;return parseInt(s,i)}return+l};if(o(y,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var I,S=function(e){var t=arguments.length<1?0:v(O(e)),n=this;return h(w,n)&&p((function(){m(n)}))?l(Object(t),n,S):t},P=i?f(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),R=0;P.length>R;R++)c(v,I=P[R])&&!c(S,I)&&_(S,I,g(v,I));S.prototype=w,w.constructor=S,a(r,y,S)}},b0c0:function(e,t,n){var i=n("83ab"),r=n("5e77").EXISTS,s=n("e330"),o=n("9bf2").f,a=Function.prototype,c=s(a.toString),l=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,h=s(l.exec),u="name";i&&!r&&o(a,u,{configurable:!0,get:function(){try{return h(l,c(this))[1]}catch(e){return""}}})},d1d1:function(e,t,n){},dc3f:function(e,t,n){"use strict";n.r(t);n("b0c0");var i=n("7a23"),r={class:"bg relative h-screen"},s={class:"vertical absolute left-32 hidden w-1/2 lg:block"},o={class:"vertical absolute right-0 w-screen rounded-none bg-white p-7 shadow-none lg:right-32 lg:w-96 lg:rounded-2xl lg:p-10 lg:shadow-2xl"},a=Object(i["createElementVNode"])("h3",{class:"mb-4 text-center text-xl text-2xl font-semibold sm:mb-6"},"登入賣家中心",-1),c={class:"flex w-full"},l=Object(i["createTextVNode"])("記住我"),h={class:"flex-1 text-right"},u=Object(i["createTextVNode"])("忘記密碼？"),d=Object(i["createTextVNode"])("登入"),p={class:"mt-5 flex w-full items-center justify-center"},f=Object(i["createElementVNode"])("div",null,"還沒有帳號？",-1),g={class:"text-left"},_=Object(i["createTextVNode"])("立即註冊"),m=Object(i["createTextVNode"])("或"),b=Object(i["createTextVNode"])("使用特約商帳號登入"),y=Object(i["createElementVNode"])("footer",{class:"absolute bottom-5 w-screen text-center"},"Copyright © 2022 EZTIT Inc",-1);function v(e,t,n,v,w,C){var T=Object(i["resolveComponent"])("lottie"),k=Object(i["resolveComponent"])("n-input"),O=Object(i["resolveComponent"])("n-form-item"),E=Object(i["resolveComponent"])("n-checkbox"),I=Object(i["resolveComponent"])("n-button"),S=Object(i["resolveComponent"])("n-divider"),P=Object(i["resolveComponent"])("n-form");return Object(i["openBlock"])(),Object(i["createElementBlock"])("div",r,[Object(i["createElementVNode"])("div",s,[Object(i["createVNode"])(T,{options:e.LoginAnimation,class:"h-5/6 w-5/6"},null,8,["options"])]),Object(i["createElementVNode"])("div",o,[a,Object(i["createVNode"])(P,{ref:"formRef","label-placement":"top",model:e.form},{default:Object(i["withCtx"])((function(){return[Object(i["createVNode"])(O,{label:"帳號",path:"name"},{default:Object(i["withCtx"])((function(){return[Object(i["createVNode"])(k,{value:e.form.name,"onUpdate:value":t[0]||(t[0]=function(t){return e.form.name=t}),placeholder:"請輸入帳號"},null,8,["value"])]})),_:1}),Object(i["createVNode"])(O,{label:"密碼",path:"password"},{default:Object(i["withCtx"])((function(){return[Object(i["createVNode"])(k,{value:e.form.password,"onUpdate:value":t[1]||(t[1]=function(t){return e.form.password=t}),type:"password","show-password-on":"click",placeholder:"請輸入密碼2",clearable:""},null,8,["value"])]})),_:1}),Object(i["createElementVNode"])("div",c,[Object(i["createVNode"])(E,{checked:e.form.remember,"onUpdate:checked":t[2]||(t[2]=function(t){return e.form.remember=t}),onClick:e.remember},{default:Object(i["withCtx"])((function(){return[l]})),_:1},8,["checked","onClick"]),Object(i["createElementVNode"])("div",h,[Object(i["createVNode"])(I,{quaternary:"",type:"info",onClick:t[3]||(t[3]=function(t){return e.$router.push("/forgotPwd")})},{default:Object(i["withCtx"])((function(){return[u]})),_:1})])]),Object(i["createVNode"])(I,{type:"info",class:"w-full",size:"large",strong:"",onClick:e.userLogin},{default:Object(i["withCtx"])((function(){return[d]})),_:1},8,["onClick"]),Object(i["createElementVNode"])("div",p,[f,Object(i["createElementVNode"])("div",g,[Object(i["createVNode"])(I,{quaternary:"",type:"info",onClick:t[4]||(t[4]=function(t){return e.$router.push("/signup")})},{default:Object(i["withCtx"])((function(){return[_]})),_:1})])]),Object(i["createVNode"])(S,null,{default:Object(i["withCtx"])((function(){return[m]})),_:1}),Object(i["createVNode"])(I,{class:"w-full",size:"large",strong:"",onClick:t[5]||(t[5]=function(t){return e.$router.push("vendor_login")})},{default:Object(i["withCtx"])((function(){return[b]})),_:1})]})),_:1},8,["model"])]),y])}var w=n("8c2c"),C=n("ea75"),T=n("2949"),k=n("7ded"),O=n("31cb"),E=n("22e5");const I="@firebase/analytics-compat",S="0.1.10";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class P{constructor(e,t){this.app=e,this._delegate=t}logEvent(e,t,n){Object(O["b"])(this._delegate,e,t,n)}setCurrentScreen(e,t){Object(O["d"])(this._delegate,e,t)}setUserId(e,t){Object(O["e"])(this._delegate,e,t)}setUserProperties(e,t){Object(O["f"])(this._delegate,e,t)}setAnalyticsCollectionEnabled(e){Object(O["c"])(this._delegate,e)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var R;(function(e){e["ADD_SHIPPING_INFO"]="add_shipping_info",e["ADD_PAYMENT_INFO"]="add_payment_info",e["ADD_TO_CART"]="add_to_cart",e["ADD_TO_WISHLIST"]="add_to_wishlist",e["BEGIN_CHECKOUT"]="begin_checkout",e["CHECKOUT_PROGRESS"]="checkout_progress",e["EXCEPTION"]="exception",e["GENERATE_LEAD"]="generate_lead",e["LOGIN"]="login",e["PAGE_VIEW"]="page_view",e["PURCHASE"]="purchase",e["REFUND"]="refund",e["REMOVE_FROM_CART"]="remove_from_cart",e["SCREEN_VIEW"]="screen_view",e["SEARCH"]="search",e["SELECT_CONTENT"]="select_content",e["SELECT_ITEM"]="select_item",e["SELECT_PROMOTION"]="select_promotion",e["SET_CHECKOUT_OPTION"]="set_checkout_option",e["SHARE"]="share",e["SIGN_UP"]="sign_up",e["TIMING_COMPLETE"]="timing_complete",e["VIEW_CART"]="view_cart",e["VIEW_ITEM"]="view_item",e["VIEW_ITEM_LIST"]="view_item_list",e["VIEW_PROMOTION"]="view_promotion",e["VIEW_SEARCH_RESULTS"]="view_search_results"})(R||(R={}));
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const N=e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("analytics").getImmediate();return new P(t,n)};function x(){const e={Analytics:P,settings:O["g"],isSupported:O["a"],EventName:R};k["a"].INTERNAL.registerComponent(new E["a"]("analytics-compat",N,"PUBLIC").setServiceProps(e).setMultipleInstances(!0))}x(),k["a"].registerVersion(I,S);var j=n("589b"),A=n("1fd5"),D=n("e691");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const M=new Map,F={activated:!1,tokenObservers:[]},L={initialized:!1,enabled:!1};function U(e){return M.get(e)||F}function q(e,t){M.set(e,t)}function B(){return L}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W="https://content-firebaseappcheck.googleapis.com/v1",V="exchangeRecaptchaV3Token",K="exchangeRecaptchaEnterpriseToken",H="exchangeDebugToken",$={OFFSET_DURATION:3e5,RETRIAL_MIN_WAIT:3e4,RETRIAL_MAX_WAIT:96e4},z=864e5;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class G{constructor(e,t,n,i,r){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=n,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new A["a"],await Q(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new A["a"],await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(t){this.retryPolicy(t)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const e=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),e}}}function Q(e){return new Promise(t=>{setTimeout(t,e)})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",["throttled"]:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},J=new A["b"]("appCheck","AppCheck",Y);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function X(e=!1){var t;return e?null===(t=self.grecaptcha)||void 0===t?void 0:t.enterprise:self.grecaptcha}function Z(e){if(!U(e).activated)throw J.create("use-before-activation",{appName:e.name})}function ee(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const t=16*Math.random()|0,n="x"===e?t:3&t|8;return n.toString(16)})}function te(e){const t=Math.round(e/1e3),n=Math.floor(t/86400),i=Math.floor((t-3600*n*24)/3600),r=Math.floor((t-3600*n*24-3600*i)/60),s=t-3600*n*24-3600*i-60*r;let o="";return n&&(o+=ne(n)+"d:"),i&&(o+=ne(i)+"h:"),o+=ne(r)+"m:"+ne(s)+"s",o}function ne(e){return 0===e?"00":e>=10?e.toString():"0"+e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ie({url:e,body:t},n){const i={"Content-Type":"application/json"},r=n.getImmediate({optional:!0});if(r){const e=await r.getHeartbeatsHeader();e&&(i["X-Firebase-Client"]=e)}const s={method:"POST",body:JSON.stringify(t),headers:i};let o,a;try{o=await fetch(e,s)}catch(u){throw J.create("fetch-network-error",{originalErrorMessage:u.message})}if(200!==o.status)throw J.create("fetch-status-error",{httpStatus:o.status});try{a=await o.json()}catch(u){throw J.create("fetch-parse-error",{originalErrorMessage:u.message})}const c=a.ttl.match(/^([\d.]+)(s)$/);if(!c||!c[2]||isNaN(Number(c[1])))throw J.create("fetch-parse-error",{originalErrorMessage:"ttl field (timeToLive) is not in standard Protobuf Duration format: "+a.ttl});const l=1e3*Number(c[1]),h=Date.now();return{token:a.token,expireTimeMillis:h+l,issuedAtTimeMillis:h}}function re(e,t){const{projectId:n,appId:i,apiKey:r}=e.options;return{url:`${W}/projects/${n}/apps/${i}:${V}?key=${r}`,body:{recaptcha_v3_token:t}}}function se(e,t){const{projectId:n,appId:i,apiKey:r}=e.options;return{url:`${W}/projects/${n}/apps/${i}:${K}?key=${r}`,body:{recaptcha_enterprise_token:t}}}function oe(e,t){const{projectId:n,appId:i,apiKey:r}=e.options;return{url:`${W}/projects/${n}/apps/${i}:${H}?key=${r}`,body:{debug_token:t}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae="firebase-app-check-database",ce=1,le="firebase-app-check-store",he="debug-token";let ue=null;function de(){return ue||(ue=new Promise((e,t)=>{try{const n=indexedDB.open(ae,ce);n.onsuccess=t=>{e(t.target.result)},n.onerror=e=>{var n;t(J.create("storage-open",{originalErrorMessage:null===(n=e.target.error)||void 0===n?void 0:n.message}))},n.onupgradeneeded=e=>{const t=e.target.result;switch(e.oldVersion){case 0:t.createObjectStore(le,{keyPath:"compositeKey"})}}}catch(n){t(J.create("storage-open",{originalErrorMessage:n.message}))}}),ue)}function pe(e){return be(ye(e))}function fe(e,t){return me(ye(e),t)}function ge(e){return me(he,e)}function _e(){return be(he)}async function me(e,t){const n=await de(),i=n.transaction(le,"readwrite"),r=i.objectStore(le),s=r.put({compositeKey:e,value:t});return new Promise((e,t)=>{s.onsuccess=t=>{e()},i.onerror=e=>{var n;t(J.create("storage-set",{originalErrorMessage:null===(n=e.target.error)||void 0===n?void 0:n.message}))}})}async function be(e){const t=await de(),n=t.transaction(le,"readonly"),i=n.objectStore(le),r=i.get(e);return new Promise((e,t)=>{r.onsuccess=t=>{const n=t.target.result;e(n?n.value:void 0)},n.onerror=e=>{var n;t(J.create("storage-get",{originalErrorMessage:null===(n=e.target.error)||void 0===n?void 0:n.message}))}})}function ye(e){return`${e.options.appId}-${e.name}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve=new D["b"]("@firebase/app-check");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function we(e){if(Object(A["D"])()){let n=void 0;try{n=await pe(e)}catch(t){ve.warn("Failed to read token from IndexedDB. Error: "+t)}return n}}function Ce(e,t){return Object(A["D"])()?fe(e,t).catch(e=>{ve.warn("Failed to write token to IndexedDB. Error: "+e)}):Promise.resolve()}async function Te(){let e=void 0;try{e=await _e()}catch(t){}if(e)return e;{const e=ee();return ge(e).catch(e=>ve.warn("Failed to persist debug token to IndexedDB. Error: "+e)),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(){const e=B();return e.enabled}async function Oe(){const e=B();if(e.enabled&&e.token)return e.token.promise;throw Error("\n            Can't get debug token in production mode.\n        ")}function Ee(){const e=Object(A["u"])(),t=B();if(t.initialized=!0,"string"!==typeof e.FIREBASE_APPCHECK_DEBUG_TOKEN&&!0!==e.FIREBASE_APPCHECK_DEBUG_TOKEN)return;t.enabled=!0;const n=new A["a"];t.token=n,"string"===typeof e.FIREBASE_APPCHECK_DEBUG_TOKEN?n.resolve(e.FIREBASE_APPCHECK_DEBUG_TOKEN):n.resolve(Te())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie={error:"UNKNOWN_ERROR"};function Se(e){return A["h"].encodeString(JSON.stringify(e),!1)}async function Pe(e,t=!1){const n=e.app;Z(n);const i=U(n);let r=i.token,s=void 0;if(!r){const e=await i.cachedTokenPromise;e&&De(e)&&(r=e)}if(!t&&r&&De(r))return{token:r.token};let o,a=!1;if(ke()){i.exchangeTokenPromise||(i.exchangeTokenPromise=ie(oe(n,await Oe()),e.heartbeatServiceProvider).then(e=>(i.exchangeTokenPromise=void 0,e)),a=!0);const t=await i.exchangeTokenPromise;return await Ce(n,t),q(n,Object.assign(Object.assign({},i),{token:t})),{token:t.token}}try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().then(e=>(i.exchangeTokenPromise=void 0,e)),a=!0),r=await i.exchangeTokenPromise}catch(c){"appCheck/throttled"===c.code?ve.warn(c.message):ve.error(c),s=c}return r?(o={token:r.token},q(n,Object.assign(Object.assign({},i),{token:r})),await Ce(n,r)):o=Me(s),a&&Ae(n,o),o}function Re(e,t,n,i){const{app:r}=e,s=U(r),o={next:n,error:i,type:t};if(q(r,Object.assign(Object.assign({},s),{tokenObservers:[...s.tokenObservers,o]})),s.token&&De(s.token)){const t=s.token;Promise.resolve().then(()=>{n({token:t.token}),xe(e)}).catch(()=>{})}s.cachedTokenPromise.then(()=>xe(e))}function Ne(e,t){const n=U(e),i=n.tokenObservers.filter(e=>e.next!==t);0===i.length&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),q(e,Object.assign(Object.assign({},n),{tokenObservers:i}))}function xe(e){const{app:t}=e,n=U(t);let i=n.tokenRefresher;i||(i=je(e),q(t,Object.assign(Object.assign({},n),{tokenRefresher:i}))),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function je(e){const{app:t}=e;return new G(async()=>{const n=U(t);let i;if(i=n.token?await Pe(e,!0):await Pe(e),i.error)throw i.error},()=>!0,()=>{const e=U(t);if(e.token){let t=e.token.issuedAtTimeMillis+.5*(e.token.expireTimeMillis-e.token.issuedAtTimeMillis)+3e5;const n=e.token.expireTimeMillis-3e5;return t=Math.min(t,n),Math.max(0,t-Date.now())}return 0},$.RETRIAL_MIN_WAIT,$.RETRIAL_MAX_WAIT)}function Ae(e,t){const n=U(e).tokenObservers;for(const r of n)try{"EXTERNAL"===r.type&&null!=t.error?r.error(t.error):r.next(t)}catch(i){}}function De(e){return e.expireTimeMillis-Date.now()>0}function Me(e){return{token:Se(Ie),error:e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){const{tokenObservers:e}=U(this.app);for(const t of e)Ne(this.app,t.next);return Promise.resolve()}}function Le(e,t){return new Fe(e,t)}function Ue(e){return{getToken:t=>Pe(e,t),addTokenListener:t=>Re(e,"INTERNAL",t),removeTokenListener:t=>Ne(e.app,t)}}const qe="@firebase/app-check",Be="0.5.8",We="https://www.google.com/recaptcha/api.js",Ve="https://www.google.com/recaptcha/enterprise.js";function Ke(e,t){const n=U(e),i=new A["a"];q(e,Object.assign(Object.assign({},n),{reCAPTCHAState:{initialized:i}}));const r=ze(e),s=X(!1);return s?$e(e,t,s,r,i):Ye(()=>{const n=X(!1);if(!n)throw new Error("no recaptcha");$e(e,t,n,r,i)}),i.promise}function He(e,t){const n=U(e),i=new A["a"];q(e,Object.assign(Object.assign({},n),{reCAPTCHAState:{initialized:i}}));const r=ze(e),s=X(!0);return s?$e(e,t,s,r,i):Je(()=>{const n=X(!0);if(!n)throw new Error("no recaptcha");$e(e,t,n,r,i)}),i.promise}function $e(e,t,n,i,r){n.ready(()=>{Qe(e,t,n,i),r.resolve(n)})}function ze(e){const t="fire_app_check_"+e.name,n=document.createElement("div");return n.id=t,n.style.display="none",document.body.appendChild(n),t}async function Ge(e){Z(e);const t=U(e).reCAPTCHAState,n=await t.initialized.promise;return new Promise((t,i)=>{const r=U(e).reCAPTCHAState;n.ready(()=>{t(n.execute(r.widgetId,{action:"fire_app_check"}))})})}function Qe(e,t,n,i){const r=n.render(i,{sitekey:t,size:"invisible"}),s=U(e);q(e,Object.assign(Object.assign({},s),{reCAPTCHAState:Object.assign(Object.assign({},s.reCAPTCHAState),{widgetId:r})}))}function Ye(e){const t=document.createElement("script");t.src=We,t.onload=e,document.head.appendChild(t)}function Je(e){const t=document.createElement("script");t.src=Ve,t.onload=e,document.head.appendChild(t)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){var e;nt(this._throttleData);const t=await Ge(this._app).catch(e=>{throw J.create("recaptcha-error")});let n;try{n=await ie(re(this._app,t),this._heartbeatServiceProvider)}catch(i){throw"fetch-status-error"===i.code?(this._throttleData=tt(Number(null===(e=i.customData)||void 0===e?void 0:e.httpStatus),this._throttleData),J.create("throttled",{time:te(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):i}return this._throttleData=null,n}initialize(e){this._app=e,this._heartbeatServiceProvider=Object(j["_getProvider"])(e,"heartbeat"),Ke(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof Xe&&this._siteKey===e._siteKey}}class Ze{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){var e;nt(this._throttleData);const t=await Ge(this._app).catch(e=>{throw J.create("recaptcha-error")});let n;try{n=await ie(se(this._app,t),this._heartbeatServiceProvider)}catch(i){throw"fetch-status-error"===i.code?(this._throttleData=tt(Number(null===(e=i.customData)||void 0===e?void 0:e.httpStatus),this._throttleData),J.create("throttled",{time:te(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):i}return this._throttleData=null,n}initialize(e){this._app=e,this._heartbeatServiceProvider=Object(j["_getProvider"])(e,"heartbeat"),He(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof Ze&&this._siteKey===e._siteKey}}class et{constructor(e){this._customProviderOptions=e}async getToken(){const e=await this._customProviderOptions.getToken(),t=Object(A["L"])(e.token),n=null!==t&&t<Date.now()&&t>0?1e3*t:Date.now();return Object.assign(Object.assign({},e),{issuedAtTimeMillis:n})}initialize(e){this._app=e}isEqual(e){return e instanceof et&&this._customProviderOptions.getToken.toString()===e._customProviderOptions.getToken.toString()}}function tt(e,t){if(404===e||403===e)return{backoffCount:1,allowRequestsAfter:Date.now()+z,httpStatus:e};{const n=t?t.backoffCount:0,i=Object(A["l"])(n,1e3,2);return{backoffCount:n+1,allowRequestsAfter:Date.now()+i,httpStatus:e}}}function nt(e){if(e&&Date.now()-e.allowRequestsAfter<=0)throw J.create("throttled",{time:te(e.allowRequestsAfter-Date.now()),httpStatus:e.httpStatus})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(e=Object(j["getApp"])(),t){e=Object(A["v"])(e);const n=Object(j["_getProvider"])(e,"app-check");if(B().initialized||Ee(),ke()&&Oe().then(e=>console.log(`App Check debug token: ${e}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`)),n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(r.isTokenAutoRefreshEnabled===t.isTokenAutoRefreshEnabled&&r.provider.isEqual(t.provider))return i;throw J.create("already-initialized",{appName:e.name})}const i=n.initialize({options:t});return rt(e,t.provider,t.isTokenAutoRefreshEnabled),U(e).isTokenAutoRefreshEnabled&&Re(i,"INTERNAL",()=>{}),i}function rt(e,t,n){const i=U(e),r=Object.assign(Object.assign({},i),{activated:!0});r.provider=t,r.cachedTokenPromise=we(e).then(t=>(t&&De(t)&&(q(e,Object.assign(Object.assign({},U(e)),{token:t})),Ae(e,{token:t.token})),t)),r.isTokenAutoRefreshEnabled=void 0===n?e.automaticDataCollectionEnabled:n,q(e,r),r.provider.initialize(e)}function st(e,t){const n=e.app,i=U(n);i.tokenRefresher&&(!0===t?i.tokenRefresher.start():i.tokenRefresher.stop()),q(n,Object.assign(Object.assign({},i),{isTokenAutoRefreshEnabled:t}))}async function ot(e,t){const n=await Pe(e,t);if(n.error)throw n.error;return{token:n.token}}function at(e,t,n,i){let r=()=>{},s=()=>{};return r=null!=t.next?t.next.bind(t):t,null!=t.error?s=t.error.bind(t):n&&(s=n),Re(e,"EXTERNAL",r,s),()=>Ne(e.app,r)}const ct="app-check",lt="app-check-internal";function ht(){Object(j["_registerComponent"])(new E["a"](ct,e=>{const t=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat");return Le(t,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider(lt).initialize()})),Object(j["_registerComponent"])(new E["a"](lt,e=>{const t=e.getProvider("app-check").getImmediate();return Ue(t)},"PUBLIC").setInstantiationMode("EXPLICIT")),Object(j["registerVersion"])(qe,Be)}ht();const ut="@firebase/app-check-compat",dt="0.2.8",pt={["use-before-activation"]:"App Check is being used before activate() is called for FirebaseApp {$appName}. Call activate() before instantiating other Firebase services."},ft=new A["b"]("appCheck","AppCheck",pt);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gt{constructor(e){this.app=e}activate(e,t){let n;n="string"===typeof e?new Xe(e):e instanceof Ze||e instanceof Xe||e instanceof et?e:new et({getToken:e.getToken}),this._delegate=it(this.app,{provider:n,isTokenAutoRefreshEnabled:t})}setTokenAutoRefreshEnabled(e){if(!this._delegate)throw ft.create("use-before-activation",{appName:this.app.name});st(this._delegate,e)}getToken(e){if(!this._delegate)throw ft.create("use-before-activation",{appName:this.app.name});return ot(this._delegate,e)}onTokenChanged(e,t,n){if(!this._delegate)throw ft.create("use-before-activation",{appName:this.app.name});return at(this._delegate,e,t,n)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t=e=>{const t=e.getProvider("app-compat").getImmediate();return new gt(t)};function mt(){k["a"].INTERNAL.registerComponent(new E["a"]("appCheck-compat",_t,"PUBLIC").setServiceProps({ReCaptchaEnterpriseProvider:Ze,ReCaptchaV3Provider:Xe,CustomProvider:et}))}mt(),k["a"].registerVersion(ut,dt);n("5994");var bt=n("51b0");const yt="@firebase/database-compat",vt="0.2.0",wt=new D["b"]("@firebase/database-compat"),Ct=function(e){const t="FIREBASE WARNING: "+e;wt.warn(t)},Tt=function(e,t,n,i){if((!i||void 0!==n)&&"boolean"!==typeof n)throw new Error(Object(A["s"])(e,t)+"must be a boolean.")},kt=function(e,t,n){if(!n||void 0!==t)switch(t){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(Object(A["s"])(e,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ot{constructor(e){this._delegate=e}cancel(e){Object(A["U"])("OnDisconnect.cancel",0,1,arguments.length),Object(A["V"])("OnDisconnect.cancel","onComplete",e,!0);const t=this._delegate.cancel();return e&&t.then(()=>e(null),t=>e(t)),t}remove(e){Object(A["U"])("OnDisconnect.remove",0,1,arguments.length),Object(A["V"])("OnDisconnect.remove","onComplete",e,!0);const t=this._delegate.remove();return e&&t.then(()=>e(null),t=>e(t)),t}set(e,t){Object(A["U"])("OnDisconnect.set",1,2,arguments.length),Object(A["V"])("OnDisconnect.set","onComplete",t,!0);const n=this._delegate.set(e);return t&&n.then(()=>t(null),e=>t(e)),n}setWithPriority(e,t,n){Object(A["U"])("OnDisconnect.setWithPriority",2,3,arguments.length),Object(A["V"])("OnDisconnect.setWithPriority","onComplete",n,!0);const i=this._delegate.setWithPriority(e,t);return n&&i.then(()=>n(null),e=>n(e)),i}update(e,t){if(Object(A["U"])("OnDisconnect.update",1,2,arguments.length),Array.isArray(e)){const t={};for(let n=0;n<e.length;++n)t[""+n]=e[n];e=t,Ct("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Object(A["V"])("OnDisconnect.update","onComplete",t,!0);const n=this._delegate.update(e);return t&&n.then(()=>t(null),e=>t(e)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return Object(A["U"])("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e,t){this._database=e,this._delegate=t}val(){return Object(A["U"])("DataSnapshot.val",0,0,arguments.length),this._delegate.val()}exportVal(){return Object(A["U"])("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()}toJSON(){return Object(A["U"])("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()}exists(){return Object(A["U"])("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()}child(e){return Object(A["U"])("DataSnapshot.child",0,1,arguments.length),e=String(e),Object(bt["g"])("DataSnapshot.child","path",e,!1),new It(this._database,this._delegate.child(e))}hasChild(e){return Object(A["U"])("DataSnapshot.hasChild",1,1,arguments.length),Object(bt["g"])("DataSnapshot.hasChild","path",e,!1),this._delegate.hasChild(e)}getPriority(){return Object(A["U"])("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority}forEach(e){return Object(A["U"])("DataSnapshot.forEach",1,1,arguments.length),Object(A["V"])("DataSnapshot.forEach","action",e,!1),this._delegate.forEach(t=>e(new It(this._database,t)))}hasChildren(){return Object(A["U"])("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()}get key(){return this._delegate.key}numChildren(){return Object(A["U"])("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size}getRef(){return Object(A["U"])("DataSnapshot.ref",0,0,arguments.length),new Pt(this._database,this._delegate.ref)}get ref(){return this.getRef()}}class St{constructor(e,t){this.database=e,this._delegate=t}on(e,t,n,i){var r;Object(A["U"])("Query.on",2,4,arguments.length),Object(A["V"])("Query.on","callback",t,!1);const s=St.getCancelAndContextArgs_("Query.on",n,i),o=(e,n)=>{t.call(s.context,new It(this.database,e),n)};o.userCallback=t,o.context=s.context;const a=null===(r=s.cancel)||void 0===r?void 0:r.bind(s.context);switch(e){case"value":return Object(bt["B"])(this._delegate,o,a),t;case"child_added":return Object(bt["x"])(this._delegate,o,a),t;case"child_removed":return Object(bt["A"])(this._delegate,o,a),t;case"child_changed":return Object(bt["y"])(this._delegate,o,a),t;case"child_moved":return Object(bt["z"])(this._delegate,o,a),t;default:throw new Error(Object(A["s"])("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}off(e,t,n){if(Object(A["U"])("Query.off",0,3,arguments.length),kt("Query.off",e,!0),Object(A["V"])("Query.off","callback",t,!0),Object(A["W"])("Query.off","context",n,!0),t){const i=()=>{};i.userCallback=t,i.context=n,Object(bt["w"])(this._delegate,e,i)}else Object(bt["w"])(this._delegate,e)}get(){return Object(bt["q"])(this._delegate).then(e=>new It(this.database,e))}once(e,t,n,i){Object(A["U"])("Query.once",1,4,arguments.length),Object(A["V"])("Query.once","callback",t,!0);const r=St.getCancelAndContextArgs_("Query.once",n,i),s=new A["a"],o=(e,n)=>{const i=new It(this.database,e);t&&t.call(r.context,i,n),s.resolve(i)};o.userCallback=t,o.context=r.context;const a=e=>{r.cancel&&r.cancel.call(r.context,e),s.reject(e)};switch(e){case"value":Object(bt["B"])(this._delegate,o,a,{onlyOnce:!0});break;case"child_added":Object(bt["x"])(this._delegate,o,a,{onlyOnce:!0});break;case"child_removed":Object(bt["A"])(this._delegate,o,a,{onlyOnce:!0});break;case"child_changed":Object(bt["y"])(this._delegate,o,a,{onlyOnce:!0});break;case"child_moved":Object(bt["z"])(this._delegate,o,a,{onlyOnce:!0});break;default:throw new Error(Object(A["s"])("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return s.promise}limitToFirst(e){return Object(A["U"])("Query.limitToFirst",1,1,arguments.length),new St(this.database,Object(bt["H"])(this._delegate,Object(bt["u"])(e)))}limitToLast(e){return Object(A["U"])("Query.limitToLast",1,1,arguments.length),new St(this.database,Object(bt["H"])(this._delegate,Object(bt["v"])(e)))}orderByChild(e){return Object(A["U"])("Query.orderByChild",1,1,arguments.length),new St(this.database,Object(bt["H"])(this._delegate,Object(bt["C"])(e)))}orderByKey(){return Object(A["U"])("Query.orderByKey",0,0,arguments.length),new St(this.database,Object(bt["H"])(this._delegate,Object(bt["D"])()))}orderByPriority(){return Object(A["U"])("Query.orderByPriority",0,0,arguments.length),new St(this.database,Object(bt["H"])(this._delegate,Object(bt["E"])()))}orderByValue(){return Object(A["U"])("Query.orderByValue",0,0,arguments.length),new St(this.database,Object(bt["H"])(this._delegate,Object(bt["F"])()))}startAt(e=null,t){return Object(A["U"])("Query.startAt",0,2,arguments.length),new St(this.database,Object(bt["H"])(this._delegate,Object(bt["R"])(e,t)))}startAfter(e=null,t){return Object(A["U"])("Query.startAfter",0,2,arguments.length),new St(this.database,Object(bt["H"])(this._delegate,Object(bt["Q"])(e,t)))}endAt(e=null,t){return Object(A["U"])("Query.endAt",0,2,arguments.length),new St(this.database,Object(bt["H"])(this._delegate,Object(bt["l"])(e,t)))}endBefore(e=null,t){return Object(A["U"])("Query.endBefore",0,2,arguments.length),new St(this.database,Object(bt["H"])(this._delegate,Object(bt["m"])(e,t)))}equalTo(e,t){return Object(A["U"])("Query.equalTo",1,2,arguments.length),new St(this.database,Object(bt["H"])(this._delegate,Object(bt["n"])(e,t)))}toString(){return Object(A["U"])("Query.toString",0,0,arguments.length),this._delegate.toString()}toJSON(){return Object(A["U"])("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()}isEqual(e){if(Object(A["U"])("Query.isEqual",1,1,arguments.length),!(e instanceof St)){const e="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(e)}return this._delegate.isEqual(e._delegate)}static getCancelAndContextArgs_(e,t,n){const i={cancel:void 0,context:void 0};if(t&&n)i.cancel=t,Object(A["V"])(e,"cancel",i.cancel,!0),i.context=n,Object(A["W"])(e,"context",i.context,!0);else if(t)if("object"===typeof t&&null!==t)i.context=t;else{if("function"!==typeof t)throw new Error(Object(A["s"])(e,"cancelOrContext")+" must either be a cancel callback or a context object.");i.cancel=t}return i}get ref(){return new Pt(this.database,new bt["d"](this._delegate._repo,this._delegate._path))}}class Pt extends St{constructor(e,t){super(e,new bt["b"](t._repo,t._path,new bt["c"],!1)),this.database=e,this._delegate=t}getKey(){return Object(A["U"])("Reference.key",0,0,arguments.length),this._delegate.key}child(e){return Object(A["U"])("Reference.child",1,1,arguments.length),"number"===typeof e&&(e=String(e)),new Pt(this.database,Object(bt["i"])(this._delegate,e))}getParent(){Object(A["U"])("Reference.parent",0,0,arguments.length);const e=this._delegate.parent;return e?new Pt(this.database,e):null}getRoot(){return Object(A["U"])("Reference.root",0,0,arguments.length),new Pt(this.database,this._delegate.root)}set(e,t){Object(A["U"])("Reference.set",1,2,arguments.length),Object(A["V"])("Reference.set","onComplete",t,!0);const n=Object(bt["N"])(this._delegate,e);return t&&n.then(()=>t(null),e=>t(e)),n}update(e,t){if(Object(A["U"])("Reference.update",1,2,arguments.length),Array.isArray(e)){const t={};for(let n=0;n<e.length;++n)t[""+n]=e[n];e=t,Ct("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Object(bt["h"])("Reference.update",this._delegate._path),Object(A["V"])("Reference.update","onComplete",t,!0);const n=Object(bt["S"])(this._delegate,e);return t&&n.then(()=>t(null),e=>t(e)),n}setWithPriority(e,t,n){Object(A["U"])("Reference.setWithPriority",2,3,arguments.length),Object(A["V"])("Reference.setWithPriority","onComplete",n,!0);const i=Object(bt["P"])(this._delegate,e,t);return n&&i.then(()=>n(null),e=>n(e)),i}remove(e){Object(A["U"])("Reference.remove",0,1,arguments.length),Object(A["V"])("Reference.remove","onComplete",e,!0);const t=Object(bt["K"])(this._delegate);return e&&t.then(()=>e(null),t=>e(t)),t}transaction(e,t,n){Object(A["U"])("Reference.transaction",1,3,arguments.length),Object(A["V"])("Reference.transaction","transactionUpdate",e,!1),Object(A["V"])("Reference.transaction","onComplete",t,!0),Tt("Reference.transaction","applyLocally",n,!0);const i=Object(bt["L"])(this._delegate,e,{applyLocally:n}).then(e=>new Et(e.committed,new It(this.database,e.snapshot)));return t&&i.then(e=>t(null,e.committed,e.snapshot),e=>t(e,!1,null)),i}setPriority(e,t){Object(A["U"])("Reference.setPriority",1,2,arguments.length),Object(A["V"])("Reference.setPriority","onComplete",t,!0);const n=Object(bt["O"])(this._delegate,e);return t&&n.then(()=>t(null),e=>t(e)),n}push(e,t){Object(A["U"])("Reference.push",0,2,arguments.length),Object(A["V"])("Reference.push","onComplete",t,!0);const n=Object(bt["G"])(this._delegate,e),i=n.then(e=>new Pt(this.database,e));t&&i.then(()=>t(null),e=>t(e));const r=new Pt(this.database,n);return r.then=i.then.bind(i),r.catch=i.catch.bind(i,void 0),r}onDisconnect(){return Object(bt["h"])("Reference.onDisconnect",this._delegate._path),new Ot(new bt["a"](this._delegate._repo,this._delegate._path))}get key(){return this.getKey()}get parent(){return this.getParent()}get root(){return this.getRoot()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e,t){this._delegate=e,this.app=t,this.INTERNAL={delete:()=>this._delegate._delete(),forceWebSockets:bt["p"],forceLongPolling:bt["o"]}}useEmulator(e,t,n={}){Object(bt["j"])(this._delegate,e,t,n)}ref(e){if(Object(A["U"])("database.ref",0,1,arguments.length),e instanceof Pt){const t=Object(bt["J"])(this._delegate,e.toString());return new Pt(this,t)}{const t=Object(bt["I"])(this._delegate,e);return new Pt(this,t)}}refFromURL(e){const t="database.refFromURL";Object(A["U"])(t,1,1,arguments.length);const n=Object(bt["J"])(this._delegate,e);return new Pt(this,n)}goOffline(){return Object(A["U"])("database.goOffline",0,0,arguments.length),Object(bt["r"])(this._delegate)}goOnline(){return Object(A["U"])("database.goOnline",0,0,arguments.length),Object(bt["s"])(this._delegate)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Nt({app:e,url:t,version:n,customAuthImpl:i,namespace:r,nodeAdmin:s=!1}){Object(bt["f"])(n);const o=new E["c"]("auth-internal",new E["b"]("database-standalone"));return o.setComponent(new E["a"]("auth-internal",()=>i,"PRIVATE")),{instance:new Rt(Object(bt["e"])(e,o,void 0,t,s),e),namespace:r}}Rt.ServerValue={TIMESTAMP:Object(bt["M"])(),increment:e=>Object(bt["t"])(e)};var xt=Object.freeze({__proto__:null,initStandalone:Nt});
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt=Rt.ServerValue;function At(e){e.INTERNAL.registerComponent(new E["a"]("database-compat",(e,{instanceIdentifier:t})=>{const n=e.getProvider("app-compat").getImmediate(),i=e.getProvider("database").getImmediate({identifier:t});return new Rt(i,n)},"PUBLIC").setServiceProps({Reference:Pt,Query:St,Database:Rt,DataSnapshot:It,enableLogging:bt["k"],INTERNAL:xt,ServerValue:jt}).setMultipleInstances(!0)),e.registerVersion(yt,vt)}At(k["a"]);n("1a43");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt="type.googleapis.com/google.protobuf.Int64Value",Mt="type.googleapis.com/google.protobuf.UInt64Value";function Ft(e,t){const n={};for(const i in e)e.hasOwnProperty(i)&&(n[i]=t(e[i]));return n}function Lt(e){if(null==e)return null;if(e instanceof Number&&(e=e.valueOf()),"number"===typeof e&&isFinite(e))return e;if(!0===e||!1===e)return e;if("[object String]"===Object.prototype.toString.call(e))return e;if(e instanceof Date)return e.toISOString();if(Array.isArray(e))return e.map(e=>Lt(e));if("function"===typeof e||"object"===typeof e)return Ft(e,e=>Lt(e));throw new Error("Data cannot be encoded in JSON: "+e)}function Ut(e){if(null==e)return e;if(e["@type"])switch(e["@type"]){case Dt:case Mt:{const t=Number(e["value"]);if(isNaN(t))throw new Error("Data cannot be decoded from JSON: "+e);return t}default:throw new Error("Data cannot be decoded from JSON: "+e)}return Array.isArray(e)?e.map(e=>Ut(e)):"function"===typeof e||"object"===typeof e?Ft(e,e=>Ut(e)):e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt="functions",Bt={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt extends A["c"]{constructor(e,t,n){super(`${qt}/${e}`,t||""),this.details=n}}function Vt(e){if(e>=200&&e<300)return"ok";switch(e){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function Kt(e,t){let n=Vt(e),i=n,r=void 0;try{const e=t&&t.error;if(e){const t=e.status;if("string"===typeof t){if(!Bt[t])return new Wt("internal","internal");n=Bt[t],i=t}const s=e.message;"string"===typeof s&&(i=s),r=e.details,void 0!==r&&(r=Ut(r))}}catch(s){}return"ok"===n?null:new Wt(n,i,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e,t,n){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=t.getImmediate({optional:!0}),this.auth||e.get().then(e=>this.auth=e,()=>{}),this.messaging||t.get().then(e=>this.messaging=e,()=>{}),this.appCheck||n.get().then(e=>this.appCheck=e,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return null===e||void 0===e?void 0:e.accessToken}catch(e){return}}async getMessagingToken(){if(this.messaging&&"Notification"in self&&"granted"===Notification.permission)try{return await this.messaging.getToken()}catch(e){return}}async getAppCheckToken(){if(this.appCheck){const e=await this.appCheck.getToken();return e.error?null:e.token}return null}async getContext(){const e=await this.getAuthToken(),t=await this.getMessagingToken(),n=await this.getAppCheckToken();return{authToken:e,messagingToken:t,appCheckToken:n}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t="us-central1";function zt(e){let t=null;return{promise:new Promise((n,i)=>{t=setTimeout(()=>{i(new Wt("deadline-exceeded","deadline-exceeded"))},e)}),cancel:()=>{t&&clearTimeout(t)}}}class Gt{constructor(e,t,n,i,r=$t,s){this.app=e,this.fetchImpl=s,this.emulatorOrigin=null,this.contextProvider=new Ht(t,n,i),this.cancelAllRequests=new Promise(e=>{this.deleteService=()=>Promise.resolve(e())});try{const e=new URL(r);this.customDomain=e.origin,this.region=$t}catch(o){this.customDomain=null,this.region=r}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;if(null!==this.emulatorOrigin){const n=this.emulatorOrigin;return`${n}/${t}/${this.region}/${e}`}return null!==this.customDomain?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function Qt(e,t,n){e.emulatorOrigin=`http://${t}:${n}`}function Yt(e,t,n){return i=>Zt(e,t,i,n||{})}function Jt(e,t,n){return i=>en(e,t,i,n||{})}async function Xt(e,t,n,i){let r;n["Content-Type"]="application/json";try{r=await i(e,{method:"POST",body:JSON.stringify(t),headers:n})}catch(o){return{status:0,json:null}}let s=null;try{s=await r.json()}catch(o){}return{status:r.status,json:s}}function Zt(e,t,n,i){const r=e._url(t);return en(e,r,n,i)}async function en(e,t,n,i){n=Lt(n);const r={data:n},s={},o=await e.contextProvider.getContext();o.authToken&&(s["Authorization"]="Bearer "+o.authToken),o.messagingToken&&(s["Firebase-Instance-ID-Token"]=o.messagingToken),null!==o.appCheckToken&&(s["X-Firebase-AppCheck"]=o.appCheckToken);const a=i.timeout||7e4,c=zt(a),l=await Promise.race([Xt(t,r,s,e.fetchImpl),c.promise,e.cancelAllRequests]);if(c.cancel(),!l)throw new Wt("cancelled","Firebase Functions instance was deleted.");const h=Kt(l.status,l.json);if(h)throw h;if(!l.json)throw new Wt("internal","Response is not valid JSON object.");let u=l.json.data;if("undefined"===typeof u&&(u=l.json.result),"undefined"===typeof u)throw new Wt("internal","Response is missing data field.");const d=Ut(u);return{data:d}}const tn="@firebase/functions",nn="0.8.1",rn="auth-internal",sn="app-check-internal",on="messaging-internal";function an(e,t){const n=(t,{instanceIdentifier:n})=>{const i=t.getProvider("app").getImmediate(),r=t.getProvider(rn),s=t.getProvider(on),o=t.getProvider(sn);return new Gt(i,r,s,o,n,e)};Object(j["_registerComponent"])(new E["a"](qt,n,"PUBLIC").setMultipleInstances(!0)),Object(j["registerVersion"])(tn,nn,t),Object(j["registerVersion"])(tn,nn,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(e,t,n){Qt(Object(A["v"])(e),t,n)}function ln(e,t,n){return Yt(Object(A["v"])(e),t,n)}function hn(e,t,n){return Jt(Object(A["v"])(e),t,n)}an(fetch.bind(self));const un="@firebase/functions-compat",dn="0.2.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pn{constructor(e,t){this.app=e,this._delegate=t,this._region=this._delegate.region,this._customDomain=this._delegate.customDomain}httpsCallable(e,t){return ln(this._delegate,e,t)}httpsCallableFromURL(e,t){return hn(this._delegate,e,t)}useFunctionsEmulator(e){const t=e.match("[a-zA-Z]+://([a-zA-Z0-9.-]+)(?::([0-9]+))?");if(null==t)throw new A["c"]("functions","No origin provided to useFunctionsEmulator()");if(null==t[2])throw new A["c"]("functions","Port missing in origin provided to useFunctionsEmulator()");return cn(this._delegate,t[1],Number(t[2]))}useEmulator(e,t){return cn(this._delegate,e,t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn="us-central1",gn=(e,{instanceIdentifier:t})=>{const n=e.getProvider("app-compat").getImmediate(),i=e.getProvider("functions").getImmediate({identifier:null!==t&&void 0!==t?t:fn});return new pn(n,i)};function _n(){const e={Functions:pn};k["a"].INTERNAL.registerComponent(new E["a"]("functions-compat",gn,"PUBLIC").setServiceProps(e).setMultipleInstances(!0))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_n(),k["a"].registerVersion(un,dn);n("bd5a");var mn=n("1d25");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const bn="/firebase-messaging-sw.js",yn="/firebase-cloud-messaging-push-scope",vn="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",wn="https://fcmregistrations.googleapis.com/v1",Cn="google.c.a.c_id",Tn="google.c.a.c_l",kn="google.c.a.ts",On="google.c.a.e";var En,In;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Sn(e){const t=new Uint8Array(e),n=btoa(String.fromCharCode(...t));return n.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Pn(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(n),r=new Uint8Array(i.length);for(let s=0;s<i.length;++s)r[s]=i.charCodeAt(s);return r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["DATA_MESSAGE"]=1]="DATA_MESSAGE",e[e["DISPLAY_NOTIFICATION"]=3]="DISPLAY_NOTIFICATION"})(En||(En={})),function(e){e["PUSH_RECEIVED"]="push-received",e["NOTIFICATION_CLICKED"]="notification-clicked"}(In||(In={}));const Rn="fcm_token_details_db",Nn=5,xn="fcm_token_object_Store";async function jn(e){if("databases"in indexedDB){const e=await indexedDB.databases(),t=e.map(e=>e.name);if(!t.includes(Rn))return null}let t=null;const n=await Object(mn["b"])(Rn,Nn,{upgrade:async(n,i,r,s)=>{var o;if(i<2)return;if(!n.objectStoreNames.contains(xn))return;const a=s.objectStore(xn),c=await a.index("fcmSenderId").get(e);if(await a.clear(),c)if(2===i){const e=c;if(!e.auth||!e.p256dh||!e.endpoint)return;t={token:e.fcmToken,createTime:null!==(o=e.createTime)&&void 0!==o?o:Date.now(),subscriptionOptions:{auth:e.auth,p256dh:e.p256dh,endpoint:e.endpoint,swScope:e.swScope,vapidKey:"string"===typeof e.vapidKey?e.vapidKey:Sn(e.vapidKey)}}}else if(3===i){const e=c;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:Sn(e.auth),p256dh:Sn(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:Sn(e.vapidKey)}}}else if(4===i){const e=c;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:Sn(e.auth),p256dh:Sn(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:Sn(e.vapidKey)}}}}});return n.close(),await Object(mn["a"])(Rn),await Object(mn["a"])("fcm_vapid_details_db"),await Object(mn["a"])("undefined"),An(t)?t:null}function An(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return"number"===typeof e.createTime&&e.createTime>0&&"string"===typeof e.token&&e.token.length>0&&"string"===typeof t.auth&&t.auth.length>0&&"string"===typeof t.p256dh&&t.p256dh.length>0&&"string"===typeof t.endpoint&&t.endpoint.length>0&&"string"===typeof t.swScope&&t.swScope.length>0&&"string"===typeof t.vapidKey&&t.vapidKey.length>0}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn="firebase-messaging-database",Mn=1,Fn="firebase-messaging-store";let Ln=null;function Un(){return Ln||(Ln=Object(mn["b"])(Dn,Mn,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Fn)}}})),Ln}async function qn(e){const t=Vn(e),n=await Un(),i=await n.transaction(Fn).objectStore(Fn).get(t);if(i)return i;{const t=await jn(e.appConfig.senderId);if(t)return await Bn(e,t),t}}async function Bn(e,t){const n=Vn(e),i=await Un(),r=i.transaction(Fn,"readwrite");return await r.objectStore(Fn).put(t,n),await r.done,t}async function Wn(e){const t=Vn(e),n=await Un(),i=n.transaction(Fn,"readwrite");await i.objectStore(Fn).delete(t),await i.done}function Vn({appConfig:e}){return e.appId}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Hn=new A["b"]("messaging","Messaging",Kn);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function $n(e,t){const n=await Yn(e),i=Jn(t),r={method:"POST",headers:n,body:JSON.stringify(i)};let s;try{const t=await fetch(Qn(e.appConfig),r);s=await t.json()}catch(o){throw Hn.create("token-subscribe-failed",{errorInfo:o})}if(s.error){const e=s.error.message;throw Hn.create("token-subscribe-failed",{errorInfo:e})}if(!s.token)throw Hn.create("token-subscribe-no-token");return s.token}async function zn(e,t){const n=await Yn(e),i=Jn(t.subscriptionOptions),r={method:"PATCH",headers:n,body:JSON.stringify(i)};let s;try{const n=await fetch(`${Qn(e.appConfig)}/${t.token}`,r);s=await n.json()}catch(o){throw Hn.create("token-update-failed",{errorInfo:o})}if(s.error){const e=s.error.message;throw Hn.create("token-update-failed",{errorInfo:e})}if(!s.token)throw Hn.create("token-update-no-token");return s.token}async function Gn(e,t){const n=await Yn(e),i={method:"DELETE",headers:n};try{const n=await fetch(`${Qn(e.appConfig)}/${t}`,i),r=await n.json();if(r.error){const e=r.error.message;throw Hn.create("token-unsubscribe-failed",{errorInfo:e})}}catch(r){throw Hn.create("token-unsubscribe-failed",{errorInfo:r})}}function Qn({projectId:e}){return`${wn}/projects/${e}/registrations`}async function Yn({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":"FIS "+n})}function Jn({p256dh:e,auth:t,endpoint:n,vapidKey:i}){const r={web:{endpoint:n,auth:t,p256dh:e}};return i!==vn&&(r.web.applicationPubKey=i),r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn=6048e5;async function Zn(e){const t=await ii(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:Sn(t.getKey("auth")),p256dh:Sn(t.getKey("p256dh"))},i=await qn(e.firebaseDependencies);if(i){if(ri(i.subscriptionOptions,n))return Date.now()>=i.createTime+Xn?ti(e,{token:i.token,createTime:Date.now(),subscriptionOptions:n}):i.token;try{await Gn(e.firebaseDependencies,i.token)}catch(r){console.warn(r)}return ni(e.firebaseDependencies,n)}return ni(e.firebaseDependencies,n)}async function ei(e){const t=await qn(e.firebaseDependencies);t&&(await Gn(e.firebaseDependencies,t.token),await Wn(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return!n||n.unsubscribe()}async function ti(e,t){try{const n=await zn(e.firebaseDependencies,t),i=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await Bn(e.firebaseDependencies,i),n}catch(n){throw await ei(e),n}}async function ni(e,t){const n=await $n(e,t),i={token:n,createTime:Date.now(),subscriptionOptions:t};return await Bn(e,i),i.token}async function ii(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Pn(t)})}function ri(e,t){const n=t.vapidKey===e.vapidKey,i=t.endpoint===e.endpoint,r=t.auth===e.auth,s=t.p256dh===e.p256dh;return n&&i&&r&&s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return oi(t,e),ai(t,e),ci(t,e),t}function oi(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const i=t.notification.body;i&&(e.notification.body=i);const r=t.notification.image;r&&(e.notification.image=r)}function ai(e,t){t.data&&(e.data=t.data)}function ci(e,t){if(!t.fcmOptions)return;e.fcmOptions={};const n=t.fcmOptions.link;n&&(e.fcmOptions.link=n);const i=t.fcmOptions.analytics_label;i&&(e.fcmOptions.analyticsLabel=i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(e){return"object"===typeof e&&!!e&&Cn in e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(e,t){const n=[];for(let i=0;i<e.length;i++)n.push(e.charAt(i)),i<t.length&&n.push(t.charAt(i));return n.join("")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(e){if(!e||!e.options)throw di("App Configuration Object");if(!e.name)throw di("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const i of t)if(!n[i])throw di(i);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function di(e){return Hn.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hi("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),hi("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");class pi{constructor(e,t,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=ui(e);this.firebaseDependencies={app:e,appConfig:i,installations:t,analyticsProvider:n}}_delete(){return Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fi(e){try{e.swRegistration=await navigator.serviceWorker.register(bn,{scope:yn}),e.swRegistration.update().catch(()=>{})}catch(t){throw Hn.create("failed-service-worker-registration",{browserErrorMessage:t.message})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gi(e,t){if(t||e.swRegistration||await fi(e),t||!e.swRegistration){if(!(t instanceof ServiceWorkerRegistration))throw Hn.create("invalid-sw-registration");e.swRegistration=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _i(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=vn)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mi(e,t){if(!navigator)throw Hn.create("only-available-in-window");if("default"===Notification.permission&&await Notification.requestPermission(),"granted"!==Notification.permission)throw Hn.create("permission-blocked");return await _i(e,null===t||void 0===t?void 0:t.vapidKey),await gi(e,null===t||void 0===t?void 0:t.serviceWorkerRegistration),Zn(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bi(e,t,n){const i=yi(t),r=await e.firebaseDependencies.analyticsProvider.get();r.logEvent(i,{message_id:n[Cn],message_name:n[Tn],message_time:n[kn],message_device_time:Math.floor(Date.now()/1e3)})}function yi(e){switch(e){case In.NOTIFICATION_CLICKED:return"notification_open";case In.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vi(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===In.PUSH_RECEIVED&&("function"===typeof e.onMessageHandler?e.onMessageHandler(si(n)):e.onMessageHandler.next(si(n)));const i=n.data;li(i)&&"1"===i[On]&&await bi(e,n.messageType,i)}const wi="@firebase/messaging",Ci="0.9.13",Ti=e=>{const t=new pi(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",e=>vi(t,e)),t},ki=e=>{const t=e.getProvider("messaging").getImmediate(),n={getToken:e=>mi(t,e)};return n};function Oi(){Object(j["_registerComponent"])(new E["a"]("messaging",Ti,"PUBLIC")),Object(j["_registerComponent"])(new E["a"]("messaging-internal",ki,"PRIVATE")),Object(j["registerVersion"])(wi,Ci),Object(j["registerVersion"])(wi,Ci,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ei(e){if(!navigator)throw Hn.create("only-available-in-window");return e.swRegistration||await fi(e),ei(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(e,t){if(!navigator)throw Hn.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Si(e,t){return e=Object(A["v"])(e),mi(e,t)}function Pi(e){return e=Object(A["v"])(e),Ei(e)}function Ri(e,t){return e=Object(A["v"])(e),Ii(e,t)}Oi();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ni="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",xi="https://fcmregistrations.googleapis.com/v1",ji="FCM_MSG",Ai="google.c.a.c_id",Di=3,Mi=1;var Fi,Li;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ui(e){const t=new Uint8Array(e),n=btoa(String.fromCharCode(...t));return n.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function qi(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(n),r=new Uint8Array(i.length);for(let s=0;s<i.length;++s)r[s]=i.charCodeAt(s);return r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["DATA_MESSAGE"]=1]="DATA_MESSAGE",e[e["DISPLAY_NOTIFICATION"]=3]="DISPLAY_NOTIFICATION"})(Fi||(Fi={})),function(e){e["PUSH_RECEIVED"]="push-received",e["NOTIFICATION_CLICKED"]="notification-clicked"}(Li||(Li={}));const Bi="fcm_token_details_db",Wi=5,Vi="fcm_token_object_Store";async function Ki(e){if("databases"in indexedDB){const e=await indexedDB.databases(),t=e.map(e=>e.name);if(!t.includes(Bi))return null}let t=null;const n=await Object(mn["b"])(Bi,Wi,{upgrade:async(n,i,r,s)=>{var o;if(i<2)return;if(!n.objectStoreNames.contains(Vi))return;const a=s.objectStore(Vi),c=await a.index("fcmSenderId").get(e);if(await a.clear(),c)if(2===i){const e=c;if(!e.auth||!e.p256dh||!e.endpoint)return;t={token:e.fcmToken,createTime:null!==(o=e.createTime)&&void 0!==o?o:Date.now(),subscriptionOptions:{auth:e.auth,p256dh:e.p256dh,endpoint:e.endpoint,swScope:e.swScope,vapidKey:"string"===typeof e.vapidKey?e.vapidKey:Ui(e.vapidKey)}}}else if(3===i){const e=c;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:Ui(e.auth),p256dh:Ui(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:Ui(e.vapidKey)}}}else if(4===i){const e=c;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:Ui(e.auth),p256dh:Ui(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:Ui(e.vapidKey)}}}}});return n.close(),await Object(mn["a"])(Bi),await Object(mn["a"])("fcm_vapid_details_db"),await Object(mn["a"])("undefined"),Hi(t)?t:null}function Hi(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return"number"===typeof e.createTime&&e.createTime>0&&"string"===typeof e.token&&e.token.length>0&&"string"===typeof t.auth&&t.auth.length>0&&"string"===typeof t.p256dh&&t.p256dh.length>0&&"string"===typeof t.endpoint&&t.endpoint.length>0&&"string"===typeof t.swScope&&t.swScope.length>0&&"string"===typeof t.vapidKey&&t.vapidKey.length>0}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i="firebase-messaging-database",zi=1,Gi="firebase-messaging-store";let Qi=null;function Yi(){return Qi||(Qi=Object(mn["b"])($i,zi,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Gi)}}})),Qi}async function Ji(e){const t=er(e),n=await Yi(),i=await n.transaction(Gi).objectStore(Gi).get(t);if(i)return i;{const t=await Ki(e.appConfig.senderId);if(t)return await Xi(e,t),t}}async function Xi(e,t){const n=er(e),i=await Yi(),r=i.transaction(Gi,"readwrite");return await r.objectStore(Gi).put(t,n),await r.done,t}async function Zi(e){const t=er(e),n=await Yi(),i=n.transaction(Gi,"readwrite");await i.objectStore(Gi).delete(t),await i.done}function er({appConfig:e}){return e.appId}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},nr=new A["b"]("messaging","Messaging",tr);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ir(e,t){const n=await ar(e),i=cr(t),r={method:"POST",headers:n,body:JSON.stringify(i)};let s;try{const t=await fetch(or(e.appConfig),r);s=await t.json()}catch(o){throw nr.create("token-subscribe-failed",{errorInfo:o})}if(s.error){const e=s.error.message;throw nr.create("token-subscribe-failed",{errorInfo:e})}if(!s.token)throw nr.create("token-subscribe-no-token");return s.token}async function rr(e,t){const n=await ar(e),i=cr(t.subscriptionOptions),r={method:"PATCH",headers:n,body:JSON.stringify(i)};let s;try{const n=await fetch(`${or(e.appConfig)}/${t.token}`,r);s=await n.json()}catch(o){throw nr.create("token-update-failed",{errorInfo:o})}if(s.error){const e=s.error.message;throw nr.create("token-update-failed",{errorInfo:e})}if(!s.token)throw nr.create("token-update-no-token");return s.token}async function sr(e,t){const n=await ar(e),i={method:"DELETE",headers:n};try{const n=await fetch(`${or(e.appConfig)}/${t}`,i),r=await n.json();if(r.error){const e=r.error.message;throw nr.create("token-unsubscribe-failed",{errorInfo:e})}}catch(r){throw nr.create("token-unsubscribe-failed",{errorInfo:r})}}function or({projectId:e}){return`${xi}/projects/${e}/registrations`}async function ar({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":"FIS "+n})}function cr({p256dh:e,auth:t,endpoint:n,vapidKey:i}){const r={web:{endpoint:n,auth:t,p256dh:e}};return i!==Ni&&(r.web.applicationPubKey=i),r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr=6048e5;async function hr(e){const t=await fr(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:Ui(t.getKey("auth")),p256dh:Ui(t.getKey("p256dh"))},i=await Ji(e.firebaseDependencies);if(i){if(gr(i.subscriptionOptions,n))return Date.now()>=i.createTime+lr?dr(e,{token:i.token,createTime:Date.now(),subscriptionOptions:n}):i.token;try{await sr(e.firebaseDependencies,i.token)}catch(r){console.warn(r)}return pr(e.firebaseDependencies,n)}return pr(e.firebaseDependencies,n)}async function ur(e){const t=await Ji(e.firebaseDependencies);t&&(await sr(e.firebaseDependencies,t.token),await Zi(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return!n||n.unsubscribe()}async function dr(e,t){try{const n=await rr(e.firebaseDependencies,t),i=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await Xi(e.firebaseDependencies,i),n}catch(n){throw await ur(e),n}}async function pr(e,t){const n=await ir(e,t),i={token:n,createTime:Date.now(),subscriptionOptions:t};return await Xi(e,i),i.token}async function fr(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:qi(t)})}function gr(e,t){const n=t.vapidKey===e.vapidKey,i=t.endpoint===e.endpoint,r=t.auth===e.auth,s=t.p256dh===e.p256dh;return n&&i&&r&&s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return mr(t,e),br(t,e),yr(t,e),t}function mr(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const i=t.notification.body;i&&(e.notification.body=i);const r=t.notification.image;r&&(e.notification.image=r)}function br(e,t){t.data&&(e.data=t.data)}function yr(e,t){if(!t.fcmOptions)return;e.fcmOptions={};const n=t.fcmOptions.link;n&&(e.fcmOptions.link=n);const i=t.fcmOptions.analytics_label;i&&(e.fcmOptions.analyticsLabel=i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(e){return"object"===typeof e&&!!e&&Ai in e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(e){return new Promise(t=>{setTimeout(t,e)})}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cr(e,t){const n=Tr(t,await e.firebaseDependencies.installations.getId());kr(e,n)}function Tr(e,t){var n,i;const r={};return e.from&&(r.project_number=e.from),e.fcmMessageId&&(r.message_id=e.fcmMessageId),r.instance_id=t,e.notification?r.message_type=Fi.DISPLAY_NOTIFICATION.toString():r.message_type=Fi.DATA_MESSAGE.toString(),r.sdk_platform=Di.toString(),r.package_name=self.origin.replace(/(^\w+:|^)\/\//,""),e.collapse_key&&(r.collapse_key=e.collapse_key),r.event=Mi.toString(),(null===(n=e.fcmOptions)||void 0===n?void 0:n.analytics_label)&&(r.analytics_label=null===(i=e.fcmOptions)||void 0===i?void 0:i.analytics_label),r}function kr(e,t){const n={};n.event_time_ms=Math.floor(Date.now()).toString(),n.source_extension_json_proto3=JSON.stringify(t),e.logEvents.push(n)}function Or(e,t){const n=[];for(let i=0;i<e.length;i++)n.push(e.charAt(i)),i<t.length&&n.push(t.charAt(i));return n.join("")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Er(e,t){var n,i;const{newSubscription:r}=e;if(!r)return void await ur(t);const s=await Ji(t.firebaseDependencies);await ur(t),t.vapidKey=null!==(i=null===(n=null===s||void 0===s?void 0:s.subscriptionOptions)||void 0===n?void 0:n.vapidKey)&&void 0!==i?i:Ni,await hr(t)}async function Ir(e,t){const n=Rr(e);if(!n)return;t.deliveryMetricsExportedToBigQueryEnabled&&await Cr(t,n);const i=await Ar();if(xr(i))return jr(i,n);if(n.notification&&await Dr(Pr(n)),t&&t.onBackgroundMessageHandler){const e=_r(n);"function"===typeof t.onBackgroundMessageHandler?await t.onBackgroundMessageHandler(e):t.onBackgroundMessageHandler.next(e)}}async function Sr(e){var t,n;const i=null===(n=null===(t=e.notification)||void 0===t?void 0:t.data)||void 0===n?void 0:n[ji];if(!i)return;if(e.action)return;e.stopImmediatePropagation(),e.notification.close();const r=Mr(i);if(!r)return;const s=new URL(r,self.location.href),o=new URL(self.location.origin);if(s.host!==o.host)return;let a=await Nr(s);return a?a=await a.focus():(a=await self.clients.openWindow(r),await wr(3e3)),a?(i.messageType=Li.NOTIFICATION_CLICKED,i.isFirebaseMessaging=!0,a.postMessage(i)):void 0}function Pr(e){const t=Object.assign({},e.notification);return t.data={[ji]:e},t}function Rr({data:e}){if(!e)return null;try{return e.json()}catch(t){return null}}async function Nr(e){const t=await Ar();for(const n of t){const t=new URL(n.url,self.location.href);if(e.host===t.host)return n}return null}function xr(e){return e.some(e=>"visible"===e.visibilityState&&!e.url.startsWith("chrome-extension://"))}function jr(e,t){t.isFirebaseMessaging=!0,t.messageType=Li.PUSH_RECEIVED;for(const n of e)n.postMessage(t)}function Ar(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function Dr(e){var t;const{actions:n}=e,{maxActions:i}=Notification;return n&&i&&n.length>i&&console.warn(`This browser only supports ${i} actions. The remaining actions will not be displayed.`),self.registration.showNotification(null!==(t=e.title)&&void 0!==t?t:"",e)}function Mr(e){var t,n,i;const r=null!==(n=null===(t=e.fcmOptions)||void 0===t?void 0:t.link)&&void 0!==n?n:null===(i=e.notification)||void 0===i?void 0:i.click_action;return r||(vr(e.data)?self.location.origin:null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(e){if(!e||!e.options)throw Lr("App Configuration Object");if(!e.name)throw Lr("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const i of t)if(!n[i])throw Lr(i);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Lr(e){return nr.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Or("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),Or("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");class Ur{constructor(e,t,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=Fr(e);this.firebaseDependencies={app:e,appConfig:i,installations:t,analyticsProvider:n}}_delete(){return Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=e=>{const t=new Ur(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return self.addEventListener("push",e=>{e.waitUntil(Ir(e,t))}),self.addEventListener("pushsubscriptionchange",e=>{e.waitUntil(Er(e,t))}),self.addEventListener("notificationclick",e=>{e.waitUntil(Sr(e))}),t};function Br(){Object(j["_registerComponent"])(new E["a"]("messaging-sw",qr,"PUBLIC"))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Wr(e,t){if(void 0!==self.document)throw nr.create("only-available-in-sw");return e.onBackgroundMessageHandler=t,()=>{e.onBackgroundMessageHandler=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vr(e,t){return e=Object(A["v"])(e),Wr(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Br();const Kr="@firebase/messaging-compat",Hr="0.1.13";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $r(){return self&&"ServiceWorkerGlobalScope"in self?Gr():zr()}function zr(){return"undefined"!==typeof window&&Object(A["D"])()&&Object(A["e"])()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}function Gr(){return Object(A["D"])()&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}class Qr{constructor(e,t){this.app=e,this._delegate=t,this.app=e,this._delegate=t}async getToken(e){return Si(this._delegate,e)}async deleteToken(){return Pi(this._delegate)}onMessage(e){return Ri(this._delegate,e)}onBackgroundMessage(e){return Vr(this._delegate,e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr=e=>self&&"ServiceWorkerGlobalScope"in self?new Qr(e.getProvider("app-compat").getImmediate(),e.getProvider("messaging-sw").getImmediate()):new Qr(e.getProvider("app-compat").getImmediate(),e.getProvider("messaging").getImmediate()),Jr={isSupported:$r};function Xr(){k["a"].INTERNAL.registerComponent(new E["a"]("messaging-compat",Yr,"PUBLIC").setServiceProps(Jr))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xr(),k["a"].registerVersion(Kr,Hr);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Zr="firebasestorage.googleapis.com",es="storageBucket",ts=12e4,ns=6e5;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class is extends A["c"]{constructor(e,t){super(rs(e),`Firebase Storage: ${t} (${rs(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,is.prototype)}_codeEquals(e){return rs(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function rs(e){return"storage/"+e}function ss(){const e="An unknown error occurred, please check the error payload for server response.";return new is("unknown",e)}function os(e){return new is("object-not-found","Object '"+e+"' does not exist.")}function as(e){return new is("quota-exceeded","Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function cs(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new is("unauthenticated",e)}function ls(){return new is("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function hs(e){return new is("unauthorized","User does not have permission to access '"+e+"'.")}function us(){return new is("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function ds(){return new is("canceled","User canceled the upload/download.")}function ps(e){return new is("invalid-url","Invalid URL '"+e+"'.")}function fs(e){return new is("invalid-default-bucket","Invalid default bucket '"+e+"'.")}function gs(){return new is("no-default-bucket","No default bucket found. Did you set the '"+es+"' property when initializing the app?")}function _s(){return new is("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function ms(){return new is("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function bs(){return new is("no-download-url","The given file does not have any download URLs.")}function ys(e){return new is("invalid-argument",e)}function vs(){return new is("app-deleted","The Firebase app was deleted.")}function ws(e){return new is("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Cs(e,t){return new is("invalid-format","String does not match format '"+e+"': "+t)}function Ts(e){throw new is("internal-error","Internal error: "+e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=ks.makeFromUrl(e,t)}catch(i){return new ks(e,"")}if(""===n.path)return n;throw fs(e)}static makeFromUrl(e,t){let n=null;const i="([A-Za-z0-9.\\-_]+)";function r(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}const s="(/(.*))?$",o=new RegExp("^gs://"+i+s,"i"),a={bucket:1,path:3};function c(e){e.path_=decodeURIComponent(e.path)}const l="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),u="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${l}/b/${i}/o${u}`,"i"),p={bucket:1,path:3},f=t===Zr?"(?:storage.googleapis.com|storage.cloud.google.com)":t,g="([^?#]*)",_=new RegExp(`^https?://${f}/${i}/${g}`,"i"),m={bucket:1,path:2},b=[{regex:o,indices:a,postModify:r},{regex:d,indices:p,postModify:c},{regex:_,indices:m,postModify:c}];for(let y=0;y<b.length;y++){const t=b[y],i=t.regex.exec(e);if(i){const e=i[t.indices.bucket];let r=i[t.indices.path];r||(r=""),n=new ks(e,r),t.postModify(n);break}}if(null==n)throw ps(e);return n}}class Os{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(e,t,n){let i=1,r=null,s=null,o=!1,a=0;function c(){return 2===a}let l=!1;function h(...e){l||(l=!0,t.apply(null,e))}function u(t){r=setTimeout(()=>{r=null,e(p,c())},t)}function d(){s&&clearTimeout(s)}function p(e,...t){if(l)return void d();if(e)return d(),void h.call(null,e,...t);const n=c()||o;if(n)return d(),void h.call(null,e,...t);let r;i<64&&(i*=2),1===a?(a=2,r=0):r=1e3*(i+Math.random()),u(r)}let f=!1;function g(e){f||(f=!0,d(),l||(null!==r?(e||(a=2),clearTimeout(r),u(0)):e||(a=1)))}return u(0),s=setTimeout(()=>{o=!0,g(!0)},n),g}function Is(e){e(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ss(e){return void 0!==e}function Ps(e){return"function"===typeof e}function Rs(e){return"object"===typeof e&&!Array.isArray(e)}function Ns(e){return"string"===typeof e||e instanceof String}function xs(e){return js()&&e instanceof Blob}function js(){return"undefined"!==typeof Blob}function As(e,t,n,i){if(i<t)throw ys(`Invalid value for '${e}'. Expected ${t} or greater.`);if(i>n)throw ys(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(e,t,n){let i=t;return null==n&&(i="https://"+t),`${n}://${i}/v0${e}`}function Ms(e){const t=encodeURIComponent;let n="?";for(const i in e)if(e.hasOwnProperty(i)){const r=t(i)+"="+t(e[i]);n=n+r+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fs;(function(e){e[e["NO_ERROR"]=0]="NO_ERROR",e[e["NETWORK_ERROR"]=1]="NETWORK_ERROR",e[e["ABORT"]=2]="ABORT"})(Fs||(Fs={}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ls{constructor(e,t,n,i,r,s,o,a,c,l,h){this.url_=e,this.method_=t,this.headers_=n,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=l,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()})}start_(){const e=(e,t)=>{if(t)return void e(!1,new Us(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const i=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(i),n.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(i),this.pendingConnection_=null;const t=n.getErrorCode()===Fs.NO_ERROR,r=n.getStatus();if(!t||this.isRetryStatusCode_(r)){const t=n.getErrorCode()===Fs.ABORT;return void e(!1,new Us(!1,null,t))}const s=-1!==this.successCodes_.indexOf(r);e(!0,new Us(s,n))})},t=(e,t)=>{const n=this.resolve_,i=this.reject_,r=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(r,r.getResponse());Ss(e)?n(e):n()}catch(s){i(s)}else if(null!==r){const e=ss();e.serverResponse=r.getErrorText(),this.errorCallback_?i(this.errorCallback_(r,e)):i(e)}else if(t.canceled){const e=this.appDelete_?vs():ds();i(e)}else{const e=us();i(e)}};this.canceled_?t(!1,new Us(!1,null,!0)):this.backoffId_=Es(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&Is(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const t=e>=500&&e<600,n=[408,429],i=-1!==n.indexOf(e),r=-1!==this.additionalRetryCodes_.indexOf(e);return t||i||r}}class Us{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function qs(e,t){null!==t&&t.length>0&&(e["Authorization"]="Firebase "+t)}function Bs(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!==t&&void 0!==t?t:"AppManager")}function Ws(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Vs(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}function Ks(e,t,n,i,r,s){const o=Ms(e.urlParams),a=e.url+o,c=Object.assign({},e.headers);return Ws(c,t),qs(c,n),Bs(c,s),Vs(c,i),new Ls(a,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function $s(...e){const t=Hs();if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(js())return new Blob(e);throw new is("unsupported-environment","This browser doesn't seem to support creating Blobs")}function zs(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(e){return atob(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ys{constructor(e,t){this.data=e,this.contentType=t||null}}function Js(e,t){switch(e){case Qs.RAW:return new Ys(Xs(t));case Qs.BASE64:case Qs.BASE64URL:return new Ys(eo(e,t));case Qs.DATA_URL:return new Ys(no(t),io(t))}throw ss()}function Xs(e){const t=[];for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);if(i<=127)t.push(i);else if(i<=2047)t.push(192|i>>6,128|63&i);else if(55296===(64512&i)){const r=n<e.length-1&&56320===(64512&e.charCodeAt(n+1));if(r){const r=i,s=e.charCodeAt(++n);i=65536|(1023&r)<<10|1023&s,t.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|63&i)}else t.push(239,191,189)}else 56320===(64512&i)?t.push(239,191,189):t.push(224|i>>12,128|i>>6&63,128|63&i)}return new Uint8Array(t)}function Zs(e){let t;try{t=decodeURIComponent(e)}catch(n){throw Cs(Qs.DATA_URL,"Malformed data URL.")}return Xs(t)}function eo(e,t){switch(e){case Qs.BASE64:{const n=-1!==t.indexOf("-"),i=-1!==t.indexOf("_");if(n||i){const t=n?"-":"_";throw Cs(e,"Invalid character '"+t+"' found: is it base64url encoded?")}break}case Qs.BASE64URL:{const n=-1!==t.indexOf("+"),i=-1!==t.indexOf("/");if(n||i){const t=n?"+":"/";throw Cs(e,"Invalid character '"+t+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Gs(t)}catch(r){throw Cs(e,"Invalid character found")}const i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i}class to{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw Cs(Qs.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=ro(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=e.substring(e.indexOf(",")+1)}}function no(e){const t=new to(e);return t.base64?eo(Qs.BASE64,t.rest):Zs(t.rest)}function io(e){const t=new to(e);return t.contentType}function ro(e,t){const n=e.length>=t.length;return!!n&&e.substring(e.length-t.length)===t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,t){let n=0,i="";xs(e)?(this.data_=e,n=e.size,i=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,t){if(xs(this.data_)){const n=this.data_,i=zs(n,e,t);return null===i?null:new so(i)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new so(n,!0)}}static getBlob(...e){if(js()){const t=e.map(e=>e instanceof so?e.data_:e);return new so($s.apply(null,t))}{const t=e.map(e=>Ns(e)?Js(Qs.RAW,e).data:e.data_);let n=0;t.forEach(e=>{n+=e.byteLength});const i=new Uint8Array(n);let r=0;return t.forEach(e=>{for(let t=0;t<e.length;t++)i[r++]=e[t]}),new so(i,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(e){let t;try{t=JSON.parse(e)}catch(n){return null}return Rs(t)?t:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(e){if(0===e.length)return null;const t=e.lastIndexOf("/");if(-1===t)return"";const n=e.slice(0,t);return n}function co(e,t){const n=t.split("/").filter(e=>e.length>0).join("/");return 0===e.length?n:e+"/"+n}function lo(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(e,t){return t}class uo{constructor(e,t,n,i){this.server=e,this.local=t||e,this.writable=!!n,this.xform=i||ho}}let po=null;function fo(e){return!Ns(e)||e.length<2?e:lo(e)}function go(){if(po)return po;const e=[];function t(e,t){return fo(t)}e.push(new uo("bucket")),e.push(new uo("generation")),e.push(new uo("metageneration")),e.push(new uo("name","fullPath",!0));const n=new uo("name");function i(e,t){return void 0!==t?Number(t):t}n.xform=t,e.push(n);const r=new uo("size");return r.xform=i,e.push(r),e.push(new uo("timeCreated")),e.push(new uo("updated")),e.push(new uo("md5Hash",null,!0)),e.push(new uo("cacheControl",null,!0)),e.push(new uo("contentDisposition",null,!0)),e.push(new uo("contentEncoding",null,!0)),e.push(new uo("contentLanguage",null,!0)),e.push(new uo("contentType",null,!0)),e.push(new uo("metadata","customMetadata",!0)),po=e,po}function _o(e,t){function n(){const n=e["bucket"],i=e["fullPath"],r=new ks(n,i);return t._makeStorageReference(r)}Object.defineProperty(e,"ref",{get:n})}function mo(e,t,n){const i={type:"file"},r=n.length;for(let s=0;s<r;s++){const e=n[s];i[e.local]=e.xform(i,t[e.server])}return _o(i,e),i}function bo(e,t,n){const i=oo(t);if(null===i)return null;const r=i;return mo(e,r,n)}function yo(e,t,n,i){const r=oo(t);if(null===r)return null;if(!Ns(r["downloadTokens"]))return null;const s=r["downloadTokens"];if(0===s.length)return null;const o=encodeURIComponent,a=s.split(","),c=a.map(t=>{const r=e["bucket"],s=e["fullPath"],a="/b/"+o(r)+"/o/"+o(s),c=Ds(a,n,i),l=Ms({alt:"media",token:t});return c+l});return c[0]}function vo(e,t){const n={},i=t.length;for(let r=0;r<i;r++){const i=t[r];i.writable&&(n[i.server]=e[i.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo="prefixes",Co="items";function To(e,t,n){const i={prefixes:[],items:[],nextPageToken:n["nextPageToken"]};if(n[wo])for(const r of n[wo]){const n=r.replace(/\/$/,""),s=e._makeStorageReference(new ks(t,n));i.prefixes.push(s)}if(n[Co])for(const r of n[Co]){const n=e._makeStorageReference(new ks(t,r["name"]));i.items.push(n)}return i}function ko(e,t,n){const i=oo(n);if(null===i)return null;const r=i;return To(e,t,r)}class Oo{constructor(e,t,n,i){this.url=e,this.method=t,this.handler=n,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(e){if(!e)throw ss()}function Io(e,t){function n(n,i){const r=bo(e,i,t);return Eo(null!==r),r}return n}function So(e,t){function n(n,i){const r=ko(e,t,i);return Eo(null!==r),r}return n}function Po(e,t){function n(n,i){const r=bo(e,i,t);return Eo(null!==r),yo(r,i,e.host,e._protocol)}return n}function Ro(e){function t(t,n){let i;return i=401===t.getStatus()?t.getErrorText().includes("Firebase App Check token is invalid")?ls():cs():402===t.getStatus()?as(e.bucket):403===t.getStatus()?hs(e.path):n,i.serverResponse=n.serverResponse,i}return t}function No(e){const t=Ro(e);function n(n,i){let r=t(n,i);return 404===n.getStatus()&&(r=os(e.path)),r.serverResponse=i.serverResponse,r}return n}function xo(e,t,n){const i=t.fullServerUrl(),r=Ds(i,e.host,e._protocol),s="GET",o=e.maxOperationRetryTime,a=new Oo(r,s,Io(e,n),o);return a.errorHandler=No(t),a}function jo(e,t,n,i,r){const s={};t.isRoot?s["prefix"]="":s["prefix"]=t.path+"/",n&&n.length>0&&(s["delimiter"]=n),i&&(s["pageToken"]=i),r&&(s["maxResults"]=r);const o=t.bucketOnlyServerUrl(),a=Ds(o,e.host,e._protocol),c="GET",l=e.maxOperationRetryTime,h=new Oo(a,c,So(e,t.bucket),l);return h.urlParams=s,h.errorHandler=Ro(t),h}function Ao(e,t,n){const i=t.fullServerUrl(),r=Ds(i,e.host,e._protocol),s="GET",o=e.maxOperationRetryTime,a=new Oo(r,s,Po(e,n),o);return a.errorHandler=No(t),a}function Do(e,t,n,i){const r=t.fullServerUrl(),s=Ds(r,e.host,e._protocol),o="PATCH",a=vo(n,i),c={"Content-Type":"application/json; charset=utf-8"},l=e.maxOperationRetryTime,h=new Oo(s,o,Io(e,i),l);return h.headers=c,h.body=a,h.errorHandler=No(t),h}function Mo(e,t){const n=t.fullServerUrl(),i=Ds(n,e.host,e._protocol),r="DELETE",s=e.maxOperationRetryTime;function o(e,t){}const a=new Oo(i,r,o,s);return a.successCodes=[200,204],a.errorHandler=No(t),a}function Fo(e,t){return e&&e["contentType"]||t&&t.type()||"application/octet-stream"}function Lo(e,t,n){const i=Object.assign({},n);return i["fullPath"]=e.path,i["size"]=t.size(),i["contentType"]||(i["contentType"]=Fo(null,t)),i}function Uo(e,t,n,i,r){const s=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=Lo(t,i,r),h=vo(l,n),u="--"+c+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+h+"\r\n--"+c+"\r\nContent-Type: "+l["contentType"]+"\r\n\r\n",d="\r\n--"+c+"--",p=so.getBlob(u,i,d);if(null===p)throw _s();const f={name:l["fullPath"]},g=Ds(s,e.host,e._protocol),_="POST",m=e.maxUploadRetryTime,b=new Oo(g,_,Io(e,n),m);return b.urlParams=f,b.headers=o,b.body=p.uploadData(),b.errorHandler=Ro(t),b}class qo{constructor(e,t,n,i){this.current=e,this.total=t,this.finalized=!!n,this.metadata=i||null}}function Bo(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch(r){Eo(!1)}const i=t||["active"];return Eo(!!n&&-1!==i.indexOf(n)),n}function Wo(e,t,n,i,r){const s=t.bucketOnlyServerUrl(),o=Lo(t,i,r),a={name:o["fullPath"]},c=Ds(s,e.host,e._protocol),l="POST",h={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":""+i.size(),"X-Goog-Upload-Header-Content-Type":o["contentType"],"Content-Type":"application/json; charset=utf-8"},u=vo(o,n),d=e.maxUploadRetryTime;function p(e){let t;Bo(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(n){Eo(!1)}return Eo(Ns(t)),t}const f=new Oo(c,l,p,d);return f.urlParams=a,f.headers=h,f.body=u,f.errorHandler=Ro(t),f}function Vo(e,t,n,i){const r={"X-Goog-Upload-Command":"query"};function s(e){const t=Bo(e,["active","final"]);let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(s){Eo(!1)}n||Eo(!1);const r=Number(n);return Eo(!isNaN(r)),new qo(r,i.size(),"final"===t)}const o="POST",a=e.maxUploadRetryTime,c=new Oo(n,o,s,a);return c.headers=r,c.errorHandler=Ro(t),c}const Ko=262144;function Ho(e,t,n,i,r,s,o,a){const c=new qo(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=i.size()),i.size()!==c.total)throw ms();const l=c.total-c.current;let h=l;r>0&&(h=Math.min(h,r));const u=c.current,d=u+h,p=h===l?"upload, finalize":"upload",f={"X-Goog-Upload-Command":p,"X-Goog-Upload-Offset":""+c.current},g=i.slice(u,d);if(null===g)throw _s();function _(e,n){const r=Bo(e,["active","final"]),o=c.current+h,a=i.size();let l;return l="final"===r?Io(t,s)(e,n):null,new qo(o,a,"final"===r,l)}const m="POST",b=t.maxUploadRetryTime,y=new Oo(n,m,_,b);return y.headers=f,y.body=g.uploadData(),y.progressCallback=a||null,y.errorHandler=Ro(e),y}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o={STATE_CHANGED:"state_changed"},zo={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Go(e){switch(e){case"running":case"pausing":case"canceling":return zo.RUNNING;case"paused":return zo.PAUSED;case"success":return zo.SUCCESS;case"canceled":return zo.CANCELED;case"error":return zo.ERROR;default:return zo.ERROR}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,t,n){const i=Ps(e)||null!=t||null!=n;if(i)this.next=e,this.error=null!==t&&void 0!==t?t:void 0,this.complete=null!==n&&void 0!==n?n:void 0;else{const t=e;this.next=t.next,this.error=t.error,this.complete=t.complete}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(e){return(...t)=>{Promise.resolve().then(()=>e(...t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jo=null;class Xo{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Fs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Fs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Fs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,n,i){if(this.sent_)throw Ts("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==i)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ts("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ts("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw Ts("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ts("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class Zo extends Xo{initXhr(){this.xhr_.responseType="text"}}function ea(){return Jo?Jo():new Zo}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ta{constructor(e,t,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=n,this._mappings=go(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=e=>{this._request=void 0,this._chunkMultiplier=1,e._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=e,this._transition("error"))},this._metadataErrorHandler=e=>{this._request=void 0,e._codeEquals("canceled")?this.completeTransitions_():(this._error=e,this._transition("error"))},this._promise=new Promise((e,t)=>{this._resolve=e,this._reject=t,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,n])=>{switch(this._state){case"running":e(t,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,t)=>{const n=Wo(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(n,ea,e,t);this._request=i,i.getPromise().then(e=>{this._request=void 0,this._uploadUrl=e,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,n)=>{const i=Vo(this._ref.storage,this._ref._location,e,this._blob),r=this._ref.storage._makeRequest(i,ea,t,n);this._request=r,r.getPromise().then(e=>{e=e,this._request=void 0,this._updateProgress(e.current),this._needToFetchStatus=!1,e.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Ko*this._chunkMultiplier,t=new qo(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken((i,r)=>{let s;try{s=Ho(this._ref._location,this._ref.storage,n,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(a){return this._error=a,void this._transition("error")}const o=this._ref.storage._makeRequest(s,ea,i,r);this._request=o,o.getPromise().then(e=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(e.current),e.finalized?(this._metadata=e.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){const e=Ko*this._chunkMultiplier;e<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const n=xo(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(n,ea,e,t);this._request=i,i.getPromise().then(e=>{this._request=void 0,this._metadata=e,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const n=Uo(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(n,ea,e,t);this._request=i,i.getPromise().then(e=>{this._request=void 0,this._metadata=e,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":this._state=e,void 0!==this._request&&this._request.cancel();break;case"pausing":this._state=e,void 0!==this._request&&this._request.cancel();break;case"running":const t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=ds(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Go(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,n,i){const r=new Qo(t||void 0,n||void 0,i||void 0);return this._addObserver(r),()=>{this._removeObserver(r)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise();const e=this._observers.slice();e.forEach(e=>{this._notifyObserver(e)})}_finishPromise(){if(void 0!==this._resolve){let e=!0;switch(Go(this._state)){case zo.SUCCESS:Yo(this._resolve.bind(null,this.snapshot))();break;case zo.CANCELED:case zo.ERROR:const t=this._reject;Yo(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){const t=Go(this._state);switch(t){case zo.RUNNING:case zo.PAUSED:e.next&&Yo(e.next.bind(e,this.snapshot))();break;case zo.SUCCESS:e.complete&&Yo(e.complete.bind(e))();break;case zo.CANCELED:case zo.ERROR:e.error&&Yo(e.error.bind(e,this._error))();break;default:e.error&&Yo(e.error.bind(e,this._error))()}}resume(){const e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}pause(){const e="running"===this._state;return e&&this._transition("pausing"),e}cancel(){const e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,t){this._service=e,this._location=t instanceof ks?t:ks.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new na(e,t)}get root(){const e=new ks(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return lo(this._location.path)}get storage(){return this._service}get parent(){const e=ao(this._location.path);if(null===e)return null;const t=new ks(this._location.bucket,e);return new na(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw ws(e)}}function ia(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new ta(e,new so(t),n)}function ra(e){const t={prefixes:[],items:[]};return sa(e,t).then(()=>t)}async function sa(e,t,n){const i={pageToken:n},r=await oa(e,i);t.prefixes.push(...r.prefixes),t.items.push(...r.items),null!=r.nextPageToken&&await sa(e,t,r.nextPageToken)}function oa(e,t){null!=t&&"number"===typeof t.maxResults&&As("options.maxResults",1,1e3,t.maxResults);const n=t||{},i=jo(e.storage,e._location,"/",n.pageToken,n.maxResults);return e.storage.makeRequestWithTokens(i,ea)}function aa(e){e._throwIfRoot("getMetadata");const t=xo(e.storage,e._location,go());return e.storage.makeRequestWithTokens(t,ea)}function ca(e,t){e._throwIfRoot("updateMetadata");const n=Do(e.storage,e._location,t,go());return e.storage.makeRequestWithTokens(n,ea)}function la(e){e._throwIfRoot("getDownloadURL");const t=Ao(e.storage,e._location,go());return e.storage.makeRequestWithTokens(t,ea).then(e=>{if(null===e)throw bs();return e})}function ha(e){e._throwIfRoot("deleteObject");const t=Mo(e.storage,e._location);return e.storage.makeRequestWithTokens(t,ea)}function ua(e,t){const n=co(e._location.path,t),i=new ks(e._location.bucket,n);return new na(e.storage,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(e){return/^[A-Za-z]+:\/\//.test(e)}function pa(e,t){return new na(e,t)}function fa(e,t){if(e instanceof ba){const n=e;if(null==n._bucket)throw gs();const i=new na(n,n._bucket);return null!=t?fa(i,t):i}return void 0!==t?ua(e,t):e}function ga(e,t){if(t&&da(t)){if(e instanceof ba)return pa(e,t);throw ys("To use ref(service, url), the first argument must be a Storage instance.")}return fa(e,t)}function _a(e,t){const n=null===t||void 0===t?void 0:t[es];return null==n?null:ks.makeFromBucketSpec(n,e)}function ma(e,t,n,i={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:r}=i;r&&(e._overrideAuthToken="string"===typeof r?r:Object(A["n"])(r,e.app.options.projectId))}class ba{constructor(e,t,n,i,r){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=Zr,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ts,this._maxUploadRetryTime=ns,this._requests=new Set,this._bucket=null!=i?ks.makeFromBucketSpec(i,this._host):_a(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=ks.makeFromBucketSpec(this._url,e):this._bucket=_a(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){As("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){As("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();return t.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new na(this,e)}_makeRequest(e,t,n,i){if(this._deleted)return new Os(vs());{const r=Ks(e,this._appId,n,i,t,this._firebaseVersion);return this._requests.add(r),r.getPromise().then(()=>this._requests.delete(r),()=>this._requests.delete(r)),r}}async makeRequestWithTokens(e,t){const[n,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,i).getPromise()}}const ya="@firebase/storage",va="0.9.6",wa="storage";function Ca(e,t,n){return e=Object(A["v"])(e),ia(e,t,n)}function Ta(e){return e=Object(A["v"])(e),aa(e)}function ka(e,t){return e=Object(A["v"])(e),ca(e,t)}function Oa(e,t){return e=Object(A["v"])(e),oa(e,t)}function Ea(e){return e=Object(A["v"])(e),ra(e)}function Ia(e){return e=Object(A["v"])(e),la(e)}function Sa(e){return e=Object(A["v"])(e),ha(e)}function Pa(e,t){return e=Object(A["v"])(e),ga(e,t)}function Ra(e,t){return ua(e,t)}function Na(e,t,n,i={}){ma(e,t,n,i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return new ba(n,i,r,t,j["SDK_VERSION"])}function ja(){Object(j["_registerComponent"])(new E["a"](wa,xa,"PUBLIC").setMultipleInstances(!0)),Object(j["registerVersion"])(ya,va,""),Object(j["registerVersion"])(ya,va,"esm2017")}ja();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Aa{constructor(e,t,n){this._delegate=e,this.task=t,this.ref=n}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,t){this._delegate=e,this._ref=t,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new Aa(this._delegate.snapshot,this,this._ref)}then(e,t){return this._delegate.then(t=>{if(e)return e(new Aa(t,this,this._ref))},t)}on(e,t,n,i){let r=void 0;return t&&(r="function"===typeof t?e=>t(new Aa(e,this,this._ref)):{next:t.next?e=>t.next(new Aa(e,this,this._ref)):void 0,complete:t.complete||void 0,error:t.error||void 0}),this._delegate.on(e,r,n||void 0,i||void 0)}}class Ma{constructor(e,t){this._delegate=e,this._service=t}get prefixes(){return this._delegate.prefixes.map(e=>new Fa(e,this._service))}get items(){return this._delegate.items.map(e=>new Fa(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,t){this._delegate=e,this.storage=t}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const t=Ra(this._delegate,e);return new Fa(t,this.storage)}get root(){return new Fa(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return null==e?null:new Fa(e,this.storage)}put(e,t){return this._throwIfRoot("put"),new Da(Ca(this._delegate,e,t),this)}putString(e,t=Qs.RAW,n){this._throwIfRoot("putString");const i=Js(t,e),r=Object.assign({},n);return null==r["contentType"]&&null!=i.contentType&&(r["contentType"]=i.contentType),new Da(new ta(this._delegate,new so(i.data,!0),r),this)}listAll(){return Ea(this._delegate).then(e=>new Ma(e,this.storage))}list(e){return Oa(this._delegate,e||void 0).then(e=>new Ma(e,this.storage))}getMetadata(){return Ta(this._delegate)}updateMetadata(e){return ka(this._delegate,e)}getDownloadURL(){return Ia(this._delegate)}delete(){return this._throwIfRoot("delete"),Sa(this._delegate)}_throwIfRoot(e){if(""===this._delegate._location.path)throw ws(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,t){this.app=e,this._delegate=t}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(Ua(e))throw ys("ref() expected a child path but got a URL, use refFromURL instead.");return new Fa(Pa(this._delegate,e),this)}refFromURL(e){if(!Ua(e))throw ys("refFromURL() expected a full URL but got a child path, use ref() instead.");try{ks.makeFromUrl(e,this._delegate.host)}catch(t){throw ys("refFromUrl() expected a valid full URL but got an invalid one.")}return new Fa(Pa(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,t,n={}){Na(this._delegate,e,t,n)}}function Ua(e){return/^[A-Za-z]+:\/\//.test(e)}const qa="@firebase/storage-compat",Ba="0.1.14",Wa="storage-compat";function Va(e,{instanceIdentifier:t}){const n=e.getProvider("app-compat").getImmediate(),i=e.getProvider("storage").getImmediate({identifier:t}),r=new La(n,i);return r}function Ka(e){const t={TaskState:zo,TaskEvent:$o,StringFormat:Qs,Storage:La,Reference:Fa};e.INTERNAL.registerComponent(new E["a"](Wa,Va,"PUBLIC").setServiceProps(t).setMultipleInstances(!0)),e.registerVersion(qa,Ba)}Ka(k["a"]);const Ha="@firebase/performance",$a="0.5.9",za=$a,Ga="FB-PERF-TRACE-START",Qa="FB-PERF-TRACE-STOP",Ya="FB-PERF-TRACE-MEASURE",Ja="_wt_",Xa="_fp",Za="_fcp",ec="_fid",tc="@firebase/performance/config",nc="@firebase/performance/configexpire",ic="performance",rc="Performance",sc={["trace started"]:"Trace {$traceName} was started before.",["trace stopped"]:"Trace {$traceName} is not running.",["nonpositive trace startTime"]:"Trace {$traceName} startTime should be positive.",["nonpositive trace duration"]:"Trace {$traceName} duration should be positive.",["no window"]:"Window is not available.",["no app id"]:"App id is not available.",["no project id"]:"Project id is not available.",["no api key"]:"Api key is not available.",["invalid cc log"]:"Attempted to queue invalid cc event",["FB not default"]:"Performance can only start when Firebase app instance is the default one.",["RC response not ok"]:"RC response is not ok",["invalid attribute name"]:"Attribute name {$attributeName} is invalid.",["invalid attribute value"]:"Attribute value {$attributeValue} is invalid.",["invalid custom metric name"]:"Custom metric name {$customMetricName} is invalid",["invalid String merger input"]:"Input for String merger is invalid, contact support team to resolve.",["already initialized"]:"initializePerformance() has already been called with different options. To avoid this error, call initializePerformance() with the same options as when it was originally called, or call getPerformance() to return the already initialized instance."},oc=new A["b"](ic,rc,sc),ac=new D["b"](rc);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let cc,lc,hc,uc;ac.logLevel=D["a"].INFO;class dc{constructor(e){if(this.window=e,!e)throw oc.create("no window");this.performance=e.performance,this.PerformanceObserver=e.PerformanceObserver,this.windowLocation=e.location,this.navigator=e.navigator,this.document=e.document,this.navigator&&this.navigator.cookieEnabled&&(this.localStorage=e.localStorage),e.perfMetrics&&e.perfMetrics.onFirstInputDelay&&(this.onFirstInputDelay=e.perfMetrics.onFirstInputDelay)}getUrl(){return this.windowLocation.href.split("?")[0]}mark(e){this.performance&&this.performance.mark&&this.performance.mark(e)}measure(e,t,n){this.performance&&this.performance.measure&&this.performance.measure(e,t,n)}getEntriesByType(e){return this.performance&&this.performance.getEntriesByType?this.performance.getEntriesByType(e):[]}getEntriesByName(e){return this.performance&&this.performance.getEntriesByName?this.performance.getEntriesByName(e):[]}getTimeOrigin(){return this.performance&&(this.performance.timeOrigin||this.performance.timing.navigationStart)}requiredApisAvailable(){return fetch&&Promise&&Object(A["e"])()?!!Object(A["D"])()||(ac.info("IndexedDB is not supported by current browswer"),!1):(ac.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled."),!1)}setupObserver(e,t){if(!this.PerformanceObserver)return;const n=new this.PerformanceObserver(e=>{for(const n of e.getEntries())t(n)});n.observe({entryTypes:[e]})}static getInstance(){return void 0===cc&&(cc=new dc(lc)),cc}}function pc(e){lc=e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(e){const t=e.getId();return t.then(e=>{hc=e}),t}function gc(){return hc}function _c(e){const t=e.getToken();return t.then(e=>{}),t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(e,t){const n=e.length-t.length;if(n<0||n>1)throw oc.create("invalid String merger input");const i=[];for(let r=0;r<e.length;r++)i.push(e.charAt(r)),t.length>r&&i.push(t.charAt(r));return i.join("")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(){this.instrumentationEnabled=!0,this.dataCollectionEnabled=!0,this.loggingEnabled=!1,this.tracesSamplingRate=1,this.networkRequestsSamplingRate=1,this.logEndPointUrl="https://firebaselogging.googleapis.com/v0cc/log?format=json_proto",this.flTransportEndpointUrl=mc("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),this.transportKey=mc("AzSC8r6ReiGqFMyfvgow","Iayx0u-XT3vksVM-pIV"),this.logSource=462,this.logTraceAfterSampling=!1,this.logNetworkAfterSampling=!1,this.configTimeToLive=12}getFlTransportFullUrl(){return this.flTransportEndpointUrl.concat("?key=",this.transportKey)}static getInstance(){return void 0===uc&&(uc=new bc),uc}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yc;(function(e){e[e["UNKNOWN"]=0]="UNKNOWN",e[e["VISIBLE"]=1]="VISIBLE",e[e["HIDDEN"]=2]="HIDDEN"})(yc||(yc={}));const vc=["firebase_","google_","ga_"],wc=new RegExp("^[a-zA-Z]\\w*$"),Cc=40,Tc=100;function kc(){const e=dc.getInstance().navigator;return"serviceWorker"in e?e.serviceWorker.controller?2:3:1}function Oc(){const e=dc.getInstance().document,t=e.visibilityState;switch(t){case"visible":return yc.VISIBLE;case"hidden":return yc.HIDDEN;default:return yc.UNKNOWN}}function Ec(){const e=dc.getInstance().navigator,t=e.connection,n=t&&t.effectiveType;switch(n){case"slow-2g":return 1;case"2g":return 2;case"3g":return 3;case"4g":return 4;default:return 0}}function Ic(e){if(0===e.length||e.length>Cc)return!1;const t=vc.some(t=>e.startsWith(t));return!t&&!!e.match(wc)}function Sc(e){return 0!==e.length&&e.length<=Tc}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(e){var t;const n=null===(t=e.options)||void 0===t?void 0:t.appId;if(!n)throw oc.create("no app id");return n}function Rc(e){var t;const n=null===(t=e.options)||void 0===t?void 0:t.projectId;if(!n)throw oc.create("no project id");return n}function Nc(e){var t;const n=null===(t=e.options)||void 0===t?void 0:t.apiKey;if(!n)throw oc.create("no api key");return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc="0.0.1",jc={loggingEnabled:!0},Ac="FIREBASE_INSTALLATIONS_AUTH";function Dc(e,t){const n=Mc();return n?(qc(n),Promise.resolve()):Uc(e,t).then(qc).then(e=>Fc(e),()=>{})}function Mc(){const e=dc.getInstance().localStorage;if(!e)return;const t=e.getItem(nc);if(!t||!Bc(t))return;const n=e.getItem(tc);if(n)try{const e=JSON.parse(n);return e}catch(i){return}}function Fc(e){const t=dc.getInstance().localStorage;e&&t&&(t.setItem(tc,JSON.stringify(e)),t.setItem(nc,String(Date.now()+60*bc.getInstance().configTimeToLive*60*1e3)))}const Lc="Could not fetch config, will use default configs";function Uc(e,t){return _c(e.installations).then(n=>{const i=Rc(e.app),r=Nc(e.app),s=`https://firebaseremoteconfig.googleapis.com/v1/projects/${i}/namespaces/fireperf:fetch?key=${r}`,o=new Request(s,{method:"POST",headers:{Authorization:`${Ac} ${n}`},body:JSON.stringify({app_instance_id:t,app_instance_id_token:n,app_id:Pc(e.app),app_version:za,sdk_version:xc})});return fetch(o).then(e=>{if(e.ok)return e.json();throw oc.create("RC response not ok")})}).catch(()=>{ac.info(Lc)})}function qc(e){if(!e)return e;const t=bc.getInstance(),n=e.entries||{};return void 0!==n.fpr_enabled?t.loggingEnabled="true"===String(n.fpr_enabled):t.loggingEnabled=jc.loggingEnabled,n.fpr_log_source&&(t.logSource=Number(n.fpr_log_source)),n.fpr_log_endpoint_url&&(t.logEndPointUrl=n.fpr_log_endpoint_url),n.fpr_log_transport_key&&(t.transportKey=n.fpr_log_transport_key),void 0!==n.fpr_vc_network_request_sampling_rate&&(t.networkRequestsSamplingRate=Number(n.fpr_vc_network_request_sampling_rate)),void 0!==n.fpr_vc_trace_sampling_rate&&(t.tracesSamplingRate=Number(n.fpr_vc_trace_sampling_rate)),t.logTraceAfterSampling=Wc(t.tracesSamplingRate),t.logNetworkAfterSampling=Wc(t.networkRequestsSamplingRate),e}function Bc(e){return Number(e)>Date.now()}function Wc(e){return Math.random()<=e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vc,Kc=1;function Hc(e){return Kc=2,Vc=Vc||zc(e),Vc}function $c(){return 3===Kc}function zc(e){return Gc().then(()=>fc(e.installations)).then(t=>Dc(e,t)).then(()=>Qc(),()=>Qc())}function Gc(){const e=dc.getInstance().document;return new Promise(t=>{if(e&&"complete"!==e.readyState){const n=()=>{"complete"===e.readyState&&(e.removeEventListener("readystatechange",n),t())};e.addEventListener("readystatechange",n)}else t()})}function Qc(){Kc=3}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc=1e4,Jc=5500,Xc=3,Zc=1e3;let el,tl=Xc,nl=[],il=!1;function rl(){il||(sl(Jc),il=!0)}function sl(e){setTimeout(()=>{if(0!==tl)return nl.length?void ol():sl(Yc)},e)}function ol(){const e=nl.splice(0,Zc),t=e.map(e=>({source_extension_json_proto3:e.message,event_time_ms:String(e.eventTime)})),n={request_time_ms:String(Date.now()),client_info:{client_type:1,js_client_info:{}},log_source:bc.getInstance().logSource,log_event:t};al(n,e).catch(()=>{nl=[...e,...nl],tl--,ac.info(`Tries left: ${tl}.`),sl(Yc)})}function al(e,t){return cl(e).then(e=>(e.ok||ac.info("Call to Firebase backend failed."),e.json())).then(e=>{const n=Number(e.nextRequestWaitMillis);let i=Yc;isNaN(n)||(i=Math.max(n,i));const r=e.logResponseDetails;Array.isArray(r)&&r.length>0&&"RETRY_REQUEST_LATER"===r[0].responseAction&&(nl=[...t,...nl],ac.info("Retry transport request later.")),tl=Xc,sl(i)})}function cl(e){const t=bc.getInstance().getFlTransportFullUrl();return fetch(t,{method:"POST",body:JSON.stringify(e)})}function ll(e){if(!e.eventTime||!e.message)throw oc.create("invalid cc log");nl=[...nl,e]}function hl(e){return(...t)=>{const n=e(...t);ll({message:n,eventTime:Date.now()})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ul(e,t){el||(el=hl(gl)),el(e,t)}function dl(e){const t=bc.getInstance();!t.instrumentationEnabled&&e.isAuto||(t.dataCollectionEnabled||e.isAuto)&&dc.getInstance().requiredApisAvailable()&&(e.isAuto&&Oc()!==yc.VISIBLE||($c()?pl(e):Hc(e.performanceController).then(()=>pl(e),()=>pl(e))))}function pl(e){if(!gc())return;const t=bc.getInstance();t.loggingEnabled&&t.logTraceAfterSampling&&setTimeout(()=>ul(e,1),0)}function fl(e){const t=bc.getInstance();if(!t.instrumentationEnabled)return;const n=e.url,i=t.logEndPointUrl.split("?")[0],r=t.flTransportEndpointUrl.split("?")[0];n!==i&&n!==r&&t.loggingEnabled&&t.logNetworkAfterSampling&&setTimeout(()=>ul(e,0),0)}function gl(e,t){return 0===t?_l(e):ml(e)}function _l(e){const t={url:e.url,http_method:e.httpMethod||0,http_response_code:200,response_payload_bytes:e.responsePayloadBytes,client_start_time_us:e.startTimeUs,time_to_response_initiated_us:e.timeToResponseInitiatedUs,time_to_response_completed_us:e.timeToResponseCompletedUs},n={application_info:bl(e.performanceController.app),network_request_metric:t};return JSON.stringify(n)}function ml(e){const t={name:e.name,is_auto:e.isAuto,client_start_time_us:e.startTimeUs,duration_us:e.durationUs};0!==Object.keys(e.counters).length&&(t.counters=e.counters);const n=e.getAttributes();0!==Object.keys(n).length&&(t.custom_attributes=n);const i={application_info:bl(e.performanceController.app),trace_metric:t};return JSON.stringify(i)}function bl(e){return{google_app_id:Pc(e),app_instance_id:gc(),web_app_info:{sdk_version:za,page_url:dc.getInstance().getUrl(),service_worker_status:kc(),visibility_state:Oc(),effective_connection_type:Ec()},application_process_state:0}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl=100,vl="_",wl=[Xa,Za,ec];function Cl(e,t){return!(0===e.length||e.length>yl)&&(t&&t.startsWith(Ja)&&wl.indexOf(e)>-1||!e.startsWith(vl))}function Tl(e){const t=Math.floor(e);return t<e&&ac.info(`Metric value should be an Integer, setting the value as : ${t}.`),t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e,t,n=!1,i){this.performanceController=e,this.name=t,this.isAuto=n,this.state=1,this.customAttributes={},this.counters={},this.api=dc.getInstance(),this.randomId=Math.floor(1e6*Math.random()),this.isAuto||(this.traceStartMark=`${Ga}-${this.randomId}-${this.name}`,this.traceStopMark=`${Qa}-${this.randomId}-${this.name}`,this.traceMeasure=i||`${Ya}-${this.randomId}-${this.name}`,i&&this.calculateTraceMetrics())}start(){if(1!==this.state)throw oc.create("trace started",{traceName:this.name});this.api.mark(this.traceStartMark),this.state=2}stop(){if(2!==this.state)throw oc.create("trace stopped",{traceName:this.name});this.state=3,this.api.mark(this.traceStopMark),this.api.measure(this.traceMeasure,this.traceStartMark,this.traceStopMark),this.calculateTraceMetrics(),dl(this)}record(e,t,n){if(e<=0)throw oc.create("nonpositive trace startTime",{traceName:this.name});if(t<=0)throw oc.create("nonpositive trace duration",{traceName:this.name});if(this.durationUs=Math.floor(1e3*t),this.startTimeUs=Math.floor(1e3*e),n&&n.attributes&&(this.customAttributes=Object.assign({},n.attributes)),n&&n.metrics)for(const i of Object.keys(n.metrics))isNaN(Number(n.metrics[i]))||(this.counters[i]=Math.floor(Number(n.metrics[i])));dl(this)}incrementMetric(e,t=1){void 0===this.counters[e]?this.putMetric(e,t):this.putMetric(e,this.counters[e]+t)}putMetric(e,t){if(!Cl(e,this.name))throw oc.create("invalid custom metric name",{customMetricName:e});this.counters[e]=Tl(null!==t&&void 0!==t?t:0)}getMetric(e){return this.counters[e]||0}putAttribute(e,t){const n=Ic(e),i=Sc(t);if(n&&i)this.customAttributes[e]=t;else{if(!n)throw oc.create("invalid attribute name",{attributeName:e});if(!i)throw oc.create("invalid attribute value",{attributeValue:t})}}getAttribute(e){return this.customAttributes[e]}removeAttribute(e){void 0!==this.customAttributes[e]&&delete this.customAttributes[e]}getAttributes(){return Object.assign({},this.customAttributes)}setStartTime(e){this.startTimeUs=e}setDuration(e){this.durationUs=e}calculateTraceMetrics(){const e=this.api.getEntriesByName(this.traceMeasure),t=e&&e[0];t&&(this.durationUs=Math.floor(1e3*t.duration),this.startTimeUs=Math.floor(1e3*(t.startTime+this.api.getTimeOrigin())))}static createOobTrace(e,t,n,i){const r=dc.getInstance().getUrl();if(!r)return;const s=new kl(e,Ja+r,!0),o=Math.floor(1e3*dc.getInstance().getTimeOrigin());s.setStartTime(o),t&&t[0]&&(s.setDuration(Math.floor(1e3*t[0].duration)),s.putMetric("domInteractive",Math.floor(1e3*t[0].domInteractive)),s.putMetric("domContentLoadedEventEnd",Math.floor(1e3*t[0].domContentLoadedEventEnd)),s.putMetric("loadEventEnd",Math.floor(1e3*t[0].loadEventEnd)));const a="first-paint",c="first-contentful-paint";if(n){const e=n.find(e=>e.name===a);e&&e.startTime&&s.putMetric(Xa,Math.floor(1e3*e.startTime));const t=n.find(e=>e.name===c);t&&t.startTime&&s.putMetric(Za,Math.floor(1e3*t.startTime)),i&&s.putMetric(ec,Math.floor(1e3*i))}dl(s)}static createUserTimingTrace(e,t){const n=new kl(e,t,!1,t);dl(n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(e,t){const n=t;if(!n||void 0===n.responseStart)return;const i=dc.getInstance().getTimeOrigin(),r=Math.floor(1e3*(n.startTime+i)),s=n.responseStart?Math.floor(1e3*(n.responseStart-n.startTime)):void 0,o=Math.floor(1e3*(n.responseEnd-n.startTime)),a=n.name&&n.name.split("?")[0],c={performanceController:e,url:a,responsePayloadBytes:n.transferSize,startTimeUs:r,timeToResponseInitiatedUs:s,timeToResponseCompletedUs:o};fl(c)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El=5e3;function Il(e){gc()&&(setTimeout(()=>Pl(e),0),setTimeout(()=>Sl(e),0),setTimeout(()=>Rl(e),0))}function Sl(e){const t=dc.getInstance(),n=t.getEntriesByType("resource");for(const i of n)Ol(e,i);t.setupObserver("resource",t=>Ol(e,t))}function Pl(e){const t=dc.getInstance(),n=t.getEntriesByType("navigation"),i=t.getEntriesByType("paint");if(t.onFirstInputDelay){let r=setTimeout(()=>{kl.createOobTrace(e,n,i),r=void 0},El);t.onFirstInputDelay(t=>{r&&(clearTimeout(r),kl.createOobTrace(e,n,i,t))})}else kl.createOobTrace(e,n,i)}function Rl(e){const t=dc.getInstance(),n=t.getEntriesByType("measure");for(const i of n)Nl(e,i);t.setupObserver("measure",t=>Nl(e,t))}function Nl(e,t){const n=t.name;n.substring(0,Ya.length)!==Ya&&kl.createUserTimingTrace(e,n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e,t){this.app=e,this.installations=t,this.initialized=!1}_init(e){this.initialized||(void 0!==(null===e||void 0===e?void 0:e.dataCollectionEnabled)&&(this.dataCollectionEnabled=e.dataCollectionEnabled),void 0!==(null===e||void 0===e?void 0:e.instrumentationEnabled)&&(this.instrumentationEnabled=e.instrumentationEnabled),dc.getInstance().requiredApisAvailable()?Object(A["X"])().then(e=>{e&&(rl(),Hc(this).then(()=>Il(this),()=>Il(this)),this.initialized=!0)}).catch(e=>{ac.info("Environment doesn't support IndexedDB: "+e)}):ac.info('Firebase Performance cannot start if the browser does not support "Fetch" and "Promise", or cookies are disabled.'))}set instrumentationEnabled(e){bc.getInstance().instrumentationEnabled=e}get instrumentationEnabled(){return bc.getInstance().instrumentationEnabled}set dataCollectionEnabled(e){bc.getInstance().dataCollectionEnabled=e}get dataCollectionEnabled(){return bc.getInstance().dataCollectionEnabled}}const jl="[DEFAULT]";function Al(e,t){return e=Object(A["v"])(e),new kl(e,t)}const Dl=(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();if(n.name!==jl)throw oc.create("FB not default");if("undefined"===typeof window)throw oc.create("no window");pc(window);const r=new xl(n,i);return r._init(t),r};function Ml(){Object(j["_registerComponent"])(new E["a"]("performance",Dl,"PUBLIC")),Object(j["registerVersion"])(Ha,$a),Object(j["registerVersion"])(Ha,$a,"esm2017")}Ml();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fl{constructor(e,t){this.app=e,this._delegate=t}get instrumentationEnabled(){return this._delegate.instrumentationEnabled}set instrumentationEnabled(e){this._delegate.instrumentationEnabled=e}get dataCollectionEnabled(){return this._delegate.dataCollectionEnabled}set dataCollectionEnabled(e){this._delegate.dataCollectionEnabled=e}trace(e){return Al(this._delegate,e)}}const Ll="@firebase/performance-compat",Ul="0.1.9";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ql(e){e.INTERNAL.registerComponent(new E["a"]("performance-compat",Bl,"PUBLIC")),e.registerVersion(Ll,Ul)}function Bl(e){const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("performance").getImmediate();return new Fl(t,n)}ql(k["a"]);const Wl="@firebase/remote-config",Vl="0.3.8";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kl{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl="remote-config",$l={["registration-window"]:"Undefined window object. This SDK only supports usage in a browser environment.",["registration-project-id"]:"Undefined project identifier. Check Firebase app initialization.",["registration-api-key"]:"Undefined API key. Check Firebase app initialization.",["registration-app-id"]:"Undefined app identifier. Check Firebase app initialization.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}.",["fetch-client-network"]:"Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-timeout"]:'The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',["fetch-throttle"]:'The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',["fetch-client-parse"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["indexed-db-unavailable"]:"Indexed DB is not supported by current browser"},zl=new A["b"]("remoteconfig","Remote Config",$l);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(e,t){return e instanceof A["c"]&&-1!==e.code.indexOf(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql=!1,Yl="",Jl=0,Xl=["1","true","t","yes","y","on"];class Zl{constructor(e,t=Yl){this._source=e,this._value=t}asString(){return this._value}asBoolean(){return"static"===this._source?Ql:Xl.indexOf(this._value.toLowerCase())>=0}asNumber(){if("static"===this._source)return Jl;let e=Number(this._value);return isNaN(e)&&(e=Jl),e}getSource(){return this._source}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eh(e){const t=Object(A["v"])(e),[n,i]=await Promise.all([t._storage.getLastSuccessfulFetchResponse(),t._storage.getActiveConfigEtag()]);return!!(n&&n.config&&n.eTag&&n.eTag!==i)&&(await Promise.all([t._storageCache.setActiveConfig(n.config),t._storage.setActiveConfigEtag(n.eTag)]),!0)}function th(e){const t=Object(A["v"])(e);return t._initializePromise||(t._initializePromise=t._storageCache.loadFromStorage().then(()=>{t._isInitializationComplete=!0})),t._initializePromise}async function nh(e){const t=Object(A["v"])(e),n=new Kl;setTimeout(async()=>{n.abort()},t.settings.fetchTimeoutMillis);try{await t._client.fetch({cacheMaxAgeMillis:t.settings.minimumFetchIntervalMillis,signal:n}),await t._storageCache.setLastFetchStatus("success")}catch(i){const e=Gl(i,"fetch-throttle")?"throttle":"failure";throw await t._storageCache.setLastFetchStatus(e),i}}function ih(e){const t=Object(A["v"])(e);return lh(t._storageCache.getActiveConfig(),t.defaultConfig).reduce((t,n)=>(t[n]=ah(e,n),t),{})}function rh(e,t){return ah(Object(A["v"])(e),t).asBoolean()}function sh(e,t){return ah(Object(A["v"])(e),t).asNumber()}function oh(e,t){return ah(Object(A["v"])(e),t).asString()}function ah(e,t){const n=Object(A["v"])(e);n._isInitializationComplete||n._logger.debug(`A value was requested for key "${t}" before SDK initialization completed. Await on ensureInitialized if the intent was to get a previously activated value.`);const i=n._storageCache.getActiveConfig();return i&&void 0!==i[t]?new Zl("remote",i[t]):n.defaultConfig&&void 0!==n.defaultConfig[t]?new Zl("default",String(n.defaultConfig[t])):(n._logger.debug(`Returning static value for key "${t}". Define a default or remote value if this is unintentional.`),new Zl("static"))}function ch(e,t){const n=Object(A["v"])(e);switch(t){case"debug":n._logger.logLevel=D["a"].DEBUG;break;case"silent":n._logger.logLevel=D["a"].SILENT;break;default:n._logger.logLevel=D["a"].ERROR}}function lh(e={},t={}){return Object.keys(Object.assign(Object.assign({},e),t))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e,t,n,i){this.client=e,this.storage=t,this.storageCache=n,this.logger=i}isCachedDataFresh(e,t){if(!t)return this.logger.debug("Config fetch cache check. Cache unpopulated."),!1;const n=Date.now()-t,i=n<=e;return this.logger.debug(`Config fetch cache check. Cache age millis: ${n}. Cache max age millis (minimumFetchIntervalMillis setting): ${e}. Is cache hit: ${i}.`),i}async fetch(e){const[t,n]=await Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(),this.storage.getLastSuccessfulFetchResponse()]);if(n&&this.isCachedDataFresh(e.cacheMaxAgeMillis,t))return n;e.eTag=n&&n.eTag;const i=await this.client.fetch(e),r=[this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())];return 200===i.status&&r.push(this.storage.setLastSuccessfulFetchResponse(i)),await Promise.all(r),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uh(e=navigator){return e.languages&&e.languages[0]||e.language}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(e,t,n,i,r,s){this.firebaseInstallations=e,this.sdkVersion=t,this.namespace=n,this.projectId=i,this.apiKey=r,this.appId=s}async fetch(e){const[t,n]=await Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken()]),i=window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfig.googleapis.com",r=`${i}/v1/projects/${this.projectId}/namespaces/${this.namespace}:fetch?key=${this.apiKey}`,s={"Content-Type":"application/json","Content-Encoding":"gzip","If-None-Match":e.eTag||"*"},o={sdk_version:this.sdkVersion,app_instance_id:t,app_instance_id_token:n,app_id:this.appId,language_code:uh()},a={method:"POST",headers:s,body:JSON.stringify(o)},c=fetch(r,a),l=new Promise((t,n)=>{e.signal.addEventListener(()=>{const e=new Error("The operation was aborted.");e.name="AbortError",n(e)})});let h;try{await Promise.race([c,l]),h=await c}catch(g){let e="fetch-client-network";throw"AbortError"===g.name&&(e="fetch-timeout"),zl.create(e,{originalErrorMessage:g.message})}let u=h.status;const d=h.headers.get("ETag")||void 0;let p,f;if(200===h.status){let e;try{e=await h.json()}catch(g){throw zl.create("fetch-client-parse",{originalErrorMessage:g.message})}p=e["entries"],f=e["state"]}if("INSTANCE_STATE_UNSPECIFIED"===f?u=500:"NO_CHANGE"===f?u=304:"NO_TEMPLATE"!==f&&"EMPTY_CONFIG"!==f||(p={}),304!==u&&200!==u)throw zl.create("fetch-status",{httpStatus:u});return{status:u,eTag:d,config:p}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ph(e,t){return new Promise((n,i)=>{const r=Math.max(t-Date.now(),0),s=setTimeout(n,r);e.addEventListener(()=>{clearTimeout(s),i(zl.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function fh(e){if(!(e instanceof A["c"])||!e.customData)return!1;const t=Number(e.customData["httpStatus"]);return 429===t||500===t||503===t||504===t}class gh{constructor(e,t){this.client=e,this.storage=t}async fetch(e){const t=await this.storage.getThrottleMetadata()||{backoffCount:0,throttleEndTimeMillis:Date.now()};return this.attemptFetch(e,t)}async attemptFetch(e,{throttleEndTimeMillis:t,backoffCount:n}){await ph(e.signal,t);try{const t=await this.client.fetch(e);return await this.storage.deleteThrottleMetadata(),t}catch(i){if(!fh(i))throw i;const t={throttleEndTimeMillis:Date.now()+Object(A["l"])(n),backoffCount:n+1};return await this.storage.setThrottleMetadata(t),this.attemptFetch(e,t)}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h=6e4,mh=432e5;class bh{constructor(e,t,n,i,r){this.app=e,this._client=t,this._storageCache=n,this._storage=i,this._logger=r,this._isInitializationComplete=!1,this.settings={fetchTimeoutMillis:_h,minimumFetchIntervalMillis:mh},this.defaultConfig={}}get fetchTimeMillis(){return this._storageCache.getLastSuccessfulFetchTimestampMillis()||-1}get lastFetchStatus(){return this._storageCache.getLastFetchStatus()||"no-fetch-yet"}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(e,t){const n=e.target.error||void 0;return zl.create(t,{originalErrorMessage:n&&n.message})}const vh="app_namespace_store",wh="firebase_remote_config",Ch=1;function Th(){return new Promise((e,t)=>{try{const n=indexedDB.open(wh,Ch);n.onerror=e=>{t(yh(e,"storage-open"))},n.onsuccess=t=>{e(t.target.result)},n.onupgradeneeded=e=>{const t=e.target.result;switch(e.oldVersion){case 0:t.createObjectStore(vh,{keyPath:"compositeKey"})}}}catch(n){t(zl.create("storage-open",{originalErrorMessage:n}))}})}class kh{constructor(e,t,n,i=Th()){this.appId=e,this.appName=t,this.namespace=n,this.openDbPromise=i}getLastFetchStatus(){return this.get("last_fetch_status")}setLastFetchStatus(e){return this.set("last_fetch_status",e)}getLastSuccessfulFetchTimestampMillis(){return this.get("last_successful_fetch_timestamp_millis")}setLastSuccessfulFetchTimestampMillis(e){return this.set("last_successful_fetch_timestamp_millis",e)}getLastSuccessfulFetchResponse(){return this.get("last_successful_fetch_response")}setLastSuccessfulFetchResponse(e){return this.set("last_successful_fetch_response",e)}getActiveConfig(){return this.get("active_config")}setActiveConfig(e){return this.set("active_config",e)}getActiveConfigEtag(){return this.get("active_config_etag")}setActiveConfigEtag(e){return this.set("active_config_etag",e)}getThrottleMetadata(){return this.get("throttle_metadata")}setThrottleMetadata(e){return this.set("throttle_metadata",e)}deleteThrottleMetadata(){return this.delete("throttle_metadata")}async get(e){const t=await this.openDbPromise;return new Promise((n,i)=>{const r=t.transaction([vh],"readonly"),s=r.objectStore(vh),o=this.createCompositeKey(e);try{const e=s.get(o);e.onerror=e=>{i(yh(e,"storage-get"))},e.onsuccess=e=>{const t=e.target.result;n(t?t.value:void 0)}}catch(a){i(zl.create("storage-get",{originalErrorMessage:a&&a.message}))}})}async set(e,t){const n=await this.openDbPromise;return new Promise((i,r)=>{const s=n.transaction([vh],"readwrite"),o=s.objectStore(vh),a=this.createCompositeKey(e);try{const e=o.put({compositeKey:a,value:t});e.onerror=e=>{r(yh(e,"storage-set"))},e.onsuccess=()=>{i()}}catch(c){r(zl.create("storage-set",{originalErrorMessage:c&&c.message}))}})}async delete(e){const t=await this.openDbPromise;return new Promise((n,i)=>{const r=t.transaction([vh],"readwrite"),s=r.objectStore(vh),o=this.createCompositeKey(e);try{const e=s.delete(o);e.onerror=e=>{i(yh(e,"storage-delete"))},e.onsuccess=()=>{n()}}catch(a){i(zl.create("storage-delete",{originalErrorMessage:a&&a.message}))}})}createCompositeKey(e){return[this.appId,this.appName,this.namespace,e].join()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(e){this.storage=e}getLastFetchStatus(){return this.lastFetchStatus}getLastSuccessfulFetchTimestampMillis(){return this.lastSuccessfulFetchTimestampMillis}getActiveConfig(){return this.activeConfig}async loadFromStorage(){const e=this.storage.getLastFetchStatus(),t=this.storage.getLastSuccessfulFetchTimestampMillis(),n=this.storage.getActiveConfig(),i=await e;i&&(this.lastFetchStatus=i);const r=await t;r&&(this.lastSuccessfulFetchTimestampMillis=r);const s=await n;s&&(this.activeConfig=s)}setLastFetchStatus(e){return this.lastFetchStatus=e,this.storage.setLastFetchStatus(e)}setLastSuccessfulFetchTimestampMillis(e){return this.lastSuccessfulFetchTimestampMillis=e,this.storage.setLastSuccessfulFetchTimestampMillis(e)}setActiveConfig(e){return this.activeConfig=e,this.storage.setActiveConfig(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(){function e(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();if("undefined"===typeof window)throw zl.create("registration-window");if(!Object(A["D"])())throw zl.create("indexed-db-unavailable");const{projectId:r,apiKey:s,appId:o}=n.options;if(!r)throw zl.create("registration-project-id");if(!s)throw zl.create("registration-api-key");if(!o)throw zl.create("registration-app-id");t=t||"firebase";const a=new kh(o,n.name,t),c=new Oh(a),l=new D["b"](Wl);l.logLevel=D["a"].ERROR;const h=new dh(i,j["SDK_VERSION"],t,r,s,o),u=new gh(h,a),d=new hh(u,a,c,l),p=new bh(n,d,c,a,l);return th(p),p}Object(j["_registerComponent"])(new E["a"](Hl,e,"PUBLIC").setMultipleInstances(!0)),Object(j["registerVersion"])(Wl,Vl),Object(j["registerVersion"])(Wl,Vl,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ih(e){return e=Object(A["v"])(e),await nh(e),eh(e)}async function Sh(){if(!Object(A["D"])())return!1;try{const e=await Object(A["X"])();return e}catch(e){return!1}}Eh();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ph{constructor(e,t){this.app=e,this._delegate=t}get defaultConfig(){return this._delegate.defaultConfig}set defaultConfig(e){this._delegate.defaultConfig=e}get fetchTimeMillis(){return this._delegate.fetchTimeMillis}get lastFetchStatus(){return this._delegate.lastFetchStatus}get settings(){return this._delegate.settings}set settings(e){this._delegate.settings=e}activate(){return eh(this._delegate)}ensureInitialized(){return th(this._delegate)}fetch(){return nh(this._delegate)}fetchAndActivate(){return Ih(this._delegate)}getAll(){return ih(this._delegate)}getBoolean(e){return rh(this._delegate,e)}getNumber(e){return sh(this._delegate,e)}getString(e){return oh(this._delegate,e)}getValue(e){return ah(this._delegate,e)}setLogLevel(e){ch(this._delegate,e)}}const Rh="@firebase/remote-config-compat",Nh="0.1.9";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xh(e){e.INTERNAL.registerComponent(new E["a"]("remoteConfig-compat",jh,"PUBLIC").setMultipleInstances(!0).setServiceProps({isSupported:Sh})),e.registerVersion(Rh,Nh)}function jh(e,{instanceIdentifier:t}){const n=e.getProvider("app-compat").getImmediate(),i=e.getProvider("remote-config").getImmediate({identifier:t});return new Ph(n,i)}xh(k["a"]);var Ah="firebase",Dh="9.8.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
k["a"].registerVersion(Ah,Dh,"app-compat");var Mh="firebase",Fh="9.8.1";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
console.warn("\nIt looks like you're using the development build of the Firebase JS SDK.\nWhen deploying Firebase apps to production, it is advisable to only import\nthe individual SDK components you intend to use.\n\nFor the module builds, these are available in the following manner\n(replace <PACKAGE> with the name of a component - i.e. auth, database, etc):\n\nCommonJS Modules:\nconst firebase = require('firebase/app');\nrequire('firebase/<PACKAGE>');\n\nES Modules:\nimport firebase from 'firebase/app';\nimport 'firebase/<PACKAGE>';\n\nTypescript:\nimport firebase from 'firebase/app';\nimport 'firebase/<PACKAGE>';\n"),k["a"].registerVersion(Mh,Fh,"compat");var Lh=Object(i["defineComponent"])({components:{Lottie:w["a"]},name:"",data:function(){return{LoginAnimation:{animationData:C,loop:!0},form:[{name:"",password:"",remember:!1}]}},mounted:function(){},methods:{userLogin:function(){var e=this;T["a"].setPersistence(k["a"].auth.Auth.Persistence.LOCAL).then((function(){return T["a"].signInWithEmailAndPassword(e.form.name,e.form.password).then((function(){e.$router.push("/backstage")})).catch((function(){console.log("錯誤"),e.$swal("Oops...","帳號密碼錯誤，請重新輸入","error")}))})).catch((function(){}))}},setup:function(){return{value:Object(i["ref"])(null)}}}),Uh=(n("072a"),n("6b0d")),qh=n.n(Uh);const Bh=qh()(Lh,[["render",v]]);t["default"]=Bh}}]);
//# sourceMappingURL=chunk-83d079d2.3fed6180.js.map