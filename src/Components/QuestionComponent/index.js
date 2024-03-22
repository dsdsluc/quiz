import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getListQuestion } from "../../services/questions";
import { useDispatch } from "react-redux";

import { Form, Radio, Button } from "antd";
import { questionsSelected } from "../../action/question";

function QuestionComponent() {
  const idTopic = useParams().idTopic;
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [question, setQuestion] = useState();
  useEffect(() => {
    const fetchApi = async () => {
      const response = await getListQuestion(idTopic);
      setQuestion(response.questions[0]);
    };
    fetchApi();
  }, [idTopic]);

  const handleFinsh = (values)=>{

    const selectedIndex = values.selected;
    dispatch(questionsSelected(selectedIndex));
    navigate(`/topics/${idTopic}/answer/${question._id}`)
  
}
  

  return (
    <>
      {question &&
        <div className="question-item" key={question._id}>
        <div className="question-title">
          Cau 1 : {question.question}
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
    }
    </>
  );
}
export default QuestionComponent;
