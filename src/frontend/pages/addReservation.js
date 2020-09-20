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
        <p id="success-reserve-meal"></p>
        <p class="w3-justify">
          
        </p>
        <div class="w3-padding-small w3-blue" style="width:50%"> 
          <div class="w3-pink w3-round-large">
          <h2>Reserve Meal</h2>
          
          </div>
          <form action="" class="" name="">
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
        
          <button type="submit" class="w3-pink w3-round-large" id = "submit" onClick="validateReservationForm()">Reserve</button>
          </form>
        
        </div>
      </div>
    
      <!-- End Page Content -->
    
        <!-- Footer -->
    <footer
      class="w3-container w3-padding-64 w3-center w3-opacity w3-light-grey w3-xlarge"
    >
      <a href="https://www.facebook.com/anilreddy.mula" target="_blank"
          ><i class="fa fa-facebook-official w3-hover-opacity"></a
        ></i>
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
      
      </body>`;
};
const addReservation = async () => {
  // get book meal(reservation) data from the HTML Form
  const mealid = document.getElementById("mealid");
  const name = document.getElementById("name");
  const no_of_guests = document.getElementById("no_of_guests");
  const phone = document.getElementById("phone");
  const created_date = document.getElementById("created_date");

  //push book meal data from user into an object
  const newReservation = {
    mealid: mealid.value,
    name: name.value,
    no_of_guests: no_of_guests.value,
    phone: phone.value,
    created_date: created_date.value,
  };
  try {
    const resp = await fetch("/api/reservations", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(newReservation),
    });

    const successMessage = document.getElementById("success-reserve-meal");
    successMessage.innerHTML = `${resp}`;
  } catch (err) {
    console.log(err);
  }
};
// get the submit button
//const submit = document.getElementById("submit");
//submit.addEventListener("click", addMeal);

// form validation validateReservationForm()
function validateReservationForm() {
  const name = document.getElementById("name").value;
  const no_of_guests = document.getElementById("no_of_guests").value;
  const phone = document.getElementById("phone").value;
  if (name == "" || no_of_guests == " " || phone == "") {
    return false;
  }

  addReservation();
}
