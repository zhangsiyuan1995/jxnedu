(function(window){var svgSprite='<svg><symbol id="icon-guankan" viewBox="0 0 1024 1024"><path d="M927.33645 486.194264c-104.987123-130.007983-256.335133-204.579375-415.227979-204.579375-158.729118 0-309.968657 74.443479-414.973176 204.251917-2.623757 3.243881-4.063549 7.28901-4.063549 11.462053l0 23.417339c0 4.174066 1.439792 8.219195 4.063549 11.463076 104.987123 129.790018 256.244059 204.233498 414.973176 204.233498 158.892847 0 310.222437-74.571393 415.227979-204.579375 2.623757-3.243881 4.045129-7.290033 4.045129-11.444657l0-22.74298C931.381579 493.484298 929.960207 489.456564 927.33645 486.194264L927.33645 486.194264zM894.934482 513.89414c-97.861842 118.345362-237.018182 186.083116-382.826012 186.083116-145.645125 0-284.72881-67.62826-382.571209-185.754634l0-10.406001c97.842399-118.126374 236.944504-185.754634 382.588605-185.754634 145.790434 0 284.965194 67.737754 382.827035 186.083116l0 9.749038L894.934482 513.89414 894.934482 513.89414z"  ></path><path d="M512.23536 368.779088c-77.323063 0-140.231835 62.907749-140.231835 140.249231 0 77.324086 62.908772 140.231835 140.231835 140.231835 21.248953 0 41.678238-4.628414 60.685127-13.758352 9.075703-4.355191 12.902868-15.234983 8.529257-24.310685-4.356214-9.075703-15.271822-12.866029-24.310685-8.528234-14.051017 6.742565-29.158087 10.168594-44.88528 10.168594-57.240679 0-103.784738-46.561455-103.784738-103.784738 0-57.222259 46.562479-103.802134 103.784738-103.802134s103.783715 46.561455 103.783715 103.802134c0 9.731642-1.347694 19.35379-3.990894 28.611641-2.77009 9.676383 2.825348 19.754926 12.501732 22.542412 9.640568 2.75167 19.754926-2.824325 22.542412-12.500709 3.590781-12.520151 5.39487-25.514093 5.39487-38.653345C652.485615 431.686836 589.576843 368.779088 512.23536 368.779088L512.23536 368.779088z"  ></path><path d="M446.301695 483.588927c-3.134387 8.127098-4.719488 16.692171-4.719488 25.439392 0 5.030573 4.081968 9.112542 9.111518 9.112542s9.112542-4.081968 9.112542-9.112542c0-6.505158 1.165546-12.865006 3.498684-18.878976 7.762801-20.083407 27.426653-33.568537 48.948829-33.568537 5.02955 0 9.111518-4.081968 9.111518-9.111518 0-5.030573-4.081968-9.112542-9.111518-9.112542C483.242026 438.33935 456.744535 456.526571 446.301695 483.588927L446.301695 483.588927z"  ></path></symbol><symbol id="icon-dianzan2" viewBox="0 0 1024 1024"><path d="M884.875894 423.143253 646.970506 423.143253c92.185562-340.464205-63.516616-357.853247-63.516616-357.853247-65.993017 0-52.312436 52.182476-57.3031 60.881602 0 166.502152-176.849824 296.971645-176.849824 296.971645l0 472.171899c0 46.607504 63.516616 63.393819 88.433098 63.393819l357.452111 0c33.641191 0 61.036122-88.224344 61.036122-88.224344 88.434122-300.70569 88.434122-390.177444 88.434122-390.177444C944.657442 418.179195 884.875894 423.143253 884.875894 423.143253L884.875894 423.143253 884.875894 423.143253zM884.875894 423.143253" fill="#ffffff" ></path><path d="M251.671415 423.299819 109.214912 423.299819c-29.420053 0-29.873378 28.89612-29.873378 28.89612l29.420053 476.202703c0 30.309306 30.361495 30.309306 30.361495 30.309306L262.420223 958.707948c25.686009 0 25.458835-20.049638 25.458835-20.049638L287.879058 459.411271C287.879058 422.837284 251.671415 423.299819 251.671415 423.299819L251.671415 423.299819 251.671415 423.299819zM251.671415 423.299819" fill="#ffffff" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)