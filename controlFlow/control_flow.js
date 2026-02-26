document.getElementById("checkButton").onclick = function(){
    // 1. Ambil input dari user
    let userRole = document.getElementById("userRoleInput").value.toLowerCase();
    let accessLevel;
    
    // 2. Logika If-Else (Access Level)
    if (userRole === "admin") {
        accessLevel = "Full access granted";
    } else if (userRole === "manager") {
        accessLevel = "Limited access granted";
    } else {
        accessLevel = "No access granted";
    }
    document.getElementById("displayAccess").innerText = "Access Level: " + accessLevel;

    let isLoggedIn = true; 
    let userMessage;
    if (isLoggedIn) {
        if (userRole === "admin") {
            userMessage = "Welcome, Admin!";
        } else {
            userMessage = "Welcome, User!";
        }
    } else {
        userMessage = "Please log in to access the system.";
    }
    console.log("User Message:", userMessage);

    let userCategory;
    switch (userRole) { 
        case "admin":
            userCategory = "Administrator";
            break;
        case "manager":
            userCategory = "Manager";
            break;
        default:
            userCategory = "Unknown/Subscriber";
    }
    console.log("User Category:", userCategory);
};