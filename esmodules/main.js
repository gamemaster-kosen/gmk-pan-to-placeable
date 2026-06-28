CONFIG.debug.hooks = false;

console.log("GMK - Pan to Placeable")

// Pan to Placeable


// class JournalDirectory extends DocumentDirectory {

//   /** @inheritDoc */
//   static DEFAULT_OPTIONS = {
//     collection: "JournalEntry"
//   };

//   /** @override */
//   static tabName = "journal";

//   /* -------------------------------------------- */
//   /*  Rendering                                   */
//   /* -------------------------------------------- */

//   /** @inheritDoc */
//   _getEntryContextOptions() {
//     const options = super._getEntryContextOptions();
//     const configureOwnershipIndex = options.findIndex(o => o.label === "OWNERSHIP.Configure");
//     options.splice(configureOwnershipIndex + 1, 0, {
//       label: "SIDEBAR.JumpPin",
//       icon: "fa-solid fa-crosshairs",
//       visible: li => !!this.collection.get(li.dataset.entryId)?.sceneNote,
//       onClick: (event, li) => this.collection.get(li.dataset.entryId)?.panToNote()
//     });
//     return options;
//   }
// }


//canvas.animatePan({x: 0, y: 0, scale: 1});


// return canvas.animatePan({x: note.x, y: note.y, scale, duration})

//   panToNote(note, {scale=1.5, duration=250}={}) {
//     if ( !note ) return Promise.resolve();
//     if ( note.visible && !this.active ) this.activate();
//     return canvas.animatePan({x: note.x, y: note.y, scale, duration}).then(() => {
//       if ( this.hover ) this.hover._onHoverOut(new Event("pointerout"));
//       note._onHoverIn(new Event("pointerover"), {hoverOutOthers: true});
//     });
//   }



function panToToken() {
}



// panToToken
// panToTile
// panToDrawing
// panToWall
// panToLight
// panToSound
// panToRegion
// panToNote


// canvas.tokens
// canvas.tiles
// canvas.drawings
// canvas.walls
// canvas.lighting
// canvas.sounds
// canvas.regions
// canvas.notes



// game.canvas.tokens

// --------------------------------------------------------------------------------------------------------


// function helperFunction(label, canvasLocation) {
//     return {
//         label,
//         icon: 'fa-solid fa-crosshairs',
//         onClick: (event, li) => {
//             // find placeable
//             const placeableId = li.getAttribute("data-entry-id")
//             const placeable = canvasLocation.get(placeableId)
//             // animate
//             canvas.animatePan({x: placeable.x, y: placeable.y, scale: 1.5});
//         }
//     }
// }

// // Token
// Hooks.on("getTokenPlaceableContextOptions", (application, menuItems) => {
//     menuItems.push(helperFunction("Jump to Token", canvas.tokens))
// });

// Tile
// Drawing
// Wall
// Light
// Sound
// Region
// Note




function helperFunction(label, canvasTarget) {
    return {
        label,
        icon: 'fa-solid fa-crosshairs',
        onClick: (event, li) => {
            // find id
            const placeableId = li.getAttribute("data-entry-id")
            // target placeable via canvas
            const placeable = canvasTarget(placeableId)
            // pan to placeable
            canvas.animatePan({x: placeable.x, y: placeable.y, scale: 1.5});
        }
    }
}







Hooks.on("getTokenPlaceableContextOptions", (application, menuItems) => {
    menuItems.push(helperFunction("Jump to Token", placeableId => canvas.tokens.get(placeableId)));
});

// Hooks.on("getTilePlaceableContextOptions", (application, menuItems) => {
//     menuItems.push(helperFunction("Jump to Tile", canvas.tiles.get(placeableId).document));
// });





// --------------------------------------------------------------------------------------------------------

// // Token
// Hooks.on("getTokenPlaceableContextOptions", (application, menuItems) => {
//     // add new entry to context menu
//     menuItems.push({
//         label: "Jump to Token",
//         icon: 'fa-solid fa-crosshairs',
//         onClick: (event, li) => {
//             // find token
//             const placeableId = li.getAttribute("data-entry-id")
//             const placeable = canvas.tokens.get(placeableId)
//             // animate
//             canvas.animatePan({x: placeable.x, y: placeable.y, scale: 1.5});
//         }
//     });
// });

// Tile
Hooks.on("getTilePlaceableContextOptions", (application, menuItems) => {
    menuItems.push({
        label: "Jump to Pin",
        icon: 'fa-solid fa-crosshairs',
        onClick: (event, li) => {
            // find tile
            const placeableId = li.getAttribute("data-entry-id")
            const placeable = canvas.tiles.get(placeableId).document
            console.log(placeableId)
            // animate
            canvas.animatePan({x: placeable.x, y: placeable.y, scale: 1.5});        }
    });
});

// Drawing
Hooks.on("getDrawingPlaceableContextOptions", (application, menuItems) => {
    menuItems.push({
        label: "Jump to Pin",
        icon: 'fa-solid fa-crosshairs',
        onClick: (event, li) => {
            console.log(li)
            // find tile
            const placeableId = li.getAttribute("data-entry-id")
            const placeable = canvas.drawings.get(placeableId).shape
            console.log(placeableId)
            // animate
            canvas.animatePan({x: placeable.x, y: placeable.y, scale: 1.5});        }
    });
});

// Walls
Hooks.on("getWallPlaceableContextOptions", (application, menuItems) => {
    menuItems.push({
        label: "Jump to Pin",
        icon: 'fa-solid fa-crosshairs',
        onClick: (event, li) => {
            // find tile
            const placeableId = li.getAttribute("data-entry-id")
            const placeable = canvas.walls.get(placeableId).document.edge.a
            console.log(placeableId)
            // animate
            canvas.animatePan({x: placeable.x, y: placeable.y, scale: 1.5});        }
    });
});

// Lighting
Hooks.on("getAmbientLightPlaceableContextOptions", (application, menuItems) => {
    menuItems.push({
        label: "Jump to Pin",
        icon: 'fa-solid fa-crosshairs',
        onClick: (event, li) => {
            // find tile
            const placeableId = li.getAttribute("data-entry-id")
            const placeable = canvas.lighting.get(placeableId).document
            console.log(placeableId)
            // animate
            canvas.animatePan({x: placeable.x, y: placeable.y, scale: 1.5});        }
    });
});

// Audio
Hooks.on("getAmbientSoundPlaceableContextOptions", (application, menuItems) => {
    menuItems.push({
        label: "Jump to Pin",
        icon: 'fa-solid fa-crosshairs',
        onClick: (event, li) => {
            // find tile
            const placeableId = li.getAttribute("data-entry-id")
            const placeable = canvas.sounds.get(placeableId).document
            console.log(placeableId)
            // animate
            canvas.animatePan({x: placeable.x, y: placeable.y, scale: 1.5});        }
    });
});

// Region
Hooks.on("getRegionPlaceableContextOptions", (application, menuItems) => {
    menuItems.push({
        label: "Jump to Pin",
        icon: 'fa-solid fa-crosshairs',
        onClick: (event, li) => {
            // find tile
            const placeableId = li.getAttribute("data-entry-id")
            const placeable = canvas.regions.get(placeableId).document.shapes[0]
            console.log(placeableId)
            // animate
            canvas.animatePan({x: placeable.x, y: placeable.y, scale: 1.5});        }
    });
});

// Note
Hooks.on("getNotePlaceableContextOptions", (application, menuItems) => {
    menuItems.push({
        label: "Jump to Pin",
        icon: 'fa-solid fa-crosshairs',
        onClick: (event, li) => {
            // find tile
            const placeableId = li.getAttribute("data-entry-id")
            const placeable = canvas.notes.get(placeableId).document
            console.log(placeableId)
            // animate
            canvas.animatePan({x: placeable.x, y: placeable.y, scale: 1.5});        }
    });
});
