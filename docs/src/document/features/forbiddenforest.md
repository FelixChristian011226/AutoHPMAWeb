# 自动禁林探索

## 功能介绍 <Badge type="tip" text="Introduction" />

**自动禁林探索**实现了简单的禁林探索自动化。主要是为一键刷取指定次数。

- **使用场景**：禁林组队界面，或禁林任务中任何阶段。
- **任务流程**：
  - 准备阶段：会根据自己的身份（队长或队员）点击对应的匹配或准备按钮，并启动自动战斗。
  - 战斗过程：依靠游戏自带的自动战斗功能，会实时检测右下角的自动按钮，保证在自动战斗中。
  - 结算过程：会自动检测点赞标志，并对队友进行点赞。

- **终止条件**：手动终止或达到次数自动终止。

## 参数设置 <Badge type="tip" text="Settings" />

- **禁林次数**：禁林探索目标次数，达到次数自动终止。
- **组队身份**：队长或队员。

## 使用截图 <Badge type="tip" text="Screenshots" />
**战斗中**：
<img src="/features/forbiddenforest/fighting.png" style="width:80%;"/>

**结算中**：
<img src="/features/forbiddenforest/over.png" style="width:80%;"/>

## 注意事项 <Badge type="warning" text="Note" />

- 如果目标次数小于当前提灯数，任务会一直运行。这非程序问题，而是游戏本身会记录自动状态，有提灯会默认开启下一场。

## 常见问题 <Badge type="danger" text="questions" />

::: details 1. 战斗过程偶现自动战斗被取消？
由于自动战斗按钮启用某一阶段和停止相似度极高，可能会出现误点击，但到下一个循环会点击回来，应该不影响整体运行。
:::
