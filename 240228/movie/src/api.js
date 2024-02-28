export async function getList(){
  let data = await fetch('http://learn.codeit.kr/api/film-reviews')
  let body = data.json();
  return body
}