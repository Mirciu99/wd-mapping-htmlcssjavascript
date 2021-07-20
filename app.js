let data = [
    {
        name:'Mirciu',
        age:'21'
    },
    {
        name:'Andrei',
        age:'29'
    },
    {
        name:'Alex',
        age:'18'
    },
    {
        name:'Bogdan',
        age:'17'
    },
    {
        name:'George',
        age:'21'
    }
];


const info = document.querySelector('#info');

let details = data.map(function(item){
    return '<div>' + item.name + ' ' + 'is ' + item.age + ' years old' +'</div>';
});

info.innerHTML = details.join('\n');