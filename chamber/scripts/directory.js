const directory = document.getElementById("directory");

const loadMembers = async () => {
  try {
    const response = await fetch("data/members.json"); // fetch JSON file
    const members = await response.json();

    members.forEach(member => {
      const card = document.createElement("section");
      card.classList.add("company-card");

      const badgeClass = member.membership.toLowerCase();
      const badge = (badgeClass === "gold" || badgeClass === "silver") 
        ? `<span class="${badgeClass}">${member.membership}</span>` 
        : member.membership;

      card.innerHTML = `
        <h2>${member.name}</h2>
        <p><strong>Industry:</strong> ${member.industry}</p>
        <p><strong>Location:</strong> ${member.location}</p>
        <p><strong>Phone:</strong> ${member.phone}</p>
        <p><strong>Email:</strong> ${member.email}</p>
        <p><strong>Address:</strong> ${member.address}</p>
        <p><strong>Membership:</strong> ${badge}</p>
      `;

      directory.appendChild(card);
    });

    // Show last modified date
    document.getElementById("lastModified").textContent = `Last Updated: ${document.lastModified}`;

  } catch (error) {
    console.error("Error loading members:", error);
  }
};

loadMembers();

// Grid/List toggle
document.getElementById("gridBtn").addEventListener("click", () => {
  directory.classList.add("grid");
  directory.classList.remove("list");
});
document.getElementById("listBtn").addEventListener("click", () => {
  directory.classList.add("list");
  directory.classList.remove("grid");
});