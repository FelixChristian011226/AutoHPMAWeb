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

::: details v3.0.2
---

### 🎉 特性：

- **日志页面**：添加单独的日志页面，可以筛选日志类别。
- **日志文件**：添加日志文件自动保存功能，并可通过设置页面设置日志上限，实现自动清理。


### ✨ 优化：
- **通知开关**：添加通知页面，用于开关通知（目前仅支持Windows通知）。
- **日志底层**：优化日志底层实现，通过ILogger统一封装。


### 🔧 修复：
- **任务独立**：修复了多个任务可能同时进行的问题。现在在任务执行过程中再点击其他任务的启动按钮会出现MessageBox提示。
- **自动禁林**：修复自动禁林达到次数未终止的问题。修复禁林任务终止时按钮未归位的问题。

---

### 🎉 Features:

- ** Log Page ** : Add a separate log page to filter log categories.
- ** Log File ** : Add the function of automatically saving log files, and the upper limit of logs can be set through the Settings page to achieve automatic cleaning.

### ✨ Optimization:
- ** Notification Switch ** : Add a notification page for switching notifications (currently only Windows notifications are supported).
- ** Log Bottom Layer ** : Optimize the implementation of the log bottom layer and uniformly encapsulate it through ILogger.

### 🔧 Fix:

- ** Task Independence ** : Fix the issue where multiple tasks might be carried out simultaneously. Now, when clicking the start button of another task during its execution, a MessageBox prompt will appear.
- ** Auto Forbidden Forest** : Fix the issue where Auto Forbidden Forest has not been terminated when reaching the frequency. Fix the issue where the button does not return to its original position when the mission is terminated.
:::

