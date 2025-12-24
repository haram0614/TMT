addLayer("l", {
    name: "Lv", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "lv", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new ExpantaNum(0),
    }},
    color: "#4BDC13",
    requires: new ExpantaNum(10), // Can be a function that takes requirement increases into account
    resource: "point exp", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points.add(1).log10()}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new ExpantaNum(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new ExpantaNum(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "l", description: "l: Reset for lv", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true}
})
