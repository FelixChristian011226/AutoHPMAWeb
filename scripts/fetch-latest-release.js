const fs = require('fs');
const path = require('path');

const latestUrl = 'https://api.github.com/repos/FelixChristian011226/AutoHPMA/releases/latest';
const releasesUrl = 'https://api.github.com/repos/FelixChristian011226/AutoHPMA/releases?per_page=5';

// 获取最新 release
fetch(latestUrl)
  .then(res => res.json())
  .then(data => {
    // 处理 release body，去除首行 # AutoHPMA vX.X.X
    let body = data.body.replace(/^# .+\n?/, '').trim();
    // 包裹 info 块
    const infoBlock = `::: info\n${body}\n:::`;
    // 写入 parts 目录下的 md 文件
    const partsDir = path.join('docs', 'src', 'download', 'parts');
    if (!fs.existsSync(partsDir)) fs.mkdirSync(partsDir, { recursive: true });
    fs.writeFileSync(path.join(partsDir, 'latest-release-body.md'), infoBlock, 'utf-8');

    // 生成主页面内容，下载链接在前，更新内容用 @include 引用
    const md = `
---
outline: 2
---

# 最新版本下载

> [!NOTE]
> 页面更新可能延迟，请以 [GitHub Release](${data.html_url}) 页面为准。

## 最新版本
- **版本号：** ${data.tag_name}  
- **发布日期：** ${data.published_at.split('T')[0]}
- **下载链接：** ${data.assets.map(asset => `[${asset.name}](${asset.browser_download_url})`).join('\n')}

## 更新内容
<!--@include: ./parts/latest-release-body.md-->
    `.trim();

    fs.writeFileSync('docs/src/download/latest.md', md, 'utf-8');
    console.log('最新 release 信息已写入 docs/src/download/latest.md 和 parts/latest-release-body.md');
  })
  .catch(err => {
    console.error('获取最新 release 信息失败：', err);
  });

// 获取最近5个 release，生成 details 块，写入 parts，再在 history.md 中引用
fetch(releasesUrl)
  .then(res => res.json())
  .then(releases => {
    let detailsBlocks = '';
    for (const r of releases) {
      // 去除首行 # AutoHPMA vX.X.X
      let body = r.body.replace(/^# .+\n?/, '').trim();
      detailsBlocks += `::: details ${r.tag_name}\n${body}\n:::\n\n`;
    }
    const partsDir = path.join('docs', 'src', 'download', 'parts');
    if (!fs.existsSync(partsDir)) fs.mkdirSync(partsDir, { recursive: true });
    fs.writeFileSync(path.join(partsDir, 'history-details.md'), detailsBlocks, 'utf-8');

    const md = `
---
outline: 2
---

# 历史版本下载

> [!WARNING]
> 为保证软件的稳定性和安全性，建议使用最新版本。历史版本仅供参考。

## 最近历史版本

<!--@include: ./parts/history-details.md-->

## 版本变更说明

每个版本的详细更新内容请参见对应 Release 页面下的 Release Notes。

如需查看更多历史版本，请访问下方链接：

[点击前往 GitHub Releases 页面查看所有历史版本](https://github.com/FelixChristian011226/AutoHPMA/releases)

    `.trim();
    fs.writeFileSync('docs/src/download/history.md', md, 'utf-8');
    console.log('最近 5 个 release details 块已写入 parts/history-details.md，并在 history.md 中引用');
  })
  .catch(err => {
    console.error('获取历史 release 信息失败：', err);
  }); 