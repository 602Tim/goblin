(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/actions/order.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// app/actions/order.js
__turbopack_context__.s({
    "addOrder": (()=>addOrder),
    "deleteOrder": (()=>deleteOrder),
    "editOrderCompletion": (()=>editOrderCompletion),
    "editOrderStatus": (()=>editOrderStatus),
    "getCustomerOrder": (()=>getCustomerOrder),
    "getKitchenOrders": (()=>getKitchenOrders),
    "getOrderById": (()=>getOrderById),
    "getPendingOrders": (()=>getPendingOrders),
    "getReadyOrders": (()=>getReadyOrders)
});
const addOrder = async (body)=>{
    const response = await fetch("/api/order/checkout", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });
    if (!response.ok) {
        throw new Error("送出訂單失敗");
    }
    return response.json();
};
const getCustomerOrder = async (customerId)=>{
    return null;
};
async function editOrderStatus({ status, paymentStatus }, orderId) {
    console.log("➡️ 呼叫 editOrderStatus", {
        status,
        paymentStatus,
        orderId
    });
    try {
        // 獲取目前訂單資料
        const orderRes = await fetch(`/api/order/${orderId}`);
        if (!orderRes.ok) return null;
        const order = await orderRes.json();
        // 根據條件判斷是否可以更新為 READY 狀態
        if (status === "READY") {
            if (!(order.paymentStatus === true && order.completedAt)) {
                console.warn("❌ 無法更新為 READY：尚未完成付款或尚未標記完成");
                return null;
            }
        }
        const body = {};
        if (status !== undefined) body.status = status;
        if (paymentStatus !== undefined) body.paymentStatus = paymentStatus;
        const res = await fetch(`/api/order/${orderId}/status`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
        if (!res.ok) {
            const errorText = await res.text();
            console.error("❌ 更新失敗：", res.status, errorText);
            return null;
        }
        return await res.json();
    } catch (error) {
        console.error("❌ 修改訂單狀態失敗:", error);
        return null;
    }
}
;
const getPendingOrders = async ()=>{
    const response = await fetch(`/api/order?status=PENDING,PREPARING`);
    if (!response.ok) {
        console.error("❌ 無法取得訂單", response.status);
        return null;
    }
    return await response.json();
};
const getKitchenOrders = async ()=>{
    const response = await fetch("/api/kitchen");
    if (!response.ok) {
        console.error("❌ 無法取得廚房訂單", response.status);
        return null;
    }
    return await response.json();
};
const getReadyOrders = async ()=>{
    return null;
};
const getOrderById = async ()=>{
    return null;
};
async function editOrderCompletion(orderId) {
    try {
        const res = await fetch(`/api/order/${orderId}/status`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({})
        });
        if (!res.ok) return null;
        return await res.json();
    } catch (err) {
        console.error("❌ 完成訂單失敗:", err);
        return null;
    }
}
async function deleteOrder(orderId) {
    const res = await fetch(`/api/order/${orderId}`, {
        method: "DELETE"
    });
    if (!res.ok) return null;
    return await res.json();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/actions/data:f65a60 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"7fc3477b1d6d7c39f584eda12d7e392d9b0c666788":"addNotification"},"app/actions/notification.js",""] */ __turbopack_context__.s({
    "addNotification": (()=>addNotification)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var addNotification = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7fc3477b1d6d7c39f584eda12d7e392d9b0c666788", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "addNotification"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbm90aWZpY2F0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGFwcC9hY3Rpb25zL25vdGlmaWNhdGlvbi5qcyAo5L+u5q2j5b6MKVxyXG5cInVzZSBzZXJ2ZXJcIjsgLy8g4pyoIOW/hemgiOaciemAmeihjO+8jOWwh+WFtuaomeiomOeCuiBTZXJ2ZXIgQWN0aW9uc1xyXG5cclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnQC9saWIvcHJpc21hJzsgLy8g4pyoIOWwjuWFpeWFt+WQjeWwjuWHuueahCBwcmlzbWEg5a6i5oi256uvXHJcblxyXG5leHBvcnQgY29uc3QgYWRkTm90aWZpY2F0aW9uID0gYXN5bmMgKGJvZHksIHVzZXJJZCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyDinKgg6YCZ6KOh5oeJ6Kmy5piv5re75Yqg6YCa55+l5Yiw6LOH5paZ5bqr55qE6YKP6LyvXHJcbiAgICAgICAgaWYgKCF1c2VySWQgfHwgIWJvZHkgfHwgIWJvZHkubWVzc2FnZSB8fCAhYm9keS5vcmRlcklkIHx8ICFib2R5LnRpdGxlIHx8ICFib2R5LnR5cGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBub3RpZmljYXRpb24gZGF0YSBvciB1c2VySWQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBuZXdOb3RpZmljYXRpb24gPSBhd2FpdCBwcmlzbWEubm90aWZpY2F0aW9uLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHVzZXJJZDogdXNlcklkLFxyXG4gICAgICAgICAgICAgICAgb3JkZXJJZDogYm9keS5vcmRlcklkLCAvLyDlgYfoqK0gYm9keSDljIXlkKsgb3JkZXJJZFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYm9keS5tZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgLy8g5YW25LuW5qyE5L2N5aaCIGlzUmVhZCDmnIPmnIkgZGVmYXVsdCDlgLxcclxuICAgICAgICAgICAgICAgIC8vIHRpdGxlIOWSjCB0eXBlIOmcgOimgeWcqOS9oOeahCBOb3RpZmljYXRpb24gbW9kZWwg5Lit5a6a576p5oiW6JmV55CGXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBub3RpZmljYXRpb246IG5ld05vdGlmaWNhdGlvbiB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGFkZCBub3RpZmljYXRpb24gKFNlcnZlciBBY3Rpb24pOlwiLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyTm90aWZpY2F0aW9uID0gYXN5bmMgKHVzZXJJZCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBpZiAoIXVzZXJJZCkgdGhyb3cgbmV3IEVycm9yKFwiVXNlciBJRCBpcyByZXF1aXJlZCBmb3IgZmV0Y2hpbmcgbm90aWZpY2F0aW9ucy5cIik7XHJcblxyXG4gICAgICAgIGNvbnN0IG5vdGlmaWNhdGlvbnMgPSBhd2FpdCBwcmlzbWEubm90aWZpY2F0aW9uLmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgdXNlcklkIH0sXHJcbiAgICAgICAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiAnZGVzYycgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbm90aWZpY2F0aW9ucztcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBnZXQgdXNlciBub3RpZmljYXRpb25zIChTZXJ2ZXIgQWN0aW9uKTpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBbXTsgLy8g4pqg77iPIOWbnuWCs+epuumZo+WIl++8jOmBv+WFjeWJjeerr+W0qea9sFxyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVOb3RpZmljYXRpb24gPSBhc3luYyAobm90aWZpY2F0aW9uSWQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8g4pyoIOmAmeijoeaHieipsuaYr+W+nuizh+aWmeW6q+WIqumZpOmAmuefpeeahOmCj+i8r1xyXG4gICAgICAgIGlmICghbm90aWZpY2F0aW9uSWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90aWZpY2F0aW9uIElEIGlzIHJlcXVpcmVkIGZvciBkZWxldGluZy5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IHByaXNtYS5ub3RpZmljYXRpb24uZGVsZXRlKHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IG5vdGlmaWNhdGlvbklkIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGRlbGV0ZSBub3RpZmljYXRpb24gKFNlcnZlciBBY3Rpb24pOlwiLCBlcnJvcik7XHJcbiAgICAgICAgLy8g5aaC5p6c5piv5om+5LiN5Yiw6YCa55+l55qE6Yyv6Kqk77yM5Y+v5Lul5pu057K+56K65Zyw6JmV55CGXHJcbiAgICAgICAgaWYgKGVycm9yLmNvZGUgPT09ICdQMjAyNScpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgZXJyb3I6IFwiTm90aWZpY2F0aW9uIG5vdCBmb3VuZC5cIiB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59OyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoib1NBS2EifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/orders/pending/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PendingOrdersPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useMqttClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useMqttClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$order$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/order.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$f65a60__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:f65a60 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$mqttTopic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/mqttTopic.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function PendingOrdersPage() {
    _s();
    const [orders, setOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const { messages, publishMessage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useMqttClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMqttClient"])({
        subscribeTopics: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$mqttTopic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOrderCheckoutTopic"])(),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$mqttTopic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCustomerCancelOrderTopic"])("#")
        ]
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PendingOrdersPage.useEffect": ()=>{
            const getOrders = {
                "PendingOrdersPage.useEffect.getOrders": async ()=>{
                    try {
                        let data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$order$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPendingOrders"])();
                        if (!data) {
                            const response = await fetch(`/api/order`);
                            if (!response.ok) {
                                alert("獲取訂單失敗");
                                return;
                            }
                            data = await response.json();
                        }
                        setOrders(data.map({
                            "PendingOrdersPage.useEffect.getOrders": (order)=>({
                                    ...order,
                                    uiAccepted: false
                                })
                        }["PendingOrdersPage.useEffect.getOrders"]));
                    } catch (err) {
                        console.error("獲取訂單失敗:", err);
                        alert("獲取訂單失敗");
                    }
                }
            }["PendingOrdersPage.useEffect.getOrders"];
            getOrders();
        }
    }["PendingOrdersPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PendingOrdersPage.useEffect": ()=>{
            if (messages.length === 0) return;
            const lastMessage = messages[messages.length - 1];
            const topic = lastMessage.topic;
            const isCheckoutOrder = topic === (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$mqttTopic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOrderCheckoutTopic"])();
            const isCancelOrder = topic.startsWith((0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$mqttTopic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCustomerCancelOrderTopic"])(""));
            if (isCheckoutOrder) {
                try {
                    const newOrder = JSON.parse(lastMessage.payload);
                    setOrders({
                        "PendingOrdersPage.useEffect": (prev)=>prev.some({
                                "PendingOrdersPage.useEffect": (order)=>order.id === newOrder.id
                            }["PendingOrdersPage.useEffect"]) ? prev : [
                                {
                                    ...newOrder,
                                    uiAccepted: false
                                },
                                ...prev
                            ]
                    }["PendingOrdersPage.useEffect"]);
                } catch (err) {
                    console.error("無法解析新訂單的 MQTT 訊息:", err);
                }
            }
            if (isCancelOrder) {
                try {
                    const payload = JSON.parse(lastMessage.payload);
                    setOrders({
                        "PendingOrdersPage.useEffect": (prev)=>prev.filter({
                                "PendingOrdersPage.useEffect": (order)=>order.id !== payload.orderId
                            }["PendingOrdersPage.useEffect"])
                    }["PendingOrdersPage.useEffect"]);
                } catch (err) {
                    console.error("無法解析取消訂單的 MQTT 訊息:", err);
                }
            }
        }
    }["PendingOrdersPage.useEffect"], [
        messages
    ]);
    const updateOrderStatus = (orderId, updates)=>{
        setOrders((prev)=>prev.map((order)=>order.id === orderId ? {
                    ...order,
                    ...updates
                } : order));
    };
    const handleAcceptOrder = async (orderId)=>{
        const acceptedOrder = orders.find((order)=>order.id === orderId);
        if (!acceptedOrder) return;
        if (!acceptedOrder.paymentStatus) {
            alert("請先確認顧客已付款！");
            return;
        }
        try {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$order$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editOrderStatus"])({
                status: "PREPARING"
            }, orderId);
            if (!data) throw new Error("修改訂單狀態失敗");
            updateOrderStatus(orderId, {
                status: "PREPARING"
            });
            const message = `訂單 ${orderId.slice(0, 8)} 商家已接單，正在準備中`;
            const customerId = acceptedOrder.customerId;
            const notificationRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$f65a60__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["addNotification"])({
                orderId,
                message
            }, customerId);
            if (!notificationRes) throw new Error("傳送通知失敗");
            const notifyTopic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$mqttTopic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNotificationTopicByUserId"])(customerId);
            publishMessage(notifyTopic, JSON.stringify({
                notificationId: notificationRes.id,
                message
            }));
            const kitchenTopic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$mqttTopic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOrderToKitchenTopic"])();
            const kitchenPayload = JSON.stringify({
                orderId: acceptedOrder.id,
                items: acceptedOrder.items.map((item)=>({
                        name: item.menuItem.name,
                        quantity: item.quantity,
                        specialRequest: item.specialRequest
                    })),
                totalAmount: acceptedOrder.totalAmount,
                createdAt: acceptedOrder.createdAt
            });
            publishMessage(kitchenTopic, kitchenPayload);
        } catch (error) {
            console.error("接受訂單失敗:", error);
            alert(`❌ 接受訂單失敗：${error.message}`);
        }
    };
    const handleConfirmPayment = async (orderId)=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$order$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editOrderStatus"])({
                paymentStatus: true
            }, orderId);
            if (!res) throw new Error("更新付款狀態失敗");
            updateOrderStatus(orderId, {
                paymentStatus: true
            });
            const order = orders.find((o)=>o.id === orderId);
            if (!order) return;
            const message = `訂單 ${orderId.slice(0, 8)} 已確認付款`;
            const customerId = order.customerId;
            const notificationRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$f65a60__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["addNotification"])({
                orderId,
                message
            }, customerId);
            if (!notificationRes) throw new Error("傳送通知失敗");
            const topic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$mqttTopic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNotificationTopicByUserId"])(customerId);
            publishMessage(topic, JSON.stringify({
                message,
                notificationId: notificationRes.id
            }));
        } catch (err) {
            console.error("確認付款失敗:", err);
            alert(`❌ 確認付款失敗：${err.message}`);
        }
    };
    const handleDeleteOrder = async (orderId, customerId)=>{
        try {
            const res = await fetch(`/api/orders/${orderId}`, {
                method: "DELETE"
            });
            if (!res.ok) throw new Error("✅");
            setOrders((prev)=>prev.filter((order)=>order.id !== orderId));
            alert("✅ 已刪除訂單");
            const message = `訂單 ${orderId.slice(0, 8)} 已被商家取消`;
            const notifyRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$f65a60__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["addNotification"])({
                orderId,
                message
            }, customerId);
            if (notifyRes) {
                const topic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$mqttTopic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNotificationTopicByUserId"])(customerId);
                publishMessage(topic, JSON.stringify({
                    notificationId: notifyRes.id,
                    message
                }));
            }
            const kitchenTopic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$mqttTopic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOrderToKitchenTopic"])();
            publishMessage(kitchenTopic, JSON.stringify({
                type: "CANCEL_ORDER",
                orderId
            }));
        } catch (err) {
            console.error("刪除訂單錯誤:", err);
            alert("已刪除" + err.message);
        }
    };
    const renderOrderActions = (order)=>{
        const isLocallyAccepted = order.uiAccepted;
        if (order.status === "PENDING" && !isLocallyAccepted) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>updateOrderStatus(order.id, {
                                uiAccepted: true
                            }),
                        className: "bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition",
                        children: "接受訂單"
                    }, void 0, false, {
                        fileName: "[project]/app/orders/pending/page.jsx",
                        lineNumber: 196,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            if (confirm("確定要刪除此訂單嗎？")) {
                                handleDeleteOrder(order.id, order.customerId);
                            }
                        },
                        className: "bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition",
                        children: "刪除訂單"
                    }, void 0, false, {
                        fileName: "[project]/app/orders/pending/page.jsx",
                        lineNumber: 202,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/orders/pending/page.jsx",
                lineNumber: 195,
                columnNumber: 17
            }, this);
        }
        if (order.status === "PENDING" && isLocallyAccepted) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleConfirmPayment(order.id),
                        className: "bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition",
                        disabled: order.paymentStatus,
                        children: order.paymentStatus ? "已確認付款" : "確認付款"
                    }, void 0, false, {
                        fileName: "[project]/app/orders/pending/page.jsx",
                        lineNumber: 219,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleAcceptOrder(order.id),
                        className: "bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition",
                        children: "標記為製作中"
                    }, void 0, false, {
                        fileName: "[project]/app/orders/pending/page.jsx",
                        lineNumber: 226,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            if (confirm("確定要刪除此訂單嗎？")) {
                                handleDeleteOrder(order.id, order.customerId);
                            }
                        },
                        className: "bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition",
                        children: "刪除訂單"
                    }, void 0, false, {
                        fileName: "[project]/app/orders/pending/page.jsx",
                        lineNumber: 232,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/orders/pending/page.jsx",
                lineNumber: 218,
                columnNumber: 17
            }, this);
        }
        if (order.status === "READY") {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-green-600 font-semibold",
                children: "餐點已完成，等待取餐"
            }, void 0, false, {
                fileName: "[project]/app/orders/pending/page.jsx",
                lineNumber: 248,
                columnNumber: 17
            }, this);
        }
        return null;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-orange-100 via-pink-100 to-red-100 px-4 sm:px-6 py-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold mb-6 text-center sm:text-left text-gray-800",
                    children: "進行中訂單"
                }, void 0, false, {
                    fileName: "[project]/app/orders/pending/page.jsx",
                    lineNumber: 258,
                    columnNumber: 17
                }, this),
                orders.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500 text-center sm:text-left",
                    children: "目前沒有進行中的訂單。"
                }, void 0, false, {
                    fileName: "[project]/app/orders/pending/page.jsx",
                    lineNumber: 263,
                    columnNumber: 21
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: orders.map((order, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-bold text-gray-800",
                                                    children: [
                                                        "訂單 #",
                                                        order.id.slice(0, 8)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/orders/pending/page.jsx",
                                                    lineNumber: 275,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-500",
                                                    children: new Date(order.createdAt).toLocaleString()
                                                }, void 0, false, {
                                                    fileName: "[project]/app/orders/pending/page.jsx",
                                                    lineNumber: 278,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/orders/pending/page.jsx",
                                            lineNumber: 274,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm font-semibold mt-2 sm:mt-0",
                                            children: [
                                                "狀態：",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `px-2 py-1 rounded-full text-white ${order.status === 'PENDING' ? 'bg-gray-500' : order.status === 'PREPARING' ? 'bg-blue-500' : order.status === 'READY' ? 'bg-green-500' : 'bg-red-500'}`,
                                                    children: order.status
                                                }, void 0, false, {
                                                    fileName: "[project]/app/orders/pending/page.jsx",
                                                    lineNumber: 284,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/orders/pending/page.jsx",
                                            lineNumber: 282,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/orders/pending/page.jsx",
                                    lineNumber: 273,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-3 space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "總金額："
                                                }, void 0, false, {
                                                    fileName: "[project]/app/orders/pending/page.jsx",
                                                    lineNumber: 296,
                                                    columnNumber: 41
                                                }, this),
                                                " $",
                                                order.totalAmount.toFixed(2)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/orders/pending/page.jsx",
                                            lineNumber: 295,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "顧客："
                                                }, void 0, false, {
                                                    fileName: "[project]/app/orders/pending/page.jsx",
                                                    lineNumber: 299,
                                                    columnNumber: 41
                                                }, this),
                                                " ",
                                                order.customer.name
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/orders/pending/page.jsx",
                                            lineNumber: 298,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "付款狀態："
                                                }, void 0, false, {
                                                    fileName: "[project]/app/orders/pending/page.jsx",
                                                    lineNumber: 302,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: order.paymentStatus ? "text-green-600" : "text-red-600",
                                                    children: order.paymentStatus ? "已付款" : "未付款"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/orders/pending/page.jsx",
                                                    lineNumber: 303,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/orders/pending/page.jsx",
                                            lineNumber: 301,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/orders/pending/page.jsx",
                                    lineNumber: 294,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-t pt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-sm font-semibold mb-2 text-gray-700",
                                            children: "餐點內容："
                                        }, void 0, false, {
                                            fileName: "[project]/app/orders/pending/page.jsx",
                                            lineNumber: 310,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2",
                                            children: order.items.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex justify-between text-sm text-gray-600",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                item.menuItem.name,
                                                                " × ",
                                                                item.quantity,
                                                                item.specialRequest && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "block text-xs text-gray-400",
                                                                    children: [
                                                                        "備註：",
                                                                        item.specialRequest
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/orders/pending/page.jsx",
                                                                    lineNumber: 322,
                                                                    columnNumber: 57
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/orders/pending/page.jsx",
                                                            lineNumber: 319,
                                                            columnNumber: 49
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                "$",
                                                                (item.menuItem.price * item.quantity).toFixed(2)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/orders/pending/page.jsx",
                                                            lineNumber: 327,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, `${item.id}-${idx}`, true, {
                                                    fileName: "[project]/app/orders/pending/page.jsx",
                                                    lineNumber: 315,
                                                    columnNumber: 45
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/orders/pending/page.jsx",
                                            lineNumber: 313,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/orders/pending/page.jsx",
                                    lineNumber: 309,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 flex flex-col sm:flex-row justify-end items-center gap-3",
                                    children: renderOrderActions(order)
                                }, void 0, false, {
                                    fileName: "[project]/app/orders/pending/page.jsx",
                                    lineNumber: 335,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, `${order.id}-${idx}`, true, {
                            fileName: "[project]/app/orders/pending/page.jsx",
                            lineNumber: 269,
                            columnNumber: 29
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/orders/pending/page.jsx",
                    lineNumber: 267,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/orders/pending/page.jsx",
            lineNumber: 257,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/orders/pending/page.jsx",
        lineNumber: 256,
        columnNumber: 9
    }, this);
}
_s(PendingOrdersPage, "6UeZhfNocLQs6q1DKDAw52+MJok=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useMqttClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMqttClient"]
    ];
});
_c = PendingOrdersPage;
var _c;
__turbopack_context__.k.register(_c, "PendingOrdersPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_9f5fac73._.js.map