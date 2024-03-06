import { Link } from "react-router-dom";
import Button from "../components/Button";
import InputBox from "../components/InputBox";
import Socials from "../components/Socials";

export default function SignUp() {
  return (
    <div className="w-full flex justify-center py-16">
      <div className="max-w-screen-sm w-full flex flex-col gap-8 px-4">
        {/* 회원가입 타이틀 */}
        <div className="flex flex-col gap-2">
          <div className="w-full text-center text-2xl font-bold">회원가입</div>
          <div className="w-full text-center text-sm text-neutral-600">
            회원가입이 되어 있다면 <Link to="/users/login">로그인</Link>
          </div>
        </div>
        {/* 회원가입 Form 영역 */}
        <div className="flex flex-col gap-4">
          {/* 아이디 */}
          <InputBox name="username" type="text" placeholder="아이디" />
          {/* 이메일 */}
          <InputBox name="email" type="email" placeholder="이메일" />
          {/* 비밀번호 */}
          <InputBox name="password" type="password" placeholder="패스워드" />
          {/* 비밀번호 확인 */}
          <InputBox
            name="password2"
            type="password"
            placeholder="패스워드 확인"
          />
          {/* 버튼 */}
          <Button type="submit" text="회원가입" />
        </div>
        {/* 소셜 로그인 */}
        <Socials />
      </div>
    </div>
  );
}
