export async function fetchDestinations(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Server returned status code: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error pulling destination data records:", error);
        return null;
    }
}