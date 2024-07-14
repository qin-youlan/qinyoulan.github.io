// main.js 文件，用于动态生成磁贴并添加搜索功能

import { softwareList } from './data.js'; // 导入软件列表数据

// 创建一个函数用于生成软件磁贴
function createSoftwareTile(software) {
    const listItem = document.createElement('li');
    listItem.className = 'software-tile';
    const content = `
        <img src="${software.icon}" alt="${software.name} icon">
        <h3>${software.name}</h3>
        <p>${software.category}</p>
        <p class="recommend-text">${software.recommendText}</p>
    `;
    listItem.innerHTML = content;
    return listItem; // 返回创建的磁贴元素
}

document.addEventListener('DOMContentLoaded', function () {
    const softwareListElement = document.getElementById('software-list');
    const searchBox = document.getElementById('search-box');
    const searchButton = document.getElementById('search-button');

    // 初始显示所有推荐
    showAllRecommendations();

    // 为搜索按钮添加点击事件
    searchButton.addEventListener('click', function () {
        const keyword = searchBox.value.trim().toLowerCase();
        if (keyword === '') {
            // 如果搜索框为空，则显示所有推荐
            showAllRecommendations();
        } else {
            // 如果有搜索词，过滤并显示相关推荐
            showFilteredRecommendations(keyword);
        }
    });
});

function showAllRecommendations() {
    // 清空当前列表
    softwareListElement.innerHTML = '';
    // 遍历软件列表并创建磁贴
    softwareList.forEach(software => {
        const tile = createSoftwareTile(software);
        softwareListElement.appendChild(tile);
    });
}

function showFilteredRecommendations(keyword) {
    // 清空当前列表
    softwareListElement.innerHTML = '';
    // 过滤软件列表并显示匹配的磁贴
    softwareList.forEach(software => {
        const isMatch =
            software.name.toLowerCase().includes(keyword) ||
            software.category.toLowerCase().includes(keyword) ||
            software.recommendText.toLowerCase().includes(keyword);
        if (isMatch) {
            const tile = createSoftwareTile(software);
            softwareListElement.appendChild(tile);
        }
    });
}