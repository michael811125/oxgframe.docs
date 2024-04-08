---
sidebar_position: 1
---

# 模塊介紹

資源加載器模塊，支援動態 Async 或 Sync 加載 (Dynamic Loading)，採用計數管理方式進行資源管控 (支援 Resources 與 AssetBundle)，如果直接使用 AssetLoaders API 進行 Load 跟 Instantiate，則在 Destroy 物件時，需要連帶調用 Unload (成對呼叫 Load & Unload)。
其中 AssetBundle 集成 YooAsset 實現資源熱更新方案，並且實現 YooAsset 提供的加密介面，其中實現加解密方式有 Offset (偏移量方式)、XOR、HT2XOR (Head-Tail 2 XOR)、AES 實現檔案加密。

※備註 : Use "res#" will load from Resources else load from Bundle

※提醒 : 如果要使用同步加載，資源一定要是事先下載完成的 (主要是資源不在本地時，請求下載部分是異步處理)，也提醒同步加載只適合小資源 (當然強烈建議全部都使用異步處理)。
