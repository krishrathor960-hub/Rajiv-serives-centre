
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bookingForm");
  const message = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("customerName").value.trim();
      const phone = document.getElementById("customerPhone").value.trim();

      if (!name || !phone) {
        message.textContent = "Please fill in all required fields.";
        return;
      }

      message.textContent =
        "Thank you, " + name +
        "! Your demo booking form has been submitted.";

      form.reset();
    });
  }
});
