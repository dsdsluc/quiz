import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { getListQuestion } from "../../services/questions";
import ListQuestionButton from "../../Components/ListQuestionButton";
import Question from "../../Components/QuestionComponent";

function Topics() {
  const idTopic = useParams().idTopic;

  const [questions,setQuestions] = useState([]);

  useEffect(()=>{
    const fetchApi = async ()=>{
      const response = await getListQuestion(idTopic);
      console.log(response)
      setQuestions(response.questions);
    }
    fetchApi()
  },[idTopic])

  
  return (
    <>
      {questions && (
        <div className="main">
        <div className="slider">
          <ListQuestionButton questions={questions} topicId ={idTopic}  />
        </div>
        <div className="content">
          <Outlet/>
          <Question question={questions[0]}/>
        </div>
      </div>
      )}
    </>
  );
}
export default Topics;
