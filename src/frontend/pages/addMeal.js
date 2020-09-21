window.handleAddMealRequest = async () => {
  document.title = "Meal Share : Add a meal....";
  document.body.innerHTML = `<body>
    <!-- Navbar -->
    <div class="w3-top">
      <div class="w3-bar w3-black w3-card">
        <a
          class="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right"
          href="javascript:void(0)"
          onclick="myFunction()"
          title="Toggle Navigation Menu"
          ><i class="fa fa-bars"></i
        ></a>
        <a href="home" class="w3-bar-item w3-button w3-padding-large">Home</a>
        <a href="meals" class="w3-bar-item w3-button w3-padding-large w3-hide-small" data-navigo>Meals</a>
        <a
          href="reservations"
          class="w3-bar-item w3-button w3-padding-large w3-hide-small"
          data-navigo
          >Reservations</a
        >
        <a
          href="reviews"
          class="w3-bar-item w3-button w3-padding-large w3-hide-small"
          data-navigo
          >Reviews</a
        >
        <a
          href="home#contact"
          class="w3-bar-item w3-button w3-padding-large w3-hide-small"
          >Contact</a
        >
       
        <a
          href="javascript:void(0)"
          class="w3-padding-large w3-hover-red w3-hide-small w3-right"
          ><i class="fa fa-search"></i
        ></a>
      </div>
    </div>
    <!-- Page content -->
    <div class="w3-content" style="max-width: 2000px; margin-top: 46px">
      
      <!-- The Reservation Section -->
      <div
        class="w3-container w3-content w3-center w3-padding-64"
        style="max-width: 800px"
        id="band"
      >
        <h2 class="w3-wide">Meal add section</h2>
        <p class="w3-opacity"><i>you can register your meal here</i></p>
        <p class="w3-justify">
          
        </p>
        <div class="w3-padding-small w3-grey" style="width:50%"> 
          <div class="w3-black">
          <h2>Add a Meal</h2>
          </div>
          <form action="" class="" name="add-meal">
          <div>
          <label>Meal Name</label>
          <input class="w3-input" type="text" id = "title" name = "title" required></div>
          <div>
          <label>A small description about the meal </label>
          <input class="w3-input" type="text" id = "description" name = "description"></div>
          <div>
          <label>Address</label>
          <input class="w3-input" type="text" id = "location" name = "location" required></div>
          <div>
          <label>date and time</label>
          <input class="w3-input" type="datetime-local" id = "when" name="when"  required></div>
          <div>
          <label>max number of persons</label>
          <input class="w3-input" type="number"  min = 1 id = "max_reservations" name = "max_reservations" required></div>
          <div>
          <label>price</label>
          <input class="w3-input" type="number" min = 1 id = "price" name = "price" required></div>
          <div>
          <label>created date</label>
          <input class="w3-input" type="date" id = "created_date" name="created_date"  required></div>
        
          <button type="submit"  id = "submit" onClick="validateForm()">Add Meal</button>
          </form>
        
        </div>
      </div>
    
      <!-- End Page Content -->
    
    
    <!-- Footer -->
    <footer
      class="w3-container w3-padding-64 w3-center w3-opacity w3-light-grey w3-xlarge"
    >
      <a href="https://www.facebook.com/anilreddy.mula" target="_blank"
          ><i class="fa fa-facebook-official w3-hover-opacity"></i></a
        >
        <a href="https://www.instagram.com/anil_mula/" target="_blank"
          ><i class="fa fa-instagram w3-hover-opacity"></i></a>
        <a href="https://www.linkedin.com/in/anil-kumar-56729475/" target="_blank"
          ><i class="fa fa-linkedin w3-hover-opacity"></i></a>
        <a href="https://twitter.com/" target="_blank"
          ><i class="fa fa-twitter w3-hover-opacity"></i></a>
        <a href="https://github.com/AnilMula" target="_blank"
          ><i class="fa fa-github w3-hover-opacity"></i></a>          
        <a href="https://www.google.com/search?q=anil+kumar+mula&oq=&aqs=chrome.0.69i59l8.690007370j0j15&sourceid=chrome&ie=UTF-8"
          ><i class="fa fa-google w3-hover-opacity"></i></a>
            
      <p class="w3-medium">
        Developed by
        <a href="https://anilmula.github.io/" target="_blank"
          >ANIL KUMAR MULA</a
        >
      </p>
    </footer>
      <script src="/addMealFormValidation.js"></script>
      </body>`;
  router.updatePageLinks();
};
const addMeal = () => {
  // get meal data from the HTML Form

  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const location = document.getElementById("location");
  const when = document.getElementById("when");
  const max_reservations = document.getElementById("max_reservations");
  const price = document.getElementById("price");
  const created_date = document.getElementById("created_date");

  //push meal data from user into an object
  const newMeal = {
    title: title.value,
    description: description.value,
    location: location.value,
    when: when.value,
    max_reservations: max_reservations.value,
    price: price.value,
    created_date: created_date.value,
  };
  console.log(newMeal);
  console.log(created_date);
  fetch("/api/meals", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(newMeal),
  })
    .then((resp) => {
      console.log(resp);
    })
    .catch((err) => {
      console.log(err);
    });
};
// get the submit button
//const submit = document.getElementById("submit");
//submit.addEventListener("click", addMeal);

// form validation
function validateForm() {
  const title = document.getElementById("title").value;
  const location = document.getElementById("location").value;
  const when = document.getElementById("when").value;
  const max_reservations = document.getElementById("max_reservations").value;
  const price = document.getElementById("price").value;
  if (
    title == "" ||
    location == " " ||
    when == "" ||
    max_reservations == "" ||
    price == ""
  ) {
    return false;
  }

  addMeal();
}
