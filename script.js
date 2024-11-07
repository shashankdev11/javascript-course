function getUserInfo(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const userCard = document.getElementById("user-card");

  // Fetch data from GitHub API
  fetch(`https://api.github.com/users/${username}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("User not found");
      }
      return response.json();
    })
    .then((data) => {
      // Populate user card with avatar and followers
      userCard.innerHTML = `
              <img src="${data.avatar_url}" alt="${data.login}'s avatar">
              <h2>${data.login}</h2>
              <p>Followers: ${data.followers}</p>
          `;
      userCard.style.display = "block";
    })
    .catch((error) => {
      userCard.innerHTML = `<p style="color: red;">${error.message}</p>`;
      userCard.style.display = "block";
    });
}
document.getElementById("username").addEventListener("keyup", function (event) {
  console.log(event);
  if (event.key === "Enter") {
    getUserInfo();
  }
});
