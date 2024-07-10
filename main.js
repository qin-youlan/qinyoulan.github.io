// main.js 文件，用于动态生成磁贴
import { softwareList } from './data.js'; // 导入软件列表数据

document.addEventListener('DOMContentLoaded', function() {
    const softwareListElement = document.getElementById('software-list');

    softwareList.forEach(software => {
        // 创建一个列表项
        const listItem = document.createElement('li');
        listItem.className = 'software-tile';

        // 创建磁贴内容
        const tileContent = `
            <img src="${software.icon}" alt="${software.name}">
            <h3>${software.name}</h3>
            <p>${software.category}</p>
            <a href="${software.url}" target="_blank">了解更多</a>
            <div class="recommend-text">${software.recommendText}</div>
        `;
        listItem.innerHTML = tileContent;
        softwareListElement.appendChild(listItem);
    });
});