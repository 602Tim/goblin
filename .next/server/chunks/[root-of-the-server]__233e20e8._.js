module.exports = {

"[project]/.next-internal/server/app/api/order/[orderId]/status/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/app/api/order/[orderId]/status/route.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const { orderId } = params;
const { status, paymentStatus } = await req.json();
if (!orderId) {
    return new Response("缺少訂單 ID", {
        status: 400
    });
}
try {
    const order = await prisma.order.findUnique({
        where: {
            id: orderId
        }
    });
    if (!order) {
        return new Response("找不到訂單", {
            status: 404
        });
    }
    const data = {};
    // ✅ 如果沒帶 status，但廚師可能只是想標記 completedAt
    if (!status && order.status === "PREPARING" && order.completedAt === null) {
        data.completedAt = new Date();
    }
    if (status) data.status = status;
    if (paymentStatus !== undefined) data.paymentStatus = paymentStatus;
    if (status === "COMPLETED") data.completedAt = new Date();
    // ✅ 若要轉成 READY，先檢查是否付款、製作完成
    if (status === "READY") {
        if (order.status !== "PREPARING") {
            return new Response("狀態必須為 PREPARING 才能轉為 READY", {
                status: 400
            });
        }
        if (!order.paymentStatus && paymentStatus !== true) {
            return new Response("尚未確認付款，不能轉為 READY", {
                status: 400
            });
        }
        const isMarkedDone = order.completedAt !== null || data.completedAt !== undefined;
        if (!isMarkedDone) {
            return new Response("尚未完成製作，不能轉為 READY", {
                status: 400
            });
        }
    }
    const updated = await prisma.order.update({
        where: {
            id: orderId
        },
        data
    });
    // ✅ 發送 MQTT 通知
    if (status === "READY" || status === "COMPLETED") {
        const mqtt = await getMqttClient();
        const topic = status === "READY" ? getKitchenReadyOrderTopic(order.customerId) : getStaffCompletedOrderTopic(order.customerId);
        const payload = JSON.stringify({
            orderId,
            status
        });
        mqtt.publish(topic, payload, {
            qos: 1
        }, (err)=>{
            if (err) {
                console.error("❌ 發送 MQTT 通知失敗:", err);
            } else {
                console.log(`📢 已發送 ${status} 狀態通知至 ${topic}`);
            }
        });
    }
    return NextResponse.json(updated);
} catch (err) {
    console.error("❌ 更新訂單狀態失敗:", err);
    return new Response("伺服器錯誤", {
        status: 500
    });
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__233e20e8._.js.map