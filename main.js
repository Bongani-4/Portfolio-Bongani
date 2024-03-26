function openContactPage() {  
    var width = 400;
var height = 300;
var left = (screen.width - width) / 2;
var top = (screen.height - height) / 2;

// Open the pop-up window

window.open('contact.html', 'ContactsPopup', 'width=' + width + ', height=' + height + ', left=' + left + ', top=' + top);

}/*
function openStorypage() {
   window.location.href = "Mystory.html"; 
}
function openEducationpage() {
    window.location.href = "education.html"; 
 }*/


 // Function to open modal
 function openContactModal() {
    document.getElementById('contactModal').style.display = 'block';
    document.body.classList.add('hide-content');
}

// Function to close modal
function closeContactModal() {
    document.getElementById('contactModal').style.display = 'none';
    document.body.classList.remove('hide-content');
}
//github profile
function openGithubProfile()
{

    window.open('https://github.com/Bongani-4');
}

//linkedIn profile
function openLinkedInProfile()
{
    window.open('https://www.linkedin.com/in/b-njathu');
}