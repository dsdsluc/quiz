import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getQuestions } from "../../services/questions";
import { Form, Radio, Button } from "antd";
import "./style.scss";

function Answer() {
  const idQuestion = useParams().idQuestion;

  const selectedIndex = useSelector((state) => state.selectedReducer);

  const indexQuestion = useSelector((state) => state.questionItemReducers);

  const [question, setQuestion] = useState();
  useEffect(() => {
    const fetchApi = async () => {
      const response = await getQuestions(idQuestion);
      setQuestion(response.question);
    };
    fetchApi();
  }, []);

  const initialValues = {
    selected: selectedIndex,
  };

  return (
    <>
      {question && (
        <div className="question-item" key={question._id}>
          <div className="question-title">
            Cau {indexQuestion + 1} : {question.question}
          </div>
          <div className="question-answer">
            <Form initialValues={initialValues}>
              <Form.Item name="selected">
                <Radio.Group disabled={true}>
                  {question.answers.map((item, index) => {
                    console.log(question)
                    console.log(index)
                    return (
                      <Radio value={index} key={index}>
                        <div
                          className={
                            (parseInt(question.correctAnswer) === index ? "correct" : "")||
                            (selectedIndex === index ? "selected" : "") 
                          
                          }
                        >
                          {item}
                        </div>
                      </Radio>
                    );
                  })}
                </Radio.Group>
              </Form.Item>
              <Form.Item>
                <Button type="dashed" danger htmlType="submit">
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
export default Answer;
