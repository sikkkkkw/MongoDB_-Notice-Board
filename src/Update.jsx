import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { apiPostNoticeUpdate } from "./api";
import { useLocation, useNavigate } from "react-router-dom";

export default function Update() {
  const {
    state: { title, writer, description, _id: id },
  } = useLocation();
  // 리스트 폴더로 이동
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // 중괄호가 나오면 객체가 나옴
    defaultValues: {
      title,
      writer,
      description,
    },
  });

  const { mutate, isLoading } = useMutation(apiPostNoticeUpdate, {
    onSuccess: (data) => {
      console.log(data);

      //리스트 페이지로 이동
      navigate(`/${id}`);
    },
  });
  const onSubmit = (formData) => {
    mutate({ formData, id });
  };
  return (
    <div className="w-full flex justify-center py-16">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-7xl w-full flex flex-col space-y-4"
      >
        <input
          {...register("title", {
            required: "제목은 필수 입력요소입니다.",
          })}
          className="py-1 px-2 border"
          type="text"
          placeholder="title"
        />
        {errors?.title?.message && (
          <div className="text-red-500 text-sm px-2 ">
            {errors?.title?.message}
          </div>
        )}

        <input
          {...register("writer", {
            required: "글쓴이는 필수 입력요소입니다.",
          })}
          className="py-1 px-2 border"
          type="text"
          placeholder="writer"
        />
        {errors?.writer?.message && (
          <div className="text-red-500 text-sm px-2 ">
            {errors?.writer?.message}
          </div>
        )}
        <textarea
          rows="10"
          className="py-1 px-2 border"
          type="text"
          placeholder="description"
          {...register("description", {
            required: "내용은 필수 입력요소입니다.",
            minLength: {
              value: 5,
              message: "내용은 최소 5글자 이상이어야 합니다.",
            },
          })}
        ></textarea>
        {errors?.description?.message && (
          <div className="text-red-500 text-sm px-2 ">
            {errors?.description?.message}
          </div>
        )}

        <button
          disabled={isLoading}
          type="submit"
          className="py-1 bg-red-500 text-white"
        >
          글쓰기
        </button>
      </form>
    </div>
  );
}
