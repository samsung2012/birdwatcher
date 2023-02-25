import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/birds/";

export function getBirds() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function getBirdBySlug(slug) {
  return fetch(baseUrl + "?slug=" + slug)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then((birds) => {
        if (birds.length !== 1) throw new Error("Course not found: " + slug);
        return birds[0];
      });
    })
    .catch(handleError);
}

export function saveBird(bird) {
  return fetch(baseUrl + (bird.id || ""), {
    method: bird.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ...bird,
      locationId: parseInt(bird.locationId, 5),
    }),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteBird(birdId) {
  return fetch(baseUrl + birdId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
