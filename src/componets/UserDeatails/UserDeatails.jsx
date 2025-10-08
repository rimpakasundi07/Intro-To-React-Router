import React from "react";
import { useLoaderData, useParams } from "react-router";

const UserDeatails = () => {
  const user = useLoaderData();

  const { userId } = useParams();
  console.log(userId);

  // const params = useParams;
  // console.log(params.userId);

  const { website, name } = user;
  return (
    <div>
      <h2>User Details here</h2>
      <h5>Name: {name}</h5>
      <p>Website:{website} </p>
    </div>
  );
};

export default UserDeatails;
