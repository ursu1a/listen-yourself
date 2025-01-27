import fs from "fs";
import path from "path";

import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { doc, getDoc } from "firebase/firestore";
import { compareDesc } from "date-fns";

import { db } from "./firebase";

import axios from "@/lib/axios";
import { IPost } from "@/types";
import { calculateReadingTime } from "@/utils/functions";

const postsDirectory = path.join(process.cwd(), "content/posts");

// Receive views from Firebase for post by slug
const getDocViews = async (slug: string): Promise<number> => {
  const docRef = doc(db, "posts", slug);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data();

    return data.views || 1;
  }

  return 1;
};

// All posts
export const getAllPosts = async (): Promise<IPost[]> => {
  try {
    const fileNames = fs.readdirSync(postsDirectory);

    const posts = fileNames.map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      const readTime = calculateReadingTime(content);

      return {
        slug,
        ...data,
        readTime: readTime,
      } as IPost;
    });

    return posts.sort((a, b) =>
      compareDesc(new Date(a.date), new Date(b.date)),
    );
  } catch (error) {
    /* eslint-disable no-console */
    console.error(error);

    return [];
  }
};

// Post details
export const getPostBySlug = async (slug: string): Promise<IPost | null> => {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const processedContent = await remark().use(html).process(content);
    const htmlContent = processedContent.toString();
    const docViews = await getDocViews(slug);
    const readTime = calculateReadingTime(htmlContent);

    return {
      slug,
      content: htmlContent,
      ...data,
      views: docViews,
      readTime: readTime,
    } as IPost;
  } catch (error) {
    /* eslint-disable no-console */
    console.error(error);

    return null;
  }
};

// Increment post views count
export const incrementViews = async (slug: string) => {
  try {
    await axios.post("/api/views", { slug });
  } catch (error) {
    console.error("Update views error: ", error);
  }
};
