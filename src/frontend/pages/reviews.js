window.handleReviewsRequest = () => {
  document.title = "Meal Share : All reviews";
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
        <h2 class="w3-wide">All Reviews</h2>
        <p class="w3-opacity"><i>We love food</i></p>
        <p class="w3-justify">
          
        </p>
        <div class="w3-row w3-padding-32" id = "all-reviews">
          
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

  // a callback function to dispaly all the reviews
  const displayReviewsOnDocument = (reviews) => {
    const body = document.getElementById("all-reviews");

    reviews.forEach((review, index) => {
      body.innerHTML += `<div class="w3-third w3-border">
            <p>${review.meal_id}</p>
            <p>rating: ${review.stars} </p>
            <img
              src="../images/food${index + 1}.jpg"
              class="w3-round"
              alt="Random Name"
              style="width: 60%"
            />
            <p>comments: ${review.title} </p>

          </div>`;
    });
  };
  fetch("/api/reviews")
    .then((response) => response.json())
    .then((reviews) => {
      displayReviewsOnDocument(
        reviews.sort((a, b) => {
          return a.meal_id - b.meal_id;
        })
      );
    });

  // if any links are added to the dom, use this function
  // make the router handle those links.
  router.updatePageLinks();
};
