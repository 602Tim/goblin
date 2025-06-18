(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/hooks/useMqttClient.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useMqttClient": (()=>useMqttClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mqtt$2f$dist$2f$mqtt$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mqtt/dist/mqtt.esm.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useMqttClient({ brokerUrl = ("TURBOPACK compile-time value", "wss://broker.emqx.io:8084/mqtt") || "wss://broker.emqx.io:8084/mqtt", subscribeTopics = [], publishTopic = "", mqttOptions = {} }) {
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
        if (!topic) topic = publishTopic;
        if (client && isConnected && topic && msg.trim()) {
            client.publish(topic, msg, {
                qos: 0
            }, (err)=>{
                if (err) {
                    console.error(`發佈消息到 ${topic} 失敗:`, err);
                } else {
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
"[project]/app/actions/data:b6415a [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"7f9a3f1e383f6fec2456938bc1aa06aaebb6660a83":"getUserNotification"},"app/actions/notification.js",""] */ __turbopack_context__.s({
    "getUserNotification": (()=>getUserNotification)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getUserNotification = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7f9a3f1e383f6fec2456938bc1aa06aaebb6660a83", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getUserNotification"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbm90aWZpY2F0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGFwcC9hY3Rpb25zL25vdGlmaWNhdGlvbi5qcyAo5L+u5q2j5b6MKVxyXG5cInVzZSBzZXJ2ZXJcIjsgLy8g4pyoIOW/hemgiOaciemAmeihjO+8jOWwh+WFtuaomeiomOeCuiBTZXJ2ZXIgQWN0aW9uc1xyXG5cclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnQC9saWIvcHJpc21hJzsgLy8g4pyoIOWwjuWFpeWFt+WQjeWwjuWHuueahCBwcmlzbWEg5a6i5oi256uvXHJcblxyXG5leHBvcnQgY29uc3QgYWRkTm90aWZpY2F0aW9uID0gYXN5bmMgKGJvZHksIHVzZXJJZCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyDinKgg6YCZ6KOh5oeJ6Kmy5piv5re75Yqg6YCa55+l5Yiw6LOH5paZ5bqr55qE6YKP6LyvXHJcbiAgICAgICAgaWYgKCF1c2VySWQgfHwgIWJvZHkgfHwgIWJvZHkubWVzc2FnZSB8fCAhYm9keS5vcmRlcklkIHx8ICFib2R5LnRpdGxlIHx8ICFib2R5LnR5cGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBub3RpZmljYXRpb24gZGF0YSBvciB1c2VySWQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBuZXdOb3RpZmljYXRpb24gPSBhd2FpdCBwcmlzbWEubm90aWZpY2F0aW9uLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHVzZXJJZDogdXNlcklkLFxyXG4gICAgICAgICAgICAgICAgb3JkZXJJZDogYm9keS5vcmRlcklkLCAvLyDlgYfoqK0gYm9keSDljIXlkKsgb3JkZXJJZFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYm9keS5tZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgLy8g5YW25LuW5qyE5L2N5aaCIGlzUmVhZCDmnIPmnIkgZGVmYXVsdCDlgLxcclxuICAgICAgICAgICAgICAgIC8vIHRpdGxlIOWSjCB0eXBlIOmcgOimgeWcqOS9oOeahCBOb3RpZmljYXRpb24gbW9kZWwg5Lit5a6a576p5oiW6JmV55CGXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBub3RpZmljYXRpb246IG5ld05vdGlmaWNhdGlvbiB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGFkZCBub3RpZmljYXRpb24gKFNlcnZlciBBY3Rpb24pOlwiLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyTm90aWZpY2F0aW9uID0gYXN5bmMgKHVzZXJJZCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBpZiAoIXVzZXJJZCkgdGhyb3cgbmV3IEVycm9yKFwiVXNlciBJRCBpcyByZXF1aXJlZCBmb3IgZmV0Y2hpbmcgbm90aWZpY2F0aW9ucy5cIik7XHJcblxyXG4gICAgICAgIGNvbnN0IG5vdGlmaWNhdGlvbnMgPSBhd2FpdCBwcmlzbWEubm90aWZpY2F0aW9uLmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgdXNlcklkIH0sXHJcbiAgICAgICAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiAnZGVzYycgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbm90aWZpY2F0aW9ucztcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBnZXQgdXNlciBub3RpZmljYXRpb25zIChTZXJ2ZXIgQWN0aW9uKTpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBbXTsgLy8g4pqg77iPIOWbnuWCs+epuumZo+WIl++8jOmBv+WFjeWJjeerr+W0qea9sFxyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVOb3RpZmljYXRpb24gPSBhc3luYyAobm90aWZpY2F0aW9uSWQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8g4pyoIOmAmeijoeaHieipsuaYr+W+nuizh+aWmeW6q+WIqumZpOmAmuefpeeahOmCj+i8r1xyXG4gICAgICAgIGlmICghbm90aWZpY2F0aW9uSWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90aWZpY2F0aW9uIElEIGlzIHJlcXVpcmVkIGZvciBkZWxldGluZy5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IHByaXNtYS5ub3RpZmljYXRpb24uZGVsZXRlKHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IG5vdGlmaWNhdGlvbklkIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGRlbGV0ZSBub3RpZmljYXRpb24gKFNlcnZlciBBY3Rpb24pOlwiLCBlcnJvcik7XHJcbiAgICAgICAgLy8g5aaC5p6c5piv5om+5LiN5Yiw6YCa55+l55qE6Yyv6Kqk77yM5Y+v5Lul5pu057K+56K65Zyw6JmV55CGXHJcbiAgICAgICAgaWYgKGVycm9yLmNvZGUgPT09ICdQMjAyNScpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgZXJyb3I6IFwiTm90aWZpY2F0aW9uIG5vdCBmb3VuZC5cIiB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59OyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoid1NBMkJhIn0=
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
    "getCustomerOrderUpdateTopic": (()=>getCustomerOrderUpdateTopic),
    "getKitchenOrderTopic": (()=>getKitchenOrderTopic),
    "getKitchenReadyOrderTopic": (()=>getKitchenReadyOrderTopic),
    "getNotificationTopicByUserId": (()=>getNotificationTopicByUserId),
    "getOrderCheckoutTopic": (()=>getOrderCheckoutTopic),
    "getOrderStatusWildcardTopic": (()=>getOrderStatusWildcardTopic),
    "getOrderToKitchenTopic": (()=>getOrderToKitchenTopic),
    "getStaffCompletedOrderTopic": (()=>getStaffCompletedOrderTopic)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const TOPIC_ROOT = ("TURBOPACK compile-time value", "beigo");
const getTopicRoot = ()=>{
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    return `nuu/shisa/${TOPIC_ROOT}`;
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
function getOrderToKitchenTopic() {
    return `nuu/shisa/orders/to-kitchen`;
}
function getNotificationTopicByUserId(userId) {
    return `nuu/shisa/notifications/${userId}`;
}
function getCustomerOrderUpdateTopic(customerId) {
    return `nuu/shisa/customer/${customerId}/orders/updated`;
}
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$b6415a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:b6415a [app-client] (ecmascript) <text/javascript>");
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
                let data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$b6415a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getUserNotification"])(userId);
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
"[project]/app/actions/data:4917ca [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"7fd691921fda169e2dab6445c454d571f3988b3ca9":"deleteNotification"},"app/actions/notification.js",""] */ __turbopack_context__.s({
    "deleteNotification": (()=>deleteNotification)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var deleteNotification = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7fd691921fda169e2dab6445c454d571f3988b3ca9", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteNotification"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbm90aWZpY2F0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGFwcC9hY3Rpb25zL25vdGlmaWNhdGlvbi5qcyAo5L+u5q2j5b6MKVxyXG5cInVzZSBzZXJ2ZXJcIjsgLy8g4pyoIOW/hemgiOaciemAmeihjO+8jOWwh+WFtuaomeiomOeCuiBTZXJ2ZXIgQWN0aW9uc1xyXG5cclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnQC9saWIvcHJpc21hJzsgLy8g4pyoIOWwjuWFpeWFt+WQjeWwjuWHuueahCBwcmlzbWEg5a6i5oi256uvXHJcblxyXG5leHBvcnQgY29uc3QgYWRkTm90aWZpY2F0aW9uID0gYXN5bmMgKGJvZHksIHVzZXJJZCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyDinKgg6YCZ6KOh5oeJ6Kmy5piv5re75Yqg6YCa55+l5Yiw6LOH5paZ5bqr55qE6YKP6LyvXHJcbiAgICAgICAgaWYgKCF1c2VySWQgfHwgIWJvZHkgfHwgIWJvZHkubWVzc2FnZSB8fCAhYm9keS5vcmRlcklkIHx8ICFib2R5LnRpdGxlIHx8ICFib2R5LnR5cGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBub3RpZmljYXRpb24gZGF0YSBvciB1c2VySWQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBuZXdOb3RpZmljYXRpb24gPSBhd2FpdCBwcmlzbWEubm90aWZpY2F0aW9uLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHVzZXJJZDogdXNlcklkLFxyXG4gICAgICAgICAgICAgICAgb3JkZXJJZDogYm9keS5vcmRlcklkLCAvLyDlgYfoqK0gYm9keSDljIXlkKsgb3JkZXJJZFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYm9keS5tZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgLy8g5YW25LuW5qyE5L2N5aaCIGlzUmVhZCDmnIPmnIkgZGVmYXVsdCDlgLxcclxuICAgICAgICAgICAgICAgIC8vIHRpdGxlIOWSjCB0eXBlIOmcgOimgeWcqOS9oOeahCBOb3RpZmljYXRpb24gbW9kZWwg5Lit5a6a576p5oiW6JmV55CGXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBub3RpZmljYXRpb246IG5ld05vdGlmaWNhdGlvbiB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGFkZCBub3RpZmljYXRpb24gKFNlcnZlciBBY3Rpb24pOlwiLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyTm90aWZpY2F0aW9uID0gYXN5bmMgKHVzZXJJZCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBpZiAoIXVzZXJJZCkgdGhyb3cgbmV3IEVycm9yKFwiVXNlciBJRCBpcyByZXF1aXJlZCBmb3IgZmV0Y2hpbmcgbm90aWZpY2F0aW9ucy5cIik7XHJcblxyXG4gICAgICAgIGNvbnN0IG5vdGlmaWNhdGlvbnMgPSBhd2FpdCBwcmlzbWEubm90aWZpY2F0aW9uLmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgdXNlcklkIH0sXHJcbiAgICAgICAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiAnZGVzYycgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbm90aWZpY2F0aW9ucztcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBnZXQgdXNlciBub3RpZmljYXRpb25zIChTZXJ2ZXIgQWN0aW9uKTpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBbXTsgLy8g4pqg77iPIOWbnuWCs+epuumZo+WIl++8jOmBv+WFjeWJjeerr+W0qea9sFxyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVOb3RpZmljYXRpb24gPSBhc3luYyAobm90aWZpY2F0aW9uSWQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8g4pyoIOmAmeijoeaHieipsuaYr+W+nuizh+aWmeW6q+WIqumZpOmAmuefpeeahOmCj+i8r1xyXG4gICAgICAgIGlmICghbm90aWZpY2F0aW9uSWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90aWZpY2F0aW9uIElEIGlzIHJlcXVpcmVkIGZvciBkZWxldGluZy5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IHByaXNtYS5ub3RpZmljYXRpb24uZGVsZXRlKHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IG5vdGlmaWNhdGlvbklkIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGRlbGV0ZSBub3RpZmljYXRpb24gKFNlcnZlciBBY3Rpb24pOlwiLCBlcnJvcik7XHJcbiAgICAgICAgLy8g5aaC5p6c5piv5om+5LiN5Yiw6YCa55+l55qE6Yyv6Kqk77yM5Y+v5Lul5pu057K+56K65Zyw6JmV55CGXHJcbiAgICAgICAgaWYgKGVycm9yLmNvZGUgPT09ICdQMjAyNScpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgZXJyb3I6IFwiTm90aWZpY2F0aW9uIG5vdCBmb3VuZC5cIiB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59OyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoidVNBMkNhIn0=
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$4917ca__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:4917ca [app-client] (ecmascript) <text/javascript>"); // 保持這行
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
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$4917ca__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteNotification"])(nId); // 這是 Server Action
            if (!data || data.error) {
                // 如果 Server Action 失敗，可以選擇呼叫 API route 作為備用或只依賴一個
                const response = await fetch(`/api/notifications/${nId}`, {
                    method: "DELETE"
                });
                if (!response.ok) {
                    alert("刪除通知失敗");
                    return;
                }
            }
        } catch (err) {
            alert("刪除通知錯誤：" + err.message);
            return;
        }
        setNotifications(notifications.filter((n)=>n.id !== nId));
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
                        lineNumber: 124,
                        columnNumber: 17
                    }, this),
                    unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute -top-1 -right-1 bg-rose-400 text-white text-[10px] px-1.5 py-0.5 rounded-full shadow-sm",
                        children: unreadCount
                    }, void 0, false, {
                        fileName: "[project]/app/components/notifyButton.jsx",
                        lineNumber: 126,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/notifyButton.jsx",
                lineNumber: 119,
                columnNumber: 13
            }, this),
            showNotify && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed right-1/12 top-16 w-80 bg-white/90 backdrop-blur-md text-black rounded-xl shadow-2xl border border-gray-200 z-[9999]",
                children: notifications.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "divide-y divide-gray-100 max-h-64 overflow-y-auto",
                    children: notifications.map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "px-4 py-3 hover:bg-gray-100 transition",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-semibold flex justify-between text-gray-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: n.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/notifyButton.jsx",
                                            lineNumber: 142,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleDeleteNotification(n.id),
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
                                            lineNumber: 143,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/notifyButton.jsx",
                                    lineNumber: 141,
                                    columnNumber: 37
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-gray-800",
                                    children: n.content
                                }, void 0, false, {
                                    fileName: "[project]/app/components/notifyButton.jsx",
                                    lineNumber: 159,
                                    columnNumber: 37
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-gray-500",
                                    children: n.time
                                }, void 0, false, {
                                    fileName: "[project]/app/components/notifyButton.jsx",
                                    lineNumber: 162,
                                    columnNumber: 37
                                }, this)
                            ]
                        }, n.id, true, {
                            fileName: "[project]/app/components/notifyButton.jsx",
                            lineNumber: 137,
                            columnNumber: 33
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/components/notifyButton.jsx",
                    lineNumber: 135,
                    columnNumber: 25
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-5 text-center text-gray-500 text-sm",
                    children: "目前沒有通知"
                }, void 0, false, {
                    fileName: "[project]/app/components/notifyButton.jsx",
                    lineNumber: 169,
                    columnNumber: 25
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/notifyButton.jsx",
                lineNumber: 133,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/notifyButton.jsx",
        lineNumber: 118,
        columnNumber: 9
    }, this);
}
_s(NotifyButton, "/eYdQnrl3O45nNaQfsADwH/vjcs=", false, function() {
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
function Navbar() {
    _s();
    // 直接從 useSession 獲取 session 數據和狀態
    const { data: session, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])(); // status: "loading" | "authenticated" | "unauthenticated"
    // ✨ 移除所有與 useUser 和 sessionStorage 相關的 useEffect 和 state
    // const { user, setUser } = useUser();
    // const [isLogin, setIsLogin] = useState(...)
    // useEffect(() => { ... }, [session, status]);
    const getRoleLinks = ()=>{
        // 直接從 session.user 獲取角色，並進行安全檢查
        const userRole = session?.user?.role;
        if (!userRole) return []; // 如果沒有角色（例如未登入或仍在載入），返回空陣列
        // 根據角色返回對應的導覽連結
        switch(userRole){
            case "CUSTOMER":
                return [
                    {
                        href: "/menu",
                        name: "菜單"
                    },
                    {
                        href: "/orders",
                        name: "我的訂單"
                    }
                ];
            case "STAFF":
                return [
                    {
                        href: "/orders/pending",
                        name: "等待中的訂單"
                    },
                    {
                        href: "/orders/ready",
                        name: "完成的訂單"
                    }
                ];
            case "CHEF":
                return [
                    {
                        href: "/kitchen",
                        name: "廚房訂單"
                    }
                ];
            case "OWNER":
                return [
                    {
                        href: "/admin/menu",
                        name: "菜單管理"
                    },
                    {
                        href: "/admin/users",
                        name: "使用者管理"
                    },
                    {
                        href: "/orders/pending",
                        name: "等待中的訂單"
                    },
                    {
                        href: "/orders/ready",
                        name: "完成的訂單"
                    },
                    {
                        href: "/kitchen",
                        name: "廚房訂單"
                    }
                ];
            default:
                return [];
        }
    };
    const handelSignOut = ()=>{
        // 只需要調用 signOut() 即可，NextAuth.js 會處理 session 的清除
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])({
            callbackUrl: "/login"
        }); // 登出後跳轉到登入頁
    // ✨ 移除手動清除 sessionStorage 和 setUser 的邏輯
    // sessionStorage.removeItem("user");
    // setUser(null);
    // setIsLogin(false);
    };
    // 判斷是否已登入和載入狀態
    const isAuthenticated = status === "authenticated";
    const isLoading = status === "loading";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "sticky top-0 z-50 bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 text-white shadow-md",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center overflow-x-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "text-2xl font-bold tracking-wide hover:opacity-90 transition-opacity duration-300",
                    "aria-label": "前往首頁",
                    children: "🍽 網路早餐訂餐系統"
                }, void 0, false, {
                    fileName: "[project]/app/components/navbar.jsx",
                    lineNumber: 69,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-center gap-4",
                    children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm",
                        children: "載入中..."
                    }, void 0, false, {
                        fileName: "[project]/app/components/navbar.jsx",
                        lineNumber: 79,
                        columnNumber: 25
                    }, this) : isAuthenticated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            getRoleLinks().map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: link.href,
                                    className: "text-white font-medium hover:underline hover:text-yellow-200 transition duration-300",
                                    "aria-label": link.name,
                                    children: link.name
                                }, link.href, false, {
                                    fileName: "[project]/app/components/navbar.jsx",
                                    lineNumber: 83,
                                    columnNumber: 33
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline-block font-semibold",
                                children: [
                                    "您好，",
                                    session?.user?.name || session?.user?.email
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/navbar.jsx",
                                lineNumber: 93,
                                columnNumber: 29
                            }, this),
                            session.user?.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$notifyButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                userId: session.user.id
                            }, void 0, false, {
                                fileName: "[project]/app/components/navbar.jsx",
                                lineNumber: 99,
                                columnNumber: 50
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handelSignOut,
                                className: "bg-white text-pink-600 font-semibold px-3 py-1.5 rounded-md hover:bg-gray-100 transition duration-300",
                                "aria-label": "登出帳號",
                                children: "登出"
                            }, void 0, false, {
                                fileName: "[project]/app/components/navbar.jsx",
                                lineNumber: 101,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/login",
                        className: "bg-white text-pink-600 font-semibold px-4 py-1.5 rounded-md hover:bg-gray-100 transition duration-300",
                        "aria-label": "登入帳號",
                        children: "登入"
                    }, void 0, false, {
                        fileName: "[project]/app/components/navbar.jsx",
                        lineNumber: 110,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/navbar.jsx",
                    lineNumber: 77,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/navbar.jsx",
            lineNumber: 68,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/navbar.jsx",
        lineNumber: 67,
        columnNumber: 9
    }, this);
}
_s(Navbar, "ujwIunAD3hlHFoJLG3BNiDLiMqM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
_c = Navbar;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$navbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/navbar.jsx [app-client] (ecmascript)");
"use client";
;
;
;
;
function SessionNavbar({ session }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionProvider"], {
        session: session,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$navbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/app/components/sessionNavbar.jsx",
            lineNumber: 10,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/sessionNavbar.jsx",
        lineNumber: 9,
        columnNumber: 9
    }, this);
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
"use client";
;
;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionProvider"], {
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/authSessionProvider.jsx",
        lineNumber: 6,
        columnNumber: 10
    }, this);
}
_c = Providers;
var _c;
__turbopack_context__.k.register(_c, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/RouteEvents.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>RouterEvents)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function RouterEvents() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RouterEvents.useEffect": ()=>{
            const start = {
                "RouterEvents.useEffect.start": ()=>setLoading(true)
            }["RouterEvents.useEffect.start"];
            const end = {
                "RouterEvents.useEffect.end": ()=>setLoading(false)
            }["RouterEvents.useEffect.end"];
            router.events?.on("routeChangeStart", start);
            router.events?.on("routeChangeComplete", end);
            router.events?.on("routeChangeError", end);
            return ({
                "RouterEvents.useEffect": ()=>{
                    router.events?.off("routeChangeStart", start);
                    router.events?.off("routeChangeComplete", end);
                    router.events?.off("routeChangeError", end);
                }
            })["RouterEvents.useEffect"];
        }
    }["RouterEvents.useEffect"], [
        router
    ]);
    if (!loading) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-white/70 z-[9999] flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-gray-700 text-lg font-semibold",
            children: "頁面切換中..."
        }, void 0, false, {
            fileName: "[project]/app/components/RouteEvents.js",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/RouteEvents.js",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(RouterEvents, "MsU76xFyrXlTQc09gEkuFgUxVXA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = RouterEvents;
var _c;
__turbopack_context__.k.register(_c, "RouterEvents");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_a9af2f2d._.js.map