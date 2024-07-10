// 引入data.js中的softwareList数组
import { softwareList } from './data.js';

// 获取承载磁贴的容器
const container = document.getElementById('softwareTiles');

// 遍历softwareList数组，为每个软件生成一个磁贴
softwareList.forEach(software => {
    // 创建磁贴的容器元素
    const tile = document.createElement('div');
    tile.className = 'software-tile'; // 可以根据需要添加CSS类

    // 创建并设置磁贴中的icon
    const icon = document.createElement('img');
    icon.src = software.icon;
    icon.alt = software.name;
    icon.className = 'tile-icon'; // 可以根据需要添加CSS类

    // 创建磁贴的标题
    const title = document.createElement('h2');
    title.textContent = software.name;
    title.className = 'tile-title'; // 可以根据需要添加CSS类

    // 创建磁贴的描述文本
    const description = document.createElement('p');
    description.textContent = software.recommendText;
    description.className = 'tile-description'; // 可以根据需要添加CSS类

    // 创建磁贴的链接
    const link = document.createElement('a');
    link.href = software.url;
    link.target = '_blank'; // 打开链接在新标签页
    link.className = 'tile-link'; // 可以根据需要添加CSS类

    // 将icon、title、description添加到链接中
    link.appendChild(icon);
    link.appendChild(title);
    link.appendChild(description);

    // 将链接添加到磁贴容器中
    tile.appendChild(link);

    // 将磁贴添加到页面的容器中
    container.appendChild(tile);
});