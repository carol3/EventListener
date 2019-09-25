//Get asses to Dom element
//addEventListener.
const header = document.querySelector('header');
const blueButton = document.getElementById('color-button-blue');
const brownButton = document.getElementById('color-button-brown');
const greenButton = document.getElementById('color-button-green');
const noneButton = document.getElementById('color-button-none');
//add a post.
const addPostButton = document.getElementById('add-post');
const removePostButton = document.getElementById('remove-post');
const articleSection = document.querySelector('section');
//click event listeners
//when the blue buttomn is cliked the header background changes to blue
blueButton.addEventListener('click', () => {
    header.classList.remove('brown-background', 'green-background');
    header.classList.add('blue-backgound', 'text-white');
   
});
//when the brown button is clicked the header changes to brown.
brownButton.addEventListener('click', () => {
    header.classList.remove('blue-background', 'green-background');
    header.classList.add('brown-backgound', 'text-white');
   
});

greenButton.addEventListener('click', () => {
    header.classList.remove('blue-background', 'brown-background');
    header.classList.add('green-backgound', 'text-white');
   
});
//the none button will remove the colors to the default settings
noneButton.addEventListener('click', () => {
    header.classList.remove('blue-background', 'brown-background', 'green-background', 'text-white');
    
   
});

addPostButton.addEventListener('click', () => {
  const newPost = createNewPost();
    articleSection.appendChild(newPost);
});
//remove a post but only if there is a post added.
//if there ismore than one it will remove the last child.
removePostButton.addEventListener('click', () => {
 const articleCount = articleSection.childElementCount; 
    if(articleCount > 1){
        articleSection.removeChild(articleSection.children[articleCount - 1]);
    }
});





//page functions
function createNewPost(){
    let newArticle = document.createElement('article');
    let newHeading = document.createElement('h5');
    let newParagraph = document.createElement('p');
    
    
    newHeading.textContent = 'Another blog post';
    newParagraph.textContent='Closer to the shore is the Mombasa Marine Park where you can snorkel in the company of beautiful fish or simply watch them through the glass bottom boat.The dive center owns its own shipwreck , the MV Dania sunk in deeper waters where you can dive to the gost ship which has been colonized by the coral life.'
    
newArticle.appendChild(newHeading);
newArticle.appendChild(newParagraph);
    
newArticle.classList.add('list-group-item');
    return newArticle;
}