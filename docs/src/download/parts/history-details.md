::: details v3.2.0
---

### 🎉 特性：
- **自动烹饪**：自动烹饪增加用户自定义菜谱的支持。详细说明请见[官网](https://www.autohpma.top/)。

### ✨ 优化：
- **热键截图**：热键触发的截图功能添加了日志窗口的日志显示，显示保存路径信息。
- **日志窗口**：日志窗口的日志信息增加了字幕滚动效果，可在启动页面启用或停止。

### 🔧 修复：
- **自动烹饪**：由于游戏图像更新，自动烹饪原有素材图已失效，进行了替换。

---

### 🎉 Feature:
- ** Auto Cooking ** : Auto Cooking adds support for user-defined recipes. For detailed instructions, please visit [official website](autohpma.top).

### ✨ Optimization:
- ** Hotkey Screenshot ** : The hotkey-triggered screenshot function has added log display in the log window, showing the save path information.
- ** Log Window ** : The log information in the log window has added a subtitle scrolling effect, which can be enabled or stopped on the startup page.

### 🔧 Fix:
- ** Auto Cooking ** : Due to the update of game graphics, the original material images for Auto Cooking have become invalid and have been replaced.
:::

::: details v3.1.3
---

### ✨ 优化：
- **软件许可**：软件许可更改为GPL-3.0。
- **界面焕新**：替换了软件Logo和背景图，重绘了安装程序的icon。
- **链接替换**：主界面的跳转链接以及设置页面的教程文档链接替换为新构建的应用网站链接。

---

### ✨ Optimization:
- ** Software License ** : The software license has been changed to GPL-3.0.
- ** Interface Refresh ** : The software Logo and background image have been replaced.
- ** Link Replacement ** : The tutorial link is replaced with the link of the newly constructed software introduction page.
:::

::: details v3.1.2
---

### ✨ 优化：
- **任务终止**：点击首页停止按钮后，当前子任务会随之终止，控件会恢复默认状态。
- **任务热键**：热键页面可以添加各项任务的热键绑定。可通过快捷键启动或停止任务。
- **模板匹配**：灰度图的模板匹配已全部更换为BGR图像匹配，以提高准确率。
- **自动烹饪**：移除自动烹饪中鼠标拖拽多余的确认操作，以提高效率。

### 🔧 修复：
- **自动禁林**：修复自动禁林任务中，在战斗阶段误点或漏点自动按钮的问题。
- **自动烹饪**：修复自动烹饪中，烹饪流程未完成导致误点到结算页面的问题。

---

### ✨ Optimizations:
- ** Task Termination** : After clicking the stop button on the home page, the current subtask will terminate accordingly and the control will return to its default state.
- ** Task Hotkeys** : The hotkey page can add hotkey bindings for various tasks. Tasks can be started or stopped through shortcut keys.
- ** Template Matching** : The template matching of grayscale images has all been replaced with BGR image matching to improve the accuracy rate.
- ** Auto Cooking** : Remove the redundant confirmation operation of mouse dragging in auto cooking to improve efficiency.

### 🔧 Fix:
- ** Auto Forbidden Forest** : Fixed the issue of accidentally clicking or missing the automatic button during the battle stage.
- ** Auto Cooking** : Fixed the issue where the cooking process was not completed during auto cooking, causing accidental clicking on the settlement page.
:::

::: details v3.1.1
---

### 🔧 修复：
- **键盘监听**：修复键盘监听导致的键盘延迟及卡顿问题。

---

### 🔧 Fix:
- ** Keyboard Listening ** : Fixed the keyboard lag and stuttering issues caused by keyboard listening.
:::

::: details v3.1.0
---

### 🎉 特性：
- **自动烹饪**：基本实现了自动烹饪功能，目前支持3个菜谱，后续会加入其他菜谱的支持。
- **热键绑定**：添加热键绑定功能，目前支持快捷键截图，后续会加入更多热键功能。


### ✨ 优化：
- **任务分类**：将自动任务分为两类：“常驻任务”和“限时活动”。
- **模板匹配**：模板匹配现会根据输入的BGRA图像生成相应的Mask，使透明区域不参与匹配。
- **色彩过滤**：在测试页面新增了色彩过滤功能，可以根据输入的十六进制颜色代码和阈值过滤相似色彩。
- **一键裁剪**：在测试页面的模板匹配添加了裁剪按钮，可以一键裁剪上次匹配出的Rect。
- **遮罩窗口**：遮罩窗口新增了文字标注功能，可以在Rect上添加文字标记。

### 🔧 修复：
- **任务终止**：修复任务达到次数自主终止后，按钮不恢复的问题。

---

### 🎉 Features: 
- **Auto Cook**: The basic automatic cooking function has been realized, supporting three recipes currently. More recipes will be added in the future.
- **Hotkey Binding**: The hotkey binding function has been accomplished. Users can take screenshots with hotkeys by now.More hotkey functions will be added later. 

### ✨ Optimizations:
- **Task Classification**: Classify automatic tasks into two categories: "Resident Tasks" and "Limited-Time Activities".
- **Template Matching**: Template matching now generates corresponding masks based on the input BGRA image, ensuring that transparent areas do not participate in the matching process.
- **Color Filtering**: A color filtering function has been added to the test page, allowing for the filtering of similar colors based on the input hexadecimal color code and threshold.
- **One-Click Cropping**: A cropping button has been added to the template matching section of the test page, enabling one-click cropping of the last matched Rect.
- **Mask Window**: The mask window now includes a text annotation feature, allowing for the addition of text labels on the Rect. 

### 🔧 Fix:
- **Task Termination**: Fixed the issue where the button did not reset after the task reached the set number of executions and terminated automatically.
:::

