document.getElementById("addGoalBtn").addEventListener("click", () => {
    const name = prompt("Enter goal name:");
    if (!name) return;

    const goal = parseFloat(prompt("Enter target amount (€):"));
    if (isNaN(goal)) return alert("Please enter a valid number!");

    const current = 0;
    const percent = 0;
    const need = goal.toFixed(2);

    const container = document.querySelector(".app-frame");

    const card = document.createElement("section");
    card.classList.add("goal-card");
    card.style.cursor = "pointer";

    card.innerHTML = `
        <div class="goal-header">
            <div class="goal-icon">${name.toLowerCase().includes("art") ? "🎨" : "🚲"}</div>
            <div class="goal-info">
                <div class="goal-title">${name}</div>
                <div class="goal-target">Target: ${goal}€</div>
            </div>
            <div class="goal-progress">${percent}%</div>
        </div>
        <div class="progress-bar">
            <div class="progress-fill" style="width:${percent}%"></div>
        </div>
        <div class="goal-stats">
            <span class="saved">Saved: ${current.toFixed(2)}€</span>
            <span class="need">Need: ${need}€</span>
        </div>
    `;

    card.addEventListener("click", () => {
        alert(`You clicked on ${name}!`);
        // Or redirect to goal details page
    });

    // Insert before motivation card
    const motivationCard = document.querySelector(".motivation-card");
    container.insertBefore(card, motivationCard);
});
