
import {displayCategory} from './CategoriesMenu.js';
import {aboutUs} from './about.js';
import {homeFunc} from './home.js';
import {servicesFunc} from './service.js';


const navbar = () => {
    const everything = document.querySelector('#everything');
    const Navbar = document.createElement('div');            
    const image = document.createElement('img');  
    image.src = `https://www.pngitem.com/pimgs/m/28-280434_ab-mockups-hd-png-download.png`;
image.classList.add('logo')
    
    Navbar.classList.add('nav');
    everything.appendChild(Navbar);
    Navbar.appendChild(image);
    
       
    const home = document.createElement('h3');
    home.textContent = 'Home'
    Navbar.appendChild(home);

      const categories = document.createElement('h3');
                categories.textContent = 'Menu'
                Navbar.appendChild(categories);
                  const services = document.createElement('h3');
                services.textContent = 'Contact Us'
                Navbar.appendChild(services);

                const about = document.createElement('h3');
                about.textContent = 'About'
                 Navbar.appendChild(about);
              
              
                const sign = document.createElement('h3');
                sign.textContent = 'Sign In'
                Navbar.appendChild(sign);
                
                
                
                categories.addEventListener('click',displayCategory )
                home.addEventListener('click',homeFunc )
                about.addEventListener('click',aboutUs )
                services.addEventListener('click',servicesFunc)
          
            
                
               
       
    




}




export {navbar}