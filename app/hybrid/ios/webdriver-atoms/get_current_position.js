function(){return function(){var c=!0,d=null,e=!1,f=this;var i=window;function j(a,m){this.code=a;this.message=m||"";this.name=k[a]||k[13];var b=Error(this.message);b.name=this.name;this.stack=b.stack||""}var l=Error;function n(){}n.prototype=l.prototype;j.b=l.prototype;j.prototype=new n;
var k={7:"NoSuchElementError",8:"NoSuchFrameError",9:"UnknownCommandError",10:"StaleElementReferenceError",11:"ElementNotVisibleError",12:"InvalidElementStateError",13:"UnknownError",15:"ElementNotSelectableError",19:"XPathLookupError",23:"NoSuchWindowError",24:"InvalidCookieDomainError",25:"UnableToSetCookieError",26:"ModalDialogOpenedError",27:"NoModalDialogOpenError",28:"ScriptTimeoutError",32:"InvalidSelectorError",35:"SqlDatabaseError",34:"MoveTargetOutOfBoundsError"};
j.prototype.toString=function(){return this.name+": "+this.message};function p(a,m){for(var b=0,u=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),z=String(m).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),G=Math.max(u.length,z.length),A=0;0==b&&A<G;A++){var ka=u[A]||"",la=z[A]||"",ma=RegExp("(\\d*)(\\D*)","g"),na=RegExp("(\\d*)(\\D*)","g");do{var g=ma.exec(ka)||["","",""],h=na.exec(la)||["","",""];if(0==g[0].length&&0==h[0].length)break;b=((0==g[1].length?0:parseInt(g[1],10))<(0==h[1].length?0:parseInt(h[1],10))?-1:(0==g[1].length?0:parseInt(g[1],10))>
(0==h[1].length?0:parseInt(h[1],10))?1:0)||((0==g[2].length)<(0==h[2].length)?-1:(0==g[2].length)>(0==h[2].length)?1:0)||(g[2]<h[2]?-1:g[2]>h[2]?1:0)}while(0==b)}return b};var q,r,s,t;function v(){return f.navigator?f.navigator.userAgent:d}t=s=r=q=e;var w;if(w=v()){var aa=f.navigator;q=0==w.indexOf("Opera");r=!q&&-1!=w.indexOf("MSIE");s=!q&&-1!=w.indexOf("WebKit");t=!q&&!s&&"Gecko"==aa.product}var x=q,y=r,ba=t,ca=s,da=f.navigator,ea=-1!=(da&&da.platform||"").indexOf("Win");function fa(){var a=f.document;return a?a.documentMode:void 0}var B;
a:{var C="",D;if(x&&f.opera)var E=f.opera.version,C="function"==typeof E?E():E;else if(ba?D=/rv\:([^\);]+)(\)|;)/:y?D=/MSIE\s+([^\);]+)(\)|;)/:ca&&(D=/WebKit\/(\S+)/),D)var ga=D.exec(v()),C=ga?ga[1]:"";if(y){var ha=fa();if(ha>parseFloat(C)){B=String(ha);break a}}B=C}var F={},ia=f.document,ja=!ia||!y?void 0:fa()||("CSS1Compat"==ia.compatMode?parseInt(B,10):5);var H,I,J,K,L,M,N;N=M=L=K=J=I=H=e;var O=v();O&&(-1!=O.indexOf("Firefox")?H=c:-1!=O.indexOf("Camino")?I=c:-1!=O.indexOf("iPhone")||-1!=O.indexOf("iPod")?J=c:-1!=O.indexOf("iPad")?K=c:-1!=O.indexOf("Android")?L=c:-1!=O.indexOf("Chrome")?M=c:-1!=O.indexOf("Safari")&&(N=c));var oa=H,pa=I,qa=J,ra=K,P=L,sa=M,Q=N;function R(a){return(a=a.exec(v()))?a[1]:""}var ta=function(){if(oa)return R(/Firefox\/([0-9.]+)/);if(y||x)return B;if(sa)return R(/Chrome\/([0-9.]+)/);if(Q)return R(/Version\/([0-9.]+)/);if(qa||ra){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(v());if(a)return a[1]+"."+a[2]}else{if(P)return(a=R(/Android\s+([0-9.]+)/))?a:R(/Version\/([0-9.]+)/);if(pa)return R(/Camino\/([0-9.]+)/)}return""}();var S,ua;function T(a){return U?ua(a):P?0<=p(va,a):0<=p(ta,a)}var U=function(){if(!ba)return e;var a=f.Components;if(!a)return e;try{if(!a.classes)return e}catch(m){return e}var b=a.classes,a=a.interfaces,u=b["@mozilla.org/xpcom/version-comparator;1"].getService(a.nsIVersionComparator),b=b["@mozilla.org/xre/app-info;1"].getService(a.nsIXULAppInfo),z=b.platformVersion,G=b.version;S=function(a){return 0<=u.a(z,""+a)};ua=function(a){return 0<=u.a(G,""+a)};return c}(),V;
if(P){var wa=/Android\s+([0-9\.]+)/.exec(v());V=wa?wa[1]:"0"}else V="0";var va=V;P&&T(2.3);var W=y&&(U?S(8):y?0<=p(ja,8):F[8]||(F[8]=0<=p(B,8)))&&!(U?S(9):y?0<=p(ja,9):F[9]||(F[9]=0<=p(B,9))),xa=Q&&T(4)&&!T(5),ya=P&&T(2.2)&&!T(2.3),za=ea&&Q&&T(4)&&!T(6);
function Aa(){var a=i||i;switch("location"){case "appcache":return W?e:a.applicationCache!=d;case "browser_connection":return a.navigator!=d&&a.navigator.onLine!=d;case "database":return xa||ya?e:a.openDatabase!=d;case "location":return za?e:a.navigator!=d&&a.navigator.geolocation!=d;case "local_storage":return W?e:a.localStorage!=d;case "session_storage":return W?e:a.sessionStorage!=d&&a.sessionStorage.clear!=d;default:throw new j(13,"Unsupported API identifier provided as parameter");}};var Ba={enableHighAccuracy:c,maximumAge:Infinity,timeout:5E3};function Ca(a,m,b){b=b||Ba;if(Aa())i.navigator.geolocation.getCurrentPosition(a,m,b);else throw new j(13,"Geolocation undefined");}var X=["_"],Y=f;!(X[0]in Y)&&Y.execScript&&Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());){var $;if($=!X.length)$=void 0!==Ca;$?Y[Z]=Ca:Y=Y[Z]?Y[Z]:Y[Z]={}};; return this._.apply(null,arguments);}.apply({navigator:typeof window!=undefined?window.navigator:null,document:typeof window!=undefined?window.document:null}, arguments);}
