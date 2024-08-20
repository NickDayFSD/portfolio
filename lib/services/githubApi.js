export const fetchNick = async () => {
  const user = await fetch(process.env.NICK_GIT_URL);
  const json = await user.json();
  return json;
};