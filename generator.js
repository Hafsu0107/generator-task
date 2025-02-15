function fetchUser() {
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => {
      const user = data.results[0];
      document.getElementById("user-image");
      document.getElementById(
        "user-name"
      ).textContent = `${user.name.first} ${user.name.last}`;
      document.getElementById("user-email").textContent = user.email;
    })
    .catch((error) => console.error("Error fetching user:", error));
}
