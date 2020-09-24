window.handleHomeRequest = () => {
  document.title = "Meal Share@ anil kumar mula";

  // document.body.innerHTML = `<h1>Home</h1>
  // <a href="meals" data-navigo>Meals</a>
  // asd
  // <a href="meal/1" data-navigo>meal/1</a>
  // `;
  // document.body.innerHTML = `
  // <h1>Meals</h1>`;
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
        <a href="" class="w3-bar-item w3-button w3-padding-large">Home</a>
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
          href="#contact"
          class="w3-bar-item w3-button w3-padding-large w3-hide-small"
          >Contact</a
        >
        <div class="w3-dropdown-hover w3-hide-small">
          <button class="w3-padding-large w3-button" title="More">
            MORE <i class="fa fa-caret-down"></i>
          </button>
          <div class="w3-dropdown-content w3-bar-block w3-card-4">
            <a href="addmeal" class="w3-bar-item w3-button" data-navigo>Add a Meal</a>
            
          </div>
        </div>
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
        href="addmeal"
        class="w3-bar-item w3-button w3-padding-large"
        onclick="myFunction()"
        >Add Meal</a
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
        <h2 class="w3-wide">Home cooked meals</h2>
        <p class="w3-opacity"><i>We love food</i></p>
        <p class="w3-justify">
          
We find the best home cooks around the world so you can immerse yourself in meaningful food experiences and cultural traditions passed down through generations. Connect with local culture through food. Visit a grandmother in her kitchen in India and learn how to make crisp dosas or spend time on a farm in Northern Thailand and grind curry pastes, and experience how local people live.

Choose from three unique experiences with our hosts, or pick a combination:
        </p>
        <div class="w3-row w3-padding-32">
          <div class="w3-third">
            
            <img
              src="../images/food9.jpg"
              class="w3-round w3-margin-bottom"
              alt="Random Name"
              style="width: 60%"
            />
          </div>
          <div class="w3-third">
            
            <img
              src="../images/food6.jpg"
              class="w3-round w3-margin-bottom"
              alt="Random Name"
              style="width: 60%"
            />
          </div>
          <div class="w3-third">
            
            <img
              src="../images/food3.jpg"
              class="w3-round"
              alt="Random Name"
              style="width: 60%"
            />
          </div>
        </div>
      </div>

      

      <!-- Ticket Modal -->
      <div id="ticketModal" class="w3-modal">
        <div class="w3-modal-content w3-animate-top w3-card-4">
          <header class="w3-container w3-teal w3-center w3-padding-32">
            <span
              onclick="document.getElementById('ticketModal').style.display='none'"
              class="w3-button w3-teal w3-xlarge w3-display-topright"
              >×</span
            >
            <h2 class="w3-wide">
              <i class="fa fa-suitcase w3-margin-right"></i>Tickets
            </h2>
          </header>
          <div class="w3-container">
            <p>
              <label
                ><i class="fa fa-shopping-cart"></i> Tickets, $15 per
                person</label
              >
            </p>
            <input
              class="w3-input w3-border"
              type="text"
              placeholder="How many?"
            />
            <p>
              <label><i class="fa fa-user"></i> Send To</label>
            </p>
            <input
              class="w3-input w3-border"
              type="text"
              placeholder="Enter email"
            />
            <button
              class="w3-button w3-block w3-teal w3-padding-16 w3-section w3-right"
            >
              PAY <i class="fa fa-check"></i>
            </button>
            <button
              class="w3-button w3-red w3-section"
              onclick="document.getElementById('ticketModal').style.display='none'"
            >
              Close <i class="fa fa-remove"></i>
            </button>
            <p class="w3-right">
              Need <a href="#" class="w3-text-blue">help?</a>
            </p>
          </div>
        </div>
      </div>

      <!-- The Contact Section -->
      <div
        class="w3-container w3-content w3-padding-64"
        style="max-width: 800px"
        id="contact"
      >
        <h2 class="w3-wide w3-center">CONTACT</h2>
        <p class="w3-opacity w3-center"><i>Fan? Drop a note!</i></p>
        <div class="w3-row w3-padding-32">
          <div class="w3-col m6 w3-large w3-margin-bottom">
            <i class="fa fa-map-marker" style="width: 30px"></i> Brøndby,DK<br />
            <i class="fa fa-phone" style="width: 30px"></i> Phone: +45 71339479<br />
            <i class="fa fa-envelope" style="width: 30px"> </i> Email:
            anilreddymula@gmail.com<br />
          </div>
          <div class="w3-col m6">
            <form action="/action_page.php" target="_blank">
              <div class="w3-row-padding" style="margin: 0 -16px 8px -16px">
                <div class="w3-half">
                  <input
                    class="w3-input w3-border"
                    type="text"
                    placeholder="Name"
                    required
                    name="Name"
                  />
                </div>
                <div class="w3-half">
                  <input
                    class="w3-input w3-border"
                    type="text"
                    placeholder="Email"
                    required
                    name="Email"
                  />
                </div>
              </div>
              <input
                class="w3-input w3-border"
                type="text"
                placeholder="Message"
                required
                name="Message"
              />
              <button
                class="w3-button w3-black w3-section w3-right"
                type="submit"
              >
                SEND
              </button>
            </form>
          </div>
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

    <script>
      // Automatic Slideshow - change image every 4 seconds
      var myIndex = 0;
      carousel();

      function carousel() {
        var i;
        var x = document.getElementsByClassName("mySlides");
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";
        }
        myIndex++;
        if (myIndex > x.length) {
          myIndex = 1;
        }
        x[myIndex - 1].style.display = "block";
        setTimeout(carousel, 4000);
      }

      // Used to toggle the menu on small screens when clicking on the menu button
      function myFunction() {
        var x = document.getElementById("navDemo");
        if (x.className.indexOf("w3-show") == -1) {
          x.className += " w3-show";
        } else {
          x.className = x.className.replace(" w3-show", "");
        }
      }

      // When the user clicks anywhere outside of the modal, close it
      var modal = document.getElementById("ticketModal");
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    </script>
  </body>`;
  // if any links are added to the dom, use this function
  // make the router handle those links.
  router.updatePageLinks();
};
