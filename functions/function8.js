function selectRating(rating) {

    for (let i = 1; i <= 5; i++) {

        if (i <= rating) {
            document.getElementById(`star${i}`).innerText = "★";
        } else {
            document.getElementById(`star${i}`).innerText = "☆";
        }

    }

    document.getElementById("rating").innerText = `Rating: ${rating}/5`;
}