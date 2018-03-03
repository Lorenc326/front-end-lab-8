let root = document.getElementById('root');

function defaultPage(root){
    // refresh
    window.location.hash = '';
    root.innerHTML = '';

    let container = document.createElement('div');
    container.classList.add('thumbnails');
    root.appendChild(container);
    let header = document.createElement('h1');
    header.innerHTML = "Most popular tanks";
    container.appendChild(header);
    let list = document.createElement('div');
    container.appendChild(list);
    list.classList.add('tanksList');

    for(let i = 0; i < tanks.length; i++){
        let item = document.createElement('div');
        item.classList.add('item');
        item.innerHTML = `<img class="tank" src="${tanks[i].preview}">
<img class="flag" src="${tanks[i].country_image}">
<span class="model" title="${tanks[i].model}">${tanks[i].model}</span>`
        item.onclick = function(){
            location.hash = tanks[i].model;
        };
        list.appendChild(item);
    }
}

function detailsPage(root, tank) {
    root.innerHTML = `<div class="tank-details">
    <h1><img class="detailsFlag" src="${tank.country_image}"/> ${tank.model.toUpperCase()} (level ${tank.level})</h1>
    <div class="preview">
        <div class="heading">Preview</div>
        <img class="detailsTank" src="${tank.preview}">
        <span id="backLink">Back to list view</span>
    </div>
    <div class="characteristic">
        <div class="heading">Characteristic</div>
        <table>
            <tr>
                <th> damage </th>
                <th> ${tank.details.damage} </th>
            </tr>
            <tr>
                <th> breoning </th> 
                <th> ${tank.details.breoning} </th> 
            </tr> 
            <tr> 
                <th> attack speed </th> 
                <th> ${tank.details.attack_speed} </th> 
            </tr> 
            <tr> 
                <th> time of targeting </th> 
                <th> ${tank.details.time_of_targeting} </th> 
            </tr> 
            <tr> 
                <th> ammunition </th> 
                <th> ${tank.details.ammunition} </th> 
            </tr> 
        </table> 
    </div> 
</div>`;
    let link = document.getElementById('backLink');
    link.onclick = function () {
        defaultPage(root);
    }
}

window.onhashchange = function () {
    for(let i = 0; i < tanks.length; i++){
        if(location.hash.slice(1)===tanks[i].model){
            detailsPage(root, tanks[i]);
            return;
        }
    }
}

defaultPage(root);