document.addEventListener("DOMContentLoaded", function () {
    // Simulate fetching data
    const fetchData = () => {
        return {
            appointmentCount: 15,
            recentPatients: ["Patient 1", "Patient 2", "Patient 3"]
        };
    };

    // Update dashboard content
    const updateDashboard = () => {
        const data = fetchData();

        // Update appointment count
        document.getElementById("appointment-count").innerText = data.appointmentCount;

        // Update recent patients list
        const patientList = document.getElementById("patient-list");
        patientList.innerHTML = "";
        data.recentPatients.forEach(patient => {
            const listItem = document.createElement("li");
            listItem.textContent = patient;
            patientList.appendChild(listItem);
        });
    };

    // Initial update
    updateDashboard();

    // Add event listeners for navigation links
    document.getElementById("dashboard-link").addEventListener("click", function (event) {
        event.preventDefault();
        // Additional logic for dashboard link if needed
        updateDashboard();
    });

    document.getElementById("appointments-link").addEventListener("click", function (event) {
        event.preventDefault();
        // Additional logic for appointments link if needed
    });

    document.getElementById("patients-link").addEventListener("click", function (event) {
        event.preventDefault();
        // Additional logic for patients link if needed
    });

    document.getElementById("reports-link").addEventListener("click", function (event) {
        event.preventDefault();
        // Additional logic for reports link if needed
    });
});
