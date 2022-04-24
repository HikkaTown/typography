export const callbackOrder = ({ data }) => {
  fetch("/api/callback", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...data }),
  }).then((res) => {
    if (res.status === 200) {
      console.log("okey");
    } else {
      console.log("error");
    }
  });
};
