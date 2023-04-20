const floof = (function(){
    function init(containerName, text){
        document.querySelector(containerName)
        .innerText = text
    }

    return {
        init
    }
})()
// const $ = (function() {
//     function animate()

//     function concat()

//     function stopAnimation()

// return {
//     animate,
//     concat,
//     stopAnimation
// }
// })()

// $.animate()



// function hello(name){
//     function concat(wordX, wordY) {
//         return wordX + wordY
//     }


//     return concat
// }

// const concat = hello()
// console.log(concat("Hello,", "Lucas"));