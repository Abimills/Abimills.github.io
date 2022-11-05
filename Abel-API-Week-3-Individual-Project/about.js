
  const body = document.querySelector('body');
    const root = document.querySelector('#root');
    
    
    const aboutUs = () => {
        root.innerHTML = '';
        const about = document.createElement('div');  
        const image = document.createElement('img');  
        const h1 = document.createElement('h1'); 
        const p = document.createElement('p'); 
        const rightSideDiv= document.createElement('div');  

        about.classList.add('about')
        h1.textContent= 'About Us'
        p.textContent= `
        We are a Company reponsible to geyou order your food in advance 
        We are a Company reponsible to geyou order your food in advance 
        We are a Company reponsible to geyou order your food in advance 
        We are a Company reponsible to geyou order your food in advance 
        We are a Company reponsible to geyou order your food in advance 
        We are a Company reponsible to geyou order your food in advance 
        We are a Company reponsible to geyou order your food in advance 
        
        `
        image.src = `https://image.similarpng.com/very-thumbnail/2021/09/AB-abstract-logo-design-on-transparent-background-PNG.png`
        rightSideDiv.classList.add('right-side-div')
        about.appendChild(rightSideDiv);
        root.appendChild(about);
        rightSideDiv.appendChild(h1);
        rightSideDiv.appendChild(p);
        rightSideDiv.appendChild(image);



}
export {aboutUs}