// Example data structure for the monsters
let monsters = [];

// Nuggets variable to track currency
let nuggets = 0;

// Function to render monsters
function renderMonsters() {
    const monsterSection = document.querySelector('.monsters');
    monsterSection.innerHTML = ''; // Clear any existing content

    if (monsters.length === 0) {
        // If no monsters have been collected, show the placeholder
        const placeholder = document.createElement('div');
        placeholder.className = 'placeholder';
        placeholder.innerHTML = '<p>You haven\'t collected any monsters yet. Keep playing to add monsters to your collection!</p>';
        monsterSection.appendChild(placeholder);
    } else {
        // Render each monster
        monsters.forEach(monster => {
            const monsterCard = document.createElement('div');
            monsterCard.className = 'monster-card';
            monsterCard.innerHTML = `
                <h3>${monster.name}</h3>
                <p>Attack: ${monster.attack}</p>
                <p>Defense: ${monster.defense}</p>
                <p>Brains: ${monster.brains}</p>
                <p>Tricks: ${monster.tricks}</p>
            `;
            monsterSection.appendChild(monsterCard);
        });
    }
}

// Function to render the nuggets
function renderNuggets() {
    const nuggetsAmount = document.getElementById('nuggets-amount');
    nuggetsAmount.innerText = nuggets;
}

// Initial render
renderMonsters();
renderNuggets();

// Example of how you might add nuggets (can be triggered by various game events)
function addNuggets(amount) {
    nuggets += amount;
    renderNuggets();
}

// Example of adding 100 nuggets
addNuggets(100);  // This can be replaced with game logic later

// Theme Button functionality
const changeThemeButton = document.getElementById('change-theme-button');
let isDarkTheme = false;

changeThemeButton.addEventListener('click', () => {
    if (isDarkTheme) {
        document.body.style.backgroundColor = '#f0f0f0';
        document.body.style.color = '#333';
    } else {
        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#f0f0f0';
    }
    isDarkTheme = !isDarkTheme;
});

// Password Button functionality (currently does nothing)
const passwordButton = document.getElementById('password-button');
passwordButton.addEventListener('click', () => {
    // Password-related functionality will go here in the future
});

// Function to render the friends list with dynamic width
function renderFriends() {
    const friendsList = document.getElementById('friends-list');
    friendsList.innerHTML = ''; // Clear existing list

    let maxLength = 0;
    
    friends.forEach(friend => {
        const friendItem = document.createElement('li');
        const friendLink = document.createElement('a');
        friendLink.href = `#${friend.id}`;
        friendLink.textContent = friend.name;
        friendItem.appendChild(friendLink);
        friendsList.appendChild(friendItem);

        // Calculate the maximum length of friend's names
        maxLength = Math.max(maxLength, friend.name.length);
    });

    // Dynamically set the min-width based on the longest name
    const computedWidth = `${maxLength * 10 + 50}px`; // Approx. 10px per character
    document.querySelector('.friends-list').style.minWidth = computedWidth;
}

// Initial render of friends
renderFriends();

// Initial render of missions
renderMissions();

// Example usage:
// When the player wins a battle, you might call:
updateMissionProgress(1, 1);  // Progress for "Win 10 battles"

// When the player adds a friend, you might call:
updateMissionProgress(2, 1);  // Progress for "Add 5 friends"


// Example missions data
let missions = [
    { id: 1, task: "Win 10 battles", progress: 3, total: 10, reward: "50 nuggets" },  // 30% progress
    { id: 2, task: "Add 5 friends", progress: 1, total: 5, reward: "1 rare monster" },  // 20% progress
    { id: 3, task: "Buy 1 monster", progress: 0, total: 1, reward: "20 nuggets" },     // 0% progress
    { id: 4, task: "Complete 3 quests", progress: 2, total: 3, reward: "10 gems" },    // 67% progress
    { id: 5, task: "Collect 100 nuggets", progress: 50, total: 100, reward: "1 super rare monster" }  // 50% progress
];

// Function to render the missions
function renderMissions() {
    const missionsList = document.getElementById('missions-list');
    missionsList.innerHTML = ''; // Clear the list

    missions.forEach(mission => {
        // Calculate the percentage completion
        const completionPercentage = Math.floor((mission.progress / mission.total) * 100);

        // Create the list item for each mission
        const missionItem = document.createElement('li');
        missionItem.innerHTML = `
            <p><strong>${mission.task}</strong>: ${mission.progress}/${mission.total} - Reward: ${mission.reward}</p>
            <div class="progress-container">
                <input type="range" min="0" max="100" value="${completionPercentage}" class="progress-bar" disabled>
                <span>${completionPercentage}% Complete</span>
            </div>
        `;
        missionsList.appendChild(missionItem);
    });
}

// Initial render of missions
renderMissions();

function viewPlayer(playerName) {
    alert(`You clicked on ${playerName}!`);
    // Implement further functionality to view player details
}

const monsterCards = [
    "monster_card_1.png",
    "monster_card_2.png",
    "monster_card_3.png",
    "monster_card_4.png",
    "monster_card_5.png",
];

let currentIndex = 0;
const selectedCard = document.getElementById('selected-card');
const enterButton = document.querySelector('.enter-button');

// Update the card displayed based on current index
function updateCard() {
    selectedCard.src = monsterCards[currentIndex];
}

// Arrow button functionality
document.getElementById('left-arrow').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + monsterCards.length) % monsterCards.length;
    updateCard();
});

document.getElementById('right-arrow').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % monsterCards.length;
    updateCard();
});

// Floor button functionality
document.querySelectorAll('.floor-button').forEach(button => {
    button.addEventListener('click', () => {
        enterButton.disabled = false; // Enable the enter button
    });

// Get the modal
var modal = document.getElementById('create-tribe-modal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Functionality to create a tribe can be added here
document.querySelector('.submit-tribe').addEventListener('click', function() {
    const tribeName = document.getElementById('tribe-name').value;
    const tribeIcon = document.getElementById('tribe-icon').value;
    // Logic to create the tribe (e.g., saving to a database or state) would go here
    modal.style.display = "none"; // Close modal after creation
});

});