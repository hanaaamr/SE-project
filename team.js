function accessDetails() {
   // alert("Access button clicked!");
    window.location.href = "/Users/hanaamr/Desktop/free-nonprofit-website-template/testimonial.html";

    // Add your custom functionality here
}
function View2() {
    // alert("Access button clicked!");
     window.location.href = "/Users/hanaamr/Desktop/free-nonprofit-website-template/testimonial.html";
 
     // Add your custom functionality here
 }
 
 function View() {
    // alert("Access button clicked!");
     window.location.href = "/Users/hanaamr/Desktop/free-nonprofit-website-template/test2.html";
 
     // Add your custom functionality here
 }
    var organizations = [
        { name: "Food Bank" },
        { name: "Ahl Masr" },
        { name: "Bedaya" }
    ];
    
    function searchRegOrganizations() {
        var searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
        var namesList = document.getElementById('namesList');
        var notFoundMessage = document.getElementById('notFoundMessage');
        
        // Clear previous results
        namesList.innerHTML = '';
        
        // Filter organizations based on search input
        var filteredOrganizations = organizations.filter(function(organization) {
            return organization.name.toLowerCase().includes(searchInput);
        });
    
        // Display filtered organizations or show not found message
        if (filteredOrganizations.length > 0) {
            filteredOrganizations.forEach(function(organization) {
                var button = document.createElement('button');
                button.className = 'btn btn-primary';
                button.textContent = organization.name;
                button.onclick = function() {
                    // Handle click event for the organization button
                    alert("You clicked on: " + organization.name);
                    // You can add more actions here if needed
                };
                namesList.appendChild(button);
            });
            notFoundMessage.style.display = 'none'; // Hide not found message
        } else {
            notFoundMessage.textContent = "This organization is not found";
            notFoundMessage.style.display = 'block'; // Show not found message
        }
    }

    function redirectToPage(pageUrl) {
        window.location.href = pageUrl;
    }

    function FoodBankD() {
        redirectToPage('foodbank.html');
    }

    function AhlMasrD() {
        redirectToPage('ahlmasr.html'); 
    }

    function BedayaD() {
        redirectToPage('bedaya.html'); 
    }

    function ChangePass(){
    // document.getElementById('changePasswordForm').addEventListener('submit', function(event) {
    //     event.preventDefault();
        
        var currentPassword = document.getElementById('currentPassword').value;
        var newPassword = document.getElementById('newPassword').value;
        var confirmPassword = document.getElementById('confirmPassword').value;
        var messageElement = document.getElementById('message');

    if (newPassword.length < 8) {
        messageElement.textContent = "Password must be at least 8 characters long.";
        console.log("Password must be at least 8 characters long.");
     }else  if (newPassword === currentPassword) {
        messageElement.textContent = "New password should be different from the current password.";
        console.log("New password should be different from the current password.");
    }else if (newPassword !== confirmPassword) {
        messageElement.textContent = "New password and confirm password do not match.";
        console.log("New password and confirm password do not match.");
    } else {
        messageElement.textContent = "Password changed successfully!";
        console.log("Password changed successfully!");
    }
    // });
    }
    
    function Del(id) {
        var element = document.getElementById(id);
        if (element) {
            element.parentNode.removeChild(element);
            alert("Deleted successfully");
        } else {
            console.log("Element with ID " + id + " not found.");
        }
    }

    function goBack() {
        window.history.back();
    }

    function goHome() {
        redirectToPage('Organization.html'); 
    }



function searchRegOrganizations() {
    var category = document.getElementById("categoryFilter").value.toLowerCase();
    var searchInput = document.getElementById("searchInput").value.toLowerCase();

    var teams = document.querySelectorAll(".team-item");
    var found = false; // Flag to check if any item is found
    

    teams.forEach(function(team) {
        var teamName = team.querySelector("h5").textContent.toLowerCase();
        var categoryId = team.id.toLowerCase();

        switch (category) {
            case "governorate":
                if (searchInput === "cairo" && (teamName.includes("bedaya") || teamName.includes("ahl masr") || teamName.includes("food bank")) ){
                    team.style.display = "block";
                    found = true;
                } else {
                    team.style.display = "none";
                }
                break;
            case "organization type":
                if (searchInput === "burn" && teamName.includes("ahl masr")) {
                    team.style.display = "block";
                    found = true;
                } else if (searchInput === "health" && teamName.includes("bedaya")) {
                    team.style.display = "block";
                    found = true;
                } else if ((searchInput === "hunger" || searchInput === "food") && teamName.includes("food bank")) {
                    team.style.display = "block";
                    found = true;
                } else {
                    team.style.display = "none";
                }
                break;
            case "area":
                if (searchInput === "giza" && teamName.includes("bedaya")) {
                    team.style.display = "block";
                    found = true;
                } else if (searchInput === "new cairo" && (teamName.includes("food bank") || teamName.includes("ahl masr"))) {
                    team.style.display = "block";
                    found = true;
                } else {
                    team.style.display = "none";
                }
                break;
            default:
                if ((category === "" || category === categoryId) && (searchInput === "" || teamName.includes(searchInput))) {
                    team.style.display = "block";
                    found = true;
                } else {
                    team.style.display = "none";
                }
        }
    });

    if (!found) {
        alert("Not found");
    }
}
