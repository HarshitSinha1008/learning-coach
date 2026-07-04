console.log("script.js loaded");

const button = document.getElementById("startBtn");

if (button) {
    button.addEventListener("click", () => {
        window.location.href = "profile.html";
    });
}

const saveBtn = document.getElementById("saveProfile");

if (saveBtn) {

    saveBtn.addEventListener("click", async () => {

        console.log("Save button clicked");

        const goal = document.getElementById("goal").value;
        const learningStyle = document.getElementById("learningStyle").value;
        const preferredExplanation = document.getElementById("preferredExplanation").value;

        const profile = {
            goal,
            learningStyle,
            preferredExplanation
        };

        try {

            saveBtn.textContent = "Saving...";
            saveBtn.disabled = true;    

            const response = await fetch("http://localhost:3000/profile", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(profile)

            });

            const data = await response.json();

            saveBtn.textContent = "Save & Continue";
            saveBtn.disabled = false;

            alert(data.message);

            window.location.href = "chat.html";

        } catch (error) {

            console.error(error);

            saveBtn.textContent = "Save & Continue";
            saveBtn.disabled = false;

            alert("AI service is currently busy. Please try again later.");

        }

    });

}

const sendBtn = document.getElementById("sendBtn");

if (sendBtn) {

    sendBtn.addEventListener("click", async () => {

        const questionInput = document.getElementById("question");

        const question = questionInput.value;

        if(question.trim() === "") return;

        const chatBox = document.getElementById("chatBox");

        chatBox.innerHTML += `
            <div class="user-message">
                ${question}
            </div>
        `;

        questionInput.value = "";

        try {

            const response = await fetch("http://localhost:3000/chat",{

                method:"POST",

                headers:{
                    "Content-Type":"application/json"
                },

                body:JSON.stringify({
                    question
                })

            });

            const data = await response.json();

            chatBox.innerHTML += `
                <div class="ai-message">
                    ${data.result}
                </div>
            `;

            chatBox.scrollTop = chatBox.scrollHeight;

        } catch(error){

            console.error(error);

            chatBox.innerHTML += `
                <div class="ai-message">
                     Something went wrong.
                </div>
            `;

        }

    });

}