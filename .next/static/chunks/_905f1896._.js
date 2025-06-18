(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/hooks/useMqttClient.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* eslint-disable react-hooks/exhaustive-deps */ __turbopack_context__.s({
    "useMqttClient": (()=>useMqttClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mqtt$2f$dist$2f$mqtt$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mqtt/dist/mqtt.esm.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useMqttClient({ brokerUrl = "wss://broker.emqx.io:8084/mqtt", subscribeTopics = [], publishTopic = "", mqttOptions = {} }) {
    _s();
    const [isConnected, setIsConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const clientRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMqttClient.useEffect": ()=>{
            const clientId = `nextjs-client-${Math.random().toString(16).slice(2, 10)}`;
            const client = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mqtt$2f$dist$2f$mqtt$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].connect(brokerUrl, {
                clientId,
                clean: true,
                connectTimeout: 4000,
                reconnectPeriod: 1000,
                ...mqttOptions
            });
            clientRef.current = client;
            client.on("connect", {
                "useMqttClient.useEffect": ()=>{
                    console.log(`已連接 MQTT Broker: ${brokerUrl}`);
                    setIsConnected(true);
                    subscribeTopics.forEach({
                        "useMqttClient.useEffect": (topic)=>{
                            client.subscribe(topic, {
                                "useMqttClient.useEffect": (err)=>{
                                    if (err) {
                                        console.error(`訂閱主題 ${topic} 失敗:`, err);
                                    } else {
                                        console.log(`已訂閱主題: ${topic}`);
                                    }
                                }
                            }["useMqttClient.useEffect"]);
                        }
                    }["useMqttClient.useEffect"]);
                }
            }["useMqttClient.useEffect"]);
            client.on("message", {
                "useMqttClient.useEffect": (topic, payload)=>{
                    const message = {
                        topic,
                        payload: payload.toString(),
                        timestamp: new Date().toISOString()
                    };
                    setMessages({
                        "useMqttClient.useEffect": (prevMessages)=>[
                                ...prevMessages,
                                message
                            ]
                    }["useMqttClient.useEffect"]);
                }
            }["useMqttClient.useEffect"]);
            client.on("error", {
                "useMqttClient.useEffect": (err)=>{
                    console.error("MQTT Client 錯誤:", err);
                    setIsConnected(false);
                }
            }["useMqttClient.useEffect"]);
            client.on("close", {
                "useMqttClient.useEffect": ()=>{
                    console.warn("MQTT Client 連接已關閉");
                    setIsConnected(false);
                }
            }["useMqttClient.useEffect"]);
            return ({
                "useMqttClient.useEffect": ()=>{
                    subscribeTopics.forEach({
                        "useMqttClient.useEffect": (topic)=>client.unsubscribe(topic)
                    }["useMqttClient.useEffect"]);
                    client.end();
                }
            })["useMqttClient.useEffect"];
        }
    }["useMqttClient.useEffect"], [
        brokerUrl,
        subscribeTopics.join(",")
    ]);
    const publishMessage = (topic, msg)=>{
        const client = clientRef.current;
        if (!topic) {
            topic = publishTopic;
        }
        if (client && isConnected && topic && msg.trim()) {
            client.publish(topic, msg, {
                qos: 0
            }, (err)=>{
                if (err) {
                    console.error(`發佈消息到 ${topic} 失敗:`, err);
                } else {
                    // console.log(`已發佈消息到 ${topic}: ${msg}`);
                    console.log(`已發佈消息到 ${topic}`);
                }
            });
        }
    };
    return {
        isConnected,
        messages,
        publishMessage
    };
}
_s(useMqttClient, "veFJjroDzyx/QAhHcxWizKLABKw=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/actions/data:ec8972 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"7f9a3f1e383f6fec2456938bc1aa06aaebb6660a83":"getUserNotification"},"app/actions/notification.js",""] */ __turbopack_context__.s({
    "getUserNotification": (()=>getUserNotification)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getUserNotification = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7f9a3f1e383f6fec2456938bc1aa06aaebb6660a83", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getUserNotification"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbm90aWZpY2F0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGFwcC9hY3Rpb25zL25vdGlmaWNhdGlvbi5qcyAo5L+u5q2j5b6MKVxyXG5cInVzZSBzZXJ2ZXJcIjsgLy8g4pyoIOW/hemgiOaciemAmeihjO+8jOWwh+WFtuaomeiomOeCuiBTZXJ2ZXIgQWN0aW9uc1xyXG5cclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnQC9saWIvcHJpc21hJzsgLy8g4pyoIOWwjuWFpeWFt+WQjeWwjuWHuueahCBwcmlzbWEg5a6i5oi256uvXHJcblxyXG5leHBvcnQgY29uc3QgYWRkTm90aWZpY2F0aW9uID0gYXN5bmMgKGJvZHksIHVzZXJJZCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyDinKgg6YCZ6KOh5oeJ6Kmy5piv5re75Yqg6YCa55+l5Yiw6LOH5paZ5bqr55qE6YKP6LyvXHJcbiAgICAgICAgaWYgKCF1c2VySWQgfHwgIWJvZHkgfHwgIWJvZHkubWVzc2FnZSB8fCAhYm9keS5vcmRlcklkIHx8ICFib2R5LnRpdGxlIHx8ICFib2R5LnR5cGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBub3RpZmljYXRpb24gZGF0YSBvciB1c2VySWQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBuZXdOb3RpZmljYXRpb24gPSBhd2FpdCBwcmlzbWEubm90aWZpY2F0aW9uLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHVzZXJJZDogdXNlcklkLFxyXG4gICAgICAgICAgICAgICAgb3JkZXJJZDogYm9keS5vcmRlcklkLCAvLyDlgYfoqK0gYm9keSDljIXlkKsgb3JkZXJJZFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYm9keS5tZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgLy8g5YW25LuW5qyE5L2N5aaCIGlzUmVhZCDmnIPmnIkgZGVmYXVsdCDlgLxcclxuICAgICAgICAgICAgICAgIC8vIHRpdGxlIOWSjCB0eXBlIOmcgOimgeWcqOS9oOeahCBOb3RpZmljYXRpb24gbW9kZWwg5Lit5a6a576p5oiW6JmV55CGXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBub3RpZmljYXRpb246IG5ld05vdGlmaWNhdGlvbiB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGFkZCBub3RpZmljYXRpb24gKFNlcnZlciBBY3Rpb24pOlwiLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyTm90aWZpY2F0aW9uID0gYXN5bmMgKHVzZXJJZCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyDinKgg6YCZ6KOh5oeJ6Kmy5piv5b6e6LOH5paZ5bqr542y5Y+W5L2/55So6ICF6YCa55+l55qE6YKP6LyvXHJcbiAgICAgICAgaWYgKCF1c2VySWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVXNlciBJRCBpcyByZXF1aXJlZCBmb3IgZmV0Y2hpbmcgbm90aWZpY2F0aW9ucy5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG5vdGlmaWNhdGlvbnMgPSBhd2FpdCBwcmlzbWEubm90aWZpY2F0aW9uLmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgdXNlcklkOiB1c2VySWQgfSxcclxuICAgICAgICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6ICdkZXNjJyB9LCAvLyDmjInmnIDmlrDmjpLluo9cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbm90aWZpY2F0aW9ucztcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBnZXQgdXNlciBub3RpZmljYXRpb25zIChTZXJ2ZXIgQWN0aW9uKTpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IGVycm9yOiBlcnJvci5tZXNzYWdlIH07IC8vIOi/lOWbnumMr+iqpOioiuaBr++8jOS7peS+v+WJjeerr+iZleeQhlxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZU5vdGlmaWNhdGlvbiA9IGFzeW5jIChub3RpZmljYXRpb25JZCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyDinKgg6YCZ6KOh5oeJ6Kmy5piv5b6e6LOH5paZ5bqr5Yiq6Zmk6YCa55+l55qE6YKP6LyvXHJcbiAgICAgICAgaWYgKCFub3RpZmljYXRpb25JZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3RpZmljYXRpb24gSUQgaXMgcmVxdWlyZWQgZm9yIGRlbGV0aW5nLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXdhaXQgcHJpc21hLm5vdGlmaWNhdGlvbi5kZWxldGUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogbm90aWZpY2F0aW9uSWQgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZGVsZXRlIG5vdGlmaWNhdGlvbiAoU2VydmVyIEFjdGlvbik6XCIsIGVycm9yKTtcclxuICAgICAgICAvLyDlpoLmnpzmmK/mib7kuI3liLDpgJrnn6XnmoTpjK/oqqTvvIzlj6/ku6Xmm7Tnsr7norrlnLDomZXnkIZcclxuICAgICAgICBpZiAoZXJyb3IuY29kZSA9PT0gJ1AyMDI1Jykge1xyXG4gICAgICAgICAgICByZXR1cm4geyBlcnJvcjogXCJOb3RpZmljYXRpb24gbm90IGZvdW5kLlwiIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn07Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ3U0EyQmEifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/utils/mqttTopic.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "getAcceptCustomerOrderTopic": (()=>getAcceptCustomerOrderTopic),
    "getCustomerCancelOrderTopic": (()=>getCustomerCancelOrderTopic),
    "getKitchenOrderTopic": (()=>getKitchenOrderTopic),
    "getKitchenReadyOrderTopic": (()=>getKitchenReadyOrderTopic),
    "getOrderCheckoutTopic": (()=>getOrderCheckoutTopic),
    "getOrderStatusWildcardTopic": (()=>getOrderStatusWildcardTopic),
    "getStaffCompletedOrderTopic": (()=>getStaffCompletedOrderTopic)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const TOPIC_ROOT = ("TURBOPACK compile-time value", "");
const getTopicRoot = ()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        throw new Error("未填寫 .env 的 NEXT_PUBLIC_MQTT_TOPIC_ROOT");
    }
    return `nuu/csie/${TOPIC_ROOT}`;
};
const getOrderCheckoutTopic = ()=>{
    const topicRoot = getTopicRoot();
    return `${topicRoot}/notify/order/checkout`;
};
const getAcceptCustomerOrderTopic = (customerId)=>{
    const topicRoot = getTopicRoot();
    return `${topicRoot}/notify/order/accept/${customerId}`;
};
const getKitchenOrderTopic = ()=>{
    const topicRoot = getTopicRoot();
    return `${topicRoot}/notify/order/kitchen`;
};
const getKitchenReadyOrderTopic = (customerId)=>{
    const topicRoot = getTopicRoot();
    return `${topicRoot}/notify/order/ready/${customerId}`;
};
const getStaffCompletedOrderTopic = (customerId)=>{
    const topicRoot = getTopicRoot();
    return `${topicRoot}/notify/order/completed/${customerId}`;
};
const getCustomerCancelOrderTopic = (customerId)=>{
    const topicRoot = getTopicRoot();
    return `${topicRoot}/notify/order/cancel/${customerId}`;
};
const getOrderStatusWildcardTopic = (customerId)=>{
    const topicRoot = getTopicRoot();
    return `${topicRoot}/notify/order/+/${customerId}`;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/hooks/useNotifications.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// hooks/useNotifications.js
__turbopack_context__.s({
    "default": (()=>useNotifications)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"); // ✨ 新增 useCallback
// ✨ 移除這行：import useUser from "./useUser"; // 不再需要 useUser hook
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useMqttClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useMqttClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$ec8972__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:ec8972 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$mqttTopic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/mqttTopic.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function useNotifications(userId) {
    _s();
    // 移除 useUser 相關的 state
    // const { user, loading: userLoading } = useUser();
    const [notifications, setNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [unreadCount, setUnreadCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [topic, setTopic] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // MQTT 訂閱的主題現在依賴於傳入的 userId
    const { messages } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useMqttClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMqttClient"])({
        subscribeTopics: userId ? [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$mqttTopic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOrderStatusWildcardTopic"])(userId)
        ] : []
    });
    // 提取通知載入邏輯到 useCallback 函數中
    const fetchNotifications = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useNotifications.useCallback[fetchNotifications]": async ()=>{
            // ✨ 關鍵檢查：如果 userId 不存在，則直接返回
            if (!userId) {
                setNotifications([]); // 清空通知
                setUnreadCount(0);
                setLoading(false); // 停止載入狀態
                return;
            }
            setLoading(true);
            // 設定 MQTT topic
            setTopic((0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$mqttTopic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOrderStatusWildcardTopic"])(userId)); // ✨ 修改：設定 topic 依賴 userId
            try {
                // action
                let data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$ec8972__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getUserNotification"])(userId);
                if (!data) {
                    // api (作為備用或主要方式)
                    const response = await fetch(`/api/notifications/users/${userId}`);
                    if (!response.ok) {
                        console.error("取得使用者通知失敗");
                        setLoading(false);
                        return;
                    }
                    data = await response.json();
                }
                const formedData = data.map({
                    "useNotifications.useCallback[fetchNotifications].formedData": (item)=>{
                        return {
                            id: item.id,
                            title: "訂單",
                            type: "order",
                            content: item.message,
                            read: item.isRead,
                            time: new Date(item.createdAt).toLocaleString("sv")
                        };
                    }
                }["useNotifications.useCallback[fetchNotifications].formedData"]);
                setNotifications(formedData);
                setUnreadCount(formedData.filter({
                    "useNotifications.useCallback[fetchNotifications]": (n)=>!n.read
                }["useNotifications.useCallback[fetchNotifications]"]).length);
                setLoading(false);
            } catch (error) {
                console.error("載入通知時發生錯誤:", error);
                setLoading(false);
            }
        }
    }["useNotifications.useCallback[fetchNotifications]"], [
        userId
    ]); // ✨ 依賴於 userId
    // 初始載入通知的 useEffect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useNotifications.useEffect": ()=>{
            // ✨ 移除 userLoading 和 user.id 的檢查，因為現在直接依賴 userId props
            fetchNotifications(); // ✨ 調用提取出來的 fetchNotifications
        }
    }["useNotifications.useEffect"], [
        fetchNotifications
    ]); // ✨ 依賴於 fetchNotifications
    // 當收到新的 MQTT 訊息時更新通知
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useNotifications.useEffect": ()=>{
            // ✨ 增加安全檢查：如果 userId 不存在，則不處理 MQTT 訊息
            if (!userId || messages.length === 0) {
                return;
            }
            try {
                const lastMessage = messages[messages.length - 1];
                // 確認消息是否為字串，並嘗試解析
                const newOrder = JSON.parse(lastMessage.payload.toString()); // ✨ 確保 payload 是字串
                setNotifications({
                    "useNotifications.useEffect": (prev)=>{
                        // 防止重複添加相同的通知 (如果 MQTT 有可能重發)
                        if (prev.some({
                            "useNotifications.useEffect": (n)=>n.id === newOrder.id
                        }["useNotifications.useEffect"])) {
                            return prev;
                        }
                        // 假設 newOrder 已經是與 formedData 相同格式的物件
                        return [
                            newOrder,
                            ...prev
                        ];
                    }
                }["useNotifications.useEffect"]);
                setUnreadCount({
                    "useNotifications.useEffect": (prev)=>prev + 1
                }["useNotifications.useEffect"]);
            } catch (err) {
                console.error("無法解析 MQTT 訊息:", err);
            }
        }
    }["useNotifications.useEffect"], [
        messages,
        userId
    ]); // ✨ 依賴中加入 userId
    const notificationSetter = (notifications)=>{
        setNotifications(notifications);
        const unreadCount = notifications.filter((n)=>n.read === false).length;
        setUnreadCount(unreadCount);
    };
    return {
        notifications,
        setNotifications: notificationSetter,
        unreadCount,
        loading,
        // 如果外部組件需要，也可以暴露 fetchNotifications
        fetchNotifications
    };
}
_s(useNotifications, "0I0QsRyEKv3ycVlXzCKO9sx6Dq0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useMqttClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMqttClient"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/actions/data:333b8b [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"7fd691921fda169e2dab6445c454d571f3988b3ca9":"deleteNotification"},"app/actions/notification.js",""] */ __turbopack_context__.s({
    "deleteNotification": (()=>deleteNotification)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var deleteNotification = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7fd691921fda169e2dab6445c454d571f3988b3ca9", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteNotification"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbm90aWZpY2F0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGFwcC9hY3Rpb25zL25vdGlmaWNhdGlvbi5qcyAo5L+u5q2j5b6MKVxyXG5cInVzZSBzZXJ2ZXJcIjsgLy8g4pyoIOW/hemgiOaciemAmeihjO+8jOWwh+WFtuaomeiomOeCuiBTZXJ2ZXIgQWN0aW9uc1xyXG5cclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnQC9saWIvcHJpc21hJzsgLy8g4pyoIOWwjuWFpeWFt+WQjeWwjuWHuueahCBwcmlzbWEg5a6i5oi256uvXHJcblxyXG5leHBvcnQgY29uc3QgYWRkTm90aWZpY2F0aW9uID0gYXN5bmMgKGJvZHksIHVzZXJJZCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyDinKgg6YCZ6KOh5oeJ6Kmy5piv5re75Yqg6YCa55+l5Yiw6LOH5paZ5bqr55qE6YKP6LyvXHJcbiAgICAgICAgaWYgKCF1c2VySWQgfHwgIWJvZHkgfHwgIWJvZHkubWVzc2FnZSB8fCAhYm9keS5vcmRlcklkIHx8ICFib2R5LnRpdGxlIHx8ICFib2R5LnR5cGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBub3RpZmljYXRpb24gZGF0YSBvciB1c2VySWQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBuZXdOb3RpZmljYXRpb24gPSBhd2FpdCBwcmlzbWEubm90aWZpY2F0aW9uLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHVzZXJJZDogdXNlcklkLFxyXG4gICAgICAgICAgICAgICAgb3JkZXJJZDogYm9keS5vcmRlcklkLCAvLyDlgYfoqK0gYm9keSDljIXlkKsgb3JkZXJJZFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYm9keS5tZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgLy8g5YW25LuW5qyE5L2N5aaCIGlzUmVhZCDmnIPmnIkgZGVmYXVsdCDlgLxcclxuICAgICAgICAgICAgICAgIC8vIHRpdGxlIOWSjCB0eXBlIOmcgOimgeWcqOS9oOeahCBOb3RpZmljYXRpb24gbW9kZWwg5Lit5a6a576p5oiW6JmV55CGXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBub3RpZmljYXRpb246IG5ld05vdGlmaWNhdGlvbiB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGFkZCBub3RpZmljYXRpb24gKFNlcnZlciBBY3Rpb24pOlwiLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyTm90aWZpY2F0aW9uID0gYXN5bmMgKHVzZXJJZCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyDinKgg6YCZ6KOh5oeJ6Kmy5piv5b6e6LOH5paZ5bqr542y5Y+W5L2/55So6ICF6YCa55+l55qE6YKP6LyvXHJcbiAgICAgICAgaWYgKCF1c2VySWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVXNlciBJRCBpcyByZXF1aXJlZCBmb3IgZmV0Y2hpbmcgbm90aWZpY2F0aW9ucy5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG5vdGlmaWNhdGlvbnMgPSBhd2FpdCBwcmlzbWEubm90aWZpY2F0aW9uLmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgdXNlcklkOiB1c2VySWQgfSxcclxuICAgICAgICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6ICdkZXNjJyB9LCAvLyDmjInmnIDmlrDmjpLluo9cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbm90aWZpY2F0aW9ucztcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBnZXQgdXNlciBub3RpZmljYXRpb25zIChTZXJ2ZXIgQWN0aW9uKTpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IGVycm9yOiBlcnJvci5tZXNzYWdlIH07IC8vIOi/lOWbnumMr+iqpOioiuaBr++8jOS7peS+v+WJjeerr+iZleeQhlxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZU5vdGlmaWNhdGlvbiA9IGFzeW5jIChub3RpZmljYXRpb25JZCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyDinKgg6YCZ6KOh5oeJ6Kmy5piv5b6e6LOH5paZ5bqr5Yiq6Zmk6YCa55+l55qE6YKP6LyvXHJcbiAgICAgICAgaWYgKCFub3RpZmljYXRpb25JZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3RpZmljYXRpb24gSUQgaXMgcmVxdWlyZWQgZm9yIGRlbGV0aW5nLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXdhaXQgcHJpc21hLm5vdGlmaWNhdGlvbi5kZWxldGUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogbm90aWZpY2F0aW9uSWQgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZGVsZXRlIG5vdGlmaWNhdGlvbiAoU2VydmVyIEFjdGlvbik6XCIsIGVycm9yKTtcclxuICAgICAgICAvLyDlpoLmnpzmmK/mib7kuI3liLDpgJrnn6XnmoTpjK/oqqTvvIzlj6/ku6Xmm7Tnsr7norrlnLDomZXnkIZcclxuICAgICAgICBpZiAoZXJyb3IuY29kZSA9PT0gJ1AyMDI1Jykge1xyXG4gICAgICAgICAgICByZXR1cm4geyBlcnJvcjogXCJOb3RpZmljYXRpb24gbm90IGZvdW5kLlwiIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn07Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ1U0E0Q2EifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/notifyButton.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// app/components/notifyButton.jsx
__turbopack_context__.s({
    "default": (()=>NotifyButton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// import useUser from "@/hooks/useUser"; // ✨ 移除這行，不再需要 useUser
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useNotifications$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useNotifications.js [app-client] (ecmascript)"); // 保持這行
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$333b8b__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:333b8b [app-client] (ecmascript) <text/javascript>"); // 保持這行
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function NotifyButton({ userId }) {
    _s();
    const [showNotify, setShowNotify] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // ✨ 修改：直接將 userId 傳遞給 useNotifications
    // useNotifications 內部將負責處理 userId 是否存在的邏輯
    const { notifications, unreadCount, setNotifications } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useNotifications$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(userId);
    const wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NotifyButton.useEffect": ()=>{
            // ✨ 修改：這裡的 loading 檢查現在應該由 userId 是否存在來判斷，
            // 因為 useNotifications 內部已經處理了載入狀態
            // 如果 userId 不存在，則直接返回，不需監聽點擊外部事件，因為按鈕根本不應該出現
            if (!userId) {
                return;
            }
            const handleClickOutside = {
                "NotifyButton.useEffect.handleClickOutside": (event)=>{
                    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                        setShowNotify(false);
                    }
                }
            }["NotifyButton.useEffect.handleClickOutside"];
            if (showNotify) {
                document.addEventListener("mousedown", handleClickOutside);
            } else {
                document.removeEventListener("mousedown", handleClickOutside);
            }
            return ({
                "NotifyButton.useEffect": ()=>{
                    document.removeEventListener("mousedown", handleClickOutside);
                }
            })["NotifyButton.useEffect"];
        }
    }["NotifyButton.useEffect"], [
        showNotify,
        userId
    ]); // ✨ 依賴中加入 userId
    const handelClickNotificationButton = async ()=>{
        // ✨ 增加安全檢查：如果 userId 不存在，則直接返回
        if (!userId) {
            alert("用戶未登入，無法操作通知。");
            return;
        }
        setShowNotify((prev)=>!prev);
        // 如果要標記為已讀，確保有通知才操作
        if (notifications.length > 0) {
            setNotifications(notifications.map((n)=>{
                return {
                    ...n,
                    read: true
                };
            }));
            try {
                // ✨ 修改：使用 userId 而不是 user.id
                const response = await fetch(`/api/notifications/users/${userId}/isRead`, {
                    method: "PATCH"
                });
                if (!response.ok) {
                    alert("切換已讀通知失敗");
                }
            } catch (err) {
                alert("錯誤：" + err.message); // 更友善地顯示錯誤訊息
            }
        }
    };
    const handleDeleteNotification = async (nId)=>{
        // ✨ 增加安全檢查：如果 userId 不存在，則直接返回
        if (!userId) {
            alert("用戶未登入，無法刪除通知。");
            return;
        }
        // 這裡你的程式碼使用了 deleteNotification(nId) 和 fetch /api/notifications/${nId} 兩種方式
        // 建議只保留一種，通常是 API route 方式。
        // 如果 deleteNotification 是一個 Server Action，它應該是獨立且最終的。
        // 為了簡單起見，我會假設你最終透過 API route 處理，或者 deleteNotification 內部會調用 API。
        try {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$333b8b__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteNotification"])(nId); // 這是 Server Action
            if (!data || data.error) {
                // 檢查 Server Action 的結果
                // 如果 Server Action 失敗，可以選擇呼叫 API route 作為備用或只依賴一個
                const response_0 = await fetch(`/api/notifications/${nId}`, {
                    method: "DELETE"
                });
                if (!response_0.ok) {
                    alert("刪除通知失敗");
                    return;
                }
            }
        } catch (err_0) {
            alert("刪除通知錯誤：" + err_0.message);
            return;
        }
        setNotifications(notifications.filter((n_0)=>n_0.id !== nId));
    };
    // ✨ 關鍵修改：只有當 userId 存在時才渲染整個按鈕組件
    // 如果沒有 userId，代表用戶未登入或會話仍在載入，此時不應該顯示通知按鈕
    if (!userId) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        ref: wrapperRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                "aria-label": "查看通知",
                className: "relative focus:outline-none",
                onClick: handelClickNotificationButton,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xl",
                        children: "🔔"
                    }, void 0, false, {
                        fileName: "[project]/app/components/notifyButton.jsx",
                        lineNumber: 113,
                        columnNumber: 17
                    }, this),
                    unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute -top-1 -right-1 bg-rose-400 text-white text-[10px] px-1.5 py-0.5 rounded-full shadow-sm",
                        children: unreadCount
                    }, void 0, false, {
                        fileName: "[project]/app/components/notifyButton.jsx",
                        lineNumber: 114,
                        columnNumber: 37
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/notifyButton.jsx",
                lineNumber: 112,
                columnNumber: 13
            }, this),
            showNotify && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed right-1/12 top-16 w-80 bg-white/90 backdrop-blur-md text-black rounded-xl shadow-2xl border border-gray-200 z-[9999]",
                children: notifications.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "divide-y divide-gray-100 max-h-64 overflow-y-auto",
                    children: notifications.map((n_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "px-4 py-3 hover:bg-gray-100 transition",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-semibold flex justify-between text-gray-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: n_1.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/notifyButton.jsx",
                                            lineNumber: 123,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleDeleteNotification(n_1.id),
                                            style: {
                                                width: "32px",
                                                height: "32px",
                                                borderRadius: "50%"
                                            },
                                            className: "flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-gray-200 border border-gray-300 transition cursor-pointer shadow-sm",
                                            "aria-label": "刪除通知",
                                            title: "刪除",
                                            children: "X"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/notifyButton.jsx",
                                            lineNumber: 124,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/notifyButton.jsx",
                                    lineNumber: 122,
                                    columnNumber: 37
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-gray-800",
                                    children: n_1.content
                                }, void 0, false, {
                                    fileName: "[project]/app/components/notifyButton.jsx",
                                    lineNumber: 132,
                                    columnNumber: 37
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-gray-500",
                                    children: n_1.time
                                }, void 0, false, {
                                    fileName: "[project]/app/components/notifyButton.jsx",
                                    lineNumber: 135,
                                    columnNumber: 37
                                }, this)
                            ]
                        }, n_1.id, true, {
                            fileName: "[project]/app/components/notifyButton.jsx",
                            lineNumber: 121,
                            columnNumber: 55
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/components/notifyButton.jsx",
                    lineNumber: 120,
                    columnNumber: 49
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-5 text-center text-gray-500 text-sm",
                    children: "目前沒有通知"
                }, void 0, false, {
                    fileName: "[project]/app/components/notifyButton.jsx",
                    lineNumber: 139,
                    columnNumber: 33
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/notifyButton.jsx",
                lineNumber: 119,
                columnNumber: 28
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/notifyButton.jsx",
        lineNumber: 111,
        columnNumber: 10
    }, this);
}
_s(NotifyButton, "2o3Jn8W3yzRETUcCkX8eY/vHcWA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useNotifications$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = NotifyButton;
var _c;
__turbopack_context__.k.register(_c, "NotifyButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/navbar.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// app/components/navbar.jsx
__turbopack_context__.s({
    "default": (()=>Navbar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
// ✨ 移除這行：import { useEffect, useState } from "react";
// ✨ 移除這行：import useUser from "@/hooks/useUser"; // 不再需要 useUser hook
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$notifyButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/notifyButton.jsx [app-client] (ecmascript)"); // 通知按鈕保持不變
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Navbar() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "17552f3a2037be95f1639de09398943807938e2cd3cb12700f5dc27727cf880a") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "17552f3a2037be95f1639de09398943807938e2cd3cb12700f5dc27727cf880a";
    }
    const { data: session, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    let t0;
    if ($[1] !== session?.user?.role) {
        t0 = ()=>{
            const userRole = session?.user?.role;
            if (!userRole) {
                return [];
            }
            switch(userRole){
                case "CUSTOMER":
                    {
                        return [
                            {
                                href: "/menu",
                                name: "\u83DC\u55AE"
                            },
                            {
                                href: "/orders",
                                name: "\u6211\u7684\u8A02\u55AE"
                            }
                        ];
                    }
                case "STAFF":
                    {
                        return [
                            {
                                href: "/orders/pending",
                                name: "\u7B49\u5F85\u4E2D\u7684\u8A02\u55AE"
                            },
                            {
                                href: "/orders/ready",
                                name: "\u5B8C\u6210\u7684\u8A02\u55AE"
                            }
                        ];
                    }
                case "CHEF":
                    {
                        return [
                            {
                                href: "/kitchen",
                                name: "\u5EDA\u623F\u8A02\u55AE"
                            }
                        ];
                    }
                case "OWNER":
                    {
                        return [
                            {
                                href: "/admin/menu",
                                name: "\u83DC\u55AE\u7BA1\u7406"
                            },
                            {
                                href: "/admin/users",
                                name: "\u4F7F\u7528\u8005\u7BA1\u7406"
                            },
                            {
                                href: "/admin/orders/pending",
                                name: "\u7B49\u5F85\u4E2D\u7684\u8A02\u55AE"
                            },
                            {
                                href: "/admin/orders/completed",
                                name: "\u5B8C\u6210\u7684\u8A02\u55AE"
                            },
                            {
                                href: "/admin/orders/kitchen",
                                name: "\u5EDA\u623F\u8A02\u55AE"
                            }
                        ];
                    }
                default:
                    {
                        return [];
                    }
            }
        };
        $[1] = session?.user?.role;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const getRoleLinks = t0;
    const handelSignOut = _temp;
    const isAuthenticated = status === "authenticated";
    const isLoading = status === "loading";
    let t1;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/",
            className: "text-2xl font-bold tracking-wide hover:opacity-90 transition-opacity duration-300",
            "aria-label": "\u524D\u5F80\u9996\u9801",
            children: "🍽 網路早餐訂餐系統"
        }, void 0, false, {
            fileName: "[project]/app/components/navbar.jsx",
            lineNumber: 95,
            columnNumber: 10
        }, this);
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] !== getRoleLinks || $[5] !== isAuthenticated || $[6] !== isLoading || $[7] !== session) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "sticky top-0 z-50 bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 text-white shadow-md",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center overflow-x-auto",
                children: [
                    t1,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-4",
                        children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm",
                            children: "載入中..."
                        }, void 0, false, {
                            fileName: "[project]/app/components/navbar.jsx",
                            lineNumber: 102,
                            columnNumber: 302
                        }, this) : isAuthenticated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                getRoleLinks().map(_temp2),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden sm:inline-block font-semibold",
                                    children: [
                                        "您好，",
                                        session?.user?.name || session?.user?.email
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/navbar.jsx",
                                    lineNumber: 102,
                                    columnNumber: 392
                                }, this),
                                session.user?.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$notifyButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    userId: session.user.id
                                }, void 0, false, {
                                    fileName: "[project]/app/components/navbar.jsx",
                                    lineNumber: 102,
                                    columnNumber: 523
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handelSignOut,
                                    className: "bg-white text-pink-600 font-semibold px-3 py-1.5 rounded-md hover:bg-gray-100 transition duration-300",
                                    "aria-label": "\u767B\u51FA\u5E33\u865F",
                                    children: "登出"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/navbar.jsx",
                                    lineNumber: 102,
                                    columnNumber: 565
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/login",
                            className: "bg-white text-pink-600 font-semibold px-4 py-1.5 rounded-md hover:bg-gray-100 transition duration-300",
                            "aria-label": "\u767B\u5165\u5E33\u865F",
                            children: "登入"
                        }, void 0, false, {
                            fileName: "[project]/app/components/navbar.jsx",
                            lineNumber: 102,
                            columnNumber: 768
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/navbar.jsx",
                        lineNumber: 102,
                        columnNumber: 238
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/navbar.jsx",
                lineNumber: 102,
                columnNumber: 123
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/navbar.jsx",
            lineNumber: 102,
            columnNumber: 10
        }, this);
        $[4] = getRoleLinks;
        $[5] = isAuthenticated;
        $[6] = isLoading;
        $[7] = session;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_s(Navbar, "9FJXkt4TWUXvKViKXL6e+HzLtTA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
_c = Navbar;
function _temp2(link) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: link.href,
        className: "text-white font-medium hover:underline hover:text-yellow-200 transition duration-300",
        "aria-label": link.name,
        children: link.name
    }, link.href, false, {
        fileName: "[project]/app/components/navbar.jsx",
        lineNumber: 114,
        columnNumber: 10
    }, this);
}
function _temp() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])({
        callbackUrl: "/login"
    });
}
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/sessionNavbar.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SessionNavbar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$navbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/navbar.jsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function SessionNavbar(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "eb15b0fcdd40c3fdb28078701c8b4b3f099a4f0520bd7cccce625407b0477c0c") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "eb15b0fcdd40c3fdb28078701c8b4b3f099a4f0520bd7cccce625407b0477c0c";
    }
    const { session } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$navbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/app/components/sessionNavbar.jsx",
            lineNumber: 20,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== session) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionProvider"], {
            session: session,
            children: t1
        }, void 0, false, {
            fileName: "[project]/app/components/sessionNavbar.jsx",
            lineNumber: 27,
            columnNumber: 10
        }, this);
        $[2] = session;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
}
_c = SessionNavbar;
var _c;
__turbopack_context__.k.register(_c, "SessionNavbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/authSessionProvider.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// app/providers.jsx
__turbopack_context__.s({
    "default": (()=>Providers)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
"use client";
;
;
;
function Providers(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "cbe361c136f8015abaa8a73611ed8656a386260f9ec4d129f1c56a1c3abfa1f1") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "cbe361c136f8015abaa8a73611ed8656a386260f9ec4d129f1c56a1c3abfa1f1";
    }
    const { children } = t0;
    let t1;
    if ($[1] !== children) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionProvider"], {
            children: children
        }, void 0, false, {
            fileName: "[project]/app/components/authSessionProvider.jsx",
            lineNumber: 19,
            columnNumber: 10
        }, this);
        $[1] = children;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
}
_c = Providers;
var _c;
__turbopack_context__.k.register(_c, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_905f1896._.js.map