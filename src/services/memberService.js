const API_URL = "/api/members.json";

export const getMembers = async() => {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }

    const data = await response.json();

    console.log("Members:", data);

    return data;
};