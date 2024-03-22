import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { getListQuestion } from "../../services/questions";
import ListQuestionButton from "../../Components/ListQuestionButton";
import { useSelector } from "react-redux";
import "./style.scss"

function LayoutTopics() {
  const idTopic = useParams().idTopic;
  const [questions, setQuestions] = useState([]);
  const index = useSelector(state=>state.questionItemReducers)

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getListQuestion(idTopic);
      setQuestions(response.questions);
    };
    fetchApi();
  }, [idTopic]);
  return (
    <>
      {questions && (
        <div>
          <div className="slider">
            <ListQuestionButton questions={questions} topicId={idTopic} index={index} />
          </div>
          <div className="content">
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
}
export default LayoutTopics;
