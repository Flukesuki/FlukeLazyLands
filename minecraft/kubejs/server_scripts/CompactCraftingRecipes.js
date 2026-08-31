ServerEvents.recipes(event => {
  event.recipes.compactcrafting
    .miniaturization(
      Item.of('immersiveengineering:cokebrick', 9),//输出
      Item.of('minecraft:brick', 1)//输入
    )
    .setLayers([
      CCLayerType.MIXED.withPattern([
        ['B', 'C', 'B'],
        ['C', 'B', 'C'],
        ['B', 'C', 'B']
      ]),
      CCLayerType.MIXED.withPattern([
        ['C', 'B', 'C'],
        ['B', 'S', 'B'],
        ['C', 'B', 'C']
      ]),
      CCLayerType.MIXED.withPattern([
        ['B', 'C', 'B'],
        ['C', 'B', 'C'],
        ['B', 'C', 'B']
      ])
    ])
    .setComponents(new CCBlockComponent()
      .add('B', 'minecraft:bricks')//红砖
      .add('C', 'minecraft:clay')//黏土
      .add('S', 'minecraft:sandstone')//砂岩
      .build())
    .setRecipeSize(3)
})
ServerEvents.recipes(event => {
  event.recipes.compactcrafting
    .miniaturization(
      Item.of('immersiveengineering:alloybrick', 4),//输出
      Item.of('minecraft:clay_ball', 1)//输入
    )
    .setLayers([
      CCLayerType.MIXED.withPattern([
        ['B', 'B', 'B', 'B'],
        ['B', , , 'B'],
        ['B', , , 'B'],
        ['B', 'B', 'B', 'B']
      ]),
      CCLayerType.MIXED.withPattern([
        [ 'B', , ,'B' ],
        [ , 'C', 'M', ],
        [ , 'M', 'C', ],
        [ 'B', , ,'B' ]
      ]),
      CCLayerType.MIXED.withPattern([
        [ 'B', , ,'B' ],
        [ , 'M', 'C', ],
        [ , 'C', 'M', ],
        [ 'B', , ,'B' ]
      ]),
      CCLayerType.MIXED.withPattern([
        ['B', 'B', 'B', 'B'],
        ['B', , , 'B'],
        ['B', , , 'B'],
        ['B', 'B', 'B', 'B']
      ])
    ])
    .setComponents(new CCBlockComponent()
      .add('B', 'minecraft:bricks')//红砖
      .add('M', 'minecraft:mud')//泥巴
      .add('C', 'minecraft:clay')//黏土
      .build())
    .setRecipeSize(4)
})
