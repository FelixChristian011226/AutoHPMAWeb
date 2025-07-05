# 配置说明

> 本页将介绍 AutoHPMA 的配置项及其作用。

## 文件路径

AutoHPMA会自动记录用户的使用偏好，并保存在计算机本地，以确保下次应用启动时，所有控件选项均为上次关闭时的状态。

用户配置文件的路径为`C:\Users\{user_name}\AppData\Roaming\AutoHPMA\settings.json`，其中`{user_name}`是您的用户名。

在`设置页面`的`恢复设置`功能，本质上也是删除该配置文件。由于WPF应用在启动时才加载配置，所以恢复后需要重启应用才能生效。


## 配置格式

```json
{
  "captureInterval": 500,
  "realTimeScreenshotEnabled": true,
  "logWindowEnabled": true,
  "logWindowMarqueeEnabled": true,
  "debugLogEnabled": false,
  "maskWindowEnabled": true,
  "answerDelay": 0,
  "joinOthers": true,
  "autoForbiddenForestTimes": 2,
  "selectedTeamPosition": "Leader",
  "autoCookingTimes": 1,
  "autoCookingSelectedDish": "\u76D0\u70E4\u6D77\u867E",
  "autoCookingSelectedOCR": "Tesseract",
  "notificationEnabled": true,
  "hasShownTermsOfUse": true,
  "theme": "Light",
  "language": "zh-CN",
  "logFileLimit": 10,
  "lastUsedPath": "",
  "isFirstRun": true,
  "hotkeyBindings": {
    "\u622A\u56FE": "F2",
    "AutoHPMA": "F4"
  }
}
```

其中每个键名对应一个控件状态。用户对控件的更改会记录在相应键名对应的值里。
