(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{154:function(e,t,a){},155:function(e,t,a){},162:function(e,t,a){},163:function(e,t,a){},164:function(e,t,a){},165:function(e,t,a){},183:function(e,t,a){},185:function(e,t,a){},186:function(e,t,a){},187:function(e,t,a){},188:function(e,t,a){},191:function(e,t,a){},192:function(e,t,a){},193:function(e,t,a){},194:function(e,t,a){},195:function(e,t,a){"use strict";a.r(t);var n,r=a(2),s=a(0),i=a.n(s),c=a(18),o=a.n(c),l=(a(154),a(20)),d=a(22),h=a(8),u=a(9),m=a(11),p=a(10),j=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){return Object(h.a)(this,a),t.call(this,e)}return Object(u.a)(a,[{key:"render",value:function(){return Object(r.jsx)("h1",{children:"ContactSettings"})}}]),a}(i.a.Component),b=a(227),O=a(198),v=a(76),x=a(92),f=a.n(x),N=a(91),g=a.n(N),y=a(81),E=a.n(y),C=a(126),T=a.n(C),R=a(125),S=a.n(R),k=(a(155),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(r.jsx)("div",{className:"app-bar-container",children:Object(r.jsx)(b.a,{position:"static",children:Object(r.jsxs)(O.a,{children:[Object(r.jsx)(v.a,{variant:"h6",className:"title"}),Object(r.jsxs)("nav",{children:[Object(r.jsxs)(l.c,{className:"icon-container",to:"/features/medicine",activeClassName:"icon-container-active",children:[Object(r.jsx)(S.a,{className:"icon"}),Object(r.jsx)("div",{className:"icon-description",children:"Medicines"})]}),Object(r.jsxs)(l.c,{className:"icon-container",to:"/features/contactsettings",activeClassName:"icon-container-active",children:[Object(r.jsx)(T.a,{className:"icon"}),Object(r.jsx)("div",{className:"icon-description",children:"Calls"})]}),Object(r.jsxs)(l.c,{className:"icon-container",to:"/features/alarms",activeClassName:"icon-container-active",children:[Object(r.jsx)(g.a,{className:"icon"}),Object(r.jsx)("div",{className:"icon-description",children:"Alarms"})]}),Object(r.jsxs)(l.c,{className:"icon-container",to:"/features/schedule",activeClassName:"icon-container-active",children:[Object(r.jsx)(E.a,{className:"icon"}),Object(r.jsx)("div",{className:"icon-description",children:"Schedule"})]}),Object(r.jsxs)(l.c,{className:"icon-container",to:"/features/accountsettings",activeClassName:"icon-container-active",children:[Object(r.jsx)(f.a,{className:"icon"}),Object(r.jsx)("div",{className:"icon-description",children:"Account"})]})]})]})})})}}]),a}(i.a.Component)),w=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(k,{}),Object(r.jsx)("main",{children:this.props.children})]})}}]),a}(i.a.Component),A=a(13),I=a(233),_=a(130),P=a.n(_),D=a(142),M=a(127),F=a(199);!function(e){e.MG="mg",e.CC="cc",e.CAPSULES="capsules",e.TABLET=""}(n||(n={}));var L=n,V=a(23),H=a(239),U=a(232),z=a(200),W=(a(162),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).medicineList=[{id:"123",name:"Tylenol"},{id:"234",name:"Advil"}],n.state={medicine:n.medicineList[0],ammount:0,units:L.MG,time:null,startDate:null,endDate:null},n.handleMedicineChange=n.handleMedicineChange.bind(Object(A.a)(n)),n.handleMedicineAmmountChange=n.handleMedicineAmmountChange.bind(Object(A.a)(n)),n.handleMedicineUnitsChange=n.handleMedicineUnitsChange.bind(Object(A.a)(n)),n.handleTimeChange=n.handleTimeChange.bind(Object(A.a)(n)),n.handleStartDateChange=n.handleStartDateChange.bind(Object(A.a)(n)),n.handleEndDateChange=n.handleEndDateChange.bind(Object(A.a)(n)),n}return Object(u.a)(a,[{key:"handleMedicineChange",value:function(){}},{key:"handleMedicineAmmountChange",value:function(e){var t=Number(e.target.value);this.setState({ammount:t})}},{key:"handleMedicineUnitsChange",value:function(){}},{key:"handleTimeChange",value:function(e){this.setState({time:e})}},{key:"handleStartDateChange",value:function(e){this.setState({startDate:e})}},{key:"handleEndDateChange",value:function(e){this.setState({endDate:e})}},{key:"handleSubmit",value:function(e){}},{key:"render",value:function(){var e=this.state,t=e.time,a=e.startDate,n=e.endDate;return Object(r.jsx)("div",{className:"grayout",children:Object(r.jsxs)("div",{className:"add-medicine-dialog",children:[Object(r.jsx)("div",{className:"dialog-header",children:Object(r.jsx)(v.a,{className:"dialog-title",variant:"h4",children:"Add Medicine"})}),Object(r.jsx)("div",{className:"dialog-body",children:Object(r.jsxs)("div",{className:"dialog-form",children:[Object(r.jsx)(D.a,{onChange:this.handleMedicineChange,className:"dialog-txt-field",label:"Medicine Name",variant:"filled",error:!1,helperText:"Enter the medicine name"}),Object(r.jsxs)("div",{className:"medicine-amt-container",children:[Object(r.jsx)(D.a,{type:"number",InputProps:{inputProps:{min:0,max:9999}},onChange:this.handleMedicineAmmountChange,className:"medicine-amt",label:"Medicine Ammount",variant:"filled",error:!1,helperText:"Enter the medcine ammount"}),Object(r.jsx)(D.a,{onChange:this.handleMedicineUnitsChange,className:"medicine-units",label:"Units",variant:"filled",error:!1})]}),Object(r.jsx)(D.a,{className:"dialog-txt-field",label:"Frequency",variant:"filled",error:!1,helperText:"How often do you take this medicine?"}),Object(r.jsxs)(V.a,{utils:M.a,children:[Object(r.jsx)(H.a,{className:"dialog-picker-field",inputVariant:"filled",format:"h:mm a",value:t,margin:"normal",label:"Time",onChange:this.handleTimeChange,helperText:"What time do you take this medicine?",InputProps:{endAdornment:Object(r.jsx)(z.a,{position:"end",children:Object(r.jsx)(g.a,{color:"primary"})})}}),Object(r.jsx)(U.a,{className:"dialog-picker-field",inputVariant:"filled",format:"MM/dd/yyyy",value:a,margin:"normal",label:"Start Date",onChange:this.handleStartDateChange,helperText:"What's the first day you take this medicine?",InputProps:{endAdornment:Object(r.jsx)(z.a,{position:"end",children:Object(r.jsx)(E.a,{color:"primary"})})}}),Object(r.jsx)(U.a,{className:"dialog-picker-field",inputVariant:"filled",format:"MM/dd/yyyy",value:n,margin:"normal",label:"End Date",onChange:this.handleEndDateChange,helperText:"What's the last day you take this medicine?",InputProps:{endAdornment:Object(r.jsx)(z.a,{position:"end",children:Object(r.jsx)(E.a,{color:"primary"})})}})]})]})}),Object(r.jsxs)("div",{className:"dialog-actions",children:[Object(r.jsx)(F.a,{color:"primary",className:"dialog-btn",onClick:function(){},variant:"contained",size:"medium",children:"Cancel"}),Object(r.jsx)(F.a,{color:"primary",className:"dialog-btn",onClick:this.handleSubmit,variant:"contained",size:"medium",children:"Add"})]})]})})}}]),a}(i.a.Component)),B=a(129),X=a.n(B),Y=a(128),Z=a.n(Y),Q=a(141);a(163);var K=function(e){return Object(r.jsxs)("div",{className:"med-list-item",children:[Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:"med-name-txt",children:e.medicine})}),Object(r.jsxs)("div",{className:"med-btns-container",children:[Object(r.jsx)("div",{className:"med-icon-btn-container",children:Object(r.jsx)(Q.a,{className:"med-icon-btn",color:"primary","aria-label":"add an alarm",children:Object(r.jsx)(Z.a,{className:"med-icon",color:"primary"})})}),Object(r.jsx)("div",{className:"med-icon-btn-container",children:Object(r.jsx)(Q.a,{className:"med-icon-btn",color:"primary","aria-label":"add an alarm",children:Object(r.jsx)(X.a,{className:"med-icon",color:"primary"})})})]})]})},G=(a(164),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){return Object(h.a)(this,a),t.call(this,e)}return Object(u.a)(a,[{key:"render",value:function(){for(var e=[],t=0;t<this.props.medicineList.length;t++)e.push(Object(r.jsx)(K,{medicine:this.props.medicineList[t]}));return Object(r.jsx)("div",{className:"med-list",children:e})}}]),a}(i.a.Component)),$=a(6),q=(a(165),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={medicineList:["Hydroxychloroquine","Regeneron","Vitamin C"],dialogOpen:!1},n.openDialog=n.openDialog.bind(Object(A.a)(n)),n}return Object(u.a)(a,[{key:"openDialog",value:function(){console.log("opened dialog"),this.setState({dialogOpen:!0})}},{key:"render",value:function(){var e=this.state.dialogOpen;return Object(r.jsx)("div",{className:"page-container",children:Object(r.jsxs)("div",{className:"page",children:[e?(console.log("true"),Object(r.jsx)(W,{})):(console.log("false"),null),Object(r.jsx)(v.a,{className:"page-header",color:"primary",variant:"h3",children:"My Medicine"}),Object(r.jsx)(G,{medicineList:this.state.medicineList}),Object(r.jsx)(I.a,{onClick:this.openDialog,className:"add-med",size:"medium","aria-label":"Add Medicine",children:Object(r.jsx)(P.a,{color:"primary"})})]})})}}]),a}(i.a.Component)),J=Object($.a)({container:{alignItems:"center"}})(q),ee=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){return Object(h.a)(this,a),t.call(this,e)}return Object(u.a)(a,[{key:"render",value:function(){return Object(r.jsx)("h1",{children:"Alarms"})}}]),a}(i.a.Component),te=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){return Object(h.a)(this,a),t.call(this,e)}return Object(u.a)(a,[{key:"render",value:function(){return Object(r.jsx)("h1",{children:"Schedule"})}}]),a}(i.a.Component),ae=a(51),ne=a.n(ae),re=a(137),se=function(e,t){return ne.a.post("/api/users",{email:e,password:t})},ie=function(e,t){return ne.a.post("/api/users/login",{email:e,password:t})},ce=function(){return!!(new re.a).get("jwt")},oe=i.a.createContext(),le=oe.Provider,de=oe.Consumer,he=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isLoggedIn:ce()},e.login=function(){e.setState({isLoggedIn:!0})},e.logout=function(){e.setState({isLoggedIn:!1})},e}return Object(u.a)(a,[{key:"render",value:function(){return Object(r.jsx)(le,{value:{isLoggedIn:this.state.isLoggedIn,login:this.login,logout:this.logout},children:this.props.children})}}]),a}(s.Component),ue=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){return Object(h.a)(this,a),t.call(this,e)}return Object(u.a)(a,[{key:"handleSubmit",value:function(e){try{ne.a.delete("/api/users/logout"),e(),this.props.history.push("/login")}catch(t){console.log("error",t)}}},{key:"render",value:function(){var e=this;return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Account Settings"}),Object(r.jsx)(de,{children:function(t){return Object(r.jsx)(F.a,{onClick:function(a){return e.handleSubmit(t.logout)},className:"auth-btn",variant:"contained",color:"primary",size:"medium",children:"Logout"})}})]})}}]),a}(i.a.Component);a(183);var me,pe=function(){return Object(r.jsx)("div",{className:"landing-page-container",children:Object(r.jsxs)("div",{className:"info-box",children:[Object(r.jsx)(v.a,{className:"splash-header",color:"primary",variant:"h1",children:"RoboNurse"}),Object(r.jsx)("div",{className:"description",children:"Never forget to take your medicines again with our medicine reminder calls."}),Object(r.jsx)(l.b,{className:"no-underline",to:"/features/medicine",children:Object(r.jsx)(F.a,{variant:"contained",color:"primary",className:"start-btn",children:"Get Started"})})]})})},je=a(24),be=a.n(je),Oe=a(32),ve=a(231),xe=a(75),fe=a(131),Ne=a.n(fe),ge=a(132),ye=a.n(ge),Ee=(a(185),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).togglePasswordMask=function(){n.setState((function(e){return{passwordIsMasked:!e.passwordIsMasked}}))},n.state={passwordIsMasked:!0},n}return Object(u.a)(a,[{key:"getVisibilityIcon",value:function(){return this.state.passwordIsMasked?Object(r.jsx)(Ne.a,{color:"primary",onClick:this.togglePasswordMask,className:"clickable-icon"}):Object(r.jsx)(ye.a,{color:"primary",onClick:this.togglePasswordMask,className:"clickable-icon"})}},{key:"render",value:function(){this.props.classes;var e=this.state.passwordIsMasked;return Object(r.jsx)(D.a,Object(xe.a)(Object(xe.a)({variant:"filled",type:e?"password":"text"},this.props),{},{InputProps:{endAdornment:Object(r.jsx)(z.a,{position:"end",children:this.getVisibilityIcon()})}}))}}]),a}(s.Component));a(186);!function(e){e[e.BAD_EMAIL_PASSWORD=0]="BAD_EMAIL_PASSWORD",e[e.INTERNAL_SERVER_ERROR=1]="INTERNAL_SERVER_ERROR",e[e.ACCOUNT_LOCKED=2]="ACCOUNT_LOCKED",e[e.NONE=3]="NONE"}(me||(me={}));var Ce,Te=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={email:"",password:"",submitIsTouched:!1,loginFailureType:me.NONE},n.handleEmailChange=n.handleEmailChange.bind(Object(A.a)(n)),n.handlePasswordChange=n.handlePasswordChange.bind(Object(A.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(A.a)(n)),n}return Object(u.a)(a,[{key:"handleEmailChange",value:function(e){var t=e.target.value;this.setState({email:t})}},{key:"emailHasError",value:function(){var e=this.state,t=e.email,a=e.submitIsTouched;return 0===t.length&&a}},{key:"handlePasswordChange",value:function(e){var t=e.target.value;this.setState({password:t})}},{key:"passwordHasError",value:function(){var e=this.state,t=e.password,a=e.submitIsTouched;return 0===t.length&&a}},{key:"hasFormError",value:function(){return this.state.loginFailureType!==me.NONE}},{key:"getFormErrorText",value:function(){return this.state.loginFailureType===me.BAD_EMAIL_PASSWORD?"The password you\u2019ve entered is incorrect.":this.state.loginFailureType===me.INTERNAL_SERVER_ERROR?"Uh-oh! A problem occured. Please refresh the page and try again.":""}},{key:"handleSubmit",value:function(){var e=Object(Oe.a)(be.a.mark((function e(t){var a,n,r;return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this.state,n=a.email,r=a.password,this.setState({submitIsTouched:!0,loginFailureType:me.NONE}),0!==n.length&&0!==r.length){e.next=4;break}return e.abrupt("return");case 4:return e.prev=4,e.next=7,ie(n,r);case 7:t(),this.props.history.push("/features/schedule"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),401===e.t0.response.status?"Email or password is incorrect"===e.t0.response.data.message?this.setState({loginFailureType:me.BAD_EMAIL_PASSWORD}):"Account locked"===e.t0.response.data.message?this.setState({loginFailureType:me.ACCOUNT_LOCKED}):console.error("Unknown 401 status code response",e.t0):500===e.t0.response.status?this.setState({loginFailureType:me.INTERNAL_SERVER_ERROR}):console.error("Unhandled error");case 14:case"end":return e.stop()}}),e,this,[[4,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return this.state.loginFailureType===me.ACCOUNT_LOCKED?Object(r.jsx)(d.a,{to:"/findaccount"}):Object(r.jsx)("div",{className:"auth-page-container",children:Object(r.jsxs)("div",{className:"auth-page",children:[Object(r.jsx)(v.a,{className:"auth-header",color:"primary",variant:"h4",children:"Login to Your Account"}),Object(r.jsxs)("form",{className:"auth-form",children:[Object(r.jsx)(D.a,{onChange:this.handleEmailChange,className:"auth-txt-field",label:"Email",variant:"filled",error:this.emailHasError(),helperText:"Enter your email"}),Object(r.jsx)(Ee,{onChange:this.handlePasswordChange,inputProps:{maxLength:32},className:"auth-txt-field",error:this.passwordHasError(),helperText:"Enter your password",label:"Password"}),Object(r.jsx)(de,{children:function(t){return Object(r.jsx)(F.a,{onClick:function(a){return e.handleSubmit(t.login)},className:"auth-btn",variant:"contained",color:"primary",size:"medium",children:"Login"})}}),Object(r.jsx)(ve.a,{className:"auth-err ".concat(this.hasFormError()?"":"display-none"),error:!0,children:this.getFormErrorText()}),Object(r.jsxs)("div",{className:"non-important-btns-container",children:[Object(r.jsx)(l.b,{className:"no-underline",to:"/register",children:Object(r.jsx)(F.a,{className:"non-important-btn",color:"primary",children:"Create Account"})}),Object(r.jsx)(l.b,{className:"no-underline",to:"/findaccount",children:Object(r.jsx)(F.a,{className:"non-important-btn",color:"primary",children:"Forgot Password?"})})]})]})]})})}}]),a}(i.a.Component),Re=(a(187),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={email:"",password:"",passwordIsTouched:!1,submitIsTouched:!1,emailIsTaken:!1,internalServerError:!1},n.handleEmailChange=n.handleEmailChange.bind(Object(A.a)(n)),n.handlePasswordChange=n.handlePasswordChange.bind(Object(A.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(A.a)(n)),n}return Object(u.a)(a,[{key:"handleEmailChange",value:function(e){var t=e.target.value;this.setState({email:t,emailIsTaken:!1})}},{key:"isValidEmail",value:function(){var e=this.state.email;return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}},{key:"passwordHasCorrectLength",value:function(){var e=this.state.password;return e.length>=8&&e.length<=32}},{key:"passwordIsValid",value:function(){var e=this.state.password;return/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,32}$/.test(e)}},{key:"handlePasswordChange",value:function(e){var t=e.target.value;this.setState({password:t,passwordIsTouched:!0})}},{key:"emailHasError",value:function(){var e=this.state.submitIsTouched;return!this.isValidEmail()&&e}},{key:"getEmailHelperText",value:function(){return this.emailHasError()?"Please enter a valid email":this.state.emailIsTaken?"This email is taken, try another.":"Enter your email"}},{key:"passwordHasError",value:function(){var e=this.state.submitIsTouched;return!this.passwordIsValid()&&e}},{key:"getPasswordHelperText",value:function(){return this.passwordHasError()?this.passwordHasCorrectLength()?"Enter between 8 and 32 characters":"Include a letter, number, and special character":"Enter a password"}},{key:"hasInternalServerError",value:function(){return this.state.internalServerError}},{key:"handleSubmit",value:function(){var e=Object(Oe.a)(be.a.mark((function e(t){var a,n,r;return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this.state,n=a.email,r=a.password,this.setState({submitIsTouched:!0,internalServerError:!1}),this.isValidEmail()&&this.passwordIsValid()){e.next=4;break}return e.abrupt("return");case 4:return e.prev=4,e.next=7,se(n,r);case 7:t(),this.props.history.push("/features/schedule"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),409===e.t0.response.status?this.setState({emailIsTaken:!0}):500===e.t0.response.status?this.setState({internalServerError:!0}):console.error("Unhandled error");case 14:case"end":return e.stop()}}),e,this,[[4,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(r.jsx)("div",{className:"auth-page-container",children:Object(r.jsxs)("div",{className:"auth-page",children:[Object(r.jsx)(v.a,{className:"auth-header",color:"primary",variant:"h4",children:"Create a New Account"}),Object(r.jsxs)("form",{className:"auth-form",children:[Object(r.jsx)(D.a,{onChange:this.handleEmailChange,name:"email",className:"auth-txt-field",label:"Email",variant:"filled",error:this.emailHasError()||this.state.emailIsTaken,helperText:this.getEmailHelperText()}),Object(r.jsx)(Ee,{inputProps:{maxLength:32},onChange:this.handlePasswordChange,className:"auth-txt-field",label:"Password",error:this.passwordHasError(),helperText:this.getPasswordHelperText()}),Object(r.jsx)(de,{children:function(t){return Object(r.jsx)(F.a,{onClick:function(a){return e.handleSubmit(t.login)},className:"auth-btn",variant:"contained",color:"primary",size:"medium",children:"Register"})}}),Object(r.jsx)(ve.a,{className:"auth-err ".concat(this.hasInternalServerError()?"":"display-none"),error:!0,children:"Uh-oh! A problem occured. Please refresh the page and try again."}),Object(r.jsx)("div",{className:"non-important-btns-container",children:Object(r.jsx)(l.b,{className:"no-underline",to:"/login",children:Object(r.jsx)(F.a,{className:"already-registered-btn non-important-btn",color:"primary",children:"Already Have an Account?"})})})]})]})})}}]),a}(i.a.Component)),Se=function(e,t){return ne.a.post("/api/users/sendresetcode",{email:e,selectedContactMethod:t})},ke=function(e,t){return ne.a.get("/api/users/checkresetcode",{params:{email:e,resetCode:t}})},we=function(e,t,a){return ne.a.post("/api/users/changepassword",{email:e,password:t,resetCode:a})};a(188);!function(e){e[e.ACCOUNT_NOT_FOUND=0]="ACCOUNT_NOT_FOUND",e[e.INTERNAL_SERVER_ERROR=1]="INTERNAL_SERVER_ERROR",e[e.NONE=2]="NONE"}(Ce||(Ce={}));var Ae,Ie=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={contact:"",searchAccountFailureType:Ce.NONE,submitIsTouched:!1},n.handleSubmit=n.handleSubmit.bind(Object(A.a)(n)),n.handleContactChange=n.handleContactChange.bind(Object(A.a)(n)),n}return Object(u.a)(a,[{key:"handleContactChange",value:function(e){var t=e.target.value;this.setState({contact:t})}},{key:"contactHasError",value:function(){var e=this.state,t=e.submitIsTouched;return 0===e.contact.length&&t}},{key:"handleSubmit",value:function(){var e=Object(Oe.a)(be.a.mark((function e(t){var a,n;return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this.state.contact,this.setState({submitIsTouched:!0}),0!==a.length){e.next=4;break}return e.abrupt("return");case 4:return e.prev=4,e.next=7,t=a,ne.a.get("/api/users/findaccount/".concat(t));case 7:return e.next=9,e.sent.data.contactInformation;case 9:n=e.sent,console.log("contactInfo",n),this.setState({searchAccountFailureType:Ce.NONE,submitIsTouched:!1}),this.props.history.push("/pickresetmethod?email=".concat(n.email,"&phone=").concat(n.phone)),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(4),404===e.t0.response.status?this.setState({searchAccountFailureType:Ce.ACCOUNT_NOT_FOUND}):500===e.t0.response.status&&this.setState({searchAccountFailureType:Ce.INTERNAL_SERVER_ERROR});case 18:case"end":return e.stop()}var t}),e,this,[[4,15]])})));return function(t){return e.apply(this,arguments)}}()},{key:"displayFormError",value:function(){return this.state.searchAccountFailureType!==Ce.NONE}},{key:"getFormErrorText",value:function(){return this.state.searchAccountFailureType===Ce.ACCOUNT_NOT_FOUND?"We couldnt find an account with that contact information.":this.state.searchAccountFailureType===Ce.INTERNAL_SERVER_ERROR?"Internal error. Refresh the page.":""}},{key:"render",value:function(){return Object(r.jsx)("div",{className:"auth-page-container",children:Object(r.jsxs)("div",{className:"auth-page",children:[Object(r.jsx)(v.a,{className:"auth-header",color:"primary",variant:"h4",children:"Find Account"}),Object(r.jsxs)("form",{className:"auth-form",children:[Object(r.jsx)(ve.a,{className:"forgot-pw-desc",children:"Enter your email or phone number to search for your account."}),Object(r.jsx)(D.a,{onChange:this.handleContactChange,className:"auth-txt-field",label:"Email or Phone",variant:"filled",error:this.contactHasError(),helperText:"Enter your email or phone number"}),Object(r.jsx)(F.a,{onClick:this.handleSubmit,className:"auth-btn",variant:"contained",color:"primary",size:"medium",children:"Search"}),Object(r.jsx)(ve.a,{className:"auth-err ".concat(this.displayFormError()?"":"display-none"),error:!0,children:this.getFormErrorText()})]}),Object(r.jsx)("div",{className:"non-important-btns-container",children:Object(r.jsx)(l.b,{className:"no-underline",to:"/login",children:Object(r.jsx)(F.a,{className:"find-email-btn non-important-btn",color:"primary",children:"Cancel"})})})]})})}}]),a}(i.a.Component),_e=a(197),Pe=a(234),De=a(236),Me=a(60),Fe=a.n(Me);a(191);!function(e){e[e.ACCOUNT_NOT_FOUND=0]="ACCOUNT_NOT_FOUND",e[e.INTERNAL_SERVER_ERROR=1]="INTERNAL_SERVER_ERROR",e[e.NONE=2]="NONE"}(Ae||(Ae={}));var Le,Ve=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;Object(h.a)(this,a),n=t.call(this,e);var r="",s="";return Fe.a.parse(n.props.location.search,{ignoreQueryPrefix:!0})&&(r=Fe.a.parse(n.props.location.search,{ignoreQueryPrefix:!0}).email,s=Fe.a.parse(n.props.location.search,{ignoreQueryPrefix:!0}).phone),n.state={email:r,selectedContactMethod:"email",phone:s,pickResetMethodFailureType:Ae.NONE},n.handleSubmit=n.handleSubmit.bind(Object(A.a)(n)),n.handleChange=n.handleChange.bind(Object(A.a)(n)),n}return Object(u.a)(a,[{key:"handleChange",value:function(e){this.setState({selectedContactMethod:e.target.value})}},{key:"displayFormError",value:function(){return this.state.pickResetMethodFailureType!==Ae.NONE}},{key:"getFormErrorText",value:function(){return this.state.pickResetMethodFailureType===Ae.ACCOUNT_NOT_FOUND?"We couldnt find that email.":this.state.pickResetMethodFailureType===Ae.INTERNAL_SERVER_ERROR?"Internal error. Refresh the page.":""}},{key:"handleSubmit",value:function(){var e=Object(Oe.a)(be.a.mark((function e(t){var a,n,r,s;return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=this.state,n=a.email,r=a.phone,s=a.selectedContactMethod,this.setState({pickResetMethodFailureType:Ae.NONE}),e.next=5,Se(n,s);case 5:this.props.history.push("/entercode?email=".concat(n,"&phone=").concat(r,"&selectedContactMethod=").concat(s)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),404===e.t0.response.status?this.setState({pickResetMethodFailureType:Ae.ACCOUNT_NOT_FOUND}):500===e.t0.response.status&&this.setState({pickResetMethodFailureType:Ae.INTERNAL_SERVER_ERROR});case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.email,a=e.phone,n=Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"contact",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"contact-method",children:"Send Code Via Email"}),Object(r.jsx)("div",{className:"contact-detail",children:this.state.email})]}),Object(r.jsx)("div",{className:"radio-container",children:Object(r.jsx)(De.a,{color:"primary",checked:"email"===this.state.selectedContactMethod,onChange:this.handleChange,value:"email"})})]}),Object(r.jsx)(Pe.a,{className:"contact-divider"})]}),s=Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"contact",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"contact-method",children:"Send Code Via SMS"}),Object(r.jsx)("div",{className:"contact-detail",children:this.state.phone})]}),Object(r.jsx)("div",{className:"radio-container",children:Object(r.jsx)(De.a,{color:"primary",checked:"phone"===this.state.selectedContactMethod,onChange:this.handleChange,value:"phone"})})]}),Object(r.jsx)(Pe.a,{className:"contact-divider"})]});return Object(r.jsx)("div",{className:"auth-page-container",children:Object(r.jsxs)("div",{className:"auth-page",children:[Object(r.jsx)(v.a,{className:"auth-header",color:"primary",variant:"h4",children:"Pick Reset Method"}),Object(r.jsxs)("form",{className:"auth-form",children:[Object(r.jsxs)(_e.a,{elevation:1,className:"find-account-icon-container",children:[Object(r.jsx)(f.a,{color:"primary",className:"find-account-icon"}),Object(r.jsx)("div",{children:this.state.email})]}),Object(r.jsx)("div",{className:"auth-instructions desktop-only",children:"Select how you would like to recieve the code to reset your password."}),Object(r.jsx)(Pe.a,{className:"contact-divider"}),t&&n,a&&s,Object(r.jsx)(F.a,{onClick:this.handleSubmit,className:"auth-btn",variant:"contained",color:"primary",size:"medium",children:"Send Code"}),Object(r.jsx)(ve.a,{className:"auth-err ".concat(this.displayFormError()?"":"display-none"),error:!0,children:this.getFormErrorText()})]}),Object(r.jsx)("div",{className:"non-important-btns-container",children:Object(r.jsx)(l.b,{className:"no-underline",to:"/findaccount",children:Object(r.jsx)(F.a,{className:"find-email-btn non-important-btn",color:"primary",children:"Not You?"})})})]})})}}]),a}(i.a.Component);a(192);!function(e){e[e.NONE=0]="NONE",e[e.INVALID_PASSCODE=1]="INVALID_PASSCODE",e[e.CODE_EXPIRED=2]="CODE_EXPIRED",e[e.TOO_MANY_ATTEMPTS=3]="TOO_MANY_ATTEMPTS",e[e.INTERNAL_SERVER_ERROR=4]="INTERNAL_SERVER_ERROR",e[e.RESENT_CODE=5]="RESENT_CODE"}(Le||(Le={}));var He,Ue=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;Object(h.a)(this,a),n=t.call(this,e);var r="",s="",i="",c=Fe.a.parse(n.props.location.search,{ignoreQueryPrefix:!0});return c&&(r=c.selectedContactMethod,s=c.email,"phone"===r&&(i=c.phone)),n.state={selectedContactMethod:r,email:s,phone:i,submitIsTouched:!1,code:"",enterCodeStatusType:Le.NONE},n.handleSubmit=n.handleSubmit.bind(Object(A.a)(n)),n.handleCodeChange=n.handleCodeChange.bind(Object(A.a)(n)),n.resendCodeClicked=n.resendCodeClicked.bind(Object(A.a)(n)),n}return Object(u.a)(a,[{key:"handleCodeChange",value:function(e){var t=e.target.value;this.setState({code:t})}},{key:"getCodeHelperText",value:function(){if(this.displayCodeTextFieldError())return"Code must be 8 digits";var e=this.state.selectedContactMethod;return"Enter the 8 digit code sent to your ".concat(e,".")}},{key:"codeIsValid",value:function(){return 8===this.state.code.length}},{key:"displayCodeTextFieldError",value:function(){var e=this.state,t=e.submitIsTouched;e.code;return!!t&&!this.codeIsValid()}},{key:"handleSubmit",value:function(){var e=Object(Oe.a)(be.a.mark((function e(t){var a,n,r;return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.setState({submitIsTouched:!0}),this.codeIsValid()){e.next=3;break}return e.abrupt("return");case 3:return a=this.state,n=a.email,r=a.code,a.selectedContactMethod,a.phone,e.prev=4,e.next=7,ke(n,r);case 7:this.setState({enterCodeStatusType:Le.NONE}),this.props.history.push("/resetpassword?email=".concat(n,"&code=").concat(r)),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(4),console.error("error",e.t0),401===e.t0.response.status?"Invalid email/passcode combination"===e.t0.response.data.message?this.setState({enterCodeStatusType:Le.INVALID_PASSCODE}):"Reset code has expired"===e.t0.response.data.message?this.setState({enterCodeStatusType:Le.CODE_EXPIRED}):"Too many failed attempts"===e.t0.response.data.message&&this.setState({enterCodeStatusType:Le.TOO_MANY_ATTEMPTS}):this.setState({enterCodeStatusType:Le.INTERNAL_SERVER_ERROR});case 15:case"end":return e.stop()}}),e,this,[[4,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"displayFormHelperText",value:function(){return this.state.enterCodeStatusType!==Le.NONE}},{key:"getFormHelperText",value:function(){var e=this.state,t=e.enterCodeStatusType,a=e.selectedContactMethod,n=e.email,r=e.phone;return t===Le.INVALID_PASSCODE?"Wrong code, try again.":t===Le.CODE_EXPIRED?"This code has expired.":t===Le.TOO_MANY_ATTEMPTS?"Too many failed attempts.":t===Le.INTERNAL_SERVER_ERROR?"Internal server error. Please refresh the page and try again.":t===Le.RESENT_CODE?"Another code has been sent to ".concat("email"===a?n:r):""}},{key:"formHelperTextIsError",value:function(){return this.state.enterCodeStatusType!==Le.RESENT_CODE}},{key:"displayResendCodeLink",value:function(){var e=this.state.enterCodeStatusType;return e===Le.TOO_MANY_ATTEMPTS||e===Le.CODE_EXPIRED}},{key:"resendCodeClicked",value:function(){var e=Object(Oe.a)(be.a.mark((function e(t){var a,n,r;return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.state,n=a.email,r=a.selectedContactMethod,e.prev=1,e.next=4,Se(n,r);case 4:this.setState({enterCodeStatusType:Le.RESENT_CODE}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),this.setState({enterCodeStatusType:Le.INTERNAL_SERVER_ERROR});case 10:case"end":return e.stop()}}),e,this,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.selectedContactMethod,a=e.phone,n=e.email,s="email"===t?n:a;return Object(r.jsx)("div",{className:"auth-page-container",children:Object(r.jsxs)("div",{className:"auth-page",children:[Object(r.jsx)(v.a,{className:"auth-header",color:"primary",variant:"h4",children:"Enter Security Code"}),Object(r.jsxs)("form",{className:"auth-form",children:[Object(r.jsxs)("div",{className:"auth-instructions desktop-only",children:["Please check your ",t," for the 8 digit code that was sent to ",s,"."]}),Object(r.jsx)(D.a,{onChange:this.handleCodeChange,className:"auth-txt-field",label:"########",variant:"filled",helperText:this.getCodeHelperText(),error:this.displayCodeTextFieldError()}),Object(r.jsx)(F.a,{onClick:this.handleSubmit,className:"auth-btn",variant:"contained",color:"primary",size:"medium",children:"Enter Code"}),Object(r.jsxs)(ve.a,{className:"auth-err ".concat(this.displayFormHelperText()?"":"display-none"),error:this.formHelperTextIsError(),children:[this.getFormHelperText(),Object(r.jsx)("span",{className:"resend-code ".concat(this.displayResendCodeLink()?"":"display-none"),onClick:this.resendCodeClicked,children:"Resend Code?"})]})]}),Object(r.jsx)("div",{className:"non-important-btns-container",children:Object(r.jsx)(l.b,{className:"no-underline",to:"/pickresetmethod?email=".concat(n,"&phone=").concat(a),children:Object(r.jsx)(F.a,{className:"enter-code-btn non-important-btn",color:"primary",children:"Try Another Way"})})})]})})}}]),a}(i.a.Component),ze=a(133),We=a.n(ze);a(193);!function(e){e[e.PASSWORD_EXPIRED=0]="PASSWORD_EXPIRED",e[e.INTERNAL_SERVER_ERROR=1]="INTERNAL_SERVER_ERROR",e[e.NONE=2]="NONE"}(He||(He={}));var Be=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;Object(h.a)(this,a),n=t.call(this,e);var r=Fe.a.parse(n.props.location.search,{ignoreQueryPrefix:!0}),s="",i="";return r&&(s=r.code,i=r.email),n.state={code:s,email:i,password:"",resetPasswordFailureType:He.NONE,submitButtonTouched:!1,passwordChangeSuccess:!1},n.handleSubmit=n.handleSubmit.bind(Object(A.a)(n)),n.handlePasswordChange=n.handlePasswordChange.bind(Object(A.a)(n)),n}return Object(u.a)(a,[{key:"handlePasswordChange",value:function(e){var t=e.target.value;this.setState({password:t})}},{key:"displayPasswordError",value:function(){return!this.passwordIsValid()&&this.state.submitButtonTouched}},{key:"passwordHasCorrectLength",value:function(){var e=this.state.password;return e.length>=8&&e.length<=32}},{key:"passwordHasCorrectCharacters",value:function(){var e=this.state.password;return/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,32}$/.test(e)}},{key:"passwordIsValid",value:function(){return this.passwordHasCorrectCharacters()&&this.passwordHasCorrectLength()}},{key:"getPasswordHelperText",value:function(){var e=this.state.submitButtonTouched;return!this.passwordHasCorrectLength()&&e?"Enter between 8 and 32 characters":!this.passwordHasCorrectCharacters()&&e?"Include a letter, number, and special character":"Enter your new password"}},{key:"displayFormError",value:function(){return this.state.resetPasswordFailureType!==He.NONE}},{key:"getFormErrorText",value:function(){var e=this.state.resetPasswordFailureType;return e===He.PASSWORD_EXPIRED?"This reset code has expired.":e===He.INTERNAL_SERVER_ERROR?"Internal server error. Please refresh the page and try again.":""}},{key:"handleSubmit",value:function(){var e=Object(Oe.a)(be.a.mark((function e(t){var a,n,r,s,i=this;return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this.state,n=a.email,r=a.password,s=a.code,this.setState({submitButtonTouched:!0}),this.passwordIsValid()){e.next=4;break}return e.abrupt("return");case 4:return e.prev=4,e.next=7,we(n,r,s);case 7:this.setState({resetPasswordFailureType:He.NONE,passwordChangeSuccess:!0}),t(),setTimeout((function(){i.props.history.push("/features/schedule")}),500),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),401===e.t0.response.status&&"Reset code has expired"===e.t0.response.data.message?(this.setState({resetPasswordFailureType:He.PASSWORD_EXPIRED}),console.log("error.response.data",e.t0.response.data)):this.setState({resetPasswordFailureType:He.INTERNAL_SERVER_ERROR});case 15:case"end":return e.stop()}}),e,this,[[4,12]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.passwordChangeSuccess;return Object(r.jsx)("div",{className:"auth-page-container",children:Object(r.jsxs)("div",{className:"auth-page",children:[Object(r.jsx)(v.a,{className:"auth-header",color:"primary",variant:"h4",children:"Reset Password"}),Object(r.jsxs)("form",{className:"auth-form",children:[Object(r.jsx)("div",{className:"auth-instructions desktop-only",children:"Enter a new password between 8 and 32 characters. Include at least one uppercase letter, lowercase letter, number, and special character. "}),Object(r.jsx)(Ee,{onChange:this.handlePasswordChange,inputProps:{maxLength:32},className:"auth-txt-field",error:this.displayPasswordError(),helperText:this.getPasswordHelperText(),label:"New Password"}),Object(r.jsx)(de,{children:function(t){return Object(r.jsx)(F.a,{onClick:function(a){return e.handleSubmit(t.login)},className:"auth-btn",variant:"contained",color:"primary",size:"medium",children:"Change Password"})}}),Object(r.jsx)(ve.a,{className:"auth-err ".concat(this.displayFormError()?"":"display-none"),error:this.displayFormError(),children:this.getFormErrorText()}),Object(r.jsxs)("div",{className:"change-pw-success ".concat(t?"":"display-none"),children:[Object(r.jsx)("div",{className:"change-pw-success-txt",children:"Password Changed"}),Object(r.jsx)(We.a,{color:"primary"})]})]})]})})}}]),a}(i.a.Component),Xe=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.options,n=t.component,s=t.children;return Object(r.jsx)(de,{children:function(t){return t.isLoggedIn?Object(r.jsx)(d.b,Object(xe.a)(Object(xe.a)({path:e.props.path},a),{},{component:t.isLoggedIn?n:Te,children:s})):Object(r.jsx)(d.a,{to:"/login"})}})}}]),a}(i.a.Component);a(194);var Ye=function(){return Object(r.jsx)(l.a,{children:Object(r.jsxs)(d.d,{children:[Object(r.jsx)(d.b,{exact:!0,path:"/register",component:Re}),Object(r.jsx)(d.b,{exact:!0,path:"/login",component:Te}),Object(r.jsx)(d.b,{exact:!0,path:"/findaccount",component:Ie}),Object(r.jsx)(d.b,{exact:!0,path:"/pickresetmethod",component:Ve}),Object(r.jsx)(d.b,{exact:!0,path:"/entercode",component:Ue}),Object(r.jsx)(d.b,{exact:!0,path:"/resetpassword",component:Be}),Object(r.jsx)(d.b,{exact:!0,path:"/",component:pe}),Object(r.jsx)(Xe,{path:"/features",children:Object(r.jsxs)(w,{children:[Object(r.jsx)(d.b,{path:"/features/medicine",component:J}),Object(r.jsx)(d.b,{path:"/features/contactsettings",component:j}),Object(r.jsx)(d.b,{path:"/features/alarms",component:ee}),Object(r.jsx)(d.b,{path:"/features/schedule",component:te}),Object(r.jsx)(d.b,{path:"/features/accountsettings",component:ue})]})})]})})},Ze=a(235),Qe=a(136),Ke=a(238),Ge=a(135),$e=a.n(Ge),qe=a(134),Je=a.n(qe),et=Object(Qe.a)({palette:{primary:Je.a,secondary:$e.a},status:{danger:"red"}}),tt=et=Object(Ke.a)(et);o.a.render(Object(r.jsx)(he,{children:Object(r.jsx)(Ze.a,{theme:tt,children:Object(r.jsx)(Ye,{})})}),document.getElementById("root"))}},[[195,1,2]]]);
//# sourceMappingURL=main.d95bf575.chunk.js.map