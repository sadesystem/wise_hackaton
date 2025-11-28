async function loadGoals() {
    const response = await fetch('../data/jars.json');
    const data = await response.json();
    const container = document.querySelector('.app-frame');

    // Remove the existing static goal cards
    document.querySelectorAll('.goal-card').forEach(card => card.remove());

    data.jars.forEach(jar => {
        const percent = ((jar.current / jar.goal) * 100).toFixed(0);
        const need = (jar.goal - jar.current).toFixed(2);

        const card = document.createElement('section');
        card.classList.add('goal-card');

        card.innerHTML = `
      <div class="goal-header">
        <div class="goal-icon">${jar.icon}</div>
        <div class="goal-info">
          <div class="goal-title">${jar.name}</div>
          <div class="goal-target">Target: ${jar.goal}€</div>
        </div>
        <div class="goal-progress">${percent}%</div>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" style="width:${percent}%"></div>
      </div>
      <div class="goal-stats">
        <span class="saved">Saved: ${jar.current.toFixed(2)}€</span>
        <span class="need">Need: ${need}€</span>
      </div>
    `;

        container.insertBefore(card, document.querySelector('.motivation-card'));
    });
}

loadGoals();
