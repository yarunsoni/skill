document.getElementById('skill-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const skill = document.getElementById('skill').value;
    const need = document.getElementById('need').value;
    const contact = document.getElementById('contact').value;

    if (name && skill && need && contact) {
        // Add the skill to the list on the webpage
        addSkillToList(name, skill, need, contact);

        // Clear form fields
        document.getElementById('name').value = '';
        document.getElementById('skill').value = '';
        document.getElementById('need').value = '';
        document.getElementById('contact').value = '';
    }
});

function addSkillToList(name, skill, need, contact) {
    const skillsList = document.getElementById('skills');
    const li = document.createElement('li');
    li.innerHTML = `<strong>${name}</strong> offers <em>${skill}</em>, needs <em>${need}</em>, and can be contacted at <em>${contact}</em>`;
    skillsList.appendChild(li);
}
