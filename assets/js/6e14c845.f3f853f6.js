"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8556],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6850:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const r={"ft:title":"Add an Endpoint to a Gateway","ft:prettyUrl":"t_create_endpoint"},i=void 0,l={unversionedId:"guides/ism/add_endpoint_to_gateway",id:"guides/ism/add_endpoint_to_gateway",title:"add_endpoint_to_gateway",description:"When you configure a gateway, you must create one endpoint that connects to it. After you configure the gateway, you can add more endpoints to it. Veracode recommends that you install one endpoint in each network in which you scan your internal applications or REST APIs.",source:"@site/docs/guides/ism/08_add_endpoint_to_gateway.md",sourceDirName:"guides/ism",slug:"/guides/ism/add_endpoint_to_gateway",permalink:"/vcodcs/docs/guides/ism/add_endpoint_to_gateway",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{"ft:title":"Add an Endpoint to a Gateway","ft:prettyUrl":"t_create_endpoint"},sidebar:"tutorialSidebar",previous:{title:"configure_internal_scanning",permalink:"/vcodcs/docs/guides/ism/configure_internal_scanning"},next:{title:"video_install_endpoint_ism_installer",permalink:"/vcodcs/docs/guides/ism/video_install_endpoint_ism_installer"}},p={},s=[],c={toc:s};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When you configure a gateway, you must create one endpoint that connects to it. After you configure the gateway, you can add more endpoints to it. Veracode recommends that you install one endpoint in each network in which you scan your internal applications or REST APIs."),(0,o.kt)("p",null,"Before you begin:"),(0,o.kt)("p",null,"Before installing an endpoint on a machine, verify that you can connect to the applications you want to scan from that machine."),(0,o.kt)("p",null,"To complete this task:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the gear icon menu ",(0,o.kt)("img",{src:n(2904).Z,width:"24",height:"16"})," at the top of the Veracode Platform, click ",(0,o.kt)("strong",{parentName:"p"},"Internal Scanning Management"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click the name of the gateway to which you want to add the endpoint.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the gateway page, click ",(0,o.kt)("strong",{parentName:"p"},"Add Endpoint"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter the endpoint name and description.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the platform of the machine running the endpoint. If you do not use Windows or Linux, select ",(0,o.kt)("strong",{parentName:"p"},"Other")," to perform a manual endpoint installation."),(0,o.kt)("p",{style:{backgroundColor:"#FFFCF3",padding:12,borderLeft:"5px solid #F7CD55"}},(0,o.kt)("b",null,"Note:")," ISM currently supports ASCII characters, not UTF-8, for the names and descriptions of gateways and endpoints."),(0,o.kt)("p",{parentName:"li"},"  If you select ",(0,o.kt)("strong",{parentName:"p"},"Other"),", go directly to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/t_configure_endpoint_manual"},"Manually Install an Endpoint"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Next"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Complete these steps to start the installer:"),(0,o.kt)("p",{parentName:"li"},"  a.  Click ",(0,o.kt)("strong",{parentName:"p"},"Download")," to download the ZIP file containing the installer."),(0,o.kt)("p",{parentName:"li"},"  b.  Click ",(0,o.kt)("strong",{parentName:"p"},"Copy")," in the text box in step 2.3 to copy your endpoint key to your clipboard."),(0,o.kt)("p",{parentName:"li"},"  c.  Move the downloaded ZIP file to a machine behind your firewall with access to your internal applications or REST APIs."),(0,o.kt)("p",{parentName:"li"},"  d.  Extract the ZIP file."),(0,o.kt)("p",{parentName:"li"},"  e.  Open the installer file."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"For Windows machines, the filename is ",(0,o.kt)("inlineCode",{parentName:"li"},"veracode_ism_install.bat"),"."),(0,o.kt)("li",{parentName:"ul"},"For Linux machines, the filename is ",(0,o.kt)("inlineCode",{parentName:"li"},"veracode_ism_install.sh"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  <p style={{\n")),'  backgroundColor: "#FFFCF3",\npadding: 12,\nborderLeft: "5px solid #F7CD55"\n}}>',(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  <b>Note:</b> If you have insufficient permissions to create the service, run the file as an administrator. If you are using a Linux machine without a GUI wrapper, Veracode recommends you open the installer with this command: <code>sudo -s ./veracode_ism_install.sh</code>\n  </p>\n"))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After you launch the installer, complete these steps to install the endpoint:"),(0,o.kt)("p",{style:{backgroundColor:"#FFFCF3",padding:12,borderLeft:"5px solid #F7CD55"}},(0,o.kt)("b",null,"Note:")," For Linux machines without a GUI wrapper, opening the installer prompts you to provide the information listed in these steps on the command line."),(0,o.kt)("p",{parentName:"li"},"  a.  Read the terms of use for the endpoint, select the checkbox and click ",(0,o.kt)("strong",{parentName:"p"},"Next"),"."),(0,o.kt)("p",{parentName:"li"},"  b.  Verify the installation folder and Java home are correct or select your preferred folders and click ",(0,o.kt)("strong",{parentName:"p"},"Next"),"."),(0,o.kt)("p",{style:{backgroundColor:"#FFFCF3",padding:12,borderLeft:"5px solid #F7CD55"}},(0,o.kt)("b",null,"Note:")," If the installer cannot automatically detect the Java home, you must specify it."),(0,o.kt)("p",{parentName:"li"},"  c.  If you use a proxy, select ",(0,o.kt)("strong",{parentName:"p"},"Manual configuration")," and complete these steps:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'- Enter your proxy hostname and port number.\n- If you want to use the proxy only for communication between the endpoint and gateway:\n    - Select **For gateway connection**.\n    -   If you want the proxy to resolve the gateway hostname, which means you need to allow only the gateway hostname, clear the **Let endpoint resolve hostname for gateway** checkbox. If you do not clear it, you must include the hostname and IP address of the gateway in your allowlist.\n- If you want to use the proxy for communication between the endpoint and gateway and between the endpoint and the URLs you scan:\n    - Select **For gateway and URL connections**.\n    - If you want the proxy to resolve the gateway or URL hostnames, which means you need to allow only the hostname for the gateway and the URLs you scan, clear the **Let endpoint resolve hostname for gateway** or **Let endpoint resolve hostname for URLs** checkboxes. If you do not clear them, you must include the hostname and IP address of the gateway and URLs in your allowlist.\n- If the proxy requires authentication, select **Authentication Required** and, then, enter your proxy credentials.\n\ne. Click **Next**.\n\nf. Paste the endpoint key you copied in step 7 and click **Next**.\n\n<p style={{\nbackgroundColor: "#FFFCF3",\npadding: 12,\nborderLeft: "5px solid #F7CD55"\n')),(0,o.kt)("p",null,"  }}>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"     <b>Note:</b> If you did not copy the endpoint key, go to the gateway page in the Veracode Platform, click the Actions menu for this endpoint, and select <b>Copy Endpoint Key</b>.\n     </p>\n\ng.  When the key validates, click **Install**.\n\nh.  Click **Close**.\n")),(0,o.kt)("p",null,"   After you complete the installation, the new endpoint appears on the gateway page with a status of Ready."),(0,o.kt)("p",null,"Next steps:"),(0,o.kt)("p",null,"After you have started the endpoint, you can ",(0,o.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/c_was_configure"},"configure a Veracode Dynamic Analysis")," for internal scanning."))}d.isMDXComponent=!0},2904:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAQCAYAAAAMJL+VAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAHYYAAB2GAV2iE4EAAAAkdEVYdENvbW1lbnQATEVBRCBUZWNobm9sb2dpZXMgSW5jLiBWMS4wMX7Qgw0AAARkSURBVDhPNZTrTxRXGMb3j+r32sSvJv1Sk6Ym+qGXxLSx1mjT2qa11qS2aFMbbURRpFwEVBSWm9wRkHLxggiCXAVkdWHZnZ3bzszOr89Z2k1m58x7znne533eS8KK8oQxZNBPb08vxy6Qdi1W8rDuROSKOezAJRdGFCKQGVuHYx8KQUwUF7Hw8dwIHYci+HoEQ8KXwZYtE2khB3gZll8MU1bTxdfXujhcfZfbMykcbeX0oGOen0d3sbXOCjgIBahv+WK7GOC6Po4+PO0nwrBA3rcIgizbgbg5GSqbGtjf/4J09g0dg+18dX2UAYNe9MkLxIBF+o9CFzcKSsC2GIeBHu0RK9KijLIlzN/mVoq/Ozq58GCdht4+frjRw5XlrdLh1Pwsv1a38t3gBNXdI5QlJ+lbysuRjytA24uxQjkWkKsLrhtTLPgUiyG+vhOhl6a2tpb3k+N8ebOTfXVjdG56Ai+Kmbx7RbKbM5xr6GZ/1SBHL7VwPDnCuJIVB15JOiOXF/nKg2TR2lGIJo+27idWnw7y+fVp1kxIUtnoaRUsxmamOds7weXJNdYMFbE1YDib/H6vhVOjKTZliyWHo8xH/2dXMDuyu+7uZ+Jx+232VI4ytLRNLCpBmGei/y5fXGvig7uDfFjVyOmeZ8yZsog93m6ucKGqme+bnrBhqEsqr2BT8HfZGyIRrhyLrqkib+EpZ27Vc6hrHleG1VdTnLzaQ+uqYSAa6084U9PNqadbKlGHgbZmDpZ3UL1kSfc8mdhWNW1wf3yY82PPWTeBsMbjyQFOj6wqB6qG9HSSPfUzbKonhseSHKtbK1VGiRFbNHQMcDSZVvQ56hqTXByzSsxj6Zn3VV5xyPxYDx/92cDPQ4v0/jPMp5du881YikR25QknKzo40PZCSVITzY3y06V2Kl9nCBRRbmOSH8vvcXbatNdbBpNJDpV1cmPFwhGJwn9EjCyLzx5y7Fw575W1cGXqtag7JMZb69hb/Yi5jbzks/GVrMmhFo6UD7G/5gH7rjRzcXCVV9bObo7SKS7W1XGiY4qXJvdy4IfW7iSIXObml2icz/C2aNyqil4+7+OzykkW5c8VF5WxcpFhdmGZ+kfqj5k3vJYt8nd2O9lao6y2hfMjb0jFORzlvhCoknQmLEaCjEuNaPrArBNBkKH7VjvvXmvmSHUb79T207SwW26GnSm1rYUJjl9uYm/DAB9X3OPwnUUmNV/MdDHzyVFkBc0FBVQimFdt2PKSc2wSckohtaIObqHy8Sz3+/v5trGTP5bTRAJfmZ3it6t3+KXvGb3TU1R0tdCbCUq6B0qarR4wPCw1pKl/4yQsBKWhaCJOBJFk0UZ2x2FHBrLb1N+s5UDXHOnMGgO97Zyo6eOhnJmQdnTRgJu5Y4akmZgG1Bcb3/Uw/WoksiKNEC/ULJJ+5oApudLwkN/l2eeqnFY++aubgxVt3JlZwRKaHdq7suXzpSFXApEDjSM5d0t7rnBCN1saH04Y8i9xnmvhMXegKwAAAABJRU5ErkJggg=="}}]);