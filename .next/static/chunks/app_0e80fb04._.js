(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

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
"[project]/app/actions/data:d7d7f5 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"7fcf98468f5917bf8f7794860eddebbc2adcf0c623":"getMenuItems"},"app/actions/menu.js",""] */ __turbopack_context__.s({
    "getMenuItems": (()=>getMenuItems)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getMenuItems = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7fcf98468f5917bf8f7794860eddebbc2adcf0c623", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getMenuItems"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAvYWN0aW9ucy9tZW51LmpzXHJcbid1c2Ugc2VydmVyJzsgLy8g5qiZ6KiY54K6IFNlcnZlciBBY3Rpb25cclxuXHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvbGliL3ByaXNtYSc7IC8vIOW8leWFpSBQcmlzbWEg5a6i5oi256uvXHJcbmltcG9ydCB7IHByb21pc2VzIGFzIGZzIH0gZnJvbSAnZnMnOyAvLyDlvJXlhaUgTm9kZS5qcyDnmoTmqpTmoYjns7vntbHmqKHntYRcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7IC8vIOW8leWFpSBOb2RlLmpzIOeahOi3r+W+keaooee1hFxyXG5cclxuLy8g5aaC5p6c5pyq5L6G5pyJ5Zau542o5LiK5YKz5ZyW54mH55qE6ZyA5rGC77yM5Y+v5Lul5aGr5YWF6YCZ5YCL5Ye95pW4XHJcbi8vIOebruWJje+8jOWclueJh+iZleeQhuacg+aVtOWQiOWIsCBhZGRNZW51SXRlbSDkuK1cclxuZXhwb3J0IGNvbnN0IHVwbG9hZE1lbnVJbWFnZSA9IGFzeW5jIChib2R5KSA9PiB7XHJcbiAgICBjb25zb2xlLndhcm4oXCJ1cGxvYWRNZW51SW1hZ2Ug5Ye95pW455uu5YmN5pyq5a+m5L2c77yM5ZyW54mH6JmV55CG5bey5pW05ZCI5YiwIGFkZE1lbnVJdGVt44CCXCIpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG4vKipcclxuICog566h55CG5ZOh5paw5aKe6I+c5Zau6aCF55uuXHJcbiAqIOaOpeaUtiBGb3JtRGF0YSDnianku7bvvIzomZXnkIblnJbniYfkuIrlgrPkuKblsIfoj5zllq7os4foqIrlrZjlhaXos4fmlpnluqvjgIJcclxuICogQHBhcmFtIHtGb3JtRGF0YX0gZm9ybURhdGEgLSDljIXlkKvoj5zllq7lkI3nqLHjgIHlg7nmoLzlkozlnJbniYfmqpTmoYjnmoQgRm9ybURhdGEg54mp5Lu244CCXHJcbiAqIEByZXR1cm5zIHtQcm9taXNlPHsgc3VjY2VzczogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nLCBkYXRhPzogYW55IH0+fVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGFkZE1lbnVJdGVtID0gYXN5bmMgKGZvcm1EYXRhKSA9PiB7XHJcbiAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldCgnbmFtZScpO1xyXG4gIGNvbnN0IHByaWNlID0gZm9ybURhdGEuZ2V0KCdwcmljZScpO1xyXG4gIGNvbnN0IGltYWdlRmlsZSA9IGZvcm1EYXRhLmdldCgnaW1hZ2UnKTsgLy8g542y5Y+WIEZpbGUg54mp5Lu2XHJcblxyXG4gIC8vIDEuIOaVuOaTmumpl+itiVxyXG4gIGlmICghbmFtZSB8fCB0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycgfHwgbmFtZS50cmltKCkgPT09ICcnKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ+iPnOWWruWQjeeoseaYr+W/heWhq+mgheOAgicgfTtcclxuICB9XHJcbiAgaWYgKCFwcmljZSB8fCBpc05hTihwYXJzZUZsb2F0KHByaWNlKSkgfHwgcGFyc2VGbG9hdChwcmljZSkgPD0gMCkge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICflg7nmoLzlv4XpoIjmmK/mnInmlYjnmoTmraPmlbjjgIInIH07XHJcbiAgfVxyXG4gIGlmICghKGltYWdlRmlsZSBpbnN0YW5jZW9mIEZpbGUpIHx8IGltYWdlRmlsZS5zaXplID09PSAwKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ+WclueJh+aqlOahiOaYr+W/heWhq+mgheOAgicgfTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICAvLyAyLiDomZXnkIblnJbniYflhLLlrZjliLAgcHVibGljIOizh+aWmeWkvlxyXG4gICAgLy8g54K65LqG6YG/5YWN5qqU5ZCN6KGd56qB77yM57Wm5ZyW54mH55Sf5oiQ5LiA5YCL5ZSv5LiA5qqU5ZCNXHJcbiAgICBjb25zdCBmaWxlRXh0ZW5zaW9uID0gcGF0aC5leHRuYW1lKGltYWdlRmlsZS5uYW1lKTsgLy8g542y5Y+W5Y6f5aeL5Ymv5qqU5ZCNXHJcbiAgICBjb25zdCB1bmlxdWVGaWxlTmFtZSA9IGAke0RhdGUubm93KCl9LSR7TWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIsIDgpfSR7ZmlsZUV4dGVuc2lvbn1gO1xyXG4gICAgXHJcbiAgICAvLyDlrprnvqnlnJbniYfkuIrlgrPnmoTnm67mqJnnm67pjITvvJovcHVibGljL3VwbG9hZHNcclxuICAgIC8vIHByb2Nlc3MuY3dkKCkg6L+U5ZueIE5vZGUuanMg6YCy56iL55qE55W25YmN5bel5L2c55uu6YyE77yI5Y2z5bCI5qGI5qC555uu6YyE77yJXHJcbiAgICBjb25zdCB1cGxvYWREaXIgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ3B1YmxpYycsICd1cGxvYWRzJyk7XHJcbiAgICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbih1cGxvYWREaXIsIHVuaXF1ZUZpbGVOYW1lKTsgLy8g5a6M5pW05qqU5qGI6Lev5b6RXHJcblxyXG4gICAgLy8g5qqi5p+l5Lim5Ym15bu65LiK5YKz55uu6YyEICjlpoLmnpwgJ3B1YmxpYy91cGxvYWRzJyDkuI3lrZjlnKgpXHJcbiAgICBhd2FpdCBmcy5ta2Rpcih1cGxvYWREaXIsIHsgcmVjdXJzaXZlOiB0cnVlIH0pO1xyXG5cclxuICAgIC8vIOWwh+WclueJh+aqlOahiOeahOe3qeihneWNgOWvq+WFpeejgeein1xyXG4gICAgY29uc3QgYnl0ZXMgPSBhd2FpdCBpbWFnZUZpbGUuYXJyYXlCdWZmZXIoKTsgLy8g5bCHIEZpbGUg54mp5Lu26L2J5o+b54K6IEFycmF5QnVmZmVyXHJcbiAgICBjb25zdCBidWZmZXIgPSBCdWZmZXIuZnJvbShieXRlcyk7IC8vIOWwhyBBcnJheUJ1ZmZlciDovYnmj5vngrogTm9kZS5qcyBCdWZmZXJcclxuICAgIGF3YWl0IGZzLndyaXRlRmlsZShmaWxlUGF0aCwgYnVmZmVyKTtcclxuXHJcbiAgICAvLyDlnJbniYfnmoTlhazplosgVVJMIOi3r+W+ke+8jOmAmeaYryBOZXh0LmpzIOacg+aPkOS+m+eahOi3r+W+kVxyXG4gICAgY29uc3QgaW1hZ2VVcmwgPSBgL3VwbG9hZHMvJHt1bmlxdWVGaWxlTmFtZX1gO1xyXG5cclxuICAgIC8vIDMuIOWwh+iPnOWWruizh+ioiuWtmOWFpeizh+aWmeW6q1xyXG4gICAgY29uc3QgbmV3TWVudUl0ZW0gPSBhd2FpdCBwcmlzbWEuTWVudUl0ZW0uY3JlYXRlKHsgLy8g5rOo5oSP77ya6YCZ6KOh5oeJ6Kmy5pivIE1lbnVJdGVtIOaooeWei1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtZTogbmFtZS50cmltKCksIC8vIOa4hemZpOWQjeeoseWJjeW+jOepuueZvVxyXG4gICAgICAgIHByaWNlOiBwYXJzZUZsb2F0KHByaWNlKSwgLy8g56K65L+d5YO55qC85piv5pW45a2X6aGe5Z6LXHJcbiAgICAgICAgaW1hZ2VVcmwsIC8vIOWtmOWEsuWclueJh+eahOebuOWwjei3r+W+kVxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gNC4g6L+U5Zue5oiQ5Yqf6KiK5oGvXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiAn6I+c5Zau5paw5aKe5oiQ5Yqf77yBJywgZGF0YTogbmV3TWVudUl0ZW0gfTtcclxuXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ+aWsOWinuiPnOWWruWkseaVlzonLCBlcnJvcik7XHJcblxyXG4gICAgLy8g6JmV55CGIFByaXNtYSDnibnlrprnmoTpjK/oqqTvvIzkvovlpoLlkI3nqLHph43opIcgKFAyMDAyKVxyXG4gICAgaWYgKGVycm9yLmNvZGUgPT09ICdQMjAwMicgJiYgZXJyb3IubWV0YT8udGFyZ2V0Py5pbmNsdWRlcygnbmFtZScpKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAn6I+c5Zau5ZCN56ix5bey5a2Y5Zyo77yM6KuL5L2/55So5LiN5ZCM55qE5ZCN56ix44CCJyB9O1xyXG4gICAgfVxyXG4gICAgLy8g5YW25LuW5LiA6Iis6Yyv6KqkXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogYOaWsOWinuiPnOWWruaZgueZvOeUn+mMr+iqpDogJHtlcnJvci5tZXNzYWdlIHx8ICfmnKrnn6XpjK/oqqQnfWAgfTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TWVudUl0ZW1zID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLy8gVE9ETzog6YCZ6KOh5pyq5L6G5pyD5a+m5L2c5Y+W5b6X5omA5pyJ6I+c5Zau55qE6YKP6LyvICjkvb/nlKggUHJpc21hKVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZWRpdE1lbnVJdGVtID0gYXN5bmMgKGJvZHksIG1lbnVJZCkgPT4ge1xyXG4gICAgLy8gVE9ETzog6YCZ6KOh5pyq5L6G5pyD5a+m5L2c57eo6Lyv6I+c5Zau55qE6YKP6LyvICjkvb/nlKggUHJpc21hKVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn07Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ5UkFrRmEifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/checkout/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CheckoutPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$order$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/order.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$d7d7f5__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:d7d7f5 [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function CheckoutPage() {
    _s();
    const [cart, setCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [menuItems, setMenuItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [specialRequests, setSpecialRequests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CheckoutPage.useEffect": ()=>{
            const sessionUser = sessionStorage.getItem("user");
            if (sessionUser) setUser(JSON.parse(sessionUser));
        }
    }["CheckoutPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CheckoutPage.useEffect": ()=>{
            const savedCart = sessionStorage.getItem("cart");
            if (savedCart) setCart(JSON.parse(savedCart));
            else window.location.href = "/";
            const fetchMenu = {
                "CheckoutPage.useEffect.fetchMenu": async ()=>{
                    try {
                        let data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$d7d7f5__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getMenuItems"])();
                        if (!data) {
                            const res = await fetch("/api/menu");
                            data = await res.json();
                        }
                        setMenuItems(data);
                    } catch  {
                        alert("取得菜單失敗");
                    }
                }
            }["CheckoutPage.useEffect.fetchMenu"];
            fetchMenu();
        }
    }["CheckoutPage.useEffect"], []);
    const getTotalPrice = ()=>cart.reduce((total, cartItem)=>{
            const menuItem = menuItems.find((item)=>item.id === cartItem.id);
            return total + (menuItem?.price || 0) * cartItem.quantity;
        }, 0);
    const handleSubmitOrder = async (e)=>{
        e.preventDefault();
        setIsSubmitting(true);
        if (!user) {
            alert("請先登入");
            setIsSubmitting(false);
            return;
        }
        try {
            const orderItems = cart.map((item)=>({
                    menuItemId: item.id,
                    quantity: item.quantity,
                    specialRequest: specialRequests[item.id] || ""
                }));
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$order$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addOrder"])({
                userId: user.id,
                orderItems
            });
            sessionStorage.removeItem("cart");
            window.location.href = "/orders";
        } catch (error) {
            alert(error.message || "送出訂單失敗");
            setIsSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold text-gray-800 mb-8 text-center",
                children: "確認訂單"
            }, void 0, false, {
                fileName: "[project]/app/checkout/page.jsx",
                lineNumber: 72,
                columnNumber: 13
            }, this),
            cart.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center text-gray-500 text-lg mt-20",
                children: "購物車目前是空的，請先選擇餐點。"
            }, void 0, false, {
                fileName: "[project]/app/checkout/page.jsx",
                lineNumber: 77,
                columnNumber: 17
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmitOrder,
                className: "max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-6 space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold text-gray-700",
                        children: "訂單明細"
                    }, void 0, false, {
                        fileName: "[project]/app/checkout/page.jsx",
                        lineNumber: 85,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "divide-y",
                        children: cart.map((cartItem)=>{
                            const menuItem = menuItems.find((item)=>item.id === cartItem.id);
                            if (!menuItem) return null;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "py-4 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-800 font-medium",
                                                children: [
                                                    menuItem.name,
                                                    " ×",
                                                    " ",
                                                    cartItem.quantity
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/checkout/page.jsx",
                                                lineNumber: 102,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-right font-semibold text-gray-700",
                                                children: [
                                                    "$",
                                                    (menuItem.price * cartItem.quantity).toFixed(2)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/checkout/page.jsx",
                                                lineNumber: 106,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/checkout/page.jsx",
                                        lineNumber: 101,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: `special-request-${cartItem.id}`,
                                                className: "block text-sm text-gray-500 mb-1",
                                                children: "備註（可選）"
                                            }, void 0, false, {
                                                fileName: "[project]/app/checkout/page.jsx",
                                                lineNumber: 115,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                id: `special-request-${cartItem.id}`,
                                                className: "w-full border rounded-md p-2 text-sm text-gray-700 focus:ring-2 focus:ring-blue-300 resize-none",
                                                rows: 2,
                                                placeholder: "例如：去冰、少糖...",
                                                value: specialRequests[cartItem.id] || "",
                                                onChange: (e)=>setSpecialRequests((prev)=>({
                                                            ...prev,
                                                            [cartItem.id]: e.target.value
                                                        }))
                                            }, void 0, false, {
                                                fileName: "[project]/app/checkout/page.jsx",
                                                lineNumber: 121,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/checkout/page.jsx",
                                        lineNumber: 114,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, cartItem.id, true, {
                                fileName: "[project]/app/checkout/page.jsx",
                                lineNumber: 97,
                                columnNumber: 33
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/checkout/page.jsx",
                        lineNumber: 89,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t pt-4 text-lg font-bold flex justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "總金額："
                            }, void 0, false, {
                                fileName: "[project]/app/checkout/page.jsx",
                                lineNumber: 145,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "$",
                                    getTotalPrice().toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/checkout/page.jsx",
                                lineNumber: 146,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/checkout/page.jsx",
                        lineNumber: 144,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: isSubmitting || cart.length === 0,
                        className: "w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-3 rounded-md shadow hover:opacity-90 disabled:bg-gray-400 transition duration-300",
                        children: isSubmitting ? "正在送出訂單..." : "送出訂單"
                    }, void 0, false, {
                        fileName: "[project]/app/checkout/page.jsx",
                        lineNumber: 149,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/checkout/page.jsx",
                lineNumber: 81,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/checkout/page.jsx",
        lineNumber: 71,
        columnNumber: 13
    }, this);
}
_s(CheckoutPage, "GasIW45Im0/KhIV98kyYEnWtkew=");
_c = CheckoutPage;
var _c;
__turbopack_context__.k.register(_c, "CheckoutPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_0e80fb04._.js.map