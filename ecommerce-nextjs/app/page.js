import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4">
        <h1>Hello word</h1>
        <p>This is a content to make our page longer</p>

        <p>Lorem Ipsum is simply dummy text ...</p>

        <Link href="/products">See All Fighters</Link>
      </div>
    </>
  );
}
