import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { apiGetNoticeDetail } from "./api";

export default function Detail() {
  const { id } = useParams();
  const { data } = useQuery(["getDetail", id], apiGetNoticeDetail);
  return (
    <div className="w-full flex justify-center py-16">
      <div className="max-w-5xl w-full flex flex-col gap-4 ">
        <div>자세히보기</div>
        <div>{data?.data?.title}</div>
        <div>{data?.data?.writer}</div>
        <div>{data?.data?.createdAt}</div>
        <div>{data?.data?.description}</div>
        <div className="flex gap-4 text-white ">
          <Link to={`/${id}/edit`} state={data?.data}>
            <button className="bg-green-500 px-4 py-2">수정</button>
          </Link>
          <button className="bg-red-500">삭제</button>
        </div>
      </div>
    </div>
  );
}
