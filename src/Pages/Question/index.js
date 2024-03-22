import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getQuestions } from "../../services/questions";
import { Form, Radio, Button } from "antd";
import { questionsSelected } from "../../action/question";

function Question() {
  const questionId = useParams().idQuestion;
  const idTopic = useParams().idTopic
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const indexQuestion = useSelector((state) => state.questionItemReducers);

  const [question, setQuestion] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      const data = await getQuestions(questionId);
      setQuestion(data.question);
    };
    fetchApi();
  }, [indexQuestion]);
  
  const handleFinsh = (values)=>{

      const selectedIndex = values.selected;
      dispatch(questionsSelected(selectedIndex));
      navigate(`/topics/${idTopic}/answer/${questionId}`)
    
  }

  return (
    <>
      {question && (
        <div className="question-item" key={question._id}>
          <div className="question-title">
            Cau {indexQuestion + 1} : {question.question}
          </div>
          <div className="question-answer">
            <Form onFinish={handleFinsh}>
              <Form.Item name="selected">
                <Radio.Group>
                  {question.answers.map((item, index) => {
                    return (
                      <Radio value={index} key={index}>
                        {item}
                      </Radio>
                    );
                  })}
                </Radio.Group>
              </Form.Item>
              <Form.Item>
                <Button type="dashed" danger  htmlType="submit">
                  Kiểm tra
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      )}
    </>
  );
}
export default Question;
