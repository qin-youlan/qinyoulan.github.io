// main.js 文件，用于动态生成磁贴
import { softwareList } from './data.js'; // 导入软件列表数据

document.addEventListener('DOMContentLoaded', function() {
    const softwareListElement = document.getElementById('software-list');

    softwareList.forEach(software => {
        const listItem = document.createElement('li');
        listItem.className = 'software-tile';
        const content = `
            <a href="${software.url}" target="_blank">
                <img src="${software.icon}" alt="${software.name}">
                <h3>${software.name}</h3>
                <p>${software.category}</p>
                <span class="recommend-text">${software.recommendText}</span>
            </a>
        `;
        listItem.innerHTML = content;
        softwareListElement.appendChild(listItem);
    });
    // 添加搜索框和按钮的事件监听器
    const searchButton = document.getElementById('search-button');
    const searchBox = document.getElementById('search-box');
    const softwareListElement = document.getElementById('software-list');

    searchButton.addEventListener('click', function () {
        const keyword = searchBox.value.trim().toLowerCase();
        if (keyword === '') {
            // 如果搜索框为空，则显示所有推荐
            showAllRecommendations();
        } else {
            // 否则，过滤并显示相关推荐
            showFilteredRecommendations(keyword);
        }
    });

    // 初始显示所有推荐
    showAllRecommendations();
});

function showAllRecommendations() {
    // 清空当前列表
    softwareListElement.innerHTML = '';
    // 重新生成所有推荐
    softwareList.forEach(software => {
        createSoftwareTile(software);
    });
}

function showFilteredRecommendations(keyword) {
    // 清空当前列表
    softwareListElement.innerHTML = '';
    // 过滤并显示包含关键词的推荐
    softwareList.filter(software =>
        software.name.toLowerCase().includes(keyword) ||
        software.category.toLowerCase().includes(keyword) ||
        software.recommendText.toLowerCase().includes(keyword)
    ).forEach(filteredSoftware => {
        createSoftwareTile(filteredSoftware);
    });
}

function createSoftwareTile(software) {
    // 与之前相同的创建磁贴的逻辑
    // ...
}