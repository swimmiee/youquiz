(this.webpackJsonpyouquiz=this.webpackJsonpyouquiz||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n(0),a=n.n(r),i=n(24),s=n.n(i),o=n(11),u=n.n(o),l=n(15),j=n(9),d=n(47);n(89),n(91),n(103);d.a.initializeApp({apiKey:"AIzaSyCMaNAo5wm_-lOYQlRBgGT30ZsWkZMTLAQ",authDomain:"youquiz-9f5ee.firebaseapp.com",databaseURL:"https://youquiz-9f5ee.firebaseio.com",projectId:"youquiz-9f5ee",storageBucket:"youquiz-9f5ee.appspot.com",messagingSenderId:"577615600044",appId:"1:577615600044:web:f174e8ff8050d7e5a8c209",measurementId:"G-GD96BSKTVD"});var b=d.a,O=d.a.auth(),h=d.a.firestore(),x=(d.a.storage(),n(43)),p=n(17),m=(n(94),n(134)),f=n(135),g=n(28),v=function(){var e=Object(r.useState)(!1),t=Object(j.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)(!0),s=Object(j.a)(i,2),o=s[0],d=s[1],h=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new b.auth.GoogleAuthProvider,a(!0),e.next=4,O.signInWithPopup(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){var e=navigator.userAgent.toLowerCase().indexOf("chrome")>-1&&navigator.vendor.toLowerCase().indexOf("google")>-1,t=navigator.userAgent.toLowerCase().indexOf("safari/")>-1,n=e||t;n||alert("\ud604\uc7ac \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c\ub294 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294 \uc11c\ube44\uc2a4\uc785\ub2c8\ub2e4. \ud654\uba74\uc5d0 \ubcf4\uc774\ub294 \uc8fc\uc18c\ub97c \ubcf5\uc0ac\ud558\uc154\uc11c \uad6c\uae00 Chrome\ub098 Safari\uc571\uc744 \ud1b5\ud574 \uc811\uc18d\ud574 \uc8fc\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4."),d(n)}),[]);return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(m.a,{id:"auth-button",container:!0,direction:"row",spacing:1,alignItems:"center",children:[Object(c.jsx)(m.a,{item:!0,xs:12,children:Object(c.jsxs)(f.a,{variant:"outlined",onClick:h,disabled:!o,fullWidth:!0,children:[Object(c.jsx)(g.b,{})," \xa0 \uad6c\uae00\uc544\uc774\ub514\ub85c \ub85c\uadf8\uc778"]})}),!o&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(m.a,{item:!0,xs:12,children:[Object(c.jsx)("h4",{children:"\ud604\uc7ac \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c\ub294 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294 \uc11c\ube44\uc2a4\uc785\ub2c8\ub2e4."}),Object(c.jsx)("h4",{children:"Google Chrome\uc774\ub098 Safari \uc571\uc744 \ud1b5\ud574 \uc811\uc18d\ud574 \uc8fc\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4."}),Object(c.jsx)("h4",{children:"\uc544\ub798 \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uba74 \uc790\ub3d9\uc73c\ub85c URL\uc774 \ud074\ub9bd\ubcf4\ub4dc\uc5d0 \ubcf5\uc0ac\ub429\ub2c8\ub2e4."})]}),Object(c.jsx)(m.a,{item:!0,xs:12,children:Object(c.jsx)(f.a,{color:"primary",variant:"contained",onClick:function(){var e=document.createElement("textarea");e.value="dannylisa.github.io/youquiz/",document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),alert("URL\uc774 \ubcf5\uc0ac\ub418\uc5c8\uc2b5\ub2c8\ub2e4. Chrome\uc774\ub098 Safari\ub85c \uc811\uc18d\ud574\uc8fc\uc138\uc694!")},fullWidth:!0,children:"\ubcf5\uc0ac"})})]}),n&&Object(c.jsx)(m.a,{item:!0,xs:12,children:Object(c.jsx)("h5",{children:"\uc7a0\uc2dc \uae30\ub2e4\ub824\uc8fc\uc138\uc694..."})})]})})},A=n(150),w=n(154),y=n(155),C=n(153),S=n(148),F=function(e){var t=e.user,n=Object(r.useState)(""),a=Object(j.a)(n,2),i=a[0],s=a[1],o=Object(r.useState)(""),d=Object(j.a)(o,2),O=d[0],x=d[1],g=Object(r.useState)(!1),v=Object(j.a)(g,2),F=v[0],k=v[1],Q=Object(r.useState)(!1),U=Object(j.a)(Q,2),K=U[0],I=U[1],N=Object(p.f)(),q=function(e){var t=e.target,n=t.name,c=t.value;"name"===n?s(c):"tel"===n&&x(c.replace("-",""))},B=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.collection("userinfo").add({uid:t.uid,name:i,tel:O,isAdmin:!1});case 2:return e.next=4,h.collection("current").doc("current").update({users:b.firestore.FieldValue.increment(1)});case 4:alert("\uac00\uc785\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),I(!0),N.go(0);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsx)(c.Fragment,{children:K?Object(c.jsx)(A.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:!0,autoHideDuration:6e3,message:"\uc0c8\ub85c\uace0\uce68\ud558\uba74 \ud034\uc988 \ud398\uc774\uc9c0\ub85c \uc774\ub3d9\ub429\ub2c8\ub2e4."}):Object(c.jsx)("form",{id:"auth-form",children:Object(c.jsxs)(m.a,{container:!0,direction:"row",spacing:2,alignItems:"center",children:[Object(c.jsx)(m.a,{item:!0,xs:12,children:Object(c.jsx)("h2",{children:" \uc774\ub984\uacfc \uc804\ud654\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694. \uc774 \uc815\ubcf4\ub294 \ucd94\ucca8\uc744 \ud1b5\ud574 \uc120\ubb3c\uc744 \ubcf4\ub0b4\ub4dc\ub9ac\uae30 \uc704\ud55c \uc815\ubcf4\ub85c, \uaf2d \uc785\ub825\ud558\uc9c0 \uc54a\uc544\ub3c4 \ub429\ub2c8\ub2e4.  "})}),Object(c.jsx)(m.a,{item:!0,xs:12,md:5,children:Object(c.jsxs)(w.a,{children:[Object(c.jsx)(y.a,{htmlFor:"name-input",children:"\uc774\ub984"}),Object(c.jsx)(C.a,{id:"name-input",type:"text","aria-describedby":"name-helper",name:"name",onChange:q,value:i})]})}),Object(c.jsx)(m.a,{item:!0,xs:12,md:5,children:Object(c.jsxs)(w.a,{children:[Object(c.jsx)(y.a,{htmlFor:"tel-input",children:"\uc804\ud654\ubc88\ud638"}),Object(c.jsx)(C.a,{id:"tel-input",type:"tel","aria-describedby":"tel-helper",name:"tel",onChange:q,value:O})]})}),Object(c.jsx)(m.a,{item:!0,xs:12,md:2,children:Object(c.jsx)(f.a,{onClick:B,variant:"contained",color:"primary",disabled:!i||!O||!F,children:"\ud655\uc778"})}),Object(c.jsx)(m.a,{item:!0,xs:12,children:Object(c.jsxs)(S.a,{id:"info-agree",component:"div",my:2,children:["\u25a1 \uac1c\uc778\uc815\ubcf4 \uc218\uc9d1 \ub3d9\uc758\uc11c ",Object(c.jsx)("br",{}),"\u25cb \ubcf8 \ud589\uc0ac\uc758 \uc6d0\ud65c\ud55c \uc9c4\ud589\uc744 \uc704\ud558\uc5ec \uac1c\uc778\uc815\ubcf4\ub97c \uc544\ub798\uc640 \uac19\uc774 \uc218\uc9d1\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. ",Object(c.jsx)("br",{}),"\u2003 - \uc774\ub984, \ud734\ub300\uc804\ud654\ubc88\ud638, Google \uacc4\uc815 ",Object(c.jsx)("br",{}),"\u25a1 \uac1c\uc778\uc815\ubcf4 \uc218\uc9d1 \ubc29\ubc95 ",Object(c.jsx)("br",{}),'\u25cb \uc544\ub798 "\uac1c\uc778\uc815\ubcf4 \uc218\uc9d1\uc5d0 \ub3d9\uc758\ud569\ub2c8\ub2e4"\ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uac1c\uc778\uc815\ubcf4 \uc218\uc9d1 \ubc0f \uc774\uc6a9\uc5d0 \ub3d9\uc758\ud558\ub294 \uac83\uc73c\ub85c \uac04\uc8fc\ub429\ub2c8\ub2e4. ',Object(c.jsx)("br",{}),'\u25cb \uc774\ud6c4 "\uac1c\uc778\uc815\ubcf4 \uc218\uc9d1\uc5d0 \ub3d9\uc758\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4"\ubc84\ud2bc\uc744 \ub20c\ub7ec \uac1c\uc778\uc815\ubcf4 \uc218\uc9d1 \ub3d9\uc758\ub97c \ucde8\uc18c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ',Object(c.jsx)("br",{}),"\u25a1 \uac1c\uc778\uc815\ubcf4\uc758 \ubcf4\uc720 \ubc0f \uc774\uc6a9\uae30\uac04 ",Object(c.jsx)("br",{}),"\u25cb \ubcf8 \uac1c\uc778\uc815\ubcf4\ub294 \ud034\uc988\uc1fc \ud6c4 \ucd94\ucca8\uc5d0 \ub530\ub978 \uc120\ubb3c \ubc1c\uc1a1\uc744 \uc704\ud55c \uac83\uc774\ubbc0\ub85c, \ud034\uc988\uc1fc \uc885\ub8cc \ud6c4 \ub2f9\ucca8\uc790 \ucd94\ucca8 \ubc0f \uacbd\ud488 \ubc1c\uc1a1\uacfc \uad00\ub828\ud558\uc5ec \uc774\uc6a9\ub429\ub2c8\ub2e4. ",Object(c.jsx)("br",{}),"\u25cb \ubcf8 \uc6f9\ud398\uc774\uc9c0\uc5d0 \uc5f0\ub3d9\ub41c \uad6c\uae00 \uacc4\uc815\uc740 \ud034\uc988\uc1fc \ub2f9\uc77c \uc0ad\uc81c\ub429\ub2c8\ub2e4. ",Object(c.jsx)("br",{}),"\u25cb \ubcf8 \uac1c\uc778\uc815\ubcf4\uc758 \ubcf4\uc720\uae30\uac04\uc740 \ubbf8\ub2f9\ucca8\uc790\ub294 \ud034\uc988\uc1fc \ub2f9\uc77c(12/20), \ub2f9\ucca8\uc790\ub294 \uc120\ubb3c \ubc1c\uc1a1 \uc2dc\uae4c\uc9c0\uc785\ub2c8\ub2e4. ",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("b",{children:" \u203b \ub3d9\uc758\ub97c \uac70\ubd80\ud558\uc2dc\ub294 \uacbd\uc6b0 \ud034\uc988\uc1fc \ucc38\uc5ec\uac00 \ubd88\uac00\ud569\ub2c8\ub2e4."})," ",Object(c.jsx)("br",{})]})}),Object(c.jsx)(m.a,{item:!0,xs:12,children:Object(c.jsx)(f.a,{fullWidth:!0,variant:"contained",color:F?"secondary":"primary",onClick:function(){return k((function(e){return!e}))},children:F?"\uac1c\uc778\uc815\ubcf4 \uc218\uc9d1\uc5d0 \ub3d9\uc758\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.":"\uac1c\uc778\uc815\ubcf4 \uc218\uc9d1\uc5d0 \ub3d9\uc758\ud569\ub2c8\ub2e4."})})]})})})},k=n(31),Q=n.p+"static/media/logo.86da540d.png",U=function(e){var t=e.isAdmin,n=e.users;return Object(c.jsxs)("div",{id:"ready",children:[Object(c.jsxs)("div",{className:"ready-left",children:[Object(c.jsxs)("div",{className:"welcome",children:[Object(c.jsxs)("h2",{children:[" ",t?"QR\ucf54\ub4dc\ub97c \uc2a4\uce94\ud558\uba74 \ud034\uc988\uc5d0 \ucc38\uc5ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.":"\uace7 \ud034\uc988\uac00 \uc2dc\uc791\ub429\ub2c8\ub2e4!"," "]}),Object(c.jsxs)("h2",{children:[" \ucc38\uc5ec\ud574\uc8fc\uc2e0 \ubc97\ub2d8\ub4e4\uaed8\ub294 ",Object(c.jsx)("br",{})," \ucd94\ucca8\uc744 \ud1b5\ud574 \uc120\ubb3c\uc744 \ubcf4\ub0b4\ub4dc\ub9bd\ub2c8\ub2e4! "]})]}),Object(c.jsx)("div",{children:Object(c.jsx)("img",{src:t?"data:image/png;base64,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":Q,alt:"QR code"})})]}),Object(c.jsxs)("div",{className:"ready-right",children:[Object(c.jsxs)("h2",{className:"users",children:[Object(c.jsx)(g.d,{size:"25"}),"\xa0",n]}),t&&Object(c.jsxs)(f.a,{variant:"contained",color:"default",onClick:function(){h.collection("current").doc("current").update({currentQuiz:0,isStarted:!0,showScore:!1,showAnswer:!1,showWrongs:!1}),h.collection("current").doc("goals").update({score:0})},fullWidth:!0,children:[Object(c.jsx)(g.e,{size:"30"}),"\xa0"]})]})]})},K=n(105),I=n(156),N=n(136),q=n(151),B=function(e){var t=e.quizs,n=e.currentQuiz,r=e.showAnswer,a=t[n],i=a.no,s=a.question,o=a.answers,u={stepper:{padding:"1%",background:"inherit"}};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"christmas-striped top"}),Object(c.jsxs)(K.a,{id:"quiz",variant:"outlined",children:[Object(c.jsx)("div",{className:"quiz-timeline",children:Object(c.jsx)(I.a,{activeStep:n,alternativeLabel:!0,style:u.stepper,children:t.map((function(e,t){return Object(c.jsx)(N.a,{children:Object(c.jsx)(q.a,{style:u.stepLabel})},t)}))})}),Object(c.jsxs)("div",{className:"title",children:[" Q",i,". "]}),Object(c.jsx)("div",{className:"question",dangerouslySetInnerHTML:{__html:s}}),Object(c.jsxs)("div",{className:"answer",children:["\uc815\ub2f5 : \xa0",r?o[0]:Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("span",{className:"loader"}),"\xa0\xa0"]})]})]}),Object(c.jsx)("div",{className:"christmas-striped bottom"})]})},T=n(42),R=function(e){var t=e.no,n=e.user,a=e.doc_user_id,i=n.uid,s=n.name,o=n.tel,d=n.isAdmin,b=Object(r.useState)(""),O=Object(j.a)(b,2),x=O[0],p=O[1],g=function(){var e=Object(l.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!=x){e.next=3;break}return alert("\uc815\ub2f5\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."),e.abrupt("return");case 3:return n={uid:i,name:s,tel:o,answer:x,isAdmin:d},!d&&alert("\uc815\ub2f5\uc774 \uc81c\ucd9c\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),e.next=7,h.collection("quiz_"+t).add(n);case 7:return e.next=9,h.collection("userinfo").doc(a).update(Object(T.a)({},"quiz_"+t,!0));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsx)("div",{id:"submitAnswer",children:Object(c.jsxs)(m.a,{container:!0,direction:"row",spacing:2,alignItems:"center",children:[Object(c.jsx)(m.a,{item:!0,xs:9,children:Object(c.jsxs)(w.a,{fullWidth:!0,children:[Object(c.jsx)(y.a,{htmlFor:"ans-input",children:"\uc815\ub2f5"}),Object(c.jsx)(C.a,{id:"ans-input",type:"text","aria-describedby":"ans-helper",name:"answer",onChange:function(e){var t=e.target.value;p(t)},value:x})]})}),Object(c.jsx)(m.a,{item:!0,xs:3,children:Object(c.jsx)(f.a,{onClick:g,fullWidth:!0,variant:"contained",color:"primary",children:"\uc81c\ucd9c"})})]})})},z=n(12),E=function(e){var t=e.score,n=e.goal,a=t/n,i=Object(r.useRef)(),s=Object(r.useRef)();return Object(r.useEffect)((function(){!function(e){e<0&&(e=0),e>1&&(e=1);var n=parseInt(55+192*(1-a));i.current.style.background=Object(z.f)("rgb(255,".concat(n,",").concat(n,")")),i.current.style.transform="rotate(".concat(e/2,"turn)"),s.current.textContent=t}(a)}),[t,n]),Object(c.jsx)("div",{className:"gauge",children:Object(c.jsxs)("div",{className:"gauge__body",children:[Object(c.jsx)("div",{ref:i,className:"gauge__fill"}),Object(c.jsx)("div",{ref:s,className:"gauge__cover"})]})})},P=function(e){var t=e.participants,n=(e.corrects,e.showAnswer,e.score),r=e.goal;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"christmas-striped top slim"}),Object(c.jsxs)("div",{id:"board",children:[Object(c.jsx)("div",{className:"current",children:t?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(g.a,{size:"32"}),"\xa0 ",t,"\ubd84 \ucc38\uc5ec\ud558\uc168\uc2b5\ub2c8\ub2e4!"]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(g.c,{size:"32"}),"\xa0 \ud034\uc988\ub97c \ud480\uc5b4\uc8fc\uc138\uc694! "]})}),Object(c.jsx)("div",{className:"cumulative",children:Object(c.jsx)(E,{score:n,goal:r})})]}),Object(c.jsx)("div",{className:"christmas-striped bottom slim"})]})},Z=n(137),V=n(138),W=n(152),J=function(e){var t=e.wrongs,n=e.isAdmin,r=e.showWrongs;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"christmas-striped top"}),Object(c.jsx)("div",{id:"wrongs",children:Object(c.jsxs)(m.a,{container:!0,direction:"column",spacing:1,children:[Object(c.jsxs)(m.a,{item:!0,container:!0,direction:"row",children:[Object(c.jsx)(m.a,{item:!0,xs:6,children:Object(c.jsx)("h3",{children:"\uc624\ub2f5 "})}),n&&Object(c.jsx)(m.a,{item:!0,xs:6,children:Object(c.jsx)(Z.a,{children:Object(c.jsx)(V.a,{control:Object(c.jsx)(W.a,{checked:r,onChange:function(){h.collection("current").doc("current").update({showWrongs:!r})},name:"showWrongs"}),label:r?"\uc624\ub2f5 \uc228\uae30\uae30":"\uc624\ub2f5 \ubcf4\uae30"})})})]}),r?t.map((function(e,t){return Object(c.jsx)(m.a,{item:!0,children:Object(c.jsx)(K.a,{className:"wrongs-wrong",variant:"elevation",elevation:2,children:Object(c.jsxs)("h3",{children:[" ",e.answer," "]})})},t)})):Object(c.jsx)(m.a,{item:!0,children:Object(c.jsx)("h4",{align:"center",children:"\uc5b4\ub5a4 \uc624\ub2f5\ub4e4\uc774 \uc788\uc744\uae4c\uc694?"})})]})}),Object(c.jsx)("div",{className:"christmas-striped bottom"})]})},D=(n(99),function(e){var t=e.user,n=e.no,a=Object(r.useState)(""),i=Object(j.a)(a,2),s=i[0],o=i[1],d=Object(r.useState)(""),b=Object(j.a)(d,2),O=b[0],x=b[1],p=Object(r.useState)(!1),m=Object(j.a)(p,2),g=m[0],v=m[1],A=function(){return v((function(e){return!e}))},y=function(){var e=Object(l.a)(u.a.mark((function e(c){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),""!=O){e.next=4;break}return alert("\ubcc0\uacbd\ud558\uc2e4 \uc815\ub2f5\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."),e.abrupt("return");case 4:if(O===s){e.next=11;break}return e.next=7,h.collection("quiz_"+n).where("uid","==",t.uid).get();case 7:return r=e.sent,e.next=10,h.collection("quiz_"+n).doc(r.docs[0].id).update({answer:O});case 10:o(O);case 11:A();case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)(Object(l.a)(u.a.mark((function e(){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t["quiz_"+n]){e.next=6;break}return e.next=3,h.collection("quiz_"+n).where("uid","==",t.uid).get();case 3:c=e.sent.docs[0].data().answer,o(c),x(c);case 6:case"end":return e.stop()}}),e)}))),[]),Object(c.jsx)("div",{className:"already-submit-message",children:g?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(w.a,{style:{alignItems:"center",textAlign:"center"},children:Object(c.jsx)(C.a,{id:"correct-input",type:"text","aria-describedby":"correct-helper",name:"correct",onChange:function(e){var t=e.target.value;x(t)},value:O,style:{width:"70%",textAlign:"center"}})}),Object(c.jsx)(f.a,{onClick:y,variant:"contained",color:"secondary",children:"\uc218\uc815"})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"my-answer",children:Object(c.jsxs)("h3",{children:["\ub0b4 \uc815\ub2f5 : ",s]})}),Object(c.jsx)(f.a,{onClick:A,variant:"contained",color:"primary",children:"\ubc14\uafb8\uae30"})]})})}),L=n(61),X=n.p+"static/media/sarr.9a2f9150.mp3",Y=n.p+"static/media/babam.4fc9a4a2.mp3",G=n.p+"static/media/dodongtak.6da28cb6.mp3",M=function(e,t,n){return{no:e,question:t,answers:n}},H=[M(1,"\uc601\ub77d\uad50\ud68c\uc758 2020\ub144 12\uc6d4\uc758 \uc8fc\uc81c\ub294 OO\uc785\ub2c8\ub2e4. \uc608\uc218\ub2d8\uc758 \uc0ac\ub791\uacfc OO\uc774(\uac00) \ud544\uc694\ud55c \ubd84\ub4e4\uc744 \uc704\ud574 \ub300\ub9bc\uc808 \uae30\uac04 \ub3d9\uc548 <u>OO\ucc4c\ub9b0\uc9c0</u>\ub3c4 \ud568\uaed8 \uc9c4\ud589\ud558\uace0 \uc788\ub294\ub370\uc694, \n        '\ub530\ub73b\ud55c \ub9d0\uc774\ub098 \ud589\ub3d9\uc73c\ub85c \uad34\ub85c\uc6c0\uc744 \ub35c\uc5b4 \uc8fc\uac70\ub098 \uc2ac\ud514\uc744 \ub2ec\ub798\uc90c'\uc774\ub77c\ub294 \ub73b\uc744 \uac00\uc9c4 <u>OO</u>\ub294 \ubb34\uc5c7\uc77c\uae4c\uc694?",["\uc704\ub85c"]),M(2,"\ucc98\ub140\uc778 \ub9c8\ub9ac\uc544\uac00 \uc608\uc218\ub2d8\uc744 \uc789\ud0dc\ud558\uc600\uc744 \ub54c, \ud558\ub098\ub2d8\uc758 \ubcf4\ub0b4\uc2ec\uc744 \ubc1b\uc544 \uc608\uc218\ub2d8 \ud0c4\uc0dd\uc758 \uc18c\uc2dd\uc744 \ub9c8\ub9ac\uc544\uc5d0\uac8c \uc804\ud55c <u>\ucc9c\uc0ac\uc758 \uc774\ub984</u>\uc740 \ubb34\uc5c7\uc77c\uae4c\uc694?",["\uac00\ube0c\ub9ac\uc5d8"]),M(3,'\ud06c\ub9ac\uc2a4\ub9c8\uc2a4\uac00 \ub418\uba74 "X-mas"\ub77c\ub294 \ubb38\uad6c\ub97c \uc885\uc885 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \n        "X-mas"\uc758 \'X\'\ub294 <u>\uc774 \ub098\ub77c</u> \ub9d0\ub85c "\uadf8\ub9ac\uc2a4\ub3c4"\ub97c \uc758\ubbf8\ud558\ub294 \ub2e8\uc5b4\uc758 \uc55e \uae00\uc790\ub97c \ub534 \uac83\uc774\ub77c\uace0 \ud558\ub294\ub370\uc694, \uadf8\ub807\ub2e4\uba74 <u>\uc774 \ub098\ub77c</u>\ub294 \uc5b4\ub290 \ub098\ub77c\uc77c\uae4c\uc694?',["\uadf8\ub9ac\uc2a4","greece"]),M(4,'\uc601\ub77d\uad50\ud68c\uc5d0\uc11c\ub294 \ub300\ub9bc\uc808 \uae30\uac04\uc5d0 \ubcf8\ub2f9\uc5d0 \uc124\uce58\ud558\ub294 \ub124\uc628 \uc0ac\uc778\uc774 \uc788\ub294\ub370\uc694, <u>\u201c\ud558\ub298\uc5d0\ub294 \uc601\uad11, \ub545\uc5d0\ub294 OO"</u> \uc785\ub2c8\ub2e4. <u>OO</u>\uc740 \ubb34\uc5c7\uc77c\uae4c\uc694?',["\ud3c9\ud654"]),M(5,"<u>OO</u>\uc740 \uc88b\uc740 \ud5a5\uae30\uac00 \ub098\uace0 \ud669\uac08\uc0c9\uc744 \ub760\ub294 \ub369\uc5b4\ub9ac\ub85c, \uc8fc\ub85c \uace0\ub300 \uc911\ub3d9\uc9c0\uc5ed \ubc0f \uc911\uc138 \uc720\ub7fd\uc5d0\uc11c \ub9e4\uc6b0 \uadc0\ud558\uac8c \uc5ec\uaca8\uc84c\ub358 \ubb3c\uac74\uc778\ub370\uc694, \n        \uc544\uae30 \uc608\uc218\ub2d8\uc774 \ud0dc\uc5b4\ub098\uc168\uc744 \ub54c <u>\ub3d9\ubc29\ubc15\uc0ac\ub4e4\uc774 \uac00\uc838\uc628 \uc138 \uac00\uc9c0 \ubb3c\ud488 \uc911 \ud558\ub098\uc778 OO</u>\uc740 \ubb34\uc5c7\uc77c\uae4c\uc694?",["\ubab0\uc57d"]),M(6,'\uc544\uae30 \uc608\uc218\ub2d8\uaed8\uc11c\ub294 \ubca0\ub4e4\ub808\ud5f4\uc774\ub77c\ub294 \uc791\uc740 \uc2dc\uace8\ub9c8\uc744\uc758 \ub9d0\uad6c\uc720\uc5d0\uc11c \ub098\uc168\uc2b5\ub2c8\ub2e4. \uadf8\ub807\ub2e4\uba74 \ud788\ube0c\ub9ac\uc5b4\ub85c\xa0<u>"\ubca0\ub4e4\ub808\ud5f4"\uc758 \ub73b</u>\uc740 \ubb34\uc5c7\uc77c\uae4c\uc694?',["\ube75\uc9d1","bakery","\ub5a1\uc9d1"])],_=function(e){var t=e.user,n=e.doc_user_id,a=e.currentInfo,i=e.goals,s=t.isAdmin,o=a.currentQuiz,d=a.showAnswer,b=a.showScore,O=a.showWrongs,p=a.isStarted,g=a.users,v=i.score,A=i.goal,w=Object(r.useState)(!1),y=Object(j.a)(w,2),C=y[0],S=y[1],F=Object(r.useState)(0),Q=Object(j.a)(F,2),K=Q[0],I=Q[1],N=Object(r.useState)(0),q=Object(j.a)(N,2),T=q[0],z=q[1],E=Object(r.useState)([]),Z=Object(j.a)(E,2),V=Z[0],W=Z[1],M=[Object(L.a)(X),Object(L.a)(Y),Object(L.a)(G)],_=Object(j.a)(M[0],1)[0],$=Object(j.a)(M[1],1)[0],ee=Object(j.a)(M[2],1)[0],te=function(e,t){return t.includes(e.toLowerCase())},ne=function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!s){e.next=3;break}return e.next=3,re();case 3:h.collection("current").doc("current").update({showScore:t}),ee();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ce=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h.collection("current").doc("current").update({currentQuiz:o+1,showWrongs:!1,showAnswer:!1,showScore:!1}),$();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),re=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=0,e.next=3,Promise.all(H.filter((function(e){return e.no<=H[o].no})).map(function(){var e=Object(l.a)(u.a.mark((function e(n){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.collection("quiz_"+n.no).get();case 2:c=e.sent.docs.map((function(e){return e.data()})),t+=c.reduce((function(e,t){return te(t.answer,n.answers)?t.isAdmin?e+10:e+1:e}),0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 3:h.collection("current").doc("goals").update({score:t});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ae=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S(t["quiz_"+H[o].no]);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){ae()}),[o,t]),Object(r.useEffect)((function(){var e=H[o],t=e.no,n=e.answers;h.collection("quiz_"+t).onSnapshot((function(e){var t=e.docs.map((function(e){return e.data()}));I(t.length);var c=0,r=[];t.forEach((function(e){te(e.answer,n)?c++:r=[].concat(Object(k.a)(r),[e])})),z(c.length),W(r)}))}),[o]),Object(c.jsx)(c.Fragment,{children:p?Object(c.jsxs)(m.a,{container:!0,direction:"row",spacing:2,alignItems:"stretch",children:[Object(c.jsxs)(m.a,{container:!0,item:!0,xs:12,md:8,direction:"row",children:[Object(c.jsx)(m.a,{item:!0,xs:12,children:Object(c.jsx)(B,{quizs:H,currentQuiz:o,showAnswer:d})}),Object(c.jsx)(m.a,{id:"admin-button-box",container:!0,item:!0,xs:12,direction:"row",justify:"flex-end",alignItems:"center",children:s?Object(c.jsxs)(c.Fragment,{children:[o>0&&Object(c.jsx)(m.a,{item:!0,xs:6,md:3,children:Object(c.jsx)(f.a,{variant:"contained",color:"primary",fullWidth:!0,onClick:function(){h.collection("current").doc("current").update({currentQuiz:o-1,showWrongs:!1})},children:"\uc774\uc804 \ubb38\uc81c"})}),Object(c.jsx)(m.a,{item:!0,xs:6,md:3,children:d?b?o+1<H.length?Object(c.jsx)(f.a,{variant:"contained",color:"primary",fullWidth:!0,onClick:ce,children:"\ub2e4\uc74c \ubb38\uc81c"}):Object(c.jsx)(x.b,{to:"/draw",children:Object(c.jsx)(f.a,{variant:"contained",color:"primary",fullWidth:!0,children:"\ucd94\ucca8"})}):Object(c.jsx)(f.a,{variant:"contained",color:"default",fullWidth:!0,onClick:function(){return ne(!0)},children:"\uc810\uc218 \uacf5\uac1c"}):Object(c.jsx)(f.a,{variant:"contained",color:"secondary",fullWidth:!0,onClick:function(){return e=!0,h.collection("current").doc("current").update({showAnswer:e}),void _();var e},children:"\uc815\ub2f5 \uacf5\uac1c"})})]}):o+1===H.length&&Object(c.jsx)(m.a,{item:!0,xs:12,md:6,children:Object(c.jsx)(x.b,{to:"/showresult",children:Object(c.jsx)(f.a,{variant:"contained",color:"primary",fullWidth:!0,children:"\ucd94\ucca8 \uacb0\uacfc \ud655\uc778"})})})}),Object(c.jsx)(m.a,{item:!0,xs:12,children:H.length&&!d&&(C?Object(c.jsx)(D,{user:t,no:H[o].no}):Object(c.jsx)(R,{no:H[o].no,user:t,doc_user_id:n}))}),Object(c.jsx)(m.a,{item:!0,xs:12,children:Object(c.jsx)(P,{participants:K,corrects:T,showAnswer:d,score:v,goal:A})})]}),Object(c.jsx)(m.a,{item:!0,xs:12,md:4,children:Object(c.jsx)(J,{wrongs:V,isAdmin:s,showWrongs:O})})]}):Object(c.jsx)(U,{isAdmin:s,users:g})})},$=n(62),ee=n(72),te=n(139),ne=n(140),ce=n(149),re=n(141),ae=function(e){var t=e.children,n=e.value,r=e.index,a=Object(ee.a)(e,["children","value","index"]);return Object(c.jsx)("div",Object($.a)(Object($.a)({role:"tabpanel",hidden:n!==r,id:"scrollable-auto-tabpanel-".concat(r),"aria-labelledby":"scrollable-auto-tab-".concat(r)},a),{},{children:n===r&&t}))};var ie=Object(te.a)((function(e){return{root:{flexGrow:1,width:"100%",backgroundColor:e.palette.background.paper}}})),se=function(e){var t,n=e.tabnames,a=e.children,i=e.tabIdx,s=e.tabController,o=ie(),u=Object(r.useState)(0),l=Object(j.a)(u,2),d=l[0],b=l[1];i&&s&&(d=(t=[i,s])[0],b=t[1]);return Object(c.jsxs)("div",{className:o.root,children:[Object(c.jsx)(ne.a,{position:"static",color:"default",children:Object(c.jsx)(ce.a,{value:d,onChange:function(e,t){b(t)},indicatorColor:"primary",textColor:"primary",variant:n.length>3?"scrollable":"fullWidth",scrollButtons:"auto","aria-label":"scrollable auto tabs example",children:n.map((function(e,t){return Object(c.jsx)(re.a,Object($.a)({label:e},{id:"scrollable-auto-tab-".concat(n=t),"aria-controls":"scrollable-auto-tabpanel-".concat(n)}),t);var n}))})}),a.map((function(e,t){return Object(c.jsx)(ae,{value:d,index:t,children:e},t)}))]})},oe=n(142),ue=n(143),le=n(144),je=n(145),de=n(146),be=n(147),Oe=function(e){var t=e.title,n=e.content,r=e.onBlankAltText;return Object(c.jsx)(oe.a,{component:K.a,children:Object(c.jsx)(ue.a,{"aria-label":"simple table",children:n.length?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(le.a,{children:Object(c.jsx)(je.a,{children:t.map((function(e,t){return Object(c.jsxs)(de.a,{align:"center",children:[" ",e," "]},t)}))})}),Object(c.jsx)(be.a,{children:n.map((function(e,t){return Object(c.jsx)(je.a,{children:e.map((function(e,t){return Object(c.jsx)(de.a,{component:"th",scope:"row",align:"center",children:e},t)}))},t)}))})]}):Object(c.jsx)(be.a,{children:Object(c.jsx)(je.a,{children:Object(c.jsx)(de.a,{align:"center",children:r})})})})})},he=(n(100),function(e){var t=e.tabIdx,n=e.tabController,a=Object(r.useState)([]),i=Object(j.a)(a,2),s=i[0],o=i[1],d=Object(r.useState)([]),b=Object(j.a)(d,2),O=b[0],x=b[1];return Object(r.useEffect)(Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h.collection("current").doc("corrector").onSnapshot((function(e){var t=e.data();o(t?Object.entries(t).map((function(e){var t=Object(j.a)(e,2);return[t[0],t[1][0]]})):[])})),h.collection("current").doc("participant").onSnapshot((function(e){var t=e.data();x(t?Object.entries(t).map((function(e){var t=Object(j.a)(e,2);return[t[0],t[1][0]]})):[])}));case 2:case"end":return e.stop()}}),e)}))),[]),Object(c.jsxs)(se,{tabnames:["\uc815\ub2f5\uc790 6\uc778","\ucc38\uc5ec\uc790 10\uc778"],tabIdx:t||null,tabController:n||null,children:[Object(c.jsx)(Oe,{title:["\ud034\uc988","\ub2f9\ucca8\uc790"],content:s,onBlankAltText:"\ub2f9\ucca8\uc790\ub97c \uace7 \ucd94\ucca8\ud569\ub2c8\ub2e4!"}),Object(c.jsx)(Oe,{title:["\ubc88\ud638","\ub2f9\ucca8\uc790"],content:O,onBlankAltText:"\ucc38\uc5ec\uc790 \uc911 10\uba85\uc744 \ucd94\ucca8\ud569\ub2c8\ub2e4!"})]})}),xe=function(){var e=Object(r.useState)(!1),t=Object(j.a)(e,2),n=(t[0],t[1]),a=Object(r.useState)(0),i=Object(j.a)(a,2),s=i[0],o=i[1],d=Object(r.useState)(0),b=Object(j.a)(d,2),O=b[0],x=b[1],p=Object(r.useState)(!1),v=Object(j.a)(p,2),A=v[0],w=v[1],y=Object(r.useState)(!0),C=Object(j.a)(y,2),S=C[0],F=C[1],Q=Object(r.useState)([]),U=Object(j.a)(Q,2),K=U[0],I=U[1],N=Object(r.useState)([]),q=Object(j.a)(N,2),B=q[0],R=q[1],z=[].concat(Object(k.a)(H.map((function(e){return"Quiz ".concat(e.no)}))),["\ucc38\uc5ec\uc790"]),E=function(e){return""!==e&&e?e.length<=4?e:"***-****-"+e.slice(-4):"-"};Object(r.useEffect)(Object(l.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,Promise.all(H.map(function(){var e=Object(l.a)(u.a.mark((function e(n){var c,r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.no,r=n.answers,e.next=3,h.collection("quiz_"+c).get();case 3:a=e.sent.docs.map((function(e){return e.data()})),t=[].concat(Object(k.a)(t),[a.filter((function(e){return t=e.answer,r.includes(t.toLowerCase());var t})).map((function(e){return[e.name,e.tel]}))]);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 3:return c=[],e.next=6,h.collection("userinfo").get();case 6:e.sent.docs.map((function(e){return e.data()})).map((function(e){c=[].concat(Object(k.a)(c),[[e.name,e.tel]])})),I(t),R(c),n(!0);case 10:case"end":return e.stop()}}),e)}))),[]);var P=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},Z=function(e,t){return e.some((function(e){return e[0]==t[0]&&e[1]==t[1]}))},V=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,c,r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=[],c=0===t?"corrector":"participant",t)for(r=0;r<10;r++){a=void 0;do{a=B[P(0,B.length-1)]}while(Z(n,a));n=[].concat(Object(k.a)(n),[a])}else K.map((function(e,t){var c;do{c=e[P(0,e.length-1)]}while(Z(n,c));n=[].concat(Object(k.a)(n),[c])}));return e.next=5,new Promise((function(e,t){e("")})).then((function(){n.map(function(){var e=Object(l.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){var e=parseInt(n)+1;h.collection("current").doc(c).update(Object(T.a)({},e,t))}),500+1e3*n);case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())})).then((function(){setTimeout((function(){return w(!0)}),500+1e3*n.length)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)(m.a,{container:!0,spacing:2,children:[Object(c.jsx)(m.a,{item:!0,xs:12,md:6,children:Object(c.jsx)(se,{tabnames:z,tabIdx:s,tabController:o,children:[].concat(Object(k.a)(K),[B]).map((function(e,t){return Object(c.jsx)(Oe,{title:["\uc774\ub984","\uc804\ud654\ubc88\ud638"],content:e.map((function(e){var t=Object(j.a)(e,2),n=t[0],c=t[1];return[n,E(c)]})),onBlankAltText:t===K.length?"\ucc38\uc5ec\uc790\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.":"\uc815\ub2f5\uc790\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."},t)}))})}),Object(c.jsxs)(m.a,{item:!0,xs:12,md:6,children:[Object(c.jsx)("div",{className:"christmas-striped top"}),Object(c.jsxs)("div",{className:"draw",children:[Object(c.jsxs)(m.a,{container:!0,alignContent:"center",spacing:1,className:"draw-machine",children:[Object(c.jsx)(m.a,{item:!0,xs:12,children:Object(c.jsx)(f.a,{variant:"contained",color:"primary",fullWidth:!0,disabled:!S,onClick:function(){return V(O)},children:O?"\ucc38\uc5ec\uc790 10\uc778 \ucd94\ucca8":"\uc815\ub2f5\uc790 6\uc778 \ucd94\ucca8"})}),Object(c.jsxs)(m.a,{container:!0,item:!0,xs:12,children:[Object(c.jsx)(m.a,{item:!0,xs:6,children:Object(c.jsx)(f.a,{variant:"contained",disabled:!A,fullWidth:!0,color:"secondary",onClick:function(){w(!1),V(O)},children:Object(c.jsx)(g.f,{size:"16"})})}),Object(c.jsx)(m.a,{item:!0,xs:6,children:Object(c.jsx)(f.a,{variant:"contained",disabled:!A,fullWidth:!0,color:"default",onClick:function(){0===O?x(1):F(!1),w(!1)},children:O?"\ud655\uc778":"\ub2e4\uc74c \ucd94\ucca8"})})]})]}),Object(c.jsx)(he,{tabIdx:O,tabController:x})]}),Object(c.jsx)("div",{className:"christmas-striped bottom"})]})]})},pe=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(he,{})})},me=function(e){var t=e.isLoggedIn,n=e.user,r=e.hasAccount,a=e.doc_user_id,i=e.currentInfo,s=e.goals;return Object(c.jsx)(x.a,{children:Object(c.jsx)(p.c,{children:t?r?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(p.a,{exact:!0,path:"/",children:Object(c.jsx)(_,{user:n,doc_user_id:a,currentInfo:i,goals:s})}),n.isAdmin&&Object(c.jsx)(p.a,{exact:!0,path:"/draw",children:Object(c.jsx)(xe,{})}),Object(c.jsx)(p.a,{exact:!0,path:"/showresult",children:Object(c.jsx)(pe,{})})]}):Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(p.a,{exact:!0,path:"/",children:Object(c.jsx)(F,{user:n})})}):Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(p.a,{exact:!0,path:"/",children:Object(c.jsx)(v,{})})})})})},fe=function(e){var t=e.children,n=new Array(200).fill(0),r=function(e){var t=e.id,n=e.style;return Object(c.jsx)("p",{className:"Snowflake",id:"item".concat(t),style:n,children:"\u066d"})};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("noscript",{children:" Don't open this html dom!!!!"}),Object(c.jsx)("div",{id:"snow",children:n.map((function(e,t){var n="".concat((16*Math.random()).toFixed(2),"s"),a=20-10*Math.random(),i={animationDelay:n,fontSize:"".concat((a>0?a:.1).toFixed(2),"px")};return Object(c.jsx)(r,{id:t,style:i},t)}))}),t]})};var ge=function(){var e=Object(r.useState)(!1),t=Object(j.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)(null),s=Object(j.a)(i,2),o=s[0],d=s[1],b=Object(r.useState)(!1),x=Object(j.a)(b,2),p=x[0],m=x[1],f=Object(r.useState)(""),g=Object(j.a)(f,2),v=g[0],A=g[1],w=Object(r.useState)({currentQuiz:0,showWrongs:!1,showAnswer:!1}),y=Object(j.a)(w,2),C=y[0],S=y[1],F=Object(r.useState)({users:0,goal:100,score:0}),k=Object(j.a)(F,2),Q=k[0],U=k[1];return Object(r.useEffect)((function(){O.onAuthStateChanged(function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=8;break}return e.next=3,h.collection("userinfo").where("uid","==",t.uid).get();case 3:n=e.sent,m(Boolean(n.docs.length));try{d(n.docs[0].data()),A(n.docs[0].id)}catch(c){d(t)}e.next=9;break;case 8:d(null);case 9:a(!0);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),h.collection("current").doc("current").onSnapshot((function(e){S(e.data())})),h.collection("current").doc("goals").onSnapshot((function(e){U(e.data())}))}),[]),Object(r.useEffect)((function(){v&&h.collection("userinfo").doc(v).onSnapshot((function(e){d(e.data())}))}),[v]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(fe,{}),n?Object(c.jsx)(me,{isLoggedIn:Boolean(o),user:o,hasAccount:p,doc_user_id:v,currentInfo:C,goals:Q}):"\ub85c\ub529\uc911\uc785\ub2c8\ub2e4!"]})};n(101);s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(ge,{})}),document.getElementById("root"))},94:function(e,t,n){},99:function(e,t,n){}},[[102,1,2]]]);
//# sourceMappingURL=main.c6e451f4.chunk.js.map