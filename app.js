var leaderboard = [];

fetch("HNGi7 Central Leaderboard.csv")
.then(response => response.text())
.then(users => {
    //For CSV
    const usersArray = users.split("\n");
    const leaderboard = usersArray.map(user => user.split(",")).slice(1).sort((a,b) => b[3] - a[3]);

    //For JSON
    //leaderboard = users.sort((a,b) => b["TOTAL POINTS"] - a["TOTAL POINTS"]);

    var str = `<ol><li>
        <span>Rank</span><span></span><span>Username</span><span>Score</span><span></span>
    </li>`;
    leaderboard.map(user => {
        str += `<li id="user${leaderboard.indexOf(user)}">
            <span>${leaderboard.indexOf(user)+1}</span>
            <span><img src="images/3.jpg" alt="dp" class="dp"></span>
            <span>${user[1]}</span>
            <span>${user[3]} <i class="fas fa-coins"></i></span>
            <span><i class="fas"></i></span>
        </li>`;
    })
    str += "</ol>";

    document.getElementById("leaderboard").innerHTML = str;

    document.querySelector("#user0 > span:nth-of-type(5) i").className += " fa-trophy";
    document.querySelector("#user1 > span:nth-of-type(5) i").className += " fa-medal";
    document.querySelector("#user2 > span:nth-of-type(5) i").className += " fa-award";
});