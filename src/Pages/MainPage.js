import React from "react";
import styled, {keyframes} from "styled-components";

const Main = styled.div`

  width: 100vw;
  height: 100dvh;
  height: 100vh;
  background-image: url("https://cdn.pixabay.com/photo/2022/09/25/15/16/bee-7478585_1280.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`

const Shaking = keyframes`

  0% {
    transform: translateX(0)
  }
  25% {
    transform: translateX(5px)
  }
  50% {
    transform: translateX(-5px)
  }
  75% {
    transform: translateX(5px)
  }
  100% {
    transform: translateX(0)
  }

`

const Template = styled.div`

  width: 20vw;
  height: 60vh;
  background: transparent;
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, .4);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 30px;



`

const Bee = styled.div`

  width: 6vw;
  height: 12vh;
  background-image: url("https://cdn.pixabay.com/photo/2022/12/07/09/53/bee-7640720_1280.png");
  background-size: 5vw;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

`

const LoginBox = styled.div`

  width: 100%;
  height: 55%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`

const SubmitBox = styled.div`

  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const line = keyframes`

  0% {
    border: 2px solid black;
  }

  100% {
    border: 2px solid #FFC50E;
  }

`

const Login = styled.input`

  width: 80%;
  height: 20%;
  border: 1px solid rgba(255, 255, 255, .4);
  border-radius: 20px;
  margin: 1vh auto;
  font-size: 2rem;
  background: transparent;
  color: transparent;
  text-shadow: 0 0 0 white;
  
  &:focus {
    outline: none;
    pointer-events: none;
    animation: ${line} 0.5s forwards;
  }

`

const Password = styled.input`

  width: 80%;
  height: 20%;
  border: 1px solid rgba(255, 255, 255, .4);
  border-radius: 20px;
  margin: 1vh auto;
  font-size: 2rem;
  background: transparent;
  color: transparent;
  text-shadow: 0 0 0 white;

  &:focus {
    outline: none;
    animation: ${line} 0.5s forwards;
  }

`

const Text = styled.div`

  font-size: 2rem;
  color: white;
  padding-bottom: 3vh;
  cursor: default;

`

const Submit = styled.div`
  width: 50%;
  height: 70%;
  background-color: black;
  border-radius: 20px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
      &:active {
        animation: ${Shaking} 0.15s forwards;
      }

`;



const I = styled.i`

  font-size: 1rem;
  color: white;
  cursor: default;

`

function MainPage() {

    const [username, setUsername] = React.useState(""); // 아이디 상태
    const [password, setPassword] = React.useState(""); // 비밀번호 상태
    const [isLoggedIn, setIsLoggedIn] = React.useState(false); // 로그인 여부

    const handleSubmitClick = () => {
        // 입력된 아이디와 비밀번호를 검증하는 로직
        if (username === "1234" && password === "1234") {
            setIsLoggedIn(true); // 로그인 성공 시 상태 업데이트
        } else {

            if(username !== "1234") {

                alert("recheck your username.");

            } else {
                alert("recheck your password.");
            }

        }
    };

    if (isLoggedIn) {
        return (
        <div>

            user recognized.

        </div>
          // <LoggedPage/> 로그인된 이후 페이지를 제작

        );
    }

    return (

        <Main>

            <Template>

                <Bee/>
                <LoginBox>

                    <Text>

                        Login

                    </Text>

                    <I>UserName</I>
                    <Login
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <I>PassWord</I>
                    <Password
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                </LoginBox>

                <SubmitBox>
                    <Submit isLoggedIn={isLoggedIn} onClick={handleSubmitClick}>
                        Submit
                    </Submit>
                </SubmitBox>


            </Template>

        </Main>

    );
}

export default MainPage;
