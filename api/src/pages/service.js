

   export const servicesFunc = () => {
     
const root = document.querySelector('#root');
root.innerHTML = '';
// ====================================== CREATED  PARENT ELEMENT FOR ALL(SERVICE-DIV)=========================
 const serviceContainer = document.createElement('div');
serviceContainer.classList.add('service-container')
root.appendChild(serviceContainer);
// ----------------------------------------------------------------------

// ==========================================CREATED LOCATION DIV & ITS CHILDREN=================
const location = document.createElement('div');
const locationHeader = document.createElement('h1');
locationHeader.textContent = 'Location: Utrecht'
location.appendChild(locationHeader)

const phone = document.createElement('h1');
phone.textContent = 'Phone-Number : +454903482323'
location.appendChild(phone)

const ourEmail = document.createElement('h1');
ourEmail.textContent = 'Email: Abrestarant@ab.com'
location.appendChild(ourEmail)


location.classList.add('location')
serviceContainer.appendChild(location)
// ----------------------------------------------------------------------------------------------------------------------------------


// =================================CREATED CONTACT CONTAINER DIV & ITS ELEMENTS ------------------------------
const contactContainer = document.createElement('div');
contactContainer.classList.add('contact-container')
serviceContainer.appendChild(contactContainer);


const name = document.createElement('input');
name.setAttribute('placeholder', 'Full Name' )
contactContainer.appendChild(name);


const email = document.createElement('input'); 
email.setAttribute('placeholder', 'Email' )
contactContainer.appendChild(email);


const textarea = document.createElement('textarea');
textarea.setAttribute('placeholder', 'Message' )
contactContainer.appendChild(textarea);

const sendBtn = document.createElement('button');
sendBtn.textContent = 'Send' ;
sendBtn.classList.add('send-btn');
contactContainer.appendChild(sendBtn);
// ----------------------------------------------------------------------------------------------------------------------
}