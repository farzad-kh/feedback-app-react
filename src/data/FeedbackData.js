import axios from "axios";
const BASE_URL = "http://localhost:5000/feedbacks?_sort=id&_order=desc"

// get fetch data and export (axios.get)

const FeedbackData = async () => {
    const res = await axios.get(BASE_URL)
    console.log(res);
    return res.data
}
const postFeedbackData = async (newFeedback) => {
    const res = await axios.post(BASE_URL, newFeedback)


    return res.data
}
const deleteFeedbackData = async (id) => {
    let BASE_URL = "http://localhost:5000/feedbacks"
    const res = await axios.delete(`${BASE_URL}/${id}?_sort=id&_order=desc`)


    return res.data
}
const putFeedbackData = async (id, update) => {
    let BASE_URL = "http://localhost:5000/feedbacks"
    const res = await axios.put(`${BASE_URL}/${id}?_sort=id&_order=desc`, {
        ...update
    })


    return res.data
}







export { FeedbackData, postFeedbackData, deleteFeedbackData, putFeedbackData };