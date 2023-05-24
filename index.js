const getActivityBtn = document.getElementById("get-activity")
getActivityBtn.addEventListener("click", function() {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
      document.getElementById("title").textContent = "😺 HappyCat 😺"
      document.getElementById("activity").textContent = data.activity
      document.body.classList.add("happy-bg")
      getActivityBtn.classList.add("happy-btn")
    })
})