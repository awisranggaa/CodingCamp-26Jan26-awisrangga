/* GREETING POPUP */
window.addEventListener("load", () => {
  const savedName = localStorage.getItem("visitorName");
  const modal = document.getElementById("greetingModal");
  const greeting = document.getElementById("greeting");

  if (savedName) {
    greeting.innerText = `Hi ${savedName}, Welcome`;
    modal.style.display = "none";
  } else {
    modal.style.display = "flex";
  }
});

function submitGreeting() {
  const input = document.getElementById("popupName");
  const name = input.value.trim() || "Guest";
  localStorage.setItem("visitorName", name);
  document.getElementById("greeting").innerText =
    `Hi ${name}, Welcome To Website`;
  document.getElementById("greetingModal").style.display = "none";
}

/* FORM VALIDATION */
document.getElementById("contactForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const message = document.getElementById("messageText");

  let valid = true;
  [name,email,phone,message].forEach(f => {
    f.style.borderColor = "#ccc";
    if (!f.value.trim()) {
      f.style.borderColor = "red";
      valid = false;
    }
  });

  if (!valid) return;

  document.getElementById("result").innerHTML = `
    <p><strong>Name:</strong> ${name.value}</p>
    <p><strong>Email:</strong> ${email.value}</p>
    <p><strong>Phone:</strong> ${phone.value}</p>
    <p><strong>Message:</strong> ${message.value}</p>
  `;

  this.reset();
});
