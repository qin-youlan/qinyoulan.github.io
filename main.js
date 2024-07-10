import { softwareList } from './data.js';

document.addEventListener('DOMContentLoaded', function() {
    const recommendations = document.getElementById('recommendations');

    // 创建一个映射，以分类名为键，用于存储每个分类的软件数组
    const categoryMap = new Map();

    // 填充映射
    softwareList.forEach(software => {
        if (!categoryMap.has(software.category)) {
            categoryMap.set(software.category, []);
        }
        categoryMap.get(software.category).push(software);
    });

    // 根据分类创建HTML结构
    categoryMap.forEach((softwares, category) => {
        // 创建分类标题
        const categoryTitle = document.createElement('h3');
        categoryTitle.textContent = category;
        recommendations.appendChild(categoryTitle);

        // 创建列表
        const categoryList = document.createElement('ul');
        softwares.forEach(software => {
            const listItem = document.createElement('li');
            listItem.className = 'software-tile';
            listItem.innerHTML = `
                <img src="${software.icon}" alt="${software.name}">
                <h3>${software.name}</h3>
                <p>${software.recommendText}</p>
            `;
            categoryList.appendChild(listItem);
        });
        recommendations.appendChild(categoryList);
    });
});