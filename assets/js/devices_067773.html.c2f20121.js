"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[57118],{36223:(e,n,a)=>{a.r(n),a.d(n,{comp:()=>i,data:()=>l});var t=a(6254);const s={},i=(0,a(89596).A)(s,[["render",function(e,n){const a=(0,t.g2)("RouteLink");return(0,t.uX)(),(0,t.CE)("div",null,[n[14]||(n[14]=(0,t.Lk)("h1",{id:"legrand-067773",tabindex:"-1"},[(0,t.Lk)("a",{class:"header-anchor",href:"#legrand-067773"},[(0,t.Lk)("span",null,"Legrand 067773")])],-1)),(0,t.Lk)("table",null,[n[6]||(n[6]=(0,t.Lk)("thead",null,[(0,t.Lk)("tr",null,[(0,t.Lk)("th"),(0,t.Lk)("th")])],-1)),(0,t.Lk)("tbody",null,[n[2]||(n[2]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Model"),(0,t.Lk)("td",null,"067773")],-1)),(0,t.Lk)("tr",null,[n[1]||(n[1]=(0,t.Lk)("td",null,"Vendor",-1)),(0,t.Lk)("td",null,[(0,t.bF)(a,{to:"/supported-devices/#v=Legrand"},{default:(0,t.k6)((()=>n[0]||(n[0]=[(0,t.eW)("Legrand")]))),_:1})])]),n[3]||(n[3]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Description"),(0,t.Lk)("td",null,"Wireless remote switch")],-1)),n[4]||(n[4]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Exposes"),(0,t.Lk)("td",null,"battery, action, linkquality")],-1)),n[5]||(n[5]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Picture"),(0,t.Lk)("td",null,[(0,t.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/067773.png",alt:"Legrand 067773"})])],-1))])]),n[15]||(n[15]=(0,t.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="legacy-integration" tabindex="-1"><a class="header-anchor" href="#legacy-integration"><span>Legacy integration</span></a></h3><p>By default (for backwards compatibility purposes) the legacy integration is enabled. For new users it is recommended to <strong>disable</strong> this as it has several fundamental problems. To disable the legacy integration add the following to your <code>configuration.yaml</code>:</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">&#39;0xabc457fffe679xyz&#39;</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> my_remote</span>\n<span class="line">    <span class="token key atrule">legacy</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="model-numbers" tabindex="-1"><a class="header-anchor" href="#model-numbers"><span>Model numbers</span></a></h3><p>Model number depends on the country and the colour of the devices. French models are branded as Céliane with Netatmo, and models for this device depends on the colour, with the following numbers: &quot;0 677 23&quot;, &quot;0 677 73&quot;, and &quot;0 648 93&quot;. Spanish models are branded as Legrand Valena Next, and models for this device depends on the colour, with the following numbers: &quot;7 418 13&quot;, &quot;7 418 43&quot; and &quot;7 418 73&quot;. American models are branded as radiant with Netatmo, model numbers are the same as the French ones, but sized for American boxes and plates.</p><h3 id="binding" tabindex="-1"><a class="header-anchor" href="#binding"><span>Binding</span></a></h3>',7)),(0,t.Lk)("p",null,[n[8]||(n[8]=(0,t.eW)("The remote supports ")),(0,t.bF)(a,{to:"/guide/usage/binding.html"},{default:(0,t.k6)((()=>n[7]||(n[7]=[(0,t.eW)("binding")]))),_:1}),n[9]||(n[9]=(0,t.eW)("."))]),n[16]||(n[16]=(0,t.Lk)("h2",{id:"ota-updates",tabindex:"-1"},[(0,t.Lk)("a",{class:"header-anchor",href:"#ota-updates"},[(0,t.Lk)("span",null,"OTA updates")])],-1)),(0,t.Lk)("p",null,[n[11]||(n[11]=(0,t.eW)("This device supports OTA updates, for more information see ")),(0,t.bF)(a,{to:"/guide/usage/ota_updates.html"},{default:(0,t.k6)((()=>n[10]||(n[10]=[(0,t.eW)("OTA updates")]))),_:1}),n[12]||(n[12]=(0,t.eW)("."))]),n[17]||(n[17]=(0,t.Lk)("h2",{id:"options",tabindex:"-1"},[(0,t.Lk)("a",{class:"header-anchor",href:"#options"},[(0,t.Lk)("span",null,"Options")])],-1)),(0,t.Lk)("p",null,[(0,t.Lk)("em",null,[(0,t.bF)(a,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,t.k6)((()=>n[13]||(n[13]=[(0,t.eW)("How to use device type specific configuration")]))),_:1})])]),n[18]||(n[18]=(0,t.Fv)('<ul><li><p><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Note: will only work when legacy: false is set. Example:</p></li></ul><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span></span>\n<span class="line">  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>identify</code>, <code>on</code>, <code>off</code>, <code>toggle</code>, <code>brightness_move_up</code>, <code>brightness_move_down</code>, <code>brightness_stop</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',9))])}]]),l=JSON.parse('{"path":"/devices/067773.html","title":"Legrand 067773 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Legrand 067773 control via MQTT","description":"Integrate your Legrand 067773 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-01-14T19:34:25.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Legacy integration","slug":"legacy-integration","link":"#legacy-integration","children":[]},{"level":3,"title":"Model numbers","slug":"model-numbers","link":"#model-numbers","children":[]},{"level":3,"title":"Binding","slug":"binding","link":"#binding","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1734970284000},"filePathRelative":"devices/067773.md"}')}}]);