module.exports = {

"[project]/app/actions/order.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
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
}}),
"[project]/app/actions/data:fa81e7 [app-ssr] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"7fc3477b1d6d7c39f584eda12d7e392d9b0c666788":"addNotification"},"app/actions/notification.js",""] */ __turbopack_context__.s({
    "addNotification": (()=>addNotification)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var addNotification = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("7fc3477b1d6d7c39f584eda12d7e392d9b0c666788", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "addNotification"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbm90aWZpY2F0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGFwcC9hY3Rpb25zL25vdGlmaWNhdGlvbi5qcyAo5L+u5q2j5b6MKVxyXG5cInVzZSBzZXJ2ZXJcIjsgLy8g4pyoIOW/hemgiOaciemAmeihjO+8jOWwh+WFtuaomeiomOeCuiBTZXJ2ZXIgQWN0aW9uc1xyXG5cclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnQC9saWIvcHJpc21hJzsgLy8g4pyoIOWwjuWFpeWFt+WQjeWwjuWHuueahCBwcmlzbWEg5a6i5oi256uvXHJcblxyXG5leHBvcnQgY29uc3QgYWRkTm90aWZpY2F0aW9uID0gYXN5bmMgKGJvZHksIHVzZXJJZCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyDinKgg6YCZ6KOh5oeJ6Kmy5piv5re75Yqg6YCa55+l5Yiw6LOH5paZ5bqr55qE6YKP6LyvXHJcbiAgICAgICAgaWYgKCF1c2VySWQgfHwgIWJvZHkgfHwgIWJvZHkubWVzc2FnZSB8fCAhYm9keS5vcmRlcklkIHx8ICFib2R5LnRpdGxlIHx8ICFib2R5LnR5cGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBub3RpZmljYXRpb24gZGF0YSBvciB1c2VySWQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBuZXdOb3RpZmljYXRpb24gPSBhd2FpdCBwcmlzbWEubm90aWZpY2F0aW9uLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHVzZXJJZDogdXNlcklkLFxyXG4gICAgICAgICAgICAgICAgb3JkZXJJZDogYm9keS5vcmRlcklkLCAvLyDlgYfoqK0gYm9keSDljIXlkKsgb3JkZXJJZFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYm9keS5tZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgLy8g5YW25LuW5qyE5L2N5aaCIGlzUmVhZCDmnIPmnIkgZGVmYXVsdCDlgLxcclxuICAgICAgICAgICAgICAgIC8vIHRpdGxlIOWSjCB0eXBlIOmcgOimgeWcqOS9oOeahCBOb3RpZmljYXRpb24gbW9kZWwg5Lit5a6a576p5oiW6JmV55CGXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBub3RpZmljYXRpb246IG5ld05vdGlmaWNhdGlvbiB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGFkZCBub3RpZmljYXRpb24gKFNlcnZlciBBY3Rpb24pOlwiLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyTm90aWZpY2F0aW9uID0gYXN5bmMgKHVzZXJJZCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyDinKgg6YCZ6KOh5oeJ6Kmy5piv5b6e6LOH5paZ5bqr542y5Y+W5L2/55So6ICF6YCa55+l55qE6YKP6LyvXHJcbiAgICAgICAgaWYgKCF1c2VySWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVXNlciBJRCBpcyByZXF1aXJlZCBmb3IgZmV0Y2hpbmcgbm90aWZpY2F0aW9ucy5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG5vdGlmaWNhdGlvbnMgPSBhd2FpdCBwcmlzbWEubm90aWZpY2F0aW9uLmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgdXNlcklkOiB1c2VySWQgfSxcclxuICAgICAgICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6ICdkZXNjJyB9LCAvLyDmjInmnIDmlrDmjpLluo9cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbm90aWZpY2F0aW9ucztcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBnZXQgdXNlciBub3RpZmljYXRpb25zIChTZXJ2ZXIgQWN0aW9uKTpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IGVycm9yOiBlcnJvci5tZXNzYWdlIH07IC8vIOi/lOWbnumMr+iqpOioiuaBr++8jOS7peS+v+WJjeerr+iZleeQhlxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZU5vdGlmaWNhdGlvbiA9IGFzeW5jIChub3RpZmljYXRpb25JZCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyDinKgg6YCZ6KOh5oeJ6Kmy5piv5b6e6LOH5paZ5bqr5Yiq6Zmk6YCa55+l55qE6YKP6LyvXHJcbiAgICAgICAgaWYgKCFub3RpZmljYXRpb25JZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3RpZmljYXRpb24gSUQgaXMgcmVxdWlyZWQgZm9yIGRlbGV0aW5nLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXdhaXQgcHJpc21hLm5vdGlmaWNhdGlvbi5kZWxldGUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogbm90aWZpY2F0aW9uSWQgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZGVsZXRlIG5vdGlmaWNhdGlvbiAoU2VydmVyIEFjdGlvbik6XCIsIGVycm9yKTtcclxuICAgICAgICAvLyDlpoLmnpzmmK/mib7kuI3liLDpgJrnn6XnmoTpjK/oqqTvvIzlj6/ku6Xmm7Tnsr7norrlnLDomZXnkIZcclxuICAgICAgICBpZiAoZXJyb3IuY29kZSA9PT0gJ1AyMDI1Jykge1xyXG4gICAgICAgICAgICByZXR1cm4geyBlcnJvcjogXCJOb3RpZmljYXRpb24gbm90IGZvdW5kLlwiIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn07Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJvU0FLYSJ9
}}),
"[project]/app/orders/pending/page.jsx [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const e = new Error(`Could not parse module '[project]/app/orders/pending/page.jsx'

Expression expected`);
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),

};

//# sourceMappingURL=app_c8b5f9eb._.js.map