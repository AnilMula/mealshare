window.handleAddReviewRequest = async (params) => {
  document.title = "Meal Share : Rate a meal....";

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
        <a href="/home" class="w3-bar-item w3-button w3-padding-large">Home</a>
        <a href="/meals" class="w3-bar-item w3-button w3-padding-large w3-hide-small" data-navigo>Meals</a>
        <a
          href="/reservations"
          class="w3-bar-item w3-button w3-padding-large w3-hide-small"
          data-navigo
          >Reservations</a
        >
        <a
          href="/reviews"
          class="w3-bar-item w3-button w3-padding-large w3-hide-small"
          data-navigo
          >Reviews</a
        >
        <a
          href="/home#contact"
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
      
      <!-- The Rating Section -->
      <div
        class="w3-container w3-content w3-center w3-padding-64"
        style="max-width: 800px"
        id="band"
      >
        <h2 class="w3-wide ">Rate this meal</h2>
        <p class="w3-opacity"><i>please rate our meals</i></p>
        <p class="w3-justify" id="selected-meal-for-review">
          
        </p>
        <div class="w3-padding-small w3-purple" style="width:50%"> 
          <div class="w3-black">
          <h2 class = "w3-yellow w3-round-large">Rate this Meal</h2>
          
          </div>
          <form action="" class="" >
          
          
          <div>
          <label>Comments</label>
          <input class="w3-input" type="text" id = "comments" name = "comments" required></div>
          <div>
          <label>Rating(0-5)</label>
          <input class="w3-input" type="number"  min = 0 max = 5 id = "rating" name = "rating" required></div>
          <div>
          <label>created date</label>
          <input class="w3-input" type="date" id = "created_date" name="created_date"  required></div>
        
          <button type="submit"  class="w3-yellow w3-round-large" id = "submit" onClick="validateReviewForm()">Rate</button>
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
      
      </body>`;

  // a callback function to display selected meal on the review page
  const displaySelectedMealOnReviewDocument = (meal) => {
    const mealDateTime = new Date(Date.parse(meal[0].when));
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const formattedMealDateTime = `${mealDateTime.getDate()},${
      months[mealDateTime.getMonth()]
    } ${mealDateTime.getFullYear()} at ${mealDateTime.getHours()}:${mealDateTime.getMinutes()}`;

    const selectedMealInformation = document.getElementById(
      "selected-meal-for-review"
    );
    selectedMealInformation.innerHTML += `<div class="w3-text-pink"><b class="w3-text-purple">Meal name: </b>${meal[0].title}</div>
    <div class="w3-text-pink"> <b class="w3-text-purple">Price: </b>${meal[0].price} DKK</div>
    <div class="w3-text-pink"><b class="w3-text-purple">Location: </b>${meal[0].location}</div>
    <div class="w3-text-pink"><b class="w3-text-purple">Date and time: </b>${formattedMealDateTime}</div>`;
  };
  //fetch meal data for the selected meal and display meal information on the review page
  fetch(`/api/meals/${params.id}`)
    .then((response) => response.json())
    .then((meal) => displaySelectedMealOnReviewDocument(meal));
  const addReview = () => {
    // get meal data from the HTML Form

    const comments = document.getElementById("comments");
    const rating = document.getElementById("rating");
    const created_date = document.getElementById("created_date");

    //push review data from user into an object
    const newReview = {
      meal_id: parseInt(params.id),
      comments: comments.value,
      rating: rating.value,
      created_date: created_date.value,
    };

    fetch("/api/reviews", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(newReview),
    })
      .then((resp) => {
        alert("Rated a meal succesfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // form validation
  function validateReviewForm() {
    const comments = document.getElementById("comments").value;
    const rating = document.getElementById("rating").value;
    if (comments == "" || rating == " ") {
      return false;
    }

    addReview();
  }
  // get the submit button
  const submit = document.getElementById("submit");
  submit.addEventListener("click", validateReviewForm);
  router.updatePageLinks();
};
