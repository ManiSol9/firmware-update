(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a(73)},33:function(e,t,a){},54:function(e,t,a){},56:function(e,t,a){},58:function(e,t,a){},60:function(e,t,a){e.exports=a.p+"static/media/play.25419525.svg"},65:function(e,t,a){},67:function(e,t,a){},69:function(e,t,a){e.exports=a.p+"static/media/play.25419525.svg"},70:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(22),r=a.n(o),s=(a(33),a(4)),c=a(5),i=a(7),u=a(6),d=a(8),m=a(76),E=a(75),p=a(74),b=a(14),g=a(9),A=a.n(g),_=Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_AZURE_SERVER:"https://wrdm2-api.azurewebsites.net/",REACT_APP_GETBLOBS:"api/file/list",REACT_APP_GETSTATUS:"getupdatestatus",REACT_APP_LOG:"api/log",REACT_APP_REBOOT:"getrebootstatus",REACT_APP_SERVER:"",REACT_APP_UPDATE_REBOOT:"updatereboot",REACT_APP_UPDATE_TWIN:"updatetwin",REACT_APP_UPLOADBLOB:"api/file/upload",REACT_APP_VM_SERVER:"https://wrdm2-dockerbottleapi-chetan.azurewebsites.net/"}),h=_.REACT_APP_VM_SERVER,P=_.REACT_APP_REBOOT,f=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={rebootStatus:[],rebootStatusLoading:!1},a.getStatus=function(){a.setState({rebootStatusLoading:!0}),A()({method:"get",url:h+P}).then(function(e){console.log(e),a.setState({rebootStatus:[Object(b.a)({},e.data)]}),a.setState({rebootStatusLoading:!1})}).catch(function(e){console.log(e),a.setState({rebootStatusLoading:!1})})},a.showStatus=function(e,t){return l.a.createElement("div",{index:t},l.a.createElement("p",null,l.a.createElement("b",null,"Reboot status:"),"\xa0",l.a.createElement("span",null,e.status?e.status:"--")),l.a.createElement("br",null),l.a.createElement("p",null,l.a.createElement("b",null,"Reboot type:"),"\xa0",l.a.createElement("span",null,e.rebootType)))},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){this.getStatus()}},{key:"render",value:function(){var e=this,t=this.state,a=t.rebootStatus,n=t.rebootStatusLoading;return l.a.createElement("div",{className:"box-it"},a.length?a.map(function(t,a){return e.showStatus(t,a)}):l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("b",null,"Reboot status:"),"\xa0",l.a.createElement("span",null,"--")),l.a.createElement("br",null),l.a.createElement("p",null,l.a.createElement("b",null,"Reboot type:"),"\xa0",l.a.createElement("span",null,"--"))),l.a.createElement("button",{type:"button",className:"fluid-btn",onClick:this.getStatus},n?"Refreshing..":"Refresh"))}}]),t}(n.Component),T=(a(54),Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_AZURE_SERVER:"https://wrdm2-api.azurewebsites.net/",REACT_APP_GETBLOBS:"api/file/list",REACT_APP_GETSTATUS:"getupdatestatus",REACT_APP_LOG:"api/log",REACT_APP_REBOOT:"getrebootstatus",REACT_APP_SERVER:"",REACT_APP_UPDATE_REBOOT:"updatereboot",REACT_APP_UPDATE_TWIN:"updatetwin",REACT_APP_UPLOADBLOB:"api/file/upload",REACT_APP_VM_SERVER:"https://wrdm2-dockerbottleapi-chetan.azurewebsites.net/"})),R=T.REACT_APP_VM_SERVER,w=(T.REACT_APP_UPDATE_REBOOT,function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).logMessage=function(e){e.preventDefault();var t=a.state;t.deviceID,t.message;a.setState({logging:!0}),A()({method:"post",url:R+"updatereboot",headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json","Access-Control-Allow-Headers":"Authorization, Content-Type","Access-Control-Allow-Methods":"POST"},data:{reboot:"true"}}).then(function(e){console.log(e),alert("Reboot successfully"),a.setState({logging:!1,deviceID:"",message:""})}).catch(function(e){console.log(e),alert("Error in Reboot."),a.setState({logging:!1})})},a.handleInput=function(e){var t=e.target,n=t.name,l=t.value;"deviceID"===n?a.setState({deviceID:l}):"message"===n&&a.setState({message:l})},a.state={deviceID:"",message:"",logging:!1},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=(e.deviceID,e.message,e.logging);return l.a.createElement("div",{className:"box-it"},l.a.createElement("form",{onSubmit:this.logMessage},l.a.createElement("button",{type:"submit",className:"cust-btn"},t?"Rebooting..":"Reboot")))}}]),t}(n.Component)),S=(a(56),Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_AZURE_SERVER:"https://wrdm2-api.azurewebsites.net/",REACT_APP_GETBLOBS:"api/file/list",REACT_APP_GETSTATUS:"getupdatestatus",REACT_APP_LOG:"api/log",REACT_APP_REBOOT:"getrebootstatus",REACT_APP_SERVER:"",REACT_APP_UPDATE_REBOOT:"updatereboot",REACT_APP_UPDATE_TWIN:"updatetwin",REACT_APP_UPLOADBLOB:"api/file/upload",REACT_APP_VM_SERVER:"https://wrdm2-dockerbottleapi-chetan.azurewebsites.net/"})),O=S.REACT_APP_VM_SERVER,v=S.REACT_APP_UPDATE_TWIN,C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).updateTwin=function(e){e.preventDefault();var t=a.state,n=t.softwareVersion,l=t.url;t.reboot;""===n||""===l?alert("Please enter all the fields"):(a.setState({updateTwinLoading:!0}),A()({method:"post",url:O+v,headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json","Access-Control-Allow-Headers":"Authorization, Content-Type","Access-Control-Allow-Methods":"POST"},data:{software_version:n,url:l}}).then(function(e){console.log(e),alert("Firmware updated successfully"),a.setState({updateTwinLoading:!1})}).catch(function(e){console.log(e),alert("Error in Firmware update"),a.setState({updateTwinLoading:!1})}))},a.handleInput=function(e){var t=e.target,n=t.name,l=t.value;"url"===n&&a.setState({url:l}),"reboot"===n&&a.setState({reboot:l}),"softwareVersion"===n&&a.setState({softwareVersion:l})},a.state={softwareVersion:"1.0.0.006",updateTwinLoading:!1,reboot:"True",url:"https://wrdm2chetanpackage.blob.core.windows.net/wrdm2-package-file-chetan/package.tar.gz"},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.url,a=e.softwareVersion,n=e.updateTwinLoading;e.reboot;return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.updateTwin},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Software version"),l.a.createElement("input",{type:"software-version",className:"form-control",id:"software",value:a,name:"softwareVersion","aria-describedby":"softwareHelp",placeholder:"Enter software version",onChange:this.handleInput})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Blob URL"),l.a.createElement("input",{type:"text",value:t,name:"url",className:"form-control",id:"blobUrl",placeholder:"Enter Blob URL",onChange:this.handleInput})),l.a.createElement("button",{type:"submit",className:"cust-btn"},n?"Updating Firmware..":"Update firmware")))}}]),t}(n.Component),N=(a(58),a(23)),L=a.n(N);var y=function(e){return l.a.createElement(L.a,{percentage:e.percentage,text:e.text,strokeWidth:5,styles:{root:{},path:{stroke:"#2c55ba",strokeLinecap:"butt",transition:"stroke-dashoffset 0.5s ease 0s"},trail:{stroke:"#d6d6d6"},text:{fill:"#2c55ba",fontSize:"30px"}}})},B=Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_AZURE_SERVER:"https://wrdm2-api.azurewebsites.net/",REACT_APP_GETBLOBS:"api/file/list",REACT_APP_GETSTATUS:"getupdatestatus",REACT_APP_LOG:"api/log",REACT_APP_REBOOT:"getrebootstatus",REACT_APP_SERVER:"",REACT_APP_UPDATE_REBOOT:"updatereboot",REACT_APP_UPDATE_TWIN:"updatetwin",REACT_APP_UPLOADBLOB:"api/file/upload",REACT_APP_VM_SERVER:"https://wrdm2-dockerbottleapi-chetan.azurewebsites.net/"}),U=B.REACT_APP_VM_SERVER,j=B.REACT_APP_GETSTATUS,k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).getStatus=function(){a.setState({getFirmwareLoading:!0}),A()({method:"get",url:U+j}).then(function(e){console.log(e),a.setState({firmwareStatuses:[Object(b.a)({},e.data)]}),a.setState({getFirmwareLoading:!1})}).catch(function(e){console.log(e),a.setState({getFirmwareLoading:!1})})},a.showStatus=function(e,t){var a=0;switch(e.otaStatus){case"WaitingForUpdate":a=5;break;case"SoftwareUpdateinProgress":a=15;break;case"DownloadComplete":a=25;break;case"UnzipComplete":a=40;break;case"ReadPackageDataComplete":a=55;break;case"PreInstallComplete":a=70;break;case"InstallComplete":a=85;break;case"SoftwareUpdateComplete":a=100;break;default:a=0}return l.a.createElement("div",{className:"status-container",key:t},l.a.createElement("div",{className:"status-details-container"},l.a.createElement("b",null,"OTA Status: "),l.a.createElement("span",null,e.otaStatus),l.a.createElement("br",null),l.a.createElement("b",null,"Current version: "),l.a.createElement("span",null,e.currentVersion),l.a.createElement("br",null),l.a.createElement("b",null,"Pending Status: "),l.a.createElement("span",null,e.pendingVersion),l.a.createElement("br",null)),l.a.createElement("div",{style:{width:"76px"}},l.a.createElement(y,{percentage:a,text:"".concat(a,"%")})))},a.state={firmwareStatuses:[],getFirmwareLoading:!1},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){this.getStatus()}},{key:"render",value:function(){var e=this,t=this.state,n=t.firmwareStatuses,o=t.getFirmwareLoading;return l.a.createElement("div",null,l.a.createElement("div",{className:"row update-row"},l.a.createElement("div",{className:"col-6"},l.a.createElement(C,null)),l.a.createElement("div",{className:"col-6"},l.a.createElement("div",{className:"accordion",id:"accordionExample"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header toggle-card",id:"headingOne"},l.a.createElement("div",{className:"row",style:{cursor:"pointer"},"data-toggle":"collapse","data-target":"#toggleFirmware",role:"button","aria-expanded":"false","aria-controls":"toggleFirmware"},l.a.createElement("img",{className:"img-upload",src:a(60),alt:"...","data-toggle":"modal","data-target":"#showFirmwareDetails"}),l.a.createElement("p",{className:"col-10 upload-text"},"Status"))),l.a.createElement("div",null,l.a.createElement("div",{className:"collapse multi-collapse",id:"toggleFirmware"},l.a.createElement("div",{className:"card firm-card"},l.a.createElement("div",{className:"card-body"},n.length?n.map(function(t,a){return e.showStatus(t,a)}):l.a.createElement("p",{style:{textAlign:"center"}},"No records found")),l.a.createElement("div",{className:"toogle-footer"},l.a.createElement("button",{type:"button",className:"cust-btn"},"View Logs"),l.a.createElement("button",{type:"button",className:"cust-btn",onClick:this.getStatus},o?"Refreshing..":"Refresh"))))))))))}}]),t}(n.Component),V=a(25),D=(a(63),a(65),Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_AZURE_SERVER:"https://wrdm2-api.azurewebsites.net/",REACT_APP_GETBLOBS:"api/file/list",REACT_APP_GETSTATUS:"getupdatestatus",REACT_APP_LOG:"api/log",REACT_APP_REBOOT:"getrebootstatus",REACT_APP_SERVER:"",REACT_APP_UPDATE_REBOOT:"updatereboot",REACT_APP_UPDATE_TWIN:"updatetwin",REACT_APP_UPLOADBLOB:"api/file/upload",REACT_APP_VM_SERVER:"https://wrdm2-dockerbottleapi-chetan.azurewebsites.net/"})),F=D.REACT_APP_SERVER,x=D.REACT_APP_GETBLOBS,I=D.REACT_APP_UPLOADBLOB,z=[{Header:"Name",accessor:"name"},{Header:"Download Link",resizable:!0,accessor:"name",Cell:function(e){return l.a.createElement("a",{href:"https://wrdm2chetanpackage.blob.core.windows.net/firmware/".concat(e.value)},"Link")}},{Header:"Date",accessor:"lastModified"}],M=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).uploadFirmware=function(){if(a.state.selectedFile){a.setState({uploadFirmwareLoading:!0});var e=new FormData;e.append("firmare",a.state.selectedFile);A.a.post(F+I,e,{headers:{"content-type":"multipart/form-data","Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Authorization, Content-Type","Access-Control-Allow-Methods":"POST"}}).then(function(e){console.log("ki",e),a.setState({uploadFirmwareLoading:!1}),e.data.status?(alert(e.data.message),a.getBlobDetails()):alert(e.data.message)}).catch(function(e){console.log(e),alert("Error in upload"),a.setState({uploadFirmwareLoading:!1})}),document.getElementById("file").value="",a.setState({selectedFile:null})}else alert("Please select a file")},a.getBlobDetails=function(){a.setState({getBlobsLoading:!0}),A()({method:"get",url:F+x}).then(function(e){console.log(e),e.data.status&&a.setState({blobs:e.data.blobs}),a.setState({getBlobsLoading:!1})}).catch(function(e){console.log(e),a.setState({getBlobsLoading:!1})})},a.handleselectedFile=function(e){e.preventDefault(),a.setState({selectedFile:e.target.files[0]})},a.state={blobs:[],getBlobsLoading:!1,uploadFirmwareLoading:!1},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){this.getBlobDetails()}},{key:"render",value:function(){var e=this.state,t=e.blobs,a=e.getBlobsLoading;return l.a.createElement("div",null,l.a.createElement(V.a,{data:t,columns:z,pageSizeOptions:[3],loading:a,showPagination:!0,defaultPageSize:3,width:170,loadingText:"Fetching firmwares..",noDataText:"No Firmwares found.."}),l.a.createElement("div",{className:"upload-container"},l.a.createElement("label",null,l.a.createElement("b",null,"Upload Firmware file to blob: ")),l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement("div",{className:"custom-file"},l.a.createElement("input",{id:"file",type:"file",accept:".gz, .zip",onChange:this.handleselectedFile,name:"myFile"}),l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("button",{type:"button",className:"cust-btn",onClick:this.uploadFirmware},"Upload File")))))}}]),t}(n.Component),G=(a(67),Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_AZURE_SERVER:"https://wrdm2-api.azurewebsites.net/",REACT_APP_GETBLOBS:"api/file/list",REACT_APP_GETSTATUS:"getupdatestatus",REACT_APP_LOG:"api/log",REACT_APP_REBOOT:"getrebootstatus",REACT_APP_SERVER:"",REACT_APP_UPDATE_REBOOT:"updatereboot",REACT_APP_UPDATE_TWIN:"updatetwin",REACT_APP_UPLOADBLOB:"api/file/upload",REACT_APP_VM_SERVER:"https://wrdm2-dockerbottleapi-chetan.azurewebsites.net/"})),W=(G.REACT_APP_VM_SERVER,G.REACT_APP_GETSTATUS,function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).updateSet=function(e){e.preventDefault(),a.setState({buttonstatus:!0}),null==a.state.settime?(a.setState({buttonstatus:!1,settime:null}),alert("Please enter all the fields")):(a.setState({updateTwinLoading:!0}),A()({method:"post",url:"https://wrdm2-dockerbottleapi-chetan.azurewebsites.net/updatelogtime",headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json","Access-Control-Allow-Headers":"Authorization, Content-Type","Access-Control-Allow-Methods":"POST"},data:{time:a.state.settime}}).then(function(e){console.log(e),a.setState({buttonstatus:!1,settime:null}),alert("Updated Successfully")}).catch(function(e){console.log(e),alert("Error in time update"),a.setState({buttonstatus:!1,settime:null})}))},a.handleInput=function(e){var t=e.target,n=t.name,l=t.value;"settime"===n&&a.setState({settime:l})},a.state={settime:null,buttonstatus:!1},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"row update-row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"accordion",id:"accordionExample"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header toggle-card",id:"headingOne"},l.a.createElement("div",{className:"row",style:{cursor:"pointer"},"data-toggle":"collapse","data-target":"#toggleFirmware",role:"button","aria-expanded":"false","aria-controls":"toggleFirmware"},l.a.createElement("img",{className:"img-upload",src:a(69),alt:"...","data-toggle":"modal","data-target":"#showFirmwareDetails"}),l.a.createElement("p",{className:"col-8 upload-text"},"Set Log Time"))),l.a.createElement("div",null,l.a.createElement("div",{className:"collapse multi-collapse",id:"toggleFirmware"},l.a.createElement("div",{className:"card firm-card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("form",{onSubmit:this.updateSet},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Logging Time Interval (in Min)"),l.a.createElement("input",{type:"number",className:"form-control",id:"software",value:this.state.settime,name:"settime","aria-describedby":"softwareHelp",placeholder:"Duration in min",onBlur:this.handleInput})),l.a.createElement("button",{type:"button",className:"cust-btn",onClick:this.updateSet},this.state.buttonstatus?"Setting..":"Set")))))))))))}}]),t}(n.Component)),H=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"container cust-home"},l.a.createElement("div",{className:"accordion",id:"accordionExample"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header custom-header",id:"headingOne"},l.a.createElement("h5",{className:"mb-0"},l.a.createElement("a",{href:"false","data-toggle":"collapse","data-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",style:{color:"white"}},l.a.createElement("span",{className:"fa fa-tasks"}),l.a.createElement("label",null,l.a.createElement("b",null,"\xa0\xa0Available Firmwares: ")),l.a.createElement("i",{className:"fa fa-angle-down pull-right"})))),l.a.createElement("div",{id:"collapseOne",className:"collapse show","aria-labelledby":"headingOne","data-parent":"#accordionExample"},l.a.createElement("div",{className:"card-body"},l.a.createElement(M,null)))),l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header custom-header",id:"headingTwo"},l.a.createElement("h5",{className:"mb-0"},l.a.createElement("a",{href:"false","data-toggle":"collapse","data-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",style:{color:"white"}},l.a.createElement("span",{className:"fa fa-spinner"}),l.a.createElement("label",null,l.a.createElement("b",null,"\xa0\xa0Firmware upload: ")),l.a.createElement("i",{className:"fa fa-angle-down pull-right"})))),l.a.createElement("div",{id:"collapseTwo",className:"collapse","aria-labelledby":"headingTwo","data-parent":"#accordionExample"},l.a.createElement("div",{className:"card-body"},l.a.createElement(k,null)))),l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header custom-header",id:"headingThree"},l.a.createElement("h5",{className:"mb-0"},l.a.createElement("a",{href:"false","data-toggle":"collapse","data-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",style:{color:"white"}},l.a.createElement("span",{className:"fa fa-desktop"}),l.a.createElement("label",null,l.a.createElement("b",null,"\xa0\xa0Reboot status and logs: ")),l.a.createElement("i",{className:"fa fa-angle-down pull-right"})))),l.a.createElement("div",{id:"collapseThree",className:"collapse","aria-labelledby":"headingThree","data-parent":"#accordionExample"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6"},l.a.createElement(w,null),l.a.createElement(f,null)),l.a.createElement("div",{className:"col-6"},l.a.createElement(W,null)))))))))}}]),t}(n.Component),Z=(a(70),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(p.a,null,l.a.createElement(m.a,null,l.a.createElement(E.a,{exact:!0,path:"/",component:H}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,2,1]]]);
//# sourceMappingURL=main.459aa1b0.chunk.js.map