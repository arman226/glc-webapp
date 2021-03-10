import apiRequest from "../config";

export const getSample = () => {
  return apiRequest.get("todos");
};
