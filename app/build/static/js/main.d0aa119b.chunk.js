(this.webpackJsonpmaesil=this.webpackJsonpmaesil||[]).push([[0],{101:function(e,t,n){e.exports=n(147)},106:function(e,t,n){},130:function(e,t){},131:function(e,t){},142:function(e,t){},145:function(e,t){},146:function(e,t){},147:function(e,t,n){"use strict";n.r(t);var i=n(16),a=n.n(i),o=n(79),r=n.n(o),s=(n(106),n(2)),c=n.n(s),l=n(28),u=n(14),d=n(10),h=n(3),v=n(9),f=n(12),m=n(13),p="http://13.209.193.142:8080",g=n(41),b=n.n(g),w=n(44);var E=function(){return a.a.createElement("header",null,a.a.createElement(w.b,{to:"/"},"\ub9e4\uc2e4"))};var O=function(){return a.a.createElement("footer",null,"\xa9 SW\ub9c8\uc5d0\uc2a4\ud2b8\ub85c 11\uae30 \ucf54\ub4dc\ube14\ub8e8\ud300")},x=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(e){var i;return Object(h.a)(this,n),(i=t.call(this,e)).loadExercises=Object(d.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b.a.get(p+"/exercises/").then((function(e){var t,n=e.data.result,a=[{id:-1,name:"\ub20c\ub7ec\uc11c \uc120\ud0dd\ud574\uc8fc\uc138\uc694!",url:""}],o=Object(u.a)(n);try{for(o.s();!(t=o.n()).done;){var r=t.value;a.push({id:r.exercise_id,name:r.title,url:r.video_url})}}catch(s){o.e(s)}finally{o.f()}i.setState(Object(l.a)(Object(l.a)({},i.state),{},{exercises:a}))})).catch((function(e){}));case 1:case"end":return e.stop()}}),e)}))),i.onItemSelect=function(e){i.setState(Object(l.a)(Object(l.a)({},i.state),{},{select:e.target.value})),console.log(e.target.value)},i.state={exercises:[],select:-1},i}return Object(v.a)(n,[{key:"componentDidMount",value:function(){this.loadExercises()}},{key:"render",value:function(){var e=this.state.exercises.map((function(e,t){var n=e.id,i=e.name;e.url;return a.a.createElement("option",{value:n,key:t}," ",i," ")}));return a.a.createElement("div",null,a.a.createElement(E,null),a.a.createElement("select",{onChange:this.onItemSelect},e),a.a.createElement(w.b,{to:"/exercise/"+(-1===this.state.select?"":this.state.select)},a.a.createElement("button",null,"Pose estimation.. \ud574\ubcfc\ub798?")),a.a.createElement(O,null))}}]),n}(a.a.Component),j=n(7),y=n(57),C={algorithm:"single-pose",model:{architecture:"MobileNetV1",multiplier:.75,outputStride:16,inputResolution:250,quantBytes:2},flipPoseHorizontal:!1,multiPose:{maxPoseDetections:5,minPartConfidence:.1,nmsRadius:30}},P=function e(t){var n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:C;Object(h.a)(this,e),this.video=void 0,this.poseNet=void 0,this.config=void 0,this.readyToUse=void 0,this.modelInUse=void 0,this.resultPoses=void 0,this.record=void 0,this.load=Object(d.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.c(n.config.model);case 2:t=e.sent,n.poseNet=t,n.modelInUse=!1,n.readyToUse=!0;case 6:case"end":return e.stop()}}),e)}))),this.getPoseResult=Object(d.a)(c.a.mark((function e(){var t,i,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.modelInUse){e.next=3;break}return n.record.length>0&&n.record.push(n.record[n.record.length-1]),e.abrupt("return",!1);case 3:n.modelInUse=!0,t=[],e.t0=n.config.algorithm,e.next="single-pose"===e.t0?8:"multi-pose"===e.t0?13:18;break;case 8:return e.next=10,n.poseNet.estimatePoses(n.video,{flipHorizontal:n.config.flipPoseHorizontal,decodingMethod:"single-person"});case 10:return i=e.sent,t=t.concat(i),e.abrupt("break",18);case 13:return e.next=15,n.poseNet.estimatePoses(n.video,{flipHorizontal:n.config.flipPoseHorizontal,decodingMethod:"multi-person",maxDetections:n.config.multiPose.maxPoseDetections,scoreThreshold:n.config.multiPose.minPartConfidence,nmsRadius:n.config.multiPose.nmsRadius});case 15:return a=e.sent,t=t.concat(a),e.abrupt("break",18);case 18:return t[0]&&n.record.push(t[0]),n.resultPoses=t,n.modelInUse=!1,e.abrupt("return",!0);case 22:case"end":return e.stop()}}),e)}))),this.video=t,this.config=i,this.modelInUse=!0,this.readyToUse=!1,this.resultPoses=[],this.record=[]};n(100);function k(e){return[e.y,e.x]}function H(e,t,n,i,a){e.beginPath(),e.arc(n,t,i,0,2*Math.PI),e.fillStyle=a,e.fill()}function V(e,t,n,i){var a=Object(j.a)(e,2),o=a[0],r=a[1],s=Object(j.a)(t,2),c=s[0],l=s[1],u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,d=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[0,0],h=Object(j.a)(d,2),v=h[0],f=h[1];i.beginPath(),i.moveTo(r*u+v,o*u+f),i.lineTo(l*u+v,c*u+f),i.lineWidth=1,i.strokeStyle=n,i.stroke()}function S(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[0,0],o=Object(j.a)(a,2),r=o[0],s=o[1],c=y.a(e,t);c.forEach((function(e){return V(k(e[0].position),k(e[1].position),"aqua",n,i,[r,s])}))}function W(e,t,n){for(var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[0,0],o=Object(j.a)(a,2),r=o[0],s=o[1],c=0;c<e.length;c++){var l=e[c];if(!(l.score<t)){var u=l.position,d=u.y,h=u.x;H(n,d*i+s,h*i+r,3,"aqua")}}}function R(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[0,0],a=Object(j.a)(i,2),o=a[0],r=a[1],s=y.b(e);t.rect(n*s.minX+o,n*s.minY+r,n*(s.maxX-s.minX),n*(s.maxY-s.minY)),t.strokeStyle="red",t.stroke()}var T=n(99);function M(e,t){var n=Object(T.poseSimilarity)(e,t,{strategy:"cosineSimilarity"});return"number"==typeof n?2*((1+n)/2-.5):0}function I(e,t){for(var n=0,i=Array.from(Array(e.length),(function(){return new Array(t.length)})),a=0;a<e.length;a++)for(var o=0;o<t.length;o++)i[a][o]=M(e[a],t[o]);for(var r=e.length-1,s=0;s<t.length;r>0?r--:s++){var c=s,l=r,u=0,d=e.length-r;if(!(d/e.length<.7)){for(;l<e.length;l++,c++)u+=i[l][c];n<u/d&&(n=u/d)}}return n}var F=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(e){var i;Object(h.a)(this,n),(i=t.call(this,e)).ctx=void 0,i.canvas=void 0,i.views=void 0,i.viewConfig=void 0,i.drawCanvas=function(){for(var e=i.ctx,t=0;t<i.views.length;t++)i.views[t].video.play();var n=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[0,0],o=i.ctx;i.viewConfig.showVideo&&(o.save(),o.translate(i.viewConfig.flipPoseHorizontal?n*i.props.videoWidth:0,0),o.scale(i.viewConfig.flipPoseHorizontal?-1:1,1),o.drawImage(e,(i.viewConfig.flipPoseHorizontal?-1:1)*a[0],a[1],i.props.videoWidth*n,i.props.videoHeight*n),o.restore()),t&&t.forEach((function(e){var t=e.score,r=e.keypoints;t>=i.viewConfig.minPoseConfidence&&(i.viewConfig.showPoints&&W(r,i.viewConfig.minPartConfidence,o,n,a),i.viewConfig.showSkeleton&&S(r,i.viewConfig.minPartConfidence,o,n,a),i.viewConfig.showBoundingBox&&R(r,o,n,a))}))};!function e(t){t(),requestAnimationFrame((function(){e(t)}))}((function(){e.clearRect(0,0,i.props.videoWidth,i.props.videoHeight);for(var t=0;t<i.views.length;t++)i.views[t].calculator.getPoseResult(),n(i.views[t].video,i.views[t].calculator.resultPoses,i.views[t].scale,i.views[t].offset)}))},i.canvas=a.a.createRef(),i.viewConfig=i.props.viewConfig,i.views=i.props.views,i.state={finishCount:0};for(var o=0;o<i.views.length;o++)Object.assign(i.views[o],{calculator:new P(i.views[o].video)}),i.views[o].video.onended=function(){var e=i.state.finishCount+1;i.setState({finishCount:e}),1===e&&i.props.onExerciseFinish({score:I(i.views[0].calculator.record,i.views[1].calculator.record),time:3780,calorie:1021})};return i}return Object(v.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.ctx=this.canvas.current.getContext("2d");for(var t=[],n=0;n<this.views.length;n++)t.push(this.views[n].calculator.load());Promise.all(t).then((function(){e.drawCanvas()}))}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("canvas",{ref:this.canvas,width:this.props.videoWidth,height:this.props.videoHeight},"\uc6b4\ub3d9 \uae30\ub2a5\uc774 \uc9c0\uc6d0\ub418\uc9c0 \uc54a\ub294 \ube0c\ub77c\uc6b0\uc800\uc785\ub2c8\ub2e4..\u3160\u3160"))}}]),n}(a.a.Component);F.defaultProps={videoWidth:800,videoHeight:600,views:[],onExerciseFinish:function(){},viewConfig:{flipPoseHorizontal:!1,showVideo:!0,showSkeleton:!0,showPoints:!0,showBoundingBox:!0,minPoseConfidence:.15,minPartConfidence:.1}};var N=F,U=n(23),z=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(e){var i;return Object(h.a)(this,n),(i=t.call(this,e)).guideVideo=a.a.createRef(),i.userVideo=a.a.createRef(),i.loadVideo=function(){var e=Object(d.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get(p+"/exercises/"+t);case 2:return n=e.sent,e.abrupt("return",n.data.result.video_url);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i.loadStream=Object(d.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"user",width:i.props.videoWidth,height:i.props.videoHeight}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),i.componentDidMount=function(){var e=i.loadVideo(i.state.id),t=i.loadStream();Promise.all([e,t]).then((function(e){var t=Object(j.a)(e,2),n=t[0],a=t[1],o=i.guideVideo.current,r=i.userVideo.current;o.src=n,r.srcObject=a,new Promise((function(e){var t=0,n=function(){(t+=1)>=2&&e()};o.onloadeddata=n,r.onloadeddata=n})).then((function(){return i.setState(Object(l.a)(Object(l.a)({},i.state),{},{isLoading:!1}))}))}))},i.handleExerciseFinish=function(e){console.log("HI!!!!"),b.a.post(p+"/exercises/"+i.state.id+"/history",{score:e.score,play_time:"00:01:03",cal:e.calorie}).then((function(t){console.log(t),200===t.data.code?i.setState(Object(l.a)(Object(l.a)({},i.state),{},{record:e,redirectToResult:!0})):console.log("\u314b\u314b..;;")})).catch((function(e){console.log("\u314b\u314b..\u3148\u3145!!\u314e\u314e..")}))},i.state={isLoading:!0,isFinished:!1,redirectToResult:!1,id:e.match.params.id,record:null},i}return Object(v.a)(n,[{key:"render",value:function(){if(this.state.redirectToResult)return a.a.createElement(U.a,{push:!0,to:{pathname:"/result",state:{score:this.state.record.score,time:this.state.record.playTime,calorie:this.state.record.calorie}}});var e=a.a.createElement("div",null,a.a.createElement("video",{height:this.props.videoHeight,width:this.props.videoWidth,crossOrigin:"anonymous",style:{display:"none"},ref:this.guideVideo}),a.a.createElement("video",{height:this.props.videoHeight,width:this.props.videoWidth,crossOrigin:"anonymous",style:{display:"none"},ref:this.userVideo}));return this.state.isLoading?a.a.createElement("div",null,a.a.createElement(E,null),e,"\uc6b4\ub3d9 \ubd88\ub7ec\uc624\ub294 \uc911...",a.a.createElement(O,null)):a.a.createElement("div",null,a.a.createElement(E,null),e,a.a.createElement(N,{onExerciseFinish:this.handleExerciseFinish,videoWidth:this.props.videoWidth,videoHeight:this.props.videoHeight,views:[{video:this.guideVideo.current,scale:1,offset:[0,0]},{video:this.userVideo.current,scale:.3,offset:[540,400]}]}),a.a.createElement(O,null))}}]),n}(a.a.Component);z.defaultProps={videoWidth:800,videoHeight:600};var B=z;var D=function(e){var t=e.title;return a.a.createElement("div",{id:"title"},t)};function L(e){var t=e.time,n=e.calorie,i=e.score;return a.a.createElement("div",{className:"boxContainer"},a.a.createElement("div",{className:"box"}," ",(t-t%60)/60,"\ubd84 ",t%60,"\ucd08 "),a.a.createElement("div",{className:"box"}," ",Math.round(n),"\uce7c\ub85c\ub9ac \uc18c\ubaa8 "),a.a.createElement("div",{className:"box"}," ",Math.round(100*i),"\uc810 "))}L.defaultProps={time:63,calorie:0,score:0};var _=L,q=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(e){var i;return Object(h.a)(this,n),(i=t.call(this,e)).componentDidMount=function(){b()({method:"GET",url:p+"/exercises/1"}).then((function(e){var t=e.data.result.title;i.setState(Object(l.a)(Object(l.a)({},i.state),{},{loading:!1,exerciseName:t}))})).catch((function(e){console.log("\u314b\u314b")}))},i.state={loading:!0,stats:{time:i.props.location.state.time,calorie:i.props.location.state.calorie,score:i.props.location.state.score}},i}return Object(v.a)(n,[{key:"render",value:function(){if(this.state.loading)return a.a.createElement("div",null,a.a.createElement(E,null),"\uacb0\uacfc\ub97c \ubd88\ub7ec\uc624\ub294 \uc911\uc785\ub2c8\ub2e4...",a.a.createElement(O,null));var e=this.state.stats;return a.a.createElement("div",null,a.a.createElement(E,null),a.a.createElement(D,{title:this.state.exerciseName+" \uc644\ub8cc!"}),a.a.createElement(_,{time:e.time,calorie:e.calorie,score:e.score}),"\ub2e4\uc74c \ucf54\uc2a4\ub3c4 \ucd94\ucc9c\ud574 \uc8fc\uc790~",a.a.createElement(O,null))}}]),n}(a.a.Component);function A(e){var t=e%10,n=(e=(e-t)/10)%6,i=(e=(e-n)/6)%10,a=(e=(e-i)/10)%6,o=(e=(e-a)/6)%10;return"".concat((e=(e-o)/10)%10).concat(o,":").concat(a).concat(i,":").concat(n).concat(t)}var X=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(e){var i;return Object(h.a)(this,n),(i=t.call(this,e)).guideVideo=a.a.createRef(),i.userVideo=a.a.createRef(),i.path1="",i.path2="",i.loadVideo=function(){var e=i.path1,t=i.path2;Promise.all([e,t]).then((function(e){var t=Object(j.a)(e,2),n=t[0],a=t[1],o=i.guideVideo.current,r=i.userVideo.current;o.src=n,o.play(),r.src=a,r.play(),new Promise((function(e){var t=0,n=function(){(t+=1)>=2&&e()};o.onloadeddata=n,r.onloadeddata=n})).then((function(){return i.setState(Object(l.a)(Object(l.a)({},i.state),{},{isLoading:!1}))}))}))},i.handleExerciseFinish=function(e){b.a.post(p+"/exercises/"+i.state.id+"/history",{score:i.state.score,play_time:A(i.state.time),cal:i.state.calorie}).then((function(e){200===e.data.code?i.setState(Object(l.a)(Object(l.a)({},i.state),{},{redirectToResult:!0})):console.log("\u314b\u314b..;;")})).catch((function(e){console.log("\u314b\u314b..\u3148\u3145!!\u314e\u314e..")}))},i.onChange1=function(e){i.path1=e.target.value},i.onChange2=function(e){i.path2=e.target.value},i.onButtonClick=function(e){i.loadVideo()},i.state={isLoading:!0,isFinished:!1,redirectToResult:!1,id:e.match.params.id,score:10.21,time:63,calorie:731},i}return Object(v.a)(n,[{key:"render",value:function(){if(this.state.redirectToResult)return a.a.createElement(U.a,{push:!0,to:{pathname:"/result",state:{score:this.state.score,time:this.state.time,calorie:this.state.calorie}}});var e=a.a.createElement("div",null,a.a.createElement("video",{height:this.props.videoHeight,width:this.props.videoWidth,crossOrigin:"anonymous",style:{display:"none"},onEnded:this.handleExerciseFinish,ref:this.guideVideo}),a.a.createElement("video",{height:this.props.videoHeight,width:this.props.videoWidth,crossOrigin:"anonymous",style:{display:"none"},ref:this.userVideo}));return this.state.isLoading?a.a.createElement("div",null,a.a.createElement(E,null),e,a.a.createElement("input",{onChange:this.onChange1,placeholder:"\uccab\ubc88\uc9f8 \uc601\uc0c1 \uacbd\ub85c"}),a.a.createElement("input",{onChange:this.onChange2,placeholder:"\ub450\ubc88\uc9f8 \uc601\uc0c1 \uacbd\ub85c"}),a.a.createElement("button",{onClick:this.onButtonClick},"\uc2e4\ud589!!!"),a.a.createElement(O,null)):a.a.createElement("div",null,a.a.createElement(E,null),e,a.a.createElement(N,{videoWidth:this.props.videoWidth,videoHeight:this.props.videoHeight,views:[{video:this.guideVideo.current,scale:1,offset:[0,0]},{video:this.userVideo.current,scale:.3,offset:[540,400]}]}),a.a.createElement("button",{onClick:this.handleExerciseFinish},"\uadf8\ub0e5 \uacb0\uacfc\ucc3d \ubcf4\ub0b4\uae30"),a.a.createElement(O,null))}}]),n}(a.a.Component);X.defaultProps={videoWidth:800,videoHeight:600};var Y=X,J=function(){return a.a.createElement(w.a,null,a.a.createElement(U.d,null,a.a.createElement(U.b,{exact:!0,path:"/",component:x}),a.a.createElement(U.b,{path:"/exercise/:id",component:B}),a.a.createElement(U.b,{path:"/result",component:q}),a.a.createElement(U.b,{path:"/playground",component:Y}),a.a.createElement(U.a,{path:"*",to:"/"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[101,1,2]]]);
//# sourceMappingURL=main.d0aa119b.chunk.js.map