window.handleAddReservationRequest = async () => {
  document.title = "Meal Share : Add a reservation....";

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
        <h2 class="w3-wide">Meal reservation</h2>
        <p class="w3-opacity"><i>you can register for a meal here</i></p>
        <p class="w3-justify">
          
        </p>
        <div class="w3-padding-small w3-grey" style="width:50%"> 
          <div class="w3-black">
          <h2>Add a Meal</h2>
          
          </div>
          <form action="" class="" name="add-meal">
          <div>
          <label>Meal id</label>
          <input class="w3-input" type="text" id = "mealid" name = "mealid" required></div>
          <div>
          <label>name</label>
          <input class="w3-input" type="text" id = "name" name = "name" required></div>
          <div>
          <label>no_of_guests</label>
          <input class="w3-input" type="number"  min = 1 id = "no_of_guests" name = "no_of_guests" required></div>
          <div>
          <label>phone</label>
          <input class="w3-input" type="number" min = 1 id = "phone" name = "phone" required></div>
          <div>
          <label>created date</label>
          <input class="w3-input" type="date" id = "created_date" name="created_date"  required></div>
        
          <button type="submit"  id = "submit" onClick="validateReservationForm()">Reserve</button>
          </form>
        
        </div>
      </div>
    
      <!-- End Page Content -->
    
    <!-- Footer -->
    <footer
      class="w3-container w3-padding-64 w3-center w3-opacity w3-light-grey w3-xlarge"
    >
      <i class="fa fa-facebook-official w3-hover-opacity"></i>
      <i class="fa fa-instagram w3-hover-opacity"></i>
      <i class="fa fa-snapchat w3-hover-opacity"></i>
      <i class="fa fa-pinterest-p w3-hover-opacity"></i>
      <i class="fa fa-twitter w3-hover-opacity"></i>
      <i class="fa fa-linkedin w3-hover-opacity"></i>
      <p class="w3-medium">
        Powered by
        <a href="https://www.w3schools.com/w3css/default.asp" target="_blank"
          >w3.css</a
        >
      </p>
    </footer>
      
      </body>`;
};
const addReservation = () => {
  // get meal data from the HTML Form
  const mealid = document.getElementById("mealid");
  const name = document.getElementById("name");
  const no_of_guests = document.getElementById("no_of_guests");
  const phone = document.getElementById("phone");
  const created_date = document.getElementById("created_date");

  //push meal data from user into an object
  const newReservation = {
    mealid: mealid.value,
    name: name.value,
    no_of_guests: no_of_guests.value,
    phone: phone.value,
    created_date: created_date.value,
  };

  fetch("/api/reservations", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(newReservation),
  })
    .then((resp) => {
      alert("Reserved a meal succesfully");
    })
    .catch((err) => {
      console.log(err);
    });
};
// get the submit button
//const submit = document.getElementById("submit");
//submit.addEventListener("click", addMeal);

// form validation
function validateReservationForm() {
  const name = document.getElementById("name").value;
  const no_of_guests = document.getElementById("no_of_guests").value;
  const phone = document.getElementById("phone").value;
  if (name == "" || no_of_guests == " " || phone == "") {
    return false;
  }

  addReservation();
}
