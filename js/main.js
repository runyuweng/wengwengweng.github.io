function showTips(){
    $('#tips').animate({'opacity':0.5,'top':'10px'},'slow');
    $('#tips').animate({'opacity':0},3000);
}

const cache = window.applicationCache;
cache.addEventListener('downloading', ()=>{
    showTips();
}, false);
console.log(cache);
