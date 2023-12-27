import { useRouter } from "next/router";

const Developer = () => {
  const router = useRouter();

  const id = router.query.id;
  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },

    { id: 2, name: "Vaibhav", role: "Backend Developer" },

    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];

  const showItem = (
    <div>
      {details[id].name} {details[id].role}
    </div>
  );
  return <h1>{showItem}</h1>;
};
export default Developer;
