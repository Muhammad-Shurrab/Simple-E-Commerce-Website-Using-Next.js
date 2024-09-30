import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <div className="bg-black">
        <h1 className="text-center text-red-600">Page - Not Found!</h1>

        <div>
          <Link href="/">Go back to Home</Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
