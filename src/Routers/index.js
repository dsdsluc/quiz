import QuestionComponent from "../Components/QuestionComponent";
import Answer from "../Pages/Answer";
import Home from "../Pages/Home";
import LayoutDefault from "../Pages/Layouts/index";
import LayoutTopics from "../Pages/Layouts/layoutTopics";
import Question from "../Pages/Question";



export const routes = [
    {
        path : "/",
        element : <LayoutDefault/>,
        children : [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/topics/:idTopic",
                element: <LayoutTopics/>,
                children: [
                    {
                        index: true,
                        element: <QuestionComponent/>
                    },{
                        path: "/topics/:idTopic/question/:idQuestion",
                        element: <Question/>

                    }
                    ,{
                        path: "/topics/:idTopic/answer/:idQuestion",
                        element: <Answer/>

                    }
                ]
            }
            
        ]
    }
]