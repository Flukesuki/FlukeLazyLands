let lastGiveTime = {};

BlockEvents.rightClicked(event => {
    let player = event.player;
    let item = event.item;
    let block = event.block;
    
    if (item.isEmpty() && player.isCrouching() && block.id == "minecraft:grass_block") {
        let playerName = player.username;
        let now = Date.now();

        if (lastGiveTime[playerName] && now - lastGiveTime[playerName] < 10) {
            return;
        }
        lastGiveTime[playerName] = now;
        player.give("kubejs:flukesuki_pebble");
    }
})