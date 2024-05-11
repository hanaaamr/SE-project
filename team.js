///karin
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
      redirectToPage('test2.html');
 
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
  function redirectToPage(pageUrl) {
     window.location.href = pageUrl;
 }
 
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
 
   function Del(id,id2) {
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
     var name = document.getElementById('name').value;
     var pass = document.getElementById('password').value;
     
     if (name === "hana" && pass === "hana") {
 
         alert('correct username or password');
         redirectToPage('team.html');
         
        
     } 
     else
     if(name==="sarah" && pass === "sarah"){
         alert('correct username or password');
         redirectToPage('donorhome.html');
         
 
     }
 
     else
     if(name==="menna" && pass === "menna"){
         redirectToPage('organization.html');
 
 
 
     }
     else {
         alert('Invalid username or password');
         return false; 
     }
 }
 function Oreg(){
 
     edirectToPage( 'register.html');
 }
 
 
 function Dreg(){
 
 
     redirectToPage( 'registrationform.html');
 }