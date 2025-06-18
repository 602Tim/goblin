(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/admin/menu/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>MenuManagementPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function MenuManagementPage() {
    _s();
    const [menuItems, setMenuItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isCreating, setIsCreating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newItem, setNewItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        description: "",
        price: 0,
        imageUrl: "",
        isAvailable: true
    });
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editItem, setEditItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MenuManagementPage.useEffect": ()=>{
            const getMenu = {
                "MenuManagementPage.useEffect.getMenu": async ()=>{
                    const response = await fetch("/api/menu");
                    if (!response.ok) {
                        alert("取得菜單失敗");
                        return;
                    }
                    const data = await response.json();
                    setMenuItems(data);
                }
            }["MenuManagementPage.useEffect.getMenu"];
            getMenu();
        }
    }["MenuManagementPage.useEffect"], []);
    const handleCreate = async (e)=>{
        e.preventDefault();
        try {
            const itemToSend = {
                ...newItem,
                price: parseFloat(newItem.price)
            };
            const response = await fetch("/api/menu", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(itemToSend)
            });
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText);
            }
            const data = await response.json();
            setMenuItems((prev)=>[
                    ...prev,
                    data
                ]);
            setNewItem({
                name: "",
                description: "",
                price: 0,
                imageUrl: "",
                isAvailable: true
            });
            setIsCreating(false);
        } catch (error) {
            console.error("發生錯誤:", error.message);
        }
    };
    const handleImageUpload = async ()=>{
        if (!imageFile) return;
        const formData = new FormData();
        formData.append("file", imageFile);
        try {
            const response = await fetch("/api/image/upload", {
                method: "POST",
                body: formData
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error || "圖片上傳失敗");
            }
            setImageUrl(data.url);
            setNewItem((prev)=>({
                    ...prev,
                    imageUrl: data.url
                }));
        } catch (err) {
            console.error("圖片上傳失敗:", err.message);
            return;
        }
    };
    const startEditing = (item)=>{
        setEditingId(item.id);
        setEditItem({
            name: item.name,
            description: item.description,
            price: item.price,
            imageUrl: item.imageUrl || "",
            isAvailable: item.isAvailable
        });
    };
    const handleEdit = async (menuId)=>{
        try {
            const updatedItemToSend = {
                ...editItem,
                price: parseFloat(editItem.price)
            };
            const response = await fetch(`/api/menu/${menuId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedItemToSend)
            });
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText);
            }
            const updatedItem = await response.json();
            setMenuItems((prev)=>prev.map((item)=>item.id === menuId ? updatedItem : item));
            setEditingId(null);
        } catch (error) {
            console.error("更新失敗:", error.message);
        }
    };
    const cancelEdit = ()=>{
        setEditingId(null);
        setEditItem({});
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-orange-100 via-pink-100 to-red-100 px-4 sm:px-8 py-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col sm:flex-row justify-between items-center mb-6 gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold text-gray-800 text-center sm:text-left",
                            children: "🍱 菜單管理"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/menu/page.jsx",
                            lineNumber: 144,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setNewItem({
                                    name: "",
                                    description: "",
                                    price: 0,
                                    imageUrl: "",
                                    isAvailable: true
                                });
                                setIsCreating(true);
                            },
                            className: "bg-gradient-to-r from-pink-500 to-red-500 text-white px-6 py-2 rounded-md shadow hover:opacity-90 transition w-full sm:w-auto",
                            children: "新增菜單"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/menu/page.jsx",
                            lineNumber: 147,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/menu/page.jsx",
                    lineNumber: 143,
                    columnNumber: 17
                }, this),
                isCreating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-6 rounded-lg shadow-lg mb-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold mb-4",
                            children: "新增餐點"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/menu/page.jsx",
                            lineNumber: 167,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleCreate,
                            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block mb-1 text-sm font-medium text-gray-700",
                                            children: "名稱"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/menu/page.jsx",
                                            lineNumber: 173,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: newItem.name,
                                            onChange: (e)=>setNewItem({
                                                    ...newItem,
                                                    name: e.target.value
                                                }),
                                            className: "w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-pink-400",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/menu/page.jsx",
                                            lineNumber: 176,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/menu/page.jsx",
                                    lineNumber: 172,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block mb-1 text-sm font-medium text-gray-700",
                                            children: "價格"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/menu/page.jsx",
                                            lineNumber: 191,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            value: newItem.price,
                                            onChange: (e)=>setNewItem({
                                                    ...newItem,
                                                    price: parseFloat(e.target.value)
                                                }),
                                            className: "w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-pink-400",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/menu/page.jsx",
                                            lineNumber: 194,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/menu/page.jsx",
                                    lineNumber: 190,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:col-span-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block mb-1 text-sm font-medium text-gray-700",
                                            children: "描述"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/menu/page.jsx",
                                            lineNumber: 209,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: newItem.description,
                                            onChange: (e)=>setNewItem({
                                                    ...newItem,
                                                    description: e.target.value
                                                }),
                                            className: "w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-pink-400"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/menu/page.jsx",
                                            lineNumber: 212,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/menu/page.jsx",
                                    lineNumber: 208,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:col-span-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block mb-1 text-sm font-medium text-gray-700",
                                            children: "圖片 URL"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/menu/page.jsx",
                                            lineNumber: 225,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: newItem.imageUrl || "",
                                            onChange: (e)=>setNewItem({
                                                    ...newItem,
                                                    imageUrl: e.target.value
                                                }),
                                            placeholder: "請輸入圖片網址",
                                            className: "w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-pink-400",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/menu/page.jsx",
                                            lineNumber: 228,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/menu/page.jsx",
                                    lineNumber: 224,
                                    columnNumber: 25
                                }, this),
                                newItem.imageUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:col-span-2 mt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600",
                                            children: "圖片預覽："
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/menu/page.jsx",
                                            lineNumber: 245,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: newItem.imageUrl,
                                            alt: "預覽",
                                            className: "mt-2 w-full max-h-64 object-contain rounded-lg border"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/menu/page.jsx",
                                            lineNumber: 246,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/menu/page.jsx",
                                    lineNumber: 244,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row gap-4 md:col-span-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded-md shadow hover:opacity-90 transition",
                                            children: "新增"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/menu/page.jsx",
                                            lineNumber: 255,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setIsCreating(false),
                                            className: "bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700",
                                            children: "取消"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/menu/page.jsx",
                                            lineNumber: 261,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/menu/page.jsx",
                                    lineNumber: 254,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/menu/page.jsx",
                            lineNumber: 168,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/menu/page.jsx",
                    lineNumber: 166,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: menuItems.map((item)=>editingId === item.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl shadow-lg p-5 relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-bold text-gray-800 mb-4",
                                    children: "編輯餐點"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/menu/page.jsx",
                                    lineNumber: 281,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: (e)=>{
                                        e.preventDefault();
                                        handleEdit(item.id);
                                    },
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block mb-1 ms-2 font-medium text-gray-700",
                                            children: "名稱"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/menu/page.jsx",
                                            lineNumber: 291,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: editItem.name,
                                            onChange: (e)=>setEditItem({
                                                    ...editItem,
                                                    name: e.target.value
                                                }),
                                            className: "w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-pink-400",
                                            required: true,
                                            placeholder: "名稱"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/menu/page.jsx",
                                            lineNumber: 294,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block mb-1 ms-2 font-medium text-gray-700",
                                            children: "價格"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/menu/page.jsx",
                                            lineNumber: 307,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            value: editItem.price,
                                            onChange: (e)=>setEditItem({
                                                    ...editItem,
                                                    price: parseFloat(e.target.value)
                                                }),
                                            className: "w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-pink-400",
                                            required: true,
                                            placeholder: "價格"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/menu/page.jsx",
                                            lineNumber: 310,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block mb-1 ms-2 font-medium text-gray-700",
                                            children: "敘述"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/menu/page.jsx",
                                            lineNumber: 325,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: editItem.description,
                                            onChange: (e)=>setEditItem({
                                                    ...editItem,
                                                    description: e.target.value
                                                }),
                                            className: "w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-pink-400",
                                            placeholder: "描述"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/menu/page.jsx",
                                            lineNumber: 328,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block mb-1 ms-2 font-medium text-gray-700",
                                            children: "圖片URL"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/menu/page.jsx",
                                            lineNumber: 339,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: editItem.imageUrl,
                                            onChange: (e)=>setEditItem({
                                                    ...editItem,
                                                    imageUrl: e.target.value
                                                }),
                                            className: "w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-pink-400",
                                            placeholder: "圖片 URL"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/menu/page.jsx",
                                            lineNumber: 342,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "inline-flex items-center space-x-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: editItem.isAvailable,
                                                    onChange: (e)=>setEditItem({
                                                            ...editItem,
                                                            isAvailable: e.target.checked
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/menu/page.jsx",
                                                    lineNumber: 355,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "供應中"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/menu/page.jsx",
                                                    lineNumber: 366,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/menu/page.jsx",
                                            lineNumber: 354,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    className: "bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded-md shadow hover:opacity-90 transition",
                                                    children: "儲存"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/menu/page.jsx",
                                                    lineNumber: 369,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: cancelEdit,
                                                    className: "bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700",
                                                    children: "取消"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/menu/page.jsx",
                                                    lineNumber: 375,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/menu/page.jsx",
                                            lineNumber: 368,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/menu/page.jsx",
                                    lineNumber: 284,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, item.id, true, {
                            fileName: "[project]/app/admin/menu/page.jsx",
                            lineNumber: 277,
                            columnNumber: 29
                        }, this) // 顯示模式的菜單卡片
                         : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl shadow-lg p-5 hover:shadow-xl transition relative",
                            children: [
                                item.imageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: item.imageUrl,
                                    alt: item.name,
                                    width: 400,
                                    height: 250,
                                    className: "rounded-md w-full h-48 object-cover mb-4"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/menu/page.jsx",
                                    lineNumber: 391,
                                    columnNumber: 37
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center items-center rounded-md w-full h-48 object-cover mb-4",
                                    children: "無圖片"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/menu/page.jsx",
                                    lineNumber: 399,
                                    columnNumber: 37
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-bold text-gray-800 mb-1",
                                    children: item.name
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/menu/page.jsx",
                                    lineNumber: 404,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-600 mb-2 line-clamp-3",
                                    children: item.description
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/menu/page.jsx",
                                    lineNumber: 407,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap justify-between items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-pink-600 font-semibold text-lg",
                                            children: [
                                                "$",
                                                item.price.toFixed(2)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/menu/page.jsx",
                                            lineNumber: 411,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-xs px-2 py-1 rounded-full font-medium ${item.isAvailable ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`,
                                            children: item.isAvailable ? "供應中" : "已下架"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/menu/page.jsx",
                                            lineNumber: 414,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/menu/page.jsx",
                                    lineNumber: 410,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>startEditing(item),
                                    className: "absolute top-3 right-3 px-3 py-1.5 bg-gradient-to-r from-pink-500 to-red-600 text-white text-sm rounded-lg shadow-md hover:from-pink-600 hover:to-red-700 hover:shadow-lg transition duration-300 ease-in-out",
                                    children: "編輯"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/menu/page.jsx",
                                    lineNumber: 424,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, item.id, true, {
                            fileName: "[project]/app/admin/menu/page.jsx",
                            lineNumber: 386,
                            columnNumber: 29
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/admin/menu/page.jsx",
                    lineNumber: 274,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/menu/page.jsx",
            lineNumber: 142,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/admin/menu/page.jsx",
        lineNumber: 141,
        columnNumber: 9
    }, this);
}
_s(MenuManagementPage, "vYZZB0NBV+1TVT0uanemT1NuHPQ=");
_c = MenuManagementPage;
var _c;
__turbopack_context__.k.register(_c, "MenuManagementPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_admin_menu_page_jsx_eee5a824._.js.map