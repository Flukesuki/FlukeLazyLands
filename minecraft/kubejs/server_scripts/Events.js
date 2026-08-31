const validExplosions = new Set();

LevelEvents.beforeExplosion(event => {
    const { level, x, y, z } = event;
    const bx = Math.floor(x), by = Math.floor(y), bz = Math.floor(z);
    const key = `${bx},${by},${bz}`;

    const isCompressed = level.getBlockState(new BlockPos(bx, by - 1, bz)).getBlock() === 'excessive_utilities:compressed_cobblestone_3';
    const isTntBelow = level.getBlockState(new BlockPos(bx, by - 2, bz)).getBlock() === 'minecraft:tnt';
    const allNeighborsTnt = [
        new BlockPos(bx + 1, by - 1, bz),
        new BlockPos(bx - 1, by - 1, bz),
        new BlockPos(bx, by - 1, bz + 1),
        new BlockPos(bx, by - 1, bz - 1)
    ].every(pos => level.getBlockState(pos).getBlock() === 'minecraft:tnt');

    if (isCompressed && isTntBelow && allNeighborsTnt) {
        validExplosions.add(key);
    }
});

LevelEvents.afterExplosion(event => {
    const { level, x, y, z, server } = event;
    const bx = Math.floor(x), by = Math.floor(y), bz = Math.floor(z);
    const key = `${bx},${by},${bz}`;

    if (validExplosions.has(key)) {
        validExplosions.delete(key);

        server.scheduleInTicks(1, () => {
            level.setBlock(new BlockPos(bx, by - 1, bz), 'minecraft:lava', 3);
            level.setBlock(new BlockPos(bx, by - 2, bz), 'minecraft:air', 3);
            [
                new BlockPos(bx + 1, by - 1, bz),
                new BlockPos(bx - 1, by - 1, bz),
                new BlockPos(bx, by - 1, bz + 1),
                new BlockPos(bx, by - 1, bz - 1)
            ].forEach(pos => level.setBlock(pos, 'minecraft:air', 3));

            level.playSound(null, bx, by, bz, 'minecraft:item.bucket.empty_lava', 1.0, 1.0);
        });
    }
});