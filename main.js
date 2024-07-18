// main.js 文件，用于动态生成磁贴
import { softwareList } from './data.js'; // 导入软件列表数据

document.addEventListener('DOMContentLoaded', function () {
    const softwareListElement = document.getElementById('software-list');

    softwareList.forEach(software => {
        const listItem = document.createElement('li');
        listItem.className = 'software-tile';
        const content = `
            <img src="${software.icon}" alt="${software.name}">
            <h3>${software.name}</h3>
            <p>${software.category}</p>
            <p><a href="${software.url}" target="_blank" rel="noopener noreferrer">${software.url}</a></p>
            <div class="recommend-text">${software.recommendText}</div>
        `;
        listItem.innerHTML = content;
        softwareListElement.appendChild(listItem);
    });
});