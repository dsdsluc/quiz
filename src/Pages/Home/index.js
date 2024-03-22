import { Col, Row } from 'antd';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { topicList } from '../../services/topics.services';
import "./styles.scss"
function Home (){
    let [topics, setTopics] = useState([]);
    useEffect(()=>{
       const fetchApi = async ()=>{
            const response = await topicList();
            setTopics(response.topics)
       }
       fetchApi()
    },[])


    
    return(
        <>
            <Row gutter={[12,12]}>
                {topics.map((item,index)=>{
                    return(                      
                            <Col xs={12} key={index}>
                                <div className='topic-item'>
                                    <div className='topic-item__title'>
                                        <Link to={`/topics/${item._id}`}>{item.name}</Link>
                                    </div>
                                </div>

                            </Col>
                    )
                })}
                
            </Row>
        </>
    )
}
export default Home