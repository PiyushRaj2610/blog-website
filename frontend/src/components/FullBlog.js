import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Appbar from "./Appbar";
import { Avatar } from "./BlogCard";
const FullBlog = ({ blog }) => {
    return (_jsxs("div", { className: "bg-black h-screen w-full", children: [_jsx(Appbar, {}), _jsx("div", { className: "flex justify-center pt-[100px]", children: _jsxs("div", { className: 'grid grid-cols-12 px-10 w-full max-w-screen-xl pt-12', children: [_jsxs("div", { className: 'col-span-8', children: [_jsx("div", { className: "text-5xl text-[#d5d5d5] font-extrabold", children: blog.title }), _jsx("div", { className: "text-slate-600 pt-2", children: "Post on 10th March 2025" }), _jsx("div", { className: "pt-4 text-2xl text-[#bfbfbf]", children: blog.content })] }), _jsxs("div", { className: 'col-span-4 pl-5 text-white', children: [_jsx("span", { className: "font-mono", children: "Author" }), _jsxs("div", { className: "flex-col", children: [_jsxs("div", { className: " flex items-center text-[#afafaf]", children: [_jsx(Avatar, { name: blog.author.name || "Anonymous", size: 8 }), _jsx("div", { className: "text-2xl font-bold pl-2 flex items-center pt-1 tracking-wide", children: (blog.author.name).toUpperCase() || "Anonymous" })] }), _jsx("div", { className: "pt-2 text-[18px] text-slate-400 font-mono leading-6", children: "This is about writer" })] })] })] }) })] }));
};
export default FullBlog;
