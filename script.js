const nav = document.querySelector("#nav");
document.querySelector("#menuBtn").addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll('a[data-service]').forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector("#serviceSelect").value = link.dataset.service;
  });
});

const phone = "15550123456"; // Replace with the real business WhatsApp number.
const whatsapp = document.querySelector("#whatsapp");
whatsapp.href = `https://wa.me/${phone}?text=${encodeURIComponent("Hi Apex, I would like to request a quote.")}`;

document.querySelector("#quoteForm").addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(event.target);
  const status = document.querySelector("#formStatus");
  status.textContent = `Thanks ${data.get("name")} — your ${data.get("service")} request has been received.`;
  status.className = "form-status success";
  event.target.reset();
});