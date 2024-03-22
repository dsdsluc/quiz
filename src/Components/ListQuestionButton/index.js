import { Button  } from "antd";
import { useNavigate } from "react-router-dom"

import "./style.scss"
import { useDispatch, useSelector } from "react-redux";
import { questionItem, questionItemId } from "../../action/question";

function ListQuestionButton(props) {
  const indexQuestion = useSelector(state=>state.questionItemReducers);

  const {questions , topicId} = props;

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleClick = (id,index) =>{

    dispatch(questionItem(index));

    navigate(`/topics/${topicId}/question/${id}`);
  }
  
  return (
    <>
      <div className="box-questions">
        {questions.map((item, index) => {
          return (
            <div key={item._id} className="box-questions__item">
              <Button type={indexQuestion === index ? ("primary"):("")} onClick={()=> handleClick(item._id,index) }>
                Cau {index + 1}
              </Button>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default ListQuestionButton;
