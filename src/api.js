const BASE_URL = process.env.REACT_APP_BASE_URL;

// 글 자세히보기

export async function apiGetNoticeDetail(props) {
  const id = props.queryKey[1];
  try {
    return await fetch(`${BASE_URL}/notice/${id}`).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}

// 글 목록불러오기
export async function apiGetNoticeList() {
  try {
    return await fetch(`${BASE_URL}/notice`).then((res) => res.json());
  } catch (e) {
    console.log(e);
  }
  return;
}

// 글 작성하기
export async function apiPostNoticeWrite(formData) {
  try {
    // console.log("API", formData);
    return await fetch(`${BASE_URL}/notice/write`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}

// 공지사항 업데이트
export async function apiPostNoticeUpdate(props) {
  const { formData, id } = props;

  try {
    return await fetch(`${BASE_URL}/notice/${id}/edit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}

// 공지사항 삭제
export async function apiPostNoticeDelete(id) {
  try {
    return await fetch(`${BASE_URL}/notice/${id}/delete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}

// 회원가입하기
export async function apiPostRegister(data) {
  console.log(data);
  try {
    return await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}
