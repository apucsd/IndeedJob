export const addToDb = (title) => {
  console.log(title);
  let jobs = {};
  const appliedJobs = localStorage.getItem("apply-job");
  if (appliedJobs) {
    jobs = JSON.parse(appliedJobs);
  }

  const quantity = jobs[title];
  if (quantity) {
    const newQuantity = quantity + 1;
    jobs[title] = newQuantity;
  } else {
    jobs[title] = 1;
  }

  localStorage.setItem("apply-job", JSON.stringify(jobs));
};
