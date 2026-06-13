FlukeEvents.explosionRecipes(event => {
//看着改.jpg
    event.add('minecraft:raw_iron', [ //输入
        { item: 'minecraft:iron_nugget', count: 3, chance: 1.0 }, //输出
        { item: 'minecraft:iron_ingot', count: 1, chance: 0.25 }
    ])

    event.add({
        id: 'test_1', //配方id
        input: 'minecraft:coal',//输入
        outputs: [
            { item: 'minecraft:diamond', count: 1, chance: 0.05 }, //输出物品id 数量 概率
            { item: 'minecraft:charcoal', count: 1, chance: 0.5 }
        ]
    })

    event.add({
        id: 'test_2',
        input: '3 minecraft:coal_block', // 数量 物品id 中间别忘了空格
        outputs: [
            { item: 'minecraft:diamond', count: 1, chance: 0.25 }
        ]
    })

})