console.log("GMK - Pan to Placeable")

// helperFunction
function panToPlaceable(label, target) {
    return {
        label,
        icon: 'fa-solid fa-crosshairs',
        onClick: (event, li) => {
            // id
            const placeableId = li.getAttribute("data-entry-id")
            // target
            const placeable = target(placeableId)
            // pan
            canvas.animatePan({x: placeable.x, y: placeable.y, scale: 1.5});
        }
    }
}

// panToToken
Hooks.on("getTokenPlaceableContextOptions", (application, menuItems) => {
    menuItems.push(panToPlaceable("Jump To Token", placeableId => canvas.tokens.get(placeableId)));
});

// panToTile
Hooks.on("getTilePlaceableContextOptions", (application, menuItems) => {
    menuItems.push(panToPlaceable("Jump To Tile", placeableId => canvas.tiles.get(placeableId).document));
});

// panToDrawing
Hooks.on("getDrawingPlaceableContextOptions", (application, menuItems) => {
    menuItems.push(panToPlaceable("Jump To Drawing", placeableId => canvas.drawings.get(placeableId).shape));
});

// panToWall
Hooks.on("getWallPlaceableContextOptions", (application, menuItems) => {
    menuItems.push(panToPlaceable("Jump To Token", placeableId => canvas.walls.get(placeableId).document.edge.a));
});

// panToLight
Hooks.on("getAmbientLightPlaceableContextOptions", (application, menuItems) => {
    menuItems.push(panToPlaceable("Jump To Token", placeableId => canvas.lighting.get(placeableId).document));
});

// panToSound
Hooks.on("getAmbientSoundPlaceableContextOptions", (application, menuItems) => {
    menuItems.push(panToPlaceable("Jump To Token", placeableId => canvas.sounds.get(placeableId).document));
});

// panToRegion
Hooks.on("getRegionPlaceableContextOptions", (application, menuItems) => {
    menuItems.push(panToPlaceable("Jump To Token", placeableId => canvas.regions.get(placeableId).document.shapes[0]));
});

// panToNote
Hooks.on("getNotePlaceableContextOptions", (application, menuItems) => {
    menuItems.push(panToPlaceable("Jump To Token", placeableId => canvas.notes.get(placeableId).document));
});