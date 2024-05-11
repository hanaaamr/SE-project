function submitted() {
    alert('Your Post is Submitted!');
    redirectToPage( "organization.html");
}

function redirectToPage(pageUrl) {
    window.location.href = pageUrl;
}