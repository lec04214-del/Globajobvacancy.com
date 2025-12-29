document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".job-card button");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      alert("Application feature coming soon!");
    });
  });
});
const jobs = [
  {
    title: "Frontend Developer",
    company: "RemoteTech",
    location: "Remote"
  },
  {
    title: "Digital Marketing Specialist",
    company: "Growth Africa",
    location: "Nigeria"
  },
  {
    title: "Data Analyst",
    company: "Insight Corp",
    location: "Global"
  }
];

const jobContainer = document.getElementById("jobs");

jobs.forEach(job => {
  const card = document.createElement("div");
  card.className = "job-card";

  card.innerHTML = `
    <h3>${job.title}</h3>
    <p>Company: ${job.company}</p>
    <p>Location: ${job.location}</p>
    <button>Apply Now</button>
  `;

  jobContainer.appendChild(card);
});
