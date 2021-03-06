window.handleMealsRequest = async () => {
  document.title = "Meal Share : All meals....";
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
    <!-- Navbar on small screens (remove the onclick attribute if you want the navbar to always show on top of the content when clicking on the links) -->
    <div
      id="navDemo"
      class="w3-bar-block w3-black w3-hide w3-hide-large w3-hide-medium w3-top"
      style="margin-top: 46px"
    >
      <a
        href="meals"
        class="w3-bar-item w3-button w3-padding-large"
        onclick="myFunction()"
        >Meals</a
      >
      <a
        href="reservations"
        class="w3-bar-item w3-button w3-padding-large"
        onclick="myFunction()"
        >Reservations</a
      >
      <a
        href="reviews"
        class="w3-bar-item w3-button w3-padding-large"
        onclick="myFunction()"
        >Reviews</a
      >
      <a
        href="#"
        class="w3-bar-item w3-button w3-padding-large"
        onclick="myFunction()"
        >Contact</a
      >
    </div>

    <!-- Page content -->
    <div class="w3-content" style="max-width: 2000px; margin-top: 46px">
      
      <!-- The Reservation Section -->
      <div
        class="w3-container w3-content w3-center w3-padding-64"
        style="max-width: 800px"
        id="band"
      >
        <h2 class="w3-wide">All Meals</h2>
        <p class="w3-opacity"><i>We love food</i></p>
        <div>Search Meal:<input id="serach-meal"></input></div>
        
        <p class="w3-justify">
          
        </p>
        <div class="w3-row w3-padding-32" id = "all-meals">
          
        </div>
        
      </div>
    
      <!-- End Page Content -->
    </div>

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

      </body>`;
  const allMeals = document.getElementById("all-meals");
  // a callback function to dispaly all the meals
  const displayMealsOnDocument = async (meals) => {
    meals.forEach(async (meal, index) => {
      // fetch available reservations data for the meal
      const availableMealsData = await fetch(
        `/api/meals?availableReservations=true&id=${meal.id}`
      ).then((response) => response.json());

      if (Object.keys(availableMealsData).length === 0) {
        allMeals.innerHTML += `<div class="w3-third w3-border">
            <p>${meal.title}</p>
            <p><b class="w3-text-green">Available </b>${
              meal.max_reservations
            } of ${meal.max_reservations}</p>
            <a href="meals" class="w3-bar-item w3-button" data-navigo><img
              src="../images/food${index + 1}.jpg"
              class="w3-round"
              alt="Random Name"
              style="width: 60%"
            /></a>
            <p><b class="w3-text-red">${meal.price} DKK</b></p>
            <a href="addreservation/${
              meal.id
            }" class="w3-bar-item w3-button" data-navigo>
            <button class="w3-button w3-blue w3-round-xxlarge" id = "book-meal${
              index + 1
            }">Book Meal</button></a>
            <a href="addreview/${
              meal.id
            }" class="w3-bar-item w3-button" data-navigo>            
            <button class="w3-button w3-purple w3-round-xxlarge" id ="rate-meal${
              index + 1
            }">Rate Meal</button></a>

          </div>`;
      } else {
        const resrvedBookings = availableMealsData[0]["sum(number_of_guests)"];

        const availableBookings = meal.max_reservations - resrvedBookings;

        allMeals.innerHTML += `<div class="w3-third w3-border">
            <p>${meal.title}</p>
            <p><b class="w3-text-green">Available </b>${availableBookings} of ${
          meal.max_reservations
        }</p>
            <a href="meals" class="w3-bar-item w3-button" data-navigo><img
              src="../images/food${index + 1}.jpg"
              class="w3-round"
              alt="Random Name"
              style="width: 60%"
            /></a>
            <p><b class="w3-text-red">${meal.price} DKK</b></p>
            <a href="addreservation/${
              meal.id
            }" class="w3-bar-item w3-button" data-navigo>
            <button class="w3-button w3-blue w3-round-xxlarge" id = "book-meal${
              index + 1
            }">Book Meal</button></a>
            <a href="addreview/${
              meal.id
            }" class="w3-bar-item w3-button" data-navigo>            
            <button class="w3-button w3-purple w3-round-xxlarge" id ="rate-meal${
              index + 1
            }">Rate Meal</button></a>

          </div>`;
      }
    });
  };

  // fectch meals from api
  const meals = await fetch("/api/meals").then((response) => response.json());
  displayMealsOnDocument(meals);

  //get input element for search a meal and an event listener on the search filed
  const searchMeal = document.getElementById("serach-meal");
  searchMeal.addEventListener("input", () => {
    const filteredMeal = meals.filter((meal) =>
      meal.title.includes(searchMeal.value)
    );
    allMeals.innerHTML = " ";
    displayMealsOnDocument(filteredMeal);
  });

  // if any links are added to the dom, use this function
  // make the router handle those links.
  router.updatePageLinks();
};
