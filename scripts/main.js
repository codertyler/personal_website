const contact = document.getElementById("contact_button");
const nav_contact = document.getElementById("nav_contact");

contact.addEventListener("mouseover", () => {
  document.getElementById("drop_down").style.visibility = "visible";

  nav_contact.addEventListener("mouseleave", () => {
    document.getElementById("drop_down").style.visibility = "hidden";
  });
});

document.getElementById("drop_down").style.visibility = "hidden";
