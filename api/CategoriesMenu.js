
// root.appendChild(img);
import {fetchIndividualFood} from './home.js';

const urlList = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
const urlArea = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
const urlName= 'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata';
const urlFirstLetter= 'https://www.themealdb.com/api/json/v1/1/search.php?f=a';
const urlId= 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772';
const urlRandom= 'https://www.themealdb.com/api/json/v1/1/random.php';
const urlCategories= 'https://www.themealdb.com/api/json/v1/1/categories.php';
const urlIngredients= 'https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast';
const urlFilterByCategory= 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';
const urlFilterByCountry= 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';

const dataFetcher = async(url) => {
    try{

        const res = await fetch(url);
        const data = await res.json();
        
        return data;

    }
    catch(error) {
        alert(error)
    }


}
const FetchCategoryOne = (item) =>{
dataFetcher(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${item}`).then(data => {
      const body = document.querySelector('body');
const root = document.querySelector('#root');
root.innerHTML = '';
const foodContainer = document.createElement('div');
foodContainer.classList.add('category-container')
root.appendChild(foodContainer)
// console.log(data)
 data.meals.map(food => {
                        
                        const h1 = document.createElement('h1');
                        const btn = document.createElement('button');
                        const image = document.createElement('img');
                        const indvContainer = document.createElement('div');
                        const orderContainer = document.createElement('div');
                        indvContainer.classList.add('indiv-container')
                        orderContainer.classList.add('order-container')
                        console.log(food)
    indvContainer.addEventListener('click',()=> fetchIndividualFood(food.strMeal,food.strArea,food.strMealThumb,food.strCategory, food.strIngredient1, food.strIngredient2,
                           food.strIngredient3, food.strIngredient4,
                           food.strIngredient5, food.strIngredient6,))
                        h1.textContent =food.strMeal;
                        btn.textContent ='Order';
                        // btn.addEventListener('click', () =>  alert(`You Ordered ${food.strMeal} in advance `))
                        image.src = `${food.strMealThumb}`
                        indvContainer.appendChild(image);
                        indvContainer.appendChild(orderContainer);
                        orderContainer.appendChild(h1);
                        orderContainer.appendChild(btn);
                        foodContainer.appendChild(indvContainer);
                        console.log(food)
                    })
})
}
const displayCategory = () => {
    const body = document.querySelector('body');
const root = document.querySelector('#root');
root.innerHTML = '';
const CategoryDiv = document.createElement('div');
CategoryDiv.classList.add('category-container')
// const h1 = document.createElement('h1');
// const img = document.createElement('img');
root.appendChild(CategoryDiv);
    dataFetcher(urlCategories).then(data =>{
        data.categories.map(food => {
         
            const {
                strCategory:name,
                strCategoryThumb:image,
                strCategoryDescription:description ,
                strArea:location,
            } = food;
            const myCategory = document.createElement('div');
            myCategory.classList.add(`container-one`,`${name}`)
            
            myCategory.addEventListener('click', () => FetchCategoryOne(myCategory.classList[1]))
           const h1 = document.createElement('h1');
const img = document.createElement('img');
CategoryDiv.appendChild(myCategory);
// root.appendChild(p);
myCategory.appendChild(img);
myCategory.appendChild(h1);
h1.textContent = name;
img.src = `${image}`
// p.textContent = description;



        })
     

        })
        
      
    
   
}
export  {displayCategory};