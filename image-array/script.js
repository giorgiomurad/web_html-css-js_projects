const images = ['images/sunflower.png', 'images/lotus.png', 'images/hipple.png', 'images/blume.png', 'images/rose.png'];
const imgList = document.getElementById('img-list');


// Appending image sources to the array
for(const image of images) {
  const listItem = document.createElement('li');
  const imgElement = document.createElement('img');
  
  imgElement.src = image;
  listItem.appendChild(imgElement);
  imgList.appendChild(listItem);
}


// Showing and Hiding Images
const listStyle = imgList.style;
const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  if (btn.innerText === 'Show Images'){
    listStyle.display = 'block';
  
    btn.classList.add('clicked');
    btn.innerText = 'Hide Images';
  }
  else {
    listStyle.display = 'none';
    
    btn.classList.remove('clicked');
    btn.innerText = 'Show Images'
  }
})