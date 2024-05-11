function Del(id) {
    var element = document.getElementById(id);
    if (element) {
        element.parentNode.removeChild(element);
        alert("Donation is deleted successfully!");
    } else {
        console.log("Element with ID " + id + " not found.");
    }
}
