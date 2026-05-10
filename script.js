function chatbotReply() {

    const userInput =
        document.getElementById("userInput")
            .value.toLowerCase();

    const chatOutput =
        document.getElementById("chatOutput");

    if (userInput.trim() === "") {

        chatOutput.innerHTML = `
            <div class="bot-message">
                ⚠ Please ask a travel-related question.
            </div>
        `;

        return;
    }

    chatOutput.innerHTML = `
        <div class="bot-message">
            🤖 Analyzing your travel request...
        </div>
    `;

    setTimeout(() => {

        let response = "";

        if (userInput.includes("beach")) {

            response =
                "🏖 Recommended Beaches: Goa, Pondicherry, Maldives and Gokarna are excellent beach destinations.";

        }

        else if (userInput.includes("adventure")) {

            response =
                "🏔 Adventure Destinations: Manali, Ladakh and Rishikesh are best for trekking and adventure sports.";

        }

        else if (userInput.includes("nature")) {

            response =
                "🌿 Nature Destinations: Ooty, Munnar and Mahabaleshwar are perfect for nature lovers.";

        }

        else if (userInput.includes("safe")) {

            response =
                "🛡 Safe Tourist Places: Pune, Mysore and Kerala are considered tourist-friendly and safe.";

        }

        else if (userInput.includes("emergency")) {

            response =
                "🚨 Emergency Numbers: Police - 100 | Ambulance - 108 | Tourist Helpline - 1363";

        }

        else if (userInput.includes("hill")) {

            response =
                "⛰ Popular Hill Stations: Shimla, Darjeeling and Mussoorie are highly recommended.";
        }

        else if (userInput.includes("budget")) {

            response =
                "💰 Budget-Friendly Destinations: Goa, Jaipur and Hampi are affordable tourist destinations.";
        }

        else if (userInput.includes("family")) {

            response =
                "👨‍👩‍👧 Best Family Destinations: Kerala, Kashmir and Mysore are ideal for family vacations.";
        }

        else {

            response =
                "🤖 Smart Tourism Assistant: Please ask about beaches, adventure, nature, safety or emergency services.";

        }

        chatOutput.innerHTML = `
            <div class="bot-message">
                ${response}
            </div>
        `;

    }, 1000);
}



function explorePlaces() {

    document.getElementById("places")
        .scrollIntoView({
            behavior: "smooth"
        });

}



function shareLocation() {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(

            function (position) {

                const latitude =
                    position.coords.latitude.toFixed(4);

                const longitude =
                    position.coords.longitude.toFixed(4);

                alert(
                    `📍 Location Shared Successfully!

Current Coordinates Detected:

Latitude: ${latitude}

Longitude: ${longitude}

🚨 Emergency support can now access your location.`
                );

            },

            function () {

                alert(
                    "❌ Unable to access location. Please allow GPS permission."
                );
            }

        );

    }

    else {

        alert(
            "❌ Geolocation is not supported in this browser."
        );
    }
}




document.getElementById("userInput")
    .addEventListener("keypress", function (event) {

        if (event.key === "Enter") {
            chatbotReply();
        }

    });