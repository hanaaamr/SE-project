///karin
var organizations = [
    { name: "Food Bank" },
    { name: "Ahl Masr" },
    { name: "Bedaya" }
];

  var log22 = "ma";
 var pass = "";
 
// function searchRegOrganizations() {
    //     var searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
    //     var namesList = document.getElementById('namesList');
    //     var notFoundMessage = document.getElementById('notFoundMessage');
    
    //     // Clear previous results
    //     namesList.innerHTML = '';
    
    //     // Filter organizations based on search input
    //     var filteredOrganizations = organizations.filter(function(organization) {
        //         return organization.name.toLowerCase().includes(searchInput);
    //     });

    //     // Display filtered organizations or show not found message
    //     if (filteredOrganizations.length > 0) {
        //         filteredOrganizations.forEach(function(organization) {
            //             var button = document.createElement('button');
            //             button.className = 'btn btn-primary';
            //             button.textContent = organization.name;
            //             button.onclick = function() {
                //                 // Handle click event for the organization button
                //                 alert("You clicked on: " + organization.name);
                //                 // You can add more actions here if needed
            //             };
            //             namesList.appendChild(button);
        //         });
        //         notFoundMessage.style.display = 'none'; // Hide not found message
    //     } else {
        //         notFoundMessage.textContent = "This organization is not found";
        //         notFoundMessage.style.display = 'block'; // Show not found message
    //     }
// }

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







////////hana




function accessDetails() {
// alert("Access button clicked!");
// window.location.href = "/Users/hanaamr/Desktop/free-nonprofit-website-template/testimonial.html";
redirectToPage('testimonial.html');
 // Add your custom functionality here
}
function View2() {
 // alert("Access button clicked!");
 // window.location.href = "/Users/hanaamr/Desktop/free-nonprofit-website-template/testimonial.html";
 redirectToPage('testimonial.html');
  // Add your custom functionality here
}

function View() {
 // alert("Access button clicked!");
//  window.location.href = "/Users/hanaamr/Desktop/free-nonprofit-website-template/test2.html";
//   console.log("Request rejected");
  // Add your custom functionality here
  redirectToPage('Registered_Org.html');

}

function View3() {
 // alert("Access button clicked!");
  window.location.href = "/Users/hanaamr/Desktop/free-nonprofit-website-template/about.html";
//   console.log("Request rejected");
  // Add your custom functionality here
  redirectToPage('about.html');
}

//  function viewpendingD(pageUrl){
//     window.location.href = "file:///Users/hanaamr/Desktop/free-nonprofit-website-template/pendingd.html";




//  }


function viewpendingD() {
 redirectToPage('pendingd.html');
}


function viewpendingDD(){
// window.location.href = "file:///Users/hanaamr/Desktop/free-nonprofit-website-template/test3.html";
redirectToPage('test3.html')

}






function acceptRequest() {
 // Add code to handle accepting the request
 console.log("Request accepted");
}

function rejectRequest() {
 // Add code to handle rejecting the request
 console.log("Request rejected");
}



// Function to open the popup
function openPopup() {
 document.getElementById("popup").style.display = "block";
}

// Function to close the popup
function closePopup() {
 document.getElementById("popup").style.display = "none";
}

function Del2(id,id2) {
 var element = document.getElementById(id);
 if (element) {
     element.parentNode.removeChild(element);
     if (id2==='acceptButtonn')
     alert("accepted successfully");
 else
 alert("Rejected successfully");

 } else {
     console.log("Element with ID " + id + " not found.");
 }
}



function downloadPDF() {
 var url = "/Users/hanaamr/Downloads";
 var xhr = new XMLHttpRequest();
 xhr.open("GET", url, true);
 xhr.responseType = "blob";
 xhr.onload = function() {
     var blob = xhr.response;
     var link = document.createElement("a");
     link.href = window.URL.createObjectURL(blob);
     link.download = "ca_tut5.pdf";
     link.click();
 };
 xhr.send();
}

function greetUser() {
 alert("Hello! Welcome to our website.");
}

function downloadFile() {
 var anchor = document.createElement('a');
 anchor.href = 'https://github.com/adobe/pdfjs-dist/raw/master/examples/learning/helloworld.pdf';
 anchor.download = 'helloworld.pdf';
 anchor.click();
}
function downloadLocalFile() {
 // var anchor = document.createElement('a');
 // anchor.href = 'file:///Users/hanaamr/Downloads/Charities_How_important_is_performance_to_donors.pdf'; // Replace with the path to your local file
 // anchor.download = 'NETWORKS'; // Specify the filename for the downloaded file
 // anchor.click();/
 alert("File Downloaded Successfully");
}
function goBack() {
 window.history.back();
}

function goHome() {
 redirectToPage('Home.html'); 
}
function change(){
 redirectToPage('change_pass.html')

}
function Login(){
 redirectToPage('Login.html')
}
function log2() {
log22= document.getElementById('name').value;
 pass = document.getElementById('password').value;
 
 if (log22 === "hana" && pass === "hana") {

     alert('correct username or password');
     redirectToPage('team.html');
     
    
 } 
 else
 if(log22==="sarah" && pass === "sarah"){
     alert('correct username or password');
     redirectToPage('donorhome1.html');
     

 }
 else 
 if(log22==="ma" && pass === "ma"){
    redirectToPage('donorhome.html');

 }

 else
 if(log22==="menna" && pass === "menna"){
     redirectToPage('organization.html');



 }
 else 
 if(log22==="karin" && pass === "karin"){
    redirectToPage('donorhome2.html')

 }
 else {
     alert('Invalid username or password');
     return false; 
 }
}
function Oreg(){

 redirectToPage( 'register.html');
}


function Dreg(){


 redirectToPage( 'registrationform.html');
}







function submitDonation2() {
// Display a confirmation message
alert("Donation pickup is done successfully");
}
function submitDonation3() {
// Display a confirmation message
alert("Donation Drop-off is done successfully");
}
function updatemessage() {
// Display a confirmation message
alert("updating the profile is done successfully");
}
function alerttt() {
// Display a confirmation message
console.log("Button clicked!");
alert("Your infomation has been updated successfully");
}
function calculateETA() {
const pickupTime = document.querySelector('input[name="pickupTime"]:checked');
if (pickupTime) {
    const etaDisplay = document.getElementById('eta');
    let etaMinutes;

    switch (pickupTime.value) {
        case 'morning':
            etaMinutes = 30;
            break;
        case 'afternoon':
            etaMinutes = 45;
            break;
        case 'evening':
            etaMinutes = 60;
            break;
        default:
            etaMinutes = 0;
    }

    const now = new Date();
    const etaTime = new Date(now.getTime() + etaMinutes * 60000);
    const etaString = etaTime.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    etaDisplay.textContent = `Estimated Time of Arrival (ETA): ${etaString}`;
}
}
function orgHome(){
    redirectToPage('organization.html');

}
function submitDonation() {
const pickupTime = document.querySelector('input[name="pickupTime"]:checked');
if (!pickupTime) {
    alert('Please select a pickup time slot before submitting.');
    return false;
}
// Simulate form submission success
alert('Donation submitted successfully!');
return true;
}
// function searchRegOrganizations() {
// var category = document.getElementById("categoryFilter").value.toLowerCase();
// var searchInput = document.getElementById("searchInput").value.toLowerCase();
// }
function submitDonation() {
// Display a confirmation message
alert("Donation Application is sent successfully! \nYour donation application is currently pending.");
redirectToPage("donorhome.html")

}
function deleteacc() {
var result = confirm("Are you sure you want to delete your account?");
if (result) {
    window.location.href = "registrationform.html";
} else {
    alert("Action canceled. Your account was not deleted.");
}
}
//SEARCH AND FILTER
document.addEventListener("DOMContentLoaded", function() {
const categoryFilter = document.getElementById('categoryFilter');
const searchInput = document.getElementById('searchInput');
const rows = document.querySelectorAll('table tbody tr');

// Event listener for category filter
categoryFilter.addEventListener('change', function() {
    const selectedCategory = categoryFilter.value.toLowerCase();
    const searchTerm = searchInput.value.trim().toLowerCase();
    filterTable(selectedCategory, searchTerm);
});

// Event listener for search input
searchInput.addEventListener('input', function() {
    const selectedCategory = categoryFilter.value.toLowerCase();
    const searchTerm = searchInput.value.trim().toLowerCase();
    filterTable(selectedCategory, searchTerm);
});

// Function to filter table rows by category and search term
function filterTable(category, searchTerm) {
    rows.forEach(row => {
        const categoryCell = row.querySelector('td:nth-child(4)');
        const categoryText = categoryCell.textContent.trim().toLowerCase();
        const firstNameCell = row.querySelector('td:nth-child(2)');
        const firstNameText = firstNameCell.textContent.trim().toLowerCase();
        if ((category === '' || categoryText === category) && (searchTerm === '' || firstNameText.includes(searchTerm))) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}
});

function roleeeee(){
    redirectToPage('role.html');
}

function goHome2() {
    if(log22==="karin"){
    redirectToPage('donorhome2.html');
    }
   else if(log22==="ma"){
        redirectToPage('donorhome1.html');


    }
   else if(log22==="sarah"){
        redirectToPage('donorhome.html');


    }
else{

    redirectToPage('Home.html');
}

}
function general0() {
    var searchInput = document.getElementById("searchInput").value.toLowerCase().trim();

    var teams = document.querySelectorAll(".team-item");
    var found = false; // Flag to check if any item is found
    
    teams.forEach(function(team) {
        var teamName = team.querySelector("h4").textContent.toLowerCase();

        if (teamName.includes(searchInput)) {
            team.style.display = "block";
            found = true;
        } else {
            team.style.display = "none";
        }
    });

    if (!found) {
        alert("Not found");
    }
}

function general00() {
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
