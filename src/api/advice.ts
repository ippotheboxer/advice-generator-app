import axios from "axios";

export async function getAdvice() {
    return await axios.get("https://api.adviceslip.com/advice");
}