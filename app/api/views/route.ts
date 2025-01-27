import { doc, runTransaction } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

import { db } from "@/lib/firebase";

export async function POST(req: NextRequest) {
  const { slug } = await req.json();

  if (!slug) {
    return NextResponse.json({ error: "Slug is required" }, { status: 400 });
  }

  try {
    const postRef = doc(db, "posts", slug);

    await runTransaction(db, async (transaction) => {
      const postDoc = await transaction.get(postRef);

      if (!postDoc.exists()) {
        transaction.set(postRef, { views: 1 });
      } else {
        const currentViews = postDoc.data().views || 0;

        transaction.update(postRef, { views: currentViews + 1 });
      }
    });

    return NextResponse.json({ success: true, message: "Views updated" });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error updating views:", error);

    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 },
    );
  }
}
