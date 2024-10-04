import * as Carousel from "./Carousel.mjs";

// The breed selection input element.
const breedSelect = document.getElementById("breedSelect");
// The information section div element.
const infoDump = document.getElementById("infoDump");
// The progress bar div element.
const progressBar = document.getElementById("progressBar");
// The get favourites button element.
const getFavouritesBtn = document.getElementById("getFavouritesBtn");

// Step 0: Store your API key here for reference and easy access.
const API_KEY =
  "live_U57UdT0LIGEQVVNh03TOYiycAyFIMi9fCmhRuwVCMwCW5ZeGmfg2WUBO4sejPJer";

// Part 2: Tasks
// Create and async function "initialLoad" that does the following:
async function initialLoad() {
//   try {
    //Retrieve a list of breeds from the cat API using fetch().
    const response = await axios ("https://api.thecatapi.com/v1/breeds");
    // const data = await response.json();
  
    console.log(response)
    
    // intercepts requests 
    axios.interceptors.request.use (request =>{
        console.log(`request successfully sent`)

        return response
    })

    // intercepts responses
    axios.interceptors.response.use(request =>{ 
        console.log(`response has been received`)
        
        return response
    })
    const breedSelect = document.getElementById("breedSelect");

    data.forEach((breed) => {
      // Create new <options> for each of these breeds, and append them to breedSelect.
      let newOptions = document.createElement("option");

      // Each option should have a value attribute equal to the id of the breed.
      newOptions.setAttribute("value", breed.id)

      console.log(breed.id);
      // Each option should display text equal to the name of the breed.

      newOptions.textContent = breed.name;
      console.log(breed.name);
      breedSelect.appendChild(newOptions);
      console.log(breed);
    });
//   } catch (error) {
//     console.error("error fetching breeds", error);
//   }
}
// call function // This function should execute immediately.
initialLoad();


// * 2. Create an event handler for breedSelect that does the following:


const breedSelectElement = document.getElementById('breedSelect');
breedSelectElement.addEventListener('change', breedSelectHandler);
async function breedSelectHandler(event) {


  try {
      const breedid = event.target.value;

    console.log(breedid);

    // - Retrieve information on the selected breed from the cat API using fetch().
    const response = await axios(
      `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${breedid}&api_key=${API_KEY}`
    );
    // const breedData = await response.json();

//     - Make sure your request is receiving multiple array items!
//  *  - Check the API documentation if you're only getting a single object.


    if (Array.isArray(breedData) && breedData.length > 0) {
      console.log("Received multiple array items:", breedData);

Carousel.clear()

console.log(breedData)

//  For each object in the response array, create a new element for the carousel.
    breedData.forEach((item) => {
      console.log(breedData)
      const newElement = Carousel.createCarouselItem(
        item.url,
        item.height,
        item.id,
        item.width,
        item.breeds,
      );
  // - Append each of these new elements to the carousel.
      Carousel.appendCarousel(newElement);
      Carousel.start()
      console.log(newElement)
     
    });
    } else {
      console.error("No data found", breedData);
    }
   

  } catch (error) {
    console.error("An error occurred while fetching breed data:", error);
  }

}

//  * - Use the other data you have been given to create an informational section within the infoDump element.
function newInfoDump(newData){
const infoDump = document.getElementById("infoDump");

infoDump.innerHTML = ``;

newData.forEach((item) =>{
  console.log(newData)
  let newSlide = document.createElement(`div`);
  newSlide.classList.add(`carousel-slide`);
  // * - Use the other data you have been given to create an informational section within the infoDump element.
//  *  - Be creative with how you create DOM elements and HTML.
//  *  - Feel free to edit index.html and styles.css to suit your needs, but be careful!
//  *  - Remember that functionality comes first, but user experience and design are important.
//  * - Each new selection should clear, re-populate, and restart the Carousel.
//  * - Add a call to this function to the end of your initialLoad function above to create the initial carousel.
//  */
  newSlide.innerHTML= `<h2>${item.intelligence}</h2>
                       <p>${item.child_friendly}</p>
                        <p>${item.social_needs}</p>
                        <p>${item.experimental}</p>`

;
infoDump.appendChild(slide);
});
Carousel.start();

}
// newInfoDump();