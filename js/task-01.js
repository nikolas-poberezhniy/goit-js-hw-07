const categories = document.querySelectorAll('.item');


console.log(`Number of categories: ${categories.length}`);

categories.forEach(element => {
    console.group(`Category:${element.firstElementChild.innerHTML}`);
    console.log(`Elements:${element.lastElementChild.children.length}`);
    console.groupEnd()
});
