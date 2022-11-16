import axios from "axios";
const challengeOneResult = async () => {
  const { data } = await axios("https://codember.dev/users.txt", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
    },
  });

  const user = data
    .replace(/\n{2}/g, ",")
    .split(",")
    .map((e: string) => e.replace(/\n/g, " "))
    .map((e: string) => e.split(" "))
    .map((e: string[]) => e.map((e: string) => e.split(":")))
    .map((e: any) => {
      const ele = new Map(e);
      return Object.fromEntries(ele);
    });

  let countUser = 0;
  let lastUser = "";

  user.forEach(
    (element: {
      usr: string;
      eme: string;
      psw: string;
      age: string;
      loc: string;
      fll: string;
    }) => {
      if (
        element.usr !== undefined &&
        element.eme !== undefined &&
        element.psw !== undefined &&
        element.age !== undefined &&
        element.loc !== undefined &&
        element.fll !== undefined
      ) {
        countUser = countUser + 1;
        lastUser = element.usr;
      }
    }
  );
  console.log(countUser);
  console.log(lastUser);
};
challengeOneResult();
