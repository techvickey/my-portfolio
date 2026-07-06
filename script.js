document.addEventListener('DOMContentLoaded', () => {
    // Light Control
    const lightToggle = document.getElementById('light-toggle');
    const body = document.body;
    
    if (lightToggle) {
        lightToggle.addEventListener('click', () => {
            body.classList.toggle('light-off');
            // Change icon from sun to moon or just let the brightness handle it
            // We'll keep the same icon, but toggle the class
        });
    }

    // Role Animation
    const roleText = document.getElementById("role-text");

if (roleText) {

    const roles = [
        "Front-End Developer",
        "Video Editor",
        "UI/UX Designer",
        "Web Developer",
        "Creative Designer"
    ];

    let roleIndex = 0;
    let charIndex = 0;

    function typeEffect() {

        if (charIndex < roles[roleIndex].length) {

            roleText.textContent +=
            roles[roleIndex].charAt(charIndex);

            charIndex++;

            setTimeout(typeEffect, 100);

        } else {

            setTimeout(() => {

                roleText.textContent = "";

                charIndex = 0;

                roleIndex =
                (roleIndex + 1) % roles.length;

                typeEffect();

            }, 2000);

        }
    }

    roleText.textContent = "";

    typeEffect();

    }
});
