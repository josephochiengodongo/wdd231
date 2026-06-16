export async function getPlaces() {

  try {

    const response = await fetch("data/places.json");

    if (!response.ok) {
      throw new Error("Data failed to load");
    }

    const data = await response.json();

    return data;

  } catch (error) {

    console.error("Fetch Error:", error);

    return [];
  }
}