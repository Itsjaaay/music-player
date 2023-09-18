//Task 1: Function to Determine Experience Level
function getExperienceLevel(yearsOfStudy) {
    if (yearsOfStudy <= 1) {
        return "Beginner";
    } else if (yearsOfStudy <= 3) {
        return "Intermediate";
    } else if (yearsOfStudy <= 6) {
        return "Advanced";
    } else {
        return "Master";
    }
}
//Task 2: Function to Check for the Presence of "Javascript" Skill
function hasJavaScriptSkill(skills) {
    return skills.includes("Javascript");
}
//Task 3: Function to Format Address
function formatAddress(addressObj) {
    const {
        street,
        number,
        neighborhood,
        city,
        state,
        zip_code
    } = addressObj;

    return `Hello, my address is ${number} ${street}, ${city}, ${state} ${zip_code} in the '${neighborhood}' neighborhood.`;
}