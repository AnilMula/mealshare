// jquery form validation
$(function () {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration" name="add-meal"
  $("form[name='add-meal']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      title :{ required:true,minlength=5},
location:{required:true,},
when:"required",
max_reservations:"required",
price:"required",

    },
    // Specify validation error messages
    messages: {
      title: "Please enter a title",
      location: "Please enter a valid location",
      max_reservations: {
        required: "Please provide a valid number",
        minlength: "there must be atleast 1 person",
      },
      when: "Please provide a valid date and time",
      price: "please enter a valid price in DKK"
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function (form) {
      form.submit();
    },
  });
});
 