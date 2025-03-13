async function simulateAsyncOperation() {
	return new Promise((resolve) =>
		setTimeout(() => {
			resolve("Data fetched after waiting");
		}, 2000)
	);
}

async function fetchCatBreeds() {
	// Fetch code here
    try{
        const result = await simulateAsyncOperation();
        console.log(result);
        const response = await fetch("https://catfact.ninja/breeds?limit=100");
        return response.json(); 
    }catch(e){
        console.log(e);
    }
}

// Call the function and log the output
fetchCatBreeds().then((response) => console.log(response));

// Fetch and display cat facts
const factsContainer = document.getElementById("factsContainer");

const samuraiPizzaCats = {
    leader: "Speedy Cerviche",
    members: 3,
    base: {
        location: "Little Tokyo",
        name: "Pizza Cat Restaurant",
    },
    catchphrase: "It's cheese time!",
};