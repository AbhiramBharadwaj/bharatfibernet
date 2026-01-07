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

export default async function KnowledgePost({ params }) {
  const { slug } = params;
  const client = await clientPromise;
  const collection = client.db(DB_NAME).collection(COLLECTION);

  let post = await collection.findOne({ slug });
  if (!post && ObjectId.isValid(slug)) {
    post = await collection.findOne({ _id: new ObjectId(slug) });
  }

  if (!post) {
    notFound();
  }

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
              <p style={{ fontSize: "1.05rem", lineHeight: "1.9", color: "#333" }}>
                {post.content || post.excerpt}
              </p>
            </div>
          </div>
        </div>
      </section>
    </NextLayout>
  );
}
