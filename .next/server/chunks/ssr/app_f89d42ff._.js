module.exports = {

"[project]/app/actions/order.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
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
}}),
"[project]/app/actions/data:f65a60 [app-ssr] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"7fc3477b1d6d7c39f584eda12d7e392d9b0c666788":"addNotification"},"app/actions/notification.js",""] */ __turbopack_context__.s({
    "addNotification": (()=>addNotification)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var addNotification = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("7fc3477b1d6d7c39f584eda12d7e392d9b0c666788", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "addNotification"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbm90aWZpY2F0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGFwcC9hY3Rpb25zL25vdGlmaWNhdGlvbi5qcyAo5L+u5q2j5b6MKVxyXG5cInVzZSBzZXJ2ZXJcIjsgLy8g4pyoIOW/hemgiOaciemAmeihjO+8jOWwh+WFtuaomeiomOeCuiBTZXJ2ZXIgQWN0aW9uc1xyXG5cclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnQC9saWIvcHJpc21hJzsgLy8g4pyoIOWwjuWFpeWFt+WQjeWwjuWHuueahCBwcmlzbWEg5a6i5oi256uvXHJcblxyXG5leHBvcnQgY29uc3QgYWRkTm90aWZpY2F0aW9uID0gYXN5bmMgKGJvZHksIHVzZXJJZCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyDinKgg6YCZ6KOh5oeJ6Kmy5piv5re75Yqg6YCa55+l5Yiw6LOH5paZ5bqr55qE6YKP6LyvXHJcbiAgICAgICAgaWYgKCF1c2VySWQgfHwgIWJvZHkgfHwgIWJvZHkubWVzc2FnZSB8fCAhYm9keS5vcmRlcklkIHx8ICFib2R5LnRpdGxlIHx8ICFib2R5LnR5cGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBub3RpZmljYXRpb24gZGF0YSBvciB1c2VySWQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBuZXdOb3RpZmljYXRpb24gPSBhd2FpdCBwcmlzbWEubm90aWZpY2F0aW9uLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHVzZXJJZDogdXNlcklkLFxyXG4gICAgICAgICAgICAgICAgb3JkZXJJZDogYm9keS5vcmRlcklkLCAvLyDlgYfoqK0gYm9keSDljIXlkKsgb3JkZXJJZFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYm9keS5tZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgLy8g5YW25LuW5qyE5L2N5aaCIGlzUmVhZCDmnIPmnIkgZGVmYXVsdCDlgLxcclxuICAgICAgICAgICAgICAgIC8vIHRpdGxlIOWSjCB0eXBlIOmcgOimgeWcqOS9oOeahCBOb3RpZmljYXRpb24gbW9kZWwg5Lit5a6a576p5oiW6JmV55CGXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBub3RpZmljYXRpb246IG5ld05vdGlmaWNhdGlvbiB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGFkZCBub3RpZmljYXRpb24gKFNlcnZlciBBY3Rpb24pOlwiLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyTm90aWZpY2F0aW9uID0gYXN5bmMgKHVzZXJJZCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBpZiAoIXVzZXJJZCkgdGhyb3cgbmV3IEVycm9yKFwiVXNlciBJRCBpcyByZXF1aXJlZCBmb3IgZmV0Y2hpbmcgbm90aWZpY2F0aW9ucy5cIik7XHJcblxyXG4gICAgICAgIGNvbnN0IG5vdGlmaWNhdGlvbnMgPSBhd2FpdCBwcmlzbWEubm90aWZpY2F0aW9uLmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgdXNlcklkIH0sXHJcbiAgICAgICAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiAnZGVzYycgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbm90aWZpY2F0aW9ucztcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBnZXQgdXNlciBub3RpZmljYXRpb25zIChTZXJ2ZXIgQWN0aW9uKTpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBbXTsgLy8g4pqg77iPIOWbnuWCs+epuumZo+WIl++8jOmBv+WFjeWJjeerr+W0qea9sFxyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVOb3RpZmljYXRpb24gPSBhc3luYyAobm90aWZpY2F0aW9uSWQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8g4pyoIOmAmeijoeaHieipsuaYr+W+nuizh+aWmeW6q+WIqumZpOmAmuefpeeahOmCj+i8r1xyXG4gICAgICAgIGlmICghbm90aWZpY2F0aW9uSWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90aWZpY2F0aW9uIElEIGlzIHJlcXVpcmVkIGZvciBkZWxldGluZy5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IHByaXNtYS5ub3RpZmljYXRpb24uZGVsZXRlKHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IG5vdGlmaWNhdGlvbklkIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGRlbGV0ZSBub3RpZmljYXRpb24gKFNlcnZlciBBY3Rpb24pOlwiLCBlcnJvcik7XHJcbiAgICAgICAgLy8g5aaC5p6c5piv5om+5LiN5Yiw6YCa55+l55qE6Yyv6Kqk77yM5Y+v5Lul5pu057K+56K65Zyw6JmV55CGXHJcbiAgICAgICAgaWYgKGVycm9yLmNvZGUgPT09ICdQMjAyNScpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgZXJyb3I6IFwiTm90aWZpY2F0aW9uIG5vdCBmb3VuZC5cIiB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59OyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoib1NBS2EifQ==
}}),
"[project]/app/kitchen/page.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>KitchenPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useMqttClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useMqttClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$order$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/order.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$f65a60__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:f65a60 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$mqttTopic$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/mqttTopic.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function KitchenPage() {
    const topic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$mqttTopic$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getKitchenOrderTopic"])(), []);
    const { messages, publishMessage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useMqttClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMqttClient"])({
        subscribeTopics: [
            topic
        ]
    });
    const [orders, setOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchOrders = async ()=>{
            try {
                let data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$order$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getKitchenOrders"])();
                if (!data) {
                    alert("取得廚房訂單失敗");
                    return;
                }
                setOrders(data);
            } catch (err) {
                alert("取得廚房訂單失敗");
            }
        };
        fetchOrders();
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (messages.length === 0) return;
        const lastMessage = messages[messages.length - 1];
        try {
            const newOrder = JSON.parse(lastMessage.payload);
            setOrders((prev)=>{
                const exists = prev.some((order)=>order.id === newOrder.id);
                return exists ? prev : [
                    ...prev,
                    newOrder
                ];
            });
        } catch (err) {
            console.error("無法解析 MQTT 訊息:", err);
        }
    }, [
        messages
    ]);
    const handleCompleteOrder = async (orderId)=>{
        try {
            // 標記為已完成（isCompleted = true）
            const completeRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$order$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editOrderCompletion"])(orderId);
            if (!completeRes) {
                alert("❌ 標記完成失敗！");
                return;
            }
            // 嘗試設為 READY（會判斷付款是否完成）
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$order$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editOrderStatus"])({
                status: "READY"
            }, orderId);
            if (!data) {
                alert("❌ 設定為 READY 失敗（可能尚未付款）");
                return;
            }
            // 從 UI 移除該訂單
            setOrders((prev)=>prev.filter((order)=>order.id !== orderId));
            // 發送通知
            const orderToUpdate = orders.find((order)=>order.id === orderId);
            const customerId = orderToUpdate?.customerId;
            if (!customerId) {
                alert("找不到顧客資料");
                return;
            }
            const message = `可領取訂單 ${orderId.slice(0, 8)}`;
            let notificationRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$f65a60__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["addNotification"])({
                orderId,
                message
            }, customerId);
            if (!notificationRes) {
                const res = await fetch(`/api/notifications/users/${customerId}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        orderId,
                        message
                    })
                });
                if (!res.ok) {
                    alert("傳送通知失敗");
                    return;
                }
                notificationRes = await res.json();
            }
            const readyNotificationTopic = `nuu/shisa/beigo/notify/order${customerId}`;
            if (notificationRes?.id) {
                const messagePayload = JSON.stringify({
                    type: "READY",
                    message: `訂單 ${orderId.slice(0, 8)} 已準備好`,
                    notificationId: notificationRes.id
                });
                publishMessage(readyNotificationTopic, messagePayload);
            }
        } catch (error) {
            console.error("完成訂單失敗:", error);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "max-w-7xl mx-auto px-4 py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-extrabold mb-6 text-gray-800",
                children: "👨‍🍳 廚房訂單看板"
            }, void 0, false, {
                fileName: "[project]/app/kitchen/page.jsx",
                lineNumber: 108,
                columnNumber: 13
            }, this),
            orders.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center text-gray-500 mt-12 text-lg",
                children: "暫無待處理訂單 🍳"
            }, void 0, false, {
                fileName: "[project]/app/kitchen/page.jsx",
                lineNumber: 112,
                columnNumber: 17
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
                children: orders.map((order, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-200 p-6 border border-gray-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-start mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-lg font-semibold text-gray-800",
                                            children: [
                                                "訂單 #",
                                                order.id.slice(0, 8)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/kitchen/page.jsx",
                                            lineNumber: 124,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-500",
                                            children: new Date(order.createdAt).toLocaleString()
                                        }, void 0, false, {
                                            fileName: "[project]/app/kitchen/page.jsx",
                                            lineNumber: 127,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/kitchen/page.jsx",
                                    lineNumber: 123,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/kitchen/page.jsx",
                                lineNumber: 122,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t pt-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2 text-sm",
                                    children: order.items.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-start",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium",
                                                        children: [
                                                            item.menuItem.name,
                                                            " × ",
                                                            item.quantity
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/kitchen/page.jsx",
                                                        lineNumber: 137,
                                                        columnNumber: 49
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/kitchen/page.jsx",
                                                    lineNumber: 136,
                                                    columnNumber: 45
                                                }, this),
                                                item.specialRequest && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-1 text-yellow-700 bg-yellow-50 border border-yellow-200 rounded px-2 py-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "備註："
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/kitchen/page.jsx",
                                                            lineNumber: 143,
                                                            columnNumber: 53
                                                        }, this),
                                                        " ",
                                                        item.specialRequest
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/kitchen/page.jsx",
                                                    lineNumber: 142,
                                                    columnNumber: 49
                                                }, this)
                                            ]
                                        }, `${item.id}-${idx}`, true, {
                                            fileName: "[project]/app/kitchen/page.jsx",
                                            lineNumber: 135,
                                            columnNumber: 41
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/kitchen/page.jsx",
                                    lineNumber: 133,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/kitchen/page.jsx",
                                lineNumber: 132,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleCompleteOrder(order.id),
                                className: "mt-5 w-full bg-green-600 text-white text-sm font-medium py-2 rounded-lg hover:bg-green-700 transition",
                                children: "✅ 標記為已完成"
                            }, void 0, false, {
                                fileName: "[project]/app/kitchen/page.jsx",
                                lineNumber: 150,
                                columnNumber: 29
                            }, this)
                        ]
                    }, `${order.id}-${idx}`, true, {
                        fileName: "[project]/app/kitchen/page.jsx",
                        lineNumber: 118,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/kitchen/page.jsx",
                lineNumber: 116,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/kitchen/page.jsx",
        lineNumber: 107,
        columnNumber: 9
    }, this);
}
}}),

};

//# sourceMappingURL=app_f89d42ff._.js.map