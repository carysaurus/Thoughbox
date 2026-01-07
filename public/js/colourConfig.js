// colourConfig.js

export let boxColours = [];
export let noteColours = [];

export async function fetchColourConfig() {
    try {
        const res = await fetch('/config/colours');
        const data = await res.json();
        boxColours = data.boxColours;
        noteColours = data.noteColours;
    } catch (err) {
        console.log('Error fetching colours:', err);
    }
};