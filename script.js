const animatedCards = document.querySelectorAll(".profile-card, .highlight-card");

const revealCards = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealCards.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
  }
);

animatedCards.forEach((card, index) => {
  card.style.transitionDelay = `${index * 80}ms`;
  revealCards.observe(card);
});
