window.onscroll = function showNavigation(){
    let navigation = document.querySelector('.navigation');

    if (window.pageYOffset > 726){
        navigation.classList.add('navigation_fixed');
    } else{
        navigation.classList.remove('navigation_fixed')
    }
}

/*document.addEventListener('DOMContentLoaded', function () {
    const numSnowflakes = 30;

    for (let i = 0; i < numSnowflakes; i++) {
        createSnowflake();
    }

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 2 + 2.5}s`;
        document.querySelector('.snowflakes').appendChild(snowflake);
    }
});*/
