import Axios from "axios";

const fetch = () => {
  Axios.get("https://schedule.hololive.tv/api/list")
    .then((response) => {
      let data = response.data;
      console.log(data.dateGroupList[0].videoList);
      return data.dateGroupList[0].videoList;
    })
    .catch((error) => {
      console.log(error);
    });
};
