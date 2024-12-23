"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[53492],{90755:(e,n,t)=>{t.r(n),t.d(n,{comp:()=>s,data:()=>l});var i=t(6254);const a={},s=(0,t(89596).A)(a,[["render",function(e,n){const t=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[n[8]||(n[8]=(0,i.Lk)("h1",{id:"rgb-genie-zb-5122",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#rgb-genie-zb-5122"},[(0,i.Lk)("span",null,"RGB Genie ZB-5122")])],-1)),(0,i.Lk)("table",null,[n[6]||(n[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[n[2]||(n[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"ZB-5122")],-1)),(0,i.Lk)("tr",null,[n[1]||(n[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(t,{to:"/supported-devices/#v=RGB%20Genie"},{default:(0,i.k6)((()=>n[0]||(n[0]=[(0,i.eW)("RGB Genie")]))),_:1})])]),n[3]||(n[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Micro remote and color dimmer with single scene recall")],-1)),n[4]||(n[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"battery, action, linkquality")],-1)),n[5]||(n[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZB-5122.png",alt:"RGB Genie ZB-5122"})])],-1))])]),n[9]||(n[9]=(0,i.Lk)("h2",{id:"options",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#options"},[(0,i.Lk)("span",null,"Options")])],-1)),(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>n[7]||(n[7]=[(0,i.eW)("How to use device type specific configuration")]))),_:1})])]),n[10]||(n[10]=(0,i.Fv)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span></span>\n<span class="line">  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>off</code>, <code>brightness_step_up</code>, <code>brightness_step_down</code>, <code>brightness_move_up</code>, <code>brightness_move_down</code>, <code>brightness_stop</code>, <code>recall_*</code>, <code>color_temperature_move_up</code>, <code>color_temperature_move_down</code>, <code>hue_move</code>, <code>hue_stop</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',9))])}]]),l=JSON.parse('{"path":"/devices/ZB-5122.html","title":"RGB Genie ZB-5122 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"RGB Genie ZB-5122 control via MQTT","description":"Integrate your RGB Genie ZB-5122 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-08-01T20:41:55.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1734970284000},"filePathRelative":"devices/ZB-5122.md"}')}}]);