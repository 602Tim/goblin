(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/hooks/useUser.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>useUser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useUser() {
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useUser.useEffect": ()=>{
            const user = sessionStorage.getItem("user");
            setUser(JSON.parse(user));
            setLoading(false);
        }
    }["useUser.useEffect"], []);
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
_s(useUser, "rZh6Jwd5VooHzMg08whDIVlIXGQ=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/actions/order.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// app/actions/order.js
__turbopack_context__.s({
    "addOrder": (()=>addOrder),
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
const editOrderStatus = async (body, orderId)=>{
    return null;
};
const getPendingOrders = async ()=>{
    return null;
};
const getKitchenOrders = async ()=>{
    return null;
};
const getReadyOrders = async ()=>{
    return null;
};
const getOrderById = async ()=>{
    return null;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/orders/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>OrdersPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useMqttClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useMqttClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useUser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useUser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$order$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/order.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function OrdersPage() {
    _s();
    const [orders, setOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [topic, setTopic] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const { user, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useUser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const { messages, publishMessage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useMqttClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMqttClient"])({
        subscribeTopics: topic ? [
            topic
        ] : []
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrdersPage.useEffect": ()=>{
            if (loading) {
                return;
            }
            setTopic(getKitchenReadyOrderTopic("#"));
            const getOrders = {
                "OrdersPage.useEffect.getOrders": async ()=>{
                    try {
                        // action
                        let data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$order$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCustomerOrder"])(user.id);
                        if (!data) {
                            // api
                            const response = await fetch(`/api/orders/customers/${user.id}`);
                            data = await response.json();
                        }
                        setOrders(data);
                    } catch (err) {
                        alert("獲取顧客訂單失敗");
                    }
                }
            }["OrdersPage.useEffect.getOrders"];
            getOrders();
        }
    }["OrdersPage.useEffect"], [
        loading
    ]);
    // 當收到 MQTT 訊息時，更新訂單狀態
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrdersPage.useEffect": ()=>{
            if (messages.length === 0) return;
            const lastMessage = messages[messages.length - 1];
            const payload = JSON.parse(lastMessage.payload);
            const status = payload.status;
            const orderId = payload.orderId;
            setOrders({
                "OrdersPage.useEffect": (prev)=>{
                    return prev.map({
                        "OrdersPage.useEffect": (order)=>order.id === orderId ? {
                                ...order,
                                status
                            } : order
                    }["OrdersPage.useEffect"]);
                }
            }["OrdersPage.useEffect"]);
        }
    }["OrdersPage.useEffect"], [
        messages
    ]);
    const getStatusText = (status)=>{
        switch(status){
            case "PENDING":
                return "店家未接單";
            case "PREPARING":
                return "餐點準備中";
            case "READY":
                return "餐點可領取";
            case "COMPLETED":
                return "交易完成";
            case "CANCELLED":
                return "交易取消";
            default:
                return "錯誤...";
        }
    };
    const getStatusColor = (status)=>{
        switch(status){
            case "PENDING":
                return "bg-yellow-100 text-yellow-800";
            case "PREPARING":
                return "bg-blue-100 text-blue-800";
            case "READY":
                return "bg-green-100 text-green-800";
            case "COMPLETED":
                return "bg-gray-100 text-gray-800";
            case "CANCELLED":
                return "bg-red-100 text-red-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };
    const handleCancelOrderButton = async (orderId)=>{
        try {
            // action
            let data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$order$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editOrderStatus"])({
                status: "CANCELLED"
            }, orderId);
            if (!data) {
                // api
                const response = await fetch(`/api/orders/${orderId}/status`, {
                    method: "PATCH",
                    body: JSON.stringify({
                        status: "CANCELLED"
                    })
                });
                if (!response.ok) {
                    alert("訂單取消失敗");
                    return;
                }
            }
            setOrders((prev)=>prev.map((order)=>order.id !== orderId ? order : {
                        ...order,
                        status: "CANCELLED"
                    }));
            // 發布訂單取消的 MQTT 訊息
            const topic = ""; // TODO: 設定 MQTT 主題
        // TODO: 準備訊息內容
        // TODO: 發布 MQTT 訊息
        } catch (error) {
            alert("訂單取消失敗");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-orange-100 via-pink-100 to-red-100 px-4 sm:px-6 py-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold mb-6 text-center sm:text-left text-gray-800",
                    children: "我的訂單"
                }, void 0, false, {
                    fileName: "[project]/app/orders/page.jsx",
                    lineNumber: 134,
                    columnNumber: 17
                }, this),
                orders.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500 text-center sm:text-left",
                    children: "您目前沒有任何訂單。"
                }, void 0, false, {
                    fileName: "[project]/app/orders/page.jsx",
                    lineNumber: 139,
                    columnNumber: 21
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: orders.map((order)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                    fileName: "[project]/app/orders/page.jsx",
                                                    lineNumber: 151,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-500",
                                                    children: new Date(order.createdAt).toLocaleString()
                                                }, void 0, false, {
                                                    fileName: "[project]/app/orders/page.jsx",
                                                    lineNumber: 154,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/orders/page.jsx",
                                            lineNumber: 150,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `mt-2 sm:mt-0 px-3 py-2 rounded-full text-xs font-medium ${getStatusColor(order.status)}`,
                                            children: getStatusText(order.status)
                                        }, void 0, false, {
                                            fileName: "[project]/app/orders/page.jsx",
                                            lineNumber: 160,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/orders/page.jsx",
                                    lineNumber: 149,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-3 space-y-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-700",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "總金額："
                                            }, void 0, false, {
                                                fileName: "[project]/app/orders/page.jsx",
                                                lineNumber: 171,
                                                columnNumber: 41
                                            }, this),
                                            " $",
                                            order.totalAmount.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/orders/page.jsx",
                                        lineNumber: 170,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/orders/page.jsx",
                                    lineNumber: 169,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-t pt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-sm font-semibold mb-2 text-gray-700",
                                            children: "餐點內容："
                                        }, void 0, false, {
                                            fileName: "[project]/app/orders/page.jsx",
                                            lineNumber: 177,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2",
                                            children: order.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex justify-between text-sm text-gray-600",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                item.menuItem.name,
                                                                " ×",
                                                                " ",
                                                                item.quantity,
                                                                item.specialRequest && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "block text-xs text-gray-400",
                                                                    children: [
                                                                        "備註：",
                                                                        item.specialRequest
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/orders/page.jsx",
                                                                    lineNumber: 190,
                                                                    columnNumber: 57
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/orders/page.jsx",
                                                            lineNumber: 186,
                                                            columnNumber: 49
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                "$",
                                                                (item.menuItem.price * item.quantity).toFixed(2)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/orders/page.jsx",
                                                            lineNumber: 198,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, item.id, true, {
                                                    fileName: "[project]/app/orders/page.jsx",
                                                    lineNumber: 182,
                                                    columnNumber: 45
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/orders/page.jsx",
                                            lineNumber: 180,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/orders/page.jsx",
                                    lineNumber: 176,
                                    columnNumber: 33
                                }, this),
                                order.status === "PENDING" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 text-center sm:text-right",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            handleCancelOrderButton(order.id);
                                        },
                                        className: "inline-block bg-gradient-to-r from-red-400 to-red-600 text-white px-5 py-2 rounded-md hover:opacity-90 transition",
                                        children: "取消訂單"
                                    }, void 0, false, {
                                        fileName: "[project]/app/orders/page.jsx",
                                        lineNumber: 211,
                                        columnNumber: 41
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/orders/page.jsx",
                                    lineNumber: 210,
                                    columnNumber: 37
                                }, this)
                            ]
                        }, order.id, true, {
                            fileName: "[project]/app/orders/page.jsx",
                            lineNumber: 145,
                            columnNumber: 29
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/orders/page.jsx",
                    lineNumber: 143,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/orders/page.jsx",
            lineNumber: 133,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/orders/page.jsx",
        lineNumber: 132,
        columnNumber: 9
    }, this);
}
_s(OrdersPage, "arcz8/qFQaU67RtQunaDt93Odv8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useUser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useMqttClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMqttClient"]
    ];
});
_c = OrdersPage;
var _c;
__turbopack_context__.k.register(_c, "OrdersPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_4c58c575._.js.map