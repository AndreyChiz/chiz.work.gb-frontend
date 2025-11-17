import { useContext } from "react";

import { UIContext } from "../../../UIContext";

import WrapperBlog from "./WrapperBlog";
import BlogList from "./BlogList";



export default function Blog() {

    const blogContent = useContext(UIContext).blog


    return (
        <WrapperBlog title={blogContent.title}>
            <BlogList items={blogContent.blogItems} />
        </WrapperBlog>
    )
}