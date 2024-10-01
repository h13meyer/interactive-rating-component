let selectedRating;

// Initially show section "Rating"
document.getElementById("thank-you-section").style.display = "none"; 

function selectRating(rating) {
    selectedRating = rating;
    // Remove old selections
    document.getElementById("rating-1").classList.remove(['selected']);
    document.getElementById("rating-2").classList.remove(['selected']);
    document.getElementById("rating-3").classList.remove(['selected']);
    document.getElementById("rating-4").classList.remove(['selected']);
    document.getElementById("rating-5").classList.remove(['selected']);
    // Add new selection
    document.getElementById(`rating-${selectedRating}`).classList.add(['selected']);
}

function submit() {
    if (!!selectedRating) {
        document.getElementById("result").innerHTML = `You selected ${selectedRating} out of 5`;
        // Switch displayed section to "Thank you"
        document.getElementById("rating-section").style.display = "none"; 
        document.getElementById("thank-you-section").style.display = "flex"; 
    } else {
        window.alert('Please select a rating first!');
    }
}



