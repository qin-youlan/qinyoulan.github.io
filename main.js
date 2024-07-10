import { softwareList } from './data.js';

// 其他代码...

document.addEventListener('DOMContentLoaded', function() {
    // 其他初始化代码...
    
    const searchButton = document.getElementById('search-button');
    const searchBox = document.getElementById('search-box');
    const searchResults = document.getElementById('search-results');

    searchButton.addEventListener('click', function() {
        const keyword = searchBox.value.toLowerCase();
        const filteredSoftwares = softwareList.filter(software =>
            software.name.toLowerCase().includes(keyword) ||
            software.category.toLowerCase().includes(keyword) ||
            software.recommendText.toLowerCase().includes(keyword)
        );

        displaySearchResults(filteredSoftwares);
    });

    function displaySearchResults(softwares) {
        searchResults.innerHTML = ''; // 清空之前的结果
        if (softwares.length === 0) {
            searchResults.innerHTML = '<p>没有找到相关结果。</p>';
            return;
        }
        softwares.forEach(software => {
            const resultItem = document.createElement('div');
            resultItem.className = 'search-result';
            resultItem.innerHTML = `
                <h3>${software.name} - ${software.category}</h3>
                <p>${software.recommendText}</p>
            `;
            searchResults.appendChild(resultItem);
        });
    }
});