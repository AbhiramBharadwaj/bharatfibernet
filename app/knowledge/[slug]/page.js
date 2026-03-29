import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { notFound } from "next/navigation";
import Link from "next/link";

const DB_NAME = "bharatfibernet";
const COLLECTION = "posts";

const formatDate = (value) => {
  if (!value) return "No date";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "No date";
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const isPublicPost = (post, now = new Date()) => {
  const status = post?.status || "published";
  if (status === "draft") return false;
  if (status === "scheduled") {
    const date = new Date(post?.date);
    if (Number.isNaN(date.getTime())) return false;
    return date <= now;
  }
  return true;
};

const escapeHtml = (value) =>
  String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

export default async function KnowledgePost({ params }) {
  const { slug } = params;
  const client = await clientPromise;
  const collection = client.db(DB_NAME).collection(COLLECTION);

  let post = await collection.findOne({ slug });
  if (!post && ObjectId.isValid(slug)) {
    post = await collection.findOne({ _id: new ObjectId(slug) });
  }

  if (!post || !isPublicPost(post)) {
    notFound();
  }

  const hasHtmlContent = /<\/?[a-z][\s\S]*>/i.test(post.content || "");
  const bodyHtml = hasHtmlContent
    ? post.content
    : `<p>${escapeHtml(post.content || post.excerpt || "")}</p>`;

  return (
    <NextLayout header={1} footer={1}>
      <Breadcrumb pageName={post.title} />
      <section className="section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div style={{ marginBottom: "2rem" }}>
                <Link
                  href="/knowledge"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "#1f7ae0",
                    fontWeight: 600,
                    textDecoration: "none",
                    marginBottom: "1rem",
                  }}
                >
                  <span aria-hidden="true">←</span>
                  Back to Knowledge
                </Link>
                <span
                  style={{
                    display: "inline-block",
                    padding: "0.35rem 0.85rem",
                    borderRadius: "999px",
                    background: "#f0f4ff",
                    color: "#1f7ae0",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.6px",
                  }}
                >
                  {post.category}
                </span>
                <h1 style={{ fontSize: "2.4rem", fontWeight: 700, marginTop: "1rem" }}>
                  {post.title}
                </h1>
                <p style={{ color: "#666" }}>{formatDate(post.date)}</p>
              </div>
              {post.image && (
                <div
                  style={{
                    height: "360px",
                    borderRadius: "16px",
                    backgroundImage: `url(${post.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    marginBottom: "2rem",
                  }}
                />
              )}
              <div
                className="knowledge-rich-content"
                style={{ fontSize: "1.05rem", lineHeight: "1.9", color: "#333" }}
                dangerouslySetInnerHTML={{ __html: bodyHtml }}
              />
            </div>
          </div>
        </div>
      </section>
      <style>{`
        .knowledge-rich-content p {
          margin: 0 0 1rem;
        }
        .knowledge-rich-content ul,
        .knowledge-rich-content ol {
          margin: 0.55rem 0 1rem;
          padding-left: 1.65rem;
        }
        .knowledge-rich-content ul {
          list-style: disc;
        }
        .knowledge-rich-content ol {
          list-style: decimal;
        }
        .knowledge-rich-content li {
          margin-bottom: 0.4rem;
        }
        .knowledge-rich-content h1,
        .knowledge-rich-content h2,
        .knowledge-rich-content h3 {
          margin: 0.7rem 0 0.85rem;
          line-height: 1.35;
          color: #111827;
        }
        .knowledge-rich-content a {
          color: #1d4ed8;
          text-decoration: underline;
        }
        .knowledge-rich-content .ql-size-small {
          font-size: 0.85em;
        }
        .knowledge-rich-content .ql-size-large {
          font-size: 1.35em;
        }
        .knowledge-rich-content .ql-size-huge {
          font-size: 1.8em;
        }
        .knowledge-rich-content .ql-font-serif {
          font-family: Georgia, "Times New Roman", serif;
        }
        .knowledge-rich-content .ql-font-monospace {
          font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
        }
      `}</style>
    </NextLayout>
  );
}
