// import { apiGetUser } from "../api";
import useUser from "../components/useUser";
export default function Profile() {
  const data = useUser();
  console.log(data);
  return (
    <div className="w-full flex justify-center py-16">
      <div className="flex flex-col gap-5">
        <div>Username : {data?.user.username}</div>
        <div>Email : {data?.user.email}</div>
        <div className="size-14 rounded-full overflow-hidden">
          <img src={data?.user.profileImage} alt="profileImage" />
        </div>
      </div>
    </div>
  );
}
