import getData from "../module/getData.js";
import renderDetails from "../module/renderDetails.js";
document.addEventListener("DOMContentLoaded", async () => {
	const container = document.getElementsByClassName("details-content")[0];
	const data = await getData("https://amazing-events.onrender.com/api/events");
	const { events } = data;
	const urlParams = location.search;
	const id = new URLSearchParams(urlParams).get("id");
	renderDetails(id, events, container);
});
