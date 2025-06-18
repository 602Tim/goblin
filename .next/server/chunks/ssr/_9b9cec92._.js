module.exports = {

"[project]/hooks/useUser.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>useUser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
function useUser() {
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const user = sessionStorage.getItem("user");
        setUser(JSON.parse(user));
        setLoading(false);
    }, []);
    const userSetter = (user)=>{
        if (!user) {
            sessionStorage.removeItem("user");
            setUser({});
            return;
        }
        sessionStorage.setItem("user", JSON.stringify(user));
        setUser(user);
    };
    return {
        user,
        setUser: userSetter,
        loading
    };
}
}}),
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
"[project]/app/orders/ready/page.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ReadyOrdersPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useUser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useUser.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useMqttClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useMqttClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$mqttTopic$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/mqttTopic.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$order$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/order.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function ReadyOrdersPage() {
    const [orders, setOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const { user, loading: userLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useUser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const [topic, setTopic] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const { messages, publishMessage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useMqttClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMqttClient"])({
        subscribeTopics: topic ? [
            topic
        ] : []
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (userLoading) {
            return;
        }
        setTopic((0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$mqttTopic$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getKitchenReadyOrderTopic"])("#"));
        const getOrders = async ()=>{
            try {
                // action
                let data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$order$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getReadyOrders"])();
                if (!data) {
                    // api
                    const response = await fetch(`/api/order/ready`);
                    if (!response.ok) {
                        alert("獲取完成訂單失敗");
                        return;
                    }
                    data = await response.json();
                }
                setOrders(data);
                setLoading(false);
            } catch (err) {
                alert("獲取完成訂單失敗");
            }
        };
        getOrders();
    }, [
        userLoading
    ]);
    // 當接收到 MQTT 訊息時，更新訂單列表
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (messages.length === 0) return;
        const lastMessage = messages[messages.length - 1];
        try {
            const newOrder = JSON.parse(lastMessage.payload);
            setOrders((prev)=>{
                // 檢查是否已存在相同 ID 的訂單
                const exists = prev.some((order)=>order.id === newOrder.id);
                return exists ? prev : [
                    ...prev,
                    {
                        ...newOrder,
                        id: newOrder.orderId || newOrder.id
                    }
                ];
            });
        } catch (err) {
            console.error("無法解析 MQTT 訊息:", err);
        }
    }, [
        messages
    ]);
    const handleCompleteButton = async (orderId)=>{
        let data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$order$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editOrderStatus"])({
            status: "COMPLETED"
        }, orderId);
        if (!data) {
            const response = await fetch(`/api/order/${orderId}/status`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    status: "COMPLETED"
                })
            });
            if (!response.ok) {
                alert("修改訂單狀態失敗");
                return;
            }
            data = await response.json(); // 加這行
        }
        // 先從畫面移除
        setOrders((prev)=>prev.filter((o)=>o.id !== orderId));
        // 取得完整訂單資料（用於通知顧客）
        let orderData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$order$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOrderById"])(orderId);
        if (!orderData) {
            const orderRes = await fetch(`/api/order/${orderId}`);
            if (!orderRes.ok) {
                alert("獲取訂單詳情失敗");
                return;
            }
            orderData = await orderRes.json();
        }
        // 發布 MQTT 通知給顧客
        const customerId = orderData.customer?.id;
        if (!customerId) {
            console.warn("找不到顧客 ID，無法發布 MQTT 訊息");
            return;
        }
        const topic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$mqttTopic$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCustomerOrderUpdateTopic"])(customerId); // 顧客專屬更新主題
        const payload = JSON.stringify({
            type: "ORDER_COMPLETED",
            orderId: orderData.id,
            status: "COMPLETED",
            timestamp: new Date().toISOString()
        });
        publishMessage(topic, payload);
        console.log("📢 已發布 MQTT 通知：", topic, payload);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-red-50 py-10 px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold text-gray-800 mb-8",
                    children: "🍱 完成的訂單"
                }, void 0, false, {
                    fileName: "[project]/app/orders/ready/page.jsx",
                    lineNumber: 130,
                    columnNumber: 17
                }, this),
                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        ...Array(3)
                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-pulse h-24 bg-white rounded-lg shadow"
                        }, i, false, {
                            fileName: "[project]/app/orders/ready/page.jsx",
                            lineNumber: 137,
                            columnNumber: 29
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/orders/ready/page.jsx",
                    lineNumber: 135,
                    columnNumber: 21
                }, this) : orders.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center text-gray-500 mt-20 text-lg",
                    children: "🎉 目前沒有完成的訂單"
                }, void 0, false, {
                    fileName: "[project]/app/orders/ready/page.jsx",
                    lineNumber: 144,
                    columnNumber: 21
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    layout: true,
                    className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
                    children: orders.map((order)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            layout: true,
                            className: "bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition-shadow duration-300",
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.3
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold text-pink-600 mb-2",
                                    children: [
                                        "訂單 #",
                                        order.id.slice(0, 8)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/orders/ready/page.jsx",
                                    lineNumber: 161,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-800 font-medium mb-1",
                                    children: [
                                        "顧客：",
                                        order.customer?.name
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/orders/ready/page.jsx",
                                    lineNumber: 164,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "text-sm list-disc pl-5 mb-2 space-y-1",
                                    children: order.items.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                item.menuItem.name,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-500 ml-4",
                                                    children: [
                                                        "備註：",
                                                        item.specialRequest
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/orders/ready/page.jsx",
                                                    lineNumber: 172,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, idx, true, {
                                            fileName: "[project]/app/orders/ready/page.jsx",
                                            lineNumber: 169,
                                            columnNumber: 41
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/orders/ready/page.jsx",
                                    lineNumber: 167,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-500",
                                    children: [
                                        "訂單建立時間：",
                                        order.createdAt
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/orders/ready/page.jsx",
                                    lineNumber: 179,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md font-semibold transition",
                                    onClick: ()=>{
                                        handleCompleteButton(order.orderId || order.id);
                                    },
                                    children: "✅ 已交付"
                                }, void 0, false, {
                                    fileName: "[project]/app/orders/ready/page.jsx",
                                    lineNumber: 182,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, order.id, true, {
                            fileName: "[project]/app/orders/ready/page.jsx",
                            lineNumber: 153,
                            columnNumber: 29
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/orders/ready/page.jsx",
                    lineNumber: 148,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/orders/ready/page.jsx",
            lineNumber: 129,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/orders/ready/page.jsx",
        lineNumber: 128,
        columnNumber: 9
    }, this);
}
}}),

};

//# sourceMappingURL=_9b9cec92._.js.map