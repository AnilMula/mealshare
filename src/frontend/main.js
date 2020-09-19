var root = document.location.origin;
var router = new Navigo(root);
function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}
// when no route specified it assumes the base route: "/"
router.on("/", window.handleHomeRequest).resolve();
router.on("/home", window.handleHomeRequest).resolve();
router.on("/meals", window.handleMealsRequest).resolve();
router.on("/reservations", window.handleReservationsRequest).resolve();
router.on("/reviews", window.handleReviewsRequest).resolve();
router.on("/meal/:id", window.handleMealRequest).resolve();
router.on("/addmeal", window.handleAddMealRequest).resolve();
router.on("/addreservation", window.handleAddReservationRequest).resolve();
router.on("/addreview", window.handleAddReviewRequest).resolve();
