import Link from "next/link";

function Index() {
  return (
    <div>
      <ul>
        <Link href="/aboutus/0">
          <li>Yesh</li>
        </Link>
        <Link href="/aboutus/1">
          <li>Vaibhav</li>
        </Link>
        <Link href="/aboutus/2">
          <li>Suresh</li>
        </Link>
      </ul>
    </div>
  );
}
export default Index;
