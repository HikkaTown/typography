export const callbackOrder = (data, thansk, error) => {
  fetch("/api/callback", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (res.status === 200) {
      thansk();
    } else {
      error();
    }
  });
};
