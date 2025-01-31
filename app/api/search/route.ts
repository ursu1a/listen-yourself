import fs from "fs";
import path from "path";

import { NextResponse } from "next/server";
import matter from "gray-matter";
import removeMd from "remove-markdown";

import { getSnippet, highlightMatch } from "@/utils/functions";

const contentPaths = [
  { path: "content/posts", urlPrefix: "/posts/" }, // Posts directory
];

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q")?.toLowerCase().trim();

  if (!query) return NextResponse.json([], { status: 400 });

  let results: { title: string; url: string; snippet: string }[] = [];

  for (const { path: folder, urlPrefix } of contentPaths) {
    const dirPath = path.join(process.cwd(), folder);

    if (!fs.existsSync(dirPath)) continue;

    const files = fs.readdirSync(dirPath);

    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const fileContent = fs.readFileSync(filePath, "utf8");

      const { data, content } = matter(fileContent);
      const slug = file.replace(/\.md$/, "");
      const title = data.title || slug;
      const cleanContent = removeMd(content);

      if (cleanContent.toLowerCase().includes(query)) {
        const snippet = getSnippet(cleanContent, query);

        results.push({
          title,
          url: `${urlPrefix}${slug}`,
          snippet: highlightMatch(snippet, query),
        });
      }
    }
  }

  return NextResponse.json(results);
}
