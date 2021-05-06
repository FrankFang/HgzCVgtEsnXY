import React from 'react';
import imageSpeed from '../images/speed.jpg';
import './Home.scss';

export const Home = () => {
  return (
    <div className="Home">
      <h1>方应杭的Web性能优化教程</h1>
      <section>
        <h2>概述</h2>
        <p>Web性能优化（Web Performance Optimization）除了能提高用户体验，还能为公司省钱。</p>
        <p>其主要目的是让用户更快地被服务。</p>
        <p><img src={imageSpeed} alt="speed"/></p>
        <p>但作为技术人员，我们需要用一些技术指标来衡量性能的优劣。目前主流的性能指标有：</p>
        <ol>
          <li>内容出现时间（First Contentful Paint）</li>
          <li>页面可交互时间（Time to Interactive）</li>
          <li>DOM内容加载时间（DOM content loaded）</li>
          <li>页面加载时间（page loaded）</li>
        </ol>
        <p>理想情况下，前端开发者如果能收集所有这些数据，就能更有效地了解页面加载情况。所以现代浏览器提供了 window.performance 对象，
          包含了这些有用的信息。但实际工作中，存在一些过时的浏览器，无法提供这些信息，因此前端开发者还需要自己想办法用 JS 来收集这些信息，
          我们会在后面的章节讨论这些收集技巧。</p>
        <h3>分而治之</h3>
        <p>想要知道如何加快整个过程，就必须知道从「用户输入网址」到「页面完全展示」这个过程分为哪几个部分：</p>
        <ol>
          <li>浏览器查询服务器的 IP</li>
          <li>浏览器与服务器建立 TCP 连接</li>
          <li>浏览器发送 HTTP 请求</li>
          <li>服务器接收到 HTTP 请求</li>
          <li>服务器运行处理程序</li>
          <li>服务器返回 HTTP 响应</li>
          <li>浏览器下载 HTTP 响应</li>
          <li>浏览器解析 HTML</li>
          <li>浏览器解析 CSS</li>
          <li>浏览器解析 JS</li>
          <li>浏览器渲染页面</li>
          <li>等等……</li>
        </ol>
        <p>这样一来，我们就可以把一个大任务「分化」成多个小任务。那么每个小任务又该如何解决呢？我们会在后面的章节逐个讨论。</p>
        <h3>信息的传输</h3>
        <p>假设 t 为信息从 A 到 B 所花费的时间，t<sub>a</sub> 为离开 A 处时的出关时间，t<sub>b</sub> 为进入 B 地时的入关时间，t<sub>m</sub> 为路途中消耗的时间，则有</p>
        <p>t = t<sub>a</sub> + t<sub>m</sub> + t<sub>b</sub></p>
        <p>其中</p>
        <p>t<sub>m</sub> = bytes / speed</p>
        <p>其中 bytes 为信息的字节数，speed 为信息的传输速度（字节/秒）</p>
        <p>因此，想要降低 t，其实就是降低 t<sub>a</sub>、t<sub>b</sub>、bytes，或提高 speed</p>
        <p>这个公式有助于我们分析如何优化信息传递效率，我们后面也会用到。</p>
      </section>
      <section>
        <h2>分而治之</h2>
        <p>我们来分析一下从「用户输入网址」到「页面完全展示」的主要阶段，以及如何加快这些阶段。</p>
        <h3>DNS查询</h3>
        <p>假设用户输入的是 fangyinghang.com，那么浏览器首先需要向 ISP（信息服务提供商，即电信、联通或移动）提供的网络询问对应的 IP 是多少。
        这一过程叫做 DNS 查询。ISP 会预置一些服务器专门用于响应 DNS 查询，这些服务器内部存储了所有域名与其 IP 的对应关系，由于域名与 IP 的
          对应关系不是恒定不变的，所以这些服务器还要负责更新数据。用户不需要手动设置 DNS 服务器的 IP，因为 ISP 已经自动给每个用户分配了对应的
          DNS 服务器。当然用户也可以手动指定使用哪一台 DNS 服务器，著名的 114.114.114.114 就是国内通用的免费 DNS 服务器。</p>


      </section>

    </div>
  );
};
