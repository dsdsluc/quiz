import { get } from "../utils/request";

export const topicList =async()=>{
    
    const result = await get("");
    return result;
}