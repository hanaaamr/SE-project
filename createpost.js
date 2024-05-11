function submitted() {
    alert('Your Post is Submitted!');
    orgHome();
    

}
function orgHome(){
    redirectToPage('organization.html');

}
function redirectToPage(pageUrl) {
    window.location.href = pageUrl;
}

