# 菜谱定制

> 本页面介绍如何进行菜谱的自定义添加。

## 功能简介

用户可以根据自己的需求，定制和扩展菜谱内容，实现原有程序中尚未提供的菜谱烹饪。

## 使用方法

要添加尚未支持的新菜谱。用户需要完成两项任务：

1. 编写菜谱的配置文件。
2. 添加菜谱所需的素材图像。

### 目录结构

```bash
AutoHPMA/Assets/Cooking
│
├── Config
│   ├── 果香烤乳猪.json
│   ├── 黄金海鱼焗饭.json
│   ├── 奶油蘑菇炖饭.json
│   └── ...
│
├── Image/
│   ├── Condiment/
│   ├── Dishes/
│   ├── Ingredients/
│   ├── Kitchenware/
│   └── ...
│
└── ...
```

需要关注的素材结构如上所示。

其中`Config`文件存放菜谱的烹饪配置。`Image`文件存放素材图像。

### 配置说明

在应用程序目录的`./Assets/Cooking/Config/`目录中存放了菜谱对应的配置信息，记录每个菜谱的信息。

以`黄金海鱼焗饭`为例：

```json
{
  "Name": "黄金海鱼焗饭",
  "ImagePath": "Dishes/海鱼黄金焗饭.png",
  "RequiredKitchenware": [
    "bin",
    "board",
    "oven",
    "pot"
  ],
  "RequiredIngredients": [
    "rice",
    "fish"
  ],
  "RequiredCondiments": [
    "cream",
    "onion"
  ],
  "CookingSteps": [
    {
      "Ingredient": "fish",
      "TargetKitchenware": "oven"
    },
    {
      "Ingredient": "rice",
      "TargetKitchenware": "pot"
    }
  ],
  "CondimentPositions": {
    "cream": 3,
    "onion": 4
  }
}
```

说明如下：
- Name：菜谱名称
- ImagePath：菜谱图像路径，相较于`/Assets/Cooking/Image/`，用于在订单挑战中进行匹配
- RequiredKitchenware：需要的厨具
- RequiredIngredients：需要的食材
- RequiredCondiments：需要的调料
- CookingSteps：定义了烹饪的流程，比如每个食材放到哪个厨具，
- CondimentPositions：记录各个调料在订单下方所占的位置（已弃用）

程序启动阶段，工具会读入所有的配置文件，从而判断哪些菜谱已就绪，在烹饪时供选择使用。

### 图像说明

素材图像根据分类存放在不同文件中，其中只有四个文件夹用户需要关注：

- `Dishes`: 存放菜谱图像，用于'订单挑战'界面选择菜谱。
- `Kitchenware`: 存放厨具图像，以及对应的进度环的蒙版图像。
- `Ingredients`: 存放食材图像。
- `Condiment`: 存放调料图像。

### 具体步骤

为了完整的添加一个菜谱的支持。请严格按照以下步骤：

1. 如有未支持的新厨具，需要用户自行截图（或利用 AutoHPMA 的截图功能）截取烹饪中图像，需要厨具'空闲'和'烹饪中'的两个状态的截图。
2. 裁剪游戏截图的厨具区域，要保证厨具'空闲'和'烹饪中'的两个状态的区域一致。
3. 将'空闲'厨具图像去除背景，保留透明度，另存为`{name}.png`。其中`{name}`为厨具命名，需要与之后的配置文件对应。
4. 将'烹饪中'的厨具，只定位左上角的进度环，将进度环区域覆盖为白色，其余区域覆盖黑色，转为二值图像并另存为`{name}_ring.png`。名字要与厨具名对应。（注：进度环蒙版图**宁缺毋滥**,可以尽量少的覆盖进度环区域，白色区域尽可能精确且小，避免外圈杂色影响）
5. 将厨具的`{name}.png`和`{name}_ring.png`存放在`Kitchenware`目录。
6. 同样的方式裁剪食材和调料的图像，去除背景，保留透明度（32位RGBA图像），分别存储在`Ingredients`和`Condiment`目录。
7. 在订单挑战页面截取菜谱图像，去除背景，保留透明度，存储在`Dishes`目录。
8. 参考[配置说明](#配置说明)，编写菜谱的配置文件。
9. 重启 AutoHPMA ，选择新增菜谱， 运行自动烹饪任务。
