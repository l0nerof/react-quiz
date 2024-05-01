import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinalScreen from "./FinalScreen";
import Timer from "./Timer";
import Footer from "./Footer";
import { useQuiz } from "../contexts/QuizContext";

export default function App() {
  const { status, answer } = useQuiz();

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Footer>
              <Question />

              <Timer />

              {answer !== null && <NextButton />}
            </Footer>
          </>
        )}
        {status === "finished" && <FinalScreen />}
      </Main>
    </div>
  );
}
