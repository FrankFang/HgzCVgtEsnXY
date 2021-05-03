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
        <p>想要知道如何加快整个过程，就必须知道整个过程分为哪几个部分：</p>
        <ol>
          <li>用户输入网址，按下回车</li>
          <li>浏览器找到服务器的 IP</li>
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
        <p>接下来我们逐个讲解这些中间过程</p>
      </section>
    </div>
  );
};
