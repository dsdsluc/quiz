import { get } from "../utils/request";

export const getQuestions = async (id) => {
      const result = await get(`questions/${id}`);
      return result;
 
};

export const getListQuestion = async(idTopics)=>{
  const result = await get(`topics/${idTopics}`);

  return result
}