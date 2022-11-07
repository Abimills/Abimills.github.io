const root = document.querySelector('#root');
    let AllOrderFood = [];
// INDIVIDUAL FOOD FETCHER FUNCTION ==================================================================
 export const fetchIndividualFood = (foodName,location,foodImage,foodCategory,
  ingredient1,ingredient2,ingredient3,
  ingredient4,ingredient5,ingredient6) => {

              root.innerHTML = '';
        //  CREATION OF CONTAINERS ----------ALONE & TEXT CONTAINER-------------------

        
   const aloneContainer = document.createElement('div');
  const textContainer = document.createElement('div');
root.appendChild(aloneContainer);
  aloneContainer.classList.add('alone-container')
 textContainer.classList.add('text-container');
 aloneContainer.appendChild(textContainer);
// ------------------------------------------------


// CREATE IMAGE ======
const image = document.createElement('img');
aloneContainer.appendChild(image);
  image.src = `${foodImage}`
// END -------------------------

// CREATE IMAGE =========================================
 const name = document.createElement('h1');
 textContainer.appendChild(name);
  name.textContent = ` Meal: ${foodName}`
  // END ------------------------------------------

  // LOCATION ===================
if(location){
 const country = document.createElement('h1');
  country.textContent = ` Country: ${location}`
 textContainer.appendChild(country);

}
// -----------------------------------------------------

// FOOD CATEGORY ==============================
      if(foodCategory){
const category = document.createElement('h1');
  textContainer.appendChild(category);
 category.textContent = ` Category: ${foodCategory}`
        
      }   
    //  ----------------------------------

    // INGREDIENTS ========================
      if(ingredient1){
    const ingredients= [
  ingredient1,ingredient2,ingredient3,ingredient4,ingredient5,ingredient6
                         
];
const ingreditent = document.createElement('h1');
  textContainer.appendChild(ingreditent);
ingreditent.textContent = `
 Ingredients:
  ${ingredients[0]},
${ingredients[1]},
${ingredients[2]},
${ingredients[3]},
${ingredients[4]},
${ingredients[5]},

` }                   
// ----------------------------------------------------
                          
                    
            

  // CREATION OF ORDER BUTTON ====================================
   const orderBtn = document.createElement('button');
  textContainer.appendChild(orderBtn);
 orderBtn.classList.add('order-btn-one')
orderBtn.textContent = `Order Now`
orderBtn.addEventListener('click',() => {
AllOrderFood.push(foodName)
alert(`You added  ${foodName} to your List`)
alert(`Food Ordered:  ${AllOrderFood.map(item => item)}`)
}
)
// ------------END OF ORDER BTN ----------------------
      }

// ------------------------------------------------------------------------------------------END OF INDIV FETCHER ----------



// HOME FUNCTION BEGINNING =================================================================
    export const  homeFunc = () => {
      
        root.innerHTML = '';

        // CREATED HOME CONTAINER ====================
        const homeContainer = document.createElement('div');
        const darkDiv = document.createElement('div');
        const input = document.createElement('input');
        const h2 = document.createElement('h2');
        const p = document.createElement('p');


        
        input.setAttribute('placeholder','search your appetite');
        homeContainer.classList.add('home-container');
        darkDiv.classList.add('dark-div');
        input.classList.add('input');
        h2.classList.add('appetite-text');
        p.classList.add('p-text');
        
        h2.textContent = 'AB restaurant Order in advance';
        p.textContent = `We are a restaurant located in the beautiful city of Utrecht and
        this website is aimed for the user to order in advance before they reach our restaurant
        So they can have their food by the time they are here. You can search your choice of food and order
        see you soon............
        
        `;
        input.value = '';
        const foodContainer = document.createElement('div');
        foodContainer.classList.add('food-container')
        darkDiv.appendChild(foodContainer);
        foodContainer.appendChild(h2);
        foodContainer.appendChild(p);
        // END OF HOME CONTAINER -------------------------------------------------------------



     
        
        // START OF THE SEARCH  ==========================================
        const fetchAppetite = (item) => {
fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`)
.then(res => 
 res.json())
 .then(data => {
 foodContainer.innerHTML = '';
                    
 data.meals.map(food => {
 // CREATION OF ELEMENTS ========================================================= 
 const h1 = document.createElement('h1');
   const btn = document.createElement('button');
 const image = document.createElement('img');
  const indvContainer = document.createElement('div');
 const orderContainer = document.createElement('div');
 
 indvContainer.classList.add('indiv-container')
 indvContainer.addEventListener('click',()=> fetchIndividualFood(food.strMeal,food.strArea,
  food.strMealThumb,food.strCategory, food.strIngredient1, food.strIngredient2,
  food.strIngredient3, food.strIngredient4,
  food.strIngredient5, food.strIngredient6,))
  
  orderContainer.classList.add('order-container')
  h1.textContent =food.strMeal;
   btn.textContent ='Order';
   
   image.src = `${food.strMealThumb}`
   
   indvContainer.appendChild(image);
   indvContainer.appendChild(orderContainer);
   orderContainer.appendChild(h1);
  orderContainer.appendChild(btn);
   foodContainer.appendChild(indvContainer);
  })
})
.catch(error => alert(error))
}
// ----------------------------------------------------

input.addEventListener('keydown',() => fetchAppetite(input.value));


homeContainer.appendChild(darkDiv);
darkDiv.appendChild(input);
root.appendChild(homeContainer);

    }

    // END OF HOME FUNCTION ------------------------------------------------------------------