import axios from "axios";

const splitEncryptedWord = (word: string) => {
  const letterEncripted: number[] = [];
  for (let i = 0; i < word.length; i++) {
    if (Number(word[i]) === 1) {
      letterEncripted.push(Number(word.slice(i, i + 3)));
      i = i + 2;
    } else {
      letterEncripted.push(Number(word.slice(i, i + 2)));
      i = i + 1;
    }
  }
  return letterEncripted;
};

const decrypt = (lettersEncrypted: Array<number>) => {
  const message = String.fromCodePoint(...lettersEncrypted);

  return message;
};

const challengeTwoResult = async () => {
  const { data } = await axios("https://codember.dev/encrypted.txt", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
    },
  });

  const messageEncrypted: Array<string> = data.split(" ");
  const decryptMessage: Array<string> = [];
  messageEncrypted.forEach((element) => {
    decryptMessage.push(decrypt(splitEncryptedWord(element)));
  });

  console.log(decryptMessage.join(" "));
};

challengeTwoResult();
