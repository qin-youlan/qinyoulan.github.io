// main.js 文件，用于动态生成磁贴并添加搜索功能

import { softwareList } from './data.js'; // 导入软件列表数据

function createSoftwareTile(software) {
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
    return listItem;
}

document.addEventListener('DOMContentLoaded', function () {
    const softwareListElement = document.getElementById('software-list');
    const searchBox = document.getElementById('search-box');
    const searchButton = document.getElementById('search-button');

    function showAllRecommendations() {
        softwareListElement.innerHTML = '';
        softwareList.forEach(software => {
            const tile = createSoftwareTile(software);
            softwareListElement.appendChild(tile);
        });
    }

    searchButton.addEventListener('click', function () {
        const keyword = searchBox.value.trim().toLowerCase();
        softwareListElement.innerHTML = '';
        if (keyword === '') {
            showAllRecommendations();
        } else {
            softwareList.forEach(software => {
                if (
                    software.name.toLowerCase().includes(keyword) ||
                    software.category.toLowerCase().includes(keyword) ||
                    software.recommendText.toLowerCase().includes(keyword)
                ) {
                    const tile = createSoftwareTile(software);
                    softwareListElement.appendChild(tile);
                }
            });
        }
    });

    showAllRecommendations(); // Initial display of all recommendations
});