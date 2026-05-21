// 1. Define the unique internal ID for your element
elements.phoenix_ash = {
    // 2. Choose a display name, color, and behavior category
    name: "Phoenix Ash",
    color: "#d4a373",
    category: "magic", // Creates a new "magic" tab if it doesn't exist
    
    // 3. Set physical properties (behaves like dust/sand)
    behavior: behaviors.POWDER,
    state: "solid",
    density: 1500,
    
    // 4. Create unique chemical/physical reactions
    reactions: {
        "water": { 
            elem1: "fire",     // Phoenix Ash transforms into fire
            elem2: "steam",    // Water transforms into steam
            chance: 0.8        // 80% success rate per frame of contact
        },
        "dirty_water": { 
            elem1: "fire", 
            elem2: "steam" 
        }
    },
    
    // 5. Add extra immersive attributes
    tempHigh: 1200,          // Melts into magma at extreme temperatures
    stateHigh: "magma",
    desc: "Mystical ash that erupts into roaring flames when exposed to moisture."
};

// 6. Optional: Register your custom category icon
categoryIcons.magic = "✨";
