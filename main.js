// main.js
// 引入data.js中的softwareList数组
import { softwareList } from './data.js';

// 获取承载磁贴的容器和搜索框
const container = document.getElementById('softwareTiles');
const searchBox = document.querySelector('.search-box');

// 函数：创建单个磁贴的HTML元素
function createTile(software) {
    const tile = document.createElement('div');
    tile.className = 'software-tile';

    const icon = document.createElement('img');
    icon.src = software.icon;
    icon.alt = software.name;
    icon.className = 'tile-icon';

    const title = document.createElement('h2');
    title.textContent = software.name;
    title.className = 'tile-title';

    const description = document.createElement('p');
    description.textContent = software.recommendText;
    description.className = 'tile-description';

    const link = document.createElement('a');
    link.href = software.url;
    link.target = '_blank';
    link.className = 'tile-link';
    link.setAttribute('aria-label', software.recommendText);

    link.appendChild(icon);
    link.appendChild(title);
    link.appendChild(description);

    tile.appendChild(link);

    return tile;
}

// 函数：根据搜索框的值过滤并重新渲染磁贴
function filterAndRenderTiles() {
    const searchText = searchBox.value.toLowerCase();
    const filteredList = searchText
        ? softwareList.filter(software =>
            software.name.toLowerCase().includes(searchText) ||
            software.category.toLowerCase().includes(searchText) ||
            software.recommendText.toLowerCase().includes(searchText)
        )
        : softwareList;

    // 清空当前的磁贴容器
    container.innerHTML = '';

    // 渲染过滤后的磁贴
    filteredList.forEach(software => {
        container.appendChild(createTile(software));
    });
}

// 事件监听器：当搜索框内容改变时，过滤并重新渲染磁贴
searchBox.addEventListener('input', filterAndRenderTiles);

// 初始渲染所有磁贴
filterAndRenderTiles();