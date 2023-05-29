const moodForm = document.getElementById('moodForm');
const dateInput = document.getElementById('dateInput');
const moodInput = document.getElementById('moodInput');
const moodSummary = document.getElementById('moodSummary');

moodForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const date = dateInput.value;
  const mood = moodInput.value;

  // Create a new mood entry element
  const moodEntry = document.createElement('p');
  moodEntry.textContent = `Date: ${date} | Mood: ${mood}`;

  // Append the mood entry to the mood summary
  moodSummary.appendChild(moodEntry);

  // Reset the form
  dateInput.value = '';
  moodInput.value = '';
});
