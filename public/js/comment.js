const commentHere = document.querySelector("#commentHere");
const addComment = document.querySelector("#addComment");

async function createComment() {
    try {
        console.log("CLICKITY------------------------------------------------")
        const commentContent = commentHere.value;

        if(commentContent) {
            const response = await fetch(window.location.pathname, {
                method: 'POST',
                body: JSON.stringify({ commentContent }),
                headers: { 'Content-Type': 'application/json' },
            });
            location.reload();
        }

    } catch (error) {
        console.log(err);
    }
}

addComment.addEventListener("click", createComment());