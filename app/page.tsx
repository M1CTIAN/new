import Image from "next/image";
import Post from "../components/posts";
import data from "../data/data";

export default function Home() {
  return (
    <div style={{maxWidth: "700px",margin: "40px auto"}} className="">
      <h2>Nested Comments</h2>
      <Post post={data} />
    </div>
  );
}
